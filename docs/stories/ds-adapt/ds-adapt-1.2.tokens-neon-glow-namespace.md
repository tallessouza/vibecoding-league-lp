# Story DS-ADAPT-1.2: Tokens Neon/Glow e Migração de Namespace aiox-* → bb-*

## Status

Ready for Review

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing"]
```

## Story

**As a** visitante da landing page,
**I want** ver os efeitos de brilho neon lime nos CTAs e elementos de destaque,
**so that** a identidade visual marcante do brandbook AIOX — com brilhos e glows lime — seja fielmente aplicada.

## Acceptance Criteria

1. Tokens neon/glow estão definidos no CSS global: `--neon`, `--neon-dim`, `--neon-glow`, `--lime-glow`, `--lime-glow-soft`
2. Tokens de foco acessível estão definidos: `--focus-brand`, `--focus-neutral`
3. Tokens de seleção estão definidos: `--selection-bg`, `--selection-fg`
4. Tokens de warning estão definidos: `--warning-bg`, `--warning-border`
5. Token `--color-bg-void: #000000` e a série `--color-bg-*` estão definidos
6. Tokens de texto `--color-text-base`, `--color-text-secondary`, `--color-text-tertiary`, `--color-text-muted` estão definidos
7. `Header.tsx` migrado de `aiox-*` para `bb-*` tokens (hardcoded rgba substituído por `var(--bb-surface-overlay)`)
8. `Footer.tsx` migrado de `aiox-*` para `bb-*` tokens
9. `Button.tsx` migrado de `aiox-*` para `bb-*` tokens (incluindo uso de `--focus-brand` para focus rings)
10. Efeito `neon-glow` (box-shadow lime) aplicado visualmente nos botões CTA primários
11. Nenhum componente usa tokens `aiox-*` (legado) — apenas `bb-*` e os novos semânticos

## Scope

**IN:**
- Definir tokens semânticos neon/glow/foco/seleção/warning no CSS global
- Migrar `Header.tsx`, `Footer.tsx`, `Button.tsx` de `aiox-*` para `bb-*`
- Adicionar utility class `.neon-glow` (box-shadow lime) no CSS
- Adicionar token `--bb-surface-overlay` se ausente (para o Header)

**OUT:**
- Tokens de espaçamento (coberto em DS-ADAPT-2.1)
- Escala `--bb-accent-02` até `--bb-accent-90` (BAIXO, fora de escopo desta story)
- Escala `--bb-gray-*` (fora de escopo desta story)
- Seções LP (coberto em DS-ADAPT-2.2)

## Dependencies

- Findings de Uma em [JOU-38](/JOU/issues/JOU-38) — documento `comparison-report` seções 1.2 e 6
- [DS-ADAPT-1.1](/JOU/issues/) — pode ser paralelo, sem bloqueio direto
- `app/globals.css` — CSS global com variáveis
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`
- `components/ui/Button.tsx`

## Dev Notes

### Tokens semânticos ausentes a adicionar em globals.css

```css
:root {
  /* Neon / Glow */
  --neon: #D1FF00;
  --neon-dim: rgba(209, 255, 0, 0.4);
  --neon-glow: 0 0 20px rgba(209, 255, 0, 0.5);
  --lime-glow: 0 0 30px rgba(209, 255, 0, 0.6);
  --lime-glow-soft: 0 0 15px rgba(209, 255, 0, 0.3);

  /* Focus */
  --focus-brand: 0 0 0 2px #D1FF00;
  --focus-neutral: 0 0 0 2px rgba(245, 244, 231, 0.6);

  /* Selection */
  --selection-bg: #D1FF00;
  --selection-fg: #050505;

  /* Warning */
  --warning-bg: rgba(237, 70, 9, 0.1);
  --warning-border: #ED4609;

  /* Background scale */
  --color-bg-void: #000000;
  --color-bg-base: #050505;
  --color-bg-surface: #0F0F11;
  --color-bg-elevated: #1C1E19;

  /* Surface overlay (para Header) */
  --bb-surface-overlay: rgba(15, 15, 17, 0.85);

  /* Text scale */
  --color-text-base: #F5F4E7;
  --color-text-secondary: rgba(245, 244, 231, 0.8);
  --color-text-tertiary: rgba(245, 244, 231, 0.6);
  --color-text-muted: rgba(245, 244, 231, 0.4);
}

/* Selection styles */
::selection {
  background: var(--selection-bg);
  color: var(--selection-fg);
}

/* Utility: neon-glow */
.neon-glow {
  box-shadow: var(--neon-glow);
}
```

### Migração Header.tsx

- `rgba(15, 14, 23, 0.85)` → `var(--bb-surface-overlay)`
- `aiox-border` → `bb-border`
- `aiox-surface` → `bb-surface`
- `aiox-foreground` → `color-text-base`
- `aiox-muted` → `color-text-muted`
- `aiox-primary` → `bb-lime`

### Migração Button.tsx

- `aiox-primary` → `bb-lime`
- `aiox-primary-hover` → `bb-lime` (com brightness adjustment)
- `aiox-surface` → `bb-surface`
- `aiox-border` → `bb-border`
- `focus-visible:ring-aiox-primary` → `focus-visible:[box-shadow:var(--focus-brand)]`

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Validação de qualidade usará processo de revisão manual.

## Tasks / Subtasks

- [x] Adicionar tokens semânticos neon/glow no `app/globals.css` (AC: 1)
- [x] Adicionar `--focus-brand`, `--focus-neutral` no `app/globals.css` (AC: 2)
- [x] Adicionar `--selection-bg/fg` e `::selection` rule no `app/globals.css` (AC: 3)
- [x] Adicionar `--warning-bg/border` no `app/globals.css` (AC: 4)
- [x] Adicionar `--color-bg-*` e `--bb-surface-overlay` no `app/globals.css` (AC: 5)
- [x] Adicionar `--color-text-*` no `app/globals.css` (AC: 6)
- [x] Adicionar utility `.neon-glow` no `app/globals.css` (AC: 10)
- [x] Migrar `Header.tsx` para `bb-*` tokens (AC: 7)
- [x] Migrar `Footer.tsx` para `bb-*` tokens (AC: 8)
- [x] Migrar `Button.tsx` para `bb-*` tokens com `--focus-brand` (AC: 9)
- [x] Verificar visualmente que nenhum componente usa `aiox-*` (AC: 11)

## Dev Agent Record

### File List
- `src/app/globals.css` — tokens neon/glow, focus, selection, warning, color-bg-*, color-text-*, ::selection rule, .neon-glow utility
- `src/components/layout/Header.tsx` — migrado de aiox-* para bb-*
- `src/components/layout/Footer.tsx` — migrado de aiox-* para bb-*
- `src/components/ui/Button.tsx` — migrado de aiox-* para bb-*, focus-brand aplicado

### Agent Model Used
claude-sonnet-4-6

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada a partir dos findings de Uma em JOU-38 | River (@sm) |
| 2026-03-29 | 1.1 | GO — 7/10: 11 ACs detalhados, migração bb-* bem documentada. Ausentes: estimativa de complexidade, seção de riscos (regressão na migração aiox-*→bb-*), DoD explícito — não bloqueantes | Pax (@po) |
| 2026-03-29 | 1.2 | Implementação completa: tokens DS-ADAPT-1.2 adicionados, Header/Footer/Button migrados de aiox-* → bb-* | Dex (@dev) |
