const TOOLS = [
  "Cursor AI",
  "Claude",
  "Bolt.new",
  "Lovable",
  "Vercel",
  "GitHub",
  "Next.js",
  "v0.dev",
  "Windsurf",
  "Replit",
  "GPT-4o",
  "Gemini",
];

const SEPARATOR = "·";

export function Ticker() {
  // Duplicate array for seamless loop
  const items = [...TOOLS, ...TOOLS];

  return (
    <div
      className="overflow-hidden border-y border-bb-border py-3 my-8 w-full"
      aria-label="Ferramentas de vibecoding"
    >
      <div className="ticker-track flex items-center gap-6 whitespace-nowrap">
        {items.map((tool, i) => (
          <span key={`${tool}-${i}`} className="inline-flex items-center gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bb-dim">
              {tool}
            </span>
            <span className="text-bb-lime/40 text-xs">{SEPARATOR}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
