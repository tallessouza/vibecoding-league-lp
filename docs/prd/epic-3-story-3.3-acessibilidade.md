# Story 3.3: Acessibilidade WCAG AA

> **Epic:** 3 — Quality & Launch
> **PRD Fonte:** `docs/prd.md` §8

## User Story

Como usuário com necessidades especiais,
quero que a LP seja navegável por teclado e compatível com leitores de tela,
para que eu possa acessar todo o conteúdo independentemente da forma de interação.

## Acceptance Criteria

1. Contraste de cor >= 4.5:1 para todo texto normal, >= 3:1 para texto grande
2. Navegação completa por teclado (Tab, Enter, Escape) sem armadilhas de foco
3. Indicador de foco visível em todos os elementos interativos
4. Alt text descritivo em todas as imagens não-decorativas
5. Labels explícitos em todos os campos do formulário (não apenas placeholder)
6. Hierarquia de headings correta (h1 único, h2 por seção, h3 para subseções)
7. Audit com axe-core (ou similar) com zero violações WCAG AA
8. Testado com VoiceOver (Mac) ou NVDA (Windows) — fluxo principal navegável

## Referências

- Requisito: `NFR3` do PRD
- Design tokens de contraste: `docs/architecture/design-tokens.md`
