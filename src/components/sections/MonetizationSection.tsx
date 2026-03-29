"use client";

import { motion } from "framer-motion";
import { MonetizationCard } from "@/components/ui/MonetizationCard";
import { staggerContainer, staggerItem } from "@/lib/motion";

const pillars = [
  {
    icon: "🏆",
    iconLabel: "Troféu — patrocínios",
    title: "Patrocínios",
    highlight: "65-70%",
    description:
      "Da receita vem de marcas de tech. Modelo validado pela Kings League com grandes parceiros globais.",
    percentage: 67,
  },
  {
    icon: "🎲",
    iconLabel: "Dado — apostas",
    title: "Apostas & Previsões",
    highlight: "$2.8B/ano",
    description:
      "Mercado global de apostas em esports. Integração de predictions com revenue share para a plataforma.",
    percentage: 20,
  },
  {
    icon: "📡",
    iconLabel: "Antena — streaming",
    title: "Streaming Descentralizado",
    highlight: "Revenue Share",
    description:
      "Criadores de conteúdo ganham por retransmitir partidas. Alinhamento de incentivos com a comunidade.",
    percentage: 13,
  },
];

export function MonetizationSection() {
  return (
    <section
      id="monetizacao"
      className="bg-aiox-surface px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-section text-aiox-foreground">
            Um Modelo de Negócio Comprovado
          </h2>
          <p className="text-body mt-4 text-aiox-muted">
            Três fontes de receita. Uma oportunidade de escala.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={staggerItem}>
              <MonetizationCard {...pillar} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
