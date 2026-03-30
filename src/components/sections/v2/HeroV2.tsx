"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/AioxBadge";
import { AccentButton } from "@/components/ui/AccentButton";

export function HeroV2() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero-v2"
      className="hero-section relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Coluna esquerda — texto */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge label="[BETA] Temporada 1 em formação_" />

            <h1 className="text-display hero-headline text-balance mb-6 max-w-xl">
              O próximo esporte digital nasceu do código
            </h1>

            <p className="text-body mb-10 max-w-xl text-bb-dim">
              Duelos ao vivo onde programadores usam IA para construir
              aplicações sob pressão
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <AccentButton variant="lime" onClick={() => scrollTo("waitlist")}>
                Entrar na lista →
              </AccentButton>
              <AccentButton variant="ghost" onClick={() => scrollTo("formato")}>
                Ver o formato →
              </AccentButton>
            </div>
          </div>

          {/* Coluna direita — floating mockup card */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-sm rounded-2xl border border-bb-border bg-bb-surface/60 p-6 backdrop-blur-md"
            >
              {/* Live badge */}
              <div className="mb-4 flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-red-600/20 px-3 py-1 text-xs font-semibold text-red-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
                  🔴 AO VIVO
                </span>
              </div>

              {/* Duel title */}
              <h3 className="mb-1 font-mono text-sm font-bold uppercase tracking-wider text-bb-lime">
                Dev Duel #042
              </h3>

              {/* Players */}
              <div className="mb-4 flex items-center gap-2 text-sm text-bb-cream">
                <span className="font-semibold">@coder_br</span>
                <span className="text-bb-dim">vs</span>
                <span className="font-semibold">@syntax_king</span>
              </div>

              {/* Countdown */}
              <div className="mb-4 rounded-lg border border-bb-border bg-bb-dark/60 px-4 py-3 text-center">
                <span className="font-mono text-2xl font-bold text-bb-cream">
                  08:42
                </span>
                <p className="mt-0.5 text-xs text-bb-dim">tempo restante</p>
              </div>

              {/* Stack badges */}
              <div className="flex flex-wrap gap-2">
                {["Next.js", "Prisma", "OpenAI"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-bb-border px-2 py-0.5 font-mono text-xs text-bb-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
