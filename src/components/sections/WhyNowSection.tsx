"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

const arguments_ = [
  {
    title: "Palavra do Ano Collins 2025",
    highlight: "150K posts/mês",
    description:
      '"Vibecoding" é o fenômeno cultural do momento: 150K posts por mês no X e first-mover advantage para quem construir a arena agora.',
  },
  {
    title: "Prêmios em escala exponencial",
    highlight: "$1K → $700K+",
    description:
      "Em menos de um ano, prêmios de competições de vibecoding saltaram de $1K para $700K+ (AWS Vibe Hackathon). A liga chega no pico da curva.",
  },
  {
    title: "IA como protagonista do código",
    highlight: "95% das startups YC W25",
    description:
      "25% das startups YC W25 têm codebases 95% gerados por IA. O próximo esporte digital é sobre quem usa a ferramenta, não sobre quem a escreveu.",
  },
];

export function WhyNowSection() {
  return (
    <section
      id="por-que-agora"
      className="bg-bb-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="03" label="Por Que Agora" />

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {arguments_.map((arg) => (
            <motion.div key={arg.title} variants={staggerItem}>
              <div className="flex flex-col gap-3 border border-bb-border bg-bb-surface p-6 rounded-lg h-full transition-colors hover:border-bb-border-hover">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bb-dim">
                  {arg.title}
                </p>
                <p className="text-2xl font-bold text-bb-lime leading-tight">
                  {arg.highlight}
                </p>
                <p className="text-sm text-bb-dim leading-relaxed">
                  {arg.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
