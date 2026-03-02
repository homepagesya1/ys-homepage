export interface Project {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  cover?: string;
  content: string[];
}

export const projects: Project[] = [
  {
    title: 'Projekt A – Portfolio Redesign',
    slug: 'projekt-a-portfolio-redesign',
    excerpt: 'Ein modernes Redesign einer persönlichen Portfolio-Website mit Fokus auf UX.',
    date: '2025-01-15',
    tags: ['Astro', 'UI/UX', 'Responsive'],
    cover: '/images/project-a.svg',
    content: [
      'Dieses Projekt konzentrierte sich auf den kompletten Relaunch einer bestehenden Portfolio-Seite. Das Ziel war ein ruhiges, professionelles Design mit klaren Inhalten.',
      'Besonderer Fokus lag auf guter Lesbarkeit, Performance und einer flexiblen Komponentenstruktur, damit neue Inhalte einfach ergänzt werden können.',
      'Als nächster Schritt sind echte Inhalte und ein CMS-Workflow geplant, damit Projekte direkt aus einer Datenquelle gepflegt werden können.'
    ]
  },
  {
    title: 'Projekt B – Service Landingpage',
    slug: 'projekt-b-service-landingpage',
    excerpt: 'Konzeption und Umsetzung einer conversion-orientierten Landingpage für einen Service.',
    date: '2024-11-08',
    tags: ['Landing Page', 'Conversion', 'SEO'],
    cover: '/images/project-b.svg',
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
    content: [
      'In diesem Projekt wurden Rendering-Blocker reduziert, Assets komprimiert und unnötige Skripte entfernt.',
      'Parallel dazu wurden zentrale Accessibility-Themen verbessert, unter anderem Kontraste, Tastatur-Navigation und sichtbare Fokus-Zustände.',
      'Das Ergebnis war eine deutlich schnellere Seite mit stabilerer Nutzererfahrung auf Desktop und Mobile.'
    ]
  }
];