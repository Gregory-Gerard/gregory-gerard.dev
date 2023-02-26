import { z } from 'zod';

export const Article = z.object({
  title: z.string(),
  headline: z.string(),
  metaDescription: z.string(),
  publishedAt: z.date(),
});

export type Article = z.infer<typeof Article>;
