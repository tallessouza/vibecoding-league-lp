# Story LP-1.2: Layout Global, Header, Footer e Sistema de Tipografia AIOX

## Status

Draft

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

- [ ] Criar componente `Header` (AC: 2)
  - [ ] Logo (SVG ou texto estilizado) posicionado à esquerda
  - [ ] Links de navegação âncora com smooth scroll
  - [ ] Botão CTA "Entrar na Lista" — variante `primary` do `Button` base
  - [ ] `position: fixed`, `z-index` alto, backdrop blur
- [ ] Criar componente `Footer` (AC: 3)
  - [ ] Tagline: "O próximo esporte digital nascido do playbook da Kings League"
  - [ ] Links sociais (Twitter/X, LinkedIn, GitHub) — placeholder `#`
  - [ ] Copyright: "© 2026 Vibecoding Competitivo"
- [ ] Atualizar `app/layout.tsx` (AC: 1)
  - [ ] Importar `Header` e `Footer`
  - [ ] Estrutura: `<html> > <body> > <Header /> <main>{children}</main> <Footer />`
  - [ ] `padding-top` no `<main>` para compensar o header fixo
- [ ] Aplicar escala tipográfica global (AC: 4)
  - [ ] Definir classes utilitárias Tailwind baseadas nos tokens AIOX de tipografia
  - [ ] `text-display`, `text-section`, `text-card`, `text-body`, `text-caption`
  - [ ] Documentar em comentário no `globals.css`
- [ ] Implementar menu mobile (AC: 5)
  - [ ] Ícone hamburguer visível em `< 768px`
  - [ ] Drawer/overlay com links de navegação
  - [ ] Fechar ao clicar em link
- [ ] Configurar smooth scroll (AC: 6)
  - [ ] `html { scroll-behavior: smooth }` no `globals.css`
  - [ ] `scroll-margin-top` nos elementos âncora para compensar header fixo
- [ ] Validar página principal (AC: 7)
  - [ ] `app/page.tsx` com `<section id="hero">`, `<section id="formato">`, etc. (placeholders)
  - [ ] `next build` sem erros

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

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
