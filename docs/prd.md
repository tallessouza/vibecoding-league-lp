# Vibecoding Competitivo — Landing Page Product Requirements Document (PRD)

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-03-29 | 1.0 | Initial PRD creation | Morgan (@pm) |

---

## 1. Goals and Background Context

### Goals

- Criar uma landing page de alta conversão para capturar interesse de investidores, competidores e fãs do Vibecoding Competitivo
- Comunicar o conceito da liga com clareza e impacto emocional em menos de 90 segundos de leitura
- Gerar uma lista de espera qualificada com pelo menos 3 segmentos distintos (investidor, competidor, fã)
- Estabelecer autoridade de mercado apresentando dados concretos de mercado e referências comprovadas (Kings League, DevWars, Vibe Olympics)
- Suportar futuras campanhas de marketing com uma base técnica sólida (SEO, analytics, performance)

### Background Context

O Vibecoding Competitivo é um formato emergente de entretenimento digital onde programadores usam IA em duelos ao vivo para construir aplicações sob pressão de tempo. O termo "vibe coding", cunhado por Andrej Karpathy em fevereiro de 2025, tornou-se Palavra do Ano 2025 do Collins Dictionary e já gerou ao menos 8 competições formais com prêmios de US$10K a US$700K+. O playbook de negócio segue o modelo de sucesso da Kings League (14B impressões, US$63M captados, 7 ligas nacionais), adaptando a estrutura de liga esportiva gamificada para o contexto de desenvolvimento de software com IA.

A landing page é o primeiro ponto de contato público da liga. O Brasil foi escolhido como mercado piloto pela combinação única de fatores: CazéTV (50M espectadores olímpicos), Kings League Brasil validada com Kaká e Neymar, e o ecossistema de orgs competitivas LOUD/FURIA já operando com monetização sofisticada. A LP deve converter curiosidade em comprometimento capturando contatos de 3 personas distintas antes do lançamento oficial.

---

## 2. Requirements

### Functional Requirements

- **FR1:** A landing page deve exibir as 6 seções definidas na ordem: Hero, Stats, Format, Monetization, Why Brazil, CTA/Waitlist
- **FR2:** A seção Hero deve conter headline principal, subheadline descritiva e um botão de CTA primário ("Quero Participar" / "Seja o Primeiro")
- **FR3:** A seção Stats deve exibir ao menos 4 números de impacto animados (8 competições, US$700K+ em prêmios, 14B impressões Kings League, 50M viewers CazéTV)
- **FR4:** A seção Format deve descrever os 3 rounds competitivos: Speed Build (15-20min), Creative Build (30-40min), Mystery Twist (15-20min)
- **FR5:** A seção Monetization deve apresentar os 3 pilares: patrocínios (65-70%), apostas esportivas (US$2.8B mercado), streaming e co-streaming
- **FR6:** A seção Why Brazil deve destacar CazéTV 50M viewers, Kings League BR, e ecossistema LOUD/FURIA como validações de mercado
- **FR7:** A seção CTA/Waitlist deve conter formulário com campos: nome, email, tipo de interesse (dropdown: Competidor / Investidor / Fã / Parceiro de Mídia) e botão de submit
- **FR8:** O formulário de waitlist deve validar campos obrigatórios (nome, email, tipo) e exibir feedback visual de sucesso após envio
- **FR9:** A LP deve ser totalmente responsiva, funcionando em mobile (320px+), tablet e desktop
- **FR10:** A LP deve usar o design system AIOX disponível em brand.aioxsquad.ai/brandbook como referência visual
- **FR11:** Navegação interna por âncoras deve permitir scroll suave entre seções a partir de links no header/nav
- **FR12:** O header deve ser fixo (sticky) com logo e link para o formulário de waitlist

### Non-Functional Requirements

- **NFR1:** A página deve atingir Lighthouse Performance Score >= 90 em mobile e >= 95 em desktop
- **NFR2:** O First Contentful Paint (FCP) deve ser <= 1.5s em conexão 4G simulada
- **NFR3:** A LP deve ser acessível segundo WCAG AA (contraste mínimo 4.5:1, navegação por teclado, alt text em imagens)
- **NFR4:** SEO on-page completo: title tag, meta description, Open Graph tags, structured data (Event/Organization)
- **NFR5:** Integração com analytics (Google Analytics 4 ou equivalente) com eventos rastreados para: page view, scroll depth (25/50/75/100%), CTA clicks, form submits por tipo de interesse
- **NFR6:** A LP deve funcionar sem JavaScript no critical path (SSR/SSG obrigatório para conteúdo principal)
- **NFR7:** O formulário de waitlist deve ter proteção básica contra spam (honeypot field ou rate limiting)
- **NFR8:** A LP deve ter deploy automatizado via CI/CD (GitHub Actions ou equivalente)

