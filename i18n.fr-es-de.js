/** French, Spanish, German UI and experience; loaded after i18n.js */
(function (global) {
  if (!global.PORTFOLIO_I18N) return;
  global.PORTFOLIO_I18N.fr = {
  "nav": {
    "skip": "Aller au contenu",
    "experience": "Expérience",
    "video": "Intro",
    "services": "Services",
    "pricing": "Tarifs",
    "intake": "Brief projet",
    "checklist": "Checklist gratuite",
    "skills": "Compétences",
    "contact": "Contact",
    "book": "Prendre rendez-vous",
    "langAria": "Langue",
    "menuOpen": "Ouvrir le menu",
    "menuClose": "Fermer le menu"
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
    "title": "Dites-moi ce que vous construisez",
    "intro": "Les fourchettes automatiques sont souvent trop larges sans contexte. Envoyez un bref descriptif ; je réponds avec une vue argumentée, en général par e-mail.",
    "labelProject": "Que construisez-vous ou corrigez-vous ?",
    "labelAudience": "Pour qui (utilisateurs, équipes internes, régulateurs si pertinent) ?",
    "labelTimeline": "Échéancier ou contraintes",
    "labelBudget": "Budget ou mode d’engagement (facultatif)",
    "labelLinks": "Liens (deck, dépôt, docs)",
    "submit": "Ouvrir l’e-mail avec ce brief",
    "emailSubject": "Brief projet depuis le site",
    "emailHeading": "Détail du brief",
    "emailFooter": "\n\n—\nEnvoyé via le formulaire de brief sur victorukeh.com"
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
    "intro": "Contexte nommé en bref. La section expérience liste les rôles et métriques complets.",
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
    "title": "Expérience",
    "intro": "Rôles sélectionnés : ownership backend, échelle et fiabilité."
  },
  "contact": {
    "title": "Contact",
    "lead": "Poste senior backend, mission ou revue d’architecture : envoyez un brief avec du contexte. Je réponds en quelques jours ouvrés.",
    "email": "M’écrire",
    "cv": "Télécharger le CV",
    "book": "Prendre rendez-vous",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  },
  "footer": {
    "note": "Site statique, rapide à charger et simple à héberger."
  }
};
  global.PORTFOLIO_I18N.es = {
  "nav": {
    "skip": "Ir al contenido",
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
    "title": "Cuéntame qué estás construyendo",
    "intro": "Los rangos automáticos suelen ser demasiado amplios sin contexto. Envía un brief breve; responderé con una opinión fundamentada, normalmente por correo.",
    "labelProject": "¿Qué construyes o corriges?",
    "labelAudience": "¿Para quién es (usuarios, equipos internos, reguladores si aplica)?",
    "labelTimeline": "Plazo objetivo o restricciones",
    "labelBudget": "Presupuesto o modalidad de engagement (opcional)",
    "labelLinks": "Enlaces (deck, repo, docs)",
    "submit": "Abrir correo con este brief",
    "emailSubject": "Brief de proyecto desde la web",
    "emailHeading": "Detalle del brief",
    "emailFooter": "\n\n—\nEnviado desde el formulario de brief en victorukeh.com"
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
    "intro": "Contexto nombrado en breve. La sección de experiencia lista roles y métricas completas.",
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
    "title": "Experiencia",
    "intro": "Roles seleccionados: ownership backend, escala y fiabilidad."
  },
  "contact": {
    "title": "Contacto",
    "lead": "Rol backend senior, proyecto por contrato o revisión de arquitectura: envía un brief con contexto. Respondo en unos días laborables.",
    "email": "Escríbeme",
    "cv": "Descargar CV",
    "book": "Reservar llamada",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  },
  "footer": {
    "note": "Sitio estático, rápido de cargar y fácil de alojar."
  }
};
  global.PORTFOLIO_I18N.de = {
  "nav": {
    "skip": "Zum Inhalt springen",
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
    "title": "Sagen Sie mir, was Sie bauen",
    "intro": "Automatische Preisspannen sind ohne Kontext oft zu breit. Senden Sie ein kurzes Briefing; ich antworte mit einer begründeten Einschätzung, in der Regel per E-Mail.",
    "labelProject": "Was bauen oder beheben Sie?",
    "labelAudience": "Für wen (Nutzer, interne Teams, Aufsicht wenn relevant)?",
    "labelTimeline": "Zielzeitrahmen oder Rahmenbedingungen",
    "labelBudget": "Budgetrahmen oder Engagement-Modell (optional)",
    "labelLinks": "Links (Deck, Repo, Docs)",
    "submit": "E-Mail mit diesem Brief öffnen",
    "emailSubject": "Projektbrief von der Website",
    "emailHeading": "Brief-Details",
    "emailFooter": "\n\n—\nGesendet über das Projektbrief-Formular auf victorukeh.com"
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
    "intro": "Kurzer, benannter Kontext. Unter Erfahrung stehen Rollen und Kennzahlen vollständig.",
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
    "title": "Erfahrung",
    "intro": "Ausgewählte Rollen: Backend-Ownership, Skalierung und Zuverlässigkeit."
  },
  "contact": {
    "title": "Kontakt",
    "lead": "Senior-Backend-Rolle, Auftrag oder Architektur-Review: Senden Sie ein Briefing mit Kontext. Ich antworte innerhalb weniger Werktage.",
    "email": "E-Mail",
    "cv": "CV herunterladen",
    "book": "Termin buchen",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  },
  "footer": {
    "note": "Statische Website, schnell ladend und einfach zu hosten."
  }
};
  global.EXPERIENCE_BY_LANG = global.EXPERIENCE_BY_LANG || {};
  global.EXPERIENCE_BY_LANG.fr = [
  {
    "title": "Ingénieur backend (niveau senior)",
    "org": "Moniepoint, épargne et dépôts",
    "dates": "2025, en cours",
    "bullets": [
      "Direction backend pour Target Savings, montée à ~5 000 nouveaux plans d’épargne/jour avec API <250 ms ; forte croissance des dépôts sur les six premiers mois.",
      "Réduction de 90 % des incidents signalés par les clients après lancement (monitoring, perf, réponse incident).",
      "Système de jobs haut débit, idempotent et tolérant aux pannes (~1 M jobs actifs/jour) ; suppression des conditions de course et goulots.",
      "Coucher du produit Locked Savings sans impact utilisateur, intégrité des données préservée.",
      "Sécurité et réponse incident de bout en bout : 0 cas de fraude ; résolution des problèmes clients <2 h.",
      "Traitement épargne événementiel sur paiements, exécution idempotente, ~10 M requêtes/mois.",
      "Notifications fiables avec redondance et dégradation contrôlée ; succès des notifications Fixed Savings ~99 %."
    ]
  },
  {
    "title": "Ingénieur backend senior",
    "org": "GetStac",
    "dates": "2025",
    "bullets": [
      "Plateforme d’appariement : assignation agent→magasin de bout en bout, latence <300 ms, architecture résiliente.",
      "Travail fiabilité : −70 % d’incidents clients en moins d’un mois.",
      "Cohérence des données et cycle de vie solides ; ~60 % d’erreurs visibles client en moins."
    ]
  },
  {
    "title": "Ingénieur backend",
    "org": "Moniepoint, gestion de trésorerie",
    "dates": "2024 à 2025",
    "bullets": [
      "Backend pour flux de trésorerie à fort volume ; ~40 % de friction en moins sur l’approvisionnement cash.",
      "Contrôles sécurité : 0 % de fraude.",
      "Pipelines ML validation image/texte ; latence requête/validation −30 à 40 % sur gros volumes."
    ]
  },
  {
    "title": "Ingénieur full stack",
    "org": "IX Note Service Limited",
    "dates": "2022 à 2024",
    "bullets": [
      "Intégration Firebase pour notifications web et mobile.",
      "Durcissement sécurité portefeuille PXN : ~+60 % satisfaction, ~−80 % vulnérabilités.",
      "Framework d’événements analytics pour 10 000+ utilisateurs.",
      "Chatbot Slack pour tâches et événements dev, gain de productivité d’équipe."
    ]
  },
  {
    "title": "Développeur backend",
    "org": "Cargle",
    "dates": "2022 à 2024",
    "bullets": [
      "Correctifs sécurité : ~−90 % de problèmes de sécurité.",
      "Multi-cloud (AWS, Firebase, Heroku, DigitalOcean) : ~−35 % de coût mensuel.",
      "Système de dispatch avec taux de complétion >90 %.",
      "Architecture et UX Spikk Deliveries ; ~+15 % de revenu annuel."
    ]
  },
  {
    "title": "Développeur full stack",
    "org": "ITF",
    "dates": "2021 à 2022",
    "bullets": [
      "Logiciel de réunions du conseil ITF ; ~600 $/mois d’économies.",
      "Mentorat de développeurs juniors (outils et langages)."
    ]
  },
  {
    "title": "Stagiaire développement logiciel",
    "org": "IX Note Service Limited",
    "dates": "2020 à 2021",
    "bullets": [
      "Backend application hôpital Krakenhaus ; forte hausse de satisfaction client.",
      "Documentation et gestion de projet améliorées.",
      "Discipline de tests et garde-fous qualité rigoureux."
    ]
  }
];
  global.EXPERIENCE_BY_LANG.es = [
  {
    "title": "Ingeniero backend (alcance senior)",
    "org": "Moniepoint, ahorros y depósitos",
    "dates": "2025 a la fecha",
    "bullets": [
      "Lideré el backend de Target Savings, escalando a ~5.000 planes de ahorro nuevos/día con API <250 ms; fuerte crecimiento de depósitos en los primeros seis meses.",
      "Reducción del 90 % de incidencias reportadas por clientes tras el lanzamiento (monitorización, rendimiento, respuesta a incidentes).",
      "Sistema de jobs de alto rendimiento, idempotente y tolerante a fallos (~1M jobs activos/día); eliminación de condiciones de carrera y cuellos de botella.",
      "Retirada sin riesgo de Locked Savings sin afectar a usuarios e integridad de datos.",
      "Seguridad y respuesta a incidentes de extremo a extremo: 0 fraude; resolución de incidencias de cliente <2 h.",
      "Procesamiento de ahorro orientado a eventos de pago, ejecución idempotente, ~10M solicitudes/mes.",
      "Notificaciones fiables con redundancia y degradación elegante; éxito de notificaciones Fixed Savings ~99 %."
    ]
  },
  {
    "title": "Ingeniero backend senior",
    "org": "GetStac",
    "dates": "2025",
    "bullets": [
      "Plataforma de emparejamiento: asignación agente→tienda de extremo a extremo, latencia <300 ms, arquitectura resiliente.",
      "Trabajo de fiabilidad: −70 % de incidencias de clientes en menos de un mes.",
      "Consistencia de datos y ciclo de vida sólidos; ~60 % menos errores visibles para el cliente."
    ]
  },
  {
    "title": "Ingeniero backend",
    "org": "Moniepoint, gestión de efectivo",
    "dates": "2024 a 2025",
    "bullets": [
      "Backend para flujos de efectivo de alto volumen; ~40 % menos fricción en abastecimiento de efectivo.",
      "Controles de seguridad con 0 % de fraude.",
      "Pipelines ML de validación imagen/texto; latencia de consulta y validación un 30 a 40 % menor en grandes volúmenes."
    ]
  },
  {
    "title": "Ingeniero full stack",
    "org": "IX Note Service Limited",
    "dates": "2022 a 2024",
    "bullets": [
      "Integración Firebase para notificaciones web y móvil.",
      "Endurecimiento de seguridad en monedero PXN: ~+60 % satisfacción, ~−80 % vulnerabilidades.",
      "Marco de eventos de analítica para 10.000+ usuarios.",
      "Chatbot de Slack para tareas y eventos de desarrollo, mejora de productividad del equipo."
    ]
  },
  {
    "title": "Desarrollador backend",
    "org": "Cargle",
    "dates": "2022 a 2024",
    "bullets": [
      "Parches de seguridad: ~−90 % de problemas de seguridad.",
      "Multi-nube (AWS, Firebase, Heroku, DigitalOcean): ~−35 % de coste mensual.",
      "Sistema de despacho con tasa de finalización >90 %.",
      "Arquitectura y UX de Spikk Deliveries; ~+15 % de ingresos anuales."
    ]
  },
  {
    "title": "Desarrollador full stack",
    "org": "ITF",
    "dates": "2021 a 2022",
    "bullets": [
      "Software de reuniones del consejo ITF; ~600 $/mes de ahorro.",
      "Mentoría a desarrolladores junior en herramientas y lenguajes."
    ]
  },
  {
    "title": "Becario desarrollo de software",
    "org": "IX Note Service Limited",
    "dates": "2020 a 2021",
    "bullets": [
      "Backend de la app hospitalaria Krakenhaus; fuerte mejora de satisfacción del cliente.",
      "Mejoras en documentación y gestión de proyectos.",
      "Disciplina de pruebas rigurosa y controles de calidad."
    ]
  }
];
  global.EXPERIENCE_BY_LANG.de = [
  {
    "title": "Backend Engineer (Senior Scope)",
    "org": "Moniepoint, Sparen und Einlagen",
    "dates": "2025 bis heute",
    "bullets": [
      "Backend-Leitung für Target Savings, Skalierung auf ~5.000 neue Sparpläne/Tag mit API <250 ms; starkes Einzahlungswachstum in den ersten sechs Monaten.",
      "90 % weniger kundenmeldepflichtige Vorfälle nach Launch (Monitoring, Performance, Incident Response).",
      "Hochdurchsatz-, idempotentes, fehlertolerantes Job-System (~1 M aktive Jobs/Tag); Race Conditions und Engpässe beseitigt.",
      "Risikoarmes Auslaufen von Locked Savings ohne Nutzerstörung, volle Datenintegrität.",
      "Security und Incident Response End-to-End: 0 Betrugsfälle; Kundenprobleme <2 h gelöst.",
      "Ereignisgesteuerte Sparverarbeitung auf Zahlungsereignissen, idempotente Ausführung, ~10 M Anfragen/Monat.",
      "Zuverlässige Benachrichtigungen mit Redundanz und kontrolliertem Degradation; Fixed-Savings-Benachrichtigungen ~99 % erfolgreich."
    ]
  },
  {
    "title": "Senior Backend Engineer",
    "org": "GetStac",
    "dates": "2025",
    "bullets": [
      "Matching-Plattform: End-to-End Zuweisung Agent→Store, Latenz <300 ms, ausfallsichere Architektur.",
      "Zuverlässigkeitsarbeit: 70 % weniger Kundenissues in unter einem Monat.",
      "Starke Datenkonsistenz und Lifecycle; ~60 % weniger kundensichtbare Fehler."
    ]
  },
  {
    "title": "Backend Engineer",
    "org": "Moniepoint, Cash Management",
    "dates": "2024 bis 2025",
    "bullets": [
      "Backend für Hochvolumen-Cashflows; ~40 % weniger Reibung bei Cash-Beschaffung.",
      "Security-Kontrollen bei 0 % Fraud-Rate.",
      "ML-Pipelines für Bild-/Textvalidierung; 30 bis 40 % niedrigere Abfrage- und Validierungslatenz bei großen Datenmengen."
    ]
  },
  {
    "title": "Full-Stack-Engineer",
    "org": "IX Note Service Limited",
    "dates": "2022 bis 2024",
    "bullets": [
      "Firebase-Integration für Benachrichtigungen Web & Mobile.",
      "Security-Hardening PXN-Wallet: ~+60 % Zufriedenheit, ~−80 % Schwachstellen.",
      "Analytics-Event-Framework für 10.000+ Nutzer.",
      "Slack-Chatbot für Dev-Tasks und Events, höhere Teamproduktivität."
    ]
  },
  {
    "title": "Backend-Entwickler",
    "org": "Cargle",
    "dates": "2022 bis 2024",
    "bullets": [
      "Security-Patches: ~−90 % Security-Themen.",
      "Multi-Cloud (AWS, Firebase, Heroku, DigitalOcean): ~−35 % monatliche Kosten.",
      "Dispatch-System mit >90 % Abschlussquote.",
      "Spikk Deliveries Architektur & UX; ~+15 % Jahresumsatz."
    ]
  },
  {
    "title": "Full-Stack-Entwickler",
    "org": "ITF",
    "dates": "2021 bis 2022",
    "bullets": [
      "ITF Board Meeting Software; ~600 $/Monat eingespart.",
      "Mentoring von Junior-Entwicklern zu Tools und Sprachen."
    ]
  },
  {
    "title": "Praktikum Softwareentwicklung",
    "org": "IX Note Service Limited",
    "dates": "2020 bis 2021",
    "bullets": [
      "Backend Krakenhaus-Krankenhaus-App; deutlicher Zuwachs bei Kundenzufriedenheit.",
      "Verbesserungen bei Dokumentation und Projektmanagement.",
      "Strenge Testdisziplin und Qualitätsgates."
    ]
  }
];
})(typeof window !== 'undefined' ? window : globalThis);
