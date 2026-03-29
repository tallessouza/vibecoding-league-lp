# Story LP-2.4: Monetization Section — Modelo de Receita

## Status

Draft

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing"]
```

## Story

**As a** investidor ou parceiro potencial visitando a landing page,
**I want** entender o modelo de monetização do Vibecoding Competitivo,
**so that** avalie a viabilidade financeira do projeto e considere investir ou patrocinar.

## Acceptance Criteria

1. Seção com `id="monetizacao"` e título "Um Modelo de Negócio Comprovado"
2. 3 pilares de monetização exibidos em cards: **Patrocínios** (65-70% da receita), **Apostas/Previsões** ($2.8B/ano mercado), **Streaming Descentralizado** (revenue share com criadores)
3. Cada pilar tem: ícone, título, número de destaque, descrição curta
4. Barra de progresso ou gráfico visual indicando a proporção da receita (patrocínios como maior)
5. Subtítulo da seção: "Três fontes de receita. Uma oportunidade de escala."
6. Layout responsivo: cards empilhados em mobile, lado a lado em desktop

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [ ] Criar componente `MonetizationSection` em `components/sections/MonetizationSection.tsx` (AC: 1, 5, 6)
  - [ ] Título e subtítulo
  - [ ] Grid `grid-cols-1 md:grid-cols-3`
- [ ] Criar componente `MonetizationCard` em `components/ui/MonetizationCard.tsx` (AC: 2, 3)
  - [ ] Props: `icon`, `title`, `highlight`, `description`, `percentage`
  - [ ] Ícone SVG ou emoji
  - [ ] Número de destaque em tamanho grande
  - [ ] Descrição em `text-body`
- [ ] Implementar barra de proporção (AC: 4)
  - [ ] Barra visual estilizada mostrando 65-70% para patrocínios
  - [ ] CSS puro (sem biblioteca de gráficos externa) para manter bundle leve
- [ ] Definir dados dos pilares
  ```typescript
  const pillars = [
    {
      icon: "🏆",
      title: "Patrocínios",
      highlight: "65-70%",
      description: "Da receita vem de marcas de tech. Modelo validado pela Kings League com grandes parceiros globais.",
      percentage: 67,
    },
    {
      icon: "🎲",
      title: "Apostas & Previsões",
      highlight: "$2.8B/ano",
      description: "Mercado global de apostas em esports. Integração de predictions com revenue share.",
      percentage: 20,
    },
    {
      icon: "📡",
      title: "Streaming Descentralizado",
      highlight: "Revenue Share",
      description: "Criadores de conteúdo ganham por retransmitir partidas. Alinhamento de incentivos com a comunidade.",
      percentage: 13,
    },
  ];
  ```
- [ ] Integrar em `app/page.tsx`

## Dev Notes

### Fonte dos Dados

Os dados de monetização vêm do contexto do projeto (JOU-9 / análise de mercado):
- Kings League: referência de modelo de patrocínio em esportes alternativos
- Power Slap: $50M/ano com modelo social-first (referência de escala)
- Mercado de apostas em esports: $2.8B/ano (estimativa global 2025-2026)

### Abordagem Visual

Esta seção deve ter tom mais sério/profissional para atrair investidores. Usar paleta mais sóbria:
- Fundo levemente diferente (`--aiox-surface-variant`) para destacar a seção
- Números em destaque com cor `--aiox-primary`
- Ícones minimalistas ou emojis neutros

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
