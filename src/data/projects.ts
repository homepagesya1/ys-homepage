export interface Project {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  cover?: string;

}

export const projects: Project[] = [
  {
    title: 'Webseite Frauenverein-Sarmenstorf',
    slug: 'website-frauenverein-sarmenstorf',
    excerpt: 'Ein modernes Redesign einer persönlichen Portfolio-Website mit Fokus auf UX.',
    date: '2026.03.01',
    tags: ['HTML / CSS', 'UI / UX', 'Website'],
    cover: '/images/website-frauenverein-sarmenstorf.png',

  },
  {
    title: '"Quiz"-Webseite This-or-That',
    slug: 'this-or-that',
    excerpt: 'Eine Art "Quiz" die man zu zweit spielen kann.',
    date: '2025-07-27',
    tags: ['Log In', 'API', 'Vercel', 'HTML, CSS, JS'],
    cover: '/images/this-or-that_1.png',

  },
  {
    title: 'Home-Server',
    slug: 'home-server',
    excerpt: 'Installation Proxmox auf meinem alten Destop-PC für Tests.',
    date: '2025-10-15',
    tags: ['Performance', 'Core Web Vitals', 'Accessibility'],
    cover: '/images/proxmox_1.1.png',

  },
  {
    title: 'Note-Webseite',
    slug: 'note',
    excerpt: 'Notizen-Webseite',
    date: '2025',
    tags: [],
    cover: '/images/project-b.svg',

  }
];