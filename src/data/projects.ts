export interface Project {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  cover?: string;
  content: string[];
  image1: string;
  image2: string;
}

export const projects: Project[] = [
  {
    title: 'Webseite Frauenverein-Sarmenstorf',
    slug: 'website-frauenverein-sarmenstorf',
    excerpt: 'Ein modernes Redesign einer persönlichen Portfolio-Website mit Fokus auf UX.',
    date: '2026.03.01',
    tags: ['HTML / CSS', 'UI / UX', 'Website'],
    cover: '/images/website-frauenverein-sarmenstorf.png',
    image1: '/images/website-frauenverein-sarmenstorf_new.png',
    image2: '/images/website-frauenverein-sarmenstorf_old.png',
    content: [
      'In diesem "Projekt" habe ich die Komplette Webseite des Frauenverein Sarmenstorf neu Designt und Programmiert.',
      'Meine Mutter ist im Vorstand des Vereins, und konnte mir daher die Verantwortlichkeit der Webseite geben. Die bisherige Webseite wies gestalterische und strukturelle Schwächen auf, weshalb ich ein umfassendes Redesign durchgeführt habe.',
      ''
    ]
  },
  {
    title: 'Projekt B – Service Landingpage',
    slug: 'projekt-b-service-landingpage',
    excerpt: 'Konzeption und Umsetzung einer conversion-orientierten Landingpage für einen Service.',
    date: '2024-11-08',
    tags: ['Landing Page', 'Conversion', 'SEO'],
    cover: '/images/project-b.svg',
    image1: '',
    image2: '',
    content: [
      'Für dieses Projekt wurde eine Landingpage von Grund auf geplant und umgesetzt. Der Schwerpunkt lag auf einer klaren Informationsarchitektur und starker Call-to-Action.',
      'Durch prägnante Inhalte, visuelle Hierarchie und strukturierte Sektionen konnte die Nutzerführung deutlich verbessert werden.',
      'Technisch wurde auf semantisches HTML und eine wartbare Struktur geachtet, um spätere Optimierungen schnell umsetzen zu können.'
    ]
  },
  {
    title: 'Projekt C – Performance Optimierung',
    slug: 'projekt-c-performance-optimierung',
    excerpt: 'Optimierung einer bestehenden Website in Bezug auf Ladezeit und Core Web Vitals.',
    date: '2024-07-21',
    tags: ['Performance', 'Core Web Vitals', 'Accessibility'],
    cover: '/images/project-c.svg',
    image1: '',
    image2: '',
    content: [
      'In diesem Projekt wurden Rendering-Blocker reduziert, Assets komprimiert und unnötige Skripte entfernt.',
      'Parallel dazu wurden zentrale Accessibility-Themen verbessert, unter anderem Kontraste, Tastatur-Navigation und sichtbare Fokus-Zustände.',
      'Das Ergebnis war eine deutlich schnellere Seite mit stabilerer Nutzererfahrung auf Desktop und Mobile.'
    ]
  }
];