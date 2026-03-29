# Fullstack Architecture — Vibecoding Competitivo Landing Page

> **Versão:** 1.0
> **Autor:** Aria (Architect Agent)
> **Issue:** [JOU-14](/JOU/issues/JOU-14)
> **Parent:** [JOU-9](/JOU/issues/JOU-9)
> **Data:** 2026-03-29

---

## 1. Visão Geral

Landing page estática de alta performance para apresentar a liga de **Vibecoding Competitivo** — o primeiro esporte digital nascido do playbook da Kings League focado em programadores que usam IA. Público-alvo triplo: investidores, competidores e fãs.

### Stack Definitiva

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Framework | Next.js 14 (App Router) | SSG nativo, RSC, metadata API, Image optimization |
| Styling | Tailwind CSS + CSS Variables | Integração direta com tokens AIOX |
| Animações | framer-motion 11 | Tokens de motion do AIOX, performance otimizada |
| Forms | react-hook-form + zod | CTA/Waitlist com validação tipada |
| Design System | AIOX DS (brand.aioxsquad.ai) | Tokens, componentes LP, motion system |
| Deploy | Vercel | Edge network, preview deploys, analytics |
| CI/CD | GitHub Actions + Vercel | Auto-deploy em push para main |

---

## 2. Estrutura de Diretórios (App Router)

