"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AccentButton } from "@/components/ui/AccentButton";

const WAITLIST_COUNT = 247;

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-bb-surface"
    >
      {/* Glow decorativo */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(209,255,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <SectionHeader index="06" label="Seja o Primeiro" />

        <h2 className="text-section text-bb-cream mb-4">
          A liga está sendo formada
        </h2>
        <p className="text-sm text-bb-dim mb-8 max-w-lg">
          Seja fundador. Primeiros 500 recebem acesso ao programa beta com
          vantagens exclusivas.
        </p>

        {/* Social proof counter */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-[11px] text-bb-lime tracking-[0.15em] uppercase">
            {WAITLIST_COUNT} interessados
          </span>
          <span className="font-mono text-[11px] text-bb-dim tracking-[0.15em]">
            — e contando
          </span>
        </div>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="border border-bb-lime/30 bg-bb-dark rounded-lg px-8 py-10 text-center"
          >
            <p className="font-mono text-[11px] text-bb-lime uppercase tracking-[0.2em] mb-2">
              [CONFIRMADO]
            </p>
            <p className="text-bb-cream text-lg font-semibold">
              Você está na lista. Avisaremos antes de todo mundo.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Seu email"
              placeholder="seu@email.com"
              className="flex-1 border border-bb-border bg-bb-dark px-4 py-3.5 text-bb-cream placeholder-bb-dim rounded-lg focus:outline-none focus:ring-2 focus:ring-bb-lime/40 focus:border-bb-lime/40 transition-colors font-mono text-sm"
            />
            <AccentButton
              type="submit"
              variant="lime"
              disabled={isSubmitting}
              className="sm:min-w-[180px]"
            >
              {isSubmitting ? "Enviando…" : "Reservar minha vaga →"}
            </AccentButton>
          </form>
        )}

        {submitError && (
          <p
            role="alert"
            aria-live="polite"
            className="mt-3 font-mono text-[11px] text-bb-error uppercase tracking-widest"
          >
            Erro ao enviar. Tente novamente.
          </p>
        )}
      </div>
    </section>
  );
}
