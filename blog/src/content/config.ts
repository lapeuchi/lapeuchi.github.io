import { defineCollection, z } from "astro:content";

const series = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  series,
  posts,
};
