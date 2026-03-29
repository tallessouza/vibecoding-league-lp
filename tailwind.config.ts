import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* === Brandbook Tokens (--bb-*) === */
        "bb-dark": "var(--bb-dark)",
        "bb-surface": "var(--bb-surface)",
        "bb-surface-alt": "var(--bb-surface-alt)",
        "bb-surface-overlay": "var(--bb-surface-overlay)",
        "bb-lime": "var(--bb-lime)",
        "bb-cream": "var(--bb-cream)",
        "bb-dim": "var(--bb-dim)",
        "bb-blue": "var(--bb-blue)",
        "bb-flare": "var(--bb-flare)",
        "bb-error": "var(--bb-error)",
        "bb-border": "var(--bb-border)",
        "bb-border-strong": "var(--bb-border-strong)",
        "bb-border-hover": "var(--bb-border-hover)",

        /* === Semantic Tokens === */
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        secondary: "var(--secondary)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: "var(--destructive)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        surface: {
          DEFAULT: "var(--surface)",
          alt: "var(--surface-alt)",
        },

        /* === Legacy aliases (aiox-*) — mantidos para compatibilidade === */
        "aiox-primary": "var(--primary)",
        "aiox-primary-hover": "var(--aiox-primary-hover)",
        "aiox-primary-foreground": "var(--primary-foreground)",
        "aiox-accent": "var(--accent)",
        "aiox-accent-hover": "var(--accent-foreground)",
        "aiox-accent-foreground": "var(--accent-foreground)",
        "aiox-background": "var(--background)",
        "aiox-surface": "var(--surface)",
        "aiox-surface-elevated": "var(--surface-alt)",
        "aiox-foreground": "var(--foreground)",
        "aiox-muted": "var(--muted-foreground)",
        "aiox-muted-foreground": "var(--muted-foreground)",
        "aiox-border": "var(--border)",
        "aiox-border-subtle": "var(--border)",
        "aiox-success": "#10b981",
        "aiox-warning": "var(--warning)",
        "aiox-error": "var(--error)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Geist", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "monospace"],
      },
      borderRadius: {
        sm: "var(--aiox-radius-sm)",
        DEFAULT: "var(--radius)",
        md: "var(--aiox-radius-md)",
        lg: "var(--aiox-radius-lg)",
        xl: "var(--aiox-radius-xl)",
        full: "var(--aiox-radius-full)",
      },
      boxShadow: {
        "aiox-sm": "var(--aiox-shadow-sm)",
        aiox: "var(--aiox-shadow)",
        "aiox-md": "var(--aiox-shadow-md)",
        "aiox-lg": "var(--aiox-shadow-lg)",
        "aiox-glow": "var(--aiox-shadow-glow)",
        "aiox-glow-accent": "var(--aiox-shadow-glow-accent)",
      },
      backgroundImage: {
        "aiox-gradient-primary": "var(--aiox-gradient-primary)",
        "aiox-gradient-accent": "var(--aiox-gradient-accent)",
        "aiox-gradient-dark": "var(--aiox-gradient-dark)",
      },
    },
  },
  plugins: [],
};
export default config;
