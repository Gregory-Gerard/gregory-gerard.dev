import { z } from 'zod';

export const Case = z.object({
  title: z.string(),
  headline: z.string(),
  icon: z.string(),
  order: z.number(),
});

export type Case = z.infer<typeof Case>;
