# Source Tree — Vibecoding Competitivo Landing Page

> **Gerado por:** Pax (@po) — [JOU-16](/JOU/issues/JOU-16)
> **Data:** 2026-03-29
> **Baseado em:** `docs/fullstack-architecture.md` §2

## Estrutura Completa do Projeto

```
vibecoding-league-lp/
│
├── app/                                    # Next.js App Router
│   ├── layout.tsx                          # Root layout: fonts, metadata, providers
│   ├── page.tsx                            # Homepage — composição das 6 sections (Server Component)
│   ├── globals.css                         # Tokens AIOX → CSS variables + Tailwind base
│   ├── sitemap.ts                          # Sitemap automático gerado em build
│   ├── robots.ts                           # robots.txt gerado em build
│   └── opengraph-image.tsx                 # OG image dinâmica 1200x630 (Edge runtime)
│
├── components/
│   ├── atoms/                              # Unidades indivisíveis do AIOX DS
│   │   ├── Button.tsx                      # Variants: primary, secondary, ghost
│   │   ├── Badge.tsx                       # Tags: "LIVE", "NOVO", "SURPRESA"
│   │   ├── StatNumber.tsx                  # Números animados (contadores)
│   │   ├── Chip.tsx                        # Labels de formato/categoria
│   │   └── Logo.tsx                        # Logotipo da liga SVG
│   │
│   ├── molecules/                          # Composições reutilizáveis
│   │   ├── WaitlistForm.tsx                # react-hook-form + zod + submit [Client]
│   │   ├── RoundCard.tsx                   # Card de cada round competitivo
│   │   ├── StatBlock.tsx                   # Ícone + número animado + label
│   │   ├── TestimonialCard.tsx             # Quote + avatar + nome
│   │   ├── NavBar.tsx                      # Navigation sticky com scroll spy [Client]
│   │   └── SectionHeader.tsx              # Eyebrow + headline + subheadline
│   │
│   └── sections/                           # Seções completas da landing page
│       ├── HeroSection.tsx                 # Headline + CTA + video background
│       ├── StatsSection.tsx                # 4 métricas animadas [Client]
│       ├── FormatSection.tsx               # 3 rounds com cards animados
│       ├── MonetizationSection.tsx         # 3 pilares de receita
│       ├── WhyBrazilSection.tsx            # CazéTV, Kings League BR, LOUD/FURIA
│       └── CtaSection.tsx                  # Waitlist form + social proof [Client]
│
├── lib/
│   ├── tokens.ts                           # Mapeamento tipado dos tokens AIOX
│   ├── motion.ts                           # Variantes framer-motion padronizadas
│   ├── validations.ts                      # Schemas zod para forms (waitlist)
│   └── analytics.ts                        # GA4 (gtag.js) + Vercel Web Vitals
│
├── public/
│   ├── fonts/                              # AIOX typography (self-hosted, GDPR)
│   │   ├── aiox-display.woff2
│   │   ├── aiox-body.woff2
│   │   └── aiox-mono.woff2
│   ├── images/                             # Assets estáticos otimizados
│   │   ├── hero-bg.webp                    # Background hero section
│   │   ├── logo-cazetv.svg
│   │   ├── logo-loud.svg
│   │   ├── logo-furia.svg
│   │   └── logo-kings-league-br.svg
│   └── videos/
│       ├── arena-loop.webm                 # Video hero background (preferido)
│       └── arena-loop.mp4                  # Fallback para browsers sem WebM
│
├── styles/
│   └── aiox-tokens.css                     # CSS variables exportadas do AIOX DS
│
├── docs/                                   # Documentação do projeto
│   ├── prd.md                              # PRD completo
│   ├── fullstack-architecture.md          # Arquitetura completa
│   ├── front-end-spec.md                  # Especificação UX/UI
│   ├── project-brief.md                   # Brief do projeto
│   ├── source-tree.md                     # Este arquivo
│   ├── tech-stack.md                      # Stack e dependências
│   ├── coding-standards.md                # Padrões de código
│   ├── prd/                               # PRD shardado por epic/story
│   └── architecture/                      # Arquitetura shardada por camada
│
├── .github/
│   └── workflows/
│       ├── ci.yml                          # Lint + typecheck + build
│       └── deploy-preview.yml             # Deploy de preview por PR
│
├── .gitignore
├── next.config.ts                          # SSG config (output: 'export')
├── tailwind.config.ts                      # Tailwind + tokens AIOX
├── tsconfig.json                           # TypeScript strict mode
├── postcss.config.js
├── vercel.json                             # Deploy config + security headers
└── package.json                            # Dependências e scripts
```

## Scripts npm

| Script | Comando | Descrição |
|--------|---------|-----------|
| `dev` | `next dev` | Servidor de desenvolvimento |
| `build` | `next build` | Build de produção (SSG) |
| `start` | `next start` | Servidor de produção local |
| `lint` | `next lint` | ESLint + regras Next.js |
| `typecheck` | `tsc --noEmit` | Type checking sem build |
| `test` | `vitest` | Testes unitários |
| `test:e2e` | `playwright test` | Testes E2E |

## Convenções de Nomenclatura

- **Componentes:** PascalCase (`HeroSection.tsx`)
- **Utilitários/libs:** camelCase (`motion.ts`, `analytics.ts`)
- **Estilos CSS:** kebab-case (`aiox-tokens.css`)
- **Assets:** kebab-case (`hero-bg.webp`, `logo-loud.svg`)
- **Workflows:** kebab-case (`deploy-preview.yml`)
