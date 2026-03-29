# Story DS-ADAPT-3.1: Componentes UI — Input Forms, Feedback e Navigation

## Status

Ready for Review

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing"]
```

## Story

**As a** desenvolvedor do projeto,
**I want** ter os componentes de Input, Feedback e Navigation básicos do brandbook implementados,
**so that** futuras features e formulários possam ser construídos com componentes padronizados do design system.

## Acceptance Criteria

1. Componente `Input` dedicado criado com suporte a states: default, focus, error, disabled
2. Componente `Label` criado para uso com formulários
3. Componente `Select` criado (dropdown nativo estilizado)
4. Componente `Alert` criado com variantes: info, success, warning, error
5. Componente `Modal` / Dialog criado com overlay, título, conteúdo e ações
6. Componente `Tabs` criado com variantes: default e smooth
7. Componente `Breadcrumb` criado (até 5 níveis)
8. Todos os componentes usam tokens `bb-*` e semânticos (sem `aiox-*` ou valores hardcoded)
9. Todos os componentes têm suporte básico de acessibilidade (aria-labels, roles, keyboard navigation)
10. Componentes exportados por `components/ui/index.ts`

## Scope

**IN:**
- `Input`, `Label`, `Select` — componentes de formulário base
- `Alert` — feedback inline
- `Modal` — dialog/overlay
- `Tabs` (default + smooth variant)
- `Breadcrumb`

**OUT:**
- `Toast` / notificações toast (baixa prioridade, escopo futuro)
- `Sidebar` expandida/colapsada (baixa prioridade, escopo futuro)
- `Pagination` (escopo futuro)
- `Search Modal` Cmd+K (escopo futuro)
- `Bottom Bar` mobile (escopo futuro)
- `Table`, `List`, `Chart` data display (escopo futuro)
- `Checkbox`, `Switch`, `Slider`, `Spinner` (escopo futuro)

## Dependencies

- Findings de Uma em [JOU-38](/JOU/issues/JOU-38) — documento `comparison-report` seções 3.2, 3.3, 3.4
- [DS-ADAPT-1.2](/JOU/issues/) — tokens `--focus-brand`, `--bb-border-input`, `--warning-bg/border`
- `components/ui/` — diretório de destino
- `app/globals.css` — tokens de base

## Dev Notes

### Input Component

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

// Classes: border bb-border-input, focus: bb-lime outline, error: bb-error
// Usar: --bb-border-input, --focus-brand, --bb-error, --bb-surface
```

### Alert Component

```tsx
type AlertVariant = 'info' | 'success' | 'warning' | 'error';

// info: azul (--bb-blue)
// success: lime (--bb-lime)
// warning: flare/orange (--warning-bg, --warning-border)
// error: red (--bb-error)
```

### Modal Component

```tsx
// Usar CSS: --layer-modal (z-index 400), --bb-surface-panel
// Fechar com Escape key, click fora do modal
// aria-modal="true", role="dialog", aria-labelledby
```

### Tabs Component

```tsx
// default: border-b ativa com bb-lime
// smooth: fundo deslizante animado (background pill)
// keyboard: ArrowLeft/ArrowRight para navegar entre tabs
```

### Breadcrumb Component

```tsx
// Separator: "/" ou ">" em bb-dim
// Último item: sem link (aria-current="page")
// Máximo 5 níveis, truncar com "..." se necessário
```

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Validação de qualidade usará processo de revisão manual.

## Tasks / Subtasks

- [x] Criar `components/ui/Input.tsx` com states default/focus/error/disabled (AC: 1, 8, 9)
- [x] Criar `components/ui/Label.tsx` (AC: 2, 8)
- [x] Criar `components/ui/Select.tsx` (AC: 3, 8)
- [x] Criar `components/ui/Alert.tsx` com 4 variantes info/success/warning/error (AC: 4, 8, 9)
- [x] Criar `components/ui/Modal.tsx` com overlay, Escape dismiss, scroll lock (AC: 5, 8, 9)
- [x] Criar `components/ui/Tabs.tsx` com variantes default e smooth, ArrowLeft/Right (AC: 6, 8, 9)
- [x] Criar `components/ui/Breadcrumb.tsx` até 5 níveis, truncate com "…" (AC: 7, 8, 9)
- [x] Exportar todos por `components/ui/index.ts` (AC: 10)
- [x] Verificar que nenhum componente usa `aiox-*` ou hardcoded (AC: 8)

## Dev Agent Record

### File List
- `src/components/ui/Input.tsx` — novo, states default/focus/error/disabled, aria-invalid
- `src/components/ui/Label.tsx` — novo, required indicator
- `src/components/ui/Select.tsx` — novo, dropdown nativo estilizado, chevron icon
- `src/components/ui/Alert.tsx` — novo, 4 variantes (info/success/warning/error), dismissível
- `src/components/ui/Modal.tsx` — novo, overlay, Escape key, body scroll lock, aria-modal
- `src/components/ui/Tabs.tsx` — novo, variantes default/smooth, ArrowLeft/Right keyboard
- `src/components/ui/Breadcrumb.tsx` — novo, até 5 níveis, truncate com "…", aria-current
- `src/components/ui/index.ts` — novo, exports de todos os componentes

### Agent Model Used
claude-sonnet-4-6

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada a partir dos findings de Uma em JOU-38 | River (@sm) |
| 2026-03-29 | 1.1 | GO — 7/10: 10 ACs com acessibilidade, OUT-list clara, 7 componentes bem especificados. Ausentes: estimativa (alta complexidade — 7 componentes), seção de riscos, DoD — não bloqueantes | Pax (@po) |
| 2026-03-29 | 1.2 | Implementação: 7 componentes UI criados (Input, Label, Select, Alert, Modal, Tabs, Breadcrumb) + index.ts | Dex (@dev) |
