# Dependências do Projeto (`package.json`)

> **Fonte:** `docs/fullstack-architecture.md` §10
> **Camada:** Dependencies

## Dependências de Produção

| Pacote | Versão | Finalidade |
|--------|--------|-----------|
| `next` | 14.2.x | Framework principal (SSG, RSC, Image) |
| `react` | ^18.3.0 | UI runtime |
| `react-dom` | ^18.3.0 | DOM renderer |
| `framer-motion` | ^11.x | Animações (tokens AIOX motion) |
| `react-hook-form` | ^7.x | Formulário de waitlist |
| `zod` | ^3.x | Validação de schemas |
| `@hookform/resolvers` | ^3.x | Integração zod + react-hook-form |

## Dependências de Desenvolvimento

| Pacote | Versão | Finalidade |
|--------|--------|-----------|
| `typescript` | ^5.x | Type checking |
| `@types/node` | ^20.x | Tipos Node.js |
| `@types/react` | ^18.x | Tipos React |
| `tailwindcss` | ^3.x | Utility-first CSS |
| `postcss` | ^8.x | CSS processing |
| `autoprefixer` | ^10.x | Vendor prefixes automáticos |
| `eslint` | ^8.x | Linting |
| `eslint-config-next` | 14.2.x | Config ESLint para Next.js |

## ADRs — Decisões de Dependências

| # | Decisão | Alternativa Considerada | Razão |
|---|---------|------------------------|-------|
| 1 | framer-motion 11 + LazyMotion | CSS animations puras | Tokens AIOX motion integrados |
| 2 | react-hook-form + zod | Formik / nativo | Bundle menor, performance nativa |
| 3 | Next Font (self-hosted) | CDN externo (Google Fonts) | GDPR, zero round-trip, melhor LCP |
| 4 | Tailwind + CSS Variables | Styled-components | Zero runtime, integração com tokens |
