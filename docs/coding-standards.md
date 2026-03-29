# Coding Standards — Vibecoding Competitivo Landing Page

> **Gerado por:** Pax (@po) — [JOU-16](/JOU/issues/JOU-16)
> **Data:** 2026-03-29
> **Baseado em:** `docs/fullstack-architecture.md` + AIOX Framework conventions

## 1. TypeScript

### Configuração
- `strict: true` em `tsconfig.json` — sem exceções
- `noImplicitAny: true`
- `exactOptionalPropertyTypes: true`

### Convenções
```typescript
// ✅ Tipos explícitos em props de componentes
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  children: React.ReactNode
  onClick?: () => void
}

// ✅ Evitar `any` — usar `unknown` quando necessário
function handleError(error: unknown) {
  if (error instanceof Error) console.error(error.message)
}

// ❌ Nunca usar `as any`
const data = response as any // PROIBIDO
```

## 2. Componentes React

### React Server Components (RSC) First
```typescript
// ✅ Padrão: Server Component (sem 'use client')
export default function FormatSection() {
  return <section>...</section>
}

// ✅ Client Component apenas quando necessário
'use client'
export function StatsSection() {
  const [count, setCount] = useState(0)
  // ...
}

// ❌ Não adicionar 'use client' desnecessariamente
```

### Nomenclatura
- Componentes: **PascalCase** (`HeroSection`, `WaitlistForm`)
- Hooks: **camelCase** com prefixo `use` (`useScrollSpy`, `useCounter`)
- Utilitários: **camelCase** (`formatNumber`, `cn`)
- Constantes: **UPPER_SNAKE_CASE** (`MAX_RETRIES`, `GA4_MEASUREMENT_ID`)

### Props
```typescript
// ✅ Props interface sempre nomeada (não inline)
interface StatBlockProps {
  value: string
  label: string
  icon?: React.ReactNode
}

// ✅ Desestruturar props
export function StatBlock({ value, label, icon }: StatBlockProps) {
  // ...
}
```

## 3. Styling — Tailwind CSS

### Organização de Classes
```typescript
// ✅ Ordem: layout → spacing → typography → visual → interactive
<button className="
  flex items-center justify-center
  px-6 py-3
  text-sm font-semibold
  bg-brand-primary text-surface-base rounded-button
  transition-colors duration-base hover:opacity-90
  focus-visible:outline-2 focus-visible:outline-offset-2
">

// ✅ Usar `cn()` para condicionais (clsx/tailwind-merge)
import { cn } from '@/lib/utils'
<div className={cn('base-classes', isActive && 'active-classes')} />
```

### Tokens em vez de valores hardcoded
```typescript
// ✅ Usar tokens AIOX
<div className="bg-surface-base text-text-primary" />

// ❌ Nunca hardcodar cores
<div className="bg-[#050505] text-white" /> // EVITAR
```

## 4. Animações (framer-motion)

### Sempre usar variantes do `lib/motion.ts`
```typescript
import { fadeInUp, staggerContainer } from '@/lib/motion'

// ✅ viewport trigger (não mount trigger)
<motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
```

### Respeitar preferências de acessibilidade
```typescript
import { useReducedMotion } from 'framer-motion'

export function AnimatedSection({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion()
  // Usar variantes simplificadas se shouldReduce === true
}
```

## 5. Forms (react-hook-form + zod)

```typescript
// ✅ Schema zod sempre em lib/validations.ts
export const waitlistSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  interestType: z.enum(['Competidor', 'Investidor', 'Fã', 'Parceiro de Mídia']),
  _honeypot: z.string().max(0, 'Bot detectado'), // spam prevention
})

// ✅ Hook no componente
const { register, handleSubmit, formState: { errors } } = useForm<WaitlistFormData>({
  resolver: zodResolver(waitlistSchema),
})
```

## 6. Analytics (`lib/analytics.ts`)

```typescript
// ✅ Sempre verificar se gtag está disponível
export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params)
  }
}

// ✅ Nomes de eventos em snake_case
trackEvent('cta_click', { origin: 'hero' })
trackEvent('waitlist_submit', { interest_type: 'Competidor' })
```

## 7. Acessibilidade

- Todo elemento interativo deve ter `aria-label` ou texto visível
- Imagens decorativas: `alt=""`
- Imagens informativas: `alt` descritivo e específico
- Forms: `<label htmlFor="...">` explícito (nunca só placeholder)
- Focus visível: não remover `outline` sem substituir por alternativa visível

## 8. Estrutura de Arquivos

```
// ✅ Um componente por arquivo
// ✅ Nome do arquivo = nome do componente
// components/sections/HeroSection.tsx → export default function HeroSection()

// ✅ Index barrel apenas para camadas
// components/atoms/index.ts
export { Button } from './Button'
export { Badge } from './Badge'
```

## 9. Git Commits

Seguir Conventional Commits:
```
feat: implement HeroSection with video background [Story 2.1]
fix: correct CLS issue in StatsSection counter animation
perf: lazy load VideoLoop component
a11y: add aria-labels to NavBar links
```

## 10. Testes

```typescript
// ✅ Testes unitários para componentes com lógica
describe('WaitlistForm', () => {
  it('validates email format', async () => {
    // render → fill → submit → assert error
  })

  it('shows success message after valid submit', async () => {
    // mock fetch → render → fill → submit → assert success
  })
})

// ✅ Testes E2E para fluxo crítico
test('waitlist signup flow', async ({ page }) => {
  await page.goto('/')
  await page.fill('[name="email"]', 'test@example.com')
  await page.click('[data-testid="submit-btn"]')
  await expect(page.locator('[data-testid="success-msg"]')).toBeVisible()
})
```
