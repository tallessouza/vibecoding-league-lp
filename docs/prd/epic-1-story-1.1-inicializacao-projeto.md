# Story 1.1: Inicialização do Projeto e Deploy Básico

> **Epic:** 1 — Setup & Foundation
> **PRD Fonte:** `docs/prd.md` §6

## User Story

Como desenvolvedor,
quero ter o repositório configurado com Next.js/Astro, Tailwind e deploy automatizado na Vercel,
para que toda a equipe possa começar a desenvolver com pipeline funcional desde o primeiro commit.

## Acceptance Criteria

1. Repositório criado com estrutura de pastas padrão (`src/`, `public/`, `components/`, `styles/`)
2. Next.js 14.2.x (App Router) inicializado com TypeScript habilitado
3. Tailwind CSS configurado com `tailwind.config.ts`
4. Deploy automático na Vercel configurado via GitHub Actions ou integração nativa
5. Página inicial exibindo "Coming Soon — Vibecoding Competitivo" no domínio de staging
6. Lighthouse score inicial >= 90 em mobile na página placeholder
7. `npm run dev`, `npm run build` e `npm run test` funcionando sem erros
