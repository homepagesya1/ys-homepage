export interface Service {
  title: string;
  slug: string;
  excerpt: string;
  popularity: number;
  deliverables: string[];
  content: {
    intro: string;
    process: string[];
    cta: string;
  };
}

export const services: Service[] = [
  {
    title: 'Erstellen von Webseiten',
    slug: 'erstellen-von-webseiten',
    excerpt: 'Von der Idee bis zum Launch: moderne, responsive Websites für Unternehmen und Personal Brands.',
    popularity: 99,
    deliverables: [
      'Individuelles Design-Konzept',
      'Responsive Umsetzung für alle Geräte',
      'Technisches SEO-Grundsetup',
      'Performance-Basisoptimierung',
      'Einführung zur eigenständigen Pflege'
    ],
    content: {
      intro:
        'Ich unterstütze dich dabei, eine professionelle Website zu erstellen, die sowohl optisch überzeugt als auch technisch sauber umgesetzt ist.',
      process: [
        'Kickoff & Zieldefinition: Wir klären Positionierung, Zielgruppe und Prioritäten.',
        'Struktur & Design: Wireframes und visuelle Richtung für eine klare Nutzerführung.',
        'Umsetzung & Feinschliff: Entwicklung, Testing, Performance und Launch-Vorbereitung.'
      ],
      cta: 'Bereit für deine neue Website? Lass uns unverbindlich starten.'
    }
  }
];