// actions/waitlist.ts
"use server";

import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validations";
import { buildWaitlistConfirmationEmail } from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(
  _prevState: unknown,
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const rawEmail = formData.get("email");

  // --- Validate ---
  const parsed = waitlistSchema.safeParse({ email: rawEmail });
  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.errors[0]?.message ?? "Invalid email address.",
    };
  }

  const email = parsed.data.email;

  // --- Insert into Supabase ---
  const { error: dbError } = await supabaseAdmin.from("waitlist").insert({
    email,
    source: "coming-soon-page",
    signup_date: new Date().toISOString(),
  });

  if (dbError) {
    // Postgres unique violation code
    if (dbError.code === "23505") {
      return {
        success: false,
        message: "You're already on the waitlist! We'll be in touch.",
      };
    }
    console.error("[Dripit] Supabase insert error:", dbError);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }

  // --- Send confirmation email via Resend ---
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "hello@dripit.co",
      to: email,
      subject: "You're on the Dripit Waitlist 🚀",
      html: buildWaitlistConfirmationEmail(email),
    });
  } catch (emailError) {
    // Email failure is non-fatal — user is already saved
    console.error("[Dripit] Resend error:", emailError);
  }

  return {
    success: true,
    message: "You're on the list. We'll be in touch soon.",
  };
}
