"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

const VALUES = [
  {
    title: "Competição Real",
    description:
      "Torneios ao vivo com árbitros, brackets e premiação — não apenas hackathons sem consequências.",
  },
  {
    title: "Comunidade First",
    description:
      "Construído por e para devs brasileiros que vibecodeiam de verdade e querem elevar o nível.",
  },
  {
    title: "IA como Ferramenta",
    description:
      "Claude, GPT, Gemini, Cursor como stack de combate — a IA amplifica o dev, não o substitui.",
  },
];

export function WhoWeAreSection() {
  return (
    <section
      className="py-24"
      id="who-we-are"
      style={{ backgroundColor: "var(--bb-cream)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-[11px] text-bb-lime tracking-[0.2em] uppercase">
            [03]
          </span>
          <span
            className="font-mono text-[11px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(5, 5, 5, 0.45)" }}
          >
            Quem Somos_
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={staggerItem}
            className="text-display mb-6 max-w-3xl"
            style={{ color: "var(--bb-dark)" }}
          >
            A primeira liga profissional de vibecoding do Brasil
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-lg mb-16 max-w-2xl leading-relaxed"
            style={{ color: "rgba(5, 5, 5, 0.65)" }}
          >
            Somos uma equipe de devs, builders e entusiastas de IA que acreditam
            que o futuro da programação é espetáculo, comunidade e competição.
            Inspirados pela Kings League, criamos a arena onde código é esporte.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {VALUES.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="border-l-2 border-bb-lime pl-6"
              >
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--bb-dark)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(5, 5, 5, 0.60)" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
