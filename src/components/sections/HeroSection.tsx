"use client";

import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-section relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Animated grid background */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl py-20">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-display hero-headline text-balance mb-6 max-w-3xl">
            O Próximo Esporte Digital
          </h1>
          <p className="text-body mb-10 max-w-xl text-aiox-muted">
            Duelos de programação com IA ao vivo. Audiência participante.
            Prêmios reais.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <Button size="lg" onClick={() => scrollTo("waitlist")}>
              Entrar na Lista
            </Button>
            <button
              onClick={() => scrollTo("formato")}
              className="hero-secondary-cta text-base text-aiox-muted transition-colors hover:text-aiox-foreground"
            >
              Ver como funciona →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
