# Story 1.2: Integração de Design Tokens AIOX

> **Epic:** 1 — Setup & Foundation
> **PRD Fonte:** `docs/prd.md` §6

## User Story

Como designer/desenvolvedor,
quero ter os tokens de cor, tipografia e spacing do design system AIOX configurados no projeto,
para que todos os componentes da LP usem a identidade visual correta desde o início.

## Acceptance Criteria

1. Arquivo `src/styles/tokens.css` (ou equivalente Tailwind) com variáveis CSS de cor (dark background, accent neon, texto)
2. Fontes configuradas (tipografia AIOX ou equivalente aprovado) com loading otimizado (`font-display: swap`)
3. Tailwind config estendido com todas as cores e tamanhos do design system
4. Componente `<Button>` base com variantes `primary` e `secondary` implementado e documentado
5. Componente `<Section>` wrapper com padding e max-width padrão implementado
6. Storybook ou demo page mostrando tokens e componentes base (opcional mas preferido)

## Referências

- Design System: `docs/architecture/design-tokens.md`
- Tokens CSS: `docs/fullstack-architecture.md` §3
