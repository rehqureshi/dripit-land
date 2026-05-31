// components/StatCard.tsx
interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center px-8 py-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
      <div className="text-[32px] font-extralight tracking-tight text-white/90 mb-1">
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/30 font-light">
        {label}
      </div>
    </div>
  );
}
