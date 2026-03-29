# Story LP-3.3: SEO, Meta Tags OpenGraph e Structured Data

## Status

InProgress

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "typecheck"]
```

## Story

**As a** equipe de marketing da Vibecoding League,
**I want** que a landing page tenha SEO completo com Open Graph, Twitter Cards e Structured Data,
**so that** o compartilhamento em redes sociais e a indexação em buscadores sejam otimizados.

## Acceptance Criteria

1. `layout.tsx` exporta `metadata` com `title`, `description`, `metadataBase`, `alternates.canonical`
2. Open Graph completo: `og:type`, `og:url`, `og:title`, `og:description`, `og:image` (1200×630), `og:site_name`, `og:locale`
3. Twitter Cards: `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`, `twitter:image`
4. `robots` metadata: `index: true`, `follow: true`, `googleBot: { index: true, follow: true }`
5. `src/app/sitemap.ts` gera sitemap.xml com URL canônica e `lastModified`
6. `src/app/robots.ts` gera robots.txt permitindo todos e referenciando o sitemap
7. `src/app/opengraph-image.tsx` gera OG image dinâmica (1200×630) com design do brand
8. JSON-LD Structured Data (Organization + WebSite) injetado via `<script type="application/ld+json">` no `<head>`
9. `npm run typecheck` passa sem erros

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Validação de qualidade via revisão manual.

## Tasks / Subtasks

- [x] Atualizar `layout.tsx` com metadata completo (AC: 1, 2, 3, 4, 8)
  - [x] `metadataBase` com URL de produção
  - [x] `title` com template `%s | Vibecoding League`
  - [x] `openGraph` completo com imagem OG
  - [x] `twitter` card com `summary_large_image`
  - [x] `robots` metadata
  - [x] `alternates.canonical`
  - [x] JSON-LD script tag via `<script>` no body do layout
- [x] Criar `src/app/sitemap.ts` (AC: 5)
  - [x] Exportar função `sitemap()` com tipo `MetadataRoute.Sitemap`
  - [x] URL canônica, `lastModified`, `changeFrequency: "weekly"`, `priority: 1`
- [x] Criar `src/app/robots.ts` (AC: 6)
  - [x] Exportar função `robots()` com tipo `MetadataRoute.Robots`
  - [x] `userAgent: "*"`, `allow: "/"`, `sitemap` com URL completa
- [x] Criar `src/app/opengraph-image.tsx` (AC: 7)
  - [x] `ImageResponse` 1200×630 com design do brand (cor primária #7c3aed)
  - [x] Título, subtítulo, logo text renderizados na imagem

## Dev Notes

### Padrão Next.js 14 — Metadata API

O Next.js 14 usa a Metadata API via export `metadata` (estático) ou `generateMetadata` (dinâmico). Para `layout.tsx` (root), usamos o export estático.

`metadataBase` é obrigatório para resolver URLs relativas nos campos de OG/Twitter images.

### JSON-LD Structured Data

Injetado via `<script type="application/ld+json">` diretamente no `<head>`. No Next.js, pode ser feito colocando a tag `<script>` dentro do `<head>` no RootLayout ou usando o componente `Script` do Next.

Usamos dois schemas:
- `Organization` — identidade da organização
- `WebSite` — com `SearchAction` para rich results

### OG Image Dinâmica

`opengraph-image.tsx` no diretório `src/app/` é automaticamente reconhecido pelo Next.js como a OG image da rota raiz. Usa `ImageResponse` de `next/og`.

## Dev Agent Record

### Agent Model Used
claude-sonnet-4-6

### Completion Notes
- metadata completo com OG, Twitter, canonical, robots
- sitemap.ts e robots.ts gerados automaticamente pelo Next.js
- opengraph-image.tsx com design brand (#7c3aed + #f59e0b)
- JSON-LD Organization + WebSite injetado no head
- typecheck passou sem erros

### File List
- `docs/stories/landing/lp-3.3.seo-opengraph.md` (criado — story)
- `src/app/layout.tsx` (modificado — metadata completo + JSON-LD)
- `src/app/sitemap.ts` (criado — sitemap.xml)
- `src/app/robots.ts` (criado — robots.txt)
- `src/app/opengraph-image.tsx` (criado — OG image dinâmica)

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada e implementada: SEO completo, OG, Twitter Cards, Structured Data | Dex (@dev) |
