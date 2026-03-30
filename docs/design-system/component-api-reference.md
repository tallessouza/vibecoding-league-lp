# AIOX Design System — Component API Reference

> Referência técnica completa de props, tipos e exemplos de código para os componentes Aiox*.

---

## AioxButton

**Import:** `import { Button } from "@/components/ui/AioxButton"`

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
}
```

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `"primary" \| "secondary" \| "ghost"` | `"primary"` | Estilo visual |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Tamanho |
| `asChild` | `boolean` | `false` | Renderiza como filho (Radix Slot) |
| `href` | `string` | — | Renderiza `<a>` ao invés de `<button>` |
| `disabled` | `boolean` | `false` | Estado desabilitado (opacity 50%) |
| `className` | `string` | — | Classes Tailwind adicionais |

**Variantes detalhadas:**

```css
primary:   bg-bb-lime text-bb-dark shadow-[neon-glow] hover:shadow-[lime-glow]
secondary: border border-border bg-bb-surface text-bb-cream hover:border-bb-lime
ghost:     text-bb-cream hover:bg-bb-surface hover:text-bb-lime
```

**Focus:** `box-shadow: var(--focus-brand)` — visível apenas por teclado.

---

## AioxInput

**Import:** `import { Input } from "@/components/ui/AioxInput"`

```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}
```

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `error` | `string` | — | Mensagem de erro. Exibe texto e altera borda para `--bb-error` |
| `id` | `string` | — | Recomendado para vincular ao AioxLabel e ao erro via aria-describedby |
| `disabled` | `boolean` | `false` | Desabilita campo (opacity 50%) |
| `placeholder` | `string` | — | Placeholder texto |
| `type` | `string` | `"text"` | Tipo HTML do input |

**Comportamento de acessibilidade:**
- `aria-invalid="true"` quando `error` está definido
- `aria-describedby="{id}-error"` vincula o input à mensagem de erro
- Mensagem de erro com `role="alert"` para leitores de tela

**Exemplo completo com form:**
```tsx
<div className="flex flex-col gap-2">
  <AioxLabel htmlFor="name">Nome</AioxLabel>
  <Input
    id="name"
    type="text"
    placeholder="Seu nome completo"
    error={errors.name?.message}
    {...register("name")}
  />
</div>
```

---

## AioxSelect

**Import:** `import { Select } from "@/components/ui/AioxSelect"`

```tsx
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
}
```

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `error` | `string` | — | Mensagem de erro inline |
| `disabled` | `boolean` | `false` | Desabilita select |
| `children` | `React.ReactNode` | — | Elementos `<option>` |

**Nota:** Este é o `<select>` nativo HTML, não o Radix Select. Use quando precisar de performance máxima e compatibilidade com formulários nativos. Use `select.tsx` (Radix) quando precisar de portal e customização de itens.

**Exemplo:**
```tsx
<div className="flex flex-col gap-2">
  <AioxLabel htmlFor="country">País</AioxLabel>
  <Select
    id="country"
    error={errors.country?.message}
    {...register("country")}
  >
    <option value="">Selecione o país...</option>
    <option value="BR">Brasil</option>
    <option value="US">Estados Unidos</option>
    <option value="PT">Portugal</option>
  </Select>
</div>
```

---

## AioxAlert

**Import:** `import { Alert } from "@/components/ui/AioxAlert"`

```tsx
type AlertVariant = "info" | "success" | "warning" | "error"

