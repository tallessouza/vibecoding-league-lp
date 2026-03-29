interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-1.5 mb-6">
      <span className="font-mono text-[11px] text-bb-lime tracking-[0.2em] uppercase border border-bb-lime/30 rounded-full px-3 py-1">
        {label}
      </span>
    </div>
  );
}
