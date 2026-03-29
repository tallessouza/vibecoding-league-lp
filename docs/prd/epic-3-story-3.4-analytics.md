# Story 3.4: Analytics e Rastreamento de Conversão

> **Epic:** 3 — Quality & Launch
> **PRD Fonte:** `docs/prd.md` §8

## User Story

Como responsável pelo produto,
quero ter analytics completo com eventos de conversão rastreados,
para que eu possa medir a efetividade da LP e otimizar a taxa de conversão.

## Acceptance Criteria

1. Google Analytics 4 integrado com gtag.js (carregado de forma não-bloqueante)
2. Evento `page_view` automático ao carregar a página
3. Evento `scroll_depth` disparado em 25%, 50%, 75%, 100% do scroll da página
4. Evento `cta_click` disparado em todos os botões "Entrar na Waitlist" com label do ponto de origem (hero, header, etc.)
5. Evento `waitlist_submit` disparado no sucesso do formulário com propriedade `interest_type` (Competidor/Investidor/Fã/Parceiro)
6. Evento `waitlist_error` disparado em caso de erro no submit
7. Preview do GA4 Realtime validando os eventos em staging antes do go-live
8. Sem dados pessoais (email, nome) enviados para o GA4

## Referências

- Implementação: `lib/analytics.ts`
- Requisito: `NFR5` do PRD
