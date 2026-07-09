/**
 * hero-scene.js — decorative WebGL scene for the home hero.
 *
 * A slowly rotating icosahedron wireframe with a bright pulse travelling
 * along each edge (evoking messages hopping between nodes in a distributed
 * system), surrounded by a shimmering halo of particles.
 *
 * No dependencies. Two shader programs, three draw calls per frame,
 * one requestAnimationFrame loop. Pauses when the tab is hidden or the
 * canvas leaves the viewport.
 */
(function (global) {
  "use strict";

  const PHI = (1 + Math.sqrt(5)) / 2;

  // Icosahedron: 12 vertices, 30 edges. Standard golden-ratio construction.
  const ICOSA_VERTS = [
    [-1,  PHI,  0], [ 1,  PHI,  0], [-1, -PHI,  0], [ 1, -PHI,  0],
    [ 0, -1,  PHI], [ 0,  1,  PHI], [ 0, -1, -PHI], [ 0,  1, -PHI],
    [ PHI,  0, -1], [ PHI,  0,  1], [-PHI,  0, -1], [-PHI,  0,  1],
  ];

  const ICOSA_EDGES = [
    [0, 1], [0, 5], [0, 7], [0, 10], [0, 11],
    [1, 5], [1, 7], [1, 8], [1, 9],
    [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
    [3, 4], [3, 6], [3, 8], [3, 9],
    [4, 5], [4, 9], [4, 11],
    [5, 9], [5, 11],
    [6, 7], [6, 8], [6, 10],
    [7, 8], [7, 10],
    [8, 9],
    [10, 11],
  ];

  const EDGE_VS = [
    "attribute vec3 aPos;",
    "attribute float aEdgeParam;",
    "attribute float aEdgeId;",
    "uniform mat4 uMVP;",
    "uniform float uTime;",
    "varying float vPulse;",
    "void main() {",
    "  gl_Position = uMVP * vec4(aPos, 1.0);",
    // One pulse per edge; each edge offset in phase so several fire at any moment.
    "  float phase = mod(aEdgeParam - uTime * 0.32 + aEdgeId * 0.137, 1.0);",
    "  vPulse = smoothstep(0.10, 0.0, abs(phase - 0.5));",
    "}",
  ].join("\n");

  const EDGE_FS = [
    "precision mediump float;",
    "uniform vec3 uEdgeColor;",
    "uniform vec3 uPulseColor;",
    "varying float vPulse;",
    "void main() {",
    "  vec3 col = mix(uEdgeColor, uPulseColor, vPulse);",
    "  float alpha = 0.28 + vPulse * 0.72;",
    // Pre-multiplied alpha so the canvas composites cleanly on any bg.
    "  gl_FragColor = vec4(col * alpha, alpha);",
    "}",
  ].join("\n");

  const POINT_VS = [
    "attribute vec3 aPos;",
    "attribute float aSeed;",
    "uniform mat4 uMVP;",
    "uniform float uTime;",
    "uniform float uPointScale;",
    "varying float vAlpha;",
    "void main() {",
    "  gl_Position = uMVP * vec4(aPos, 1.0);",
    "  float shimmer = 0.5 + 0.5 * sin(uTime * 1.3 + aSeed * 6.2831);",
    "  gl_PointSize = (1.1 + shimmer * 2.6) * uPointScale;",
    "  vAlpha = 0.10 + shimmer * 0.55;",
    "}",
  ].join("\n");

  const POINT_FS = [
    "precision mediump float;",
    "uniform vec3 uParticleColor;",
    "varying float vAlpha;",
    "void main() {",
    "  vec2 uv = gl_PointCoord - vec2(0.5);",
    "  float d = length(uv);",
    "  float a = smoothstep(0.5, 0.0, d) * vAlpha;",
    "  gl_FragColor = vec4(uParticleColor * a, a);",
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

  function buffer(gl, data) {
    const b = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, b);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    return b;
  }

  function buildEdgeGeometry() {
    const norm = Math.hypot(1, PHI, 0);
    const verts = ICOSA_VERTS.map(function (v) {
      return [v[0] / norm, v[1] / norm, v[2] / norm];
    });
    const n = ICOSA_EDGES.length * 2;
    const pos = new Float32Array(n * 3);
    const edgeParam = new Float32Array(n);
    const edgeId = new Float32Array(n);
    for (let i = 0; i < ICOSA_EDGES.length; i++) {
      const [a, b] = ICOSA_EDGES[i];
      const va = verts[a];
      const vb = verts[b];
      const i0 = i * 2;
      const i1 = i * 2 + 1;
      pos[i0 * 3] = va[0]; pos[i0 * 3 + 1] = va[1]; pos[i0 * 3 + 2] = va[2];
      pos[i1 * 3] = vb[0]; pos[i1 * 3 + 1] = vb[1]; pos[i1 * 3 + 2] = vb[2];
      edgeParam[i0] = 0; edgeParam[i1] = 1;
      edgeId[i0] = i; edgeId[i1] = i;
    }
    return { pos, edgeParam, edgeId, vertexCount: n };
  }

  function buildParticles(count) {
    const pos = new Float32Array(count * 3);
    const seed = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Uniformly distribute over a spherical shell surrounding the mesh.
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const s = Math.sqrt(1 - u * u);
      const r = 1.55 + Math.random() * 0.85;
      pos[i * 3] = s * Math.cos(theta) * r;
      pos[i * 3 + 1] = u * r;
      pos[i * 3 + 2] = s * Math.sin(theta) * r;
      seed[i] = Math.random();
    }
    return { pos, seed, count };
  }

  // --- mat4 helpers (column-major, matching WebGL uniformMatrix4fv layout).

  function mat4Perspective(fovy, aspect, near, far) {
    const f = 1 / Math.tan(fovy / 2);
    const nf = 1 / (near - far);
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, 2 * far * near * nf, 0,
    ]);
  }

  function mat4RotY(a) {
    const c = Math.cos(a), s = Math.sin(a);
    return new Float32Array([
      c, 0, -s, 0,
      0, 1, 0, 0,
      s, 0, c, 0,
      0, 0, 0, 1,
    ]);
  }

  function mat4RotX(a) {
    const c = Math.cos(a), s = Math.sin(a);
    return new Float32Array([
      1, 0, 0, 0,
      0, c, s, 0,
      0, -s, c, 0,
      0, 0, 0, 1,
    ]);
  }

  function mat4Translate(x, y, z) {
    return new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, z, 1,
    ]);
  }

  function mat4Multiply(a, b) {
    const out = new Float32Array(16);
    for (let i = 0; i < 4; i++) {
      const a0 = a[i], a1 = a[i + 4], a2 = a[i + 8], a3 = a[i + 12];
      out[i]      = a0 * b[0]  + a1 * b[1]  + a2 * b[2]  + a3 * b[3];
      out[i + 4]  = a0 * b[4]  + a1 * b[5]  + a2 * b[6]  + a3 * b[7];
      out[i + 8]  = a0 * b[8]  + a1 * b[9]  + a2 * b[10] + a3 * b[11];
      out[i + 12] = a0 * b[12] + a1 * b[13] + a2 * b[14] + a3 * b[15];
    }
    return out;
  }

  function parseColor(str, fallback) {
    if (!str) return fallback.slice();
    const el = document.createElement("span");
    el.style.color = str;
    el.style.display = "none";
    document.body.appendChild(el);
    const rgb = getComputedStyle(el).color;
    document.body.removeChild(el);
    const m = rgb.match(/rgba?\(([^)]+)\)/);
    if (!m) return fallback.slice();
    const parts = m[1].split(",").map(function (p) { return parseFloat(p.trim()); });
    if (parts.length < 3 || parts.some(isNaN)) return fallback.slice();
    return [parts[0] / 255, parts[1] / 255, parts[2] / 255];
  }

  function mix(a, b, t) {
    return [a[0] * (1 - t) + b[0] * t, a[1] * (1 - t) + b[1] * t, a[2] * (1 - t) + b[2] * t];
  }

  function create(options) {
    const canvas = options.canvas;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: true,
      premultipliedAlpha: true,
      powerPreference: "low-power",
    }) || canvas.getContext("experimental-webgl");
    if (!gl) return null;

    const edgeProg = linkProgram(gl, EDGE_VS, EDGE_FS);
    const pointProg = linkProgram(gl, POINT_VS, POINT_FS);
    if (!edgeProg || !pointProg) return null;

    const edgeGeom = buildEdgeGeometry();
    const particles = buildParticles(280);

    const bufPos = buffer(gl, edgeGeom.pos);
    const bufParam = buffer(gl, edgeGeom.edgeParam);
    const bufEdgeId = buffer(gl, edgeGeom.edgeId);
    const bufPtPos = buffer(gl, particles.pos);
    const bufPtSeed = buffer(gl, particles.seed);

    const edgeAttribs = {
      aPos: gl.getAttribLocation(edgeProg, "aPos"),
      aEdgeParam: gl.getAttribLocation(edgeProg, "aEdgeParam"),
      aEdgeId: gl.getAttribLocation(edgeProg, "aEdgeId"),
    };
    const edgeUniforms = {
      uMVP: gl.getUniformLocation(edgeProg, "uMVP"),
      uTime: gl.getUniformLocation(edgeProg, "uTime"),
      uEdgeColor: gl.getUniformLocation(edgeProg, "uEdgeColor"),
      uPulseColor: gl.getUniformLocation(edgeProg, "uPulseColor"),
    };
    const pointAttribs = {
      aPos: gl.getAttribLocation(pointProg, "aPos"),
      aSeed: gl.getAttribLocation(pointProg, "aSeed"),
    };
    const pointUniforms = {
      uMVP: gl.getUniformLocation(pointProg, "uMVP"),
      uTime: gl.getUniformLocation(pointProg, "uTime"),
      uPointScale: gl.getUniformLocation(pointProg, "uPointScale"),
      uParticleColor: gl.getUniformLocation(pointProg, "uParticleColor"),
    };

    // Colors — caller may pass CSS color strings, or we fall back to accent blue.
    const defaults = {
      edge: [0.16, 0.59, 1.0],
      pulse: [1.0, 1.0, 1.0],
      particle: [0.16, 0.59, 1.0],
    };
    let edgeColor = parseColor(options.edgeColor, defaults.edge);
    let pulseColor = parseColor(options.pulseColor, defaults.pulse);
    let particleColor = parseColor(options.particleColor, defaults.particle);

    const DPR_CAP = 1.75;
    let width = 0;
    let height = 0;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(global.devicePixelRatio || 1, DPR_CAP);
      const w = Math.max(1, Math.round(rect.width * dpr));
      const h = Math.max(1, Math.round(rect.height * dpr));
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
    // Source is pre-multiplied; standard "over" blend.
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    let running = true;
    let rafId = 0;
    let startTime = performance.now();
    let lastFrame = startTime;

    function drawEdges(mvp, t) {
      gl.useProgram(edgeProg);
      gl.uniformMatrix4fv(edgeUniforms.uMVP, false, mvp);
      gl.uniform1f(edgeUniforms.uTime, t);
      gl.uniform3fv(edgeUniforms.uEdgeColor, edgeColor);
      gl.uniform3fv(edgeUniforms.uPulseColor, pulseColor);

      gl.bindBuffer(gl.ARRAY_BUFFER, bufPos);
      gl.enableVertexAttribArray(edgeAttribs.aPos);
      gl.vertexAttribPointer(edgeAttribs.aPos, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, bufParam);
      gl.enableVertexAttribArray(edgeAttribs.aEdgeParam);
      gl.vertexAttribPointer(edgeAttribs.aEdgeParam, 1, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, bufEdgeId);
      gl.enableVertexAttribArray(edgeAttribs.aEdgeId);
      gl.vertexAttribPointer(edgeAttribs.aEdgeId, 1, gl.FLOAT, false, 0, 0);

      gl.drawArrays(gl.LINES, 0, edgeGeom.vertexCount);
    }

    function drawPoints(mvp, t) {
      gl.useProgram(pointProg);
      gl.uniformMatrix4fv(pointUniforms.uMVP, false, mvp);
      gl.uniform1f(pointUniforms.uTime, t);
      gl.uniform1f(pointUniforms.uPointScale, Math.min(global.devicePixelRatio || 1, DPR_CAP));
      gl.uniform3fv(pointUniforms.uParticleColor, particleColor);

      gl.bindBuffer(gl.ARRAY_BUFFER, bufPtPos);
      gl.enableVertexAttribArray(pointAttribs.aPos);
      gl.vertexAttribPointer(pointAttribs.aPos, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, bufPtSeed);
      gl.enableVertexAttribArray(pointAttribs.aSeed);
      gl.vertexAttribPointer(pointAttribs.aSeed, 1, gl.FLOAT, false, 0, 0);

      gl.drawArrays(gl.POINTS, 0, particles.count);
    }

    function frame(now) {
      if (!running) return;
      const t = (now - startTime) / 1000;
      lastFrame = now;

      gl.clear(gl.COLOR_BUFFER_BIT);

      const aspect = width / height;
      const proj = mat4Perspective((45 * Math.PI) / 180, aspect, 0.1, 20);
      const view = mat4Translate(0, 0, -3.4);
      const model = mat4Multiply(mat4RotY(t * 0.18), mat4RotX(Math.sin(t * 0.22) * 0.35));
      const mv = mat4Multiply(view, model);
      const mvp = mat4Multiply(proj, mv);

      drawEdges(mvp, t);
      drawPoints(mvp, t);

      rafId = global.requestAnimationFrame(frame);
    }

    // ResizeObserver to keep the canvas backing store in sync with layout.
    let ro = null;
    if (typeof ResizeObserver === "function") {
      ro = new ResizeObserver(function () { resize(); });
      ro.observe(canvas);
    } else {
      global.addEventListener("resize", resize);
    }

    // Pause when the tab is hidden — no reason to burn GPU on an offscreen canvas.
    function onVisibility() {
      if (document.hidden) {
        running = false;
        global.cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        // Advance startTime past the paused interval so animation phase is continuous.
        startTime += performance.now() - lastFrame;
        rafId = global.requestAnimationFrame(frame);
      }
    }
    document.addEventListener("visibilitychange", onVisibility);

    // Pause when the canvas leaves the viewport too.
    let io = null;
    if (typeof IntersectionObserver === "function") {
      io = new IntersectionObserver(function (entries) {
        const visible = entries.some(function (e) { return e.isIntersecting; });
        if (!visible) {
          if (running) {
            running = false;
            global.cancelAnimationFrame(rafId);
          }
        } else if (!running && !document.hidden) {
          running = true;
          startTime += performance.now() - lastFrame;
          rafId = global.requestAnimationFrame(frame);
        }
      }, { threshold: 0 });
      io.observe(canvas);
    }

    rafId = global.requestAnimationFrame(frame);

    return {
      setColors: function (colors) {
        if (colors.edgeColor) edgeColor = parseColor(colors.edgeColor, edgeColor);
        if (colors.pulseColor) pulseColor = parseColor(colors.pulseColor, pulseColor);
        if (colors.particleColor) particleColor = parseColor(colors.particleColor, particleColor);
      },
      destroy: function () {
        running = false;
        global.cancelAnimationFrame(rafId);
        if (ro) ro.disconnect(); else global.removeEventListener("resize", resize);
        if (io) io.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        gl.deleteBuffer(bufPos);
        gl.deleteBuffer(bufParam);
        gl.deleteBuffer(bufEdgeId);
        gl.deleteBuffer(bufPtPos);
        gl.deleteBuffer(bufPtSeed);
        gl.deleteProgram(edgeProg);
        gl.deleteProgram(pointProg);
        const ext = gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      },
    };
  }

  global.HeroScene = { create: create };
})(window);
