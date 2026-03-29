# SEO — Metadata, OG Image e Sitemap

> **Fonte:** `docs/fullstack-architecture.md` §8
> **Camada:** SEO

## Metadata API (Next.js 14)

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://vibecoding.gg'),
  title: {
    default: 'Vibecoding Competitivo — O Esporte Digital da Era IA',
    template: '%s | Vibecoding League',
  },
  description: 'Duelos ao vivo onde programadores usam IA para construir apps sob pressão.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vibecoding.gg',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vibecoding_gg',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://vibecoding.gg' },
}
```

## OG Image Dinâmica (`app/opengraph-image.tsx`)

- Runtime: edge
- Tamanho: 1200x630px
- Gerada via `ImageResponse` do Next.js

## Sitemap Automático (`app/sitemap.ts`)

- Gerado automaticamente no build
- URL: `https://vibecoding.gg`
- `changeFrequency: 'weekly'`

## Structured Data JSON-LD

```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: 'Vibecoding League Season 1',
  organizer: { '@type': 'Organization', name: 'Vibecoding League' },
  location: { '@type': 'VirtualLocation', url: 'https://vibecoding.gg' },
}
```
