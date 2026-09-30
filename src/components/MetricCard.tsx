import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  description: string;
}

export default function MetricCard({
  icon: Icon,
  label,
  value,
  description,
}: MetricCardProps) {
  return (
    <div className="group rounded-3xl border border-black/5 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff7f8] text-[#087f8c] transition group-hover:bg-[#08aebe] group-hover:text-white">
        <Icon size={22} />
      </div>

      <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#667579]">
        {label}
      </p>

      <h3 className="mt-2 font-serif text-4xl">
        {value}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#667579]">
        {description}
      </p>
    </div>
  );
}