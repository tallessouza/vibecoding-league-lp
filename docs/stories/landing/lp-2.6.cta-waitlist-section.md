# Story LP-2.6: CTA Waitlist Section — Formulário de Lista de Espera

## Status

Draft

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

- [ ] Instalar dependência `react-hook-form` (AC: 3)
  - [ ] `npm install react-hook-form`
- [ ] Criar API Route `app/api/waitlist/route.ts` (AC: 6)
  - [ ] `POST` handler que recebe `{ name, email, type }`
  - [ ] Validação básica server-side
  - [ ] Mock: salva em `data/waitlist.json` local ou apenas retorna `{ success: true }`
  - [ ] Retorna 200 com `{ message: "Registered successfully" }`
- [ ] Criar componente `WaitlistSection` em `components/sections/WaitlistSection.tsx` (AC: 1, 2, 7, 8)
  - [ ] Título e subtítulo
  - [ ] Formulário com `react-hook-form`
  - [ ] Campo Nome: `type="text"`, required
  - [ ] Campo Email: `type="email"`, required, pattern validation
  - [ ] Campo Tipo: radio buttons "Competidor" e "Investidor/Patrocinador"
  - [ ] Botão submit
- [ ] Implementar validação e estados (AC: 3, 4, 5)
  - [ ] Mensagens de erro inline (ex: "Email inválido", "Campo obrigatório")
  - [ ] Estado loading durante submit (spinner no botão)
  - [ ] Estado sucesso: esconder formulário, mostrar mensagem de confirmação
  - [ ] Estado erro: mostrar mensagem genérica de erro
- [ ] Estilizar com design system AIOX (AC: 1)
  - [ ] Input fields com tokens AIOX (`--aiox-border`, `--aiox-input-background`)
  - [ ] Focus ring com `--aiox-primary`
  - [ ] Seção com fundo diferenciado para destacar como CTA final
- [ ] Integrar em `app/page.tsx`

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
