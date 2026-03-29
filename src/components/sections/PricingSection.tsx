"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Para quem quer experimentar a arena.",
    features: [
      "Acesso às rodadas abertas",
      "Ranking público",
      "1 projeto ativo",
      "Comunidade Discord",
    ],
    cta: "Começar grátis",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 49,
    annualPrice: 39,
    description: "Para devs sérios que querem subir no ranking.",
    features: [
      "Todas as rodadas (abertas + exclusivas)",
      "Feedback detalhado dos mentores",
      "Projetos ilimitados",
      "Badge verificado no perfil",
      "Acesso antecipado aos briefings",
      "Replay das rodadas anteriores",
    ],
    cta: "Assinar Pro",
    featured: true,
  },
  {
    id: "team",
    name: "Team",
    monthlyPrice: 129,
    annualPrice: 99,
    description: "Para squads e empresas que treinam juntos.",
    features: [
      "Tudo do Pro",
      "Até 5 membros",
      "Dashboard do squad",
      "Torneio interno privado",
      "Suporte prioritário",
      "Invoice para empresa",
    ],
    cta: "Falar com vendas",
  },
];

export function PricingSection() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      className="py-24"
      id="pricing"
      style={{ backgroundColor: "var(--bb-surface)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-[11px] text-bb-lime tracking-[0.2em] uppercase">
            [11]
          </span>
          <span className="font-mono text-[11px] text-bb-dim tracking-[0.2em] uppercase">
            Planos_
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
        >
          <motion.h2
            variants={staggerItem}
            className="text-display max-w-xl"
            style={{ color: "var(--bb-cream)" }}
          >
            Invista na sua evolução
          </motion.h2>

          {/* Billing toggle */}
          <motion.div variants={staggerItem} className="flex items-center gap-3">
            <span
              className="text-sm font-medium"
              style={{ color: billing === "monthly" ? "var(--bb-cream)" : "var(--bb-dim)" }}
            >
              Mensal
            </span>
            <button
              type="button"
              onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
              className="relative w-12 h-6 rounded-full transition-colors focus-visible:[box-shadow:var(--focus-brand)]"
              style={{ backgroundColor: billing === "annual" ? "var(--bb-lime)" : "var(--bb-border-strong)" }}
              aria-label="Alternar faturamento mensal/anual"
            >
              <span
                className="absolute top-1 w-4 h-4 rounded-full transition-transform"
                style={{
                  backgroundColor: billing === "annual" ? "var(--bb-dark)" : "var(--bb-cream)",
                  left: billing === "annual" ? "calc(100% - 1.25rem)" : "0.25rem",
                }}
              />
            </button>
            <span
              className="text-sm font-medium flex items-center gap-1"
              style={{ color: billing === "annual" ? "var(--bb-cream)" : "var(--bb-dim)" }}
            >
              Anual
              <span
                className="font-mono text-[10px] px-1.5 py-0.5 rounded"
                style={{ backgroundColor: "var(--bb-lime)", color: "var(--bb-dark)" }}
              >
                -20%
              </span>
            </span>
          </motion.div>
        </motion.div>

        {/* Plans grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={staggerItem}
              className="relative flex flex-col p-6 rounded-lg border"
              style={{
                backgroundColor: plan.featured ? "rgba(209,255,0,0.04)" : "var(--bb-surface-panel)",
                borderColor: plan.featured ? "var(--neon)" : "var(--bb-border)",
                boxShadow: plan.featured ? "var(--lime-glow-soft)" : "none",
              }}
            >
              {plan.featured && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: "var(--bb-lime)", color: "var(--bb-dark)" }}
                >
                  Recomendado
                </span>
              )}

              <div className="mb-6">
                <h3
                  className="font-bold text-lg mb-1"
                  style={{ color: "var(--bb-cream)" }}
                >
                  {plan.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold" style={{ color: "var(--bb-cream)" }}>
                    {plan[billing === "monthly" ? "monthlyPrice" : "annualPrice"] === 0
                      ? "Grátis"
                      : `R$${plan[billing === "monthly" ? "monthlyPrice" : "annualPrice"]}`}
                  </span>
                  {plan.monthlyPrice > 0 && (
                    <span className="text-sm mb-1" style={{ color: "var(--color-text-muted)" }}>
                      /mês
                    </span>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    <span className="text-bb-lime mt-0.5 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "primary" : "secondary"}
                size="md"
                href="#waitlist"
                className="w-full justify-center"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
