# Frontend Spec — Vibecoding Competitivo Landing Page

## Documento de Referência

| Campo | Valor |
|-------|-------|
| Versão | 1.0 |
| Data | 2026-03-29 |
| Autora | Uma (@ux-design-expert) |
| Issue | [JOU-13](/JOU/issues/JOU-13) |
| PRD | [docs/prd.md](./prd.md) |
| Design System | https://brand.aioxsquad.ai/brandbook |

---

## 1. Identidade Visual — Tema Competitivo

### Conceito

**Dark Cockpit Edition** — Sistema de alta contraste inspirado em cockpits de arena esportiva. Base neutra preta, accent lime terminal-neon, tipografia impactante. Referências visuais: Kings League (preto + accent vivo), DevWars (Twitch dark mode), arenas de esports.

### Paleta de Cores

```css
/* === CORES PRIMÁRIAS === */
--bb-dark:    #050505;    /* Background da página — near-black base */
--bb-surface: #0F0F11;    /* Cards, painéis, header elevado */
--bb-lime:    #D1FF00;    /* Accent primário — CTAs, estados ativos, destaques */
--bb-cream:   rgb(244,244,232); /* Texto primário — off-white quente */

/* === TEXTO === */
--bb-dim:     rgba(245,244,231,0.4);  /* Texto secundário — labels, descrições */
--bb-muted:   oklch(0.7952 0 0);      /* Texto terciário — metadados */

/* === BORDAS === */
--bb-border:        rgba(156,156,156,0.15);  /* Borda padrão */
--bb-border-soft:   rgba(156,156,156,0.10);  /* Divisores sutis */
--bb-border-strong: rgba(156,156,156,0.25);  /* Borda ativa */
--bb-border-input:  rgba(156,156,156,0.20);  /* Campos de formulário */

/* === ACCENT SECUNDÁRIO === */
--bb-blue:  #0099FF;   /* Info — links, destaques interativos */
--bb-flare: #ED4609;   /* Warm accent — alertas, badges, ênfase */
--bb-error: #EF4444;   /* Erro e ação destrutiva */

/* === ACCENT OPACITY LADDER (lime glow) === */
--bb-accent-08: rgba(209,255,0,0.08);   /* Glow sutil */
--bb-accent-12: rgba(209,255,0,0.12);   /* Hover de card */
--bb-accent-20: rgba(209,255,0,0.20);   /* Hover forte */
--bb-accent-40: rgba(209,255,0,0.40);   /* Focus ring */
```

### Pares de Contraste Aprovados

| Par | Uso | Contraste WCAG |
|-----|-----|----------------|
| `--bb-lime` on `--bb-dark` | CTAs principais | AA ✅ |
| `--bb-cream` on `--bb-dark` | Texto corpo | AA ✅ |
| `--bb-dark` on `--bb-lime` | Texto em botão lime | AA ✅ |
| `--bb-blue` on `--bb-dark` | Links de info | AA ✅ |
| `--bb-cream` on `--bb-surface` | Texto em cards | AA ✅ |

### Mapeamento shadcn/ui → Tokens AIOX

```css
--background:          var(--bb-dark);
--foreground:          var(--bb-cream);
--primary:             var(--bb-lime);
--primary-foreground:  var(--bb-dark);
--secondary:           var(--bb-surface-alt);
--muted:               var(--bb-surface-panel);
--muted-foreground:    var(--bb-dim);
--accent:              var(--bb-accent-10);
--accent-foreground:   var(--bb-lime);
--destructive:         var(--bb-error);
--border:              var(--bb-border);
--input:               var(--bb-border-input);
--ring:                var(--bb-accent-40);
--card:                var(--bb-surface);
--card-foreground:     var(--bb-cream);
```

---

## 2. Tipografia

### Famílias de Fonte

| Token | Fonte | Peso | Uso |
|-------|-------|------|-----|
| `--font-bb-display` | TASAOrbiter | 800 (Black) | H1–H4, headlines de impacto, seção hero |
| `--font-bb-sans` | Geist | 400–700 | Body, UI, labels, parágrafos |
| `--font-bb-mono` | Roboto Mono | 400–500 | Números de stat, labels HUD, nav, código |

### Escala Tipográfica

