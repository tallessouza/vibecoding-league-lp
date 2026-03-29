"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O que é vibecoding exatamente?",
    answer:
      "Vibecoding é a prática de desenvolver software usando IA generativa como parceira principal — você descreve o que quer e a IA ajuda a construir. O termo foi cunhado em 2025 e virou fenômeno: 150K posts por mês só no X.",
  },
  {
    question: "Como funcionam as competições?",
    answer:
      "Cada rodada dura 48 horas. Você recebe um briefing, forma uma equipe (solo ou duo) e constrói um produto usando qualquer ferramenta de IA. Ao final, apresenta para uma banca de mentores que avalia execução, criatividade e potencial.",
  },
  {
    question: "Preciso saber programar para participar?",
    answer:
      "Conhecimento básico de desenvolvimento ajuda, mas o foco é na capacidade de orquestrar IA para resolver problemas reais. Se você sabe usar Cursor, Bolt.new ou Claude para construir coisas, você já está no jogo.",
  },
  {
    question: "Quais ferramentas de IA posso usar?",
    answer:
      "Qualquer uma: Claude, GPT-4o, Gemini, Cursor, Windsurf, Bolt.new, Lovable, v0.dev, Replit — sem restrições. A liga avalia o resultado final, não qual IA você usou para chegar lá.",
  },
  {
    question: "Como funciona o sistema de ranking?",
    answer:
      "Cada rodada vale pontos baseados no resultado (banca), votos da comunidade e engajamento durante o desenvolvimento. O ranking é público, atualizado após cada rodada e serve de referência para contratações e parcerias.",
  },
  {
    question: "Posso participar de fora do Brasil?",
    answer:
      "A temporada inaugural é focada no Brasil, mas há rodadas abertas para a América Latina. A liga é em português — isso é o que nos diferencia do mercado global dominado por competições em inglês.",
  },
  {
    question: "Qual é o modelo de premiação?",
    answer:
      "Cada temporada tem um prize pool anunciado antes do início. A distribuição segue a colocação no torneio final. Patrocinadores podem adicionar premiações específicas por categoria (melhor app, melhor pitch, etc.).",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-24"
      id="faq"
      style={{ backgroundColor: "var(--bb-cream)" }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-[11px] text-bb-lime tracking-[0.2em] uppercase">
            [12]
          </span>
          <span
            className="font-mono text-[11px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(5,5,5,0.40)" }}
          >
            Perguntas Frequentes_
          </span>
        </div>

        <motion.h2
          variants={staggerItem}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-display mb-12 max-w-2xl"
          style={{ color: "var(--bb-dark)" }}
        >
          Tudo que você precisa saber
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col"
          style={{ borderTop: "1px solid rgba(5,5,5,0.12)" }}
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              style={{ borderBottom: "1px solid rgba(5,5,5,0.12)" }}
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center gap-4 py-5 text-left focus-visible:[box-shadow:var(--focus-brand)] rounded"
                aria-expanded={openIndex === index}
              >
                {/* Badge numérico lime */}
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    backgroundColor: openIndex === index ? "var(--bb-lime)" : "rgba(5,5,5,0.10)",
                    color: openIndex === index ? "var(--bb-dark)" : "rgba(5,5,5,0.45)",
                    transition: "background-color 0.2s, color 0.2s",
                  }}
                >
                  {index + 1}
                </span>

                <span
                  className="font-semibold flex-1 text-sm sm:text-base"
                  style={{ color: "var(--bb-dark)" }}
                >
                  {item.question}
                </span>

                {/* Chevron */}
                <svg
                  className="flex-shrink-0 w-5 h-5 transition-transform"
                  style={{
                    color: "rgba(5,5,5,0.35)",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p
                      className="pb-5 pl-11 text-sm leading-relaxed"
                      style={{ color: "rgba(5,5,5,0.65)" }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
