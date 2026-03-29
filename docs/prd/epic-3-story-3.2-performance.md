# Story 3.2: Performance e Core Web Vitals

> **Epic:** 3 — Quality & Launch
> **PRD Fonte:** `docs/prd.md` §8

## User Story

Como visitante,
quero que a LP carregue rapidamente mesmo em conexão móvel,
para que eu não abandone a página antes de ler o conteúdo.

## Acceptance Criteria

1. Lighthouse Performance Score >= 90 em mobile, >= 95 em desktop
2. FCP (First Contentful Paint) <= 1.5s em simulação 4G
3. LCP (Largest Contentful Paint) <= 2.5s
4. CLS (Cumulative Layout Shift) <= 0.1
5. Imagens otimizadas: formato WebP/AVIF, lazy loading, dimensões explícitas
6. Fontes com `font-display: swap` e preload para fontes críticas
7. JS bundle otimizado (code splitting, tree shaking)
8. Resultado do Lighthouse CI documentado e aprovado em PR

## Referências

- Estratégia: `docs/architecture/performance.md`
- Requisitos: `NFR1`, `NFR2` do PRD
