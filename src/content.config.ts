import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const appendix = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/appendix' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional().default(''),
    category: z.enum(['cancer', 'non-cancer-disease', 'regulatory', 'strategic', 'summary', 'other']),
    date: z.string().default('April 2026'),
  }),
});

export const collections = { appendix };
