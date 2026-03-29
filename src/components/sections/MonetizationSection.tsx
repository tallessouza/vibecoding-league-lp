"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const pillars = [
  {
    title: "Patrocínio integrado",
    highlight: "65–70%",
    description:
      "Da receita. Modelo validado pela Kings League com grandes marcas globais. Integração nativa no formato.",
    percentage: 67,
  },
  {
    title: "Apostas & Previsões",
    highlight: "$2.8B",
    description:
      "Mercado global de apostas em esports — segmento mais rápido. Revenue share para a plataforma.",
    percentage: 20,
  },
  {
    title: "Co-streaming",
    highlight: "44%",
    description:
      "Da audiência de esports vem de co-streamers. Criadores ganham por retransmitir. Incentivos alinhados.",
    percentage: 13,
  },
];

export function MonetizationSection() {
  return (
    <section
      id="monetizacao"
      className="bg-bb-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="04" label="O Modelo" />

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={staggerItem}>
              <div className="flex flex-col gap-4 border border-bb-border bg-bb-dark p-6 rounded-lg h-full transition-colors hover:border-bb-border-hover">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bb-dim">
                  {pillar.title}
                </p>
                <p className="text-4xl font-bold text-bb-lime">{pillar.highlight}</p>
                <p className="text-sm text-bb-dim leading-relaxed flex-1">
                  {pillar.description}
                </p>
                <div>
                  <div className="mb-1 flex items-center justify-between font-mono text-[10px] text-bb-dim uppercase tracking-widest">
                    <span>Participação na receita</span>
                    <span>{pillar.percentage}%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-bb-border">
                    <div
                      className="h-full rounded-full bg-bb-lime"
                      style={{ width: `${pillar.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
