# Story DS-ADAPT-1.1: Tipografia — Carregar TASA Orbiter e Corrigir Font Tokens

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
**I want** ver os títulos e headlines renderizados com a fonte display correta (TASA Orbiter),
**so that** a identidade visual do brandbook AIOX seja fielmente aplicada.

## Acceptance Criteria

1. A fonte **TASA Orbiter** (peso 800) está corretamente importada/carregada no projeto
2. `layout.tsx` inclui o carregamento de TASA Orbiter (via `@font-face` local, CDN, ou `next/font`)
3. A variável CSS `--font-bb-display` aponta para `"TASA Orbiter", "Bebas Neue", serif`
4. O `tailwind.config.ts` tem a família `display` mapeada para `--font-bb-display`
5. Todos os headings H1 e elementos com classes `.text-display` renderizam visualmente em TASA Orbiter (peso 800)
6. `letter-spacing: -0.03em` aplicado como padrão para elementos display
7. As variáveis de font-weight estão definidas: `--fw-thin: 100` até `--fw-black: 900`
8. Geist (sans) e Geist Mono (mono) continuam funcionando sem regressão

## Scope

**IN:**
- Importar/hospedar TASA Orbiter no projeto
- Atualizar `layout.tsx` para carregar a fonte
- Definir `--fw-*` (font-weight tokens) no CSS global
- Verificar que `--font-bb-display`, `--font-bb-sans`, `--font-bb-mono` estão corretos no CSS
- Mapear `fontFamily.display` no `tailwind.config.ts`

**OUT:**
- Redesenho de componentes (apenas fix da fonte)
- Tokens semânticos de cor (coberto em DS-ADAPT-1.2)
- Tokens de espaçamento (coberto em DS-ADAPT-2.1)

## Dependencies

- Findings de Uma em [JOU-38](/JOU/issues/JOU-38) — documento `comparison-report`
- `app/layout.tsx` — arquivo principal a ser modificado
- `app/globals.css` — CSS global com variáveis
- `tailwind.config.ts` — configuração Tailwind

## Dev Notes

### Problema identificado por Uma

`layout.tsx` carrega apenas `Geist` e `Geist Mono` via `next/font/google`. A variável `--font-bb-display` aponta para `"TASA Orbiter"` mas a fonte nunca é importada. **Resultado visual:** todos os headings H1/Display renderizam em Geist, não TASA Orbiter.

### Opções de carregamento da fonte

**Opção A — @font-face local (recomendada):**
```css
@font-face {
  font-family: 'TASA Orbiter';
  src: url('/fonts/TASAOrbiterDisplay-Bold.woff2') format('woff2');
  font-weight: 800;
  font-display: swap;
}
```
Baixar arquivo em: https://fonts.google.com ou verificar licença em https://brand.aioxsquad.ai

**Opção B — Google Fonts (se disponível):**
```typescript
import { TASA_Orbiter } from 'next/font/google'; // verificar disponibilidade
```

### Font-weight tokens a adicionar em globals.css

```css
:root {
  --fw-thin: 100;
  --fw-extralight: 200;
  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
  --fw-extrabold: 800;
  --fw-black: 900;
}
```

### Tailwind config

```typescript
fontFamily: {
  display: ['var(--font-bb-display)', 'serif'],
  sans: ['var(--font-bb-sans)', 'sans-serif'],
  mono: ['var(--font-bb-mono)', 'monospace'],
}
```

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Validação de qualidade usará processo de revisão manual.

## Tasks / Subtasks

- [x] Investigar disponibilidade/licença de TASA Orbiter e escolher método de carregamento (AC: 1)
- [x] Hospedar arquivo de fonte (local `public/fonts/` ou CDN) (AC: 1, 2) — diretório criado, font file pendente download manual
- [x] Atualizar `app/layout.tsx` para carregar TASA Orbiter (AC: 2) — via @font-face em globals.css importado no layout
- [x] Adicionar `--fw-thin` até `--fw-black` em `app/globals.css` (AC: 7)
- [x] Verificar e corrigir `--font-bb-display` em globals.css (AC: 3) — já estava correto
- [x] Atualizar `tailwind.config.ts` com `fontFamily.display` (AC: 4)
- [x] Aplicar `letter-spacing: -0.03em` no CSS de elementos display (AC: 6)
- [ ] Verificar visualmente que H1 renderiza em TASA Orbiter (AC: 5) — requer font binary em public/fonts/
- [x] Garantir sem regressão em Geist/Geist Mono (AC: 8)

## File List

- `src/app/globals.css` — @font-face TASA Orbiter, --fw-* tokens, .text-display atualizado
- `tailwind.config.ts` — fontFamily.display adicionado
- `public/fonts/README.md` — instruções de download do arquivo de fonte

## Dev Agent Record

### Agent Model Used
claude-sonnet-4-6

### Completion Notes
- @font-face declarado em globals.css apontando para /fonts/TASAOrbiterDisplay-ExtraBold.woff2
- Arquivo de fonte binário não incluído (requer download manual conforme README em public/fonts/)
- AC#5 (verificação visual) pendente até font file estar disponível
- Todos os demais ACs implementados

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada a partir dos findings de Uma em JOU-38 | River (@sm) |
| 2026-03-29 | 1.1 | GO — 7/10: título claro, ACs testáveis, scope/deps corretos. Ausentes: estimativa de complexidade, seção de riscos (licença TASA Orbiter), DoD explícito — não bloqueantes | Pax (@po) |
| 2026-03-29 | 1.2 | InProgress — @font-face, --fw-* tokens, fontFamily.display, letter-spacing -0.03em implementados | Dex (@dev) |
