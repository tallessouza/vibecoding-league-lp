# Story LP-3.1: Animações Framer Motion + Tokens de Motion AIOX

## Status

Ready for Review

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

- [x] Instalar `framer-motion` (AC: 1)
  - [x] `npm install framer-motion`
  - [x] Verificar compatibilidade com Next.js 14 App Router (usar `"use client"` onde necessário)
- [x] Criar tokens de motion AIOX em `lib/motion.ts` (AC: 4)
  - [x] Consultar `/brandbook/motion` para valores de duração e easing
  - [x] Exportar variantes reutilizáveis: `fadeInUp`, `fadeIn`, `staggerContainer`, `staggerItem`
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
- [x] Criar wrapper `AnimatedSection` (AC: 2, 5)
  - [x] `components/ui/AnimatedSection.tsx` — `motion.div` com `whileInView` e `viewport={{ once: true }}`
  - [x] Detectar `prefers-reduced-motion` e desativar animações
- [x] Aplicar animações nas seções (AC: 2)
  - [x] Envolver cada `Section` com `<AnimatedSection>`
  - [x] Adicionar `"use client"` onde necessário
- [x] Aplicar stagger nos cards (AC: 3)
  - [x] `ArgumentCard` usa `staggerItem` variant (via `motion.div` wrapper em `WhyBrazilSection`)
  - [x] Container dos cards usa `staggerContainer`
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

## Dev Agent Record

### Agent Model Used
claude-sonnet-4-6

### Completion Notes
- `framer-motion` já estava instalado (v12.38.0) — nenhuma alteração no package.json necessária
- brandbook/motion não existe no projeto; tokens usados com base nos valores do Dev Notes e CSS custom properties já existentes em `globals.css`
- `WhyBrazilSection` atualizado para `"use client"` para suportar stagger via `motion.div`
- Seções `StatsSection`, `MonetizationSection` não implementadas ainda — serão animadas quando criadas em stories futuras
- Validação Lighthouse (AC-6) requer execução manual: `next build && next start` + DevTools Lighthouse

### File List
- `src/lib/motion.ts` (criado)
- `src/components/ui/AnimatedSection.tsx` (criado)
- `src/components/sections/WhyBrazilSection.tsx` (modificado — stagger nos cards)
- `src/app/page.tsx` (modificado — AnimatedSection wrapping sections)

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
| 2026-03-29 | 1.1 | Implementação: motion.ts, AnimatedSection, stagger WhyBrazilSection, page.tsx wrappers | Dex (@dev) |
