# Story LP-1.1: Scaffold Next.js 14 + AIOX Design Tokens + Componentes Base

## Status

Draft

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing", "lighthouse"]
```

## Story

**As a** desenvolvedor da landing page,
**I want** um projeto Next.js 14 configurado com o design system AIOX,
**so that** todas as seções da landing page usem tokens, tipografia e componentes consistentes com a identidade visual da AIOX.

## Acceptance Criteria

1. Projeto Next.js 14 (App Router) criado e rodando em `localhost:3000`
2. AIOX Design Tokens importados como CSS custom properties (cores, espaçamento, tipografia, sombras, motion)
3. Fonte principal configurada via `next/font` (Inter ou fonte AIOX equivalente)
4. Estrutura de pastas: `app/`, `components/`, `lib/`, `public/`
5. Tailwind CSS configurado com os tokens AIOX mapeados (`aiox-primary`, `aiox-surface`, etc.)
6. Componente base `Button` com variantes `primary`, `secondary`, `ghost`
7. `eslint`, `prettier`, `typescript` configurados e passando sem erros
8. Deploy preview funcional (Vercel ou local build `next build` sem erros)

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [ ] Criar projeto Next.js 14 com App Router (AC: 1)
  - [ ] `npx create-next-app@latest vibecoding-landing --typescript --tailwind --app --src-dir`
  - [ ] Remover conteúdo boilerplate padrão
- [ ] Importar AIOX Design Tokens (AC: 2, 5)
  - [ ] Consultar `https://brand.aioxsquad.ai/brandbook/foundations` para tokens de cor e espaçamento
  - [ ] Criar `app/globals.css` com CSS custom properties dos tokens AIOX
  - [ ] Mapear tokens no `tailwind.config.ts`: cores (`aiox-primary`, `aiox-accent`, `aiox-surface`, `aiox-background`), espaçamento, raios de borda
  - [ ] Incluir tokens de tipografia do brandbook `/brandbook/typography`
- [ ] Configurar tipografia com `next/font` (AC: 3)
  - [ ] Importar fonte(s) usada(s) no design system AIOX
  - [ ] Aplicar como variável CSS global
- [ ] Criar estrutura de pastas (AC: 4)
  - [ ] `components/ui/` — componentes atômicos
  - [ ] `components/sections/` — seções da landing page (serão populadas nas próximas stories)
  - [ ] `lib/utils.ts` — utilitários (cn helper para classnames)
  - [ ] `public/` — assets estáticos
- [ ] Criar componente base `Button` (AC: 6)
  - [ ] Variantes: `primary` (CTA principal), `secondary`, `ghost`
  - [ ] Tamanhos: `sm`, `md`, `lg`
  - [ ] Suporte a `href` (link) e `onClick` (botão)
- [ ] Configurar linting e formatação (AC: 7)
  - [ ] ESLint com regras Next.js
  - [ ] Prettier com config base
  - [ ] `tsconfig.json` com paths aliases (`@/components`, `@/lib`)
- [ ] Validar build (AC: 8)
  - [ ] `npm run build` sem erros
  - [ ] `npm run lint` sem erros
  - [ ] `npm run typecheck` sem erros

## Dev Notes

### AIOX Design System

O design system AIOX está documentado em `https://brand.aioxsquad.ai/brandbook/`. As seções relevantes para esta story:
- `/brandbook/foundations` — tokens base (cores, espaçamento)
- `/brandbook/typography` — escala tipográfica
- `/brandbook/color-tokens` — tokens semânticos de cor
- `/brandbook/spacing-layout` — grid e espaçamento

### Estrutura de Arquivos Esperada

```
vibecoding-landing/
├── app/
│   ├── layout.tsx          # Root layout com fontes e providers
│   ├── page.tsx            # Landing page (importa todas as seções)
│   └── globals.css         # AIOX tokens como CSS custom properties
├── components/
│   ├── ui/
│   │   └── Button.tsx
│   └── sections/           # Vazio — populado nas stories LP-2.x
├── lib/
│   └── utils.ts            # cn() helper
├── public/
├── tailwind.config.ts      # Tokens AIOX mapeados
└── tsconfig.json           # Paths aliases
```

### Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS custom properties
- **Linguagem:** TypeScript 5
- **Deploy:** Vercel (standalone, não monorepo)

### Referência ao POC Existente

O `vibecoding-poc/` contém HTML/CSS vanilla que pode servir de referência visual para as cores e layout geral. Não copiar o código — apenas usar como referência do conceito visual.

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
