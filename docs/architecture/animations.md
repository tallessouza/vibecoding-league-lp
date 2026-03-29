# Estratégia de Animações — framer-motion + AIOX Motion

> **Fonte:** `docs/fullstack-architecture.md` §5
> **Camada:** Frontend — Motion Layer

## Variantes Padrão (`lib/motion.ts`)

| Variante | Uso | Descrição |
|---------|-----|-----------|
| `fadeInUp` | Seções, cards | Entrada por baixo, padrão para seções |
| `staggerContainer` | Listas, grids | Stagger de filhos sequencial |
| `cardHover` | Cards interativos | Lift + glow no hover |
| `counterVariant` | StatsSection | Entrada com scale para números |
| `heroText` | HeroSection | Entrada cinematográfica com blur |

## Padrão de Uso (Viewport Trigger)

```typescript
// Animações trigadas via viewport — evita disparar acima da dobra durante SSG hydration
<motion.section
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={fadeInUp}>
      {/* conteúdo */}
    </motion.div>
  ))}
</motion.section>
```

## Considerações de Performance

- `LazyMotion` com `domAnimation` feature pack (reduz bundle framer-motion em ~70%)
- `will-change: transform` apenas em elementos com animação contínua
- `prefers-reduced-motion` respeitado via `useReducedMotion()` hook
- Animações CSS puras para elementos decorativos (não bloqueia JS thread)
