# AIOX Design System — Pattern Library

> Inventário completo de componentes do DS shadcn/AIOX.
> Gerado em: 2026-03-30 | Versão: 1.0.0

---

## Arquitetura de Componentes

O DS usa uma arquitetura de **duas camadas**:

```
Camada 1 — Primitivos shadcn/ui (src/components/ui/*.tsx)
  └── Radix UI como base headless
  └── Tokens semânticos (--background, --primary, --border...)
  └── Nomes originais: button.tsx, card.tsx, tabs.tsx...

Camada 2 — Componentes Aiox* (src/components/ui/Aiox*.tsx)
  └── Construídos sobre os primitivos ou independentes
  └── Tokens brandbook diretos (--bb-lime, --bb-surface...)
  └── Nomes: AioxButton, AioxInput, AioxAlert, Modal...
```

**Quando usar qual camada:**
- Use `Aiox*` para UI principal do produto (CTAs, formulários, feedback)
- Use `shadcn/*` como base para composição, customização ou quando precisar de variantes não cobertas pelo Aiox*

---

## Componentes Aiox* (Customizados)

### AioxButton

**Arquivo:** `src/components/ui/AioxButton.tsx`
**Descrição:** Botão principal com identidade AIOX. Suporta renderização como `<a>` via prop `href`.

**Variantes:**
| Variant | Aparência | Uso |
|---------|-----------|-----|
| `primary` | Fundo lime `#D1FF00`, texto dark, neon glow | CTA principal |
| `secondary` | Borda + fundo surface, hover borda lime | Ação secundária |
| `ghost` | Sem fundo, texto cream, hover lime | Ações sutis, nav |

**Tamanhos:**
| Size | Altura | Padding | Font |
|------|--------|---------|------|
| `sm` | 32px | px-3 | text-sm |
| `md` | 40px | px-4 | text-sm (padrão) |
| `lg` | 48px | px-6 | text-base |

**Props:**
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"  // default: "primary"
  size?: "sm" | "md" | "lg"                    // default: "md"
  asChild?: boolean                             // Renderiza como Slot (Radix)
  href?: string                                 // Renderiza como <a>
}
```

**Exemplos:**
```tsx
// CTA principal
<Button variant="primary" size="lg">Entrar na Waitlist</Button>

// Ação secundária
<Button variant="secondary">Ver Detalhes</Button>

// Ghost em nav
<Button variant="ghost" size="sm">Cancelar</Button>

// Como link
<Button href="/sobre" variant="primary">Saiba Mais</Button>
```

**Tokens aplicados:** `--bb-lime`, `--bb-dark`, `--bb-surface`, `--bb-surface-alt`, `--bb-cream`, `--bb-border`, `--neon-glow`, `--lime-glow`, `--focus-brand`

---

### AioxInput

**Arquivo:** `src/components/ui/AioxInput.tsx`
**Descrição:** Input de texto com suporte nativo a estado de erro e acessibilidade.

**Props:**
```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string  // Mensagem de erro inline com role="alert"
}
```

**Estados:**
| Estado | Border | Box-shadow no focus |
|--------|--------|---------------------|
| Padrão | `--bb-border-input` | `--focus-brand` |
| Erro | `--bb-error` | `0 0 0 2px var(--bb-error)` |
| Disabled | Opacity 50% | — |

**Exemplos:**
```tsx
// Básico
<Input placeholder="seu@email.com" />

// Com erro
<Input
  id="email"
  type="email"
  error="E-mail inválido"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// Disabled
<Input disabled value="Não editável" />
```

**Tokens:** `--bb-surface`, `--bb-cream`, `--bb-border-input`, `--bb-error`, `--focus-brand`

---

### AioxSelect

**Arquivo:** `src/components/ui/AioxSelect.tsx`
**Descrição:** Select nativo estilizado com chevron customizado. Mesmo padrão de erro que AioxInput.

**Props:**
```tsx
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
}
```

**Exemplos:**
```tsx
// Básico
<Select>
  <option value="">Selecione...</option>
  <option value="br">Brasil</option>
  <option value="us">Estados Unidos</option>
