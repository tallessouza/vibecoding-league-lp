# Story 2.2: Seção Stats

> **Epic:** 2 — LP Sections
> **PRD Fonte:** `docs/prd.md` §7

## User Story

Como visitante,
quero ver números de impacto animados que demonstram o tamanho da oportunidade,
para que eu entenda o potencial de mercado com dados concretos.

## Acceptance Criteria

1. Exibe ao menos 4 métricas: "8+ Competições Realizadas", "US$700K+ em Prêmios", "14B Impressões Kings League", "50M Viewers CazéTV"
2. Cada métrica em card separado com ícone ou label descritivo
3. Animação de counter (número aumenta de 0 até o valor final) disparada ao entrar no viewport (Intersection Observer)
4. Layout responsivo: grid 4 colunas em desktop, 2 colunas em tablet, 1-2 colunas em mobile
5. Sem dependência de JavaScript para renderização inicial (números visíveis mesmo com JS desabilitado)

## Referências

- Componente: `components/sections/StatsSection.tsx`
- Atom: `components/atoms/StatNumber.tsx`
- Molecule: `components/molecules/StatBlock.tsx`
- Motion variant: `lib/motion.ts` → `counterVariant`
- Requisito: `FR3` do PRD
