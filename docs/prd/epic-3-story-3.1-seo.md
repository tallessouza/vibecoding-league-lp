# Story 3.1: SEO e Metadata

> **Epic:** 3 — Quality & Launch
> **PRD Fonte:** `docs/prd.md` §8

## User Story

Como responsável de marketing,
quero que a LP tenha SEO on-page completo,
para que ela apareça nas buscas por "vibecoding competitivo", "liga de vibecoding" e termos relacionados.

## Acceptance Criteria

1. `<title>`: "Vibecoding Competitivo — A Liga de Programação com IA | Brasil"
2. `<meta name="description">`: texto de 150-160 caracteres descrevendo a liga
3. Open Graph tags: `og:title`, `og:description`, `og:image` (1200x630px), `og:url`
4. Twitter Card tags completas
5. Structured data JSON-LD: Organization + Event (ou WebSite)
6. Canonical URL configurado corretamente
7. `robots.txt` e `sitemap.xml` gerados automaticamente no build
8. `lang="pt-BR"` no elemento `<html>`

## Referências

- Implementação: `app/layout.tsx` (metadata API Next.js)
- OG Image: `app/opengraph-image.tsx`
- Sitemap: `app/sitemap.ts`
- Arquitetura SEO: `docs/architecture/seo.md`
- Requisito: `NFR4` do PRD
