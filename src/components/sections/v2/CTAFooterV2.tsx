"use client";

import { motion } from "framer-motion";

export function CTAFooterV2() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta-footer" className="bg-bb-lime px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <span className="rounded-full bg-black/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-black/70">
            Vagas limitadas
          </span>

          <h2 className="text-balance text-4xl font-bold text-black sm:text-5xl">
            Seja um dos primeiros a duelar ao vivo
          </h2>

          <p className="max-w-xl text-lg text-black/70">
            Lista de espera aberta. Temporada 1 começa em breve.
          </p>

          <button
            onClick={() => scrollTo("waitlist")}
            className="inline-flex items-center justify-center bg-black px-8 py-4 text-sm font-bold uppercase tracking-wider text-bb-lime transition-colors hover:bg-black/80 active:scale-[0.98]"
          >
            Entrar na lista →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