---

## 3. User Interface Design Goals

### Overall UX Vision

Experiência imersiva e de alta energia que comunica a emoção do Vibecoding Competitivo em segundos. Visual dark/neon inspirado em arenas esportivas tech (Kings League + cyberpunk), com animações suaves que reforçam a narrativa sem comprometer performance. O usuário deve sentir que está entrando num universo competitivo novo, não lendo um site institucional.

### Key Interaction Paradigms

- **Scroll storytelling:** Cada seção revela informação progressivamente com animações on-scroll (intersection observer)
- **Números que animam:** Counters numéricos nas Stats que disparam ao entrar no viewport
- **CTA onipresente:** Botão de waitlist sempre acessível (header fixo + seção final dedicada)
- **Hover states com personalidade:** Cards e elementos interativos com micro-animações que reforçam o tom competitivo

### Core Screens and Views

1. **Hero Section** — Acima da dobra, headline + video/animação de fundo, CTA primário
2. **Stats Bar** — Números de impacto em grid horizontal/card
3. **Format Section** — 3 cards de rounds com timeline ou visual de progressão
4. **Monetization Section** — Gráfico ou infográfico dos 3 pilares de receita
5. **Why Brazil Section** — Mapa/icons com dados de mercado Brasil
6. **CTA/Waitlist Section** — Formulário full-width com fundo contrastante

### Accessibility

WCAG AA — contraste mínimo 4.5:1, foco visível, alt text em todas as imagens, labels nos campos de formulário

### Branding

Design system AIOX em brand.aioxsquad.ai/brandbook — tokens de cor, tipografia, spacing e componentes. Tema dark com accent neon. Referências visuais: Kings League (preto + accent cores vivas), DevWars (Twitch dark mode), Vibe Olympics.

### Target Device and Platforms

Web Responsive — mobile-first (320px mínimo), tablet (768px), desktop (1280px+)

---

## 4. Technical Assumptions

### Repository Structure

Monorepo — projeto único contendo frontend da LP, configuração de deploy e assets

### Service Architecture

SSG (Static Site Generation) — Next.js ou Astro gerando HTML estático no build. Sem backend próprio. Formulário de waitlist integrado via serviço externo (Resend + Supabase ou equivalente simples). Deploy em Vercel ou Netlify.

### Testing Requirements

- Unit: componentes React com Vitest/Jest
- Integration: formulário de waitlist (submit flow)
- E2E: fluxo crítico (landing → preencher form → sucesso) com Playwright
- Visual: sem regressão visual automatizada (MVP)

### Additional Technical Assumptions

- Framework: Next.js 14.2.x (App Router, SSG) — decisão de @architect em [JOU-14](/JOU/issues/JOU-14)
- Styling: Tailwind CSS + tokens do design system AIOX
- Animações: Framer Motion (React) ou CSS animations nativas (Astro)
- Form backend: Resend para emails + armazenamento simples (Supabase free tier ou Google Sheets via API)
- Analytics: Google Analytics 4 via gtag
- Deploy target: Vercel (free tier para MVP)
- Sem autenticação, sem banco de dados complexo — LP estática com form de captura

---

## 5. Epic List

| Epic | Título | Objetivo |
|------|--------|----------|
| Epic 1 | Setup & Foundation | Configurar o projeto, CI/CD, integração com design system e deploy inicial com página em construção |
| Epic 2 | LP Sections | Implementar as 6 seções da landing page com conteúdo real, animações e responsividade |
| Epic 3 | Quality & Launch | Otimizar performance, SEO, acessibilidade, analytics e preparar para lançamento |

---

## 6. Epic 1: Setup & Foundation

**Goal:** Estabelecer a base técnica do projeto — repositório, CI/CD, design tokens integrados, componentes base e um deploy funcional em produção (mesmo que com conteúdo placeholder) antes de qualquer desenvolvimento de seções.

