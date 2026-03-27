export interface Service {
  title: string;
  slug: string;
  excerpt: string;
  popularity: number;
}

export const services: Service[] = [
  {
    title: 'Website erstellen',
    slug: 'websites',
    excerpt:
      'Moderne, schnelle und sichere Webseiten für Vereine, kleine Unternehmen und Selbstständige.',
    popularity: 99,
  },
  {
    title: 'Mail & Cloud',
    slug: 'mail-cloud',
    excerpt:
      'Alles rund um deine eigene Email mit diner domain. Mit Cloud Speicher un Microsoft Produkten.',
    popularity: 99,
  }
];