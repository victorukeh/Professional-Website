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
    "heroLead": "Backends de production pour la fintech et la croissance — APIs fiables, flux événementiels, systèmes pensés pour l’échelle.",
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
    "docChecklist": "Checklist · Victor Ukeh"
  },
  "servicesPage": {
    "lead": "Modalités, tarifs et stack technique.",
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
    "positioning": "J’aide les fintech et les startups en forte croissance à bâtir des backends qui restent fiables quand tout se joue.",
    "kicker": "Ingénieur backend senior et systèmes distribués",
    "lead": "Je conçois et livre des backends de production : flux d’épargne et de paiement événementiels, systèmes de jobs à haut débit et APIs qui restent rapides sous charge, avec sécurité, idempotence et observabilité dès le départ.",
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
    "intro": "Une courte vidéo de présentation sera publiée ici lorsqu’elle sera disponible.",
    "placeholder": "Intégrez YouTube, Vimeo ou un fichier auto-hébergé dans ce cadre.",
    "transcript": "La transcription sera publiée avec la vidéo."
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
    "intro": "Points de départ indicatifs en USD. Les honoraires finaux dépendent du périmètre, des intégrations, de la conformité et du risque.",
    "fx": "Facturation en USD sauf accord écrit contraire.",
    "popular": "Populaire",
    "cta": "Discuter du périmètre par e-mail",
    "tiers": [
      {
        "name": "Sprint & intégrations",
        "forWho": "Audits, spikes, APIs, ou réparer ce qui « ne casse qu’en prod ».",
        "features": [
          "Tranche ciblée sur 1 à 3 semaines",
          "Compte-rendu écrit + prochaines étapes",
          "Idéal quand il faut un avis senior vite"
        ]
      },
      {
        "name": "Backend produit",
        "forWho": "Nouveau module, migration ou fonctionnalité multi-services avec jalons clairs.",
        "features": [
          "Specs, implémentation, tests, passation",
          "Support montée staging + prod",
          "Mises à jour Slack/async, pas de boîte noire"
        ]
      },
      {
        "name": "Partenaire au forfait",
        "forWho": "Ownership continu : roadmap, revues, incidents, ciment d’équipe.",
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
    "intro": "Quelques lignes suffisent. Je réponds en général sous quelques jours ouvrés.",
    "labelMessage": "Message",
    "placeholderMessage": "Besoin, liens, délais…",
    "labelProject": "Que construisez-vous ou corrigez-vous ?",
    "labelAudience": "Pour qui (utilisateurs, équipes internes, régulateurs si pertinent) ?",
    "labelTimeline": "Échéancier ou contraintes",
    "labelBudget": "Budget ou mode d’engagement (facultatif)",
    "labelLinks": "Liens (deck, dépôt, docs)",
    "submit": "Envoyer par e-mail",
    "emailSubject": "Message depuis le site",
    "emailHeading": "Message",
    "emailFooter": "\n\n—\nEnvoyé via le formulaire de contact sur victorukeh.com"
  },
  "checklist": {
    "title": "Checklist backend gratuite sur une page",
    "intro": "Une checklist autonome sur une page pour les équipes fintech et en forte croissance. Aucun appel requis.",
    "item1": "Idempotence et retries pour les flux de mouvement d’argent",
    "item2": "Base d’observabilité pour APIs, jobs et incidents",
    "item3": "Points de contrôle fraude et sécurité",
    "item4": "Vérifications de sécurité pour migrations et cutovers",
    "download": "Ouvrir la checklist dans Google Docs"
  },
  "caseStudies": {
    "title": "Réalisations ciblées",
    "intro": "Projets nommés et résultats.",
    "expandLabel": "Ouvrir pour lire l’étude complète",
    "items": [
      {
        "company": "Moniepoint",
        "headline": "Target Savings : fiabilité sous croissance",
        "body": "Le flux d’épargne présentait des conditions de course qui provoquaient des jobs en échec sous charge. J’ai basculé l’exécution vers un traitement idempotent et événementiel et renforcé la couche jobs vers environ un million de jobs actifs par jour. Les API de création de plans sont restées sous 250 ms pendant que l’onboarding montait à environ cinq mille nouveaux plans par jour."
      },
      {
        "company": "Moniepoint",
        "headline": "Cash Management : flux de trésorerie sûrs et efficaces",
        "body": "J’ai piloté la livraison backend des flux de trésorerie à fort volume et renforcé les contrôles opérationnels dans un contexte réglementé. Ce travail a réduit d’environ 40 % la friction d’approvisionnement cash, maintenu la fraude à 0 %, et amélioré les performances de validation ML d’environ 30 à 40 % sur de gros volumes."
      },
      {
        "company": "GetStac",
        "headline": "Stabilité de la plateforme d’appariement",
        "body": "J’ai porté les chemins d’appariement critiques de bout en bout. Le travail de fiabilité a fortement réduit les incidents signalés par les clients dès le premier mois, avec une latence d’affectation sous 300 ms."
      },
      {
        "company": "IX Note",
        "headline": "Service e-wallet PXN",
        "body": "J’ai piloté le travail backend du portefeuille électronique PXN : notifications basées sur Firebase sur le web et le mobile, durcissement de la sécurité ayant augmenté la satisfaction d’environ 60 % et réduit les problèmes de sécurité d’environ 80 %, cadre d’événements analytiques pour plus de 10 000 utilisateurs, et un chatbot Slack pour une meilleure visibilité des flux de travail des développeurs."
      }
    ]
  },
  "rightFit": {
    "title": "Pour qui c’est fait",
    "intro": "Un cadrage clair accélère la décision des deux côtés.",
    "bullets": [
      "Équipes fintech et startups qui traitent de l’argent réel ou des flux proches de la réglementation",
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
        "linkedin": "https://www.linkedin.com/"
      },
      {
        "name": "Daniel Okafor",
        "role": "Product and Engineering Lead, GetStac",
        "message": "Il livre vite, documente les décisions clairement, et augmente la confiance produit et engineering sur la livraison.",
        "linkLabel": "Voir le profil LinkedIn",
        "linkedin": "https://www.linkedin.com/"
      }
    ],
    "attribution": "Demandez lors de votre e-mail ou de votre appel."
  },
  "personality": {
    "title": "Façon de travailler",
    "body": "Priorité à l’asynchrone et à la documentation. J’évite les correctifs temporaires qui deviennent permanents. Mon travail s’aligne sur les matinées EU et US et les plannings de travail. Déploiements et bascules planifiés, communiqués et testés."
  },
  "skills": {
    "title": "Stack technique",
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
    "checkpoint": "Point de passage",
    "activeLeg": "Secteur actif",
    "hint": "Survolez ou focus un point de passage pour lire le chapitre. La ligne suit la course."
  },
  "contact": {
    "title": "Contact",
    "lead": "Embauche, mission ou conseil : un message suffit. Réponse en quelques jours ouvrés.",
    "email": "M’écrire",
    "cv": "Télécharger le CV",
    "book": "Prendre rendez-vous",
    "linkedin": "LinkedIn",
    "github": "GitHub"
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
    "heroLead": "Backends de producción para fintech y equipos en crecimiento: APIs fiables, flujos por eventos y sistemas preparados para escalar.",
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
    "docChecklist": "Checklist · Victor Ukeh"
  },
  "servicesPage": {
    "lead": "Modalidades, tarifas y stack técnico.",
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
    "positioning": "Ayudo a fintechs y startups de alto crecimiento a construir backends que sigan siendo fiables cuando más importa.",
    "kicker": "Ingeniero backend senior y sistemas distribuidos",
    "lead": "Diseño y entrego backends de producción: flujos de ahorro y pagos orientados a eventos, sistemas de jobs de alto rendimiento y APIs que siguen rápidas bajo carga, con seguridad, idempotencia y observabilidad desde el inicio.",
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
    "intro": "Aquí habrá un vídeo breve cuando esté disponible.",
    "placeholder": "Incrusta YouTube, Vimeo o un archivo propio en este marco.",
    "transcript": "La transcripción se publicará con el vídeo."
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
    "intro": "Puntos de partida indicativos en USD. Los honorarios finales dependen del alcance, integraciones, cumplimiento y riesgo.",
    "fx": "Facturación en USD salvo acuerdo escrito distinto.",
    "popular": "Popular",
    "cta": "Hablar del alcance por correo",
    "tiers": [
      {
        "name": "Sprint e integraciones",
        "forWho": "Auditorías, spikes, APIs o arreglar lo que «solo falla en prod».",
        "features": [
          "Tramo enfocado de 1 a 3 semanas",
          "Informe escrito + siguientes pasos",
          "Ideal cuando hace falta criterio senior rápido"
        ]
      },
      {
        "name": "Backend de producto",
        "forWho": "Nuevo módulo, migración o feature multi-servicio con hitos claros.",
        "features": [
          "Diseño, implementación, tests, traspaso",
          "Soporte despliegue staging + prod",
          "Actualizaciones Slack/async, sin caja negra"
        ]
      },
      {
        "name": "Socio por retainer",
        "forWho": "Propiedad continua: roadmap, revisiones, incidentes, pegamento de equipo.",
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
    "intro": "Unas líneas bastan. Respondo en unos días laborables.",
    "labelMessage": "Mensaje",
    "placeholderMessage": "Qué necesitas, enlaces, plazos…",
    "labelProject": "¿Qué construyes o corriges?",
    "labelAudience": "¿Para quién es (usuarios, equipos internos, reguladores si aplica)?",
    "labelTimeline": "Plazo objetivo o restricciones",
    "labelBudget": "Presupuesto o modalidad de engagement (opcional)",
    "labelLinks": "Enlaces (deck, repo, docs)",
    "submit": "Enviar por correo",
    "emailSubject": "Mensaje desde la web",
    "emailHeading": "Mensaje",
    "emailFooter": "\n\n—\nEnviado desde el formulario de contacto en victorukeh.com"
  },
  "checklist": {
    "title": "Checklist backend gratis de una página",
    "intro": "Una checklist autoservicio de una página para equipos fintech y de alto crecimiento. No requiere llamada.",
    "item1": "Idempotencia y reintentos para flujos de movimiento de dinero",
    "item2": "Base de observabilidad para APIs, jobs e incidentes",
    "item3": "Puntos de control de fraude y seguridad",
    "item4": "Verificaciones de seguridad para migraciones y cutovers",
    "download": "Abrir checklist en Google Docs"
  },
  "caseStudies": {
    "title": "Trabajos destacados",
    "intro": "Proyectos con nombre y resultados.",
    "expandLabel": "Abrir para leer el caso completo",
    "items": [
      {
        "company": "Moniepoint",
        "headline": "Target Savings: fiabilidad bajo crecimiento",
        "body": "El flujo de ahorro tenía condiciones de carrera que provocaban jobs fallidos bajo carga. Moví la ejecución a procesamiento idempotente y orientado a eventos y reforcé la capa de jobs hacia alrededor de un millón de jobs activos al día. Las APIs de creación de planes se mantuvieron bajo 250 ms mientras el alta escalaba a unos cinco mil planes nuevos al día."
      },
      {
        "company": "Moniepoint",
        "headline": "Cash Management: flujos de efectivo seguros y eficientes",
        "body": "Lideré la entrega backend de flujos de efectivo de alto volumen y reforcé controles operativos en un entorno regulado. Este trabajo redujo en torno al 40 % la fricción en el abastecimiento de efectivo, mantuvo el fraude en 0 %, y mejoró el rendimiento de validación ML en torno al 30 a 40 % sobre grandes volúmenes."
      },
      {
        "company": "GetStac",
        "headline": "Estabilidad de la plataforma de emparejamiento",
        "body": "Asumí los caminos críticos de emparejamiento de extremo a extremo. El trabajo de fiabilidad redujo fuertemente los problemas reportados por clientes en el primer mes, con latencia de asignación bajo 300 ms."
      },
      {
        "company": "IX Note",
        "headline": "Servicio e-wallet PXN",
        "body": "Lideré el trabajo backend del monedero electrónico PXN: notificaciones basadas en Firebase en web y móvil, endurecimiento de seguridad que elevó la satisfacción en torno al 60 % y redujo los problemas de seguridad en torno al 80 %, marco de eventos de analítica para más de 10.000 usuarios, y un chatbot de Slack para mejorar la visibilidad del flujo de trabajo de desarrollo."
      }
    ]
  },
  "rightFit": {
    "title": "Para quién es",
    "intro": "Un encaje claro acelera la decisión para ambas partes.",
    "bullets": [
      "Equipos fintech y startups que mueven dinero real o flujos cercanos a regulación",
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
        "linkedin": "https://www.linkedin.com/"
      },
      {
        "name": "Daniel Okafor",
        "role": "Product and Engineering Lead, GetStac",
        "message": "Entrega rápido, documenta decisiones con claridad, y elevó la confianza de producto e ingeniería en la ejecución.",
        "linkLabel": "Ver perfil de LinkedIn",
        "linkedin": "https://www.linkedin.com/"
      }
    ],
    "attribution": "Pídelas al escribir o al reservar llamada."
  },
  "personality": {
    "title": "Forma de trabajar",
    "body": "Prioridad al trabajo asíncrono y a la documentación. Evito parches temporales que se quedan. Mi trabajo se solapa con las mañanas de la UE y EE. UU. y los horarios laborales. Despliegues y cortes planificados, comunicados y probados."
  },
  "skills": {
    "title": "Stack técnico",
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
    "checkpoint": "Punto",
    "activeLeg": "Tramo activo",
    "hint": "Pasa el cursor o enfoca un punto para leer el capítulo. La línea marca el recorrido."
  },
  "contact": {
    "title": "Contacto",
    "lead": "Contratación, proyecto o asesoría: un mensaje basta. Respondo en unos días laborables.",
    "email": "Escríbeme",
    "cv": "Descargar CV",
    "book": "Reservar llamada",
    "linkedin": "LinkedIn",
    "github": "GitHub"
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
    "heroLead": "Produktions-Backends für Fintech und schnell wachsende Teams — zuverlässige APIs, event-getriebene Flüsse, skalierbare Systeme.",
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
    "docChecklist": "Checkliste · Victor Ukeh"
  },
  "servicesPage": {
    "lead": "Engagement-Modelle, Honorare und Tech-Stack.",
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
    "positioning": "Ich helfe Fintechs und schnell wachsenden Startups, Backends zu bauen, die in kritischen Momenten zuverlässig bleiben.",
    "kicker": "Senior Backend- und Verteilte-Systeme-Engineer",
    "lead": "Ich entwerfe und liefere Produktions-Backends: event-getriebene Spar- und Zahlungsflüsse, Hochdurchsatz-Job-Systeme und APIs, die unter Last schnell bleiben, mit Security, Idempotenz und Observability von Anfang an.",
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
    "intro": "Hier erscheint ein kurzes Intro-Video, sobald es verfügbar ist.",
    "placeholder": "YouTube, Vimeo oder selbst gehostete Datei in diesen Rahmen einbetten.",
    "transcript": "Das Transkript erscheint mit dem Video."
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
    "intro": "Indikative USD-Richtwerte. Endhonorar hängt von Umfang, Integrationen, Compliance und Risiko ab.",
    "fx": "Rechnungen in USD, sofern nichts anderes schriftlich vereinbart ist.",
    "popular": "Beliebt",
    "cta": "Umfang per E-Mail besprechen",
    "tiers": [
      {
        "name": "Sprint & Integrationen",
        "forWho": "Audits, Spikes, APIs oder das Ding, das „nur in Prod“ bricht.",
        "features": [
          "1 bis 3 Wochen fokussierter Arbeitspaket",
          "Schriftliche Erkenntnisse + nächste Schritte",
          "Ideal, wenn schnell Senior-Urteil nötig ist"
        ]
      },
      {
        "name": "Produkt-Backend",
        "forWho": "Neues Modul, Migration oder Multi-Service-Feature mit klaren Meilensteinen.",
        "features": [
          "Design, Implementierung, Tests, Übergabe",
          "Staging- + Produktions-Rollout-Support",
          "Slack/async-Updates, keine Black Box"
        ]
      },
      {
        "name": "Partner-Retainer",
        "forWho": "Laufende Verantwortung: Roadmap, Reviews, Incidents, Team-Kleber.",
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
    "intro": "Ein paar Zeilen reichen. Ich antworte in der Regel innerhalb weniger Werktage.",
    "labelMessage": "Nachricht",
    "placeholderMessage": "Bedarf, Links, Zeitrahmen…",
    "labelProject": "Was bauen oder beheben Sie?",
    "labelAudience": "Für wen (Nutzer, interne Teams, Aufsicht wenn relevant)?",
    "labelTimeline": "Zielzeitrahmen oder Rahmenbedingungen",
    "labelBudget": "Budgetrahmen oder Engagement-Modell (optional)",
    "labelLinks": "Links (Deck, Repo, Docs)",
    "submit": "Per E-Mail senden",
    "emailSubject": "Nachricht von der Website",
    "emailHeading": "Nachricht",
    "emailFooter": "\n\n—\nGesendet über das Kontaktformular auf victorukeh.com"
  },
  "checklist": {
    "title": "Kostenlose einseitige Backend-Checkliste",
    "intro": "Eine selbst bedienbare einseitige Checkliste für Fintech- und High-Growth-Teams. Kein Anruf erforderlich.",
    "item1": "Idempotenz und Retries für Geldbewegungsflüsse",
    "item2": "Observability-Baseline für APIs, Jobs und Incidents",
    "item3": "Prüfpunkte für Betrug und Sicherheit",
    "item4": "Sicherheitschecks für Migrationen und Cutovers",
    "download": "Checkliste in Google Docs öffnen"
  },
  "caseStudies": {
    "title": "Ausgewählte Arbeiten",
    "intro": "Benannte Projekte und Ergebnisse.",
    "expandLabel": "Öffnen für die vollständige Fallstudie",
    "items": [
      {
        "company": "Moniepoint",
        "headline": "Target Savings: Zuverlässigkeit bei Wachstum",
        "body": "Der Sparfluss hatte Race Conditions, die unter Last fehlschlagende Jobs verursachten. Ich verlagerte die Ausführung auf idempotente, event-getriebene Verarbeitung und verstärkte die Job-Plattform auf etwa eine Million aktive Jobs pro Tag. APIs zur Plananlage blieben unter 250 ms, während das Onboarding auf etwa fünftausend neue Pläne pro Tag skalierte."
      },
      {
        "company": "Moniepoint",
        "headline": "Cash Management: sichere und effiziente Cashflows",
        "body": "Ich leitete die Backend-Lieferung für Cash-Management-Flows mit hohem Volumen und stärkte operative Kontrollen in einem regulierten Umfeld. Diese Arbeit reduzierte die Reibung bei der Cash-Beschaffung um etwa 40 %, hielt Betrug bei 0 %, und verbesserte die ML-Validierungsleistung bei großen Datenmengen um rund 30 bis 40 %."
      },
      {
        "company": "GetStac",
        "headline": "Stabilität der Matching-Plattform",
        "body": "Ich verantwortete kritische Matching-Pfade end-to-end. Zuverlässigkeitsarbeit reduzierte gemeldete Kundenprobleme im ersten Monat deutlich bei Zuweisungslatenz unter 300 ms."
      },
      {
        "company": "IX Note",
        "headline": "PXN E-Wallet-Service",
        "body": "Ich verantwortete das Backend für den PXN E-Wallet: Firebase-basierte Benachrichtigungen für Web und Mobile, Security-Hardening, das die Zufriedenheit um etwa 60 % erhöhte und Sicherheitsprobleme um etwa 80 % verringerte, ein Analytics-Event-Framework für über 10.000 Nutzer und einen Slack-Chatbot für bessere Sichtbarkeit der Entwickler-Workflows."
      }
    ]
  },
  "rightFit": {
    "title": "Für wen das gedacht ist",
    "intro": "Klare Passform beschleunigt die Entscheidung auf beiden Seiten.",
    "bullets": [
      "Fintech-Teams und Startups mit echtem Geldfluss oder regulierungsnahen Prozessen",
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
        "linkedin": "https://www.linkedin.com/"
      },
      {
        "name": "Daniel Okafor",
        "role": "Product and Engineering Lead, GetStac",
        "message": "Er liefert schnell, dokumentiert Entscheidungen klar, und stärkt das Vertrauen von Produkt und Engineering in die Umsetzung.",
        "linkLabel": "LinkedIn-Profil ansehen",
        "linkedin": "https://www.linkedin.com/"
      }
    ],
    "attribution": "Einfach bei E-Mail oder Termin anfragen."
  },
  "personality": {
    "title": "Arbeitsweise",
    "body": "Async-first und stark dokumentiert. Ich vermeide temporäre Fixes, die dauerhaft bleiben. Meine Arbeit überlappt mit EU- und US-Vormittagen und Arbeitszeiten. Deployments und Cutovers sind geplant, kommuniziert und getestet."
  },
  "skills": {
    "title": "Technischer Stack",
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
    "checkpoint": "Wegpunkt",
    "activeLeg": "Aktives Segment",
    "hint": "Wegpunkt mit Maus oder Tastatur fokussieren, um das Kapitel zu lesen. Die Linie zeigt den Lauf."
  },
  "contact": {
    "title": "Kontakt",
    "lead": "Anstellung, Projekt oder Beratung: eine kurze Nachricht reicht. Antwort in wenigen Werktagen.",
    "email": "E-Mail",
    "cv": "CV herunterladen",
    "book": "Termin buchen",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  }
};
  global.EXPERIENCE_BY_LANG = global.EXPERIENCE_BY_LANG || {};
  global.EXPERIENCE_BY_LANG.fr = [
  {
    "title": "Ingénieur backend (niveau senior)",
    "org": "Moniepoint, épargne et dépôts",
    "dates": "2025, en cours",
    "summary": "Le tour que je pilote aujourd’hui : Target Savings à très grande échelle—API qui tiennent la route quand les plans s’empilent, couche de jobs idempotents vers un million d’exécutions quotidiennes, flux d’épargne sur événements de paiement, couchers de produits sans casse, fraude à zéro et incidents refermés avant qu’on en fasse une légende."
  },
  {
    "title": "Ingénieur backend senior",
    "org": "GetStac",
    "dates": "2025",
    "summary": "Chez GetStac, le fil critique du matching agent→magasin de bout en bout : latence maîtrisée, cycles de données plus sains, et une fiabilité qui s’est vue vite en moins d’escalades clients."
  },
  {
    "title": "Ingénieur backend",
    "org": "Moniepoint, gestion de trésorerie",
    "dates": "2024 à 2025",
    "summary": "Cash Management : flux réglementés à gros volume, friction d’approvisionnement réduite, fraude maintenue à zéro, pipelines ML de validation qui restent respirants sur de gros volumes."
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
    "summary": "La vuelta que piloto ahora: Target Savings a escala real—APIs que aguantan cuando los planes se acumulan, una capa de jobs idempotente hacia millones de ejecuciones diarias, ahorro orientado a eventos de pago, retirada limpia de productos viejos, fraude en cero e incidentes cerrados antes de que cuenten la historia."
  },
  {
    "title": "Ingeniero backend senior",
    "org": "GetStac",
    "dates": "2025",
    "summary": "En GetStac enhebré el matching de punta a punta: asignaciones rápidas, ciclos de datos más sanos y menos escaladas de clientes en las primeras semanas."
  },
  {
    "title": "Ingeniero backend",
    "org": "Moniepoint, gestión de efectivo",
    "dates": "2024 a 2025",
    "summary": "Cash Management: flujos regulados a gran volumen, menos fricción al abastecer efectivo, fraude en cero y pipelines ML que no se ahogan con cargas grandes."
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
    "summary": "Die Runde, die ich gerade fahre: Target Savings in Produktionsgröße—APIs, die nicht schwinden, wenn Pläne zunehmen, eine Job-Schicht mit Millionen idempotenter Ausführungen täglich, ereignisgesteuertes Sparen, sauberes Auslaufen alter Produkte, Betrug bei null und Incidents, die geschlossen werden, bevor sie zur Legende werden."
  },
  {
    "title": "Senior Backend Engineer",
    "org": "GetStac",
    "dates": "2025",
    "summary": "Bei GetStac den Matching-Kern End-to-End gezogen: schnelle Zuweisungen, stabilere Datenlebenszyklen und spürbar weniger Kunden-Eskalationen innerhalb weniger Wochen."
  },
  {
    "title": "Backend Engineer",
    "org": "Moniepoint, Cash Management",
    "dates": "2024 bis 2025",
    "summary": "Cash Management: regulierte Hochvolumen-Cashflows, weniger Reibung bei der Beschaffung, Betrug bei null und ML-Validierung, die auch bei großen Lasten nicht erstickt."
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
