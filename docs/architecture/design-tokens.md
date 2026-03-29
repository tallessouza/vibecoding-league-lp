# Design Tokens — Integração AIOX Design System

> **Fonte:** `docs/fullstack-architecture.md` §3
> **Camada:** Styling

## Estratégia de Tokens

Os tokens do AIOX Design System são consumidos via **CSS Custom Properties** (variáveis CSS nativas), sincronizadas com o Tailwind config.

**Fluxo de importação:**
```
brand.aioxsquad.ai/brandbook/token-export
    ↓ (export CSS)
styles/aiox-tokens.css
    ↓ (import em globals.css)
app/globals.css
    ↓ (mapeamento em tailwind.config.ts)
Tailwind utility classes
```

## `styles/aiox-tokens.css`

```css
:root {
  /* COLOR TOKENS */
  --color-brand-primary: #D1FF00;       /* Lime neon — accent primário */
  --color-brand-secondary: #0099FF;     /* Azul info — accent secundário */
  --color-surface-base: #050505;        /* Background near-black */
  --color-surface-elevated: #12121A;    /* Cards */
  --color-surface-overlay: #1A1A2E;     /* Seções alternadas */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A0B0;
  --color-text-accent: #D1FF00;

  /* TYPOGRAPHY */
  --font-display: 'AIOX Display', 'Space Grotesk', sans-serif;
  --font-body: 'AIOX Body', 'Inter', sans-serif;
  --font-mono: 'AIOX Mono', 'JetBrains Mono', monospace;
  --font-size-hero: clamp(3rem, 8vw, 7rem);
  --font-size-h1: clamp(2rem, 5vw, 4rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.5rem);

  /* SPACING */
  --space-section: clamp(5rem, 10vw, 10rem);
  --space-container: clamp(1.5rem, 5vw, 8rem);

  /* MOTION TOKENS */
  --motion-duration-fast: 150ms;
  --motion-duration-base: 300ms;
  --motion-duration-slow: 600ms;
  --motion-duration-cinematic: 1200ms;
  --motion-ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --motion-ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
  --motion-ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* SURFACES */
  --surface-glass: rgba(255,255,255,0.04);
  --border-radius-card: 16px;
  --border-radius-button: 8px;
}
```

## `tailwind.config.ts` — Mapeamento de Tokens

```typescript
theme: {
  extend: {
    colors: {
      brand: { primary: 'var(--color-brand-primary)', secondary: 'var(--color-brand-secondary)' },
      surface: { base: 'var(--color-surface-base)', elevated: 'var(--color-surface-elevated)' },
      text: { primary: 'var(--color-text-primary)', accent: 'var(--color-text-accent)' },
    },
    fontFamily: {
      display: ['var(--font-display)'],
      body: ['var(--font-body)'],
      mono: ['var(--font-mono)'],
    },
    spacing: { section: 'var(--space-section)', container: 'var(--space-container)' },
  },
}
```
