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
    excerpt: 'Modernes Redesign der Vereinswebseite mit Fokus auf Benutzerfreundlichkeit.',
    date: '2026.03.01',
    tags: ['HTML / CSS', 'UI / UX', 'Website'],
    cover: '/images/website-frauenverein-sarmenstorf.png',

  },
  {
    title: '"Quiz"-Webseite This-or-That',
    slug: 'this-or-that',
    excerpt: 'Eine Art Quiz, das man zu zweit spielen kann.',
    date: '2025-07-27',
    tags: ['Log In', 'API', 'Vercel', 'HTML, CSS, JS'],
    cover: '/images/this-or-that_1.png',

  },
  {
    title: 'Home-Server',
    slug: 'home-server',
    excerpt: 'Installation von Proxmox auf meinem alten Desktop-PC für Testzwecke.',
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