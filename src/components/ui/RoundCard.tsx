interface RoundCardProps {
  roundNumber: number;
  name: string;
  duration: string;
  description: string;
  icon: string;
  iconLabel: string;
  accentClass: string;
}

export function RoundCard({
  roundNumber,
  name,
  duration,
  description,
  icon,
  iconLabel,
  accentClass,
}: RoundCardProps) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border-t-4 bg-aiox-surface p-6 shadow-sm ${accentClass}`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-aiox-surface-elevated px-3 py-1 text-xs font-semibold uppercase tracking-widest text-aiox-muted">
          Round {roundNumber}
        </span>
        <span className="text-3xl" role="img" aria-label={iconLabel}>
          {icon}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-bold text-aiox-foreground">{name}</h3>
        <p className="mt-1 text-sm font-medium text-aiox-accent">{duration}</p>
      </div>

      <p className="text-body text-aiox-muted leading-relaxed">{description}</p>
    </div>
  );
}
