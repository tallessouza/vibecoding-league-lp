# Story LP-1.2: Layout Global, Header, Footer e Sistema de Tipografia AIOX

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
**I want** um layout consistente com header e footer em todas as páginas,
**so that** a navegação e identidade visual da landing page sejam profissionais e coerentes com o design system AIOX.

## Acceptance Criteria

1. `RootLayout` em `app/layout.tsx` com estrutura `<Header>`, `{children}`, `<Footer>`
2. `Header` fixo no topo com: logo AIOX/Vibecoding, links de navegação âncora (`#hero`, `#formato`, `#por-que-brasil`, `#waitlist`) e botão CTA "Entrar na Lista"
3. `Footer` com: tagline do projeto, links redes sociais (placeholder), copyright
4. Escala tipográfica AIOX aplicada globalmente: `h1` (display), `h2` (section title), `h3` (card title), `body`, `caption`
5. Header colapsa em menu hamburguer em mobile (`< 768px`)
6. Smooth scroll ao clicar em links âncora
7. Página `app/page.tsx` renderiza corretamente com `<main>` semântico

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [x] Criar componente `Header` (AC: 2)
  - [x] Logo (SVG ou texto estilizado) posicionado à esquerda
  - [x] Links de navegação âncora com smooth scroll
  - [x] Botão CTA "Entrar na Lista" — variante `primary` do `Button` base
  - [x] `position: fixed`, `z-index` alto, backdrop blur
- [x] Criar componente `Footer` (AC: 3)
  - [x] Tagline: "O próximo esporte digital nascido do playbook da Kings League"
  - [x] Links sociais (Twitter/X, LinkedIn, GitHub) — placeholder `#`
  - [x] Copyright: "© 2026 Vibecoding Competitivo"
- [x] Atualizar `app/layout.tsx` (AC: 1)
  - [x] Importar `Header` e `Footer`
  - [x] Estrutura: `<html> > <body> > <Header /> <main>{children}</main> <Footer />`
  - [x] `padding-top` no `<main>` para compensar o header fixo
- [x] Aplicar escala tipográfica global (AC: 4)
  - [x] Definir classes utilitárias Tailwind baseadas nos tokens AIOX de tipografia
  - [x] `text-display`, `text-section`, `text-card`, `text-body`, `text-caption`
  - [x] Documentar em comentário no `globals.css`
- [x] Implementar menu mobile (AC: 5)
  - [x] Ícone hamburguer visível em `< 768px`
  - [x] Drawer/overlay com links de navegação
  - [x] Fechar ao clicar em link
- [x] Configurar smooth scroll (AC: 6)
  - [x] `html { scroll-behavior: smooth }` no `globals.css`
  - [x] `scroll-margin-top` nos elementos âncora para compensar header fixo
- [x] Validar página principal (AC: 7)
  - [x] `app/page.tsx` com `<section id="hero">`, `<section id="formato">`, etc. (placeholders)
  - [x] `next build` sem erros

## Dev Notes

### Referência Tipográfica AIOX

Consultar `/brandbook/typography` para a escala de tamanhos e pesos:
- Display (h1): tamanho grande, peso bold — para headline do Hero
- Section title (h2): subtítulo de seções
- Card title (h3): títulos de cards
- Body: texto corrido
- Caption: textos auxiliares, labels

### Estrutura do Header

O header deve ter aparência dark/glassmorphism consistente com a estética AIOX. Tokens relevantes:
- `--aiox-surface` para background com opacidade
- `backdrop-filter: blur()` para efeito glassmorphism
- `--aiox-border` para borda sutil

### Acessibilidade

- `<nav>` semântico com `aria-label="Navegação principal"`
- Botão hamburguer com `aria-expanded`, `aria-controls`
- Links com foco visível

## Dev Agent Record

### Agent Model Used
claude-sonnet-4-6

### File List
- `src/components/layout/Header.tsx` — novo
- `src/components/layout/Footer.tsx` — novo
- `src/app/layout.tsx` — modificado
- `src/app/globals.css` — modificado (escala tipográfica + scroll-margin-top)
- `src/app/page.tsx` — modificado (seções semânticas com IDs âncora)

### Completion Notes
- Header implementado com glassmorphism (`backdrop-filter: blur(12px)`), `position: fixed`, `z-index: 50`
- Menu hamburger mobile com estado React, fecha ao clicar em link
- Footer com tagline, ícones SVG inline para social links (placeholder `#`), copyright 2026
- Escala tipográfica como `@layer components`: `text-display`, `text-section`, `text-card`, `text-body`, `text-caption`
- `scroll-behavior: smooth` já estava no globals.css; adicionado `scroll-margin-top: 4rem` nas âncoras
- `next build` passou sem erros ou warnings de tipos

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
| 2026-03-29 | 1.1 | Implementação completa — Header, Footer, layout, tipografia, mobile menu | Dex (@dev) |
