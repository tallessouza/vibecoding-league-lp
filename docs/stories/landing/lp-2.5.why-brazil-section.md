# Story LP-2.5: Why Brazil Section — Por que o Brasil é o Lugar Certo

## Status

InProgress

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing"]
```

## Story

**As a** visitante da landing page,
**I want** entender por que o Brasil é o mercado ideal para o Vibecoding Competitivo,
**so that** veja a oportunidade local e me sinta parte de um movimento brasileiro relevante.

## Acceptance Criteria

1. Seção com `id="por-que-brasil"` e título "Por que o Brasil?"
2. 3 argumentos principais exibidos com dados concretos:
   - **CazéTV**: 50M de espectadores, maior canal de streaming do Brasil
   - **LOUD & FURIA**: times de esports com alcance global, base de fãs de milhões
   - **Kings League BR**: formato chegando ao Brasil com Kaká e Neymar como embaixadores
3. Cada argumento tem: título, dado em destaque, descrição de 2-3 linhas
4. Bandeira brasileira ou elemento visual alusivo ao Brasil no design
5. Subtítulo: "O maior mercado de esports da América Latina. Pronto para o próximo esporte digital."
6. Layout responsivo com elementos empilhados em mobile

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [x] Criar componente `WhyBrazilSection` em `components/sections/WhyBrazilSection.tsx` (AC: 1, 5, 6)
  - [x] Título, subtítulo
  - [x] Grid responsivo
- [x] Criar componente `ArgumentCard` em `components/ui/ArgumentCard.tsx` (AC: 2, 3)
  - [x] Props: `title`, `highlight`, `description`
  - [x] Número/dado em destaque grande
  - [x] Descrição em `text-body`
- [x] Definir dados dos argumentos (AC: 2)
  ```typescript
  const arguments = [
    {
      title: "CazéTV",
      highlight: "50M espectadores",
      description: "O maior canal de streaming esportivo do Brasil. Provou que formatos alternativos têm audiência massiva no país.",
    },
    {
      title: "LOUD & FURIA",
      highlight: "Base global de fãs",
      description: "Times brasileiros de esports com relevância internacional. Comunidade engajada e habituada a acompanhar competições de tech.",
    },
    {
      title: "Kings League BR",
      highlight: "Kaká & Neymar",
      description: "O formato que revolucionou o futebol casual chega ao Brasil com embaixadores de classe mundial — e o playbook já está provado.",
    },
  ];
  ```
- [x] Adicionar elemento visual Brasil (AC: 4)
  - [x] Bandeira brasileira estilizada (SVG inline ou emoji 🇧🇷) no header da seção
  - [x] Cores sutis verde/amarelo no accent sem comprometer o design system AIOX
- [x] Integrar em `app/page.tsx`

## Dev Notes

### Tom da Seção

Esta seção deve criar senso de oportunidade e pertencimento. Tom aspiracional e local — "somos o próximo grande mercado de esports".

### Dados de Contexto

Fonte: análise de mercado do projeto (JOU-9):
- CazéTV transmitiu Copa do Mundo e eventos da Kings League com 50M+ espectadores únicos
- LOUD e FURIA estão entre os 10 maiores times de esports do mundo
- Kings League anunciou expansão para Brasil com Gerard Piqué, Kaká e Neymar

## Dev Agent Record

### File List
- `src/components/sections/WhyBrazilSection.tsx` — novo
- `src/components/ui/ArgumentCard.tsx` — novo
- `src/app/page.tsx` — modificado (integração WhyBrazilSection)
- `docs/stories/landing/lp-2.5.why-brazil-section.md` — modificado

### Completion Notes
- Todos os ACs implementados. ArgumentCard reutilizável com props tipadas. Layout grid responsivo 1→2→3 colunas. Emoji 🇧🇷 como elemento visual Brasil no header. Accent color do AIOX (aiox-accent) usado no highlight sem customizar tokens.

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
| 2026-03-29 | 1.1 | Implementação completa: WhyBrazilSection + ArgumentCard + integração page.tsx | Dex (@dev) |
