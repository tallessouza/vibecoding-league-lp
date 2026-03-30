# AIOX Design System — Style Guide

> Visual language e tokens de design do DS shadcn/AIOX.
> Todos os tokens seguem o namespace `--bb-*` (brandbook).

---

## Arquitetura de Tokens

O DS usa uma estratégia de **3 camadas**:

```
Camada 1: Primitivos --bb-*        (valores concretos: #D1FF00, #050505)
    ↓
Camada 2: Semânticos               (--background, --primary, --card)
    ↓
Camada 3: Classes Tailwind         (bg-bb-lime, text-bb-cream, border-border)
```

---

## Paleta de Cores

### Cores Primárias

| Token | Valor | Uso |
|-------|-------|-----|
| `--bb-lime` | `#D1FF00` | Accent primário, CTAs, destaque neon |
| `--bb-cream` | `#F5F4E7` | Texto primário, headings |
| `--bb-dark` | `#050505` | Background base (quase preto) |

### Backgrounds / Superfícies

| Token | Valor | Uso |
|-------|-------|-----|
| `--bb-dark` | `#050505` | Background raiz |
| `--bb-surface` | `#0F0F11` | Cards, inputs, dropdowns |
| `--bb-surface-alt` | `#1C1E19` | Hover states, tabs ativas (smooth) |
| `--bb-surface-overlay` | `rgba(15,15,17,0.92)` | Overlays, tooltips com backdrop |

### Cores de Estado

| Token | Valor | Uso |
|-------|-------|-----|
| `--bb-blue` | `#0099FF` | Info, links secundários |
| `--bb-flare` | `#ED4609` | Warning, destaque de urgência |
| `--bb-error` | `#EF4444` | Erro, estado destrutivo |
| `--bb-dim` | `rgba(245,244,231,0.4)` | Texto secundário, placeholders, ícones inativos |

### Bordas

| Token | Valor | Uso |
|-------|-------|-----|
| `--bb-border` | `rgba(156,156,156,0.15)` | Bordas padrão (sutil) |
| `--bb-border-strong` | `#3D3D3D` | Bordas de separação visíveis |
| `--bb-border-hover` | `rgba(156,156,156,0.24)` | Hover sobre bordas |
| `--bb-border-input` | `rgba(156,156,156,0.2)` | Bordas de inputs/selects |

---

## Tokens Semânticos (shadcn)

Os primitivos `--bb-*` são mapeados para os tokens semânticos esperados pelo shadcn/ui:

```css
--background:         var(--bb-dark)
--foreground:         var(--bb-cream)
--card:               var(--bb-surface)
--card-foreground:    var(--bb-cream)
--primary:            var(--bb-lime)
--primary-foreground: var(--bb-dark)
--secondary:          var(--bb-surface-alt)
--accent:             rgba(209, 255, 0, 0.1)
--accent-foreground:  var(--bb-lime)
--destructive:        var(--bb-error)
--border:             var(--bb-border)
--input:              var(--bb-border-input)
--ring:               rgba(209, 255, 0, 0.4)
--muted:              var(--bb-surface)
--muted-foreground:   var(--bb-dim)
```

---

## Tipografia

### Famílias

| Token | Fonte | Uso |
|-------|-------|-----|
| `--font-bb-display` | `"TASA Orbiter"`, fallback Bebas Neue | Headings de destaque, hero |
| `--font-bb-sans` | `"Geist"`, fallback system-ui | Corpo de texto, UI geral |
| `--font-bb-mono` | `"Roboto Mono"` | Código, badges técnicos, tags |

### Classes Tailwind

```
font-display  → var(--font-bb-display)
font-sans     → var(--font-bb-sans)
font-mono     → var(--font-bb-mono)
```

### Escala de Tipo

| Token | Valor | Uso |
|-------|-------|-----|
| `--text-display` | `4rem` | Hero, títulos de seção impactantes |
| `--text-h1` | `2.5rem` | Headings de página |
| `--text-h2` | `1.5rem` | Subheadings de seção |
| `--text-body` | `1rem` | Corpo de texto padrão |
| `--text-small` | `0.8rem` | Legendas, notas, meta |

### Pesos

| Token | Valor | Classe Tailwind |
|-------|-------|-----------------|
| `--fw-regular` | `400` | `font-normal` |
| `--fw-medium` | `500` | `font-medium` |
| `--fw-semibold` | `600` | `font-semibold` |
| `--fw-bold` | `700` | `font-bold` |

---

## Espaçamento

