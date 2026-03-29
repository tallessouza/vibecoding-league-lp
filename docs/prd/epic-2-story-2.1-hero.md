# Story 2.1: Seção Hero

> **Epic:** 2 — LP Sections
> **PRD Fonte:** `docs/prd.md` §7

## User Story

Como visitante,
quero ver uma seção hero impactante com headline, subheadline e CTA primário,
para que eu entenda imediatamente o que é o Vibecoding Competitivo e seja motivado a me inscrever.

## Acceptance Criteria

1. Headline principal: "Vibecoding Competitivo: O Próximo Esporte Digital" (ou equivalente aprovado)
2. Subheadline: texto de 1-2 linhas explicando o conceito (duelos ao vivo, IA, programação)
3. CTA primário "Quero Participar" com scroll suave até a seção de waitlist
4. Background com gradiente dark ou elemento visual de alta energia (video loop ou animação CSS)
5. Layout above-the-fold completo em mobile (320px) e desktop (1280px) sem scroll
6. Animação de entrada (fade-in ou slide-up) no carregamento inicial
7. Lighthouse CLS (Cumulative Layout Shift) <= 0.1 na seção hero

## Referências

- Componente: `components/sections/HeroSection.tsx`
- Motion variants: `lib/motion.ts` → `heroText`, `fadeInUp`
- UX Spec: `docs/front-end-spec.md`
