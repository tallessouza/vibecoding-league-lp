# Story 2.3: Seção Format (3 Rounds)

> **Epic:** 2 — LP Sections
> **PRD Fonte:** `docs/prd.md` §7

## User Story

Como competidor em potencial,
quero entender o formato de competição com os 3 rounds detalhados,
para que eu saiba exatamente como funciona uma partida de Vibecoding Competitivo.

## Acceptance Criteria

1. Exibe 3 cards/blocos: "Round 1 — Speed Build (15-20min)", "Round 2 — Creative Build (30-40min)", "Round 3 — Mystery Twist (15-20min)"
2. Cada round com título, duração e descrição de 2-3 linhas explicando o objetivo
3. Visual de progressão/timeline conectando os 3 rounds
4. Animação on-scroll: cards aparecem sequencialmente ao rolar
5. Layout responsivo: 3 colunas em desktop, stack vertical em mobile
6. Destaque visual no "Mystery Twist" como elemento surpresa (badge, cor diferente)

## Referências

- Componente: `components/sections/FormatSection.tsx`
- Molecule: `components/molecules/RoundCard.tsx`
- Atom: `components/atoms/Badge.tsx` (badge "SURPRESA" no Mystery Twist)
- Motion: `lib/motion.ts` → `staggerContainer`, `fadeInUp`
- Requisito: `FR4` do PRD
