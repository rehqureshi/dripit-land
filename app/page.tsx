// app/page.tsx
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";
import { StatCard } from "@/components/StatCard";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Discover Independent Designers",
    description:
      "Curated drops from emerging designers and independent voices. No algorithms, no mainstream noise — just fashion that means something.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect
          x="3"
          y="3"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="11"
          y="3"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="3"
          y="11"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="11"
          y="11"
          width="6"
          height="6"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    ),
    title: "Shop Unique Collections",
    description:
      "One-of-a-kind pieces you won't find at any retailer. Direct from the designer to your wardrobe — with full transparency on who made it and why.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 2L12.09 7.26L17.66 7.64L13.5 11.14L14.9 16.56L10 13.64L5.1 16.56L6.5 11.14L2.34 7.64L7.91 7.26L10 2Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Join a Fashion-First Community",
    description:
      "Connect with designers, tastemakers, and people who define what comes next. Fashion is culture — and culture is built together.",
  },
];

const stats = [
  { value: "Early", label: "Access" },
  { value: "10+", label: "Designer Partnerships" },
  { value: "∞", label: "Curated Collections" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white antialiased overflow-x-hidden">
      {/* ── Ambient background ─────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        {/* Top-centre glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-white/[0.025] blur-[120px]" />
        {/* Bottom-right accent */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── Navigation ─────────────────────────────────────────── */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-8">
        <Image
  src="/logo.png"
  alt="Dripit"
  width={120}
  height={40}
  className="object-contain"
/>
        <div className="flex items-center gap-6">
          <span className="hidden sm:flex items-center gap-2 text-[11px] tracking-widest uppercase text-white/30 font-light">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Coming Soon
          </span>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-12 pt-16 pb-24 md:pt-28 md:pb-36 text-center max-w-5xl mx-auto">
        {/* Pre-tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.04] mb-10">
          <span className="text-[11px] tracking-[0.18em] uppercase text-white/40 font-light">
            Launching 2026
          </span>
          <span className="text-white/20">·</span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-white/40 font-light">
            Join the Waitlist
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[56px] sm:text-[72px] md:text-[96px] leading-[0.95] font-extralight tracking-[-0.04em] text-white/95 mb-8">
          Discover
          <br />
          <span className="italic text-white/50">Fashion</span>
          <br />
          Beyond Brands
        </h1>

        {/* Sub-description */}
        <p className="max-w-[480px] mx-auto text-[16px] leading-relaxed text-white/40 font-light mb-14">
          Dripit is a new platform connecting you to independent designers and
          unique collections — launching soon. Be the first to know.
        </p>

        {/* Waitlist Form */}
        <WaitlistForm />
      </section>

      {/* ── Features ───────────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-12 pb-28 max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/25 font-light">
            What's Coming
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-12 pb-28 max-w-4xl mx-auto">
        <div className="
          p-8 md:p-12 rounded-[32px]
          bg-white/[0.02] border border-white/[0.07]
          backdrop-blur-sm
        ">
          <p className="text-center text-[11px] tracking-[0.2em] uppercase text-white/25 font-light mb-10">
            Launch at a Glance
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="relative z-10 px-6 md:px-12 py-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Image
  src="/logo.png"
  alt="Dripit"
  width={80}
  height={28}
  className="object-contain opacity-40"
/>

          {/* Social placeholders */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] tracking-wide text-white/25 hover:text-white/50 transition-colors duration-200 font-light"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[12px] text-white/20 font-light">
            © {new Date().getFullYear()} Dripit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
