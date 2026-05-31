# Dripit — Coming Soon Page

A premium fashion-tech coming soon page built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Supabase**, and **Resend**.

---

## Folder Structure

```
dripit/
├── app/
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main coming soon page
│
├── actions/
│   └── waitlist.ts          # Server Action: validate + save + email
│
├── components/
│   ├── WaitlistForm.tsx      # Form with validation, states, feedback
│   ├── FeatureCard.tsx       # Feature preview card
│   └── StatCard.tsx          # Launch stat card
│
├── lib/
│   ├── email-template.ts     # Resend HTML email template
│   ├── supabase.ts           # Supabase client (public + admin)
│   └── validations.ts        # Zod schema for email validation
│
├── types/
│   └── waitlist.ts           # TypeScript types
│
├── schema.sql                # Supabase table + RLS setup
├── .env.example              # Environment variable template
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Quick Start

### 1. Clone and Install

```bash
# Create Next.js project
npx create-next-app@latest dripit --typescript --tailwind --app --no-src-dir

# Remove boilerplate, then copy all files from this package into the project root.

cd dripit
npm install @supabase/supabase-js resend zod
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) → New project
2. Open **SQL Editor** → paste the contents of `schema.sql` → Run
3. Go to **Project Settings → API** and copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### 3. Set Up Resend

1. Go to [resend.com](https://resend.com) → Create account
2. **API Keys** → Create key → copy → `RESEND_API_KEY`
3. **Domains** → Add & verify your domain
4. Set `RESEND_FROM_EMAIL=hello@yourdomain.com`

> **Development tip**: Before your domain is verified, use `onboarding@resend.dev` as the from address and send only to your own email.

### 4. Configure Environment Variables

```bash
cp .env.example .env.local
```

Fill in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=hello@dripit.co

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 5. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard or:
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add RESEND_API_KEY
vercel env add RESEND_FROM_EMAIL
vercel env add NEXT_PUBLIC_APP_URL
```

---

## How It Works

### Waitlist Flow

```
User submits email
       ↓
WaitlistForm.tsx (useActionState)
       ↓
Server Action: actions/waitlist.ts
       ↓
Zod validation (lib/validations.ts)
       ↓
Supabase insert (admin client bypasses RLS)
  → duplicate? return friendly error
       ↓
Resend sends confirmation email (lib/email-template.ts)
       ↓
Success state shown to user
```

### Duplicate Prevention

- PostgreSQL unique index on `lower(email)` — catches `User@Email.com` vs `user@email.com`
- Server action checks for Postgres error code `23505` and returns a friendly message

### Security

- `SUPABASE_SERVICE_ROLE_KEY` is **server-side only** (no `NEXT_PUBLIC_` prefix)
- RLS is enabled — only service role can read data
- All validation happens server-side via Zod

---

## Customisation

| What | Where |
|------|-------|
| Brand name / tagline | `app/page.tsx` → hero section |
| Feature cards | `app/page.tsx` → `features` array |
| Stats | `app/page.tsx` → `stats` array |
| Email design | `lib/email-template.ts` |
| Email subject | `actions/waitlist.ts` |
| Colours / fonts | `tailwind.config.ts` + `app/globals.css` |

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Email | Resend |
| Validation | Zod |
| Forms | React `useActionState` + Server Actions |

---

## License

MIT — built for Dripit.
