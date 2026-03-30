"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AccentButton } from "@/components/ui/AccentButton";

const tiers = [
  {
    name: "Espectador",
    price: "Gratuito",
    priceNote: null,
    features: [
      "Assistir duelos ao vivo",
      "Acesso ao replay",
      "Chat da comunidade",
    ],
    cta: "Entrar grátis →",
    ctaVariant: "ghost" as const,
    highlighted: false,
  },
  {
    name: "Participante",
    price: "R$ 49",
    priceNote: "/mês",
    features: [
      "Tudo do Espectador",
      "Participar de duelos",
      "Ranking oficial",
      "Badge de participante",
    ],
    cta: "Quero duelar →",
    ctaVariant: "lime" as const,
    highlighted: true,
  },
  {
    name: "Squad/Time",
    price: "R$ 149",
    priceNote: "/mês",
    features: [
      "Tudo do Participante",
      "Time de 4 devs",
      "Dashboard de estatísticas",
      "Mentoria mensal",
    ],
    cta: "Montar time →",
    ctaVariant: "ghost" as const,
    highlighted: false,
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

export function PricingV2() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-bb-surface">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-bb-cream sm:text-4xl">
            Escolha como você quer participar
          </h2>
          <p className="text-bb-dim">Acesso para todos os níveis de envolvimento</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={[
                "flex flex-col rounded-2xl border p-8 transition-colors",
                tier.highlighted
                  ? "border-bb-lime bg-bb-dark shadow-[0_0_32px_rgba(204,255,0,0.08)]"
                  : "border-bb-border bg-bb-dark hover:border-bb-border-hover",
              ].join(" ")}
            >
              {tier.highlighted && (
                <span className="mb-4 self-start rounded-full bg-bb-lime/10 px-3 py-1 text-xs font-semibold text-bb-lime">
                  Mais popular
                </span>
              )}

              <h3 className="mb-1 text-lg font-bold text-bb-cream">{tier.name}</h3>

              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-bb-cream">{tier.price}</span>
                {tier.priceNote && (
                  <span className="text-sm text-bb-dim">{tier.priceNote}</span>
                )}
              </div>

              <ul className="mb-8 flex flex-col gap-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-bb-dim">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-bb-lime" />
                    {feature}
                  </li>
                ))}
              </ul>

              <AccentButton variant={tier.ctaVariant} className="w-full justify-center">
                {tier.cta}
              </AccentButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