```
vibecoding-league-lp/
├── app/
│   ├── layout.tsx              # Root layout com fonts, metadata global, providers
│   ├── page.tsx                # Homepage — composição das 6 sections
│   ├── globals.css             # Tokens AIOX → CSS variables + Tailwind base
│   └── opengraph-image.tsx     # OG image gerada dinamicamente (Next.js)
│
├── components/
│   ├── atoms/                  # Unidades indivisíveis do AIOX DS
│   │   ├── Button.tsx          # Variants: primary, secondary, ghost
│   │   ├── Badge.tsx           # Tags: "LIVE", "NOVO", "PRO"
│   │   ├── StatNumber.tsx      # Números animados (contadores)
│   │   ├── Chip.tsx            # Labels de formato/categoria
│   │   └── Logo.tsx            # Logotipo da liga SVG
│   │
│   ├── molecules/              # Composições reutilizáveis
│   │   ├── WaitlistForm.tsx    # react-hook-form + zod + submit
│   │   ├── RoundCard.tsx       # Card de cada round (Speed/Creative/Mystery)
│   │   ├── StatBlock.tsx       # Ícone + número + label
│   │   ├── TestimonialCard.tsx # Quote + avatar + nome
│   │   ├── NavBar.tsx          # Navigation sticky com scroll spy
│   │   └── SectionHeader.tsx   # Eyebrow + headline + subheadline
│   │
│   └── sections/               # Seções completas da landing page
│       ├── HeroSection.tsx     # Headline + CTA primário + video/loop bg
│       ├── StatsSection.tsx    # 4 métricas animadas (8 comp, prêmios, 14B, etc.)
│       ├── FormatSection.tsx   # 3 rounds com cards animados
│       ├── MonetizationSection.tsx # Oportunidade para investidores
│       ├── WhyBrazilSection.tsx    # CazéTV, Kings League BR, LOUD/FURIA
│       └── CtaSection.tsx      # Waitlist form + social proof
│
├── lib/
│   ├── tokens.ts               # Mapeamento tipado dos tokens AIOX
│   ├── motion.ts               # Variantes framer-motion padronizadas
│   ├── validations.ts          # Schemas zod para forms
│   └── analytics.ts            # Google Analytics 4 (gtag.js, conforme PRD Story 3.4) + Vercel Web Vitals
│
├── public/
│   ├── fonts/                  # AIOX typography (self-hosted)
│   ├── images/                 # Logos, backgrounds otimizados
│   └── videos/                 # Loop video hero (WebM + MP4 fallback)
│
├── styles/
│   └── aiox-tokens.css         # CSS variables exportadas do AIOX DS
│
├── docs/                       # (este diretório)
├── .github/
│   └── workflows/
│       ├── ci.yml              # Lint + typecheck + build
│       └── deploy-preview.yml  # Deploy de preview por PR
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Integração com AIOX Design System

### 3.1 Estratégia de Tokens

Os tokens do AIOX Design System são consumidos via **CSS Custom Properties** (variáveis CSS nativas), sincronizadas com o Tailwind config. Isso garante que alterações no DS upstream se propagam automaticamente.

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

### 3.2 `styles/aiox-tokens.css`

```css
/* Importado do AIOX DS token export */
:root {
  /* === COLOR TOKENS === */
  /* NOTA: Tokens finais definidos em docs/front-end-spec.md (Dark Cockpit Edition) */
  /* Usar --bb-lime (#D1FF00) como accent primário, conforme frontend-spec */
  --color-brand-primary: #D1FF00;       /* Lime neon — accent primário (frontend-spec) */
  --color-brand-secondary: #0099FF;     /* Azul info — accent secundário */
  --color-surface-base: #050505;        /* Background near-black (--bb-dark) */
  --color-surface-elevated: #12121A;    /* Cards */
  --color-surface-overlay: #1A1A2E;     /* Seções alternadas */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A0B0;
  --color-text-accent: #D1FF00;         /* Lime — alinhado com --bb-lime */
  --color-border-subtle: rgba(255,255,255,0.08);

  /* === TYPOGRAPHY === */
  --font-display: 'AIOX Display', 'Space Grotesk', sans-serif;
  --font-body: 'AIOX Body', 'Inter', sans-serif;
  --font-mono: 'AIOX Mono', 'JetBrains Mono', monospace;
  --font-size-hero: clamp(3rem, 8vw, 7rem);
  --font-size-h1: clamp(2rem, 5vw, 4rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.5rem);

  /* === SPACING === */
  --space-section: clamp(5rem, 10vw, 10rem);
  --space-container: clamp(1.5rem, 5vw, 8rem);

  /* === MOTION TOKENS === */
  --motion-duration-fast: 150ms;
  --motion-duration-base: 300ms;
  --motion-duration-slow: 600ms;
  --motion-duration-cinematic: 1200ms;
  --motion-ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --motion-ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
  --motion-ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

  /* === SURFACES === */
  --surface-glass: rgba(255,255,255,0.04);
  --surface-glow-primary: 0 0 80px rgba(255,59,59,0.15);
  --surface-glow-accent: 0 0 40px rgba(255,215,0,0.1);
  --border-radius-card: 16px;
  --border-radius-button: 8px;
}
```

### 3.3 `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
        },
        surface: {
          base: 'var(--color-surface-base)',
          elevated: 'var(--color-surface-elevated)',
          overlay: 'var(--color-surface-overlay)',
          glass: 'var(--surface-glass)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          accent: 'var(--color-text-accent)',
        },
        border: {
          subtle: 'var(--color-border-subtle)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      spacing: {
        section: 'var(--space-section)',
        container: 'var(--space-container)',
      },
      transitionDuration: {
        fast: 'var(--motion-duration-fast)',
        base: 'var(--motion-duration-base)',
        slow: 'var(--motion-duration-slow)',
      },
      transitionTimingFunction: {
        'ease-out-aiox': 'var(--motion-ease-out)',
        spring: 'var(--motion-ease-spring)',
      },
      borderRadius: {
        card: 'var(--border-radius-card)',
        button: 'var(--border-radius-button)',
      },
      boxShadow: {
        'glow-primary': 'var(--surface-glow-primary)',
        'glow-accent': 'var(--surface-glow-accent)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 4. Arquitetura de Componentes

### 4.1 Hierarquia e Responsabilidades

```
page.tsx (Server Component — orquestra layout)
  └── NavBar (Client — scroll listener)
  └── HeroSection (Server + Client motion)
  │     └── SectionHeader (atoms: headline, subheadline)
  │     └── Button (CTA primário)
  │     └── VideoLoop (Client — lazy loaded)
  │
  └── StatsSection (Client — counters animados)
  │     └── StatBlock × 4 (atoms: StatNumber + label)
  │
  └── FormatSection (Server + motion variants)
  │     └── SectionHeader
  │     └── RoundCard × 3 (Speed / Creative / Mystery)
  │
  └── MonetizationSection (Server)
  │     └── SectionHeader
  │     └── StatBlock × 3 (receita, mercado, TAM)
  │
  └── WhyBrazilSection (Server)
  │     └── SectionHeader
  │     └── StatBlock × 4 (CazéTV, LOUD/FURIA, apostas, Kings League BR)
  │
  └── CtaSection (Client — form interativo)
        └── SectionHeader
        └── WaitlistForm (react-hook-form)
        └── SocialProof counter
```

### 4.2 Política RSC (React Server Components)

| Componente | Tipo | Razão |
|-----------|------|-------|
| `page.tsx` | Server | Nenhuma interatividade necessária |
| `HeroSection` | Server + `'use client'` apenas em VideoLoop | Conteúdo estático + video lazy |
| `StatsSection` | `'use client'` | Counter animation com useInView |
| `FormatSection` | Server | Cards estáticos com CSS animations |
| `MonetizationSection` | Server | Conteúdo puro |
| `WhyBrazilSection` | Server | Conteúdo puro |
| `CtaSection` | `'use client'` | Form state + submit |
| `NavBar` | `'use client'` | scroll listener |

**Regra:** Apenas componentes com estado, eventos ou browser APIs usam `'use client'`. Maximize RSC para bundle menor.

---

## 5. Estratégia de Animações (framer-motion + AIOX Motion)

### 5.1 `lib/motion.ts` — Variantes Padrão

```typescript
import { Variants } from 'framer-motion'

// Mapeamento direto dos motion tokens AIOX
export const durations = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
  cinematic: 1.2,
}

export const eases = {
  easeOut: [0.0, 0.0, 0.2, 1],
  easeInOut: [0.4, 0.0, 0.2, 1],
  spring: [0.175, 0.885, 0.32, 1.275],
}

// Variante: entrada por baixo (padrão para seções)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.slow, ease: eases.easeOut },
  },
}

// Variante: stagger de filhos (listas, cards)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

// Variante: card hover lift
export const cardHover = {
  rest: { y: 0, boxShadow: 'var(--surface-glow-primary)' },
  hover: {
    y: -8,
    boxShadow: '0 0 120px rgba(255,59,59,0.3)',
    transition: { duration: durations.base, ease: eases.spring },
  },
}

// Variante: counter de números (StatsSection)
export const counterVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.base, ease: eases.spring },
  },
}

// Variante: hero text (entrada cinematográfica)
export const heroText: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: durations.cinematic, ease: eases.easeOut },
  },
}
```

### 5.2 Padrão de Uso com Viewport Trigger

```typescript
// Todas as animações trigadas via viewport (não ao montar)
// Evita animações disparadas acima da dobra durante SSG hydration

<motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={fadeInUp}>
      {/* conteúdo */}
    </motion.div>
  ))}
</motion.section>
```

### 5.3 Considerações de Performance

- `LazyMotion` com `domAnimation` feature pack (reduz bundle framer-motion em ~70%)
- `will-change: transform` apenas em elementos com animação contínua (ex: hero background)
- `prefers-reduced-motion` respeitado via `useReducedMotion()` hook
- Animações CSS puras para elementos decorativos (partículas, glows) — não bloqueia JS thread

---

## 6. Decisão SSG vs SSR

**Decisão: SSG puro (`output: 'export'` ou `generateStaticParams`)**

| Critério | SSG | SSR |
|---------|-----|-----|
| Performance (TTFB) | ✅ <50ms (edge CDN) | ⚠️ 100-300ms (server) |
| Core Web Vitals | ✅ LCP otimizado | ⚠️ Depende do server |
| Custo Vercel | ✅ Gratuito/mínimo | ⚠️ Serverless invocations |
| Necessidade de dados dinâmicos | ❌ Não existe | N/A |
| Waitlist form | ✅ API Route separada | N/A |

**Justificativa:** A landing page é 100% conteúdo estático. O único elemento dinâmico é o form de waitlist, que usa uma API Route isolada (`/api/waitlist`). SSG com revalidação por deploy é a escolha correta.

```typescript
// next.config.ts
const config: NextConfig = {
  output: 'export',          // HTML estático puro
  images: {
    unoptimized: false,      // Next Image optimization via Vercel
  },
  trailingSlash: true,
}
```

---

## 7. Performance — Core Web Vitals

### 7.1 Metas

| Métrica | Meta | Estratégia |
|--------|------|-----------|
| LCP | < 1.8s | Hero image/video como `priority`, fonts preloaded |
| FID/INP | < 100ms | Minimize JavaScript no critical path |
| CLS | < 0.05 | Dimensões explícitas em imagens e vídeo |
| TTFB | < 200ms | SSG + Vercel Edge CDN |
| Bundle JS | < 100KB (gzipped) | RSC + LazyMotion + dynamic imports |

### 7.2 Lazy Loading

```typescript
// Componentes pesados carregados sob demanda
const VideoLoop = dynamic(() => import('@/components/atoms/VideoLoop'), {
  ssr: false,                  // Não bloqueia SSG
  loading: () => <div className="bg-surface-overlay animate-pulse" />,
})

const WaitlistForm = dynamic(() => import('@/components/molecules/WaitlistForm'), {
  ssr: false,
  loading: () => <FormSkeleton />,
})
```

### 7.3 Otimização de Imagens

```typescript
// Uso padrão do Next Image
<Image
  src="/images/hero-bg.webp"
  alt="Vibecoding Arena"
  fill
  priority                     // LCP candidate — não lazy
  sizes="100vw"
  quality={85}
  placeholder="blur"
  blurDataURL={heroBlurDataURL} // gerado em build time
/>

// Imagens não-LCP: lazy (default do Next Image)
<Image
  src="/images/logo-loud.png"
  alt="LOUD"
  width={120}
  height={40}
  // sem priority = lazy loading automático
/>
```

### 7.4 Fonts Strategy

```typescript
// app/layout.tsx — Next Font com self-hosting automático
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',              // Fallback durante carregamento
  preload: true,
})

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: false,               // Carregado apenas quando necessário
})
```

---

## 8. SEO — Metadata, OG e Sitemap

### 8.1 Metadata API (Next.js 14)

```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://vibecoding.gg'),
  title: {
    default: 'Vibecoding Competitivo — O Esporte Digital da Era IA',
    template: '%s | Vibecoding League',
  },
  description:
    'Duelos ao vivo onde programadores usam IA para construir apps sob pressão. ' +
    'O playbook da Kings League aplicado ao futuro da programação competitiva.',
  keywords: [
    'vibecoding', 'competição de programação', 'esports IA',
    'Kings League coding', 'programação competitiva Brasil',
  ],
  authors: [{ name: 'Vibecoding League' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vibecoding.gg',
    siteName: 'Vibecoding League',
    title: 'Vibecoding Competitivo — O Esporte Digital da Era IA',
    description:
      'Duelos ao vivo. IA como ferramenta. Programação como esporte.',
    images: [
      {
        url: '/opengraph-image',    // Gerado via app/opengraph-image.tsx
        width: 1200,
        height: 630,
        alt: 'Vibecoding League Arena',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vibecoding Competitivo',
    description: 'O próximo esporte digital. Duelos de IA ao vivo.',
    images: ['/opengraph-image'],
    creator: '@vibecoding_gg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://vibecoding.gg',
  },
}
```

### 8.2 OG Image Dinâmica

```typescript
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vibecoding League'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Logo + Headline + CTA */}
      </div>
    ),
    { ...size }
  )
}
```

### 8.3 Sitemap Automático

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vibecoding.gg',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
```

### 8.4 Structured Data (JSON-LD)

```typescript
// app/page.tsx — Schema.org Event para SEO rich snippets
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'Vibecoding League Season 1',
  description: 'Liga competitiva de vibecoding com IA',
  organizer: { '@type': 'Organization', name: 'Vibecoding League' },
  location: { '@type': 'VirtualLocation', url: 'https://vibecoding.gg' },
}
```

---

## 9. CI/CD — GitHub Actions + Vercel

### 9.1 `.github/workflows/ci.yml`

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run build
```

