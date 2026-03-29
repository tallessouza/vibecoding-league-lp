# Story DS-ADAPT-1.3: Seções de Fundo Claro — Padrão de Alternância Dark/Light

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
**I want** ver a alternância visual entre seções escuras e claras conforme o brandbook AIOX,
**so that** a página tenha ritmo visual, evite monotonia e reflita fielmente a identidade da marca.

## Acceptance Criteria

1. A seção **WhoWeAre** é implementada com fundo claro (`--bb-cream` ou `--color-bg-void`), incluindo cópia institucional sobre a equipe/missão
2. A seção **PainPoints** é implementada com dual ticker (duas faixas marquee em direções opostas) e headline central
3. O padrão de alternância dark/light da landing page segue: `dark → light (WhoWeAre) → dark → light → dark → light → cream`
4. Seções claras usam texto escuro (mínimo `#050505`) para garantir contraste adequado (WCAG AA)
5. Transições entre seções claras e escuras têm a separação visual adequada (sem bordas abruptas)
6. Layout responsivo mantido: ambas as seções funcionam em mobile e desktop
7. Dual ticker do PainPoints tem direções opostas (`animate-ticker` + `animate-ticker-reverse`)

## Scope

**IN:**
- Implementar componente `WhoWeAreSection` com fundo `--bb-cream`
- Implementar componente `PainPointsSection` com dual ticker
- Definir `animate-ticker-reverse` no Tailwind/CSS se ausente
- Integrar ambas as seções em `app/page.tsx` na posição correta
- Garantir contraste de texto em seções claras

**OUT:**
- Testimonials section (coberto em DS-ADAPT-2.2)
- HowItWorks section (coberto em DS-ADAPT-2.2)
- Pricing, FAQ, Contact sections (escopo futuro)

## Dependencies

- Findings de Uma em [JOU-38](/JOU/issues/JOU-38) — documento `comparison-report` seção 4
- [DS-ADAPT-1.1](/JOU/issues/) — para TASA Orbiter nos headings das novas seções
- [DS-ADAPT-1.2](/JOU/issues/) — para tokens `--bb-cream` e `--color-text-base`
- `app/page.tsx` — integração das novas seções
- `app/globals.css` — animation `animate-ticker-reverse`

## Dev Notes

### Padrão de alternância atual vs brandbook

| Posição | Brandbook | Implementação atual |
|---------|-----------|---------------------|
| 1 Hero | dark | dark ✅ |
| 2 Stats | dark | dark ✅ |
| 3 WhoWeAre | **light** | ❌ ausente |
| 4 Format | dark | surface ⚠️ |
| 5 PainPoints | **light** | ❌ ausente |
| 6 HowItWorks | dark | ❌ ausente |
| 7 WhyNow | **light** | dark ⚠️ |
| 8 Monetization | dark | surface ⚠️ |
| 9 Testimonials | **light** | ❌ ausente |
| 10 Pricing | dark | ❌ ausente |
| 11 Waitlist | **cream** | surface ⚠️ |

### Seção WhoWeAre

```tsx
// Fundo claro com texto escuro
<section className="bg-[var(--bb-cream)] py-24" id="who-we-are">
  <div className="container mx-auto px-6">
    <SectionHeader label="Quem Somos" title="..." className="text-[var(--bb-dark)]" />
    {/* Conteúdo institucional */}
  </div>
</section>
```

### Seção PainPoints — Dual Ticker

```tsx
// Dois tickers em direções opostas
<section className="bg-[var(--bb-surface)] py-16 overflow-hidden" id="pain-points">
  <h2 className="text-center mb-8">...</h2>
  <div className="ticker-track">/* direção normal */</div>
  <div className="ticker-track-reverse">/* direção reversa */</div>
</section>
```

### CSS para ticker reverso (adicionar em globals.css)

```css
@keyframes ticker-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
.animate-ticker-reverse {
  animation: ticker-reverse 30s linear infinite;
}
```

### Conteúdo de WhoWeAre

Usar contexto do projeto: equipe de vibecoding competitivo, missão de democratizar competições de IA para desenvolvedores brasileiros. Basear no PRD e no contexto existente das outras seções.

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Validação de qualidade usará processo de revisão manual.

## Tasks / Subtasks

- [x] Criar `components/sections/WhoWeAreSection.tsx` com fundo `--bb-cream` (AC: 1)
  - [x] Cópia institucional (missão, equipe)
  - [x] Texto escuro (`--bb-dark`) para contraste
  - [x] Responsivo mobile/desktop
- [x] Criar `components/sections/PainPointsSection.tsx` com dual ticker (AC: 2, 7)
  - [x] Headline central
  - [x] Ticker normal (items de dor do mercado)
  - [x] Ticker reverso com itens complementares (soluções)
- [x] Adicionar `animate-ticker-reverse` em `app/globals.css` (AC: 7)
- [x] Verificar contraste de texto nas seções claras (WCAG AA) (AC: 4)
- [x] Integrar WhoWeAreSection e PainPointsSection em `app/page.tsx` (AC: 3)
  - [x] WhoWeAre após StatsSection, PainPoints após FormatSection
- [x] Verificar transições visuais entre seções claras/escuras (AC: 5)
- [x] Testar responsividade mobile (AC: 6)

## Dev Agent Record

### File List
- `src/components/sections/WhoWeAreSection.tsx` — novo componente, fundo bb-cream, texto bb-dark
- `src/components/sections/PainPointsSection.tsx` — novo componente, dual ticker (normal + reverso)
- `src/app/globals.css` — @keyframes ticker-reverse + .ticker-track-reverse
- `src/app/page.tsx` — WhoWeAreSection (pós-Stats) e PainPointsSection (pós-Format) integrados

### Agent Model Used
claude-sonnet-4-6

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada a partir dos findings de Uma em JOU-38 | River (@sm) |
| 2026-03-29 | 1.1 | GO — 7/10: alternância dark/light bem especificada, WCAG AA explícito. Ausentes: complexidade, riscos (copy WhoWeAre ainda indefinido), DoD — não bloqueantes | Pax (@po) |
| 2026-03-29 | 1.2 | Implementação: WhoWeAreSection (light/cream), PainPointsSection (dual ticker), ticker-reverse CSS, integrado em page.tsx | Dex (@dev) |
