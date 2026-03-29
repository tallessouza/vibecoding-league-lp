# Story LP-3.4: Vercel Deploy + CI/CD GitHub Actions

## Status

InProgress

## Executor Assignment

```
executor: "@devops"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "vercel-preview", "github-actions"]
```

## Story

**As a** desenvolvedor do projeto Vibecoding League LP,
**I want** que o projeto seja deployado automaticamente no Vercel via GitHub Actions,
**so that** cada push na branch `main` gere um deploy de produção e cada PR gere um deploy de preview.

## Acceptance Criteria

1. GitHub Actions CI workflow executa em cada PR e push para `main`: lint + typecheck + build
2. GitHub Actions CD workflow deploya automaticamente para Vercel em push para `main` (produção)
3. PRs recebem deploy de preview no Vercel com URL única comentada no PR
4. Build falha no CI bloqueia o merge do PR
5. Secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` configurados no GitHub
6. Workflow usa Node.js 20 e pnpm para consistência com ambiente local

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled em `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [x] Criar story file `docs/stories/landing/lp-3.4.vercel-deploy-cicd.md` (AC: todos)
- [x] Criar CI workflow `.github/workflows/ci.yml` (AC: 1, 4)
  - [x] Trigger em `push` para `main` e `pull_request` para `main`
  - [x] Jobs: lint, typecheck, build com pnpm
  - [x] Node.js 20 + pnpm cache
- [x] Criar CD workflow `.github/workflows/deploy.yml` (AC: 2, 3)
  - [x] Trigger em `push` para `main` (produção)
  - [x] Trigger em `pull_request` para `main` (preview)
  - [x] Deploy usando `vercel` CLI com secrets
  - [x] Comment no PR com URL do preview
- [ ] Configurar secrets no GitHub (AC: 5)
  - [ ] `VERCEL_TOKEN` — token da conta Vercel
  - [ ] `VERCEL_ORG_ID` — ID da org/conta Vercel
  - [ ] `VERCEL_PROJECT_ID` — ID do projeto no Vercel
- [ ] Validar primeiro deploy de produção via push para `main` (AC: 2)
- [ ] Validar deploy de preview via PR de teste (AC: 3)

## Dev Notes

### Vercel CLI via GitHub Actions

O deploy usa a `vercel` CLI via `npm install -g vercel` dentro do workflow. Os três secrets obrigatórios:
- `VERCEL_TOKEN`: gerado em vercel.com/account/tokens
- `VERCEL_ORG_ID`: encontrado em `.vercel/project.json` após `vercel link`
- `VERCEL_PROJECT_ID`: encontrado em `.vercel/project.json` após `vercel link`

Para obter esses valores localmente:
```bash
npx vercel link
cat .vercel/project.json
```

### pnpm no CI

O projeto usa pnpm (pnpm-lock.yaml existe). O workflow usa `pnpm/action-setup@v4` + cache nativo do `actions/setup-node`.

### Branch Protection

Após os workflows estarem ativos, ativar branch protection em `main`:
- Required status checks: `ci / lint`, `ci / typecheck`, `ci / build`
- Require PR reviews antes de merge

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada e implementada para deploy Vercel + CI/CD | Gage (@devops) |