### 9.2 `.github/workflows/deploy-preview.yml`

```yaml
name: Vercel Preview Deploy

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - name: Deploy Preview
        run: npx vercel deploy --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 9.3 Vercel Configuration (`vercel.json`)

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 10. Dependências (`package.json`)

```json
{
  "dependencies": {
    "next": "14.2.x",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "tailwindcss": "^3.x",
    "postcss": "^8.x",
    "autoprefixer": "^10.x",
    "eslint": "^8.x",
    "eslint-config-next": "14.2.x"
  }
}
```

---

## 11. Diagrama de Componentes (Ascii)

```
┌─────────────────────────────────────────────────────────┐
│  app/page.tsx (Server Component)                        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  NavBar [Client] — sticky, scroll spy           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  HeroSection — "Programa. Compete. Vence."      │   │
│  │    SectionHeader (Server)                       │   │
│  │    Button[primary] "Entrar na Lista"             │   │
│  │    VideoLoop[Client, lazy] — arena bg           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  StatsSection [Client] — contadores animados    │   │
│  │    StatBlock × 4: competições / prêmios / etc.  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  FormatSection (Server + CSS animations)        │   │
│  │    RoundCard × 3: Speed / Creative / Mystery    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  MonetizationSection (Server)                   │   │
│  │    Investidores: patrocínios / apostas / stream │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  WhyBrazilSection (Server)                      │   │
│  │    CazéTV / Kings League BR / LOUD-FURIA        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  CtaSection [Client]                            │   │
│  │    WaitlistForm (react-hook-form + zod)         │   │
│  │    SocialProof counter                          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