### Story 1.1: Inicialização do Projeto e Deploy Básico

Como desenvolvedor,
quero ter o repositório configurado com Next.js/Astro, Tailwind e deploy automatizado na Vercel,
para que toda a equipe possa começar a desenvolver com pipeline funcional desde o primeiro commit.

**Acceptance Criteria:**
1. Repositório criado com estrutura de pastas padrão (`src/`, `public/`, `components/`, `styles/`)
2. Next.js 14.2.x (App Router) inicializado com TypeScript habilitado
3. Tailwind CSS configurado com `tailwind.config.ts`
4. Deploy automático na Vercel configurado via GitHub Actions ou integração nativa
5. Página inicial exibindo "Coming Soon — Vibecoding Competitivo" no domínio de staging
6. Lighthouse score inicial >= 90 em mobile na página placeholder
7. `npm run dev`, `npm run build` e `npm run test` funcionando sem erros

### Story 1.2: Integração de Design Tokens AIOX

Como designer/desenvolvedor,
quero ter os tokens de cor, tipografia e spacing do design system AIOX configurados no projeto,
para que todos os componentes da LP usem a identidade visual correta desde o início.

**Acceptance Criteria:**
1. Arquivo `src/styles/tokens.css` (ou equivalente Tailwind) com variáveis CSS de cor (dark background, accent neon, texto)
2. Fontes configuradas (tipografia AIOX ou equivalente aprovado) com loading otimizado (`font-display: swap`)
3. Tailwind config estendido com todas as cores e tamanhos do design system
4. Componente `<Button>` base com variantes `primary` e `secondary` implementado e documentado
5. Componente `<Section>` wrapper com padding e max-width padrão implementado
6. Storybook ou demo page mostrando tokens e componentes base (opcional mas preferido)

### Story 1.3: Header Sticky e Navegação por Âncoras

Como visitante da LP,
quero ter um header fixo no topo com logo e link para o formulário de waitlist,
para que eu possa acessar o CTA principal a qualquer momento durante a leitura.

**Acceptance Criteria:**
1. Header com `position: sticky; top: 0` e z-index correto
2. Logo "Vibecoding Competitivo" (texto ou SVG placeholder) no lado esquerdo
3. Botão "Entrar na Waitlist" no lado direito que faz scroll suave até a seção CTA
4. Scroll suave (`scroll-behavior: smooth`) funcionando para todos os links de âncora
5. Header com background opaco/blur ao fazer scroll (sem flicker)
6. Header totalmente responsivo — colapsa corretamente em mobile
7. Testes unitários para o componente Header passando

---

## 7. Epic 2: LP Sections

**Goal:** Implementar as 6 seções da landing page com conteúdo real, animações on-scroll e responsividade completa. Cada seção é uma story independente para paralelismo máximo no desenvolvimento.

### Story 2.1: Seção Hero

Como visitante,
quero ver uma seção hero impactante com headline, subheadline e CTA primário,
para que eu entenda imediatamente o que é o Vibecoding Competitivo e seja motivado a me inscrever.

**Acceptance Criteria:**
1. Headline principal: "Vibecoding Competitivo: O Próximo Esporte Digital" (ou equivalente aprovado)
2. Subheadline: texto de 1-2 linhas explicando o conceito (duelos ao vivo, IA, programação)
3. CTA primário "Quero Participar" com scroll suave até a seção de waitlist
4. Background com gradiente dark ou elemento visual de alta energia (video loop ou animação CSS)
5. Layout above-the-fold completo em mobile (320px) e desktop (1280px) sem scroll
6. Animação de entrada (fade-in ou slide-up) no carregamento inicial
7. Lighthouse CLS (Cumulative Layout Shift) <= 0.1 na seção hero

### Story 2.2: Seção Stats

Como visitante,
quero ver números de impacto animados que demonstram o tamanho da oportunidade,
para que eu entenda o potencial de mercado com dados concretos.

**Acceptance Criteria:**
1. Exibe ao menos 4 métricas: "8+ Competições Realizadas", "US$700K+ em Prêmios", "14B Impressões Kings League", "50M Viewers CazéTV"
2. Cada métrica em card separado com ícone ou label descritivo
3. Animação de counter (número aumenta de 0 até o valor final) disparada ao entrar no viewport (Intersection Observer)
4. Layout responsivo: grid 4 colunas em desktop, 2 colunas em tablet, 1-2 colunas em mobile
5. Sem dependência de JavaScript para renderização inicial (números visíveis mesmo com JS desabilitado)

