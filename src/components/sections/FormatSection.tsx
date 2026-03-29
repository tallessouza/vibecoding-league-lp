"use client";

import { motion } from "framer-motion";
import { RoundCard } from "@/components/ui/RoundCard";
import { staggerContainer, staggerItem } from "@/lib/motion";

const rounds = [
  {
    roundNumber: 1,
    name: "Speed Build",
    duration: "15 min",
    description:
      "Construa o máximo possível no menor tempo. Pontuação por velocidade de deploy e qualidade do código.",
    icon: "⚡",
    iconLabel: "Raio — velocidade",
    accentClass: "border-t-[#f59e0b]",
  },
  {
    roundNumber: 2,
    name: "Creative Build",
    duration: "35 min",
    description:
      "Criatividade em foco. Painel de juízes e audiência avaliam UI/UX, funcionalidade e inovação.",
    icon: "🎨",
    iconLabel: "Paleta — criatividade",
    accentClass: "border-t-[#7c3aed]",
  },
  {
    roundNumber: 3,
    name: "Mystery Twist",
    duration: "15 min",
    description:
      "Na metade do tempo, um requisito surpresa é revelado. Adapte sua solução em tempo real.",
    icon: "❓",
    iconLabel: "Interrogação — surpresa",
    accentClass: "border-t-[#ef4444]",
  },
];

export function FormatSection() {
  return (
    <section
      id="formato"
      className="bg-aiox-background px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-section text-aiox-foreground">
            Como Funciona a Competição
          </h2>
          <p className="text-body mt-4 text-aiox-muted">
            3 rounds. 65 minutos. Um vencedor.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {rounds.map((round) => (
            <motion.div key={round.roundNumber} variants={staggerItem}>
              <RoundCard {...round} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
