/**
 * UI copy + experience timeline per locale (en, pcm).
 * French, Spanish, German: see i18n.fr-es-de.js (loaded after this file).
 * Swap pricing numbers in PRICING_NUMBERS if your rates change.
 */
(function (global) {
  global.PRICING_NUMBERS = [{ usd: "From $4,500" }, { usd: "From $18,000" }, { usd: "From $6,500 / mo" }];

  global.PORTFOLIO_I18N = {
    en: {
      nav: {
        skip: "Skip to content",
        home: "Home",
        work: "Work",
        services: "Services",
        contact: "Contact",
        experience: "Experience",
        video: "Intro",
        pricing: "Pricing",
        intake: "Project brief",
        checklist: "Free checklist",
        skills: "Skills",
        book: "Book a call",
        langAria: "Language",
        menuOpen: "Open menu",
        menuClose: "Close menu",
      },
      home: {
        heroHeadline:
          "The engineer you bring in when the system has to work.",
        heroName: "Victor Ukeh",
        heroAvailability:
          "1–2 engagements per quarter. EU and US morning overlap.",
        heroLead:
          "The backend work that keeps products running: resilient queues, idempotent flows, and APIs that don't need babysitting at 2am.",
        heroMetaWork: "Work & case studies",
        employersLabel: "Previously at",
        employer1: "Moniepoint",
        employer2: "GetStac",
        hubWorkTitle: "Work",
        hubWorkDesc: "Case studies, metrics, and experience.",
        hubServicesTitle: "Services",
        hubServicesDesc: "Offerings, rates, and stack.",
        hubContactTitle: "Contact",
        hubContactDesc: "Book a call or send a note.",
        hubSectionTitle: "Explore",
      },
      pages: {
        docTitle: "Victor Ukeh · Backend engineer",
        docWork: "Work · Victor Ukeh",
        docServices: "Services · Victor Ukeh",
        docContact: "Contact · Victor Ukeh",
        docChecklist: "Checklist · Victor Ukeh",
        docIntro: "Intro video · Victor Ukeh",
      },
      workPage: {
        breadcrumbCurrent: "Work",
        onThisPage: "On this page",
        jumpCases: "Selected work",
        jumpMetrics: "Production metrics",
        jumpRefs: "References",
        jumpTrack: "The track",
      },
      servicesPage: {
        breadcrumbCurrent: "Services",
        onThisPage: "On this page",
        jumpOfferings: "What I do",
        jumpRates: "Engagement & rates",
        jumpStack: "Core stack",
        jumpChecklist: "Checklist",
        checklistCta: "Free one-page backend checklist",
      },
      mailto: {
        subject: "Inquiry: Victor Ukeh (portfolio site)",
        body:
          "Hi Victor,\n\nI am reaching out about the following.\n\nWhat I am reaching out about:\n\nWhat I need help with:\n\nTimeline:\n\nBudget or ballpark:\n\nLinks, repo, or docs:\n\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
        cardSubjectPrefix: "Engagement",
        pricingBodies: [
          "Hi Victor,\n\nI am interested in the Sprint & integrations engagement.\n\nContext:\n\nWhat I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
          "Hi Victor,\n\nI am interested in the Product backend engagement.\n\nContext:\n\nWhat I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
          "Hi Victor,\n\nI am interested in the Partner retainer engagement.\n\nContext:\n\nWhat I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
        ],
      },
      hero: {
        positioning:
          "I help product teams ship production backends that stay reliable under load—APIs, queues, jobs, and event-driven workflows across domains.",
        kicker: "Senior backend and distributed systems engineer",
        lead:
          "I design and ship production backends: event-driven workflows, high-throughput job systems, and APIs that stay fast under load, with security, idempotency, and observability built in from the start.",
        ctaBook: "Book a 30 minute scoping call",
        ctaEmail: "Email a brief",
      },
      trust: {
        line:
          "REST & gRPC APIs · Event-driven systems · PostgreSQL, MongoDB & Redis · Kafka & message queues · Docker & Kubernetes · Observability & reliability",
      },
      stats: {
        title: "Outcomes that survived production",
        intro: "Figures from production systems, not slide decks.",
        s1v: "<250ms",
        s1l: "API latency target",
        s1d: "Maintained while scaling savings flows",
        s2v: "~10M / mo",
        s2l: "Event driven requests",
        s2d: "Idempotent savings on payment events",
        s3v: "0%",
        s3l: "Fraud cases",
        s3d: "Security posture on critical products",
        s4v: "~1M jobs / day",
        s4l: "Fault tolerant jobs",
        s4d: "High throughput with race conditions removed at the job layer",
        s5v: "99%",
        s5l: "Critical delivery bar",
        s5d: "Notifications and savings comms where near enough is not acceptable",
        s6v: "<2h",
        s6l: "Customer visible turnaround",
        s6d: "Tight loops from alert to resolution when money and trust are on the line",
        s7v: "Zero",
        s7l: "User disruption on migrations",
        s7d: "Sunsets, cutovers, and data moves without breaking active customers",
        s8v: "~90%",
        s8l: "Fewer production fires",
        s8d: "Reliability work that reduced tickets, defects, and repeat incidents",
      },
      video: {
        title: "Intro video",
        intro: "A short introduction in my own words.",
        placeholder: "Embed YouTube, Vimeo, or a self hosted file in this frame.",
        transcript: "Transcript will publish with the video.",
        watchCta: "Open on YouTube",
        watchHint: "Opens YouTube in a new tab.",
      },
      services: {
        title: "What I do for clients",
        intro: "Backend work that respects your users, your data contracts, and your on-call rotation.",
        items: [
          {
            title: "Architecture and system design",
            body:
              "Event driven flows, idempotency, boundaries between services, and diagrams your team can use for decisions.",
          },
          {
            title: "Performance and reliability",
            body: "Latency, queues, backpressure, observability, and the work that prevents overnight incidents.",
          },
          {
            title: "Security conscious builds",
            body:
              "Threat modeling for real products with sound defaults for auth, data, and incident response.",
          },
          {
            title: "Delivery and mentorship",
            body:
              "Milestones, clear RFCs, and raising the level of your team so you are not dependent on one engineer.",
          },
        ],
      },
      pricing: {
        title: "Engagement and rates",
        intro:
          "Indicative USD starting points. Final fees depend on scope, integrations, compliance, and risk.",
        fx: "Invoices are in USD unless we agree otherwise in writing.",
        popular: "Popular",
        cta: "Discuss scope by email",
        tiers: [
          {
            name: "Sprint and integrations",
            forWho:
              "When production is on fire, a vendor slipped a deadline, or you need a spike before committing headcount.",
            scopeAnchor: "Typically 1–3 week engagements.",
            features: [
              "One to three week focused slice",
              "Written findings and recommended next steps",
              "Best when you need depth fast",
            ],
          },
          {
            name: "Product backend",
            forWho:
              "When you are shipping a new module or migration to real users and need someone to carry it through staging and prod.",
            scopeAnchor: "Best for teams with an existing codebase and defined milestones.",
            features: [
              "Design notes, implementation, tests, handover",
              "Staging and production rollout support",
              "Regular async updates",
            ],
          },
          {
            name: "Partner retainer",
            forWho:
              "When you want continuity—not a one-off—someone who already knows your system for roadmap, reviews, and incidents.",
            scopeAnchor: "Monthly hours and on-call by agreement; quarterly architecture review.",
            features: [
              "Monthly hours aligned to your needs",
              "On call by agreement",
              "Quarterly architecture review",
            ],
          },
        ],
      },
      intake: {
        title: "Say hello",
        intro:
          "Keep it light. You can go with what you’re solving, rough timeline, and any links. Sending opens your email app with a draft you can edit before it goes out.",
        labelMessage: "Message",
        placeholderMessage: "What you need, links, timeline…",
        labelProject: "What are you building or fixing?",
        labelAudience: "Who is it for (users, internal teams, regulators if relevant)?",
        labelTimeline: "Target timeline or constraints",
        labelBudget: "Budget band or engagement style (optional)",
        labelLinks: "Links (deck, repo, docs)",
        submit: "Send by email",
        mailtoNote:
          "Opens your default email app. If nothing happens, you may not have a mail client configured. You can then proceed to use Book a call or the Email me button above.",
        emailSubject: "Note from your website",
        emailHeading: "Message",
        emailFooter: "\n\nSent via victorukeh.com contact form",
      },
      checklist: {
        title: "Free one page backend checklist",
        intro:
          "A self-serve one-page checklist for teams shipping production backends — no sales call, no email required to download.",
        item1: "Idempotency and retries for money movement flows",
        item2: "Observability baseline for APIs, jobs, and incidents",
        item3: "Fraud and security control checkpoints",
        item4: "Release safety checks for migrations and cutovers",
        download: "Open checklist in Google Docs",
      },
      caseStudies: {
        title: "Selected work",
        intro:
          "Key results below. Full writeups will be made available when we connect.",
        expandLabel: "Open to read summary",
        items: [
          {
            company: "Moniepoint",
            headline: "Target Savings Backend Service",
            teaser:
              "Idempotent event-driven savings at scale: ~1M active jobs/day, plan APIs under 250ms as onboarding grew fast.",
            body:
              "Race conditions were failing jobs under load. I moved execution to idempotent, event-driven processing and hardened the job platform. APIs held under 250ms while onboarding scaled to roughly five thousand new plans per day.",
          },
          {
            company: "Moniepoint",
            headline: "Cash Management Service",
            teaser:
              "Regulated high volumecash flows: lower sourcing friction, fraud at 0%, stronger controls on sensitive data.",
            body:
              "I led backend delivery and tightened operational controls. Sourcing friction fell about 40%; fraud stayed at zero with improved integrity controls on critical paths.",
          },
          {
            company: "GetStac",
            headline: "Agent Delivery Platform",
            teaser:
              "Owned core matching end to end: fewer customer incidents in week one, assignments under 300ms.",
            body:
              "I owned critical matching paths. Reliability work cut customer-reported issues sharply in the first month without sacrificing assignment latency.",
          },
          {
            company: "IX Note",
            headline: "PXN Ewallet Service",
            teaser:
              "E-wallet backend, notifications, security hardening, analytics events, and a Slack bot for developer visibility.",
            body:
              "Scope included Firebase-backed notifications, security work that moved satisfaction scores, an analytics event layer for 10,000+ users, and internal tooling to reduce team noise.",
          },
        ],
      },
      rightFit: {
        title: "Who this is for",
        intro: "Clear fit helps both sides decide quickly.",
        bullets: [
          "Product teams shipping production backends—SaaS, marketplaces, platforms, internal tools, or any domain with serious traffic and correctness requirements",
          "Engineering managers who need a senior contractor who ships without heavy hand holding",
          "Founders and product leaders who want written decisions and honest tradeoffs",
          "Teams that value async communication, documentation, and predictable delivery",
        ],
      },
      testimonial: {
        title: "References",
        body:
          "Written recommendations from engineering leadership at Moniepoint and GetStac are available on request, including through LinkedIn.",
        references: [
          {
            name: "Aisha Bello",
            role: "Engineering Manager, Moniepoint",
            message:
              "Victor brought structure to a complex backend domain and improved reliability under production pressure.",
            linkLabel: "View LinkedIn profile",
            linkedin: "",
          },
          {
            name: "Daniel Okafor",
            role: "Product and Engineering Lead, GetStac",
            message:
              "He shipped quickly, documented decisions clearly, and raised confidence in delivery across product and engineering.",
            linkLabel: "View LinkedIn profile",
            linkedin: "",
          },
        ],
        attribution: "Ask when you email or book a call.",
      },
      personality: {
        title: "How I work",
        toggleHint: "Optional: expand for detail",
        inline:
          "I work async-first with written decisions and PR-sized slices—so your team can review and own what ships. EU and US morning overlap for calls; deployments and cutovers are planned and communicated, not surprise Friday pushes.",
        body:
          "Async first and documentation heavy. I avoid temporary fixes that become permanent. My work overlaps EU and US morning calls and working schedules. Deployments and cutovers are planned, communicated, and tested.",
      },
      skills: {
        title: "Core stack",
        coreIntro: "What I reach for on day one of a production backend engagement—not an exhaustive inventory.",
        toggleHint: "Expand for the full list",
        intro: "Grouped for recruiters and clients who need to scan quickly.",
        cards: {
          lang: "Languages",
          backend: "Backend & messaging",
          frameworks: "Frameworks",
          data: "Data stores",
          cloud: "Cloud & DevOps",
          test: "Testing",
        },
      },
      exp: {
        title: "The track",
        intro:
          "Think of it as one long run: early levels were tickets and tests; later ones are money and compliance-heavy flows, job systems at seven figures of daily executions, and the quiet work of sunsetting products without drama. Each waypoint is a chapter, not a checklist.",
        introShort:
          "Three stops: current production backend work, a high-growth delivery role, and the earlier chapter that shows how I got here.",
        checkpoint: "Waypoint",
        activeLeg: "Active sector",
      },
      contact: {
        title: "Contact",
        bio1: "My name is Victor Ukeh. I build backends for teams where downtime has a cost.",
        bio2:
          "I work on distributed systems, high-throughput APIs, fault-tolerant job pipelines and many more.",
        bio3: "I work with observability and compliance built in, not bolted on.",
        bio4: "My recent work shows regulated fintech at scale.",
        bio5: "If the backend has to work, let's talk.",
        watchIntro: "Watch the intro video",
        detailsHeading: "How to reach me",
        practicalities:
          "I take on 1–2 clients per quarter so every engagement gets real focus. I reply within a few business days.",
        lead: "Book a call, send email, or use the links below—whatever fits how you like to work.",
        secondaryIntro: "Or reach out directly:",
        email: "Email me",
        cv: "Download CV",
        book: "Book a call",
        linkedin: "LinkedIn",
        github: "GitHub",
        photoFallback: "Photo placeholder",
      },
    },
    pcm: {
      nav: {
        skip: "Skip go main content",
        home: "Home",
        work: "Work",
        services: "Services",
        contact: "Contact",
        experience: "Experience",
        video: "Intro",
        pricing: "Pricing",
        intake: "Project brief",
        checklist: "Free checklist",
        skills: "Skills",
        book: "Book call",
        langAria: "Language",
        menuOpen: "Open menu",
        menuClose: "Close menu",
      },
      home: {
        heroHeadline:
          "I dey build backend wey still stand under real traffic, real data, and real product constraint.",
        heroName: "Victor Ukeh",
        heroAvailability:
          "Usually 1–2 new client per quarter. I dey West Africa (WAT) with overlap for EU and US morning.",
        heroLead:
          "Event-driven workflow, resilient job system, API wey dey fast under load — SaaS, B2B, marketplace, platform, internal tool, and other backend wey reliability matter.",
        heroMetaWork: "Work & case studies",
        employersLabel: "Previously at",
        employer1: "Moniepoint",
        employer2: "GetStac",
        hubWorkTitle: "Work",
        hubWorkDesc: "Case study, metric, and experience.",
        hubServicesTitle: "Services",
        hubServicesDesc: "Offerings, rates, and stack.",
        hubContactTitle: "Contact",
        hubContactDesc: "Book call or send note.",
        hubSectionTitle: "Explore",
      },
      pages: {
        docTitle: "Victor Ukeh · Backend engineer",
        docWork: "Work · Victor Ukeh",
        docServices: "Services · Victor Ukeh",
        docContact: "Contact · Victor Ukeh",
        docChecklist: "Checklist · Victor Ukeh",
        docIntro: "Intro video · Victor Ukeh",
      },
      workPage: {
        breadcrumbCurrent: "Work",
        onThisPage: "For this page",
        jumpCases: "Selected work",
        jumpMetrics: "Production metrics",
        jumpRefs: "References",
        jumpTrack: "The track",
      },
      servicesPage: {
        breadcrumbCurrent: "Services",
        onThisPage: "For this page",
        jumpOfferings: "Wetin I dey do",
        jumpRates: "Engagement & rates",
        jumpStack: "Core stack",
        jumpChecklist: "Checklist",
        checklistCta: "Free one-page backend checklist",
      },
      mailto: {
        subject: "Inquiry, Victor Ukeh portfolio site",
        body:
          "Hi Victor,\n\nWetin I dey reach you for:\n\nWetin I need help with:\n\nTimeline:\n\nBudget or ballpark:\n\nLinks, repo, or docs:\n\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
        cardSubjectPrefix: "Engagement",
        pricingBodies: [
          "Hi Victor,\n\nI dey interested in Sprint & integrations engagement.\n\nContext:\n\nWetin I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
          "Hi Victor,\n\nI dey interested in Product backend engagement.\n\nContext:\n\nWetin I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
          "Hi Victor,\n\nI dey interested in Partner retainer engagement.\n\nContext:\n\nWetin I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
        ],
      },
      hero: {
        positioning:
          "I dey help product team ship production backend wey go stand under load — API, queue, jobs, and event flow across different domain.",
        kicker: "Senior backend and distributed systems engineer",
        lead:
          "I dey design and ship production backend: event-driven workflow, high throughput job system, and API wey still fast under load, with security, idempotency, and observability from day one.",
        availability:
          "I dey West Africa (WAT). I fit overlap with EU and US morning calls.",
        ctaBook: "Book 30 minute scoping call",
        ctaEmail: "Send email brief",
      },
      trust: {
        line:
          "REST & gRPC APIs · Event-driven systems · PostgreSQL, MongoDB & Redis · Kafka & message queues · Docker & Kubernetes · Observability & reliability",
      },
      stats: {
        title: "Results wey don see real production",
        intro: "Figure from production system, no be slide deck.",
        s1v: "<250ms",
        s1l: "API latency target",
        s1d: "We maintain am as savings flow dey grow",
        s2v: "~10M / mo",
        s2l: "Event driven requests",
        s2d: "Idempotent savings on top payment events",
        s3v: "0%",
        s3l: "Fraud cases",
        s3d: "Security posture for critical product",
        s4v: "~1M jobs / day",
        s4l: "Fault tolerant jobs",
        s4d: "High throughput after we comot race condition for job layer",
        s5v: "99%",
        s5l: "Critical delivery bar",
        s5d: "Notification and savings comms wey near miss no fit work",
        s6v: "<2h",
        s6l: "Customer visible turnaround",
        s6d: "Sharp loop from alert reach resolution when money and trust dey table",
        s7v: "Zero",
        s7l: "User disruption for migration",
        s7d: "Sunset, cutover, and data move without breaking active customer",
        s8v: "~90%",
        s8l: "Less production fire",
        s8d: "Reliability work wey cut ticket, defect, and repeat incident",
      },
      video: {
        title: "Intro video",
        intro: "Short intro for my own voice.",
        placeholder: "You fit embed YouTube, Vimeo, or self hosted file here.",
        transcript: "Transcript go follow when video ready.",
        watchCta: "Open for YouTube",
        watchHint: "E go open YouTube for new tab.",
      },
      services: {
        title: "Wetin I dey do for clients",
        intro: "Backend work wey go respect your users, your data contract, and your on-call people.",
        items: [
          {
            title: "Architecture and system design",
            body:
              "Event driven flow, idempotency, boundary between services, and diagram wey your team fit use decide.",
          },
          {
            title: "Performance and reliability",
            body: "Latency, queue, backpressure, observability, and work wey dey stop overnight incident.",
          },
          {
            title: "Security conscious builds",
            body: "Threat modeling for real product with better default for auth, data, and incident response.",
          },
          {
            title: "Delivery and mentorship",
            body: "Milestone, clear RFC, and help your team level up so one engineer no hold you hostage.",
          },
        ],
      },
      pricing: {
        title: "Engagement and rates",
        intro:
          "Na indicative USD starting point. Final money go depend on scope, integration, compliance, and risk.",
        fx: "Invoice dey USD unless we agree another thing for writing.",
        popular: "Popular",
        cta: "Talk scope by email",
        tiers: [
          {
            name: "Sprint and integrations",
            forWho:
              "When prod dey burn, vendor miss deadline, or you need spike before you hire full time.",
            scopeAnchor: "Usually 1–3 week engagement.",
            features: [
              "One to three week focused slice",
              "Written findings and recommended next step",
              "E good when you need depth fast",
            ],
          },
          {
            name: "Product backend",
            forWho:
              "When you dey ship new module or migration to real users and you need person wey go carry am through staging and prod.",
            scopeAnchor: "E good when you get codebase already and milestone clear.",
            features: [
              "Design doc, implementation, test, handover",
              "Staging and production rollout support",
              "Regular async update",
            ],
          },
          {
            name: "Partner retainer",
            forWho:
              "When you want continuity — person wey don sabi your system for roadmap, review, and incident, no be one-off.",
            scopeAnchor: "Monthly hours and on-call by agreement; quarterly architecture review.",
            features: [
              "Monthly hours we go align together",
              "On call by agreement",
              "Quarterly architecture review",
            ],
          },
        ],
      },
      intake: {
        title: "Say hello",
        intro:
          "Keep am light: wetin you dey solve, rough timeline, and any link. Send go open your email app with draft wey you fit edit before e go out.",
        labelMessage: "Message",
        placeholderMessage: "Wetin you need, link, timeline…",
        labelProject: "Wetin you dey build or fix?",
        labelAudience: "Who e be for (users, internal team, regulator if e matter)?",
        labelTimeline: "Target timeline or constraint",
        labelBudget: "Budget band or engagement style (optional)",
        labelLinks: "Links (deck, repo, docs)",
        submit: "Send by email",
        mailtoNote:
          "E go open your default email app. If nothing happen, you fit no get mail client — use Book call or Email me button wey dey above.",
        emailSubject: "Note from your website",
        emailHeading: "Message",
        emailFooter: "\n\nSent via victorukeh.com contact form",
      },
      checklist: {
        title: "Free one page backend checklist",
        intro:
          "Self-serve one-page checklist for team wey dey ship production backend — no sales call, no email required to download.",
        item1: "Idempotency and retry check for money movement flow",
        item2: "Observability baseline for API, jobs, and incidents",
        item3: "Fraud and security control checkpoints",
        item4: "Release safety checks for migration and cutover",
        download: "Open checklist in Google Docs",
      },
      caseStudies: {
        title: "Selected work",
        intro:
          "One line context per row; open for short outcome (longer write-up dey on request when you contact me).",
        expandLabel: "Open to read summary",
        items: [
          {
            company: "Moniepoint",
            headline: "Target Savings Backend Service",
            teaser:
              "Idempotent event-driven savings: ~1M active job/day, plan API under 250 ms as onboarding grow.",
            body:
              "Race condition dey fail job under load. I move am to idempotent event-driven processing and strengthen job platform. API hold under 250 ms while onboarding scale to roughly five thousand new plan per day.",
          },
          {
            company: "Moniepoint",
            headline: "Cash Management",
            teaser: "Regulated high volumecash: less sourcing wahala, fraud for zero, better control for sensitive data.",
            body:
              "I lead backend delivery and tighten operational control. Sourcing friction fall ~40%; fraud stay zero with better integrity control.",
          },
          {
            company: "GetStac",
            headline: "Agent Delivery Platform",
            teaser: "Matching core end to end: less customer fire for first month, assignment under 300 ms.",
            body:
              "I own critical matching path. Reliability work cut customer reported issue sharp sharp for first month without slow assignment.",
          },
          {
            company: "IX Note",
            headline: "PXN Ewallet Service",
            teaser: "E-wallet backend, notifications, security, analytics event, Slack bot for dev visibility.",
            body:
              "Scope include Firebase notify, security work wey move satisfaction, analytics layer for 10,000+ users, internal tool wey reduce team noise.",
          },
        ],
      },
      rightFit: {
        title: "Who e fit for",
        intro: "Clear fit dey help both sides decide fast.",
        bullets: [
          "Product team wey dey ship production backend — SaaS, marketplace, platform, internal tool, or any domain with serious traffic and correctness bar",
          "Engineering manager wey need senior contractor wey fit ship without heavy hand holding",
          "Founder and product lead wey want written decision and honest tradeoff",
          "Team wey value async communication, documentation, and predictable delivery",
        ],
      },
      testimonial: {
        title: "References",
        body:
          "Written recommendation from engineering leadership for Moniepoint and GetStac dey available on request, including through LinkedIn.",
        references: [
          {
            name: "Aisha Bello",
            role: "Engineering Manager, Moniepoint",
            message:
              "Victor bring clear structure to complex backend work and improve reliability when production pressure high.",
            linkLabel: "Open LinkedIn profile",
            linkedin: "",
          },
          {
            name: "Daniel Okafor",
            role: "Product and Engineering Lead, GetStac",
            message:
              "He ship fast, document decision well, and make product and engineering trust delivery more.",
            linkLabel: "Open LinkedIn profile",
            linkedin: "",
          },
        ],
        attribution: "Ask when you email or book call.",
      },
      personality: {
        title: "How I dey work",
        toggleHint: "Optional: open if you want detail",
        inline:
          "I dey work async-first with written decision and small PR — make your team fit review and own wetin ship. EU and US morning overlap for call; deployment and cutover dey planned, no be surprise Friday push.",
        body:
          "Async first and documentation heavy. I no like temporary fix wey go become permanent. My work dey overlap with EU and US morning calls and working schedules. Deployment and cutover dey planned, communicated, and tested.",
      },
      skills: {
        title: "Core stack",
        coreIntro: "Wetin I go reach for on day one for production backend work — no be full inventory.",
        toggleHint: "Open for full list",
        intro: "Group am make recruiter and client fit scan sharp.",
        cards: {
          lang: "Languages",
          backend: "Backend & messaging",
          frameworks: "Frameworks",
          data: "Data stores",
          cloud: "Cloud & DevOps",
          test: "Testing",
        },
      },
      exp: {
        title: "The track",
        intro:
          "Na one long run: early level na ticket and test; later level na money and compliance-heavy flow, job system wey run millions daily, and quiet work to sunset product without drama. Each waypoint na chapter, no be checklist.",
        introShort:
          "Three stop: current production backend work, high-growth delivery role, and earlier chapter wey show how I reach here.",
        checkpoint: "Waypoint",
        activeLeg: "Where you dey now",
      },
      contact: {
        title: "Contact",
        bio1: "My name na Victor Ukeh. I dey build backend for team wey downtime go cost dem.",
        bio2:
          "I dey work on distributed systems, high-throughput APIs, fault-tolerant job pipelines and plenty more.",
        bio3: "Observability and compliance dey built in from day one, no be bolt-on.",
        bio4: "My recent work na regulated fintech wey dey scale.",
        bio5: "If backend suppose work, make we talk.",
        watchIntro: "Watch intro video",
        detailsHeading: "How to reach me",
        practicalities:
          "I dey take 1–2 client per quarter so every engagement fit get focus. I go reply inside few business days.",
        lead: "Book call, send email, or use link below — wetin fit how you like work.",
        secondaryIntro: "Or reach out direct:",
        email: "Email me",
        cv: "Download CV",
        book: "Book call",
        linkedin: "LinkedIn",
        github: "GitHub",
        photoFallback: "Photo placeholder",
      },
    },
  };

  global.EXPERIENCE_BY_LANG = {
    en: [
      {
        title: "Backend Engineer (Senior Scope)",
        org: "Moniepoint, Savings and Deposits",
        dates: "2025 to present",
        summary:
          "Target Savings at Moniepoint: idempotent savings on payment events, job layer for ~1M daily executions, APIs stable under onboarding load. Fraud at zero; legacy sunset without customer breakage.",
      },
      {
        title: "Senior Backend Engineer",
        org: "GetStac",
        dates: "2025",
        summary:
          "Owned the matching core end to end: reliable agent-to-store assignment, healthier data paths, noticeably fewer customer escalations in the first weeks.",
      },
      {
        title: "Backend Engineer",
        org: "Moniepoint, Cash Management",
        dates: "2024 to 2025",
        summary:
          "Regulated, high-volume cash movement: reduced sourcing friction, fraud at zero on critical paths, ML validation tuned so large payloads did not become large latency.",
      },
      {
        title: "Full Stack Engineer",
        org: "IX Note Service Limited",
        dates: "2022 to 2024",
        summary:
          "Earlier at IX Note I lived across product and platform: PXN wallet and Firebase-backed notifications, security work that moved satisfaction scores, analytics for tens of thousands of users, and a Slack bot that turned team noise into signal.",
      },
      {
        title: "Backend Developer",
        org: "Cargle",
        dates: "2022 to 2024",
        summary:
          "Cargle was a patch-and-optimize arc: security posture up across clouds, monthly burn down, dispatch routes that finished what they started, and product bets like Spikk that showed up on the revenue line.",
      },
      {
        title: "Full Stack Developer",
        org: "ITF",
        dates: "2021 to 2022",
        summary:
          "ITF was shipping board-meeting software that actually saved money every month, and walking juniors through stacks they would later own.",
      },
      {
        title: "Software Developer Intern",
        org: "IX Note Service Limited",
        dates: "2020 to 2021",
        summary:
          "The internship level was where production stuck: hospital backend, tighter docs, and a testing habit that outlasted the badge.",
      },
    ],
    pcm: [
      {
        title: "Backend Engineer (Senior Scope)",
        org: "Moniepoint, Savings and Deposits",
        dates: "2025 to present",
        summary:
          "Target Savings for Moniepoint: idempotent savings, job layer ~1M daily run, API stable when onboarding grow. Fraud zero; sunset old product clean.",
      },
      {
        title: "Senior Backend Engineer",
        org: "GetStac",
        dates: "2025",
        summary:
          "Matching core end to end: fast assignment, data path behave, customer fire drop quick for first weeks.",
      },
      {
        title: "Backend Engineer",
        org: "Moniepoint, Cash Management",
        dates: "2024 to 2025",
        summary:
          "Big-volume regulated cash: less wahala for sourcing, fraud zero for critical path, ML validation no choke for heavy load.",
      },
      {
        title: "Full Stack Engineer",
        org: "IX Note Service Limited",
        dates: "2022 to 2024",
        summary:
          "IX Note time I dey bounce product and platform: PXN wallet, Firebase notify, security work, analytics for plenty users, Slack bot wey reduce team noise.",
      },
      {
        title: "Backend Developer",
        org: "Cargle",
        dates: "2022 to 2024",
        summary:
          "Cargle na patch and optimize level: security up, cloud bill down, dispatch finish wetin e start, Spikk kind move show for revenue.",
      },
      {
        title: "Full Stack Developer",
        org: "ITF",
        dates: "2021 to 2022",
        summary:
          "ITF na ship board software wey save money every month, come carry junior hand for stack matter.",
      },
      {
        title: "Software Developer Intern",
        org: "IX Note Service Limited",
        dates: "2020 to 2021",
        summary:
          "Intern level na where production stick: hospital backend, doc better, testing habit wey no leave after internship.",
      },
    ],
  };
})(typeof window !== "undefined" ? window : globalThis);
