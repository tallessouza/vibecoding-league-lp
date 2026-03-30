"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "RM",
    color: "bg-bb-lime/20 text-bb-lime",
    name: "Rafael Moura",
    role: "Dev Full Stack · @startup_sp",
    quote:
      "Nunca pensei que assistir código ao vivo pudesse ser tão emocionante. O formato de duelo é viciante — parece esporte de verdade.",
  },
  {
    initials: "JS",
    color: "bg-violet-500/20 text-violet-400",
    name: "Juliana Santos",
    role: "Engenheira Sênior · @techbr",
    quote:
      "Participei do primeiro duelo beta e foi incrível. A pressão do tempo, o chat reagindo em tempo real... sem igual.",
  },
  {
    initials: "MC",
    color: "bg-sky-500/20 text-sky-400",
    name: "Marcos Costa",
    role: "Dev Back-end · @freelancer",
    quote:
      "Uso o Jousts para me preparar para entrevistas. Treinar sob pressão com IA é a melhor forma que encontrei.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export function TestimonialsV2() {
  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8 bg-bb-dark">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-bb-cream sm:text-4xl">
            O que os devs estão dizendo
          </h2>
          <p className="text-bb-dim">Vozes da comunidade beta</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex flex-col gap-4 rounded-2xl border border-bb-border bg-bb-surface p-6 hover:border-bb-border-hover transition-colors"
            >
              <p className="flex-1 text-sm leading-relaxed text-bb-dim">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <span
                  className={[
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    t.color,
                  ].join(" ")}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-bb-cream">{t.name}</p>
                  <p className="text-xs text-bb-dim">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
