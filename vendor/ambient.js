/**
 * ambient.js — orchestrator that ties scroll, cursor, theme, and mood
 * sections into the aurora + hero scenes.
 *
 * Each section on the page can carry `data-mood="threshold|craft|value|
 * grounded|human|invite"`. As the section whose center is closest to the
 * viewport center changes, the aurora eases into that mood's palette.
 *
 * Cursor position drives a soft light in the aurora shader. Touch devices
 * skip it. Theme changes re-key the palette without a hard swap.
 */
(function (global) {
  "use strict";

  const MOODS_DARK = {
    threshold: { a: "#0a1a3a", b: "#2997ff" },
    craft:     { a: "#050f2a", b: "#3a5a95" },
    value:     { a: "#2a1408", b: "#f97316" },
    grounded:  { a: "#2a1e0a", b: "#f5c78a" },
    human:     { a: "#2a0e1e", b: "#e88ab0" },
    invite:    { a: "#0a1a3a", b: "#2997ff" },
  };

  const MOODS_LIGHT = {
    threshold: { a: "#dce6f5", b: "#0066cc" },
    craft:     { a: "#c8d4e8", b: "#3c64a0" },
    value:     { a: "#f8dfc7", b: "#ea6c00" },
    grounded:  { a: "#efe0be", b: "#b58a3f" },
    human:     { a: "#f2d6e0", b: "#a04570" },
    invite:    { a: "#dce6f5", b: "#0066cc" },
  };

  const READING_PAGES = ["privacy", "intro", "checklist", "email-templates"];
  const DEFAULT_OPACITY = 0.55;
  const READING_OPACITY = 0.22;

  function isTouchOnly() {
    return global.matchMedia && global.matchMedia("(hover: none)").matches;
  }

  function isReadingPage() {
    const page = document.body.getAttribute("data-page");
    return READING_PAGES.indexOf(page) !== -1;
  }

  function pickMood(theme, name) {
    const table = theme === "light" ? MOODS_LIGHT : MOODS_DARK;
    return table[name] || table.threshold;
  }

  function create(options) {
    options = options || {};
    const aurora = options.aurora || null;
    const heroScene = options.heroScene || null;
    const heroColorSource = typeof options.heroColors === "function" ? options.heroColors : null;
    const root = document.documentElement;
    const enableCursor = options.enableCursor !== false && !isTouchOnly();

    let currentTheme = root.getAttribute("data-theme") || "dark";
    let currentMood = null;

    if (aurora) {
      aurora.setOpacity(isReadingPage() ? READING_OPACITY : DEFAULT_OPACITY);
    }

    function applyMood(name, durationMs) {
      if (name === currentMood) return;
      currentMood = name;
      if (!aurora) return;
      const mood = pickMood(currentTheme, name);
      aurora.setColors({ colorA: mood.a, colorB: mood.b }, durationMs);
    }

    // ---- Scroll → mood section tracking.

    const sections = Array.from(document.querySelectorAll("[data-mood]"));
    let scrollRaf = 0;

    function updateMoodFromScroll() {
      scrollRaf = 0;
      if (!sections.length) return;
      const vpCenter = global.innerHeight / 2;
      let best = null;
      let bestDist = Infinity;
      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const d = Math.abs(center - vpCenter);
        if (d < bestDist) {
          bestDist = d;
          best = sections[i];
        }
      }
      if (best) applyMood(best.dataset.mood, 900);
    }

    function onScroll() {
      if (scrollRaf) return;
      scrollRaf = global.requestAnimationFrame(updateMoodFromScroll);
    }

    if (sections.length) {
      global.addEventListener("scroll", onScroll, { passive: true });
      global.addEventListener("resize", onScroll);
      updateMoodFromScroll();
    } else {
      applyMood("threshold", 0);
    }

    // ---- Cursor with smoothing. Skipped on touch-only devices.

    let cursorX = 0.5, cursorY = 0.5;
    let targetX = 0.5, targetY = 0.5;
    let cursorAmp = 0;
    let targetAmp = 0;
    let cursorRaf = 0;

    function cursorLoop() {
      const kPos = 0.14;
      const kAmp = 0.06;
      cursorX += (targetX - cursorX) * kPos;
      cursorY += (targetY - cursorY) * kPos;
      cursorAmp += (targetAmp - cursorAmp) * kAmp;
      if (aurora) aurora.setCursor(cursorX, cursorY, cursorAmp);
      const settled =
        Math.abs(targetX - cursorX) < 0.001 &&
        Math.abs(targetY - cursorY) < 0.001 &&
        Math.abs(targetAmp - cursorAmp) < 0.001;
      if (!settled) {
        cursorRaf = global.requestAnimationFrame(cursorLoop);
      } else {
        cursorRaf = 0;
      }
    }

    function kickCursorLoop() {
      if (!cursorRaf) cursorRaf = global.requestAnimationFrame(cursorLoop);
    }

    function onMouseMove(e) {
      targetX = e.clientX / global.innerWidth;
      targetY = 1 - e.clientY / global.innerHeight; // flip Y for GL coords
      targetAmp = 1;
      kickCursorLoop();
    }
    function onMouseLeave() {
      targetAmp = 0;
      kickCursorLoop();
    }
    function onMouseEnter() {
      targetAmp = 1;
      kickCursorLoop();
    }

    if (enableCursor) {
      document.addEventListener("mousemove", onMouseMove, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mouseenter", onMouseEnter);
    }

    // ---- Theme changes re-key both palettes.

    const themeObs = new MutationObserver(function () {
      const theme = root.getAttribute("data-theme") || "dark";
      if (theme === currentTheme) return;
      currentTheme = theme;
      if (aurora && currentMood) {
        const mood = pickMood(theme, currentMood);
        aurora.setColors({ colorA: mood.a, colorB: mood.b }, 500);
      }
      if (heroScene && heroColorSource) {
        heroScene.setColors(heroColorSource());
      }
    });
    themeObs.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return {
      setMood: function (name, durationMs) { applyMood(name, durationMs); },
      destroy: function () {
        if (sections.length) {
          global.removeEventListener("scroll", onScroll);
          global.removeEventListener("resize", onScroll);
        }
        if (enableCursor) {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseleave", onMouseLeave);
          document.removeEventListener("mouseenter", onMouseEnter);
        }
        themeObs.disconnect();
        if (scrollRaf) global.cancelAnimationFrame(scrollRaf);
        if (cursorRaf) global.cancelAnimationFrame(cursorRaf);
      },
    };
  }

  global.HeroAmbient = { create: create };
})(window);
