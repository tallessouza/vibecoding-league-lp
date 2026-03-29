interface ArgumentCardProps {
  title: string;
  highlight: string;
  description: string;
}

export function ArgumentCard({ title, highlight, description }: ArgumentCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-aiox-border bg-aiox-surface p-6 transition-colors hover:border-aiox-primary/40">
      <p className="text-sm font-semibold uppercase tracking-widest text-aiox-muted">
        {title}
      </p>
      <p className="text-3xl font-bold text-aiox-accent leading-tight">
        {highlight}
      </p>
      <p className="text-body text-aiox-muted leading-relaxed">{description}</p>
    </div>
  );
}
