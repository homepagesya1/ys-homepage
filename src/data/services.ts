export interface Service {
  title: string;
  slug: string;
  excerpt: string;
  popularity: number;
  hero: {
    eyebrow: string;
    subtitle: string;
    intro: string;
    ctaLabel: string;
    ctaHref: string;
  };
  audience: {
    title: string;
    items: string[];
    text: string;
  };
  included: {
    title: string;
    items: string[];
  };
  optional: {
    title: string;
    text: string;
    items: string[];
  };
  process: {
    title: string;
    steps: {
      title: string;
      text: string;
    }[];
  };
  references: {
    title: string;
    text: string;
    href: string;
    label: string;
  };
  benefits: {
    title: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  pricing: {
    title: string;
    paragraphs: string[];
  };
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

export const services: Service[] = [
  {
    title: 'Website erstellen',
    slug: 'website-erstellen',
    excerpt:
      'Moderne, schnelle und sichere Webseiten für Vereine, kleine Unternehmen und Selbstständige.',
    popularity: 99,
    hero: {
      eyebrow: 'Service',
      subtitle:
        'Moderne, schnelle und sichere Webseiten für Vereine, kleine Unternehmen und Selbstständige.',
      intro:
        'Ich entwickle individuelle Webseiten, die professionell aussehen, auf allen Geräten funktionieren und einfach zu verwalten sind. Von der ersten Idee bis zur fertigen Veröffentlichung begleite ich den gesamten Prozess.',
      ctaLabel: 'Projekt anfragen',
      ctaHref: '/contact'
    },
    audience: {
      title: 'Für wen ist dieser Service?',
      items: [
        'Vereine',
        'kleine Unternehmen',
        'Selbstständige',
        'persönliche Projekte',
        'Veranstaltungen',
        'Portfolio-Webseiten'
      ],
      text:
        'Dieser Service ist für alle gedacht, die eine moderne und übersichtliche Website möchten, die nicht nur gut aussieht, sondern auch im Alltag funktioniert. Gerade für Vereine, kleine Unternehmen und Selbstständige ist es oft wichtig, eine Lösung zu haben, die klar aufgebaut, bezahlbar und langfristig einfach zu pflegen ist. Genau darauf lege ich Wert.'
    },
    included: {
      title: 'Was ist enthalten?',
      items: [
        'individuelles Webdesign',
        'mobile-optimiertes Layout',
        'schnelle Ladezeiten',
        'Suchmaschinen-Grundoptimierung (SEO)',
        'einfache Inhaltsverwaltung',
        'Hosting-Beratung',
        'Domain-Einrichtung',
        'SSL und Sicherheit'
      ]
    },
    optional: {
      title: 'Optionaler Wartungsvertrag',
      text:
        'Auf Wunsch biete ich zusätzlich einen Wartungsvertrag mit Stunden-Tarif an. Dieser eignet sich besonders, wenn nach dem Go-live regelmässig kleinere Anpassungen, technische Updates oder Support benötigt werden.',
      items: [
        'technische Updates',
        'kleinere Anpassungen an Inhalten oder Layout',
        'Sicherheitsprüfungen',
        'Support bei Fragen oder Problemen'
      ]
    },
    process: {
      title: 'Ablauf der Zusammenarbeit',
      steps: [
        {
          title: '1. Anfrage',
          text:
            'Du beschreibst kurz dein Projekt, deine Ziele und die gewünschten Funktionen.'
        },
        {
          title: '2. Planung',
          text:
            'Gemeinsam definieren wir Struktur, Inhalte und den genauen Umfang der Website.'
        },
        {
          title: '3. Entwicklung',
          text:
            'Ich setze das Design und die technische Struktur der Website sauber und modern um.'
        },
        {
          title: '4. Feedback',
          text:
            'Anpassungen und Verbesserungen werden auf Basis deines Feedbacks eingearbeitet.'
        },
        {
          title: '5. Veröffentlichung',
          text:
            'Nach dem Feinschliff wird die Website online gestellt und produktiv veröffentlicht.'
        }
      ]
    },
    references: {
      title: 'Beispiele / Referenzen',
      text:
        'Eine Auswahl meiner bisherigen Websites und Webprojekte findest du gesammelt auf der Projektseite.',
      href: '/projects',
      label: 'Zu den Projekten'
    },
    benefits: {
      title: 'Vorteile',
      items: [
        {
          title: 'Individuelle Lösungen',
          text:
            'Jede Website wird passend zum Projekt entwickelt und nicht einfach als unpersönliche Standardlösung übernommen.'
        },
        {
          title: 'Schnelle Ladezeiten',
          text:
            'Optimierter Code und moderne Technologien sorgen für eine performante und angenehme Nutzung.'
        },
        {
          title: 'Mobile-Optimiert',
          text:
            'Die Website funktioniert zuverlässig auf Smartphone, Tablet und Desktop.'
        },
        {
          title: 'Persönliche Betreuung',
          text:
            'Direkter Kontakt und kurze Kommunikationswege während des gesamten Projekts.'
        }
      ]
    },
    pricing: {
      title: 'Preisgestaltung',
      paragraphs: [
        'Die Kosten für eine Website hängen immer vom jeweiligen Projekt ab. Entscheidend sind unter anderem der Umfang der Website, die Anzahl der Unterseiten, gewünschte Funktionen, Designansprüche sowie der allgemeine Entwicklungsaufwand.',
        'Auch die Art des Projekts spielt eine Rolle. Eine kompakte Website für einen Verein oder eine kleinere selbstständige Tätigkeit ist in der Regel deutlich einfacher umzusetzen als eine grössere Unternehmenswebsite mit mehreren Inhaltsbereichen, individuellen Komponenten oder zusätzlichen technischen Anforderungen.',
        'Deshalb lege ich den Preis nicht pauschal fest, sondern beurteile jedes Projekt einzeln. Je nach Website, Entwicklungsaufwand und Unternehmensgrösse entsteht so eine realistische und faire Einschätzung, die sowohl technisch sinnvoll als auch wirtschaftlich passend ist.',
        'Nach einer kurzen Projektanfrage kann ich den Aufwand grob einschätzen und eine erste Preisrichtung angeben.'
      ]
    },
    cta: {
      title: 'Interesse an einer eigenen Website?',
      text:
        'Beschreibe dein Projekt kurz und ich melde mich mit einer ersten Einschätzung.',
      buttonLabel: 'Anfrage senden',
      buttonHref: '/contact'
    }
  }
];