| Token | Tamanho | Uso na LP |
|-------|---------|-----------|
| Display | 4rem / clamp(2.2rem, 7vw, 6.5rem) | Headline hero |
| H1 | 2.5rem | Headline por seção |
| H2 | 1.5rem | Subtítulos, nomes de round |
| Body | 1rem | Parágrafos, descrições |
| Small | 0.8rem | Textos de suporte, tooltips |
| Label | 0.65rem | Labels HUD, navegação, status |
| Micro | 0.6rem | Footer meta, refs |

### Sistema Mono Label (padrão recorrente)

```css
font-family: Roboto Mono;
font-size: 10-11px;
text-transform: uppercase;
letter-spacing: 0.15em – 0.2em;
font-weight: 400-700;
```

Usado em: números de seção `[01]`, labels descritivos `Label_`, contadores de stats.

---

## 3. Espaçamento e Layout

### Tokens de Espaçamento

```css
--spacing-xs: 0.5rem  /* 8px  — micro UI, gaps inline */
--spacing-sm: 1rem    /* 16px — componentes, padding de botões */
--spacing-md: 2rem    /* 32px — card padding, gaps de form */
--spacing-lg: 3rem    /* 48px — section padding, grid gaps */
--spacing-xl: 4rem    /* 64px — hero spacing, editorial blocks */
```

### Escala Numérica de Espaço

| Token | Valor | Aplicação |
|-------|-------|-----------|
| `--space-0` | 0px | Reset |
| `--space-4` | 15px | Ícones, badges |
| `--space-5` | 20px | Padding interno de botões |
| `--space-6` | 30px | Padding de cards |
| `--space-7` | 40px | Gap entre cards em grid |
| `--space-8` | 60px | Padding de seção desktop |
| `--space-9` | 80px | Margens de seção |
| `--space-11` | 120px | Padding de hero |
| `--space-12` | 150px | Blocos editoriais grandes |

### Breakpoints

```css
--bp-mobile:  767px  /* max-width */
--bp-tablet:  768px  /* min-width */
--bp-desktop: 1200px /* min-width */
```

Regra de implementação: **mobile-first**, 320px mínimo.

### Z-Index Stack

```css
--layer-nav:      100  /* Header sticky */
--layer-dropdown: 200  /* Dropdowns, tooltips */
--layer-overlay:  300  /* Overlays de backdrop */
--layer-modal:    400  /* Modais, drawers */
--layer-toast:    500  /* Notificações toast */
```

---

## 4. Motion & Animações

### Curvas de Easing

```css
--bb-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);  /* Entrada com overshoot — cards, modais */
--bb-ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);   /* Padrão — transições gerais */
--bb-ease-decel:  cubic-bezier(0, 0, 0.2, 1);          /* Landing suave — elementos entrando */
--bb-ease-accel:  cubic-bezier(0.4, 0, 1, 1);          /* Saída rápida — elementos saindo */
```

### Durações

```css
--bb-dur-fast:   0.2s  /* Microinterações, hover states */
--bb-dur-medium: 0.4s  /* Transições de estado, botões */
--bb-dur-slow:   0.7s  /* Revela de seção, hero */
```

### Framer Motion — Padrões para a LP

```tsx
// Fade-up (padrão para revela on-scroll — usar em TODAS as seções)
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7, ease: [0, 0, 0.2, 1] }}

// Stagger de filhos (cards de rounds, stats)
transition={{ delay: i * 0.08, duration: 0.6 }}

// Hero — Brand Reveal (3s)
// Black blinds slide open from center + AIOX com scale + glow
// Usar no logotipo / marca da LP no hero

// Counter de números (Stats section)
// useMotionValue + useTransform com spring
transition={{ type: "spring", stiffness: 60, damping: 20 }}
```

### Ticker CSS (Logo Bar + Padrões Recorrentes)

```css
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes ticker-reverse {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
/* Duração: 30s linear infinite — duplicar array 3x */
```

---

## 5. Componentes AIOX — Mapeamento por Seção

### 5.1 Componentes Base Reutilizáveis

#### `SectionShell`
```
variant: 'dark'  ← Hero, Stats, Format, Monetization, Footer
variant: 'light' ← Why Brazil (se necessário contraste)
padding: py-24 md:py-32
max-width: 1400px
dark bg: --bb-dark (#050505)
```

