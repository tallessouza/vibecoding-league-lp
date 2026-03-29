# Story LP-2.1: Hero Section

## Status

Done

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing", "lighthouse"]
```

## Story

**As a** visitante da landing page,
**I want** uma seção hero impactante ao abrir a página,
**so that** entenda imediatamente o que é Vibecoding Competitivo e seja motivado a entrar na lista de espera.

## Acceptance Criteria

1. Seção ocupa 100vh com `id="hero"`
2. Headline principal: "O Próximo Esporte Digital" (display size, bold)
3. Subheadline: "Duelos de programação com IA ao vivo. Audiência participante. Prêmios reais." (body size)
4. CTA primário: botão "Entrar na Lista" que faz scroll até `#waitlist`
5. CTA secundário: link "Ver como funciona" que faz scroll até `#formato`
6. Background com efeito visual AIOX: gradiente dark + partículas ou grid animado (CSS ou canvas leve)
7. Layout responsivo: texto centralizado em mobile, alinhado à esquerda em desktop

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [x] Criar componente `HeroSection` em `components/sections/HeroSection.tsx` (AC: 1-5)
  - [x] Container full-height com `min-h-screen` e `flex items-center`
  - [x] Headline `h1` com classe `text-display` e gradiente de texto AIOX
  - [x] Subheadline `p` com `text-body` e cor `--aiox-muted`
  - [x] Botão CTA primário → scroll para `#waitlist`
  - [x] Link CTA secundário → scroll para `#formato`
- [x] Implementar background visual (AC: 6)
  - [x] Gradiente dark de fundo: `--aiox-background` para variante mais escura
  - [x] Grid animado sutilmente (CSS `@keyframes` ou pseudo-elemento)
  - [ ] Opcional: efeito de partículas com canvas leve (< 5kb)
- [x] Aplicar responsividade (AC: 7)
  - [x] Mobile: `text-center`, CTA empilhados verticalmente
  - [x] Desktop (`lg:`): `text-left`, CTAs lado a lado
- [x] Integrar em `app/page.tsx`
  - [x] Importar e renderizar `<HeroSection />`
  - [x] Adicionar `id="hero"` na seção

## Dev Notes

### Copy do Hero

Basear o copy nos dados reais da oportunidade (do contexto JOU-9):
- O vibecoding competitivo já tem mais de 8 competições realizadas (2025-2026)
- $700.000+ em prêmios no AWS Global Vibe Hackathon
- Termo cunhado por Andrej Karpathy, Palavra do Ano Collins 2025
- 150.000+ postagens mensais no X

### Referência Visual

Consultar `/brandbook/effects` e `/brandbook/vfx` para efeitos visuais AIOX compatíveis. O POC `vibecoding-poc/index.html` usa fundo escuro com efeito de grid — pode servir de referência visual.

### Performance

- Background animado deve ter `prefers-reduced-motion` respeitado
- Canvas/animações não devem impactar LCP > 2.5s

## File List

- `src/components/sections/HeroSection.tsx` — novo componente Hero Section
- `src/app/page.tsx` — integração do HeroSection (substituiu hero inline)
- `src/app/globals.css` — CSS: `.hero-headline`, `.hero-grid-bg`, animação `hero-grid-pulse`, `.hero-secondary-cta`

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
| 2026-03-29 | 1.1 | Implementação completa: HeroSection component, grid animado, responsividade | Dex (@dev) |