---

## 12. Decisões Técnicas — ADRs Rápidos

| # | Decisão | Alternativa Considerada | Razão da Escolha |
|---|---------|------------------------|------------------|
| 1 | SSG puro (`output: 'export'`) | SSR / ISR | LP estática, sem dados dinâmicos, máxima performance |
| 2 | framer-motion 11 + LazyMotion | CSS animations puras | Tokens AIOX motion integrados, whileInView nativo |
| 3 | Tailwind + CSS Variables | Styled-components / CSS Modules | Zero runtime, integração perfeita com tokens |
| 4 | react-hook-form + zod | Formik / nativo | Bundle menor, performance validação nativa |
| 5 | Next Font (self-hosted) | CDN externo (Google Fonts) | GDPR, zero round-trip externo, melhor LCP |
| 6 | RSC para seções estáticas | Tudo client-side | Bundle JS reduzido, melhor TTI |
| 7 | Vercel (não Netlify) | Netlify / AWS Amplify | Integração nativa Next.js, Image optimization grátis |

---

## 13. Checklist de Implementação

- [ ] Criar estrutura de diretórios conforme seção 2
- [ ] Configurar `styles/aiox-tokens.css` com tokens AIOX reais (visitar brand.aioxsquad.ai)
- [ ] Configurar `tailwind.config.ts` com mapeamento de tokens
- [ ] Implementar atoms: Button, Badge, StatNumber, Logo
- [ ] Implementar molecules: WaitlistForm, RoundCard, StatBlock, NavBar
- [ ] Implementar sections: Hero, Stats, Format, Monetization, WhyBrazil, CTA
- [ ] Configurar `lib/motion.ts` com variantes AIOX
- [ ] Configurar metadata e OG image
- [ ] Configurar `app/sitemap.ts`
- [ ] Setup GitHub Actions (ci.yml + deploy-preview.yml)
- [ ] Conectar projeto ao Vercel
- [ ] Testar Core Web Vitals com Lighthouse

---

*Arquitetura definida por Aria (Architect Agent) — [JOU-14](/JOU/issues/JOU-14)*