interface AlertProps {
  variant?: AlertVariant
  title?: string
  children: React.ReactNode
  className?: string
  onDismiss?: () => void
}
```

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Determina cores e ícone |
| `title` | `string` | — | Título em negrito no topo do conteúdo |
| `children` | `React.ReactNode` | — | Conteúdo principal (texto ou JSX) |
| `onDismiss` | `() => void` | — | Callback ao fechar. Exibe botão ✕ |
| `className` | `string` | — | Classes adicionais |

**Mapeamento de variantes:**
```ts
info:    { border: "--bb-blue",  bg: "rgba(0,153,255,0.08)",   icon: "ℹ", color: "--bb-blue" }
success: { border: "--bb-lime",  bg: "rgba(209,255,0,0.06)",   icon: "✓", color: "--bb-lime" }
warning: { border: "--warning-border", bg: "--warning-bg",     icon: "⚠", color: "--bb-flare" }
error:   { border: "--bb-error", bg: "rgba(239,68,68,0.08)",   icon: "✕", color: "--bb-error" }
```

**Acessibilidade:** `role="alert"` no container para anúncio automático a leitores de tela.

---

## AioxTabs

**Import:** `import { Tabs } from "@/components/ui/AioxTabs"`

```tsx
interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string
  variant?: "default" | "smooth"
  className?: string
}
```

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `tabs` | `Tab[]` | — | Array de abas. Cada Tab tem `id`, `label`, `content` |
| `defaultTab` | `string` | Primeira aba | ID da aba selecionada inicialmente |
| `variant` | `"default" \| "smooth"` | `"default"` | Estilo visual das abas |
| `className` | `string` | — | Classes adicionais no container |

**Acessibilidade completa:**
- `role="tablist"` no container das abas
- `role="tab"` em cada botão de aba
- `aria-selected` reflete estado ativo
- `aria-controls` vincula tab ao painel
- `tabIndex={-1}` em abas inativas (roving tabindex)
- Arrow Left/Right para navegação por teclado
- `role="tabpanel"` com `aria-labelledby`

**Keyboard navigation:**
```
ArrowRight → próxima aba
ArrowLeft  → aba anterior
Tab        → foca próximo elemento fora do tablist
```

---

## Modal

**Import:** `import { Modal } from "@/components/ui/Modal"`

```tsx
interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  actions?: React.ReactNode
  className?: string
}
```

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `open` | `boolean` | — | Controla visibilidade. `false` = não renderiza nada |
| `onClose` | `() => void` | — | Chamado ao Escape, clique no overlay ou botão fechar |
| `title` | `string` | — | Título do modal (no header). ID gerado via useId() |
| `children` | `React.ReactNode` | — | Conteúdo principal (scrollável) |
| `actions` | `React.ReactNode` | — | Botões no footer. Ex: Cancelar + Confirmar |
| `className` | `string` | — | Classes adicionais no painel |

**Comportamentos automáticos:**
- `document.body.style.overflow = "hidden"` quando open (restaurado ao fechar)
- Fecha ao pressionar `Escape`
- Fecha ao clicar no overlay (backdrop)

**Acessibilidade:**
- `role="dialog"`, `aria-modal="true"`
- `aria-labelledby` vinculado ao título via `useId()`
- Botão fechar com `aria-label="Fechar modal"`

**Exemplo com estado:**
```tsx
function DeleteConfirmModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" onClick={() => setOpen(true)}>
        Excluir item
      </Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Confirmar exclusão"
        actions={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button
              variant="primary"
              onClick={() => { handleDelete(); setOpen(false) }}
            >
              Excluir
            </Button>
          </>
        }
      >
        Esta ação não pode ser desfeita. Deseja continuar?
      </Modal>
    </>
  )
}
```

---

## AioxBreadcrumb

**Import:** `import { Breadcrumb } from "@/components/ui/AioxBreadcrumb"`

```tsx
interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}
```

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `items` | `BreadcrumbItem[]` | — | Itens do breadcrumb em ordem |
| `className` | `string` | — | Classes adicionais |

**BreadcrumbItem:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `label` | `string` | Texto exibido |
| `href` | `string?` | Link. Se omitido, renderiza como `<span>` |

**Truncagem:** Máximo 5 níveis. Se `items.length > 5`, exibe `[primeiro, "…", últimos 3]`.

**Acessibilidade:** `<nav aria-label="Breadcrumb">`, `<ol role="list">`, `aria-current="page"` no último item.

---

## AioxLabel

**Import:** `import { Label } from "@/components/ui/AioxLabel"`

Extende `React.LabelHTMLAttributes<HTMLLabelElement>`.

```tsx
// Uso padrão
<AioxLabel htmlFor="email">E-mail</AioxLabel>
<Input id="email" type="email" />
```

---

## AioxBadge

**Import:** `import { Badge } from "@/components/ui/AioxBadge"`

```tsx
interface BadgeProps {
  label: string
}
```

**Estilo fixo:** Monospace, lime `text-bb-lime`, borda `border-bb-lime/30`, `rounded-full`, `tracking-[0.2em]`, uppercase.

```tsx
// Uso
<Badge label="BETA" />
<Badge label="v2.1" />
<Badge label="PREVIEW" />
```

---

## Padrões de Composição

### Formulário completo
```tsx
import { Button } from "@/components/ui/AioxButton"
import { Input } from "@/components/ui/AioxInput"
import { Select } from "@/components/ui/AioxSelect"
import { Label } from "@/components/ui/AioxLabel"
import { Alert } from "@/components/ui/AioxAlert"

function WaitlistForm() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {success && (
        <Alert variant="success" title="Inscrito!" onDismiss={() => setSuccess(false)}>
          Você entrou na lista de espera.
        </Alert>
      )}

      {error && <Alert variant="error">{error}</Alert>}

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" placeholder="Seu nome" required />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="role">Função</Label>
        <Select id="role">
          <option value="">Selecione...</option>
          <option value="founder">Founder</option>
          <option value="dev">Desenvolvedor</option>
          <option value="designer">Designer</option>
        </Select>
      </div>

      <Button type="submit" size="lg">
        Entrar na Waitlist
      </Button>
    </form>
  )
}
```

### Dialog com Tabs
```tsx
import { Modal } from "@/components/ui/Modal"
import { Tabs } from "@/components/ui/AioxTabs"

function SettingsModal({ open, onClose }) {
  const tabs = [
    { id: "profile", label: "Perfil", content: <ProfileSettings /> },
    { id: "security", label: "Segurança", content: <SecuritySettings /> },
    { id: "billing", label: "Plano", content: <BillingSettings /> },
  ]

  return (
    <Modal open={open} onClose={onClose} title="Configurações">
      <Tabs tabs={tabs} variant="smooth" />
    </Modal>
  )
}
```

---

## Diferença Aiox* vs shadcn/*

| Aspecto | Aiox* | shadcn/* |
|---------|-------|---------|
| **Tokens** | `--bb-*` diretos | Semânticos (`--primary`, `--background`) |
| **Estilo** | Identidade AIOX completa (glow, neon) | shadcn padrão (personalizável) |
| **Acessibilidade** | ARIA implementado manualmente | Radix UI (headless) |
| **Composição** | Menos flexível, mais opinionado | Alta flexibilidade |
| **Uso recomendado** | UI principal do produto | Base para composição avançada |

**Regra geral:** Para interfaces novas do produto AIOX, use `Aiox*`. Para composições complexas ou quando os Aiox* não cobrem o caso, use shadcn/* com classes `--bb-*` personalizadas.
