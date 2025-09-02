import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string(),

    // Relation
    author: z.string(),

    // Relation
    tags: z.array(z.string()),
  })
});

export const collections = {
  blog: blogCollection
};