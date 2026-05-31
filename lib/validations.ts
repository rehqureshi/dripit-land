// lib/validations.ts
import { z } from "zod";

export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email address is too long")
    .transform((val) => val.toLowerCase().trim()),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