#### `SectionHeader`
```
Usar em TODAS as seções — pattern: [01] Headline da seção _
font: Roboto Mono 11px, tracking 0.2em
number color (dark): --bb-lime
label color (dark): white/40
margin-bottom: mb-14 (3.5rem)
```

#### `AccentButton`
```
variant: 'lime'   ← CTA primário "Quero Participar"
variant: 'ghost'  ← CTAs secundários
arrow: true       ← glyph ↗
text: 11px bold uppercase tracking-[0.15em]
min-width: 200px
```

#### `StatCard`
```
size: 'lg'           ← Stats section (números grandes)
size: 'md'           ← Sidebar ou uso compacto
variant: 'lime'      ← Número animado com accent neon
variant: 'dark'      ← Cards em background dark
```

---

## 6. Wireframes Textuais por Seção

### Seção 0: Header (Sticky)
```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO] Vibecoding Competitivo          [Entrar na Waitlist ↗]│
│  Roboto Mono 10px white/50             AccentButton lime      │
└─────────────────────────────────────────────────────────────┘

Tokens:
  bg: --bb-dark/95 + backdrop-blur-sm
  border-b: --bb-border
  position: fixed, z: --layer-nav (100)
  height: ~64px

Componentes AIOX:
  - Navbar (pattern existente)
  - AccentButton variant='lime' para CTA

Comportamento:
  - bg opaco ao scroll (transition smooth 0.3s)
  - logo: texto bold ou SVG branco h-5
  - botão "Entrar na Waitlist" → scroll suave para #waitlist
  - responsivo: logo + botão em mobile (sem tagline)
```

---

### Seção 1: Hero
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   [ 01 ] Vibecoding Competitivo _                           │
│                                                             │
│   VIBECODING                     ╔══════════════════╗      │
│   COMPETITIVO:                   ║                  ║      │
│   O Próximo                      ║  Video / Animação║      │
│   Esporte Digital.               ║  16:10 aspect    ║      │
│                                  ║  ▶ play 90s      ║      │
│   Duelos ao vivo com IA.         ╚══════════════════╝      │
│   Programadores. Arena.                                     │
│   Prêmios reais.                                            │
│                                                             │
│   [Quero Participar ↗]                                      │
│                                                             │
│ "AI" watermark: 45vw, opacity white/4%, translate-y 30%     │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│ ●●● Python  ChatGPT  VS Code  GitHub  Claude  Cursor ●●● → │
│ Logo Ticker animado — bg: --bb-cream/5, border-t            │
└─────────────────────────────────────────────────────────────┘

Tokens:
  bg: --bb-dark
  headline: --font-bb-display 800, clamp(2.2rem, 7vw, 6.5rem)
  font-weight: 900, leading: 0.92, tracking: -0.02em
  lime brackets: [Vibecoding] [Competitivo] em --bb-lime
  subheadline: --font-bb-sans, 1rem, --bb-dim
  height: min-h-screen
  content align: justify-end pb-12 md:pb-20
  grid: md:grid-cols-[1fr_1fr]

Componentes AIOX:
  - SectionShell variant='dark' fullBleed
  - SectionHeader [01]
  - AccentButton variant='lime' "Quero Participar"
  - Logo Ticker (Cursor, VS Code, Claude, ChatGPT, etc.)
  - HeroSection pattern do brandbook

Motion:
  - Brand Reveal 3s no logotipo
  - Headline: fade-up duration 0.6s
  - Video preview: scale 0.97→1 delay 0.3s
  - Ticker: animate-ticker 30s linear infinite

Conteúdo:
  Headline: "Vibecoding Competitivo: O Próximo Esporte Digital"
  Subheadline: "Programadores usam IA em duelos ao vivo.
                Builds em tempo real. Público. Prêmios reais."
  CTA: "Quero Participar" → #waitlist
  Ticker: ferramentas de vibe coding (Cursor, Claude, GitHub Copilot...)
```

---

### Seção 2: Stats
```
┌─────────────────────────────────────────────────────────────┐
│   [ 02 ] Números que provam o mercado _                     │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ 8+       │  │ $700K+   │  │ 14B      │  │ 50M      │   │
│  │Competições│  │ Em Prêmios│  │Impressões│  │ Viewers  │   │
│  │realizadas │  │ globais   │  │Kings Lge │  │ CazéTV   │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                             │
│  "A oportunidade existe. O mercado está provado.            │
│   Falta o formato certo para o Brasil."                     │
└─────────────────────────────────────────────────────────────┘

