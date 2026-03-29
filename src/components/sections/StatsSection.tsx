"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface StatMetric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: string;
  iconLabel: string;
}

const metrics: StatMetric[] = [
  {
    value: 8,
    suffix: "",
    label: "Competições realizadas em 2025-2026",
    icon: "🏆",
    iconLabel: "Troféu",
  },
  {
    value: 700,
    suffix: "k+",
    prefix: "$",
    label: "Em prêmios AWS distribuídos",
    icon: "💰",
    iconLabel: "Dinheiro",
  },
  {
    value: 14,
    suffix: "B",
    label: "Impressões Kings League em 12 meses",
    icon: "👁",
    iconLabel: "Visualizações",
  },
  {
    value: 150,
    suffix: "k+",
    label: "Posts mensais sobre vibe coding no X",
    icon: "📱",
    iconLabel: "Posts nas redes sociais",
  },
];

function StatCard({ metric }: { metric: StatMetric }) {
  const { count, ref } = useCountUp(metric.value, 1800);
  const displayValue = `${metric.prefix ?? ""}${count}${metric.suffix}`;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-3 rounded-xl border border-aiox-border bg-aiox-surface p-6 text-center transition-colors hover:border-aiox-primary/40"
      aria-label={`${displayValue} — ${metric.label}`}
    >
      <span className="text-4xl" role="img" aria-label={metric.iconLabel}>
        {metric.icon}
      </span>
      <p className="text-4xl font-bold text-aiox-primary sm:text-5xl">
        {displayValue}
      </p>
      <p className="text-sm text-aiox-muted leading-snug">{metric.label}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section
      id="stats"
      className="bg-aiox-surface px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-section text-aiox-foreground">
            Os números que provam a oportunidade
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {metrics.map((metric) => (
            <motion.div key={metric.label} variants={staggerItem}>
              <StatCard metric={metric} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
