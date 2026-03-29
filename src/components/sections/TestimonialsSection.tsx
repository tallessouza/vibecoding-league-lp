"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  featured?: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rafael Mendes",
    role: "Full-Stack Dev · São Paulo",
    quote:
      "Nunca pensei que programar em 48h poderia ser tão intenso e divertido. A Vibecoding League transformou como eu penso sobre construir com IA.",
    featured: true,
  },
  {
    id: 2,
    name: "Ana Carvalho",
    role: "AI Engineer · Belo Horizonte",
    quote:
      "A estrutura competitiva me forçou a sair da zona de conforto. Em uma semana aprendi mais do que em meses de projetos solo.",
  },
  {
    id: 3,
    name: "Lucas Teixeira",
    role: "Indie Hacker · Recife",
    quote:
      "Finalmente uma comunidade que valoriza velocidade e criatividade. O ranking público me motivou a ir além do meu limite.",
  },
  {
    id: 4,
    name: "Mariana Costa",
    role: "Product Engineer · Florianópolis",
    quote:
      "O feedback ao vivo dos mentores durante a competição valeu mais do que qualquer curso. Aplicação direta, sem enrolação.",
  },
];

const SEPARATOR = "◆";

export function TestimonialsSection() {
  return (
    <section
      className="py-24"
      id="testimonials"
      style={{ backgroundColor: "var(--bb-cream)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[11px] text-bb-lime tracking-[0.2em] uppercase">
            [10]
          </span>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: "rgba(5,5,5,0.4)" }}>
            Quem Já Jogou_
          </span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(5,5,5,0.12)" }} />
          <span className="font-mono text-xs" style={{ color: "rgba(5,5,5,0.3)" }}>
            {SEPARATOR}
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "rgba(5,5,5,0.12)" }} />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12"
        >
          <motion.h2
            variants={staggerItem}
            className="text-display max-w-2xl"
            style={{ color: "var(--bb-dark)" }}
          >
            O que dizem os players
          </motion.h2>
        </motion.div>

        {/* Hairline grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: "rgba(5,5,5,0.12)" }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={staggerItem}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="p-6 flex flex-col gap-4"
              style={{
                backgroundColor: "var(--bb-cream)",
                ...(t.featured
                  ? {
                      border: "1px solid var(--neon)",
                      boxShadow: "var(--lime-glow-soft)",
                    }
                  : {}),
              }}
            >
              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "rgba(5,5,5,0.70)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "rgba(5,5,5,0.10)" }}>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{
                    backgroundColor: t.featured ? "var(--bb-lime)" : "rgba(5,5,5,0.12)",
                    color: t.featured ? "var(--bb-dark)" : "rgba(5,5,5,0.50)",
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--bb-dark)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(5,5,5,0.45)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
