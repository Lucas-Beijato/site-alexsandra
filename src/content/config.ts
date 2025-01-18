import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const canvasesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/canvases" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    slug: z.string(),
    featured_image: z.string(),
    image_list: z.array(z.string()),
    dimensions: z.string(),
    category: z.string(),
    painting_technique: z.string(),
    painting_style: z.string(),
    featured: z.boolean(),
    for_sale: z.boolean(),
    price: z.number(),
  }),
});

export const collections = { canvases: canvasesCollection };
