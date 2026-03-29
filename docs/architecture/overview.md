# Architecture Overview — Vibecoding Competitivo Landing Page

> **Fonte:** `docs/fullstack-architecture.md` §1–2
> **Autor:** Aria (Architect Agent) — [JOU-14](/JOU/issues/JOU-14)
> **Versão:** 1.0 | 2026-03-29

## Visão Geral

Landing page estática de alta performance para apresentar a liga de **Vibecoding Competitivo** — o primeiro esporte digital nascido do playbook da Kings League focado em programadores que usam IA. Público-alvo triplo: investidores, competidores e fãs.

## Stack Definitiva

| Camada | Tecnologia | Justificativa |
|--------|-----------|---------------|
| Framework | Next.js 14 (App Router) | SSG nativo, RSC, metadata API, Image optimization |
| Styling | Tailwind CSS + CSS Variables | Integração direta com tokens AIOX |
| Animações | framer-motion 11 | Tokens de motion do AIOX, performance otimizada |
| Forms | react-hook-form + zod | CTA/Waitlist com validação tipada |
| Design System | AIOX DS (brand.aioxsquad.ai) | Tokens, componentes LP, motion system |
| Deploy | Vercel | Edge network, preview deploys, analytics |
| CI/CD | GitHub Actions + Vercel | Auto-deploy em push para main |

## Estrutura de Diretórios (App Router)

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
│   ├── molecules/              # Composições reutilizáveis
│   └── sections/               # Seções completas da landing page
│
├── lib/
│   ├── tokens.ts               # Mapeamento tipado dos tokens AIOX
│   ├── motion.ts               # Variantes framer-motion padronizadas
│   ├── validations.ts          # Schemas zod para forms
│   └── analytics.ts            # GA4 + Vercel Web Vitals
│
├── public/
│   ├── fonts/                  # AIOX typography (self-hosted)
│   ├── images/                 # Logos, backgrounds otimizados
│   └── videos/                 # Loop video hero (WebM + MP4 fallback)
│
├── styles/
│   └── aiox-tokens.css         # CSS variables exportadas do AIOX DS
│
├── .github/workflows/          # CI/CD pipelines
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Documentos de Arquitetura

| Arquivo | Conteúdo |
|---------|---------|
| `design-tokens.md` | Integração com AIOX Design System |
| `components.md` | Hierarquia de componentes + RSC Policy |
| `animations.md` | Estratégia framer-motion + AIOX Motion |
| `ssg.md` | Decisão SSG vs SSR |
| `performance.md` | Core Web Vitals + Lazy Loading |
| `seo.md` | Metadata API, OG Image, Sitemap, JSON-LD |
| `cicd.md` | GitHub Actions + Vercel |
| `dependencies.md` | package.json completo |
