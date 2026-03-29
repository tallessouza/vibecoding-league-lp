interface MonetizationCardProps {
  icon: string;
  iconLabel: string;
  title: string;
  highlight: string;
  description: string;
  percentage: number;
}

export function MonetizationCard({
  icon,
  iconLabel,
  title,
  highlight,
  description,
  percentage,
}: MonetizationCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-aiox-border bg-aiox-surface p-6 transition-colors hover:border-aiox-primary/40">
      <div className="flex items-center gap-3">
        <span className="text-3xl" role="img" aria-label={iconLabel}>
          {icon}
        </span>
        <h3 className="text-lg font-bold text-aiox-foreground">{title}</h3>
      </div>

      <p className="text-3xl font-bold text-aiox-primary sm:text-4xl">
        {highlight}
      </p>

      <p className="text-body text-aiox-muted leading-relaxed flex-1">
        {description}
      </p>

      <div>
        <div className="mb-1 flex items-center justify-between text-xs text-aiox-muted">
          <span>Participação na receita</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-aiox-surface-elevated">
          <div
            className="h-full rounded-full bg-aiox-primary"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
