# Story LP-2.6: CTA Waitlist Section — Formulário de Lista de Espera

## Status

Ready for Review

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "form-validation", "accessibility"]
```

## Story

**As a** visitante interessado na plataforma,
**I want** me inscrever na lista de espera como competidor ou investidor,
**so that** seja notificado quando o Vibecoding Competitivo lançar e possa participar desde o início.

## Acceptance Criteria

1. Seção com `id="waitlist"` e título "Faça Parte do Movimento"
2. Formulário com campos: **Nome** (obrigatório), **Email** (obrigatório, validação de formato), **Tipo** (radio/select: "Competidor" ou "Investidor/Patrocinador")
3. Validação client-side com `react-hook-form`: campos obrigatórios e formato de email
4. Mensagem de erro inline em cada campo inválido
5. Ao submeter: mostrar estado de loading, depois mensagem de sucesso "🎉 Você está na lista! Entraremos em contato em breve."
6. Submit envia dados para endpoint `/api/waitlist` (Next.js API Route) que salva em JSON local ou retorna mock 200
7. Botão de submit: "Entrar na Lista" (variante `primary` do Button base)
8. Subtítulo motivacional: "Seja um dos primeiros competidores ou leve sua marca para o próximo esporte digital."

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [x] Instalar dependência `react-hook-form` (AC: 3)
  - [x] `npm install react-hook-form`
- [x] Criar API Route `app/api/waitlist/route.ts` (AC: 6)
  - [x] `POST` handler que recebe `{ name, email, type }`
  - [x] Validação básica server-side
  - [x] Mock: salva em `data/waitlist.json` local ou apenas retorna `{ success: true }`
  - [x] Retorna 200 com `{ message: "Registered successfully" }`
- [x] Criar componente `WaitlistSection` em `components/sections/WaitlistSection.tsx` (AC: 1, 2, 7, 8)
  - [x] Título e subtítulo
  - [x] Formulário com `react-hook-form`
  - [x] Campo Nome: `type="text"`, required
  - [x] Campo Email: `type="email"`, required, pattern validation
  - [x] Campo Tipo: radio buttons "Competidor" e "Investidor/Patrocinador"
  - [x] Botão submit
- [x] Implementar validação e estados (AC: 3, 4, 5)
  - [x] Mensagens de erro inline (ex: "Email inválido", "Campo obrigatório")
  - [x] Estado loading durante submit (spinner no botão)
  - [x] Estado sucesso: esconder formulário, mostrar mensagem de confirmação
  - [x] Estado erro: mostrar mensagem genérica de erro
- [x] Estilizar com design system AIOX (AC: 1)
  - [x] Input fields com tokens AIOX (`--aiox-border`, `--aiox-input-background`)
  - [x] Focus ring com `--aiox-primary`
  - [x] Seção com fundo diferenciado para destacar como CTA final
- [x] Integrar em `app/page.tsx`

## Dev Notes

### react-hook-form Usage

```typescript
const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<WaitlistFormData>();

const onSubmit = async (data: WaitlistFormData) => {
  const res = await fetch('/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (res.ok) setSubmitted(true);
};
```

### API Route (Implementação Mínima)

```typescript
// app/api/waitlist/route.ts
export async function POST(req: Request) {
  const body = await req.json();
  // TODO: integrar com banco de dados real (Supabase) em story futura
  console.log('Waitlist signup:', body);
  return Response.json({ success: true });
}
```

### Acessibilidade

- Labels associados aos inputs via `htmlFor`/`id`
- Mensagens de erro com `role="alert"` e `aria-live="polite"`
- Fieldset + legend para o grupo de radio buttons

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
| 2026-03-29 | 1.1 | Implementação completa: WaitlistSection, API route, react-hook-form, validações, estados | Dex (@dev) |

## Dev Agent Record

### Agent Model Used
claude-sonnet-4-6

### Completion Notes
- Todos os ACs implementados e validados
- `react-hook-form` instalado via pnpm
- API Route mock em `src/app/api/waitlist/route.ts` retorna `{ success: true }`
- Acessibilidade: labels com `htmlFor`, `role="alert"`, `aria-live="polite"`, fieldset+legend para radios
- Lint e typecheck passaram sem erros

### File List
- `src/app/api/waitlist/route.ts` — criado
- `src/components/sections/WaitlistSection.tsx` — criado
- `src/app/page.tsx` — modificado (integração WaitlistSection)
- `package.json` — modificado (react-hook-form adicionado)
- `pnpm-lock.yaml` — modificado
