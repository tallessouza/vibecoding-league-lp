# Story DS-ADAPT-2.2: Seções LP Ausentes — Testimonials, HowItWorks e Pricing/FAQ

## Status

Ready for Review

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing"]
```

## Story

**As a** visitante da landing page,
**I want** ver as seções de prova social (Testimonials), como funciona (HowItWorks) e preços/FAQ,
**so that** a landing page transmita credibilidade, esclareça o produto e converta visitantes em inscritos.

## Acceptance Criteria

1. **TestimonialsSection** implementada com hairline-grid pattern, destaque de card com borda neon, foto/avatar e citação
2. **HowItWorksSection** implementada com staircase layout, progress bar visual com 48 ticks, e steps numerados
3. **PricingSection** implementada com grid de 2-3 planos, toggle mensal/anual, e destaque no plano recomendado
4. **FAQSection** implementada com accordion, badge numérico lime por item, e no mínimo 6 perguntas/respostas
5. Todas as seções respeitam o padrão de alternância de cor (dark/light) definido no brandbook
6. Layout responsivo: todas as seções funcionam em mobile (stack vertical) e desktop (grid/row)
7. Testimonials tem no mínimo 3 depoimentos com nome, cargo/contexto, e texto de citação
8. FAQ accordion tem animação suave de abertura/fechamento

## Scope

**IN:**
- Implementar `TestimonialsSection`, `HowItWorksSection`, `PricingSection`, `FAQSection`
- Integrar todas em `app/page.tsx` na posição correta
- Conteúdo placeholder realista (pode ser baseado no contexto do projeto)

**OUT:**
- WhoWeAre e PainPoints (coberto em DS-ADAPT-1.3)
- ROI Calculator (baixa prioridade, escopo futuro)
- Articles/Blog grid (baixa prioridade, escopo futuro)
- Team cards (baixa prioridade, escopo futuro)
- Contact/Form section (escopo futuro)

## Dependencies

- Findings de Uma em [JOU-38](/JOU/issues/JOU-38) — documento `comparison-report` seção 4
- [DS-ADAPT-1.1](/JOU/issues/) — TASA Orbiter para headings
- [DS-ADAPT-1.2](/JOU/issues/) — tokens neon para destaques
- [DS-ADAPT-1.3](/JOU/issues/) — padrão de alternância de cor
- `app/page.tsx` — integração das novas seções

## Dev Notes

### Posicionamento em page.tsx (ordem após DS-ADAPT-1.3)

```
HeroSection
StatsSection
WhoWeAreSection         ← (DS-ADAPT-1.3) light
FormatSection
PainPointsSection       ← (DS-ADAPT-1.3) light
HowItWorksSection       ← (esta story) dark
WhyNowSection
MonetizationSection
TestimonialsSection     ← (esta story) light
PricingSection          ← (esta story) dark
FAQSection              ← (esta story) light
WaitlistSection
```

### TestimonialsSection — Hairline Grid

```tsx
// Pattern: hairline-grid de fundo, cards em grid
<section className="bg-[var(--bb-cream)] py-24" id="testimonials">
  <div className="hairline-grid">
    <div className="grid md:grid-cols-3 gap-px">
      {testimonials.map(t => (
        <TestimonialCard key={t.id} {...t} highlight={t.featured} />
      ))}
    </div>
  </div>
</section>
```

O card highlighted tem `border: 1px solid var(--neon)` e `box-shadow: var(--neon-glow-soft)`.

### HowItWorksSection — Staircase + Progress Bar 48 ticks

```tsx
// Progress bar com 48 divisões visuais (ticks)
<div className="progress-48-ticks">
  {Array.from({length: 48}).map((_, i) => (
    <div key={i} className={`tick ${i < activeStep * 12 ? 'active' : ''}`} />
  ))}
</div>
```

Steps: 1. Inscreva-se → 2. Forme sua equipe → 3. Receba o briefing → 4. Desenvolva em 48h → 5. Apresente e concorra

### PricingSection — Toggle Mensal/Anual

```tsx
const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
// Planos: Free | Pro | Team
// Toggle com 20% desconto anual
```

### FAQSection — Accordion

```tsx
// Badge numérico lime por item
<button className="flex items-center gap-3">
  <span className="bg-[var(--bb-lime)] text-[var(--bb-dark)]
                   rounded-full w-6 h-6 text-xs font-bold flex items-center justify-center">
    {index + 1}
  </span>
  <span>{question}</span>
