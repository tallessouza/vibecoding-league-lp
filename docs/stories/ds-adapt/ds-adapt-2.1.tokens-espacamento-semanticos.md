# Story DS-ADAPT-2.1: Tokens de Espaçamento Canônicos e Tokens Semânticos Ausentes

## Status

InProgress

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing"]
```

## Story

**As a** desenvolvedor do projeto,
**I want** ter os tokens de espaçamento, z-index, breakpoints e escala gray canônicos definidos conforme o brandbook AIOX,
**so that** o design system seja consistente e os componentes futuros usem variáveis padronizadas em vez de valores hardcoded.

## Acceptance Criteria

1. Tokens de espaçamento semânticos definidos: `--spacing-xs: 0.5rem`, `--spacing-sm: 1rem`, `--spacing-md: 2rem`, `--spacing-lg: 3rem`, `--spacing-xl: 4rem`
2. Escala numérica de espaçamento definida: `--space-0: 0px` até `--space-13: 180px` (14 steps)
3. Tokens de z-index/layer definidos: `--layer-nav: 100`, `--layer-dropdown: 200`, `--layer-overlay: 300`, `--layer-modal: 400`, `--layer-toast: 500`
4. Breakpoints definidos: `--bp-mobile: 767px`, `--bp-tablet: 768px`, `--bp-desktop: 1200px`
5. Escala gray definida: `--bb-gray-charcoal: #3D3D3D`, `--bb-gray-dim`, `--bb-gray-muted`, `--bb-gray-silver`
6. Tokens de superfície ausentes adicionados: `--bb-surface-hover-strong`, `--bb-surface-panel`, `--bb-surface-console`
7. Os tokens legados `--aiox-space-*` são mantidos para não quebrar componentes existentes (compatibilidade retroativa temporária)
8. Nenhum componente existente regride visualmente após a adição dos novos tokens

## Scope

**IN:**
- Definir todos os tokens de espaçamento canônicos no CSS global (`app/globals.css`)
- Definir z-index layers
- Definir breakpoints como CSS custom properties
- Completar escala gray `--bb-gray-*`
- Completar tokens de superfície ausentes `--bb-surface-*`
- Mapear `--spacing-*` e `--space-*` no Tailwind se necessário

**OUT:**
- Migrar componentes existentes para usar os novos tokens de espaçamento (escopo futuro)
- Tokens neon/glow/foco (coberto em DS-ADAPT-1.2)
- Tokens tipográficos (coberto em DS-ADAPT-1.1)

## Dependencies

- Findings de Uma em [JOU-38](/JOU/issues/JOU-38) — documento `comparison-report` seções 1.1, 1.2, 1.3
- `app/globals.css` — arquivo principal a ser modificado
- `tailwind.config.ts` — mapeamento de tokens customizados

## Dev Notes

### Escala de espaçamento a adicionar em globals.css

```css
:root {
  /* Espaçamento semântico */
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 2rem;     /* 32px */
  --spacing-lg: 3rem;     /* 48px */
  --spacing-xl: 4rem;     /* 64px */

  /* Escala numérica */
  --space-0: 0px;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 40px;
  --space-9: 48px;
  --space-10: 64px;
  --space-11: 80px;
  --space-12: 120px;
  --space-13: 180px;

  /* Z-index layers */
  --layer-nav: 100;
  --layer-dropdown: 200;
  --layer-overlay: 300;
  --layer-modal: 400;
  --layer-toast: 500;

  /* Breakpoints */
  --bp-mobile: 767px;
  --bp-tablet: 768px;
  --bp-desktop: 1200px;

  /* Gray scale */
  --bb-gray-charcoal: #3D3D3D;
  --bb-gray-dim: rgba(61, 61, 61, 0.8);
  --bb-gray-muted: rgba(61, 61, 61, 0.5);
  --bb-gray-silver: #9A9A9A;

  /* Surface tokens ausentes */
  --bb-surface-hover-strong: #252720;
  --bb-surface-panel: #161618;
  --bb-surface-console: #0A0A0C;
}
```

### Nota sobre tokens legados

Os tokens `--aiox-space-*` gerados pelo Tailwind devem ser mantidos temporariamente para não quebrar código existente. Os novos tokens `--spacing-*` e `--space-*` são ADICIONAIS, não substituições imediatas.

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Validação de qualidade usará processo de revisão manual.

## Tasks / Subtasks

- [x] Adicionar tokens `--spacing-xs` até `--spacing-xl` em `app/globals.css` (AC: 1)
- [x] Adicionar escala `--space-0` até `--space-13` em `app/globals.css` (AC: 2)
- [x] Adicionar `--layer-*` (z-index) em `app/globals.css` (AC: 3)
- [x] Adicionar `--bp-*` (breakpoints) em `app/globals.css` (AC: 4)
- [x] Adicionar `--bb-gray-*` scale em `app/globals.css` (AC: 5)
- [x] Adicionar `--bb-surface-hover-strong`, `--bb-surface-panel`, `--bb-surface-console` em `app/globals.css` (AC: 6)
- [x] Verificar que `--aiox-space-*` continuam presentes (AC: 7)
- [ ] Build e smoke test — verificar sem regressão visual (AC: 8)

## File List

- `src/app/globals.css` — todos os tokens DS-ADAPT-2.1 adicionados (spacing, layer, bp, gray, surface)

## Dev Agent Record

### Agent Model Used
claude-sonnet-4-6

### Completion Notes
- Todos os tokens adicionados conforme Dev Notes da story
- --aiox-space-* confirmados presentes (retrocompatibilidade OK)
- Build/smoke test pendente

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada a partir dos findings de Uma em JOU-38 | River (@sm) |
| 2026-03-29 | 1.1 | GO — 7/10: tokens específicos com valores, retrocompatibilidade em AC#7. Ausentes: complexidade, seção de riscos formal, DoD — não bloqueantes | Pax (@po) |
| 2026-03-29 | 1.2 | InProgress — todos os tokens CSS adicionados em globals.css | Dex (@dev) |
