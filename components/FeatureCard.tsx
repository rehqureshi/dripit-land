// components/FeatureCard.tsx
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <div
      className="
        group relative p-8 rounded-3xl
        bg-white/[0.03] border border-white/[0.07]
        hover:bg-white/[0.06] hover:border-white/[0.14]
        transition-all duration-500
        cursor-default
      "
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Subtle gradient orb on hover */}
      <div className="
        absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
        transition-opacity duration-500
        bg-gradient-to-br from-white/[0.04] to-transparent
        pointer-events-none
      " />

      {/* Icon */}
      <div className="
        w-12 h-12 rounded-2xl mb-6
        bg-white/[0.06] border border-white/[0.1]
        flex items-center justify-center
        text-white/70 group-hover:text-white
        group-hover:bg-white/[0.1] group-hover:border-white/[0.18]
        transition-all duration-300
      ">
        {icon}
      </div>

      {/* Number */}
      <span className="
        text-[11px] tracking-[0.2em] uppercase
        text-white/20 font-light mb-3 block
      ">
        0{index + 1}
      </span>

      {/* Title */}
      <h3 className="
        text-[18px] font-light text-white/90 mb-3
        tracking-[-0.01em] leading-snug
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-white/40 leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}