</button>
```

### Conteúdo sugerido

Usar contexto do projeto — vibecoding competitivo, hackathons, prêmios AWS. Perguntas FAQ: o que é vibecoding?, como funcionam as competições?, requisitos para participar?, etc.

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Validação de qualidade usará processo de revisão manual.

## Tasks / Subtasks

- [x] Criar `TestimonialsSection.tsx` com hairline-grid e card highlight neon (AC: 1, 7)
  - [x] Grid responsivo 1-col mobile, 2-col tablet, 4-col desktop
  - [x] Card destacado com borda `--neon` e neon-glow-soft
  - [x] 4 depoimentos com nome, cargo, citação
- [x] Criar `HowItWorksSection.tsx` com staircase e progress bar 48 ticks (AC: 2)
  - [x] 5 steps com número e descrição
  - [x] Progress bar dividida em 48 ticks visuais (12 ativos)
  - [x] Staircase layout (margem crescente por índice)
- [x] Criar `PricingSection.tsx` com toggle mensal/anual (AC: 3)
  - [x] 3 planos: Free, Pro, Team
  - [x] Toggle com useState (mensal/anual, -20% annual)
  - [x] Plano Pro destacado com borda neon
- [x] Criar `FAQSection.tsx` com accordion (AC: 4, 8)
  - [x] 7 perguntas/respostas (mínimo 6)
  - [x] Badge numérico lime por item
  - [x] Animação smooth com AnimatePresence (framer-motion)
- [x] Garantir padrão de alternância de cor correto (AC: 5)
- [x] Testar responsividade mobile em todas as seções (AC: 6)
- [x] Integrar todas as seções em `app/page.tsx` na posição correta (AC: 1-4)

## Dev Agent Record

### File List
- `src/components/sections/TestimonialsSection.tsx` — novo, hairline-grid, 4 depoimentos, card neon destacado
- `src/components/sections/HowItWorksSection.tsx` — novo, 5 steps staircase, 48-tick progress bar
- `src/components/sections/PricingSection.tsx` — novo, 3 planos, toggle mensal/anual, plan Pro neon
- `src/components/sections/FAQSection.tsx` — novo, 7 FAQs, accordion animado, badges lime
- `src/app/page.tsx` — 4 novas seções integradas na posição correta

### Agent Model Used
claude-sonnet-4-6

## QA Results

**Verdict: PASS**
**Date:** 2026-03-29
**Reviewer:** Quinn (@qa)

### Acceptance Criteria Verification

| AC | Status | Observação |
|----|--------|------------|
| 1. TestimonialsSection — hairline-grid, neon card, avatar, citação | ✅ PASS | hairline-grid via `gap-px` + bg, borda `var(--neon)` + `var(--lime-glow-soft)` no card featured. Avatar usa inicial do nome (placeholder aceitável). |
| 2. HowItWorksSection — staircase, progress bar 48 ticks, steps numerados | ✅ PASS | 5 steps com `marginLeft: ${index * 1.5}rem`, 48 ticks (12 ativos), overflow-hidden no section. |
| 3. PricingSection — 3 planos, toggle mensal/anual, destaque Pro | ✅ PASS | Free/Pro/Team, useState billing, badge "Recomendado" + borda neon no Pro. |
| 4. FAQSection — accordion, badge lime, mínimo 6 perguntas | ✅ PASS | 7 FAQs, badge numérico lime (cor muda ao abrir), AnimatePresence. |
| 5. Alternância de cor dark/light | ✅ PASS | HowItWorks(dark) → Testimonials(cream) → Pricing(surface) → FAQ(cream). |
| 6. Responsivo mobile/desktop | ✅ PASS | Testimonials: 1→2→4 cols. Pricing: 1→3 cols. FAQ/HowItWorks: padding responsivo. |
| 7. Mínimo 3 depoimentos com nome, cargo, citação | ✅ PASS | 4 depoimentos com name, role, quote. |
| 8. FAQ accordion com animação suave | ✅ PASS | AnimatePresence, `duration: 0.25, ease: "easeInOut"`. |

### Issues

| Severity | Categoria | Descrição |
|----------|-----------|-----------|
| LOW | Visual | TestimonialsSection usa iniciais ao invés de fotos/avatares reais (placeholder aceitável para landing page). |
| LOW | Responsivo | Staircase indent acumulado: step 5 tem 6rem de margem — pode ficar apertado em telas muito pequenas (< 375px). |
| LOW | Pricing | Desconto anual do plano Team: ~23% (R$99 vs R$129), não exatamente 20%. O badge "-20%" no toggle comunica o desconto geral, não por plano. |

### Build Status

✅ `npm run build` passou sem erros. Bundle: 52.4 kB (página principal).

### Gate Decision

**PASS** — Todos os 8 ACs satisfeitos. Issues são LOW severity e não bloqueiam. Implementação aprovada para push via @devops.

---

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada a partir dos findings de Uma em JOU-38 | River (@sm) |
| 2026-03-29 | 1.1 | GO — 7/10: ACs detalhados (hairline-grid, 48-ticks, accordion). Nota: alta complexidade (4 seções grandes) — considerar split se @dev encontrar dificuldades. Ausentes: estimativa, riscos (conteúdo pricing/testimonials TBD), DoD | Pax (@po) |
| 2026-03-29 | 1.2 | Implementação completa: TestimonialsSection, HowItWorksSection, PricingSection, FAQSection criados e integrados | Dex (@dev) |
| 2026-03-29 | 1.3 | QA Gate: PASS — todos os 8 ACs verificados, build limpo, 3 observações LOW. | Quinn (@qa) |
