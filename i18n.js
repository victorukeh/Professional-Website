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
        experience: "Experience",
        video: "Intro",
        services: "Services",
        pricing: "Pricing",
        intake: "Project brief",
        checklist: "Free checklist",
        skills: "Skills",
        contact: "Contact",
        book: "Book a call",
        langAria: "Language",
        menuOpen: "Open menu",
        menuClose: "Close menu",
      },
      mailto: {
        subject: "Inquiry — Victor Ukeh (portfolio site)",
        body:
          "Hi Victor,\n\nI am reaching out about the following.\n\nWhat I am reaching out about:\n\nWhat I need help with:\n\nTimeline:\n\nBudget or ballpark:\n\nLinks, repo, or docs:\n\n—\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
        cardSubjectPrefix: "Engagement",
        pricingBodies: [
          "Hi Victor,\n\nI am interested in the Sprint & integrations engagement.\n\nContext:\n\nWhat I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\n—\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
          "Hi Victor,\n\nI am interested in the Product backend engagement.\n\nContext:\n\nWhat I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\n—\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
          "Hi Victor,\n\nI am interested in the Partner retainer engagement.\n\nContext:\n\nWhat I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\n—\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
        ],
      },
      hero: {
        positioning:
          "I help fintech and high growth teams build backend systems that stay reliable when it matters.",
        kicker: "Senior backend and distributed systems engineer",
        lead:
          "I design and ship production backends: event driven savings and payments flows, high throughput job systems, and APIs that stay fast under load, with security, idempotency, and observability built in from the start.",
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
        intro: "A short video introduction will go here when available.",
        placeholder: "Embed YouTube, Vimeo, or a self hosted file in this frame.",
        transcript: "Transcript will publish with the video.",
      },
      services: {
        title: "What I do for clients",
        intro: "Backend work that respects your users, your ledger, and your on call rotation.",
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
            forWho: "Audits, spikes, APIs, or production issues that need senior judgment quickly.",
            features: [
              "One to three week focused slice",
              "Written findings and recommended next steps",
              "Best when you need depth fast",
            ],
          },
          {
            name: "Product backend",
            forWho: "New module, migration, or multi service delivery with clear milestones.",
            features: [
              "Design notes, implementation, tests, handover",
              "Staging and production rollout support",
              "Regular async updates",
            ],
          },
          {
            name: "Partner retainer",
            forWho: "Ongoing ownership: roadmap support, reviews, incidents, and continuity.",
            features: [
              "Monthly hours aligned to your needs",
              "On call by agreement",
              "Quarterly architecture review",
            ],
          },
        ],
      },
      intake: {
        title: "Tell me what you are building",
        intro:
          "Wide rate ranges rarely help before we understand context. Share a short brief. I will reply with a considered view, usually by email, once I understand the problem.",
        labelProject: "What are you building or fixing?",
        labelAudience: "Who is it for (users, internal teams, regulators if relevant)?",
        labelTimeline: "Target timeline or constraints",
        labelBudget: "Budget band or engagement style (optional)",
        labelLinks: "Links (deck, repo, docs)",
        submit: "Open email with this brief",
        emailSubject: "Project brief from your website",
        emailHeading: "Project brief details",
        emailFooter: "\n\n—\nSent via victorukeh.com project brief form",
      },
      checklist: {
        title: "Free one page backend checklist",
        intro: "A self serve one page checklist for fintech and high growth teams. No call required.",
        item1: "Idempotency and retries for money movement flows",
        item2: "Observability baseline for APIs, jobs, and incidents",
        item3: "Fraud and security control checkpoints",
        item4: "Release safety checks for migrations and cutovers",
        download: "Open checklist in Google Docs",
      },
      caseStudies: {
        title: "Selected work",
        intro: "Short, named context. The experience section lists full roles and metrics.",
        items: [
          {
            company: "Moniepoint",
            headline: "Target Savings Backend Service",
            body:
              "The savings flow had race conditions that caused failed jobs under load. I moved execution to idempotent, event driven processing and hardened the job platform to roughly one million active jobs per day. ALL APIs stayed under the benchmark of 250 ms while onboarding scaled to roughly five thousand new plans per day.",
          },
          {
            company: "Moniepoint",
            headline: "Cash Management Service",
            body:
              "I led backend delivery for high volume cash management flows and tightened operational controls in a regulated environment. The work reduced customer cash sourcing friction by about 40%, kept fraud at 0%, and protected key customer business data integrity from unauthorized access and data leaks.",
          },
          {
            company: "GetStac",
            headline: "Agent Delivery Platform",
            body:
              "I owned core matching paths end to end. Reliability work reduced customer reported issues sharply within the first month while keeping assignment latency under 300 ms.",
          },
          {
            company: "IX Note",
            headline: "PXN Ewallet Service",
            body:
              "I led backend work on the PXN e-wallet: Firebase-backed notifications across web and mobile, security hardening that raised satisfaction by roughly 60% and reduced security issues by roughly 80%, an analytics event framework for 10,000+ users, and a Slack chatbot that improved visibility into developer workflows.",
          },
        ],
      },
      rightFit: {
        title: "Who this is for",
        intro: "Clear fit helps both sides decide quickly.",
        bullets: [
          "Fintech teams and startups that process real money or regulated adjacent flows",
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
            linkedin: "https://www.linkedin.com/",
          },
          {
            name: "Daniel Okafor",
            role: "Product and Engineering Lead, GetStac",
            message:
              "He shipped quickly, documented decisions clearly, and raised confidence in delivery across product and engineering.",
            linkLabel: "View LinkedIn profile",
            linkedin: "https://www.linkedin.com/",
          },
        ],
        attribution: "Ask when you email or book a call.",
      },
      personality: {
        title: "How I work",
        body:
          "Async first and documentation heavy. I avoid temporary fixes that become permanent. Based in Nigeria (WAT) with practical overlap for EU and US morning calls. Deployments and cutovers are planned, communicated, and tested.",
      },
      skills: {
        title: "Technical stack",
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
        title: "Experience",
        intro: "Selected roles focused on backend ownership, scale, and reliability.",
      },
      contact: {
        title: "Contact",
        lead:
          "Senior backend role, contract build, or architecture review: send a brief with context. I respond within a few business days.",
        email: "Email me",
        cv: "Download CV",
        book: "Book a call",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      footer: {
        note: "Static site, fast to load and easy to host.",
      },
    },
    pcm: {
      nav: {
        skip: "Skip go main content",
        experience: "Experience",
        video: "Intro",
        services: "Services",
        pricing: "Pricing",
        intake: "Project brief",
        checklist: "Free checklist",
        skills: "Skills",
        contact: "Contact",
        book: "Book call",
        langAria: "Language",
        menuOpen: "Open menu",
        menuClose: "Close menu",
      },
      mailto: {
        subject: "Inquiry, Victor Ukeh portfolio site",
        body:
          "Hi Victor,\n\nWetin I dey reach you for:\n\nWetin I need help with:\n\nTimeline:\n\nBudget or ballpark:\n\nLinks, repo, or docs:\n\n—\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
        cardSubjectPrefix: "Engagement",
        pricingBodies: [
          "Hi Victor,\n\nI dey interested in Sprint & integrations engagement.\n\nContext:\n\nWetin I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\n—\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
          "Hi Victor,\n\nI dey interested in Product backend engagement.\n\nContext:\n\nWetin I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\n—\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
          "Hi Victor,\n\nI dey interested in Partner retainer engagement.\n\nContext:\n\nWetin I need:\n\nTimeline:\n\nBudget or range:\n\nLinks:\n\n—\nVictor Ukeh · Senior backend engineer\nvictorukeh1@gmail.com",
        ],
      },
      hero: {
        positioning:
          "I dey help fintech and high growth teams build backend wey no go fail when e matter pass.",
        kicker: "Senior backend and distributed systems engineer",
        lead:
          "I dey design and ship production backend: event driven savings and payment flow, high throughput job system, and API wey still fast under load, with security, idempotency, and observability from day one.",
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
        intro: "Short intro video go land here when e ready.",
        placeholder: "You fit embed YouTube, Vimeo, or self hosted file here.",
        transcript: "Transcript go follow when video ready.",
      },
      services: {
        title: "Wetin I dey do for clients",
        intro: "Backend work wey go respect your users, your ledger, and your on call people.",
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
            forWho: "Audit, spike, API, or production issue wey need senior judgment sharp sharp.",
            features: [
              "One to three week focused slice",
              "Written findings and recommended next step",
              "E good when you need depth fast",
            ],
          },
          {
            name: "Product backend",
            forWho: "New module, migration, or multi service feature with clear milestone.",
            features: [
              "Design doc, implementation, test, handover",
              "Staging and production rollout support",
              "Regular async update",
            ],
          },
          {
            name: "Partner retainer",
            forWho: "Ongoing ownership: roadmap support, review, incident, and continuity.",
            features: [
              "Monthly hours we go align together",
              "On call by agreement",
              "Quarterly architecture review",
            ],
          },
        ],
      },
      intake: {
        title: "Tell me wetin you dey build",
        intro:
          "Wide rate range no too help before we understand context. Send short brief. I go reply with better view, usually by email, after I understand the problem.",
        labelProject: "Wetin you dey build or fix?",
        labelAudience: "Who e be for (users, internal team, regulator if e matter)?",
        labelTimeline: "Target timeline or constraint",
        labelBudget: "Budget band or engagement style (optional)",
        labelLinks: "Links (deck, repo, docs)",
        submit: "Open email with this brief",
        emailSubject: "Project brief from your website",
        emailHeading: "Project brief details",
        emailFooter: "\n\n—\nSent via victorukeh.com project brief form",
      },
      checklist: {
        title: "Free one page backend checklist",
        intro: "Na self serve one page checklist for fintech and high growth teams. No call needed.",
        item1: "Idempotency and retry check for money movement flow",
        item2: "Observability baseline for API, jobs, and incidents",
        item3: "Fraud and security control checkpoints",
        item4: "Release safety checks for migration and cutover",
        download: "Open checklist in Google Docs",
      },
      caseStudies: {
        title: "Selected work",
        intro: "Short example with name. Experience section get full role and metric.",
        items: [
          {
            company: "Moniepoint",
            headline: "Target Savings Backend Service",
            body:
              "Savings flow get race condition wey dey cause failed job under load. I move execution go idempotent, event driven processing and I strengthen job platform reach roughly one million active job per day. Plan creation API stay under 250 ms while onboarding scale reach roughly five thousand new plan per day.",
          },
          {
            company: "Moniepoint",
            headline: "Cash Management",
            body:
              "I lead backend delivery for high volume cash management flow and tighten operational controls for regulated environment. The work reduce customer cash sourcing friction by about 40%, keep fraud at 0%, and improve ML validation performance by roughly 30 to 40% on large datasets.",
          },
          {
            company: "GetStac",
            headline: "Agent Delivery Platform",
            body:
              "I own core matching path end to end. Reliability work cut customer reported issue well well inside first month while assignment latency stay under 300 ms.",
          },
          {
            company: "IX Note",
            headline: "PXN Ewallet Service",
            body:
              "I lead backend work for PXN e-wallet: Firebase-backed notifications across web and mobile, security hardening wey push satisfaction up roughly 60% and cut security issues roughly 80%, an analytics event framework for 10,000+ users, and a Slack chatbot wey improve dev workflow visibility.",
          },
        ],
      },
      rightFit: {
        title: "Who e fit for",
        intro: "Clear fit dey help both sides decide fast.",
        bullets: [
          "Fintech team and startup wey dey move real money or regulated adjacent flow",
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
            linkedin: "https://www.linkedin.com/",
          },
          {
            name: "Daniel Okafor",
            role: "Product and Engineering Lead, GetStac",
            message:
              "He ship fast, document decision well, and make product and engineering trust delivery more.",
            linkLabel: "Open LinkedIn profile",
            linkedin: "https://www.linkedin.com/",
          },
        ],
        attribution: "Ask when you email or book call.",
      },
      personality: {
        title: "How I dey work",
        body:
          "Async first and documentation heavy. I no like temporary fix wey go become permanent. I dey Nigeria (WAT) with practical overlap for EU and US morning call. Deployment and cutover dey planned, communicated, and tested.",
      },
      skills: {
        title: "Technical stack",
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
        title: "Experience",
        intro: "Selected roles wey focus on backend ownership, scale, and reliability.",
      },
      contact: {
        title: "Contact",
        lead:
          "Senior backend role, contract build, or architecture review: send brief with context. I go reply inside few business days.",
        email: "Email me",
        cv: "Download CV",
        book: "Book call",
        linkedin: "LinkedIn",
        github: "GitHub",
      },
      footer: {
        note: "Static site, fast to load and easy to host.",
      },
    },
  };

  global.EXPERIENCE_BY_LANG = {
    en: [
      {
        title: "Backend Engineer (Senior Scope)",
        org: "Moniepoint, Savings and Deposits",
        dates: "2025 to present",
        bullets: [
          "Led backend for Target Savings, scaling to roughly 5,000 new savings plans per day with sub 250 ms API responses, alongside strong deposit growth in the first six months.",
          "Cut customer-reported issues by 90% post-launch via monitoring, performance tuning, and fast incident response.",
          "Built a high-throughput, idempotent, fault-tolerant job system for ~1M active jobs daily; removed race conditions and bottlenecks.",
          "Ran risk-free sunset of Locked Savings with zero user disruption and full data integrity.",
          "End-to-end security and incident response: no fraud cases; <2h resolution for customer issues.",
          "Event-driven savings processing on payment events, idempotent execution, ~10M monthly requests.",
          "Reliable notifications with redundancy and graceful degradation; Fixed Savings notification success ~99%.",
        ],
      },
      {
        title: "Senior Backend Engineer",
        org: "GetStac",
        dates: "2025",
        bullets: [
          "Core matching platform: end-to-end agent-to-store assignment, sub-300ms latency, fault-tolerant architecture.",
          "Reliability work cut customer-reported issues by 70% in under a month.",
          "Strong data consistency and lifecycle management; ~60% fewer customer-facing errors.",
        ],
      },
      {
        title: "Backend Engineer",
        org: "Moniepoint, Cash Management",
        dates: "2024 to 2025",
        bullets: [
          "Backend for high volume cash movement workflows; roughly 40% reduction in cash sourcing pain for customers.",
          "Security controls maintaining 0% fraud rate.",
          "ML based image and text validation pipelines; roughly 30 to 40% lower query and validation latency on large datasets.",
        ],
      },
      {
        title: "Full Stack Engineer",
        org: "IX Note Service Limited",
        dates: "2022 to 2024",
        bullets: [
          "Firebase integration for notifications across web and mobile.",
          "Security hardening on PXN wallet: ~60% higher satisfaction, ~80% fewer security vulnerabilities.",
          "Analytics event framework for 10,000+ users’ interactions.",
          "Slack chatbot for dev tasks and events, improving team productivity.",
        ],
      },
      {
        title: "Backend Developer",
        org: "Cargle",
        dates: "2022 to 2024",
        bullets: [
          "Security patches: ~90% reduction in security issues.",
          "Multi-cloud (AWS, Firebase, Heroku, DigitalOcean): ~35% monthly cost savings via optimization.",
          "Dispatch system with >90% completion rate.",
          "Spikk Deliveries architecture and UX improvements; ~15% annual revenue lift.",
        ],
      },
      {
        title: "Full Stack Developer",
        org: "ITF",
        dates: "2021 to 2022",
        bullets: [
          "ITF Board Meeting Software; ~$600/month cost savings.",
          "Mentored junior developers on tools and languages.",
        ],
      },
      {
        title: "Software Developer Intern",
        org: "IX Note Service Limited",
        dates: "2020 to 2021",
        bullets: [
          "Krakenhaus hospital app backend; strong lift in customer satisfaction.",
          "Documentation and project management improvements.",
          "Rigorous testing discipline and quality gates.",
        ],
      },
    ],
    pcm: [
      {
        title: "Backend Engineer (Senior Scope)",
        org: "Moniepoint, Savings and Deposits",
        dates: "2025 to present",
        bullets: [
          "I lead backend for Target Savings; e scale reach roughly 5,000 new savings plans daily with sub 250 ms API, with strong deposit growth inside first six months.",
          "Customer-reported issue drop by 90% after launch through monitoring, performance tuning, and quick incident response.",
          "I build high-throughput, idempotent, fault-tolerant job system for ~1M active jobs daily; race condition and bottleneck comot.",
          "We sunset Locked Savings without wahala for users and data still clean.",
          "Security and incident response end-to-end: no fraud case; customer issue <2 hours to resolve.",
          "Event-driven savings processing on payment events, idempotent execution, ~10M requests per month.",
          "Notification system wey get redundancy; Fixed Savings notification success ~99%.",
        ],
      },
      {
        title: "Senior Backend Engineer",
        org: "GetStac",
        dates: "2025",
        bullets: [
          "Core matching platform: agent-to-store assignment end-to-end, sub-300ms latency, architecture wey fit withstand fault.",
          "Reliability work cut customer issues by 70% in less than one month.",
          "Data consistency and lifecycle management strong; customer-facing error drop ~60%.",
        ],
      },
      {
        title: "Backend Engineer",
        org: "Moniepoint, Cash Management",
        dates: "2024 to 2025",
        bullets: [
          "Backend for high volume cash movement; cash sourcing pain for customers drop ~40%.",
          "Security control dey show 0% fraud rate.",
          "ML image and text validation pipeline; query and validation latency drop roughly 30 to 40% on big data.",
        ],
      },
      {
        title: "Full Stack Engineer",
        org: "IX Note Service Limited",
        dates: "2022 to 2024",
        bullets: [
          "Firebase integration for notification across web and mobile.",
          "PXN wallet security hardening: satisfaction ~60% up, security vulnerability ~80% down.",
          "Analytics event framework for 10,000+ users.",
          "Slack chatbot for dev task and event; productivity improve for team.",
        ],
      },
      {
        title: "Backend Developer",
        org: "Cargle",
        dates: "2022 to 2024",
        bullets: [
          "Security patch: security issue drop ~90%.",
          "Multi-cloud (AWS, Firebase, Heroku, DigitalOcean): ~35% monthly cost savings.",
          "Dispatch system with >90% completion rate.",
          "Spikk Deliveries architecture and UX; ~15% annual revenue increase.",
        ],
      },
      {
        title: "Full Stack Developer",
        org: "ITF",
        dates: "2021 to 2022",
        bullets: [
          "ITF Board Meeting Software; ~$600/month cost savings.",
          "I mentor junior dev on tools and languages.",
        ],
      },
      {
        title: "Software Developer Intern",
        org: "IX Note Service Limited",
        dates: "2020 to 2021",
        bullets: [
          "Krakenhaus hospital app backend; customer satisfaction climb well well.",
          "Documentation and project management better.",
          "Testing discipline tight; quality gate dey respected.",
        ],
      },
    ],
  };
})(typeof window !== "undefined" ? window : globalThis);
