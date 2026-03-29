"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface StatMetric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const metrics: StatMetric[] = [
  {
    value: 14,
    suffix: "B",
    label: "impressões de marca Kings League em 12 meses",
  },
  {
    value: 2.8,
    suffix: "B",
    prefix: "$",
    label: "apostas em esports em 2025 (58.3% da receita)",
  },
  {
    value: 3.5,
    suffix: "M",
    label: "espectadores simultâneos na Kings World Cup 2025",
  },
  {
    value: 75,
    suffix: "%",
    label: "dos usuários do Replit nunca escrevem uma linha de código",
  },
];

function StatCard({ metric }: { metric: StatMetric }) {
  const { count, ref } = useCountUp(metric.value, 1800);
  const displayValue = `${metric.prefix ?? ""}${count}${metric.suffix}`;

  return (
    <div
      ref={ref}
      className="hairline-cell flex flex-col gap-3"
      aria-label={`${displayValue} — ${metric.label}`}
    >
      <p className="font-mono text-4xl font-bold text-bb-lime sm:text-5xl">
        {displayValue}
      </p>
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bb-dim leading-relaxed">
        {metric.label}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section
      id="stats"
      className="bg-bb-dark px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader index="01" label="Os Números" />

        <motion.div
          className="hairline-grid"
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
