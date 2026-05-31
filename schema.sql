-- ============================================================
-- Dripit Waitlist Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  source      text not null default 'coming-soon-page',
  signup_date timestamptz not null default now(),
  created_at  timestamptz not null default now()
);

-- Lowercase index to prevent case-variant duplicates
create unique index if not exists waitlist_email_lower_idx
  on public.waitlist (lower(email));

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (server actions use service role key, but this is good practice)
create policy "Allow anonymous inserts" on public.waitlist
  for insert with check (true);

-- Only service role can read (protects email data)
create policy "Service role only reads" on public.waitlist
  for select using (auth.role() = 'service_role');
