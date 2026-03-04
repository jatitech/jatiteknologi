import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// Blog collection with Content Layer API
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: () =>
    z.object({
      title: z.string().max(100),
      description: z.string().max(200),
      publishedAt: z.coerce.date(),
    }),
});

export const collections = {
  blog,
};
