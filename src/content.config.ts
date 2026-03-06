import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      date: z.coerce.date(),
      featured: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      cover: image(),
      gallery: z.array(image()).optional(),
    }),
});

export const collections = {
  projects,
};