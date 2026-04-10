(function () {
  const THEME_KEY = "ukeh-portfolio-theme";
  const LOCALE_KEY = "ukeh-portfolio-locale";
  /** Email for all client mailto: links; guided links use class mailto-guided + applyMailtoGuidedLinks */
  const BUSINESS_EMAIL = "victorukeh1@gmail.com";
  const root = document.documentElement;

  const LANGS = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
    { code: "de", label: "Deutsch" },
    // { code: "pcm", label: "Naija Pidgin" },
  ];

  const LOCALE_CODES = LANGS.map(function (L) {
    return L.code;
  });

  const HTML_LANG_BY_LOCALE = {
    en: "en",
    pcm: "en-NG",
    fr: "fr",
    es: "es",
    de: "de",
  };

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
    if (stored && LOCALE_CODES.indexOf(stored) !== -1) return stored;
    return "en";
  }

  function setLocale(code) {
    if (LOCALE_CODES.indexOf(code) === -1) return;
    localStorage.setItem(LOCALE_KEY, code);
    root.setAttribute("lang", HTML_LANG_BY_LOCALE[code] || "en");
    applyI18n(code);
    renderServices(code);
    renderPricing(code);
    renderExperience(code);
    renderCaseStudies(code);
    renderRightFit(code);
    renderReferences(code);
    const sel = document.getElementById("lang-select");
    if (sel) sel.value = code;
    syncNavToggleA11y();
    applyMailtoGuidedLinks(code);
  }

  function t(lang, path) {
    const parts = path.split(".");
    function lookup(code) {
      let o = globalThis.PORTFOLIO_I18N?.[code];
      for (const p of parts) {
        o = o?.[p];
      }
      return typeof o === "string" ? o : null;
    }
    return lookup(lang) ?? (lang !== "en" ? lookup("en") : null);
  }

  function applyI18n(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const val = t(lang, key);
      if (val != null) el.textContent = val;
    });
  }

  function applyMailtoGuidedLinks(lang) {
    const subject = t(lang, "mailto.subject");
    const body = t(lang, "mailto.body");
    if (!subject || !body) return;
    const href =
      "mailto:" +
      BUSINESS_EMAIL +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    document.querySelectorAll("a.mailto-guided").forEach(function (a) {
      a.setAttribute("href", href);
    });
  }

  function mailtoBodyWithPrefix(lang, mainBody) {
    const prefix = t(lang, "mailto.body");
    if (!prefix) return mainBody;
    return prefix.replace(/\s+$/, "") + "\n\n" + mainBody;
  }

  function renderServices(lang) {
    const container = document.getElementById("services-root");
    const bundle =
      globalThis.PORTFOLIO_I18N?.[lang]?.services || globalThis.PORTFOLIO_I18N?.en?.services;
    if (!container || !bundle?.items) return;
    const glyphs = ["◇", "◆", "▣", "◎"];
    container.replaceChildren();
    bundle.items.forEach(function (item, i) {
      const art = document.createElement("article");
      art.className = "service-card";
      const icon = document.createElement("span");
      icon.className = "service-card-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.textContent = glyphs[i % glyphs.length];
      const h3 = document.createElement("h3");
      h3.textContent = item.title;
      const p = document.createElement("p");
      p.textContent = item.body;
      art.appendChild(icon);
      art.appendChild(h3);
      art.appendChild(p);
      container.appendChild(art);
    });
  }

  function renderPricing(lang) {
    const container = document.getElementById("pricing-root");
    const bundle =
      globalThis.PORTFOLIO_I18N?.[lang]?.pricing || globalThis.PORTFOLIO_I18N?.en?.pricing;
    const numbers = globalThis.PRICING_NUMBERS;
    if (!container || !bundle?.tiers || !numbers) return;
    container.replaceChildren();
    bundle.tiers.forEach(function (tier, i) {
      const prices = numbers[i];
      if (!prices) return;
      const art = document.createElement("article");
      art.className = "pricing-card";
      if (i === 1) art.classList.add("pricing-card--featured");
      if (i === 1 && bundle.popular) {
        const badge = document.createElement("span");
        badge.className = "pricing-badge";
        badge.setAttribute("aria-hidden", "true");
        badge.textContent = bundle.popular;
        art.appendChild(badge);
      }
      const h3 = document.createElement("h3");
      h3.className = "pricing-card-title";
      h3.textContent = tier.name;
      const tag = document.createElement("p");
      tag.className = "pricing-card-for";
      tag.textContent = tier.forWho;
      const priceRow = document.createElement("div");
      priceRow.className = "pricing-prices pricing-prices--usd-only";
      const usd = document.createElement("span");
      usd.className = "pricing-usd";
      usd.textContent = prices.usd;
      priceRow.appendChild(usd);
      const ul = document.createElement("ul");
      ul.className = "pricing-features";
      tier.features.forEach(function (f) {
        const li = document.createElement("li");
        li.textContent = f;
        ul.appendChild(li);
      });
      const cta = document.createElement("a");
      cta.className = "btn btn-ghost pricing-card-btn";
      const prefix = t(lang, "mailto.cardSubjectPrefix") || "Engagement";
      const subj = prefix + ": " + tier.name;
      const mailtoBundle =
        globalThis.PORTFOLIO_I18N?.[lang]?.mailto || globalThis.PORTFOLIO_I18N?.en?.mailto;
      const tierBodies = mailtoBundle?.pricingBodies;
      const body =
        (Array.isArray(tierBodies) && tierBodies[i] != null ? tierBodies[i] : null) ||
        mailtoBundle?.body ||
        "";
      cta.href =
        "mailto:" +
        BUSINESS_EMAIL +
        "?subject=" +
        encodeURIComponent(subj) +
        (body ? "&body=" + encodeURIComponent(body) : "");
      cta.textContent = bundle.cta;
      art.appendChild(h3);
      art.appendChild(tag);
      art.appendChild(priceRow);
      art.appendChild(ul);
      art.appendChild(cta);
      container.appendChild(art);
    });
  }

  function renderExperience(lang) {
    const container = document.getElementById("experience-timeline");
    const roles =
      globalThis.EXPERIENCE_BY_LANG?.[lang] || globalThis.EXPERIENCE_BY_LANG?.en;
    if (!container || !roles) return;
    container.replaceChildren();
    roles.forEach(function (role) {
      const li = document.createElement("li");
      li.className = "timeline-item";
      const marker = document.createElement("div");
      marker.className = "timeline-marker";
      marker.setAttribute("aria-hidden", "true");
      const body = document.createElement("div");
      body.className = "timeline-body";
      const head = document.createElement("header");
      head.className = "timeline-head";
      const h3 = document.createElement("h3");
      h3.textContent = role.title;
      const org = document.createElement("p");
      org.className = "timeline-org";
      org.textContent = role.org;
      const dates = document.createElement("p");
      dates.className = "timeline-dates";
      dates.textContent = role.dates;
      head.appendChild(h3);
      head.appendChild(org);
      head.appendChild(dates);
      const ul = document.createElement("ul");
      ul.className = "bullet-list";
      role.bullets.forEach(function (b) {
        const bullet = document.createElement("li");
        bullet.textContent = b;
        ul.appendChild(bullet);
      });
      body.appendChild(head);
      body.appendChild(ul);
      li.appendChild(marker);
      li.appendChild(body);
      container.appendChild(li);
    });
  }

  function renderCaseStudies(lang) {
    const container = document.getElementById("case-studies-root");
    const cs =
      globalThis.PORTFOLIO_I18N?.[lang]?.caseStudies || globalThis.PORTFOLIO_I18N?.en?.caseStudies;
    if (!container || !cs?.items) return;
    container.replaceChildren();
    cs.items.forEach(function (item) {
      const art = document.createElement("article");
      art.className = "case-study-card";
      const company = document.createElement("p");
      company.className = "case-study-company";
      company.textContent = item.company;
      const h3 = document.createElement("h3");
      h3.className = "case-study-title";
      h3.textContent = item.headline;
      const p = document.createElement("p");
      p.className = "case-study-body";
      p.textContent = item.body;
      art.appendChild(company);
      art.appendChild(h3);
      art.appendChild(p);
      container.appendChild(art);
    });
  }

  function renderRightFit(lang) {
    const ul = document.getElementById("right-fit-list");
    const rf = globalThis.PORTFOLIO_I18N?.[lang]?.rightFit || globalThis.PORTFOLIO_I18N?.en?.rightFit;
    if (!ul || !rf?.bullets) return;
    ul.replaceChildren();
    rf.bullets.forEach(function (text) {
      const li = document.createElement("li");
      li.textContent = text;
      ul.appendChild(li);
    });
  }

  function renderReferences(lang) {
    const container = document.getElementById("reference-cards");
    const bundle =
      globalThis.PORTFOLIO_I18N?.[lang]?.testimonial || globalThis.PORTFOLIO_I18N?.en?.testimonial;
    const fallback = globalThis.PORTFOLIO_I18N?.en?.testimonial;
    const refs = bundle?.references || fallback?.references;
    if (!container || !refs) return;
    container.replaceChildren();
    refs.forEach(function (ref) {
      const card = document.createElement("article");
      card.className = "reference-card";
      card.setAttribute("role", "listitem");

      const name = document.createElement("h3");
      name.className = "reference-name";
      name.textContent = ref.name;

      const role = document.createElement("p");
      role.className = "reference-role";
      role.textContent = ref.role;

      const msg = document.createElement("p");
      msg.className = "reference-message";
      msg.textContent = ref.message;

      const link = document.createElement("a");
      link.className = "reference-link";
      link.textContent = ref.linkLabel || "LinkedIn profile";
      link.href = ref.linkedin || "#";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(msg);
      card.appendChild(link);
      container.appendChild(card);
    });
  }

  function initIntakeForm() {
    const form = document.getElementById("intake-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const lang = getLocale();
      const project = form.elements.project.value.trim();
      if (!project) return;
      const audience = form.elements.audience.value.trim();
      const timeline = form.elements.timeline.value.trim();
      const budget = form.elements.budget.value.trim();
      const links = form.elements.links.value.trim();
      const lines = [
        t(lang, "intake.emailHeading"),
        "",
        t(lang, "intake.labelProject") + ": " + project,
        t(lang, "intake.labelAudience") + ": " + audience,
        t(lang, "intake.labelTimeline") + ": " + timeline,
        t(lang, "intake.labelBudget") + ": " + budget,
        t(lang, "intake.labelLinks") + ": " + links,
      ];
      const footer = t(lang, "intake.emailFooter");
      const main = lines.join("\n") + (footer || "");
      const body = mailtoBodyWithPrefix(lang, main);
      const subject = t(lang, "intake.emailSubject");
      window.location.href =
        "mailto:" +
        BUSINESS_EMAIL +
        "?subject=" +
        encodeURIComponent(subject || "Project brief") +
        "&body=" +
        encodeURIComponent(body);
    });
  }

  function initCookieSettingsButton() {
    const btn = document.getElementById("cookie-settings-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (window.Cookiebot && typeof window.Cookiebot.renew === "function") {
        window.Cookiebot.renew();
        return;
      }
      if (window.CookieYes && typeof window.CookieYes.openSettings === "function") {
        window.CookieYes.openSettings();
      }
    });
  }

  let heroLottieInstance = null;

  function initHeroLottie() {
    const container = document.getElementById("hero-lottie");
    const wrap = document.querySelector(".hero-art");
    if (!container || !wrap) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      wrap.classList.add("hero-art--static");
      return;
    }

    const Lottie = globalThis.lottie || globalThis.bodymovin;
    if (!Lottie || typeof Lottie.loadAnimation !== "function") {
      wrap.classList.add("hero-art--static");
      return;
    }

    const jsonUrl = new URL("images/hero-lottie.json", document.baseURI).href;
    fetch(jsonUrl)
      .then(function (r) {
        if (!r.ok) throw new Error("hero-lottie fetch");
        return r.json();
      })
      .then(function (data) {
        heroLottieInstance = Lottie.loadAnimation({
          container: container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
        });
      })
      .catch(function () {
        wrap.classList.add("hero-art--static");
      });
  }

  let navMenuOpen = false;

  function syncNavToggleA11y() {
    const btn = document.getElementById("nav-toggle");
    if (!btn) return;
    const lang = getLocale();
    const label = navMenuOpen ? t(lang, "nav.menuClose") : t(lang, "nav.menuOpen");
    if (label) btn.setAttribute("aria-label", label);
    btn.setAttribute("aria-expanded", navMenuOpen ? "true" : "false");
  }

  function setNavMenuOpen(open) {
    navMenuOpen = open;
    const header = document.getElementById("site-header");
    if (header) header.classList.toggle("is-nav-open", open);
    syncNavToggleA11y();
  }

  function initNavMenu() {
    const btn = document.getElementById("nav-toggle");
    const nav = document.getElementById("primary-nav");
    if (!btn || !nav) return;

    syncNavToggleA11y();

    btn.addEventListener("click", function () {
      setNavMenuOpen(!navMenuOpen);
    });

    nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function () {
        setNavMenuOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNavMenuOpen(false);
    });

    window.addEventListener(
      "resize",
      function () {
        if (window.innerWidth >= 900) setNavMenuOpen(false);
      },
      { passive: true }
    );
  }

  function initLangSelect() {
    const sel = document.getElementById("lang-select");
    if (!sel) return;
    LANGS.forEach(function (L) {
      const opt = document.createElement("option");
      opt.value = L.code;
      opt.textContent = L.label;
      sel.appendChild(opt);
    });
    sel.value = getLocale();
    sel.addEventListener("change", function () {
      setLocale(sel.value);
    });
  }

  function initReveal() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    const els = document.querySelectorAll(".reveal");
    if (!els.length || !("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  applyTheme(getPreferredTheme());
  initLangSelect();
  initNavMenu();
  const locale = getLocale();
  root.setAttribute("lang", HTML_LANG_BY_LOCALE[locale] || "en");
  applyI18n(locale);
  syncNavToggleA11y();
  applyMailtoGuidedLinks(locale);
  renderServices(locale);
  renderPricing(locale);
  renderExperience(locale);
  renderCaseStudies(locale);
  renderRightFit(locale);
  renderReferences(locale);
  initIntakeForm();
  initCookieSettingsButton();
  initHeroLottie();

  document.querySelector(".theme-toggle")?.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }
})();
