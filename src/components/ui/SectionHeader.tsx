interface SectionHeaderProps {
  index: string; // e.g. "01"
  label: string; // e.g. "Os Números"
}

export function SectionHeader({ index, label }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <span className="font-mono text-[11px] text-bb-lime tracking-[0.2em] uppercase">
        [{index}]
      </span>
      <span className="font-mono text-[11px] text-bb-dim tracking-[0.2em] uppercase">
        {label}_
      </span>
    </div>
  );
}