Tokens:
  bg: --bb-dark
  stat value: --font-bb-display 800, text-[3.5rem] md:text-[4.5rem]
  stat value color: --bb-lime (variant lime)
  stat label: Roboto Mono 10px, tracking 0.2em, white/40
  card border: --bb-border
  card bg: --bb-surface

Grid:
  desktop: grid-cols-4
  tablet: grid-cols-2
  mobile: grid-cols-2

Componentes AIOX:
  - SectionShell variant='dark'
  - SectionHeader [02]
  - StatCard size='lg' variant='lime' (×4)
  - QuoteBlock variant='dark' (citação opcional)

Motion:
  - Counter animation: Intersection Observer → número de 0 ao valor final
  - useMotionValue + useTransform com --bb-ease-spring
  - Stagger entre cards: delay i*0.1s
  - Cards: fade-up on viewport

Notas WCAG:
  - Números visíveis sem JS (SSR/SSG) — JS só adiciona a animação
  - Contraste lime on dark ✅ AA
```

---

### Seção 3: Format (3 Rounds)
```
┌─────────────────────────────────────────────────────────────┐
│   [ 03 ] Como funciona a competição _                       │
│                                                             │
│   De primeiro build ao campeão — 3 rounds, 1 vencedor.     │
│                                                             │
│  ┌─────────────────┐  ┌─────────────────┐  ┌────────────────┐
│  │ Round 1          │  │ Round 2          │  │ Round 3   🔥  │
│  │ Speed Build      │  │ Creative Build   │  │ Mystery Twist │
│  │ 15-20 min        │  │ 30-40 min        │  │ 15-20 min     │
│  │                  │  │                  │  │               │
│  │ "Construa mais   │  │ "Demonstre       │  │ "Regra oculta │
│  │ rápido."         │  │ criatividade."   │  │ revelada ao   │
│  │                  │  │                  │  │ vivo."        │
│  │ [ 01 ]           │  │ [ 02 ]           │  │ [SURPRESA ⚡]  │
│  └────────┬─────────┘  └────────┬─────────┘  └──────────────┘
│           └────────────────────┘
│                  Timeline progress bar
│           ══════════════════════════
└─────────────────────────────────────────────────────────────┘