### Story 2.3: Seção Format (3 Rounds)

Como competidor em potencial,
quero entender o formato de competição com os 3 rounds detalhados,
para que eu saiba exatamente como funciona uma partida de Vibecoding Competitivo.

**Acceptance Criteria:**
1. Exibe 3 cards/blocos: "Round 1 — Speed Build (15-20min)", "Round 2 — Creative Build (30-40min)", "Round 3 — Mystery Twist (15-20min)"
2. Cada round com título, duração e descrição de 2-3 linhas explicando o objetivo
3. Visual de progressão/timeline conectando os 3 rounds
4. Animação on-scroll: cards aparecem sequencialmente ao rolar
5. Layout responsivo: 3 colunas em desktop, stack vertical em mobile
6. Destaque visual no "Mystery Twist" como elemento surpresa (badge, cor diferente)

### Story 2.4: Seção Monetization

Como investidor em potencial,
quero ver o modelo de monetização com dados de mercado,
para que eu avalie a viabilidade financeira da liga.

**Acceptance Criteria:**
1. Exibe 3 pilares: Patrocínios (65-70% da receita), Apostas Esportivas (mercado US$2.8B), Streaming & Co-streaming
2. Cada pilar com percentual/número de destaque, ícone e 2-3 linhas de contexto
3. Referências explícitas: Kings League como modelo de patrocínio, esports betting como maior segmento
4. Layout visual de alto impacto (barras de progresso, ícones grandes ou cards com accent color)
5. Responsivo em todos os breakpoints
6. Dados apresentados de forma clara e verificável (sem claims sem fonte implícita)

### Story 2.5: Seção Why Brazil

Como investidor/parceiro,
quero entender por que o Brasil é o mercado piloto ideal,
para que eu valide a decisão de localização da liga.

**Acceptance Criteria:**
1. Exibe 3-4 validadores: CazéTV 50M viewers, Kings League BR (Kaká + Neymar), LOUD/FURIA como referência de org competitiva, comunidades de vibe coding ativas
2. Cada validador com número de destaque, nome/logo (placeholder) e 1-2 linhas de contexto
3. Elemento visual de identidade brasileira integrado ao tema dark/neon (não clichê)
4. Animação on-scroll para os elementos da seção
5. Totalmente responsivo

### Story 2.6: Seção CTA/Waitlist

Como visitante interessado,
quero me inscrever na waitlist com meu tipo de interesse,
para que a equipe possa me contatar com informações relevantes ao meu perfil.

**Acceptance Criteria:**
1. Formulário com campos: Nome (text, obrigatório), Email (email, obrigatório), Tipo de Interesse (select: Competidor / Investidor / Fã / Parceiro de Mídia, obrigatório)
2. Validação client-side: campos obrigatórios marcados, email com formato válido
3. Submit envia dados para backend (Supabase ou equivalente) e exibe mensagem de sucesso inline sem reload
4. Campo honeypot oculto para prevenção de spam
5. Loading state no botão durante o envio
6. Mensagem de erro genérica em caso de falha no envio (sem expor detalhes técnicos)
7. Seção com fundo contrastante (destaque visual claro que é a ação final esperada)
8. Totalmente responsivo com formulário usável em mobile

---

## 8. Epic 3: Quality & Launch

**Goal:** Garantir que a LP atinja os critérios de qualidade (performance, SEO, acessibilidade, analytics) antes do lançamento público e preparar o ambiente de produção final.

### Story 3.1: SEO e Metadata

Como responsável de marketing,
quero que a LP tenha SEO on-page completo,
para que ela apareça nas buscas por "vibecoding competitivo", "liga de vibecoding" e termos relacionados.

**Acceptance Criteria:**
1. `<title>`: "Vibecoding Competitivo — A Liga de Programação com IA | Brasil"
2. `<meta name="description">`: texto de 150-160 caracteres descrevendo a liga
3. Open Graph tags: `og:title`, `og:description`, `og:image` (1200x630px), `og:url`
4. Twitter Card tags completas
5. Structured data JSON-LD: Organization + Event (ou WebSite)
6. Canonical URL configurado corretamente
7. `robots.txt` e `sitemap.xml` gerados automaticamente no build
8. `lang="pt-BR"` no elemento `<html>`

