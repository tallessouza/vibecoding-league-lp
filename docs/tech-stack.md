# Tech Stack — Vibecoding Competitivo Landing Page

> **Gerado por:** Pax (@po) — [JOU-16](/JOU/issues/JOU-16)
> **Data:** 2026-03-29
> **Baseado em:** `docs/fullstack-architecture.md`

## Stack Principal

| Camada | Tecnologia | Versão | Justificativa |
|--------|-----------|--------|---------------|
| **Framework** | Next.js (App Router) | 14.2.x | SSG nativo, RSC, metadata API, Image optimization |
| **Runtime** | React | ^18.3.0 | Concurrent features, Server Components |
| **Linguagem** | TypeScript | ^5.x | Type safety, melhor DX |
| **Styling** | Tailwind CSS | ^3.x | Utility-first, integração com tokens CSS |
| **Animações** | framer-motion | ^11.x | Tokens AIOX motion, whileInView nativo |
| **Forms** | react-hook-form | ^7.x | Bundle menor, performance nativa |
| **Validação** | zod | ^3.x | Schema validation tipada |
| **Deploy** | Vercel | — | Edge CDN, preview deploys, Next.js nativo |
| **CI/CD** | GitHub Actions | — | Auto-deploy em push para main |

## Design System

| Item | Detalhe |
|------|---------|
| **Fonte** | AIOX DS — `brand.aioxsquad.ai/brandbook` |
| **Tokens** | CSS Variables → Tailwind config |
| **Accent primário** | `#D1FF00` (Lime neon — `--bb-lime`) |
| **Background** | `#050505` (near-black — `--bb-dark`) |
| **Tipografia display** | 'AIOX Display' / 'Space Grotesk' (fallback) |
| **Tipografia body** | 'AIOX Body' / 'Inter' (fallback) |
| **Tipografia mono** | 'AIOX Mono' / 'JetBrains Mono' (fallback) |

## Backend / Serviços Externos

| Serviço | Finalidade | Tier |
|---------|-----------|------|
| **Supabase** | Armazenamento de leads do waitlist | Free tier |
| **Resend** | Envio de email de confirmação | Free tier |
| **Google Analytics 4** | Analytics + conversão tracking | Free |
| **Vercel Analytics** | Web Vitals real-user monitoring | Free tier |

## Tooling de Desenvolvimento

| Ferramenta | Versão | Uso |
|-----------|--------|-----|
| `eslint` | ^8.x | Linting (config next) |
| `postcss` | ^8.x | CSS processing |
| `autoprefixer` | ^10.x | Vendor prefixes |
| `vitest` | latest | Testes unitários |
| `@testing-library/react` | latest | Testes de componentes |
| `playwright` | latest | Testes E2E |

## Node.js e Ambiente

| Item | Valor |
|------|-------|
| **Node.js** | >= 20.x (LTS) |
| **Package manager** | npm |
| **Engines** | `"node": ">=20"` no package.json |

## Requisitos de Performance (Metas)

| Métrica | Meta |
|--------|------|
| Lighthouse Mobile | >= 90 |
| Lighthouse Desktop | >= 95 |
| LCP | < 1.8s |
| FCP | < 1.5s (4G simulado) |
| CLS | < 0.05 |
| JS Bundle (gzipped) | < 100KB |
| TTFB | < 200ms |

## Referências

- Arquitetura detalhada: `docs/fullstack-architecture.md`
- Decisões técnicas (ADRs): `docs/architecture/dependencies.md`
- Decisão SSG: `docs/architecture/ssg.md`
