(function () {
  const THEME_KEY = "ukeh-portfolio-theme";
  const LOCALE_KEY = "ukeh-portfolio-locale";
  const LOCALES = ["en", "fr", "es", "de", "pcm"];
  const root = document.documentElement;

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function getLocale() {
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored && LOCALES.indexOf(stored) !== -1) return stored;
    return "en";
  }

  function copyText(text, btn) {
    const label = btn.textContent;
    function done() {
      btn.textContent = "Copied";
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = label;
        btn.disabled = false;
      }, 2000);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        fallbackCopy(text, done);
      });
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, cb) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch (e) {}
    document.body.removeChild(ta);
    cb();
  }

  function renderTemplates() {
    const mount = document.getElementById("email-templates-root");
    if (!mount || !globalThis.PORTFOLIO_I18N) return;
    const lang = getLocale();
    const HTML_LANG_BY_LOCALE = { en: "en", pcm: "en-NG", fr: "fr", es: "es", de: "de" };
    document.documentElement.setAttribute("lang", HTML_LANG_BY_LOCALE[lang] || "en");
    const I = globalThis.PORTFOLIO_I18N[lang] || globalThis.PORTFOLIO_I18N.en;
    const mailto = I.mailto;
    const intake = I.intake;
    const pricing = I.pricing;
    if (!mailto || !intake) return;

    mount.replaceChildren();

    function addSection(title, description, text) {
      const article = document.createElement("article");
      article.className = "email-template-card";
      const h2 = document.createElement("h2");
      h2.className = "email-template-title";
      h2.textContent = title;
      const p = document.createElement("p");
      p.className = "email-template-desc";
      p.textContent = description;
      const pre = document.createElement("pre");
      pre.className = "email-template-plain";
      pre.textContent = text;
      const row = document.createElement("div");
      row.className = "email-template-actions";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-primary";
      btn.textContent = "Copy text";
      btn.addEventListener("click", function () {
        copyText(text, btn);
      });
      row.appendChild(btn);
      article.appendChild(h2);
      article.appendChild(p);
      article.appendChild(pre);
      article.appendChild(row);
      mount.appendChild(article);
    }

    addSection(
      "General inquiry",
      "Used for Email a brief, Email me, Discuss scope by email, and similar mailto links.",
      mailto.body
    );

    const bodies = mailto.pricingBodies;
    if (Array.isArray(bodies)) {
      bodies.forEach(function (body, i) {
        const tierName = pricing?.tiers?.[i]?.name || "Tier " + (i + 1);
        addSection(
          "Pricing: " + tierName,
          "Pre-filled body when someone uses the pricing card button for this tier.",
          body
        );
      });
    }

    const sampleLines = [
      intake.emailHeading,
      "",
      intake.labelProject + ": [Example: harden event-driven payouts]",
      intake.labelAudience + ": [Internal ops and B2B partners]",
      intake.labelTimeline + ": [6–8 weeks]",
      intake.labelBudget + ": [From $X or retainer]",
      intake.labelLinks + ": [Notion / repo]",
    ];
    const intakeMain = sampleLines.join("\n") + (intake.emailFooter || "");
    const intakeFull = mailto.body.replace(/\s+$/, "") + "\n\n" + intakeMain;
    addSection(
      "Project brief (form)",
      "Full message shape when someone submits the project brief form. Example answers in brackets.",
      intakeFull
    );
  }

  applyTheme(getPreferredTheme());
  renderTemplates();

  document.querySelector(".theme-toggle")?.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
})();