</Select>

// Com erro
<Select error="Selecione uma opção válida">
  <option value="">Selecione...</option>
</Select>
```

**Tokens:** `--bb-surface`, `--bb-cream`, `--bb-border-input`, `--bb-error`, `--bb-dim`, `--focus-brand`

---

### AioxAlert

**Arquivo:** `src/components/ui/AioxAlert.tsx`
**Descrição:** Componente de alerta com 4 variantes semânticas. Suporta dismiss opcional.

**Variantes:**
| Variant | Border | Background | Ícone | Uso |
|---------|--------|------------|-------|-----|
| `info` | `--bb-blue` | `rgba(0,153,255,0.08)` | ℹ | Informação |
| `success` | `--bb-lime` | `rgba(209,255,0,0.06)` | ✓ | Sucesso |
| `warning` | `--warning-border` | `--warning-bg` | ⚠ | Aviso |
| `error` | `--bb-error` | `rgba(239,68,68,0.08)` | ✕ | Erro crítico |

**Props:**
```tsx
interface AlertProps {
  variant?: "info" | "success" | "warning" | "error"  // default: "info"
  title?: string
  children: React.ReactNode
  className?: string
  onDismiss?: () => void  // Adiciona botão de fechar
}
```

**Exemplos:**
```tsx
// Informação simples
<Alert variant="info">
  Seu pitch foi enviado com sucesso.
</Alert>

// Com título e dismiss
<Alert
  variant="success"
  title="Inscrição confirmada!"
  onDismiss={() => setShowAlert(false)}
>
  Você receberá atualizações no seu e-mail.
</Alert>

// Erro
<Alert variant="error" title="Falha no envio">
  Tente novamente em alguns instantes.
</Alert>
```

**Tokens:** `--bb-blue`, `--bb-lime`, `--bb-flare`, `--bb-error`, `--bb-cream`, `--bb-dim`, `--focus-brand`

---

### AioxTabs

**Arquivo:** `src/components/ui/AioxTabs.tsx`
**Descrição:** Componente de abas com acessibilidade completa (role=tablist, Arrow keys, aria-selected). Dois estilos visuais.

**Variantes:**
| Variant | Estilo | Uso |
|---------|--------|-----|
| `default` | Underline lime na aba ativa | Seções de página, dashboards |
| `smooth` | Background surface-alt na aba ativa | Filtros inline, modais |

**Props:**
```tsx
interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  defaultTab?: string     // ID da aba ativa inicial
  variant?: "default" | "smooth"  // default: "default"
  className?: string
}
```

**Exemplos:**
```tsx
const tabs = [
  { id: "overview", label: "Visão Geral", content: <OverviewPanel /> },
  { id: "metrics", label: "Métricas", content: <MetricsPanel /> },
  { id: "config", label: "Configuração", content: <ConfigPanel /> },
]

// Padrão (underline)
<Tabs tabs={tabs} defaultTab="overview" />

// Smooth (pills)
<Tabs tabs={tabs} variant="smooth" defaultTab="metrics" />
```

**Acessibilidade:** Arrow Left/Right para navegação entre abas, aria-selected, role="tabpanel", aria-labelledby.

**Tokens:** `--bb-lime`, `--bb-dim`, `--bb-border`, `--bb-surface`, `--bb-surface-alt`, `--focus-brand`

---

### Modal

**Arquivo:** `src/components/ui/Modal.tsx`
**Descrição:** Modal dialog acessível. Fecha no Escape e no overlay. Bloqueia scroll do body.

**Props:**
```tsx
interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  actions?: React.ReactNode  // Botões no footer
  className?: string
}
```

**Exemplos:**
```tsx
const [open, setOpen] = useState(false)

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirmar inscrição"
  actions={
    <>
      <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
      <Button variant="primary" onClick={handleConfirm}>Confirmar</Button>
    </>
  }
