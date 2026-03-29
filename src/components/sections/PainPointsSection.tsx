"use client";

import { motion } from "framer-motion";
import { staggerItem } from "@/lib/motion";

const PAIN_ITEMS = [
  "Hackathons sem audiência",
  "Código morre no GitHub",
  "Nenhum prêmio de verdade",
  "Sem ranking público",
  "Projetos sem feedback",
  "Comunidade fragmentada",
  "Portfolio invisível",
  "Sem mentoria ao vivo",
];

const SOLUTION_ITEMS = [
  "Torneios ao vivo",
  "Arena com espectadores",
  "Premiação real",
  "Ranking nacional",
  "Feedback em tempo real",
  "Liga unificada",
  "Visibilidade de mercado",
  "Mentores na banca",
];

const SEPARATOR = "◆";

function TickerRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-bb-border py-3 w-full">
      <div
        className={`${reverse ? "ticker-track-reverse" : "ticker-track"} flex items-center gap-8 whitespace-nowrap`}
      >
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bb-dim">
              {item}
            </span>
            <span className="text-bb-lime/40 text-xs">{SEPARATOR}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function PainPointsSection() {
  return (
    <section
      className="py-20 overflow-hidden"
      id="pain-points"
      style={{ backgroundColor: "var(--bb-surface)" }}
    >
      {/* Section label */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[11px] text-bb-lime tracking-[0.2em] uppercase">
            [05]
          </span>
          <span className="font-mono text-[11px] text-bb-dim tracking-[0.2em] uppercase">
            O Problema_
          </span>
        </div>

        <motion.h2
          variants={staggerItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-display max-w-3xl mb-4"
          style={{ color: "var(--bb-cream)" }}
        >
          Devs brasileiros talentos sem palco
        </motion.h2>

        <motion.p
          variants={staggerItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-lg max-w-2xl"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          O ecossistema atual deixa o talento invisível. A Vibecoding League
          resolve isso criando uma arena onde cada build conta.
        </motion.p>
      </div>

      {/* Dual ticker */}
      <div className="flex flex-col gap-0">
        <TickerRow items={PAIN_ITEMS} reverse={false} />
        <TickerRow items={SOLUTION_ITEMS} reverse={true} />
      </div>
    </section>
  );
}
