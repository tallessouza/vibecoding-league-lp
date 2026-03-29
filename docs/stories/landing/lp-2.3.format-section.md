# Story LP-2.3: Format Section — 3 Cards dos Rounds

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
**I want** entender como funciona o formato de competição,
**so that** saiba o que esperar como competidor ou espectador e me sinta atraído a participar.

## Acceptance Criteria

1. Seção com `id="formato"` e título "Como Funciona a Competição"
2. 3 cards descrevendo os rounds: **Speed Build** (15 min), **Creative Build** (35 min), **Mystery Twist** (15 min)
3. Cada card exibe: nome do round, duração, descrição do objetivo, badge de status (ex: "Round 1", "Round 2", "Round 3")
4. Cards têm visual diferenciado por round: cores/bordas distintas usando tokens AIOX
5. Layout: 1 coluna em mobile, 3 colunas em desktop
6. Subtítulo da seção: "3 rounds. 65 minutos. Um vencedor."

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [ ] Criar componente `FormatSection` em `components/sections/FormatSection.tsx` (AC: 1, 5, 6)
  - [ ] Título e subtítulo da seção
  - [ ] Grid `grid-cols-1 lg:grid-cols-3`
- [ ] Criar componente `RoundCard` em `components/ui/RoundCard.tsx` (AC: 2, 3, 4)
  - [ ] Props: `roundNumber`, `name`, `duration`, `description`, `accentColor`
  - [ ] Badge "Round N" no topo
  - [ ] Ícone representativo do round (timer/relâmpago/interrogação)
  - [ ] Border e accent color distintos por round
- [ ] Definir dados dos rounds (AC: 2)
  ```typescript
  const rounds = [
    {
      roundNumber: 1,
      name: "Speed Build",
      duration: "15 min",
      description: "Construa o máximo possível no menor tempo. Pontuação por velocidade de deploy e qualidade.",
      accentColor: "aiox-accent-yellow",
    },
    {
      roundNumber: 2,
      name: "Creative Build",
      duration: "35 min",
      description: "Criatividade em foco. Juízes + audiência avaliam UI/UX, funcionalidade e inovação.",
      accentColor: "aiox-accent-purple",
    },
    {
      roundNumber: 3,
      name: "Mystery Twist",
      duration: "15 min",
      description: "Na metade do tempo, um requisito surpresa é revelado. Adapte sua solução em tempo real.",
      accentColor: "aiox-accent-red",
    },
  ];
  ```
- [ ] Integrar em `app/page.tsx`
  - [ ] Importar e renderizar `<FormatSection />` após `<StatsSection />`

## Dev Notes

### Referência dos Rounds

Os dados dos rounds vêm do PRD da plataforma VibeCoding League:
- **Speed Build:** Duração configurável, avalia velocidade de deploy + qualidade + votos da audiência
- **Creative Build:** Avaliado por painel de juízes + audiência em criatividade, UI/UX e funcionalidade
- **Mystery Twist:** Requisito surpresa revelado na metade do tempo, forçando adaptação em tempo real

Para a landing page, usamos 15min/35min/15min como duração indicativa (total: 65 min por partida).

### Tokens AIOX

Usar tokens de cor semânticos do `/brandbook/color-tokens` para diferenciar os rounds:
- Speed Build: amarelo/dourado (velocidade, energia)
- Creative Build: roxo/violeta (criatividade, profundidade)
- Mystery Twist: vermelho/coral (surpresa, tensão)

### Cards Design

Referência visual: `/brandbook/cards` no design system AIOX. Os cards devem ter:
- Fundo `--aiox-surface` com borda colorida na parte superior
- Sombra sutil com token `--aiox-shadow`

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
