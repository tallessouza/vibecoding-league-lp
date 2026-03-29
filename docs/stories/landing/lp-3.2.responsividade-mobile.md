# Story LP-3.2: Responsividade Mobile-First

## Status

InProgress

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing"]
```

## Story

**As a** visitante da landing page acessando pelo celular,
**I want** que todos os elementos sejam legíveis e utilizáveis na minha tela,
**so that** eu possa interagir com o conteúdo sem problemas de layout ou usabilidade.

## Acceptance Criteria

1. Tipografia responsiva: `text-display` escala de `2rem` (mobile) → `2.5rem` (sm) → `3rem` (lg); `text-section` de `1.5rem` (mobile) → `1.875rem` (lg)
2. Padding horizontal padronizado nas seções: `px-4 sm:px-6 lg:px-8` (eliminar `px-8` fixo)
3. HeroSection: layout centralizado em mobile, alinhado à esquerda apenas em `lg+`
4. WaitlistSection: padding do formulário responsivo (`p-5 sm:p-8`), seção com padding vertical responsivo
5. ArgumentCard: texto de destaque (`highlight`) responsivo: `text-2xl sm:text-3xl`
6. WhyBrazilSection: padding responsivo
7. `page.tsx` formato placeholder: padding responsivo
8. Nenhum elemento horizontalmente cortado em viewport de 375px (iPhone SE)

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Validação de qualidade via revisão manual.

## Tasks / Subtasks

- [x] Tipografia responsiva em `globals.css` (AC: 1)
  - [x] `.text-display`: usar `clamp(2rem, 5vw, 3rem)` ou media queries `@screen`
  - [x] `.text-section`: usar `clamp(1.5rem, 3vw, 1.875rem)` ou media queries `@screen`
- [x] Corrigir padding horizontal das seções (AC: 2, 6, 7)
  - [x] `HeroSection.tsx`: `px-8` → `px-4 sm:px-6 lg:px-8`
  - [x] `WhyBrazilSection.tsx`: `px-8 py-20` → `px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20`
  - [x] `page.tsx` formato section: `px-8 py-20` → `px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20`
- [x] WaitlistSection responsivo (AC: 4)
  - [x] Seção: `px-8 py-24` → `px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24`
  - [x] Form card: `p-8` → `p-5 sm:p-8`
- [x] ArgumentCard highlight responsivo (AC: 5)
  - [x] `text-3xl` → `text-2xl sm:text-3xl`
- [x] Verificar HeroSection layout mobile (AC: 3)
  - [x] `items-center text-center lg:items-start lg:text-left` — já correto, verificar

## Dev Notes

### Estratégia Mobile-First

O projeto usa Tailwind CSS com breakpoints padrão:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Para tipografia responsiva, usamos `clamp()` via CSS custom properties dentro das classes `@layer components` no `globals.css`. Isso evita duplicar classes Tailwind e mantém a escala tipográfica centralizada.

### Padrão de Padding

Todas as seções devem seguir: `px-4 sm:px-6 lg:px-8` para padding horizontal. Header e Footer já implementam esse padrão — as seções de conteúdo estavam usando `px-8` fixo.

## Dev Agent Record

### Agent Model Used
claude-sonnet-4-6

### Completion Notes
- Tipografia responsiva implementada via `clamp()` em `globals.css`
- Todas as seções corrigidas para padding mobile-first
- WaitlistSection form padding responsivo
- ArgumentCard highlight text responsivo
- HeroSection já tinha layout correto (center mobile, left lg+)

### File List
- `src/app/globals.css` (modificado — tipografia responsiva)
- `src/components/sections/HeroSection.tsx` (modificado — padding responsivo)
- `src/components/sections/WhyBrazilSection.tsx` (modificado — padding responsivo)
- `src/components/sections/WaitlistSection.tsx` (modificado — padding responsivo + form)
- `src/components/ui/ArgumentCard.tsx` (modificado — highlight text responsivo)
- `src/app/page.tsx` (modificado — formato section padding responsivo)

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para responsividade mobile-first | Dex (@dev) |
| 2026-03-29 | 1.1 | Implementação: tipografia responsiva, padding mobile-first em todas as seções | Dex (@dev) |
