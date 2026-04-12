/** French, Spanish, German UI and experience; loaded after i18n.js */
(function (global) {
  if (!global.PORTFOLIO_I18N) return;
  global.PORTFOLIO_I18N.fr = {
  "nav": {
    "skip": "Aller au contenu",
    "home": "Accueil",
    "work": "Réalisations",
    "services": "Services",
    "contact": "Contact",
    "experience": "Expérience",
    "video": "Intro",
    "pricing": "Tarifs",
    "intake": "Brief projet",
    "checklist": "Checklist gratuite",
    "skills": "Compétences",
    "book": "Prendre rendez-vous",
    "langAria": "Langue",
    "menuOpen": "Ouvrir le menu",
    "menuClose": "Fermer le menu"
  },
  "home": {
    "heroHeadline": "Je conçois des backends qui restent fiables sous le trafic réel, les données réelles et les contraintes produit.",
    "heroName": "Victor Ukeh",
    "heroAvailability": "En général 1–2 missions par trimestre. Afrique de l’Ouest (WAT), recouvrement matinal EU et US.",
    "heroLead": "Flux événementiels, jobs résilients, APIs rapides sous charge — SaaS, B2B, marketplaces, plateformes, outils internes et autres backends où la fiabilité compte.",
    "heroMetaWork": "Réalisations et études de cas",
    "employersLabel": "J’ai travaillé avec",
    "employer1": "Moniepoint",
    "employer2": "GetStac",
    "hubWorkTitle": "Réalisations",
    "hubWorkDesc": "Études de cas, métriques et parcours.",
    "hubServicesTitle": "Services",
    "hubServicesDesc": "Offres, tarifs et stack.",
    "hubContactTitle": "Contact",
    "hubContactDesc": "Appel ou message court.",
    "hubSectionTitle": "Explorer"
  },
  "pages": {
    "docTitle": "Victor Ukeh · Ingénieur backend",
    "docWork": "Réalisations · Victor Ukeh",
    "docServices": "Services · Victor Ukeh",
    "docContact": "Contact · Victor Ukeh",
    "docChecklist": "Checklist · Victor Ukeh",
    "docIntro": "Vidéo d’intro · Victor Ukeh"
  },
  "workPage": {
    "breadcrumbCurrent": "Réalisations",
    "onThisPage": "Sur cette page",
    "jumpCases": "Réalisations",
    "jumpMetrics": "Indicateurs",
    "jumpRefs": "Références",
    "jumpTrack": "Le parcours"
  },
  "servicesPage": {
    "breadcrumbCurrent": "Services",
    "onThisPage": "Sur cette page",
    "jumpOfferings": "Prestations",
    "jumpRates": "Engagements & tarifs",
    "jumpStack": "Stack principal",
    "jumpChecklist": "Checklist",
    "checklistCta": "Checklist backend gratuite (une page)"
  },
  "mailto": {
    "subject": "Prise de contact — Victor Ukeh (portfolio)",
    "body": "Bonjour Victor,\n\nJe vous écris pour le sujet suivant.\n\nObjet de mon message :\n\nCe dont j’ai besoin :\n\nDélais :\n\nBudget indicatif :\n\nLiens / repo / docs :\n\n—\nVictor Ukeh · Ingénieur backend senior\nvictorukeh1@gmail.com",
    "cardSubjectPrefix": "Mission",
    "pricingBodies": [
      "Bonjour Victor,\n\nJe suis intéressé(e) par l’engagement Sprint & intégrations.\n\nContexte :\n\nBesoin :\n\nDélais :\n\nBudget ou fourchette :\n\nLiens :\n\n—\nVictor Ukeh · Ingénieur backend senior\nvictorukeh1@gmail.com",
      "Bonjour Victor,\n\nJe suis intéressé(e) par l’engagement Backend produit.\n\nContexte :\n\nBesoin :\n\nDélais :\n\nBudget ou fourchette :\n\nLiens :\n\n—\nVictor Ukeh · Ingénieur backend senior\nvictorukeh1@gmail.com",
      "Bonjour Victor,\n\nJe suis intéressé(e) par l’engagement Partenaire au forfait.\n\nContexte :\n\nBesoin :\n\nDélais :\n\nBudget ou fourchette :\n\nLiens :\n\n—\nVictor Ukeh · Ingénieur backend senior\nvictorukeh1@gmail.com"
    ]
  },
  "hero": {
    "positioning": "J’aide les équipes produit à livrer des backends de production qui tiennent la charge — APIs, files, jobs et flux événementiels, dans tous secteurs.",
    "kicker": "Ingénieur backend senior et systèmes distribués",
    "lead": "Je conçois et livre des backends de production : flux événementiels, systèmes de jobs à haut débit et APIs rapides sous charge, avec sécurité, idempotence et observabilité dès le départ.",
    "availability": "Basé en Afrique de l’Ouest (WAT). Disponibilité avec recouvrement matinal EU et US.",
    "ctaBook": "Réserver un appel de cadrage (30 minutes)",
    "ctaEmail": "Envoyer un brief par e-mail"
  },
  "trust": {
    "line": "REST & gRPC · Systèmes événementiels · PostgreSQL, MongoDB & Redis · Kafka & files · Docker & Kubernetes · Observabilité & fiabilité"
  },
  "stats": {
    "title": "Résultats qui ont tenu en production",
    "intro": "Chiffres issus de la production, pas de diapositives.",
    "s1v": "<250ms",
    "s1l": "Objectif de latence API",
    "s1d": "Maintenu pendant la montée des flux d’épargne",
    "s2v": "~10M / mois",
    "s2l": "Requêtes événementielles",
    "s2d": "Épargne idempotente sur événements de paiement",
    "s3v": "0%",
    "s3l": "Cas de fraude",
    "s3d": "Posture sécurité sur produits critiques",
    "s4v": "~1M jobs / jour",
    "s4l": "Jobs tolérants aux pannes",
    "s4d": "Haut débit après suppression des conditions de course au niveau des jobs",
    "s5v": "99%",
    "s5l": "Barre de livraison critique",
    "s5d": "Notifications et messages d’épargne où la marge d’erreur n’est pas acceptable",
    "s6v": "<2h",
    "s6l": "Délai visible client",
    "s6d": "Boucles courtes de l’alerte à la résolution quand l’argent est en jeu",
    "s7v": "Zéro",
    "s7l": "Impact utilisateur sur migrations",
    "s7d": "Fins de vie, bascules et déplacements de données sans casser les clients actifs",
    "s8v": "~90%",
    "s8l": "Moins d’incidents prod",
    "s8d": "Travail fiabilité qui réduit tickets, défauts et incidents récurrents"
  },
  "video": {
    "title": "Vidéo de présentation",
    "intro": "Une courte présentation, de vive voix.",
    "placeholder": "Intégrez YouTube, Vimeo ou un fichier auto-hébergé dans ce cadre.",
    "transcript": "La transcription sera publiée avec la vidéo.",
    "watchCta": "Ouvrir sur YouTube",
    "watchHint": "Ouvre YouTube dans un nouvel onglet."
  },
  "services": {
    "title": "Ce que je fais concrètement pour les clients",
    "intro": "Du backend qui respecte vos utilisateurs, votre grand livre et votre astreinte.",
    "items": [
      {
        "title": "Architecture & conception système",
        "body": "Flux événementiels, idempotence, frontières entre services, et schémas sur lesquels votre équipe peut débattre utilement."
      },
      {
        "title": "Performance & fiabilité",
        "body": "Latence, files, back-pressure, observabilité, et le nécessaire pour éviter les pages à 3 h du matin."
      },
      {
        "title": "Sécurité & conformité pragmatique",
        "body": "Modélisation des menaces pour de vrais produits, sans effet de spectacle, avec des défauts sains pour auth, données et incidents."
      },
      {
        "title": "Livraison & mentorat",
        "body": "Livraison par jalons, RFC clairs, et montée en compétence pour ne pas dépendre d’une seule personne."
      }
    ]
  },
  "pricing": {
    "title": "Engagement & tarifs",
    "intro": "Les honoraires finaux dépendent du périmètre, des intégrations, de la conformité et du risque.",
    "fx": "Facturation en USD sauf accord écrit contraire.",
    "popular": "Populaire",
    "cta": "Discuter du périmètre par e-mail",
    "tiers": [
      {
        "name": "Sprint & intégrations",
        "forWho": "Quand la prod brûle, qu’un fournisseur a glissé, ou qu’il vous faut un spike avant d’engager un recrutement.",
        "scopeAnchor": "En général des engagements de 1 à 3 semaines.",
        "features": [
          "Tranche ciblée sur 1 à 3 semaines",
          "Compte-rendu écrit + prochaines étapes",
          "Idéal quand il faut un avis senior vite"
        ]
      },
      {
        "name": "Backend produit",
        "forWho": "Quand vous livrez un nouveau module ou une migration à de vrais utilisateurs et qu’il faut porter le fil jusqu’au staging et à la prod.",
        "scopeAnchor": "Idéal pour une codebase existante et des jalons définis.",
        "features": [
          "Specs, implémentation, tests, passation",
          "Support montée staging + prod",
          "Mises à jour Slack/async, pas de boîte noire"
        ]
      },
      {
        "name": "Partenaire au forfait",
        "forWho": "Quand vous voulez de la continuité — pas un one-shot — quelqu’un qui connaît déjà votre système pour la roadmap, les revues et les incidents.",
        "scopeAnchor": "Heures mensuelles et astreinte selon accord ; bilan d’architecture trimestriel.",
        "features": [
          "Volume d’heures mensuel (aligné ensemble)",
          "Astreinte possible selon accord",
          "Bilan d’architecture trimestriel"
        ]
      }
    ]
  },
  "intake": {
    "title": "Écrivez-moi",
    "intro": "Restez léger : le problème, le calendrier approximatif et les liens utiles. L’envoi ouvre votre messagerie avec un brouillon modifiable avant envoi.",
    "labelMessage": "Message",
    "placeholderMessage": "Besoin, liens, délais…",
    "labelProject": "Que construisez-vous ou corrigez-vous ?",
    "labelAudience": "Pour qui (utilisateurs, équipes internes, régulateurs si pertinent) ?",
    "labelTimeline": "Échéancier ou contraintes",
    "labelBudget": "Budget ou mode d’engagement (facultatif)",
    "labelLinks": "Liens (deck, dépôt, docs)",
    "submit": "Envoyer par e-mail",
    "mailtoNote": "Ouvre votre application e-mail par défaut. Si rien ne se passe, vous n’avez peut-être pas de client mail — utilisez Prendre rendez-vous ou le bouton M’écrire ci-dessus.",
    "emailSubject": "Message depuis le site",
    "emailHeading": "Message",
    "emailFooter": "\n\n—\nEnvoyé via le formulaire de contact sur victorukeh.com"
  },
  "checklist": {
    "title": "Checklist backend gratuite sur une page",
    "intro": "Checklist autonome sur une page pour les équipes fintech et en forte croissance — pas d’appel commercial, pas d’e-mail obligatoire pour télécharger.",
    "item1": "Idempotence et retries pour les flux de mouvement d’argent",
    "item2": "Base d’observabilité pour APIs, jobs et incidents",
    "item3": "Points de contrôle fraude et sécurité",
    "item4": "Vérifications de sécurité pour migrations et cutovers",
    "download": "Ouvrir la checklist dans Notion"
  },
  "caseStudies": {
    "title": "Réalisations ciblées",
    "intro": "Une ligne de contexte par ligne ; ouvrez pour un bref résumé d’impact (versions longues sur demande lors du contact).",
    "expandLabel": "Ouvrir le résumé",
    "items": [
      {
        "company": "Moniepoint",
        "headline": "Target Savings : fiabilité sous croissance",
        "teaser": "Épargne événementielle idempotente à l’échelle : ~1M jobs actifs/jour, API sous 250 ms pendant la montée en charge de l’onboarding.",
        "body": "Des courses critiques faisaient échouer les jobs sous charge. J’ai basculé vers un traitement idempotent et événementiel et renforcé la couche jobs. Les API sont restées sous 250 ms avec environ cinq mille nouveaux plans par jour."
      },
      {
        "company": "Moniepoint",
        "headline": "Cash Management : flux de trésorerie sûrs et efficaces",
        "teaser": "Flux cash réglementés à fort volume : moins de friction à l’approvisionnement, fraude à 0 %, contrôles renforcés sur les données sensibles.",
        "body": "J’ai piloté la livraison backend et resserré les contrôles opérationnels. La friction d’approvisionnement a fortement baissé ; la fraude est restée à zéro sur les chemins critiques."
      },
      {
        "company": "GetStac",
        "headline": "Stabilité de la plateforme d’appariement",
        "teaser": "Chemins d’appariement critiques de bout en bout : moins d’incidents clients au premier mois, latence d’affectation sous 300 ms.",
        "body": "J’ai porté les chemins critiques. Le travail de fiabilité a fortement réduit les signalements clients au premier mois sans sacrifier la latence."
      },
      {
        "company": "IX Note",
        "headline": "Service e-wallet PXN",
        "teaser": "Backend e-wallet : notifications, durcissement sécurité, événements analytiques, bot Slack pour la visibilité dev.",
        "body": "Périmètre : notifications Firebase, sécurité, couche d’événements analytiques pour 10 000+ utilisateurs, et outillage interne pour réduire le bruit d’équipe."
      }
    ]
  },
  "rightFit": {
    "title": "Pour qui c’est fait",
    "intro": "Un cadrage clair accélère la décision des deux côtés.",
    "bullets": [
      "Équipes produit qui livrent des backends de production — SaaS, marketplaces, plateformes, outils internes ou tout domaine avec charge sérieuse et exigences de fiabilité",
      "Responsables engineering qui ont besoin d’un senior autonome, sans micro-management",
      "Fondateurs et produits qui veulent des décisions écrites et des compromis explicites",
      "Organisations qui valorisent l’async, la documentation et une livraison prévisible"
    ]
  },
  "testimonial": {
    "title": "Références",
    "body": "Des recommandations écrites de la direction engineering chez Moniepoint et GetStac sont disponibles sur demande, y compris via LinkedIn.",
    "references": [
      {
        "name": "Aisha Bello",
        "role": "Engineering Manager, Moniepoint",
        "message": "Victor a apporté une structure claire sur un domaine backend complexe et a renforcé la fiabilité sous pression de production.",
        "linkLabel": "Voir le profil LinkedIn",
        "linkedin": ""
      },
      {
        "name": "Daniel Okafor",
        "role": "Product and Engineering Lead, GetStac",
        "message": "Il livre vite, documente les décisions clairement, et augmente la confiance produit et engineering sur la livraison.",
        "linkLabel": "Voir le profil LinkedIn",
        "linkedin": ""
      }
    ],
    "attribution": "Demandez lors de votre e-mail ou de votre appel."
  },
  "personality": {
    "title": "Façon de travailler",
    "toggleHint": "Optionnel : ouvrir pour le détail",
    "inline": "Je travaille d’abord en asynchrone, avec des décisions écrites et des changements découpés en PR — pour que votre équipe relise et possède ce qui part en prod. Chevauchement matinal EU/US pour les calls ; déploiements et bascules planifiés et communiqués, pas des releases surprise le vendredi.",
    "body": "Priorité à l’asynchrone et à la documentation. J’évite les correctifs temporaires qui deviennent permanents. Mon travail s’aligne sur les matinées EU et US et les plannings de travail. Déploiements et bascules planifiés, communiqués et testés."
  },
  "skills": {
    "title": "Stack principal",
    "coreIntro": "Ce que j’utilise dès le premier jour sur un backend réglementé ou des paiements — pas un inventaire exhaustif.",
    "toggleHint": "Ouvrir pour la liste complète",
    "intro": "Regroupé pour un scan rapide par recruteurs et clients.",
    "cards": {
      "lang": "Langages",
      "backend": "Backend & messaging",
      "frameworks": "Frameworks",
      "data": "Bases de données",
      "cloud": "Cloud & DevOps",
      "test": "Tests"
    }
  },
  "exp": {
    "title": "Le parcours",
    "intro": "Une trajectoire en une ligne droite qui s’élargit : premiers tickets, puis backends réglementés et systèmes de jobs à très grande échelle. Chaque point de passage raconte un chapitre, pas une liste de specs.",
    "introShort": "Trois étapes : le fintech réglementé actuel, une mission livraison à forte croissance, et le chapitre d’avant qui montre le parcours.",
    "checkpoint": "Point de passage",
    "activeLeg": "Secteur actif",
    "hint": "Survolez ou focus un point de passage pour lire le chapitre. La ligne suit la course."
  },
  "contact": {
    "title": "Contact",
    "bio1": "Je m’appelle Victor Ukeh. Je construis des backends pour des équipes où l’indisponibilité a un coût.",
    "bio2": "Je travaille sur des systèmes distribués, des APIs à fort débit, des pipelines de jobs tolérants aux pannes, et bien plus encore.",
    "bio3": "L’observabilité et la conformité sont intégrées dès le départ, pas ajoutées après coup.",
    "bio4": "Mon travail récent porte sur de la fintech régulée à grande échelle.",
    "bio5": "Si le backend doit tenir la route, parlons-en.",
    "watchIntro": "Voir la vidéo d’intro",
    "detailsHeading": "Comment me joindre",
    "practicalities": "J’accompagne 1–2 clients par trimestre pour garder du focus sur chaque mission. Je réponds en quelques jours ouvrés.",
    "lead": "Prenez rendez-vous, écrivez-moi ou passez par les liens ci-dessous — selon ce qui vous convient.",
    "secondaryIntro": "Ou contact direct :",
    "email": "M’écrire",
    "cv": "Télécharger le CV",
    "book": "Prendre rendez-vous",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "photoFallback": "Emplacement photo"
  }
};
  global.PORTFOLIO_I18N.es = {
  "nav": {
    "skip": "Ir al contenido",
    "home": "Inicio",
    "work": "Trabajos",
    "experience": "Experiencia",
    "video": "Intro",
    "services": "Servicios",
    "pricing": "Precios",
    "intake": "Brief del proyecto",
    "checklist": "Checklist gratis",
    "skills": "Stack técnico",
    "contact": "Contacto",
    "book": "Reservar llamada",
    "langAria": "Idioma",
    "menuOpen": "Abrir menú",
    "menuClose": "Cerrar menú"
  },
  "home": {
    "heroHeadline": "Construyo backends que siguen siendo fiables con tráfico real, datos reales y restricciones de producto.",
    "heroName": "Victor Ukeh",
    "heroAvailability": "Normalmente 1–2 encargos por trimestre. África Occidental (WAT), solapamiento con mañanas UE y EE. UU.",
    "heroLead": "Flujos orientados a eventos, jobs resilientes y APIs rápidas bajo carga: SaaS, B2B, marketplaces, plataformas, herramientas internas y otros backends donde importa la fiabilidad.",
    "heroMetaWork": "Trabajos y casos",
    "employersLabel": "Anteriormente en",
    "employer1": "Moniepoint",
    "employer2": "GetStac",
    "hubWorkTitle": "Trabajos",
    "hubWorkDesc": "Casos de uso, métricas y experiencia.",
    "hubServicesTitle": "Servicios",
    "hubServicesDesc": "Ofertas, tarifas y stack.",
    "hubContactTitle": "Contacto",
    "hubContactDesc": "Llamada o mensaje breve.",
    "hubSectionTitle": "Explorar"
  },
  "pages": {
    "docTitle": "Victor Ukeh · Ingeniero backend",
    "docWork": "Trabajos · Victor Ukeh",
    "docServices": "Servicios · Victor Ukeh",
    "docContact": "Contacto · Victor Ukeh",
    "docChecklist": "Checklist · Victor Ukeh",
    "docIntro": "Vídeo de intro · Victor Ukeh"
  },
  "workPage": {
    "breadcrumbCurrent": "Trabajos",
    "onThisPage": "En esta página",
    "jumpCases": "Trabajos",
    "jumpMetrics": "Métricas",
    "jumpRefs": "Referencias",
    "jumpTrack": "La pista"
  },
  "servicesPage": {
    "breadcrumbCurrent": "Servicios",
    "onThisPage": "En esta página",
    "jumpOfferings": "Qué hago",
    "jumpRates": "Encargos y tarifas",
    "jumpStack": "Stack principal",
    "jumpChecklist": "Checklist",
    "checklistCta": "Checklist backend gratis (una página)"
  },
  "mailto": {
    "subject": "Contacto — Victor Ukeh (portfolio)",
    "body": "Hola Victor,\n\nTe escribo por lo siguiente.\n\nAsunto / resumen:\n\nQué necesito:\n\nPlazos:\n\nPresupuesto aproximado:\n\nEnlaces, repo o docs:\n\n—\nVictor Ukeh · Ingeniero backend senior\nvictorukeh1@gmail.com",
    "cardSubjectPrefix": "Encargo",
    "pricingBodies": [
      "Hola Victor,\n\nMe interesa el encargo Sprint e integraciones.\n\nContexto:\n\nQué necesito:\n\nPlazos:\n\nPresupuesto o rango:\n\nEnlaces:\n\n—\nVictor Ukeh · Ingeniero backend senior\nvictorukeh1@gmail.com",
      "Hola Victor,\n\nMe interesa el encargo Backend de producto.\n\nContexto:\n\nQué necesito:\n\nPlazos:\n\nPresupuesto o rango:\n\nEnlaces:\n\n—\nVictor Ukeh · Ingeniero backend senior\nvictorukeh1@gmail.com",
      "Hola Victor,\n\nMe interesa el encargo Socio por retainer.\n\nContexto:\n\nQué necesito:\n\nPlazos:\n\nPresupuesto o rango:\n\nEnlaces:\n\n—\nVictor Ukeh · Ingeniero backend senior\nvictorukeh1@gmail.com"
    ]
  },
  "hero": {
    "positioning": "Ayudo a equipos de producto a entregar backends de producción que aguanten la carga: APIs, colas, jobs y flujos orientados a eventos, en cualquier sector.",
    "kicker": "Ingeniero backend senior y sistemas distribuidos",
    "lead": "Diseño y entrego backends de producción: flujos orientados a eventos, sistemas de jobs de alto rendimiento y APIs rápidas bajo carga, con seguridad, idempotencia y observabilidad desde el inicio.",
    "availability": "Basado en África Occidental (WAT). Disponibilidad con solapamiento en las mañanas de la UE y EE. UU.",
    "ctaBook": "Reservar llamada de alcance (30 minutos)",
    "ctaEmail": "Enviar brief por correo"
  },
  "trust": {
    "line": "REST & gRPC · Sistemas orientados a eventos · PostgreSQL, MongoDB y Redis · Kafka y colas · Docker y Kubernetes · Observabilidad y fiabilidad"
  },
  "stats": {
    "title": "Resultados que aguantaron en producción",
    "intro": "Cifras de sistemas en producción, no de diapositivas.",
    "s1v": "<250ms",
    "s1l": "Objetivo de latencia API",
    "s1d": "Mantenido al escalar flujos de ahorro",
    "s2v": "~10M / mes",
    "s2l": "Peticiones orientadas a eventos",
    "s2d": "Ahorro idempotente sobre eventos de pago",
    "s3v": "0%",
    "s3l": "Casos de fraude",
    "s3d": "Postura de seguridad en productos críticos",
    "s4v": "~1M jobs / día",
    "s4l": "Jobs tolerantes a fallos",
    "s4d": "Alto rendimiento tras eliminar condiciones de carrera en la capa de jobs",
    "s5v": "99%",
    "s5l": "Exigencia de entrega crítica",
    "s5d": "Notificaciones y comunicaciones donde casi no es aceptable",
    "s6v": "<2h",
    "s6l": "Tiempo de respuesta visible al cliente",
    "s6d": "Bucles cortos de alerta a resolución con dinero en juego",
    "s7v": "Cero",
    "s7l": "Impacto al usuario en migraciones",
    "s7d": "Cierres, cortes y movimientos de datos sin romper clientes activos",
    "s8v": "~90%",
    "s8l": "Menos incendios en producción",
    "s8d": "Fiabilidad que reduce tickets, defectos e incidentes repetidos"
  },
  "video": {
    "title": "Vídeo de presentación",
    "intro": "Una breve presentación en primera persona.",
    "placeholder": "Incrusta YouTube, Vimeo o un archivo propio en este marco.",
    "transcript": "La transcripción se publicará con el vídeo.",
    "watchCta": "Abrir en YouTube",
    "watchHint": "Abre YouTube en una pestaña nueva."
  },
  "services": {
    "title": "Lo que hago de verdad para clientes",
    "intro": "Backend que respeta a tus usuarios, tu libro mayor y tu guardia.",
    "items": [
      {
        "title": "Arquitectura y diseño de sistemas",
        "body": "Flujos por eventos, idempotencia, límites entre servicios y diagramas en los que el equipo puede discutir con provecho."
      },
      {
        "title": "Rendimiento y fiabilidad",
        "body": "Latencia, colas, contrapresión, observabilidad y lo necesario para evitar páginas a las 3 a.m."
      },
      {
        "title": "Seguridad y cumplimiento sensato",
        "body": "Modelado de amenazas para productos reales, sin postureo, con defaults sanos para auth, datos e incidentes."
      },
      {
        "title": "Entrega y mentoría",
        "body": "Entregas por hitos, RFC claros y subir el nivel del equipo para no depender de una sola persona."
      }
    ]
  },
  "pricing": {
    "title": "Compromiso y tarifas",
    "intro": "Los honorarios finales dependen del alcance, integraciones, cumplimiento y riesgo.",
    "fx": "Facturación en USD salvo acuerdo escrito distinto.",
    "popular": "Popular",
    "cta": "Hablar del alcance por correo",
    "tiers": [
      {
        "name": "Sprint e integraciones",
        "forWho": "Cuando prod arde, un proveedor falla el plazo o necesitas un spike antes de contratar a tiempo completo.",
        "scopeAnchor": "Normalmente encargos de 1 a 3 semanas.",
        "features": [
          "Tramo enfocado de 1 a 3 semanas",
          "Informe escrito + siguientes pasos",
          "Ideal cuando hace falta criterio senior rápido"
        ]
      },
      {
        "name": "Backend de producto",
        "forWho": "Cuando entregas un módulo nuevo o migración a usuarios reales y necesitas a alguien que lo lleve hasta staging y prod.",
        "scopeAnchor": "Ideal para equipos con codebase existente e hitos definidos.",
        "features": [
          "Diseño, implementación, tests, traspaso",
          "Soporte despliegue staging + prod",
          "Actualizaciones Slack/async, sin caja negra"
        ]
      },
      {
        "name": "Socio por retainer",
        "forWho": "Cuando quieres continuidad — no un proyecto puntual — alguien que ya conozca tu sistema para roadmap, revisiones e incidentes.",
        "scopeAnchor": "Horas mensuales y guardia según acuerdo; revisión trimestral de arquitectura.",
        "features": [
          "Bolsa de horas mensual (alineamos tamaño)",
          "Guardia opcional por acuerdo",
          "Chequeo trimestral de arquitectura"
        ]
      }
    ]
  },
  "intake": {
    "title": "Escríbeme",
    "intro": "Con poco basta: qué estás resolviendo, calendario aproximado y enlaces. Al enviar se abre tu correo con un borrador que puedes editar antes de mandarlo.",
    "labelMessage": "Mensaje",
    "placeholderMessage": "Qué necesitas, enlaces, plazos…",
    "labelProject": "¿Qué construyes o corriges?",
    "labelAudience": "¿Para quién es (usuarios, equipos internos, reguladores si aplica)?",
    "labelTimeline": "Plazo objetivo o restricciones",
    "labelBudget": "Presupuesto o modalidad de engagement (opcional)",
    "labelLinks": "Enlaces (deck, repo, docs)",
    "submit": "Enviar por correo",
    "mailtoNote": "Abre tu aplicación de correo predeterminada. Si no ocurre nada, puede que no tengas cliente de correo — usa Reservar llamada o el botón Escríbeme más arriba.",
    "emailSubject": "Mensaje desde la web",
    "emailHeading": "Mensaje",
    "emailFooter": "\n\n—\nEnviado desde el formulario de contacto en victorukeh.com"
  },
  "checklist": {
    "title": "Checklist backend gratis de una página",
    "intro": "Checklist autoservicio de una página para equipos fintech y de alto crecimiento — sin llamada comercial ni correo obligatorio para descargar.",
    "item1": "Idempotencia y reintentos para flujos de movimiento de dinero",
    "item2": "Base de observabilidad para APIs, jobs e incidentes",
    "item3": "Puntos de control de fraude y seguridad",
    "item4": "Verificaciones de seguridad para migraciones y cutovers",
    "download": "Abrir checklist en Notion"
  },
  "caseStudies": {
    "title": "Trabajos destacados",
    "intro": "Una línea de contexto por fila; expande para un breve resumen de impacto (textos largos bajo petición al contactar).",
    "expandLabel": "Abrir resumen",
    "items": [
      {
        "company": "Moniepoint",
        "headline": "Target Savings: fiabilidad bajo crecimiento",
        "teaser": "Ahorro idempotente orientado a eventos: ~1M jobs activos/día, APIs bajo 250 ms mientras crece el alta.",
        "body": "Había carreras que rompían jobs bajo carga. Pasé a procesamiento idempotente y reforcé la capa de jobs. Las APIs se mantuvieron bajo 250 ms con unos cinco mil planes nuevos al día."
      },
      {
        "company": "Moniepoint",
        "headline": "Cash Management: flujos de efectivo seguros y eficientes",
        "teaser": "Efectivo regulado a gran volumen: menos fricción de abastecimiento, fraude en 0 %, controles más fuertes sobre datos sensibles.",
        "body": "Lideré la entrega y reforcé controles operativos. Bajó la fricción de abastecimiento; el fraude se mantuvo en cero en rutas críticas."
      },
      {
        "company": "GetStac",
        "headline": "Estabilidad de la plataforma de emparejamiento",
        "teaser": "Caminos críticos de emparejamiento de punta a punta: menos incidencias de clientes en el primer mes, asignación bajo 300 ms.",
        "body": "Asumí caminos críticos. La fiabilidad redujo fuerte los reportes en el primer mes sin sacrificar latencia de asignación."
      },
      {
        "company": "IX Note",
        "headline": "Servicio e-wallet PXN",
        "teaser": "Backend e-wallet: notificaciones, seguridad, analítica por eventos, bot Slack para visibilidad de desarrollo.",
        "body": "Alcance: notificaciones Firebase, trabajo de seguridad, capa de eventos analíticos para 10.000+ usuarios, herramientas internas para bajar ruido de equipo."
      }
    ]
  },
  "rightFit": {
    "title": "Para quién es",
    "intro": "Un encaje claro acelera la decisión para ambas partes.",
    "bullets": [
      "Equipos de producto que entregan backends de producción — SaaS, marketplaces, plataformas, herramientas internas o cualquier dominio con tráfico serio y requisitos de corrección",
      "Responsables de ingeniería que necesitan un senior autónomo, sin microgestión",
      "Fundadores y producto que quieren decisiones por escrito y trade-offs claros",
      "Organizaciones que valoran comunicación asíncrona, documentación y entrega predecible"
    ]
  },
  "testimonial": {
    "title": "Referencias",
    "body": "Hay recomendaciones escritas de liderazgo de ingeniería en Moniepoint y GetStac disponibles bajo petición, también vía LinkedIn.",
    "references": [
      {
        "name": "Aisha Bello",
        "role": "Engineering Manager, Moniepoint",
        "message": "Victor aportó estructura clara en un dominio backend complejo y mejoró la fiabilidad bajo presión de producción.",
        "linkLabel": "Ver perfil de LinkedIn",
        "linkedin": ""
      },
      {
        "name": "Daniel Okafor",
        "role": "Product and Engineering Lead, GetStac",
        "message": "Entrega rápido, documenta decisiones con claridad, y elevó la confianza de producto e ingeniería en la ejecución.",
        "linkLabel": "Ver perfil de LinkedIn",
        "linkedin": ""
      }
    ],
    "attribution": "Pídelas al escribir o al reservar llamada."
  },
  "personality": {
    "title": "Forma de trabajar",
    "toggleHint": "Opcional: abrir para el detalle",
    "inline": "Trabajo primero en async, con decisiones por escrito y cambios en tamaño de PR — para que tu equipo revise y sea dueño de lo que sale a prod. Solapamiento por las mañanas UE/EE. UU. para llamadas; despliegues y cortes planificados y comunicados, no releases sorpresa el viernes.",
    "body": "Prioridad al trabajo asíncrono y a la documentación. Evito parches temporales que se quedan. Mi trabajo se solapa con las mañanas de la UE y EE. UU. y los horarios laborales. Despliegues y cortes planificados, comunicados y probados."
  },
  "skills": {
    "title": "Stack principal",
    "coreIntro": "Lo que uso desde el día uno en backend regulado o pagos — no un inventario completo.",
    "toggleHint": "Abrir para la lista completa",
    "intro": "Agrupado para que reclutadores y clientes escaneen rápido.",
    "cards": {
      "lang": "Lenguajes",
      "backend": "Backend y mensajería",
      "frameworks": "Frameworks",
      "data": "Almacenes de datos",
      "cloud": "Cloud y DevOps",
      "test": "Pruebas"
    }
  },
  "exp": {
    "title": "La pista",
    "intro": "Una carrera que va de los primeros tickets a backends regulados y sistemas de jobs a escala real. Cada punto es un capítulo, no un listado de tareas.",
    "introShort": "Tres paradas: fintech regulado actual, un rol de entrega en alta velocidad, y el capítulo anterior que muestra el recorrido.",
    "checkpoint": "Punto",
    "activeLeg": "Tramo activo",
    "hint": "Pasa el cursor o enfoca un punto para leer el capítulo. La línea marca el recorrido."
  },
  "contact": {
    "title": "Contacto",
    "bio1": "Me llamo Victor Ukeh. Construyo backends para equipos donde el tiempo de inactividad tiene un coste.",
    "bio2": "Trabajo en sistemas distribuidos, APIs de alto rendimiento, pipelines de jobs tolerantes a fallos y mucho más.",
    "bio3": "Observabilidad y cumplimiento van integrados desde el diseño, no pegados después.",
    "bio4": "Mi trabajo reciente es fintech regulada a escala.",
    "bio5": "Si el backend tiene que funcionar, hablemos.",
    "watchIntro": "Ver vídeo de intro",
    "detailsHeading": "Cómo localizarme",
    "practicalities": "Tomo 1–2 clientes por trimestre para que cada proyecto tenga foco. Respondo en unos días laborables.",
    "lead": "Reserva llamada, escribe por correo o usa los enlaces de abajo: lo que te encaje.",
    "secondaryIntro": "O contacto directo:",
    "email": "Escríbeme",
    "cv": "Descargar CV",
    "book": "Reservar llamada",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "photoFallback": "Marcador de foto"
  }
};
  global.PORTFOLIO_I18N.de = {
  "nav": {
    "skip": "Zum Inhalt springen",
    "home": "Startseite",
    "work": "Arbeiten",
    "experience": "Erfahrung",
    "video": "Intro",
    "services": "Leistungen",
    "pricing": "Preise",
    "intake": "Projektbrief",
    "checklist": "Kostenlose Checkliste",
    "skills": "Tech-Stack",
    "contact": "Kontakt",
    "book": "Termin buchen",
    "langAria": "Sprache",
    "menuOpen": "Menü öffnen",
    "menuClose": "Menü schließen"
  },
  "home": {
    "heroHeadline": "Ich baue Backends, die unter echtem Traffic, echten Daten und echten Produktanforderungen zuverlässig bleiben.",
    "heroName": "Victor Ukeh",
    "heroAvailability": "In der Regel 1–2 neue Aufträge pro Quartal. Westafrika (WAT), Überlappung mit EU- und US-Vormittagen.",
    "heroLead": "Event-getriebene Workflows, belastbare Jobs, APIs unter Last – für SaaS, B2B, Marktplätze, Plattformen, interne Tools und andere Backends, bei denen Zuverlässigkeit zählt.",
    "heroMetaWork": "Arbeiten & Fallstudien",
    "employersLabel": "Zuvor bei",
    "employer1": "Moniepoint",
    "employer2": "GetStac",
    "hubWorkTitle": "Arbeiten",
    "hubWorkDesc": "Fallstudien, Kennzahlen und Erfahrung.",
    "hubServicesTitle": "Leistungen",
    "hubServicesDesc": "Angebote, Sätze und Stack.",
    "hubContactTitle": "Kontakt",
    "hubContactDesc": "Call oder kurze Nachricht.",
    "hubSectionTitle": "Entdecken"
  },
  "pages": {
    "docTitle": "Victor Ukeh · Backend-Engineer",
    "docWork": "Arbeiten · Victor Ukeh",
    "docServices": "Leistungen · Victor Ukeh",
    "docContact": "Kontakt · Victor Ukeh",
    "docChecklist": "Checkliste · Victor Ukeh",
    "docIntro": "Intro-Video · Victor Ukeh"
  },
  "workPage": {
    "breadcrumbCurrent": "Arbeiten",
    "onThisPage": "Auf dieser Seite",
    "jumpCases": "Ausgewählte Arbeiten",
    "jumpMetrics": "Kennzahlen",
    "jumpRefs": "Referenzen",
    "jumpTrack": "Die Strecke"
  },
  "servicesPage": {
    "breadcrumbCurrent": "Leistungen",
    "onThisPage": "Auf dieser Seite",
    "jumpOfferings": "Angebot",
    "jumpRates": "Engagements & Honorare",
    "jumpStack": "Kern-Stack",
    "jumpChecklist": "Checkliste",
    "checklistCta": "Kostenlose einseitige Backend-Checkliste"
  },
  "mailto": {
    "subject": "Kontakt — Victor Ukeh (Portfolio)",
    "body": "Hi Victor,\n\nich melde mich zu folgendem Anliegen.\n\nThema / Kurzfassung:\n\nWobei ich Hilfe brauche:\n\nZeitrahmen:\n\nBudget / Größenordnung:\n\nLinks, Repo oder Docs:\n\n—\nVictor Ukeh · Senior Backend Engineer\nvictorukeh1@gmail.com",
    "cardSubjectPrefix": "Engagement",
    "pricingBodies": [
      "Hi Victor,\n\nich interessiere mich für das Engagement Sprint & Integrationen.\n\nKontext:\n\nBedarf:\n\nZeitrahmen:\n\nBudget oder Spanne:\n\nLinks:\n\n—\nVictor Ukeh · Senior Backend Engineer\nvictorukeh1@gmail.com",
      "Hi Victor,\n\nich interessiere mich für das Engagement Produkt-Backend.\n\nKontext:\n\nBedarf:\n\nZeitrahmen:\n\nBudget oder Spanne:\n\nLinks:\n\n—\nVictor Ukeh · Senior Backend Engineer\nvictorukeh1@gmail.com",
      "Hi Victor,\n\nich interessiere mich für das Engagement Partner-Retainer.\n\nKontext:\n\nBedarf:\n\nZeitrahmen:\n\nBudget oder Spanne:\n\nLinks:\n\n—\nVictor Ukeh · Senior Backend Engineer\nvictorukeh1@gmail.com"
    ]
  },
  "hero": {
    "positioning": "Ich helfe Produktteams, Produktions-Backends zu liefern, die unter Last halten – APIs, Queues, Jobs und event-getriebene Workflows branchenübergreifend.",
    "kicker": "Senior Backend- und Verteilte-Systeme-Engineer",
    "lead": "Ich entwerfe und liefere Produktions-Backends: event-getriebene Workflows, Hochdurchsatz-Job-Systeme und APIs, die unter Last schnell bleiben, mit Security, Idempotenz und Observability von Anfang an.",
    "availability": "Standort Westafrika (WAT). Verfügbar mit Überlappung zu EU- und US-Vormittagen.",
    "ctaBook": "30-Minuten-Scoping-Call buchen",
    "ctaEmail": "Brief per E-Mail senden"
  },
  "trust": {
    "line": "REST & gRPC · Event-getriebene Systeme · PostgreSQL, MongoDB & Redis · Kafka & Warteschlangen · Docker & Kubernetes · Observability & Zuverlässigkeit"
  },
  "stats": {
    "title": "Ergebnisse, die Produktion überstanden haben",
    "intro": "Zahlen aus Produktionssystemen, nicht aus Folien.",
    "s1v": "<250ms",
    "s1l": "API-Latenz-Ziel",
    "s1d": "Gehalten beim Wachsen der Sparflüsse",
    "s2v": "~10M / Mon.",
    "s2l": "Event-getriebene Anfragen",
    "s2d": "Idempotentes Sparen auf Zahlungsereignissen",
    "s3v": "0%",
    "s3l": "Betrugsfälle",
    "s3d": "Security-Posture auf kritischen Produkten",
    "s4v": "~1M Jobs / Tag",
    "s4l": "Fehlertolerante Jobs",
    "s4d": "Hoher Durchsatz nach Beseitigung von Race Conditions in der Job-Schicht",
    "s5v": "99%",
    "s5l": "Kritische Lieferanforderung",
    "s5d": "Benachrichtigungen und Spar-Kommunikation, wo beinahe nicht ausreicht",
    "s6v": "<2h",
    "s6l": "Kundensichtbare Reaktionszeit",
    "s6d": "Kurze Schleifen von Alert bis Lösung, wenn Geld und Vertrauen auf dem Spiel stehen",
    "s7v": "Null",
    "s7l": "Nutzerstörung bei Migrationen",
    "s7d": "Sunsets, Cutovers und Datenmoves ohne aktive Kunden zu brechen",
    "s8v": "~90%",
    "s8l": "Weniger Produktionsbrände",
    "s8d": "Zuverlässigkeitsarbeit, die Tickets, Defekte und wiederkehrende Incidents reduziert"
  },
  "video": {
    "title": "Intro-Video",
    "intro": "Eine kurze persönliche Vorstellung.",
    "placeholder": "YouTube, Vimeo oder selbst gehostete Datei in diesen Rahmen einbetten.",
    "transcript": "Das Transkript erscheint mit dem Video.",
    "watchCta": "Auf YouTube öffnen",
    "watchHint": "Öffnet YouTube in einem neuen Tab."
  },
  "services": {
    "title": "Was ich konkret für Kund:innen tue",
    "intro": "Backend-Arbeit, die Nutzer:innen, Hauptbuch und Bereitschaft respektiert.",
    "items": [
      {
        "title": "Architektur & Systemdesign",
        "body": "Event-getriebene Flüsse, Idempotenz, Service-Grenzen und Diagramme, über die Ihr Team produktiv diskutieren kann."
      },
      {
        "title": "Performance & Zuverlässigkeit",
        "body": "Latenz, Queues, Backpressure, Observability und das Nötige, um 3-Uhr-Pages zu vermeiden."
      },
      {
        "title": "Security & compliance-sensible Builds",
        "body": "Threat Modeling für echte Produkte, ohne Checkbox-Theater, mit sinnvollen Defaults für Auth, Daten und Incidents."
      },
      {
        "title": "Delivery & Mentoring",
        "body": "Auslieferung in Meilensteinen, klare RFCs und Team-Enablement, damit Sie nicht von einer Person abhängen."
      }
    ]
  },
  "pricing": {
    "title": "Engagement & Sätze",
    "intro": "Endhonorar hängt von Umfang, Integrationen, Compliance und Risiko ab.",
    "fx": "Rechnungen in USD, sofern nichts anderes schriftlich vereinbart ist.",
    "popular": "Beliebt",
    "cta": "Umfang per E-Mail besprechen",
    "tiers": [
      {
        "name": "Sprint & Integrationen",
        "forWho": "Wenn Produktion brennt, ein Lieferant verzögert oder Sie vor einer Einstellung einen Spike brauchen.",
        "scopeAnchor": "In der Regel Engagements von 1–3 Wochen.",
        "features": [
          "1 bis 3 Wochen fokussierter Arbeitspaket",
          "Schriftliche Erkenntnisse + nächste Schritte",
          "Ideal, wenn schnell Senior-Urteil nötig ist"
        ]
      },
      {
        "name": "Produkt-Backend",
        "forWho": "Wenn Sie ein neues Modul oder eine Migration zu echten Nutzer:innen ausliefern und jemanden brauchen, der bis Staging und Prod begleitet.",
        "scopeAnchor": "Am besten für Teams mit bestehender Codebasis und klaren Meilensteinen.",
        "features": [
          "Design, Implementierung, Tests, Übergabe",
          "Staging- + Produktions-Rollout-Support",
          "Slack/async-Updates, keine Black Box"
        ]
      },
      {
        "name": "Partner-Retainer",
        "forWho": "Wenn Sie Kontinuität wollen — nicht nur ein Projekt — jemand, der Ihr System schon kennt für Roadmap, Reviews und Incidents.",
        "scopeAnchor": "Monatliche Stunden und Bereitschaft nach Vereinbarung; vierteljährlicher Architektur-Check.",
        "features": [
          "Monatliches Stundenkontingent (Größe stimmen wir ab)",
          "Bereitschaft nach Vereinbarung",
          "Vierteljährlicher Architektur-Health-Check"
        ]
      }
    ]
  },
  "intake": {
    "title": "Schreiben Sie mir",
    "intro": "Halten Sie es leicht: Problem, grober Zeitrahmen und Links. Beim Senden öffnet sich Ihr Mailprogramm mit einem Entwurf, den Sie vor dem Absenden noch anpassen können.",
    "labelMessage": "Nachricht",
    "placeholderMessage": "Bedarf, Links, Zeitrahmen…",
    "labelProject": "Was bauen oder beheben Sie?",
    "labelAudience": "Für wen (Nutzer, interne Teams, Aufsicht wenn relevant)?",
    "labelTimeline": "Zielzeitrahmen oder Rahmenbedingungen",
    "labelBudget": "Budgetrahmen oder Engagement-Modell (optional)",
    "labelLinks": "Links (Deck, Repo, Docs)",
    "submit": "Per E-Mail senden",
    "mailtoNote": "Öffnet Ihre Standard-E-Mail-App. Wenn nichts passiert, ist möglicherweise kein Mail-Client eingerichtet — nutzen Sie „Termin buchen“ oder den E-Mail-Button weiter oben.",
    "emailSubject": "Nachricht von der Website",
    "emailHeading": "Nachricht",
    "emailFooter": "\n\n—\nGesendet über das Kontaktformular auf victorukeh.com"
  },
  "checklist": {
    "title": "Kostenlose einseitige Backend-Checkliste",
    "intro": "Selbstbedienbare einseitige Checkliste für Fintech- und High-Growth-Teams — kein Sales-Call, keine E-Mail-Pflicht zum Herunterladen.",
    "item1": "Idempotenz und Retries für Geldbewegungsflüsse",
    "item2": "Observability-Baseline für APIs, Jobs und Incidents",
    "item3": "Prüfpunkte für Betrug und Sicherheit",
    "item4": "Sicherheitschecks für Migrationen und Cutovers",
    "download": "Checkliste in Notion öffnen"
  },
  "caseStudies": {
    "title": "Ausgewählte Arbeiten",
    "intro": "Eine Kontextzeile pro Zeile; aufklappen für eine kurze Ergebniszusammenfassung (ausführlichere Texte auf Anfrage bei Kontakt).",
    "expandLabel": "Kurzfassung öffnen",
    "items": [
      {
        "company": "Moniepoint",
        "headline": "Target Savings: Zuverlässigkeit bei Wachstum",
        "teaser": "Event-getriebenes, idempotentes Sparen im großen Maßstab: ~1M aktive Jobs/Tag, Plan-APIs unter 250 ms beim Onboarding-Wachstum.",
        "body": "Race Conditions ließen Jobs unter Last scheitern. Ich verlagerte auf idempotente, event-getriebene Verarbeitung und verstärkte die Job-Schicht. APIs blieben unter 250 ms bei etwa fünftausend neuen Plänen pro Tag."
      },
      {
        "company": "Moniepoint",
        "headline": "Cash Management: sichere und effiziente Cashflows",
        "teaser": "Regulierte Hochvolumen-Cashflows: weniger Reibung bei der Beschaffung, Betrug bei 0 %, schärfere Kontrollen für sensible Daten.",
        "body": "Ich leitete die Backend-Lieferung und schärfte operative Kontrollen. Die Beschaffungsreibung sank; Betrug blieb auf kritischen Pfaden bei null."
      },
      {
        "company": "GetStac",
        "headline": "Stabilität der Matching-Plattform",
        "teaser": "Kritische Matching-Pfade End-to-End: deutlich weniger Kundenmeldungen im ersten Monat, Zuweisung unter 300 ms.",
        "body": "Ich verantwortete kritische Pfade. Zuverlässigkeitsarbeit reduzierte Meldungen im ersten Monat stark, ohne Latenz zu opfern."
      },
      {
        "company": "IX Note",
        "headline": "PXN E-Wallet-Service",
        "teaser": "E-Wallet-Backend: Benachrichtigungen, Security, Analytics-Events, Slack-Bot für Dev-Sichtbarkeit.",
        "body": "Umfang: Firebase-Benachrichtigungen, Security-Arbeit, Analytics-Events für 10.000+ Nutzer, interne Tools für weniger Team-Rauschen."
      }
    ]
  },
  "rightFit": {
    "title": "Für wen das gedacht ist",
    "intro": "Klare Passform beschleunigt die Entscheidung auf beiden Seiten.",
    "bullets": [
      "Produktteams, die Produktions-Backends liefern – SaaS, Marktplätze, Plattformen, interne Tools oder Domains mit hohem Traffic und strengen Korrektheitsanforderungen",
      "Engineering-Leads, die einen autonomen Senior-Contractor ohne viel Handhalten brauchen",
      "Gründer und Produkt, die schriftliche Entscheidungen und ehrliche Trade-offs wollen",
      "Organisationen, die Async, Dokumentation und planbare Lieferung schätzen"
    ]
  },
  "testimonial": {
    "title": "Referenzen",
    "body": "Schriftliche Empfehlungen von Engineering-Führung bei Moniepoint und GetStac sind auf Anfrage verfügbar, auch über LinkedIn.",
    "references": [
      {
        "name": "Aisha Bello",
        "role": "Engineering Manager, Moniepoint",
        "message": "Victor brachte klare Struktur in ein komplexes Backend-Umfeld und verbesserte die Zuverlässigkeit unter Produktionsdruck.",
        "linkLabel": "LinkedIn-Profil ansehen",
        "linkedin": ""
      },
      {
        "name": "Daniel Okafor",
        "role": "Product and Engineering Lead, GetStac",
        "message": "Er liefert schnell, dokumentiert Entscheidungen klar, und stärkt das Vertrauen von Produkt und Engineering in die Umsetzung.",
        "linkLabel": "LinkedIn-Profil ansehen",
        "linkedin": ""
      }
    ],
    "attribution": "Einfach bei E-Mail oder Termin anfragen."
  },
  "personality": {
    "title": "Arbeitsweise",
    "toggleHint": "Optional: für Details aufklappen",
    "inline": "Ich arbeite async-first mit schriftlichen Entscheidungen und PR-großen Schnitten — damit Ihr Team reviewen und besitzen kann, was live geht. Überlappung mit EU-/US-Vormittagen für Calls; Deployments und Cutovers sind geplant und kommuniziert — keine Überraschungs-Releases am Freitag.",
    "body": "Async-first und stark dokumentiert. Ich vermeide temporäre Fixes, die dauerhaft bleiben. Meine Arbeit überlappt mit EU- und US-Vormittagen und Arbeitszeiten. Deployments und Cutovers sind geplant, kommuniziert und getestet."
  },
  "skills": {
    "title": "Kern-Stack",
    "coreIntro": "Was ich ab Tag eins bei reguliertem Backend oder Zahlungsflüssen einsetze — kein vollständiges Inventar.",
    "toggleHint": "Aufklappen für die vollständige Liste",
    "intro": "Gruppiert für schnelles Scannen durch Recruiter:innen und Kund:innen.",
    "cards": {
      "lang": "Sprachen",
      "backend": "Backend & Messaging",
      "frameworks": "Frameworks",
      "data": "Datenbanken",
      "cloud": "Cloud & DevOps",
      "test": "Testing"
    }
  },
  "exp": {
    "title": "Die Strecke",
    "intro": "Ein Lauf von ersten Tickets bis zu regulierten Fintech-Backends und Job-Systemen mit Millionen Ausführungen pro Tag. Jeder Wegpunkt ist ein Kapitel, keine Spezifikationsliste.",
    "introShort": "Drei Stationen: aktuelles reguliertes Fintech, eine Rolle mit schneller Lieferung, und das frühere Kapitel, das den Werdegang zeigt.",
    "checkpoint": "Wegpunkt",
    "activeLeg": "Aktives Segment",
    "hint": "Wegpunkt mit Maus oder Tastatur fokussieren, um das Kapitel zu lesen. Die Linie zeigt den Lauf."
  },
  "contact": {
    "title": "Kontakt",
    "bio1": "Ich heiße Victor Ukeh. Ich baue Backends für Teams, bei denen Ausfallzeiten etwas kosten.",
    "bio2": "Ich arbeite an verteilten Systemen, Hochlast-APIs, fehlertoleranten Job-Pipelines und mehr.",
    "bio3": "Observability und Compliance sind von Anfang an eingebaut — nicht nachträglich draufgepatcht.",
    "bio4": "Meine jüngste Arbeit betrifft reguliertes Fintech in großem Maßstab.",
    "bio5": "Wenn das Backend zuverlässig laufen muss, reden wir.",
    "watchIntro": "Intro-Video ansehen",
    "detailsHeading": "So erreichen Sie mich",
    "practicalities": "Ich nehme 1–2 Kund:innen pro Quartal an, damit jedes Engagement Fokus bekommt. Ich antworte innerhalb weniger Werktage.",
    "lead": "Termin buchen, E-Mail schicken oder die Links unten nutzen — wie es Ihnen liegt.",
    "secondaryIntro": "Oder direkt:",
    "email": "E-Mail",
    "cv": "CV herunterladen",
    "book": "Termin buchen",
    "linkedin": "LinkedIn",
    "github": "GitHub",
    "photoFallback": "Platzhalter Foto"
  }
};
  global.EXPERIENCE_BY_LANG = global.EXPERIENCE_BY_LANG || {};
  global.EXPERIENCE_BY_LANG.fr = [
  {
    "title": "Ingénieur backend (niveau senior)",
    "org": "Moniepoint, épargne et dépôts",
    "dates": "2025, en cours",
    "summary": "Target Savings : épargne idempotente sur événements, couche jobs vers un million d’exécutions/jour, API stables sous charge d’onboarding. Fraude à zéro ; retrait de l’ancien produit sans casse client."
  },
  {
    "title": "Ingénieur backend senior",
    "org": "GetStac",
    "dates": "2025",
    "summary": "Matching critique agent→magasin de bout en bout : affectations fiables, données plus saines, nettement moins d’escalades clients les premières semaines."
  },
  {
    "title": "Ingénieur backend",
    "org": "Moniepoint, gestion de trésorerie",
    "dates": "2024 à 2025",
    "summary": "Trésorerie réglementée à gros volume : friction d’approvisionnement réduite, fraude à zéro sur les chemins critiques, validation ML tenue sur grosses charges."
  },
  {
    "title": "Ingénieur full stack",
    "org": "IX Note Service Limited",
    "dates": "2022 à 2024",
    "summary": "À IX Note, entre produit et plateforme : portefeuille PXN et notifications Firebase, durcissement sécurité, analytics pour des dizaines de milliers d’utilisateurs, et un bot Slack qui a réduit le bruit d’équipe."
  },
  {
    "title": "Développeur backend",
    "org": "Cargle",
    "dates": "2022 à 2024",
    "summary": "Cargle : correctifs sécurité et multi-cloud avec coûts mieux maîtrisés, dispatch fiable, et paris produit comme Spikk visibles sur la ligne de revenu."
  },
  {
    "title": "Développeur full stack",
    "org": "ITF",
    "dates": "2021 à 2022",
    "summary": "ITF : livrer un outil de conseil qui économisait de l’argent chaque mois et faire monter des juniors sur des stacks qu’ils allaient posséder."
  },
  {
    "title": "Stagiaire développement logiciel",
    "org": "IX Note Service Limited",
    "dates": "2020 à 2021",
    "summary": "Le niveau stage : backend hôpital, documentation plus serrée, et une exigence de tests qui est restée après le badge."
  }
];
  global.EXPERIENCE_BY_LANG.es = [
  {
    "title": "Ingeniero backend (alcance senior)",
    "org": "Moniepoint, ahorros y depósitos",
    "dates": "2025 a la fecha",
    "summary": "Target Savings: ahorro idempotente, capa de jobs hacia millones de ejecuciones diarias, APIs estables con el alta. Fraude en cero; retirada de producto antiguo sin romper clientes."
  },
  {
    "title": "Ingeniero backend senior",
    "org": "GetStac",
    "dates": "2025",
    "summary": "Matching de punta a punta: asignaciones fiables, datos más sanos, muchas menos escaladas de clientes en las primeras semanas."
  },
  {
    "title": "Ingeniero backend",
    "org": "Moniepoint, gestión de efectivo",
    "dates": "2024 a 2025",
    "summary": "Efectivo regulado a gran volumen: menos fricción de abastecimiento, fraude en cero en rutas críticas, validación ML que aguanta cargas grandes."
  },
  {
    "title": "Ingeniero full stack",
    "org": "IX Note Service Limited",
    "dates": "2022 a 2024",
    "summary": "En IX Note alterné producto y plataforma—monedero PXN y notificaciones Firebase, endurecimiento de seguridad, analítica para decenas de miles de usuarios y un bot de Slack que bajó el ruido del equipo."
  },
  {
    "title": "Desarrollador backend",
    "org": "Cargle",
    "dates": "2022 a 2024",
    "summary": "Cargle fue parchear y optimizar: seguridad arriba, coste mensual más bajo, despacho que termina lo que empieza y apuestas como Spikk que se notan en ingresos."
  },
  {
    "title": "Desarrollador full stack",
    "org": "ITF",
    "dates": "2021 a 2022",
    "summary": "ITF: entregar software de consejo que ahorraba dinero cada mes y acompañar a juniors en stacks que luego serían suyos."
  },
  {
    "title": "Becario desarrollo de software",
    "org": "IX Note Service Limited",
    "dates": "2020 a 2021",
    "summary": "El nivel becario: backend hospitalario, documentación más clara y un hábito de pruebas que se quedó después del pase."
  }
];
  global.EXPERIENCE_BY_LANG.de = [
  {
    "title": "Backend Engineer (Senior Scope)",
    "org": "Moniepoint, Sparen und Einlagen",
    "dates": "2025 bis heute",
    "summary": "Target Savings: idempotentes Sparen auf Zahlungsereignissen, Job-Schicht für Millionen Ausführungen/Tag, APIs stabil unter Onboarding-Last. Betrug bei null; Legacy-Sunset ohne Kundenbruch."
  },
  {
    "title": "Senior Backend Engineer",
    "org": "GetStac",
    "dates": "2025",
    "summary": "Matching-Kern End-to-End: zuverlässige Zuweisungen, stabilere Datenpfade, deutlich weniger Kunden-Eskalationen in den ersten Wochen."
  },
  {
    "title": "Backend Engineer",
    "org": "Moniepoint, Cash Management",
    "dates": "2024 bis 2025",
    "summary": "Regulierte Hochvolumen-Cashflows: weniger Reibung bei der Beschaffung, Betrug bei null auf kritischen Pfaden, ML-Validierung bleibt bei großen Lasten nutzbar."
  },
  {
    "title": "Full-Stack-Engineer",
    "org": "IX Note Service Limited",
    "dates": "2022 bis 2024",
    "summary": "Bei IX Note zwischen Produkt und Plattform gewechselt—PXN-Wallet und Firebase-Benachrichtigungen, Security-Hardening, Analytics für Zehntausende Nutzer und ein Slack-Bot, der Team-Rauschen senkte."
  },
  {
    "title": "Backend-Entwickler",
    "org": "Cargle",
    "dates": "2022 bis 2024",
    "summary": "Cargle: Security und Multi-Cloud mit besser beherrschten Kosten, zuverlässiger Dispatch und Produktentscheidungen wie Spikk, die sich im Umsatz zeigten."
  },
  {
    "title": "Full-Stack-Entwickler",
    "org": "ITF",
    "dates": "2021 bis 2022",
    "summary": "ITF: Board-Software, die jeden Monat Geld sparte, und Juniors in Stacks führen, die sie später selbst tragen würden."
  },
  {
    "title": "Praktikum Softwareentwicklung",
    "org": "IX Note Service Limited",
    "dates": "2020 bis 2021",
    "summary": "Praktikums-Level: Klinik-Backend, klarere Docs und eine Testkultur, die nach dem Ausweis blieb."
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