>
  Tem certeza que deseja continuar?
</Modal>
```

**Acessibilidade:** role="dialog", aria-modal="true", aria-labelledby gerado via useId(), Escape key handler.

**Tokens:** `--bb-surface-panel`, `--bb-border`, `--bb-cream`, `--bb-dim`, `--layer-modal`, `--focus-brand`

---

### AioxBreadcrumb

**Arquivo:** `src/components/ui/AioxBreadcrumb.tsx`
**Descrição:** Breadcrumb de navegação. Auto-trunca para máximo 5 níveis com "…".

**Props:**
```tsx
interface BreadcrumbItem {
  label: string
  href?: string  // Se omitido, renderiza como texto não-clicável
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}
```

**Exemplos:**
```tsx
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Configurações" },  // Página atual (sem href)
  ]}
/>
```

**Tokens:** `--bb-dim`, `--bb-cream`, `--focus-brand`

---

### AioxLabel

**Arquivo:** `src/components/ui/AioxLabel.tsx`
**Descrição:** Label para formulários, compatível com htmlFor.

**Uso padrão:**
```tsx
<AioxLabel htmlFor="email">E-mail</AioxLabel>
<AioxInput id="email" type="email" />
```

---

### AioxBadge

**Arquivo:** `src/components/ui/AioxBadge.tsx`
**Descrição:** Badge monospaced com borda lime/30. Para tags de categoria, status técnicos.

**Props:**
```tsx
interface BadgeProps {
  label: string
}
```

**Exemplos:**
```tsx
<Badge label="BETA" />
<Badge label="DS-ADAPT-3.1" />
<Badge label="NEW" />
```

**Tokens:** `--bb-lime` (text + border/30), `font-mono`

---

## Componentes shadcn/ui (Primitivos)

Todos os 56 componentes shadcn/ui estão disponíveis em `src/components/ui/`. Eles herdam os tokens semânticos do tema AIOX automaticamente via `globals.css`.

### Grupos por Categoria

#### Inputs & Formulários

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `<Button>` | `button.tsx` | Botão shadcn (use AioxButton para nova UI) |
| `<Input>` | `input.tsx` | Input shadcn primitivo |
| `<Textarea>` | `textarea.tsx` | Área de texto multi-linha |
| `<Checkbox>` | `checkbox.tsx` | Checkbox Radix |
| `<RadioGroup>` | `radio-group.tsx` | Grupo de radio buttons |
| `<Select>` (Radix) | `select.tsx` | Select com portal Radix |
| `<Label>` | `label.tsx` | Label acessível |
| `<Form>` | `form.tsx` | Wrapper react-hook-form + zod |
| `<Switch>` | `switch.tsx` | Toggle on/off |
| `<Slider>` | `slider.tsx` | Slider range |
| `<InputOTP>` | `input-otp.tsx` | Input de código OTP |

#### Layout & Navegação

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `<Breadcrumb>` | `breadcrumb.tsx` | Breadcrumb shadcn primitivo |
| `<NavigationMenu>` | `navigation-menu.tsx` | Menu de navegação com submenus |
| `<Menubar>` | `menubar.tsx` | Barra de menu estilo desktop |
| `<Pagination>` | `pagination.tsx` | Paginação |
| `<Sidebar>` | `sidebar.tsx` | Sidebar responsiva |
| `<Sheet>` | `sheet.tsx` | Panel lateral (drawer mobile) |
| `<Tabs>` | `tabs.tsx` | Tabs Radix primitivo |

#### Data Display

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `<Card>` | `card.tsx` | Container de card |
| `<Badge>` | `badge.tsx` | Badge shadcn |
| `<Alert>` | `alert.tsx` | Alerta shadcn primitivo |
| `<Table>` | `table.tsx` | Tabela de dados |
| `<Calendar>` | `calendar.tsx` | Calendário (react-day-picker) |
| `<Carousel>` | `carousel.tsx` | Carousel (embla) |
| `<Progress>` | `progress.tsx` | Barra de progresso |
| `<Skeleton>` | `skeleton.tsx` | Loading skeleton |
| `<Chart>` | `chart.tsx` | Wrapper recharts |
| `<Avatar>` | `avatar.tsx` | Avatar com fallback |
| `<AspectRatio>` | `aspect-ratio.tsx` | Container com aspect ratio |

#### Overlays & Popovers

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `<Dialog>` | `dialog.tsx` | Dialog shadcn primitivo |
| `<AlertDialog>` | `alert-dialog.tsx` | Dialog de confirmação |
| `<Drawer>` | `drawer.tsx` | Drawer Vaul |
| `<Popover>` | `popover.tsx` | Popover com portal |
| `<HoverCard>` | `hover-card.tsx` | Card no hover |
| `<ContextMenu>` | `context-menu.tsx` | Menu de contexto (botão direito) |
| `<DropdownMenu>` | `dropdown-menu.tsx` | Dropdown menu |
| `<Tooltip>` | `tooltip.tsx` | Tooltip |
| `<Command>` | `command.tsx` | Command palette (cmdk) |

#### Feedback & Notificações

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `<Sonner>` | `sonner.tsx` | Toast com Sonner |
| `<Toast>` + `<Toaster>` | `toast.tsx` + `toaster.tsx` | Toast nativo |

#### Interativos

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `<Accordion>` | `accordion.tsx` | Accordion Radix |
| `<Toggle>` | `toggle.tsx` | Toggle button |
| `<ToggleGroup>` | `toggle-group.tsx` | Grupo de toggles |
| `<Collapsible>` | `collapsible.tsx` | Seção colapsável |

#### Utilitários

| Componente | Arquivo | Descrição |
|-----------|---------|-----------|
| `<ScrollArea>` | `scroll-area.tsx` | Área com scroll customizado |
| `<Separator>` | `separator.tsx` | Divisória visual |
| `<Resizable>` | `resizable.tsx` | Painéis redimensionáveis |

---

## Componentes de Seção (Projeto)

Localizados em `src/components/sections/` — usados exclusivamente na landing page do AIOX.

| Componente | Uso |
|-----------|-----|
| `HeroSection` | Hero com grid animado |
| `StatsSection` | 4 estatísticas com contadores animados |
| `FormatSection` | Cards de formato com staircase effect |
| `MonetizationSection` | Oportunidades de monetização |
| `PricingSection` | Planos de preço |
| `WaitlistSection` | CTA de waitlist |
| `TestimonialsSection` | Depoimentos |
| `FAQSection` | Perguntas frequentes (accordion) |

---

## Changelog de Migração

### JOU-48 (feat: clone shadcn/ui DS from dashboard-aiox-lovable)
- **47+ componentes shadcn/ui** clonados de `dashboard-aiox-lovable`
- **9 componentes Aiox*** criados (AioxButton, AioxInput, AioxSelect, AioxAlert, AioxTabs, AioxBreadcrumb, AioxLabel, AioxBadge, Modal)
- **35 dependências** de UI adicionadas (@radix-ui/*, class-variance-authority, etc.)
- Tokens `--bb-*` adicionados ao `globals.css`
- `tailwind.config.ts` atualizado com todas as classes utilitárias

### JOU-49 (fix: resolve ESLint errors in cloned components)
- Parâmetros não utilizados substituídos por `_`
- Interfaces vazias migradas para `type` aliases
- Todos os 47 componentes passando no ESLint sem warnings

---

## Regras de Uso

1. **Para nova UI**: prefira `Aiox*` sobre shadcn primitivos
2. **Para composição avançada**: use shadcn primitivos como base
3. **Tokens**: sempre use `--bb-*` em novo código, evite hardcode de cores
4. **Acessibilidade**: AioxTabs, AioxAlert, Modal já incluem ARIA nativo
5. **Formulários**: combine AioxLabel + AioxInput + AioxSelect para campos consistentes
