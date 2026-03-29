# Arquitetura de Componentes

> **Fonte:** `docs/fullstack-architecture.md` §4
> **Camada:** Frontend — React Components

## Hierarquia de Componentes

```
page.tsx (Server Component — orquestra layout)
  └── NavBar [Client] — sticky, scroll spy
  └── HeroSection (Server + Client motion)
  │     └── SectionHeader, Button (CTA primário), VideoLoop [Client, lazy]
  └── StatsSection [Client] — counters animados
  │     └── StatBlock × 4 (StatNumber + label)
  └── FormatSection (Server + motion variants)
  │     └── SectionHeader, RoundCard × 3 (Speed/Creative/Mystery)
  └── MonetizationSection (Server)
  │     └── SectionHeader, StatBlock × 3
  └── WhyBrazilSection (Server)
  │     └── SectionHeader, StatBlock × 4
  └── CtaSection [Client]
        └── SectionHeader, WaitlistForm (react-hook-form), SocialProof counter
```

## Átomos (`components/atoms/`)

| Componente | Descrição |
|-----------|-----------|
| `Button.tsx` | Variants: primary, secondary, ghost |
| `Badge.tsx` | Tags: "LIVE", "NOVO", "PRO", "SURPRESA" |
| `StatNumber.tsx` | Números animados (contadores) |
| `Chip.tsx` | Labels de formato/categoria |
| `Logo.tsx` | Logotipo da liga SVG |

## Moléculas (`components/molecules/`)

| Componente | Descrição |
|-----------|-----------|
| `WaitlistForm.tsx` | react-hook-form + zod + submit |
| `RoundCard.tsx` | Card de cada round (Speed/Creative/Mystery) |
| `StatBlock.tsx` | Ícone + número + label |
| `TestimonialCard.tsx` | Quote + avatar + nome |
| `NavBar.tsx` | Navigation sticky com scroll spy |
| `SectionHeader.tsx` | Eyebrow + headline + subheadline |

## Seções (`components/sections/`)

| Componente | Descrição |
|-----------|-----------|
| `HeroSection.tsx` | Headline + CTA primário + video/loop bg |
| `StatsSection.tsx` | 4 métricas animadas |
| `FormatSection.tsx` | 3 rounds com cards animados |
| `MonetizationSection.tsx` | Oportunidade para investidores |
| `WhyBrazilSection.tsx` | CazéTV, Kings League BR, LOUD/FURIA |
| `CtaSection.tsx` | Waitlist form + social proof |

## Política RSC (React Server Components)

| Componente | Tipo | Razão |
|-----------|------|-------|
| `page.tsx` | Server | Nenhuma interatividade necessária |
| `HeroSection` | Server + `'use client'` em VideoLoop | Conteúdo estático + video lazy |
| `StatsSection` | `'use client'` | Counter animation com useInView |
| `FormatSection` | Server | Cards estáticos com CSS animations |
| `MonetizationSection` | Server | Conteúdo puro |
| `WhyBrazilSection` | Server | Conteúdo puro |
| `CtaSection` | `'use client'` | Form state + submit |
| `NavBar` | `'use client'` | scroll listener |

**Regra:** Apenas componentes com estado, eventos ou browser APIs usam `'use client'`. Maximize RSC para bundle menor.
