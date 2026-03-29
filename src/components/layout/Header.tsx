"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Formato", href: "#formato" },
  { label: "Por que Brasil", href: "#por-que-brasil" },
  { label: "Lista de Espera", href: "#waitlist" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-aiox-border"
      style={{
        background: "rgba(15, 14, 23, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-aiox-foreground transition-opacity hover:opacity-80"
          aria-label="Vibecoding League — voltar ao topo"
        >
          <span className="text-lg font-bold tracking-tight">
            <span className="text-aiox-primary">Vibe</span>coding
            <span className="ml-1 text-aiox-accent">League</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-aiox-muted transition-colors hover:text-aiox-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aiox-primary focus-visible:ring-offset-2 focus-visible:ring-offset-aiox-background rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button variant="primary" size="md" href="#waitlist">
            Entrar na Lista
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-aiox-muted transition-colors hover:bg-aiox-surface hover:text-aiox-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aiox-primary md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            // X icon
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-aiox-border bg-aiox-surface md:hidden"
        >
          <nav
            className="flex flex-col gap-1 px-4 py-3"
            aria-label="Navegação principal mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2 text-sm font-medium text-aiox-muted transition-colors hover:bg-aiox-surface-elevated hover:text-aiox-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aiox-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pb-1">
              <Button
                variant="primary"
                size="md"
                href="#waitlist"
                className="w-full justify-center"
                onClick={closeMenu}
              >
                Entrar na Lista
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