Tokens:
  bg: --bb-surface (levemente elevado sobre dark)
  card bg: --bb-dark, border: --bb-border
  round title: --font-bb-display 800, 1.5rem, --bb-cream
  round num: Roboto Mono 10px, --bb-lime
  duration: Roboto Mono 0.65rem, --bb-dim
  description: --font-bb-sans 1rem, --bb-dim
  mystery badge bg: --bb-flare (#ED4609)
  mystery badge text: white, 10px mono uppercase
  timeline bar: --bb-lime, h-0.5

Grid:
  desktop: grid-cols-3, gap-8
  mobile: grid-cols-1 (stack vertical)

Componentes AIOX:
  - SectionShell variant='dark'
  - SectionHeader [03]
  - Cards customizados (padrão Services com bordas)
  - AccentButton variant='ghost' "Ver regras completas ↗" (opcional)
  - Badge customizado para Mystery Twist (--bb-flare bg)

Motion:
  - Cards aparecem sequencialmente (stagger delay 0.15s por card)
  - whileInView fade-up + slide-in da esquerda
  - Timeline progress bar: width 0→100% ao entrar no viewport
  - Hover: card border vira --bb-border-strong + sutil lime glow

Conteúdo:
  Round 1: "Speed Build" 15-20min — Construa uma aplicação funcional
            em tempo recorde. Velocidade e execução acima de tudo.
  Round 2: "Creative Build" 30-40min — Use IA de formas inesperadas.
            Criatividade e originalidade valem tanto quanto funcionalidade.
  Round 3: "Mystery Twist" 15-20min — Uma restrição secreta é revelada
            ao vivo. Adaptabilidade decide o campeão.
```

---

### Seção 4: Monetization
```
┌─────────────────────────────────────────────────────────────┐
│   [ 04 ] O modelo de negócio _                              │
│                                                             │
│   Por que investidores já estão olhando para isso.          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  65-70%                                              │   │
│  │  Patrocínios      ██████████████████████░░░░░░      │   │
│  │  "Modelo Kings League. Marcas tech querem público    │   │
│  │  de desenvolvedores jovens e com alto poder de       │   │
│  │  compra."                                            │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  US$2.8B                                             │   │
│  │  Apostas Esportivas   ████████████░░░░░░░░░░░░      │   │
│  │  "Maior segmento do esports. Audiência ativa e       │   │
│  │  engajada pelo produto."                             │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  ∞ Potencial                                         │   │
│  │  Streaming & Co-streaming  ██████░░░░░░░░░░░░░░      │   │
│  │  "CazéTV + Twitch + YouTube. Co-streaming multiplica │   │
│  │  o alcance sem custo proporcional."                  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

Tokens:
  bg: --bb-dark
  pillar value: --font-bb-display 800, 2.5rem, --bb-lime
  pillar label: Roboto Mono 11px, --bb-cream uppercase
  progress bar fill: --bb-lime
  progress bar track: --bb-surface-alt
  description: --font-bb-sans 0.9rem, --bb-dim
  divider: --bb-border
  card bg: --bb-surface, border: --bb-border

Layout:
  desktop: 3 itens em tabela vertical (Services table pattern)
  mobile: stack vertical, cada pilar full-width

Componentes AIOX:
  - SectionShell variant='dark'
  - SectionHeader [04]
  - StatCard size='lg' variant='lime' para os valores de destaque
  - Barra de progresso customizada (Progress w/ --bb-lime fill)
  - Services table pattern adaptado

Motion:
  - Progress bars animam de 0→width ao entrar no viewport
  - --bb-ease-decel, duration 0.9s, stagger 0.2s por pilar
  - Valores: fade-up com delay escalonado
  - Hover row: bg sutil --bb-accent-05
```

---

### Seção 5: Why Brazil
```
┌─────────────────────────────────────────────────────────────┐
│   [ 05 ] Por que o Brasil _                                 │
│                                                             │
│   O mercado piloto perfeito já existe. Só faltava o formato.│
│                                                             │
│  ┌──────────────────────────┐  ┌──────────────────────────┐ │
│  │ 50M                      │  │ Kings League BR           │ │
│  │ Viewers CazéTV           │  │ Kaká + Neymar validaram   │ │
│  │ Olímpico 2024.           │  │ o modelo esportivo        │ │
│  │ Maior audiência digital  │  │ gamificado no Brasil.     │ │
│  │ da história do Brasil.   │  │                           │ │
│  └──────────────────────────┘  └──────────────────────────┘ │
│                                                             │
│  ┌──────────────────────────┐  ┌──────────────────────────┐ │
│  │ LOUD / FURIA             │  │ Comunidades Ativas        │ │
│  │ Orgs BR com monetização  │  │ Vibe coders ativos no     │ │
│  │ tier mundial. Blueprints │  │ Brasil. Hackathons mensais│ │
│  │ de audiência e fãs.      │  │ DevGames, FIAP, USP.     │ │
│  └──────────────────────────┘  └──────────────────────────┘ │
│                                                             │
│  "Brasil não é um experimento. É o trampolim."             │
└─────────────────────────────────────────────────────────────┘

Tokens:
  bg: --bb-dark (manter consistência dark/energética)
  stat value: --font-bb-display 800, 2rem, --bb-lime
  stat label: Roboto Mono 11px, --bb-cream
  description: --font-bb-sans 0.85rem, --bb-dim
  card bg: --bb-surface, border: --bb-border
  quote: --font-bb-sans italic, --bb-cream, text-xl
  quote accent border-left: --bb-lime, 3px

Grid:
  desktop: grid-cols-2, gap-px bg-white/[0.06] (hairline grid pattern)
  mobile: grid-cols-1

Componentes AIOX:
  - SectionShell variant='dark'
  - SectionHeader [05]
  - StatCard size='md' variant='lime' (×4)
  - QuoteBlock variant='dark' para citação final
  - Hairline Grid pattern (gap-px)

Motion:
  - Grid de cards: stagger whileInView fade-up delay i*0.12
  - QuoteBlock: fade-in delay 0.5s
  - Hover card: --bb-border-hover + scale(1.01) sutil
```

---

### Seção 6: CTA / Waitlist
```
┌─────────────────────────────────────────────────────────────┐
│   [ 06 ] Seja o primeiro _                                  │
│                                                             │
│   A liga ainda não existe. Você pode moldar ela.            │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │  Nome *                                             │   │
│  │  ┌──────────────────────────────────────────────┐  │   │
│  │  └──────────────────────────────────────────────┘  │   │
│  │                                                     │   │
│  │  Email *                                            │   │
│  │  ┌──────────────────────────────────────────────┐  │   │
│  │  └──────────────────────────────────────────────┘  │   │
│  │                                                     │   │
│  │  Sou um... *                                        │   │
│  │  ┌──────────────────────────────────────────────┐  │   │
│  │  │ ▾ Competidor / Investidor / Fã / Parceiro    │  │   │
│  │  └──────────────────────────────────────────────┘  │   │
│  │                                                     │   │
│  │  [input hidden honeypot — display:none]             │   │
│  │                                                     │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │         Entrar na Waitlist ↗                │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  │                                                     │   │
│  │  ✅ "Você está na lista. Entraremos em contato."    │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘

Tokens:
  section bg: --bb-dark (fundo contrastante máximo)
  form container bg: --bb-surface, border: --bb-border
  label: Roboto Mono 10px bold uppercase, --bb-cream, tracking 0.15em
  input bg: transparent, border: --bb-border-input
  input focus border: --bb-lime
  input focus ring: --bb-accent-40
  input text: --bb-cream, --font-bb-sans
  placeholder: --bb-dim
  submit btn: AccentButton variant='lime', full-width
  submit btn loading: spinner + "Enviando..."
  success msg: --bb-lime, Roboto Mono 11px
  error msg: --bb-error

Form Fields:
  Nome    (text, required)
  Email   (email, required)
  Tipo    (select: Competidor | Investidor | Fã | Parceiro de Mídia, required)
  [hp]    (text, display:none, aria-hidden, tabindex=-1) ← honeypot spam

Grid:
  desktop: max-w-xl centered (formulário focal)
  mobile: full-width, padding --spacing-md

Componentes AIOX:
  - SectionShell variant='dark' fullBleed
  - SectionHeader [06]
  - AccentButton variant='lime' arrow=true (submit)
  - Input/Select com shadcn/ui mapeado para tokens AIOX
  - BookCallSection pattern (adaptado para waitlist)

Comportamento:
  - Submit: POST para Supabase (sem reload)
  - Loading state no botão durante envio
  - Success: mensagem inline, botão desabilitado
  - Error: mensagem genérica (sem expor stack)
  - Honeypot: campo oculto, backend rejeita se preenchido

Motion:
  - Formulário: fade-up on-load
  - Submit hover: scale(1.02) + lime glow intensifica
  - Success message: slide-down fade-in
  - Focus nos inputs: border-color transition 0.2s

WCAG:
  - Labels explícitos (não apenas placeholder)
  - aria-required="true" em campos obrigatórios
  - aria-describedby para mensagens de erro
  - Contraste lime on dark no botão ✅ AA
```

---

## 7. Fluxo de Alternância Dark/Light

Para a LP do Vibecoding Competitivo, mantemos **predominantemente dark** para manter a energia competitiva. Exceção opcional: Why Brazil pode usar `variant='light'` para respiro visual.

| Seção | Background | Justificativa |
|-------|-----------|---------------|
| Header | `--bb-dark/95` blur | Fixo, invisível mas presente |
| Hero | `--bb-dark` | Impacto máximo, imersão |
| Stats | `--bb-dark` | Números lime em dark = máximo contraste |
| Format | `--bb-dark` | Continuidade energética |
| Monetization | `--bb-dark` | Tom sério para investidores |
| Why Brazil | `--bb-dark` OU `--bb-cream` | Opcional: respiro visual com light |
| CTA/Waitlist | `--bb-dark` | Foco total na ação final |
| Footer | `--bb-dark` | Encerramento consistente |

---

## 8. Tokens CSS — Arquivo de Implementação

Gerar em `src/styles/tokens.css`:

```css
:root {
  /* === TYPOGRAPHY === */
  --font-bb-display: 'TASAOrbiter', sans-serif;
  --font-bb-sans: 'Geist', sans-serif;
  --font-bb-mono: 'Roboto Mono', monospace;

  /* === COLORS === */
  --bb-lime: #D1FF00;
  --bb-dark: #050505;
  --bb-surface: #0F0F11;
  --bb-surface-alt: oklch(0.231 0.0099 124.97);
  --bb-surface-panel: oklch(0.1785 0.0041 285.98);
  --bb-cream: rgb(244, 244, 232);
  --bb-cream-alt: oklch(0.9644 0.0172 103.15);
  --bb-warm-white: oklch(0.9952 0.0235 106.82);
  --bb-dim: rgba(245, 244, 231, 0.4);
  --bb-muted: oklch(0.7952 0 0);
  --bb-meta: oklch(0.6927 0 0);
  --bb-blue: #0099FF;
  --bb-flare: #ED4609;
  --bb-error: #EF4444;

  /* === GRAY SCALE === */
  --bb-gray-charcoal: #3D3D3D;
  --bb-gray-dim: #696969;
  --bb-gray-muted: #999999;
  --bb-gray-silver: #BDBDBD;

  /* === BORDERS === */
  --bb-border: rgba(156, 156, 156, 0.15);
  --bb-border-soft: rgba(156, 156, 156, 0.10);
  --bb-border-strong: rgba(156, 156, 156, 0.25);
  --bb-border-hover: rgba(156, 156, 156, 0.24);
  --bb-border-input: rgba(156, 156, 156, 0.20);

  /* === ACCENT OPACITY LADDER === */
  --bb-accent-05: rgba(209, 255, 0, 0.05);
  --bb-accent-08: rgba(209, 255, 0, 0.08);
  --bb-accent-10: rgba(209, 255, 0, 0.1);
  --bb-accent-12: rgba(209, 255, 0, 0.12);
  --bb-accent-15: rgba(209, 255, 0, 0.15);
  --bb-accent-20: rgba(209, 255, 0, 0.2);
  --bb-accent-40: rgba(209, 255, 0, 0.4);

  /* === SPACING === */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 3rem;
  --spacing-xl: 4rem;

  /* === MOTION === */
  --bb-ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --bb-ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  --bb-ease-decel:  cubic-bezier(0, 0, 0.2, 1);
  --bb-ease-accel:  cubic-bezier(0.4, 0, 1, 1);
  --bb-dur-fast:   0.2s;
  --bb-dur-medium: 0.4s;
  --bb-dur-slow:   0.7s;

  /* === BREAKPOINTS (via CSS custom media) === */
  --bp-mobile:  767px;
  --bp-tablet:  768px;
  --bp-desktop: 1200px;

  /* === Z-INDEX === */
  --layer-nav:      100;
  --layer-dropdown: 200;
  --layer-overlay:  300;
  --layer-modal:    400;
  --layer-toast:    500;

  /* === SHADCN/UI MAPPING === */
  --background:         var(--bb-dark);
  --foreground:         var(--bb-cream);
  --primary:            var(--bb-lime);
  --primary-foreground: var(--bb-dark);
  --secondary:          var(--bb-surface-alt);
  --muted:              var(--bb-surface-panel);
  --muted-foreground:   var(--bb-dim);
  --accent:             var(--bb-accent-10);
  --accent-foreground:  var(--bb-lime);
  --destructive:        var(--bb-error);
  --border:             var(--bb-border);
  --input:              var(--bb-border-input);
  --ring:               var(--bb-accent-40);
  --card:               var(--bb-surface);
  --card-foreground:    var(--bb-cream);
  --popover:            var(--bb-surface);
  --popover-foreground: var(--bb-cream);
}
```

---

## 9. Tailwind Config — Extensão

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'aiox-black':     '#050505',
        'aiox-surface':   '#0F0F11',
        'aiox-lime':      '#D1FF00',
        'aiox-cream':     'rgb(244,244,232)',
        'aiox-blue':      '#0099FF',
        'aiox-flare':     '#ED4609',
        'aiox-error':     '#EF4444',
      },
      fontFamily: {
        display: ['TASAOrbiter', 'sans-serif'],
        sans:    ['Geist', 'sans-serif'],
        mono:    ['Roboto Mono', 'monospace'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '4rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'decel':  'cubic-bezier(0, 0, 0.2, 1)',
        'accel':  'cubic-bezier(0.4, 0, 1, 1)',
      },
      transitionDuration: {
        'fast':   '200ms',
        'medium': '400ms',
        'slow':   '700ms',
      },
      animation: {
        'ticker':         'ticker 30s linear infinite',
        'ticker-reverse': 'ticker-reverse 35s linear infinite',
        'marquee':        'marquee 20s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      screens: {
        'mobile': { max: '767px' },
        'tablet': '768px',
        'desktop': '1200px',
      },
    },
  },
  plugins: [],
} satisfies Config
```

---

## 10. Componentes Atômicos — Árvore

Seguindo Atomic Design (Brad Frost):

```
atoms/
├── Button.tsx            ← AccentButton (lime/dark/ghost)
├── StatValue.tsx         ← Número grande + label mono
├── MonoLabel.tsx         ← [01] Label_ pattern
├── ProgressBar.tsx       ← Monetization pillar bars
└── FormInput.tsx         ← Input/Select com tokens AIOX

molecules/
├── StatCard.tsx          ← StatValue + label + variant
├── RoundCard.tsx         ← Format section card
├── MonetizationPillar.tsx← Valor + progress + descrição
├── ValidatorCard.tsx     ← Why Brazil card
├── WaitlistForm.tsx      ← Form completo com honeypot
└── SectionHeader.tsx     ← [num] label_ pattern

organisms/
├── Header.tsx            ← Sticky navbar
├── HeroSection.tsx       ← Hero completo
├── StatsSection.tsx      ← Grid 4 StatCards
├── FormatSection.tsx     ← 3 RoundCards + timeline
├── MonetizationSection.tsx ← 3 pillars table
├── WhyBrazilSection.tsx  ← 4 ValidatorCards + quote
├── WaitlistSection.tsx   ← CTA + WaitlistForm
└── Footer.tsx

templates/
└── LandingPage.tsx       ← Composição das sections

pages/
└── index.tsx             ← Instância com conteúdo real
```

---

## 11. Diretrizes de Acessibilidade (WCAG AA)

| Critério | Implementação |
|----------|--------------|
| Contraste texto | `--bb-cream` on `--bb-dark` ≥ 4.5:1 ✅ |
| Contraste CTA | `--bb-dark` on `--bb-lime` ≥ 4.5:1 ✅ |
| Foco visível | `ring: --bb-accent-40` em todos elementos interativos |
| Navegação teclado | Tab, Enter, Escape sem armadilhas |
| Alt text | Obrigatório em todas imagens não-decorativas |
| Labels formulário | Explícitos (não apenas placeholder) |
| Hierarquia headings | h1 único (hero), h2 por seção, h3 em sub-items |
| Aria attributes | `aria-required`, `aria-describedby`, `aria-live` |
| Counters sem JS | Números visíveis via SSR antes da animação |
| Honeypot | `display:none`, `aria-hidden="true"`, `tabindex="-1"` |

---

## 12. Performance — Diretrizes

| Requisito | Estratégia |
|-----------|-----------|
| LCP ≤ 2.5s | Hero text renderizado via SSG, sem imagem blocking |
| CLS ≤ 0.1 | Dimensões explícitas em todos elementos visuais |
| FCP ≤ 1.5s | Critical CSS inline, fonts com `font-display: swap` |
| Fontes | `preload` TASAOrbiter + Geist no `<head>` |
| Animações | Framer Motion lazy-loaded, `whileInView` (não executa off-screen) |
| JS Counter | Intersection Observer API nativa — não bloqueia render |

---

## 13. Checklist de Implementação

- [ ] `src/styles/tokens.css` criado com todos os tokens desta spec
- [ ] `tailwind.config.ts` estendido com cores, fontes e animações
- [ ] Fontes TASAOrbiter, Geist e Roboto Mono configuradas com preload
- [ ] Header sticky implementado com `SectionHeader` AIOX
- [ ] Seção Hero com Brand Reveal e Logo Ticker
- [ ] Seção Stats com 4 `StatCard` lime + counter animation
- [ ] Seção Format com 3 cards + timeline + Mystery badge
- [ ] Seção Monetization com 3 pilares + progress bars
- [ ] Seção Why Brazil com hairline grid 2x2 + QuoteBlock
- [ ] Seção CTA com WaitlistForm + honeypot + submit handling
- [ ] Todos os contrastes validados (axe-core / WAVE)
- [ ] Lighthouse ≥ 90 mobile, ≥ 95 desktop
- [ ] Formulário testado: submit, loading, success, error, spam
