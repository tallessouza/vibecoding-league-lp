# Performance — Core Web Vitals

> **Fonte:** `docs/fullstack-architecture.md` §7
> **Camada:** Performance

## Metas

| Métrica | Meta | Estratégia |
|--------|------|-----------|
| LCP | < 1.8s | Hero image/video com `priority`, fonts preloaded |
| FID/INP | < 100ms | Minimize JavaScript no critical path |
| CLS | < 0.05 | Dimensões explícitas em imagens e vídeo |
| TTFB | < 200ms | SSG + Vercel Edge CDN |
| Bundle JS | < 100KB (gzipped) | RSC + LazyMotion + dynamic imports |

## Lazy Loading

```typescript
const VideoLoop = dynamic(() => import('@/components/atoms/VideoLoop'), {
  ssr: false,
  loading: () => <div className="bg-surface-overlay animate-pulse" />,
})

const WaitlistForm = dynamic(() => import('@/components/molecules/WaitlistForm'), {
  ssr: false,
  loading: () => <FormSkeleton />,
})
```

## Fonts Strategy

```typescript
// app/layout.tsx — Next Font com self-hosting automático
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})
```

## Otimização de Imagens

```typescript
<Image
  src="/images/hero-bg.webp"
  alt="Vibecoding Arena"
  fill
  priority              // LCP candidate
  sizes="100vw"
  quality={85}
  placeholder="blur"
/>
```
