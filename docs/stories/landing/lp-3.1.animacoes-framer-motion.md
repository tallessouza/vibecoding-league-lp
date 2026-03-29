# Story LP-3.1: Animações Framer Motion + Tokens de Motion AIOX

## Status

Draft

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing", "lighthouse"]
```

## Story

**As a** visitante da landing page,
**I want** que os elementos apareçam com animações suaves ao rolar a página,
**so that** a experiência de navegação seja fluida, moderna e consistente com a estética AIOX.

## Acceptance Criteria

1. `framer-motion` instalado e configurado no projeto Next.js 14
2. Cada seção principal (`HeroSection`, `StatsSection`, `FormatSection`, `MonetizationSection`, `WhyBrazilSection`, `WaitlistSection`) tem animação de entrada `fadeInUp` ao entrar na viewport
3. Cards têm animação `stagger` (aparecem em sequência com delay de 100ms entre eles)
4. Tokens de motion AIOX aplicados: `duration`, `easing` e `delay` baseados no brandbook `/brandbook/motion`
5. Animações desativadas quando `prefers-reduced-motion: reduce` está ativo
6. Performance: Lighthouse Performance Score >= 85 (animações não devem impactar LCP/CLS)

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [ ] Instalar `framer-motion` (AC: 1)
  - [ ] `npm install framer-motion`
  - [ ] Verificar compatibilidade com Next.js 14 App Router (usar `"use client"` onde necessário)
- [ ] Criar tokens de motion AIOX em `lib/motion.ts` (AC: 4)
  - [ ] Consultar `/brandbook/motion` para valores de duração e easing
  - [ ] Exportar variantes reutilizáveis: `fadeInUp`, `fadeIn`, `staggerContainer`, `staggerItem`
  ```typescript
  export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  export const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  ```
- [ ] Criar wrapper `AnimatedSection` (AC: 2, 5)
  - [ ] `components/ui/AnimatedSection.tsx` — `motion.div` com `whileInView` e `viewport={{ once: true }}`
  - [ ] Detectar `prefers-reduced-motion` e desativar animações
- [ ] Aplicar animações nas seções (AC: 2)
  - [ ] Envolver cada `Section` com `<AnimatedSection>`
  - [ ] Adicionar `"use client"` onde necessário
- [ ] Aplicar stagger nos cards (AC: 3)
  - [ ] `RoundCard`, `MonetizationCard`, `ArgumentCard`, `StatsCard` usam `staggerItem` variant
  - [ ] Container dos cards usa `staggerContainer`
- [ ] Validar performance (AC: 6)
  - [ ] Rodar Lighthouse no build de produção (`next build && next start`)
  - [ ] Score >= 85 em Performance
  - [ ] CLS < 0.1 (animações não devem causar layout shift)

## Dev Notes

### Next.js 14 + Framer Motion

Com o App Router, componentes com `motion.*` precisam de `"use client"`. Criar um wrapper client-side `AnimatedSection` evita marcar as sections inteiras como client components desnecessariamente.

### Tokens de Motion AIOX

Consultar `/brandbook/motion` para valores exatos. Valores típicos para referência:
- `duration.fast`: 200ms
- `duration.normal`: 400ms
- `duration.slow`: 600ms
- `easing.standard`: `cubic-bezier(0.4, 0, 0.2, 1)`
- `easing.enter`: `cubic-bezier(0, 0, 0.2, 1)`

### prefers-reduced-motion

```typescript
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
