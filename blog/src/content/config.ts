// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts,
};
