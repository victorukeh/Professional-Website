/**
 * aurora.js — persistent atmospheric background canvas.
 *
 * A fullscreen WebGL quad running a warped-noise fragment shader. Two
 * "mood" colors mix based on scroll-driven state, with a soft light that
 * follows the cursor. Renders at 85% of display resolution and interpolates
 * to keep the fill rate cheap.
 *
 * Public API:
 *   HeroAurora.create({ canvas, colorA, colorB, opacity })
 *     → { setColors(colors, durationMs), setCursor(x, y), setOpacity(o),
 *         pause(), resume(), destroy() }
 */
(function (global) {
  "use strict";

  const VS = [
    "attribute vec2 aPos;",
    "varying vec2 vUv;",
    "void main() {",
    "  vUv = aPos * 0.5 + 0.5;",
    "  gl_Position = vec4(aPos, 0.0, 1.0);",
    "}",
  ].join("\n");

  const FS = [
    "precision mediump float;",
    "uniform vec2 uResolution;",
    "uniform float uTime;",
    "uniform vec2 uCursor;",
    "uniform vec3 uColorA;",
    "uniform vec3 uColorB;",
    "uniform float uOpacity;",
    "uniform float uCursorStrength;",
    "varying vec2 vUv;",
    "",
    "float hash(vec2 p) {",
    "  p = fract(p * vec2(234.34, 435.21));",
    "  p += dot(p, p + 45.32);",
    "  return fract(p.x * p.y);",
    "}",
    "",
    "float noise(vec2 p) {",
    "  vec2 i = floor(p);",
    "  vec2 f = fract(p);",
    "  vec2 u = f * f * (3.0 - 2.0 * f);",
    "  return mix(",
    "    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),",
    "    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),",
    "    u.y",
    "  );",
    "}",
    "",
    "float fbm(vec2 p) {",
    "  float v = 0.0;",
    "  float a = 0.5;",
    "  for (int i = 0; i < 4; i++) {",
    "    v += a * noise(p);",
    "    p = p * 2.03;",
    "    a *= 0.5;",
    "  }",
    "  return v;",
    "}",
    "",
    "void main() {",
    "  float aspect = uResolution.x / uResolution.y;",
    "  vec2 p = vec2(vUv.x * aspect, vUv.y);",
    "  float t = uTime * 0.04;",
    // Domain warp — noise inputs offset by other noise. Gives soft aurora bands.
    "  vec2 q = vec2(",
    "    fbm(p + vec2(0.0, t)),",
    "    fbm(p + vec2(5.2, 1.3) + vec2(-t, 0.4 * t))",
    "  );",
    "  float f = fbm(p + q * 1.8);",
    "  float mixFactor = clamp(f * 1.35 + q.x * 0.25, 0.0, 1.0);",
    "  vec3 col = mix(uColorA, uColorB, mixFactor);",
    // Cursor light — a warm halo painted where the pointer sits.
    "  vec2 cursorP = vec2(uCursor.x * aspect, uCursor.y);",
    "  float cursorD = distance(p, cursorP);",
    "  float cursorGlow = smoothstep(0.32, 0.0, cursorD) * uCursorStrength;",
    "  col += vec3(0.10) * cursorGlow;",
    // Band shaping — taper the extremes so the canvas breathes rather than fills.
    "  float band = smoothstep(0.18, 0.62, f);",
    "  band *= 1.0 - smoothstep(0.85, 1.05, f);",
    "  float alpha = band * uOpacity;",
    "  gl_FragColor = vec4(col * alpha, alpha);",
    "}",
  ].join("\n");

  function compileShader(gl, type, src) {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  }

  function linkProgram(gl, vsSrc, fsSrc) {
    const vs = compileShader(gl, gl.VERTEX_SHADER, vsSrc);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSrc);
    if (!vs || !fs) return null;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      gl.deleteProgram(prog);
      return null;
    }
    return prog;
  }

  function parseColor(input, fallback) {
    if (Array.isArray(input) && input.length >= 3) {
      return [input[0], input[1], input[2]];
    }
    if (typeof input !== "string" || !input) return fallback.slice();
    const el = document.createElement("span");
    el.style.color = input;
    el.style.display = "none";
    document.body.appendChild(el);
    const rgb = getComputedStyle(el).color;
    document.body.removeChild(el);
    const m = rgb.match(/rgba?\(([^)]+)\)/);
    if (!m) return fallback.slice();
    const parts = m[1].split(",").map(function (s) { return parseFloat(s.trim()); });
    if (parts.length < 3 || parts.some(isNaN)) return fallback.slice();
    return [parts[0] / 255, parts[1] / 255, parts[2] / 255];
  }

  function create(options) {
    const canvas = options.canvas;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: true,
      powerPreference: "low-power",
    }) || canvas.getContext("experimental-webgl");
    if (!gl) return null;

    const program = linkProgram(gl, VS, FS);
    if (!program) return null;

    const aPos = gl.getAttribLocation(program, "aPos");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uCursor = gl.getUniformLocation(program, "uCursor");
    const uColorA = gl.getUniformLocation(program, "uColorA");
    const uColorB = gl.getUniformLocation(program, "uColorB");
    const uOpacity = gl.getUniformLocation(program, "uOpacity");
    const uCursorStrength = gl.getUniformLocation(program, "uCursorStrength");

    const quadBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const defaults = {
      colorA: [0.09, 0.31, 0.71],
      colorB: [0.16, 0.59, 1.0],
    };

    // Two color slots — current and target — plus a lerp progress used to
    // ease palette changes so mood shifts feel continuous, not switched.
    let colorA = parseColor(options.colorA, defaults.colorA);
    let colorB = parseColor(options.colorB, defaults.colorB);
    let colorAFrom = colorA.slice();
    let colorBFrom = colorB.slice();
    let colorAto = colorA.slice();
    let colorBto = colorB.slice();
    let colorLerpDuration = 0;
    let colorLerpStart = 0;

    let opacity = typeof options.opacity === "number" ? options.opacity : 0.55;
    let cursor = [0.5, 0.5];
    let cursorStrength = 0;

    const DPR_CAP = 1.5;
    // Aurora is a soft background — deliberately downscale to keep fill cheap.
    const RENDER_SCALE = 0.85;
    let width = 0;
    let height = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(global.devicePixelRatio || 1, DPR_CAP);
      const w = Math.max(2, Math.round(rect.width * dpr * RENDER_SCALE));
      const h = Math.max(2, Math.round(rect.height * dpr * RENDER_SCALE));
      if (w === width && h === height) return;
      width = w;
      height = h;
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
    resize();

    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    let running = true;
    let paused = false;
    let rafId = 0;
    const startTime = performance.now();
    let lastFrame = startTime;

    function frame(now) {
      if (!running) return;
      lastFrame = now;
      const t = (now - startTime) / 1000;

      // Smoothly ease the current color toward the target.
      if (colorLerpDuration > 0) {
        const elapsed = now - colorLerpStart;
        const raw = elapsed / colorLerpDuration;
        if (raw >= 1) {
          colorA = colorAto.slice();
          colorB = colorBto.slice();
          colorLerpDuration = 0;
        } else {
          const p = raw < 0 ? 0 : raw;
          const eased = 1 - Math.pow(1 - p, 3);
          for (let i = 0; i < 3; i++) {
            colorA[i] = colorAFrom[i] + (colorAto[i] - colorAFrom[i]) * eased;
            colorB[i] = colorBFrom[i] + (colorBto[i] - colorBFrom[i]) * eased;
          }
        }
      }

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuf);
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
      gl.uniform2f(uResolution, width, height);
      gl.uniform1f(uTime, t);
      gl.uniform2fv(uCursor, cursor);
      gl.uniform3fv(uColorA, colorA);
      gl.uniform3fv(uColorB, colorB);
      gl.uniform1f(uOpacity, opacity);
      gl.uniform1f(uCursorStrength, cursorStrength);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      rafId = global.requestAnimationFrame(frame);
    }

    let ro = null;
    if (typeof ResizeObserver === "function") {
      ro = new ResizeObserver(function () { resize(); });
      ro.observe(canvas);
    } else {
      global.addEventListener("resize", resize);
    }

    function onVisibility() {
      if (document.hidden) {
        pause();
      } else {
        resume();
      }
    }
    document.addEventListener("visibilitychange", onVisibility);

    function pause() {
      if (paused) return;
      paused = true;
      running = false;
      global.cancelAnimationFrame(rafId);
    }

    function resume() {
      if (!paused) return;
      paused = false;
      running = true;
      rafId = global.requestAnimationFrame(frame);
    }

    rafId = global.requestAnimationFrame(frame);

    return {
      setColors: function (colors, durationMs) {
        if (colors.colorA) {
          colorAFrom = colorA.slice();
          colorAto = parseColor(colors.colorA, colorA);
        } else {
          colorAFrom = colorA.slice();
          colorAto = colorA.slice();
        }
        if (colors.colorB) {
          colorBFrom = colorB.slice();
          colorBto = parseColor(colors.colorB, colorB);
        } else {
          colorBFrom = colorB.slice();
          colorBto = colorB.slice();
        }
        colorLerpDuration = Math.max(0, durationMs == null ? 900 : durationMs);
        colorLerpStart = performance.now();
        if (colorLerpDuration === 0) {
          colorA = colorAto.slice();
          colorB = colorBto.slice();
        }
      },
      setCursor: function (x, y, strength) {
        cursor[0] = x;
        cursor[1] = y;
        if (typeof strength === "number") cursorStrength = strength;
      },
      setCursorStrength: function (s) { cursorStrength = s; },
      setOpacity: function (o) { opacity = o; },
      pause: pause,
      resume: resume,
      destroy: function () {
        running = false;
        global.cancelAnimationFrame(rafId);
        if (ro) ro.disconnect(); else global.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", onVisibility);
        gl.deleteBuffer(quadBuf);
        gl.deleteProgram(program);
        const ext = gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      },
    };
  }

  global.HeroAurora = { create: create };
})(window);