### Escala Semântica

| Token | Valor | Equivalente px |
|-------|-------|---------------|
| `--spacing-xs` | `0.5rem` | 8px |
| `--spacing-sm` | `1rem` | 16px |
| `--spacing-md` | `2rem` | 32px |
| `--spacing-lg` | `3rem` | 48px |
| `--spacing-xl` | `4rem` | 64px |

### Escala Numérica (0–13)

| Token | Valor |
|-------|-------|
| `--space-0` | 0px |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-7` | 32px |
| `--space-8` | 40px |
| `--space-9` | 48px |
| `--space-10` | 64px |
| `--space-11` | 80px |
| `--space-12` | 120px |
| `--space-13` | 180px |

---

## Border Radius

| Token | Valor | Classe Tailwind |
|-------|-------|-----------------|
| `--bb-radius-sm` | `4px` | `rounded-sm` |
| `--bb-radius` | `0.5rem` | `rounded-md` |
| `--bb-radius-lg` | `12px` | `rounded-lg` |
| `--bb-radius-xl` | `16px` | `rounded-xl` |
| `--bb-radius-full` | `9999px` | `rounded-full` |

---

## Sombras e Glow

### Sombras (escurecimento)

| Classe Tailwind | Token | Valor |
|----------------|-------|-------|
| `shadow-aiox-sm` | `--aiox-shadow-sm` | `0 1px 3px rgba(0,0,0,0.6)` |
| `shadow-aiox` | `--aiox-shadow` | `0 4px 6px rgba(0,0,0,0.6)` |
| `shadow-aiox-md` | `--aiox-shadow-md` | `0 8px 16px rgba(0,0,0,0.6)` |
| `shadow-aiox-lg` | `--aiox-shadow-lg` | `0 16px 32px rgba(0,0,0,0.7)` |

### Glow (neon lime)

| Token | Valor | Uso |
|-------|-------|-----|
| `--aiox-shadow-glow` | `0 0 20px rgba(209,255,0,0.35)` | Botão primary padrão |
| `--aiox-shadow-glow-accent` | `0 0 20px rgba(209,255,0,0.2)` | Hover sutil em cards |
| `--neon-glow` | `0 0 20px rgba(209,255,0,0.5)` | Glow médio |
| `--lime-glow` | `0 0 30px rgba(209,255,0,0.6)` | Hover intenso em botão primary |
| `--lime-glow-soft` | `0 0 15px rgba(209,255,0,0.3)` | Efeito suave |

### Focus (acessibilidade)

| Token | Valor | Aplicação |
|-------|-------|-----------|
| `--focus-brand` | `0 0 0 2px #D1FF00` | Todos os componentes interativos (foco com teclado) |
| `--focus-neutral` | `0 0 0 2px rgba(245,244,231,0.6)` | Componentes sobre fundo lime |

---

## Motion / Animação

### Curvas de Easing

| Token | Valor | Uso |
|-------|-------|-----|
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Entradas com bounce suave |
| `--ease-smooth` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Transições de UI gerais |
| `--ease-decel` | `cubic-bezier(0, 0, 0.2, 1)` | Saídas, dismiss |

---

## Z-Index Layers

| Token | Uso |
|-------|-----|
| `--layer-modal` | Modal dialogs |
| `--layer-overlay` | Overlays de backdrop |
| `--layer-dropdown` | Dropdowns, popovers |
| `--layer-sticky` | Headers, sidebars fixos |

---

## Tokens Legacy (--aiox-*)

Para retrocompatibilidade, todos os tokens `--aiox-*` continuam funcionando como aliases:

```css
--aiox-primary    → var(--bb-lime)
--aiox-background → var(--bb-dark)
--aiox-surface    → var(--bb-surface)
--aiox-text       → var(--bb-cream)
--aiox-success    → #10b981   (sem alias --bb-* equivalente)
--aiox-warning    → #F59E0B   (sem alias --bb-* equivalente)
```

> **Nota:** Prefira sempre o namespace `--bb-*` em código novo. Os aliases `--aiox-*` existem apenas para não quebrar componentes legados.

---

## Uso em Tailwind

O `tailwind.config.ts` mapeia todos os tokens para classes utilitárias:

```tsx
// Cores
<div className="bg-bb-dark text-bb-cream">
<span className="text-bb-lime">
<button className="bg-bb-surface border-border">

// Sombras
<div className="shadow-aiox-glow">

// Tipografia
<h1 className="font-display text-display">
<p className="font-sans text-body">
```
