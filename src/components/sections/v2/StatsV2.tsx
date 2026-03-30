"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Devs inscritos" },
  { value: "12", label: "Duelos realizados" },
  { value: "8", label: "Parceiros tech" },
  { value: "1", label: "Missão" },
];

export function StatsV2() {
  return (
    <section className="border-y border-bb-border bg-bb-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Separador vertical (exceto no primeiro item em desktop) */}
              {i > 0 && (
                <span className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-bb-border md:block" />
              )}

              <span className="text-5xl font-bold text-bb-lime leading-none">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-bb-dim">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
