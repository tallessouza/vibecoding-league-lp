# Decisão SSG vs SSR

> **Fonte:** `docs/fullstack-architecture.md` §6
> **Camada:** Rendering Strategy

## Decisão: SSG puro (`output: 'export'`)

| Critério | SSG | SSR |
|---------|-----|-----|
| Performance (TTFB) | ✅ <50ms (edge CDN) | ⚠️ 100-300ms (server) |
| Core Web Vitals | ✅ LCP otimizado | ⚠️ Depende do server |
| Custo Vercel | ✅ Gratuito/mínimo | ⚠️ Serverless invocations |
| Necessidade de dados dinâmicos | ❌ Não existe | N/A |
| Waitlist form | ✅ API Route separada | N/A |

**Justificativa:** A landing page é 100% conteúdo estático. O único elemento dinâmico é o form de waitlist, que usa uma API Route isolada (`/api/waitlist`).

## `next.config.ts`

```typescript
const config: NextConfig = {
  output: 'export',          // HTML estático puro
  images: {
    unoptimized: false,      // Next Image optimization via Vercel
  },
  trailingSlash: true,
}
```
