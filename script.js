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
    return "dark";
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
    applyPageTitle(code);
    renderServices(code);
    renderPricing(code);
    renderExperience(code);
    renderCaseStudies(code);
    // renderReferences(code);
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
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      const val = t(lang, key);
      if (val != null) el.setAttribute("placeholder", val);
    });
  }

  const PAGE_DOC_KEYS = {
    home: "docTitle",
    work: "docWork",
    services: "docServices",
    contact: "docContact",
    checklist: "docChecklist",
    intro: "docIntro",
  };

  function applyPageTitle(lang) {
    const page = document.body?.getAttribute("data-page") || "home";
    const sub = PAGE_DOC_KEYS[page] || "docTitle";
    const title = t(lang, "pages." + sub);
    if (title) document.title = title;
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
    container.replaceChildren();
    bundle.items.forEach(function (item, i) {
      const li = document.createElement("li");
      li.className = "service-stanza reveal reveal-blur" + (i > 0 ? " reveal-delay-" + Math.min(i, 3) : "");

      const num = document.createElement("span");
      num.className = "service-stanza__num";
      num.textContent = String(i + 1).padStart(2, "0");

      const body = document.createElement("div");
      body.className = "service-stanza__body";
      const h3 = document.createElement("h3");
      h3.className = "service-stanza__title";
      h3.textContent = item.title;
      const p = document.createElement("p");
      p.className = "service-stanza__desc";
      p.textContent = item.body;
      body.appendChild(h3);
      body.appendChild(p);

      li.appendChild(num);
      li.appendChild(body);
      container.appendChild(li);
    });
  }

  function renderPricing(lang) {
    const container = document.getElementById("pricing-root");
    const bundle =
      globalThis.PORTFOLIO_I18N?.[lang]?.pricing || globalThis.PORTFOLIO_I18N?.en?.pricing;
    if (!container || !bundle?.tiers) return;
    container.replaceChildren();
    bundle.tiers.forEach(function (tier, i) {
      const li = document.createElement("li");
      li.className = "engagement-stanza reveal reveal-blur" + (i === 1 ? " engagement-stanza--featured" : "") + (i > 0 ? " reveal-delay-" + Math.min(i, 3) : "");

      const head = document.createElement("div");
      head.className = "engagement-stanza__head";
      const num = document.createElement("span");
      num.className = "engagement-stanza__num";
      num.textContent = String(i + 1).padStart(2, "0");
      const h3 = document.createElement("h3");
      h3.className = "engagement-stanza__title";
      h3.textContent = tier.name;
      head.appendChild(num);
      head.appendChild(h3);
      if (i === 1 && bundle.popular) {
        const badge = document.createElement("span");
        badge.className = "engagement-stanza__badge";
        badge.textContent = bundle.popular;
        head.appendChild(badge);
      }

      const forWho = document.createElement("p");
      forWho.className = "engagement-stanza__for";
      forWho.textContent = tier.forWho;

      const body = document.createElement("div");
      body.className = "engagement-stanza__body";
      body.appendChild(head);
      body.appendChild(forWho);
      if (tier.scopeAnchor) {
        const scope = document.createElement("p");
        scope.className = "engagement-stanza__scope";
        scope.textContent = tier.scopeAnchor;
        body.appendChild(scope);
      }
      const ul = document.createElement("ul");
      ul.className = "engagement-stanza__features";
      tier.features.forEach(function (f) {
        const featLi = document.createElement("li");
        featLi.textContent = f;
        ul.appendChild(featLi);
      });
      body.appendChild(ul);

      const cta = document.createElement("a");
      cta.className = "engagement-stanza__cta";
      const prefix = t(lang, "mailto.cardSubjectPrefix") || "Engagement";
      const subj = prefix + ": " + tier.name;
      const mailtoBundle =
        globalThis.PORTFOLIO_I18N?.[lang]?.mailto || globalThis.PORTFOLIO_I18N?.en?.mailto;
      const tierBodies = mailtoBundle?.pricingBodies;
      const mailBody =
        (Array.isArray(tierBodies) && tierBodies[i] != null ? tierBodies[i] : null) ||
        mailtoBundle?.body ||
        "";
      cta.href =
        "mailto:" +
        BUSINESS_EMAIL +
        "?subject=" +
        encodeURIComponent(subj) +
        (mailBody ? "&body=" + encodeURIComponent(mailBody) : "");
      const arrow = document.createElement("span");
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = " →";
      cta.appendChild(document.createTextNode(bundle.cta));
      cta.appendChild(arrow);
      body.appendChild(cta);

      li.appendChild(body);
      container.appendChild(li);
    });
  }

  function renderExperience(lang) {
    const container = document.getElementById("experience-timeline");
    const allRoles =
      globalThis.EXPERIENCE_BY_LANG?.[lang] || globalThis.EXPERIENCE_BY_LANG?.en;
    if (!container || !allRoles) return;
    const roles = allRoles.slice(0, 4);
    container.replaceChildren();
    container.className = "track-stanzas";
    roles.forEach(function (role, i) {
      const li = document.createElement("li");
      li.className = "track-stanza reveal reveal-blur" + (i > 0 ? " reveal-delay-" + Math.min(i, 3) : "");
      li.setAttribute("role", "listitem");

      const num = document.createElement("span");
      num.className = "track-stanza__num";
      num.textContent = String(i + 1).padStart(2, "0");

      const body = document.createElement("div");
      body.className = "track-stanza__body";

      const h3 = document.createElement("h3");
      h3.className = "track-stanza__title";
      h3.textContent = role.title;

      const meta = document.createElement("p");
      meta.className = "track-stanza__meta";
      const orgSpan = document.createElement("span");
      orgSpan.className = "track-stanza__org";
      orgSpan.textContent = role.org;
      const sep = document.createElement("span");
      sep.className = "track-stanza__sep";
      sep.setAttribute("aria-hidden", "true");
      sep.textContent = "·";
      const dates = document.createElement("span");
      dates.className = "track-stanza__dates";
      dates.textContent = role.dates;
      meta.appendChild(orgSpan);
      meta.appendChild(sep);
      meta.appendChild(dates);

      body.appendChild(h3);
      body.appendChild(meta);

      if (role.summary) {
        const p = document.createElement("p");
        p.className = "track-stanza__prose";
        p.textContent = role.summary;
        body.appendChild(p);
      } else if (role.bullets && role.bullets.length) {
        const ul = document.createElement("ul");
        ul.className = "track-stanza__list";
        role.bullets.forEach(function (b) {
          const bullet = document.createElement("li");
          bullet.textContent = b;
          ul.appendChild(bullet);
        });
        body.appendChild(ul);
      }

      li.appendChild(num);
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
    cs.items.forEach(function (item, i) {
      const li = document.createElement("li");
      li.className = "case-stanza reveal reveal-blur" + (i > 0 ? " reveal-delay-" + Math.min(i, 3) : "");

      const company = document.createElement("p");
      company.className = "case-stanza__company";
      company.textContent = item.company;

      const h3 = document.createElement("h3");
      h3.className = "case-stanza__headline";
      h3.textContent = item.headline;

      const teaser = item.teaser || "";
      if (teaser) {
        const teaserEl = document.createElement("p");
        teaserEl.className = "case-stanza__teaser";
        teaserEl.textContent = teaser;
        li.appendChild(company);
        li.appendChild(h3);
        li.appendChild(teaserEl);
      } else {
        li.appendChild(company);
        li.appendChild(h3);
      }

      if (item.body) {
        const p = document.createElement("p");
        p.className = "case-stanza__body";
        p.textContent = item.body;
        li.appendChild(p);
      }

      container.appendChild(li);
    });
  }

  const WEBSITE_PROJECT_TYPES = [
    {
      title: "Landing Page",
      forWho: "For a single offer, portfolio, or pre launch page that needs to look serious fast.",
      scope: "Most launch sites ship in under two weeks.",
      prices: { NGN: "₦1,050,000", USD: "$650", EUR: "€600" },
      features: [
        "Up to 5 pages, built mobile first",
        "Copy structure, SEO basics, and analytics wired in",
        "Contact or booking flow connected end to end",
      ],
    },
    {
      title: "Business Website",
      forWho: "For a company that needs to be found, trusted, and easy to contact.",
      scope: "Typical turnaround: three to four weeks.",
      prices: { NGN: "₦2,900,000", USD: "$1,800", EUR: "€1,650" },
      features: [
        "Up to 10 pages with a CMS you can actually edit yourself",
        "Booking, payment, or contact integrations wired up",
        "Analytics and on page SEO from day one",
      ],
    },
    {
      title: "E-commerce Store",
      forWho: "For a business that needs to sell online without duct taping plugins together.",
      scope: "Typical turnaround: four to six weeks.",
      prices: { NGN: "₦4,800,000", USD: "$3,000", EUR: "€2,750" },
      features: [
        "Product catalog, cart, and checkout wired to a real payment processor",
        "Inventory and order management you can actually run",
        "Built to survive a launch day traffic spike",
      ],
    },
    {
      title: "Web App / SaaS",
      forWho: "For a team turning an idea into a real product, not another brochure site.",
      scope: "Timeline scoped to what you're building.",
      prices: { NGN: "₦7,200,000", USD: "$4,500", EUR: "€4,150" },
      features: [
        "Auth, database, and admin panel from day one",
        "Architecture built to hold past your first 10,000 users",
        "Deployment and monitoring set up before handoff",
      ],
    },
  ];

  // Eurozone members as of 2026 — everyone else outside Nigeria defaults to USD.
  const EUROZONE_COUNTRIES = new Set([
    "AT", "BE", "HR", "CY", "EE", "FI", "FR", "DE", "GR", "IE",
    "IT", "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES",
  ]);

  function detectVisitorCurrency() {
    return new Promise(function (resolve) {
      const CURRENCY_KEY = "ukeh-visitor-currency";
      const cached = sessionStorage.getItem(CURRENCY_KEY);
      if (cached === "USD" || cached === "NGN" || cached === "EUR") {
        resolve(cached);
        return;
      }
      const controller = new AbortController();
      const timeoutId = setTimeout(function () {
        controller.abort();
      }, 2500);
      fetch("https://ipwho.is/", { signal: controller.signal })
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          let currency = "NGN";
          if (data && data.success !== false && data.country_code) {
            if (data.country_code === "NG") currency = "NGN";
            else if (EUROZONE_COUNTRIES.has(data.country_code)) currency = "EUR";
            else currency = "USD";
          }
          sessionStorage.setItem(CURRENCY_KEY, currency);
          resolve(currency);
        })
        .catch(function () {
          resolve("NGN");
        })
        .finally(function () {
          clearTimeout(timeoutId);
        });
    });
  }

  function initWebsiteProjectTypes() {
    const grid = document.getElementById("project-type-grid");
    const modal = document.getElementById("project-price-modal");
    if (!grid || !modal || typeof modal.showModal !== "function") return;

    const titleEl = modal.querySelector(".project-modal__title");
    const forEl = modal.querySelector(".project-modal__for");
    const scopeEl = modal.querySelector(".project-modal__scope");
    const pricesEl = modal.querySelector(".project-modal__prices");
    const featuresEl = modal.querySelector(".project-modal__features");
    const ctaEl = modal.querySelector(".project-modal__cta");

    const PRICE_LABELS = { NGN: "Naira", USD: "Dollars", EUR: "Euros" };
    const CURRENCY_ORDER = ["NGN", "USD", "EUR"];
    // Naira until IP lookup resolves — matches the "can't tell, use Naira" default.
    let visitorCurrency = "NGN";
    detectVisitorCurrency().then(function (c) {
      visitorCurrency = c;
    });

    grid.replaceChildren();
    WEBSITE_PROJECT_TYPES.forEach(function (project, i) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "project-type-card reveal reveal-blur" + (i > 0 ? " reveal-delay-" + Math.min(i, 3) : "");
      btn.setAttribute("role", "listitem");

      const h3 = document.createElement("h3");
      h3.className = "project-type-card__title";
      h3.textContent = project.title;

      const forP = document.createElement("p");
      forP.className = "project-type-card__for";
      forP.textContent = project.forWho;

      const hint = document.createElement("span");
      hint.className = "project-type-card__hint";
      hint.textContent = "See indicative pricing →";

      btn.appendChild(h3);
      btn.appendChild(forP);
      btn.appendChild(hint);

      btn.addEventListener("click", function () {
        titleEl.textContent = project.title;
        forEl.textContent = project.forWho;
        scopeEl.textContent = project.scope;

        pricesEl.replaceChildren();
        const primary = document.createElement("div");
        primary.className = "project-modal__price project-modal__price--primary";
        const primaryLabel = document.createElement("span");
        primaryLabel.className = "project-modal__price-label";
        primaryLabel.textContent = PRICE_LABELS[visitorCurrency];
        const primaryValue = document.createElement("span");
        primaryValue.className = "project-modal__price-value";
        primaryValue.textContent = project.prices[visitorCurrency];
        primary.appendChild(primaryLabel);
        primary.appendChild(primaryValue);
        pricesEl.appendChild(primary);

        const secondaryGroup = document.createElement("div");
        secondaryGroup.className = "project-modal__price-secondary-group";
        CURRENCY_ORDER.filter(function (code) {
          return code !== visitorCurrency;
        }).forEach(function (code) {
          const wrap = document.createElement("div");
          wrap.className = "project-modal__price project-modal__price--secondary";
          const label = document.createElement("span");
          label.className = "project-modal__price-label";
          label.textContent = PRICE_LABELS[code];
          const value = document.createElement("span");
          value.className = "project-modal__price-value";
          value.textContent = project.prices[code];
          wrap.appendChild(label);
          wrap.appendChild(value);
          secondaryGroup.appendChild(wrap);
        });
        pricesEl.appendChild(secondaryGroup);

        featuresEl.replaceChildren();
        project.features.forEach(function (f) {
          const li = document.createElement("li");
          li.textContent = f;
          featuresEl.appendChild(li);
        });

        ctaEl.href = "mailto:victorukeh1@gmail.com?subject=" + encodeURIComponent(project.title);

        modal.showModal();
      });

      grid.appendChild(btn);
    });

    modal.addEventListener("click", function (event) {
      const rect = modal.getBoundingClientRect();
      const inDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!inDialog) modal.close();
    });
  }

  function linkedinProfileLooksValid(href) {
    return /^https?:\/\/(www\.)?linkedin\.com\/(in|pub|company)\//i.test(String(href || ""));
  }

  /* References section hidden — uncomment with work.html testimonial block
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

      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(msg);
      if (linkedinProfileLooksValid(ref.linkedin)) {
        const link = document.createElement("a");
        link.className = "reference-link";
        link.textContent = ref.linkLabel || "LinkedIn profile";
        link.href = ref.linkedin;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        card.appendChild(link);
      }
      container.appendChild(card);
    });
  }
  */

  let heroSceneInstance = null;
  let auroraInstance = null;
  let ambientInstance = null;

  function shouldDisableScenes() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower =
      (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 2) ||
      (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 1);
    return reduceMotion || lowPower;
  }

  function readHeroSceneColors() {
    const styles = getComputedStyle(root);
    const accent = styles.getPropertyValue("--accent").trim() || "#2997ff";
    const text = styles.getPropertyValue("--text").trim() || "#f5f5f7";
    const isDark = root.getAttribute("data-theme") !== "light";
    return {
      edgeColor: accent,
      pulseColor: isDark ? text : accent,
      particleColor: accent,
    };
  }

  function initHeroScene() {
    const canvas = document.getElementById("hero-scene");
    const wrap = document.querySelector(".hero-art");
    if (!canvas || !wrap) return;

    if (shouldDisableScenes() || !globalThis.HeroScene) {
      wrap.classList.add("hero-art--static");
      return;
    }

    try {
      heroSceneInstance = globalThis.HeroScene.create(
        Object.assign({ canvas: canvas }, readHeroSceneColors())
      );
    } catch (err) {
      heroSceneInstance = null;
    }

    if (!heroSceneInstance) {
      wrap.classList.add("hero-art--static");
    }
  }

  function initAurora() {
    const canvas = document.getElementById("aurora-canvas");
    if (!canvas) return;
    if (shouldDisableScenes() || !globalThis.HeroAurora) return;
    try {
      auroraInstance = globalThis.HeroAurora.create({ canvas: canvas });
    } catch (err) {
      auroraInstance = null;
    }
  }

  function initAmbient() {
    if (!globalThis.HeroAmbient) return;
    // Ambient orchestrator ties scroll/cursor/theme to the scenes.
    // It runs even if aurora/hero failed, so mood tracking stays coherent.
    ambientInstance = globalThis.HeroAmbient.create({
      aurora: auroraInstance,
      heroScene: heroSceneInstance,
      heroColors: readHeroSceneColors,
    });
  }

  function initIntakeForm() {
    const form = document.getElementById("intake-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const lang = getLocale();
      const messageField = form.elements.message;
      if (messageField) {
        const message = messageField.value.trim();
        if (!message) return;
        const footer = t(lang, "intake.emailFooter") || "";
        const body = message + footer;
        const subject = t(lang, "intake.emailSubject");
        window.location.href =
          "mailto:" +
          BUSINESS_EMAIL +
          "?subject=" +
          encodeURIComponent(subject || "Contact") +
          "&body=" +
          encodeURIComponent(body);
        return;
      }
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

    nav.querySelectorAll("a").forEach(function (a) {
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
  applyPageTitle(locale);
  syncNavToggleA11y();
  applyMailtoGuidedLinks(locale);
  renderServices(locale);
  renderPricing(locale);
  renderExperience(locale);
  renderCaseStudies(locale);
  // renderReferences(locale);
  initIntakeForm();
  initHeroScene();
  initAurora();
  initAmbient();
  initWebsiteProjectTypes();

  document.querySelector(".theme-toggle")?.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function openServicesSkillsFromHash() {
    if (document.body.getAttribute("data-page") !== "services") return;
    if (window.location.hash !== "#skills") return;
    const section = document.getElementById("skills");
    const det = section && section.querySelector("details.page-disclosure");
    if (det) det.open = true;
  }
  openServicesSkillsFromHash();
  window.addEventListener("hashchange", openServicesSkillsFromHash);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initReveal);
  } else {
    initReveal();
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Mouse spotlight on cards
  if (!reducedMotion) {
    function initSpotlight() {
      document.querySelectorAll(".hub-card, .stat-card, .pricing-card").forEach(function (card) {
        card.addEventListener("mousemove", function (e) {
          var rect = card.getBoundingClientRect();
          var x = ((e.clientX - rect.left) / rect.width) * 100;
          var y = ((e.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty("--mouse-x", x + "%");
          card.style.setProperty("--mouse-y", y + "%");
        }, { passive: true });
        card.addEventListener("mouseleave", function () {
          card.style.removeProperty("--mouse-x");
          card.style.removeProperty("--mouse-y");
        });
      });
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initSpotlight);
    } else {
      initSpotlight();
    }
  }


  // Trust strip marquee — re-duplicate after i18n rewrites content
  function initMarquee() {
    var strips = document.querySelectorAll(".trust-text");
    strips.forEach(function (strip) {
      var spans = strip.querySelectorAll("span");
      if (spans.length >= 2) return; // already set up
      var first = strip.querySelector("span");
      if (!first) return;
      var clone = first.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      strip.appendChild(clone);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMarquee);
  } else {
    initMarquee();
  }
})();
