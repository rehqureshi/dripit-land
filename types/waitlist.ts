// types/waitlist.ts

export interface WaitlistEntry {
  id: string;
  email: string;
  source: string;
  signup_date: string;
  created_at: string;
}

export type WaitlistActionState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };
