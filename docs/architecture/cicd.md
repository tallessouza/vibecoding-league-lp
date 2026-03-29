# CI/CD — GitHub Actions + Vercel

> **Fonte:** `docs/fullstack-architecture.md` §9
> **Camada:** Infrastructure / DevOps

## Workflows

### `ci.yml` — Quality Gate

```yaml
name: CI
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run build
```

### `deploy-preview.yml` — Preview Deploy

```yaml
name: Vercel Preview Deploy
on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - name: Deploy Preview
        run: npx vercel deploy --token=${{ secrets.VERCEL_TOKEN }}
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

## `vercel.json` — Configuração Vercel

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

## Secrets Necessários

| Secret | Descrição |
|--------|-----------|
| `VERCEL_TOKEN` | Token de autenticação Vercel |
| `VERCEL_ORG_ID` | ID da organização no Vercel |
| `VERCEL_PROJECT_ID` | ID do projeto no Vercel |
