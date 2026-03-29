# Story 2.6: Seção CTA/Waitlist

> **Epic:** 2 — LP Sections
> **PRD Fonte:** `docs/prd.md` §7

## User Story

Como visitante interessado,
quero me inscrever na waitlist com meu tipo de interesse,
para que a equipe possa me contatar com informações relevantes ao meu perfil.

## Acceptance Criteria

1. Formulário com campos: Nome (text, obrigatório), Email (email, obrigatório), Tipo de Interesse (select: Competidor / Investidor / Fã / Parceiro de Mídia, obrigatório)
2. Validação client-side: campos obrigatórios marcados, email com formato válido
3. Submit envia dados para backend (Supabase ou equivalente) e exibe mensagem de sucesso inline sem reload
4. Campo honeypot oculto para prevenção de spam
5. Loading state no botão durante o envio
6. Mensagem de erro genérica em caso de falha no envio (sem expor detalhes técnicos)
7. Seção com fundo contrastante (destaque visual claro que é a ação final esperada)
8. Totalmente responsivo com formulário usável em mobile

## Referências

- Componente: `components/sections/CtaSection.tsx`
- Molecule: `components/molecules/WaitlistForm.tsx`
- Validação: `lib/validations.ts` (schema zod)
- Requisitos: `FR7`, `FR8`, `NFR7` do PRD
