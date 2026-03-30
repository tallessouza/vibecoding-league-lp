"use client";

import { motion } from "framer-motion";
import { Timer, Bot, Trophy } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Duelos Ao Vivo",
    description: "Dois devs, 20 minutos, um desafio. Ao vivo para o Brasil assistir.",
    mockup: <CountdownMockup />,
  },
  {
    icon: Bot,
    title: "IA como Ferramenta",
    description: "Use qualquer IA: Copilot, Claude, GPT. A criatividade é sua.",
    mockup: <ChatMockup />,
  },
  {
    icon: Trophy,
    title: "Liga Brasileira",
    description: "Rankings, playoffs, campeões. Formato inspirado na Kings League.",
    mockup: <RankingMockup />,
  },
];

function CountdownMockup() {
  return (
    <div className="rounded-xl border border-bb-border bg-bb-dark/60 p-4 text-center">
      <p className="mb-1 font-mono text-xs uppercase tracking-wider text-bb-dim">
        tempo restante
      </p>
      <span
        className="font-mono text-3xl font-bold text-bb-lime"
        style={{ animation: "pulse 2s ease-in-out infinite" }}
      >
        08:42
      </span>
      <div className="mt-2 flex justify-center gap-1">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className="h-1.5 w-6 rounded-full bg-bb-lime/40"
            style={{
              animation: `pulse ${0.8 + i * 0.3}s ease-in-out infinite`,
              opacity: i === 1 ? 1 : 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="rounded-xl border border-bb-border bg-bb-dark/60 p-4 space-y-2">
      <div className="flex items-start gap-2">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bb-lime/20 text-[10px] font-bold text-bb-lime">
          AI
        </span>
        <p className="rounded-lg rounded-tl-none bg-bb-surface px-3 py-1.5 text-xs text-bb-cream">
          Aqui está o componente que você pediu...
        </p>
      </div>
      <div className="flex items-start justify-end gap-2">
        <p className="rounded-lg rounded-tr-none bg-bb-lime/20 px-3 py-1.5 text-xs text-bb-lime">
          Refine e adicione testes
        </p>
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bb-border text-[10px] font-bold text-bb-dim">
          D
        </span>
      </div>
    </div>
  );
}

function RankingMockup() {
  const players = ["@coder_br", "@syntax_king", "@devboss99"];
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="rounded-xl border border-bb-border bg-bb-dark/60 p-4 space-y-2">
      {players.map((player, i) => (
        <div key={player} className="flex items-center gap-2">
          <span className="text-sm">{medals[i]}</span>
          <span className="flex-1 font-mono text-xs text-bb-cream">{player}</span>
          <span className="font-mono text-xs text-bb-lime">{2400 - i * 150} pts</span>
        </div>
      ))}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function FeaturesV2() {
  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 bg-bb-dark">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-bb-cream sm:text-4xl">
            Como funciona a plataforma
          </h2>
          <p className="text-bb-dim">
            Três pilares que tornam os Jousts únicos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-bb-surface border border-bb-border rounded-2xl p-6 hover:border-bb-border-hover transition-colors flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-bb-border bg-bb-dark">
                    <Icon className="h-5 w-5 text-bb-lime" />
                  </div>
                  <h3 className="font-bold text-bb-cream">{feature.title}</h3>
                </div>

                <p className="text-sm text-bb-dim leading-relaxed">
                  {feature.description}
                </p>

                {feature.mockup}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
