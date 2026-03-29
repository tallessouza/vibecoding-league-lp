"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";

interface WaitlistFormData {
  name: string;
  email: string;
  type: "competitor" | "investor";
}

export function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormData>();

  const onSubmit = async (data: WaitlistFormData) => {
    setSubmitError(false);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
  };

  return (
    <section
      id="waitlist"
      className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      style={{
        background:
          "linear-gradient(180deg, var(--aiox-background) 0%, var(--aiox-surface) 40%, var(--aiox-background) 100%)",
      }}
    >
      {/* Glow decorativo */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-section text-aiox-foreground">
          Faça Parte do Movimento
        </h2>
        <p className="text-body mt-4 text-aiox-muted">
          Seja um dos primeiros competidores ou leve sua marca para o próximo
          esporte digital.
        </p>

        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="mt-10 rounded-lg border border-aiox-border bg-aiox-surface-elevated px-8 py-10 text-aiox-success"
          >
            <p className="text-xl font-semibold">
              🎉 Você está na lista! Entraremos em contato em breve.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mt-10 space-y-5 rounded-lg border border-aiox-border bg-aiox-surface-elevated p-5 sm:p-8 text-left"
          >
            {/* Campo Nome */}
            <div>
              <label
                htmlFor="name"
                className="text-caption mb-1 block font-medium text-aiox-foreground"
              >
                Nome <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                type="text"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-md border bg-aiox-background px-4 py-2.5 text-aiox-foreground placeholder-aiox-muted transition-colors focus:outline-none focus:ring-2"
                style={{
                  borderColor: errors.name
                    ? "var(--aiox-error)"
                    : "var(--aiox-border)",
                  // @ts-expect-error CSS custom property
                  "--tw-ring-color": "var(--aiox-primary)",
                }}
                placeholder="Seu nome completo"
                {...register("name", { required: "Campo obrigatório" })}
              />
              {errors.name && (
                <p
                  id="name-error"
                  role="alert"
                  aria-live="polite"
                  className="mt-1 text-sm text-aiox-error"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Campo Email */}
            <div>
              <label
                htmlFor="email"
                className="text-caption mb-1 block font-medium text-aiox-foreground"
              >
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                type="email"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-md border bg-aiox-background px-4 py-2.5 text-aiox-foreground placeholder-aiox-muted transition-colors focus:outline-none focus:ring-2"
                style={{
                  borderColor: errors.email
                    ? "var(--aiox-error)"
                    : "var(--aiox-border)",
                  // @ts-expect-error CSS custom property
                  "--tw-ring-color": "var(--aiox-primary)",
                }}
                placeholder="seu@email.com"
                {...register("email", {
                  required: "Campo obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  aria-live="polite"
                  className="mt-1 text-sm text-aiox-error"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Campo Tipo — Radio group */}
            <fieldset>
              <legend className="text-caption mb-2 block font-medium text-aiox-foreground">
                Você é <span aria-hidden="true">*</span>
              </legend>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <label className="flex cursor-pointer items-center gap-3 rounded-md border border-aiox-border bg-aiox-background px-4 py-3 transition-colors has-[:checked]:border-aiox-primary has-[:checked]:bg-aiox-surface-elevated">
                  <input
                    type="radio"
                    value="competitor"
                    className="accent-aiox-primary"
                    {...register("type", { required: "Selecione uma opção" })}
                  />
                  <span className="text-sm text-aiox-foreground">
                    Competidor
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-md border border-aiox-border bg-aiox-background px-4 py-3 transition-colors has-[:checked]:border-aiox-primary has-[:checked]:bg-aiox-surface-elevated">
                  <input
                    type="radio"
                    value="investor"
                    className="accent-aiox-primary"
                    {...register("type", { required: "Selecione uma opção" })}
                  />
                  <span className="text-sm text-aiox-foreground">
                    Investidor/Patrocinador
                  </span>
                </label>
              </div>
              {errors.type && (
                <p
                  role="alert"
                  aria-live="polite"
                  className="mt-1 text-sm text-aiox-error"
                >
                  {errors.type.message}
                </p>
              )}
            </fieldset>

            {/* Erro genérico de submit */}
            {submitError && (
              <p
                role="alert"
                aria-live="polite"
                className="text-sm text-aiox-error"
              >
                Ocorreu um erro. Tente novamente em instantes.
              </p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Enviando…
                </span>
              ) : (
                "Entrar na Lista"
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
