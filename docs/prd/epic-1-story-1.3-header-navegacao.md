# Story 1.3: Header Sticky e Navegação por Âncoras

> **Epic:** 1 — Setup & Foundation
> **PRD Fonte:** `docs/prd.md` §6

## User Story

Como visitante da LP,
quero ter um header fixo no topo com logo e link para o formulário de waitlist,
para que eu possa acessar o CTA principal a qualquer momento durante a leitura.

## Acceptance Criteria

1. Header com `position: sticky; top: 0` e z-index correto
2. Logo "Vibecoding Competitivo" (texto ou SVG placeholder) no lado esquerdo
3. Botão "Entrar na Waitlist" no lado direito que faz scroll suave até a seção CTA
4. Scroll suave (`scroll-behavior: smooth`) funcionando para todos os links de âncora
5. Header com background opaco/blur ao fazer scroll (sem flicker)
6. Header totalmente responsivo — colapsa corretamente em mobile
7. Testes unitários para o componente Header passando

## Referências

- Componente: `components/molecules/NavBar.tsx`
- Requisito funcional: `FR11`, `FR12` do PRD
