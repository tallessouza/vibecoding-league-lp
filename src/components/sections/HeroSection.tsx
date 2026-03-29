"use client";

import { Badge } from "@/components/ui/Badge";
import { AccentButton } from "@/components/ui/AccentButton";
import { Ticker } from "@/components/ui/Ticker";

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
          {/* Badge */}
          <Badge label="[BETA] Temporada 1 em formação_" />

          {/* Headline */}
          <h1 className="text-display hero-headline text-balance mb-6 max-w-3xl">
            O próximo esporte digital nasceu do código
          </h1>

          {/* Sub */}
          <p className="text-body mb-10 max-w-xl text-bb-dim">
            Duelos ao vivo onde programadores usam IA para construir aplicações
            sob pressão — moldado pelo playbook da Kings League.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <AccentButton variant="lime" onClick={() => scrollTo("waitlist")}>
              Entrar na lista de espera →
            </AccentButton>
            <AccentButton variant="ghost" onClick={() => scrollTo("formato")}>
              Ver o formato →
            </AccentButton>
          </div>

          {/* Ticker */}
          <div className="w-full mt-8">
            <Ticker />
          </div>
        </div>
      </div>
    </section>
  );
}
