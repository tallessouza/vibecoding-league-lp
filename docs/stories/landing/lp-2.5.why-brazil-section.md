# Story LP-2.5: Why Brazil Section — Por que o Brasil é o Lugar Certo

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

- [ ] Criar componente `WhyBrazilSection` em `components/sections/WhyBrazilSection.tsx` (AC: 1, 5, 6)
  - [ ] Título, subtítulo
  - [ ] Grid responsivo
- [ ] Criar componente `ArgumentCard` em `components/ui/ArgumentCard.tsx` (AC: 2, 3)
  - [ ] Props: `title`, `highlight`, `description`
  - [ ] Número/dado em destaque grande
  - [ ] Descrição em `text-body`
- [ ] Definir dados dos argumentos (AC: 2)
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
- [ ] Adicionar elemento visual Brasil (AC: 4)
  - [ ] Bandeira brasileira estilizada (SVG inline ou emoji 🇧🇷) no header da seção
  - [ ] Cores sutis verde/amarelo no accent sem comprometer o design system AIOX
- [ ] Integrar em `app/page.tsx`

## Dev Notes

### Tom da Seção

Esta seção deve criar senso de oportunidade e pertencimento. Tom aspiracional e local — "somos o próximo grande mercado de esports".

### Dados de Contexto

Fonte: análise de mercado do projeto (JOU-9):
- CazéTV transmitiu Copa do Mundo e eventos da Kings League com 50M+ espectadores únicos
- LOUD e FURIA estão entre os 10 maiores times de esports do mundo
- Kings League anunciou expansão para Brasil com Gerard Piqué, Kaká e Neymar

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