### Story 3.2: Performance e Core Web Vitals

Como visitante,
quero que a LP carregue rapidamente mesmo em conexão móvel,
para que eu não abandone a página antes de ler o conteúdo.

**Acceptance Criteria:**
1. Lighthouse Performance Score >= 90 em mobile, >= 95 em desktop
2. FCP (First Contentful Paint) <= 1.5s em simulação 4G
3. LCP (Largest Contentful Paint) <= 2.5s
4. CLS (Cumulative Layout Shift) <= 0.1
5. Imagens otimizadas: formato WebP/AVIF, lazy loading, dimensões explícitas
6. Fontes com `font-display: swap` e preload para fontes críticas
7. JS bundle otimizado (code splitting, tree shaking)
8. Resultado do Lighthouse CI documentado e aprovado em PR

### Story 3.3: Acessibilidade WCAG AA

Como usuário com necessidades especiais,
quero que a LP seja navegável por teclado e compatível com leitores de tela,
para que eu possa acessar todo o conteúdo independentemente da forma de interação.

**Acceptance Criteria:**
1. Contraste de cor >= 4.5:1 para todo texto normal, >= 3:1 para texto grande
2. Navegação completa por teclado (Tab, Enter, Escape) sem armadilhas de foco
3. Indicador de foco visível em todos os elementos interativos
4. Alt text descritivo em todas as imagens não-decorativas
5. Labels explícitos em todos os campos do formulário (não apenas placeholder)
6. Hierarquia de headings correta (h1 único, h2 por seção, h3 para subseções)
7. Audit com axe-core (ou similar) com zero violações WCAG AA
8. Testado com VoiceOver (Mac) ou NVDA (Windows) — fluxo principal navegável

### Story 3.4: Analytics e Rastreamento de Conversão

Como responsável pelo produto,
quero ter analytics completo com eventos de conversão rastreados,
para que eu possa medir a efetividade da LP e otimizar a taxa de conversão.

**Acceptance Criteria:**
1. Google Analytics 4 integrado com gtag.js (carregado de forma não-bloqueante)
2. Evento `page_view` automático ao carregar a página
3. Evento `scroll_depth` disparado em 25%, 50%, 75%, 100% do scroll da página
4. Evento `cta_click` disparado em todos os botões "Entrar na Waitlist" com label do ponto de origem (hero, header, etc.)
5. Evento `waitlist_submit` disparado no sucesso do formulário com propriedade `interest_type` (Competidor/Investidor/Fã/Parceiro)
6. Evento `waitlist_error` disparado em caso de erro no submit
7. Preview do GA4 Realtime validando os eventos em staging antes do go-live
8. Sem dados pessoais (email, nome) enviados para o GA4

---

## 9. Checklist Results Report

*(A ser preenchido pelo @pm após revisão com pm-checklist)*

---

## 10. Next Steps

### UX Expert Prompt

> @ux-design-expert Temos o PRD finalizado para a landing page do Vibecoding Competitivo. Por favor, revise a seção "User Interface Design Goals" e os wireframes conceituais das 6 seções (Hero, Stats, Format, Monetization, Why Brazil, CTA/Waitlist). Use o design system AIOX disponível em brand.aioxsquad.ai/brandbook. O objetivo é criar um visual dark/neon de alta energia inspirado em arenas esportivas competitivas. Referências: Kings League, DevWars, Vibe Olympics. Produza o documento de arquitetura UX com especificações de componentes, breakpoints e tokens a usar.

### Architect Prompt

> @architect Temos o PRD finalizado para a landing page do Vibecoding Competitivo (Landing Page estática, SSG). As premissas técnicas estão na seção "Technical Assumptions" do PRD. Por favor, defina a arquitetura técnica completa: escolha entre Next.js 15+ e Astro 5+, estratégia de integração com design tokens AIOX, stack de testes (Vitest + Playwright), configuração de CI/CD (GitHub Actions + Vercel), e solução de backend para o formulário de waitlist (Supabase free tier recomendado). Produza o documento de arquitetura técnica como input para @dev e @sm.
