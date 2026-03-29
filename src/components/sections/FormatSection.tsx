"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const rounds = [
  {
    roundNumber: 1,
    name: "Speed Build",
    duration: "15–20 min",
    description:
      "Mesmo prompt, primeiro a fazer deploy pontua. Velocidade e execução sob pressão.",
    accentColor: "#F59E0B",
  },
  {
    roundNumber: 2,
    name: "Creative Build",
    duration: "30–40 min",
    description:
      "Mesmo tema, interpretação livre. Julgado por painel + audiência ao vivo. Criatividade conta.",
    accentColor: "#D1FF00",
  },
  {
    roundNumber: 3,
    name: "Mystery Twist",
    duration: "15–20 min",
    description:
      "Requisito surpresa revelado no meio. Adaptabilidade em tempo real determina o vencedor.",
    accentColor: "#ED4609",
  },
];

export function FormatSection() {
  return (
    <section
      id="formato"
      className="bg-bb-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="02" label="O Formato" />

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {rounds.map((round, i) => (
            <motion.div
              key={round.roundNumber}
              variants={staggerItem}
              style={{ marginTop: i > 0 ? `${i * 50 + 24}px` : undefined }}
              className="staircase-card"
            >
              <div
                className="flex flex-col gap-4 bg-bb-dark border border-bb-border p-6 rounded-lg"
                style={{ borderTopColor: round.accentColor, borderTopWidth: 2 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-bb-dim border border-bb-border rounded-full px-3 py-1">
                    Round {round.roundNumber}
                  </span>
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.15em]"
                    style={{ color: round.accentColor }}
                  >
                    {round.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-bb-cream">{round.name}</h3>

                <p className="text-bb-dim text-sm leading-relaxed">
                  {round.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
