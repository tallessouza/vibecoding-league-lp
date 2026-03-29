"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const reasons = [
  {
    title: "CazéTV",
    highlight: "50M espectadores",
    description:
      "50M espectadores olímpicos no YouTube. Provou que formatos alternativos têm audiência massiva no Brasil.",
  },
  {
    title: "Kings League Brasil",
    highlight: "Kaká & Neymar",
    description:
      "Modelo validado com embaixadores de classe mundial. O playbook da Kings League já funciona aqui.",
  },
  {
    title: "LOUD, FURIA, paiN Gaming",
    highlight: "Monetização sofisticada",
    description:
      "Times com relevância global e comunidade engajada. A cultura de esports já está enraizada.",
  },
  {
    title: "2º mercado de apostas",
    highlight: "15% dos apostadores",
    description:
      "Brasil é o 2º mercado de apostas em esports do mundo. 15% dos apostadores preferem esports a esportes tradicionais.",
  },
];

export function WhyBrazilSection() {
  return (
    <section
      id="por-que-brasil"
      className="bg-bb-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="05" label="Por Que o Brasil" />

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={staggerItem}>
              <div className="flex flex-col gap-3 border border-bb-border bg-bb-surface p-6 rounded-lg transition-colors hover:border-bb-border-hover">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bb-dim">
                  {reason.title}
                </p>
                <p className="text-2xl font-bold text-bb-lime leading-tight">
                  {reason.highlight}
                </p>
                <p className="text-sm text-bb-dim leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
