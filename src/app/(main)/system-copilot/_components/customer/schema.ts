import { z } from "zod";

export const sectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  responsible: z.string(),
  systemManager: z.string(),
  systemOwner: z.string(),
  responsibleE4: z.string(),
});

export type Section = z.infer<typeof sectionSchema>;


