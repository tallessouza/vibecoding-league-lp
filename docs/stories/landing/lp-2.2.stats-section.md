# Story LP-2.2: Stats Section — Counters Animados

## Status

Ready for Review

## Executor Assignment

```
executor: "@dev"
quality_gate: "@qa"
quality_gate_tools: ["manual-review", "visual-testing"]
```

## Story

**As a** visitante da landing page,
**I want** ver os números que comprovam a escala do vibecoding competitivo,
**so that** entenda a dimensão da oportunidade e ganhe confiança no projeto.

## Acceptance Criteria

1. Seção com `id="stats"` exibe 4 métricas principais em cards
2. As 4 métricas são: **8 Competições** (realizadas em 2025-2026), **$700k+** (em prêmios AWS), **14B** (impressões Kings League), **150k+** (posts mensais no X)
3. Counters animam do zero até o valor final quando entram na viewport (Intersection Observer)
4. Cada métrica tem: número em destaque, label descritivo e ícone ou emoji representativo
5. Layout responsivo: 2 colunas em mobile, 4 colunas em desktop
6. Seção tem título: "Os números que provam a oportunidade"

## 🤖 CodeRabbit Integration

> **CodeRabbit Integration**: Disabled
>
> CodeRabbit CLI is not enabled in `core-config.yaml`.
> Quality validation will use manual review process only.

## Tasks / Subtasks

- [x] Criar componente `StatsSection` em `components/sections/StatsSection.tsx` (AC: 1, 4, 5, 6)
  - [x] Grid responsivo: `grid-cols-2 lg:grid-cols-4`
  - [x] Card por métrica: número, label, ícone
  - [x] Título da seção
- [x] Implementar hook `useCountUp` (AC: 3)
  - [x] Hook customizado: `useCountUp(target: number, duration: number)`
  - [x] Ativar via Intersection Observer quando elemento entra na viewport
  - [x] Animação com `requestAnimationFrame` (sem dependência externa)
- [x] Definir dados das métricas (AC: 2)
  - [x] Array de objetos: `{ value, suffix, label, icon }`
  - [x] Valores: 8 (competições), 700000 (prêmios $), 14000000000 (impressões), 150000 (posts)
  - [x] Formatar com abreviações: K, M, B
- [x] Integrar em `app/page.tsx`
  - [x] Importar e renderizar `<StatsSection />` após `<HeroSection />`

## Dev Notes

### Dados das Métricas

Fonte: contexto do projeto (JOU-9) e pesquisa sobre o mercado:
- **8 competições**: Vibe Olympics, AWS Global Vibe Hackathon, RALLY Out-Of-Ctrl, etc.
- **$700k+**: AWS Global Vibe Hackathon em prêmios totais
- **14B impressões**: Kings League em 12 meses (referência do playbook)
- **150k+ posts/mês**: Volume no X sobre "vibe coding"

### Hook useCountUp

```typescript
// Implementação sugerida
function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Animação com requestAnimationFrame
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}
```

### Acessibilidade

- Números com `aria-label` descritivo (ex: "8 competições realizadas")
- Respeitar `prefers-reduced-motion` — mostrar valor final diretamente sem animação

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Story criada para landing page Vibecoding Competitivo | River (@sm) |
| 2026-03-29 | 1.1 | Implementado: StatsSection + useCountUp hook, build ✅ | Dex (@dev) |
