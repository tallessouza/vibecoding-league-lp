"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Inscreva-se na liga",
    description:
      "Crie seu perfil, escolha sua stack de IA favorita e entre na lista de espera. Vagas limitadas por temporada.",
  },
  {
    number: "02",
    title: "Forme sua equipe",
    description:
      "Solo ou duo — você decide. Match com outros devs por nível ou venha com seu parceiro de vibecoding.",
  },
  {
    number: "03",
    title: "Receba o briefing",
    description:
      "48 horas antes da rodada, você recebe o problema. Use qualquer IA: Claude, GPT, Cursor, Bolt.new.",
  },
  {
    number: "04",
    title: "Desenvolva em 48h",
    description:
      "Construa ao vivo com a audiência acompanhando. Streaming opcional. Pitche ao final para a banca.",
  },
  {
    number: "05",
    title: "Concorra e evolua",
    description:
      "Pontos no ranking, feedback dos mentores e acesso à próxima rodada. Os melhores vão ao torneio final.",
  },
];

const TOTAL_TICKS = 48;

export function HowItWorksSection() {
  return (
    <section
      className="py-24 overflow-hidden"
      id="how-it-works"
      style={{ backgroundColor: "var(--bb-dark)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-[11px] text-bb-lime tracking-[0.2em] uppercase">
            [06]
          </span>
          <span className="font-mono text-[11px] text-bb-dim tracking-[0.2em] uppercase">
            Como Funciona_
          </span>
        </div>

        <motion.h2
          variants={staggerItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-display mb-4 max-w-3xl"
          style={{ color: "var(--bb-cream)" }}
        >
          48 horas para construir o futuro
        </motion.h2>

        <motion.p
          variants={staggerItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="text-lg mb-12 max-w-2xl"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          Do zero ao produto em uma rodada competitiva. Cada tick conta.
        </motion.p>

        {/* 48-tick progress bar */}
        <div className="flex items-center gap-0.5 mb-16 overflow-hidden" aria-hidden="true">
          {Array.from({ length: TOTAL_TICKS }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-1.5 rounded-sm transition-colors"
              style={{
                backgroundColor:
                  i < 12 ? "var(--bb-lime)" : "var(--bb-border-strong)",
              }}
            />
          ))}
        </div>
        <p className="text-xs font-mono mb-16" style={{ color: "var(--bb-dim)" }}>
          12 / 48 ticks — Fase de Ideação concluída
        </p>

        {/* Staircase steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4"
        >
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="staircase-card flex items-start gap-6 p-6 border rounded-lg"
              style={{
                marginLeft: `${index * 1.5}rem`,
                borderColor: "var(--bb-border)",
                backgroundColor: "var(--bb-surface)",
              }}
            >
              <span
                className="font-mono text-2xl font-bold flex-shrink-0 w-12"
                style={{ color: "var(--bb-lime)" }}
              >
                {step.number}
              </span>
              <div>
                <h3
                  className="font-bold text-lg mb-1"
                  style={{ color: "var(--bb-cream)" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-tertiary)" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
