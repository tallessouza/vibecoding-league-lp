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
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground, var(--foreground))",
        },
        popover: {
          DEFAULT: "var(--popover, var(--card))",
          foreground: "var(--popover-foreground, var(--card-foreground))",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        surface: {
          DEFAULT: "var(--surface)",
          alt: "var(--surface-alt)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background, var(--background))",
          foreground: "var(--sidebar-foreground, var(--foreground))",
          primary: "var(--sidebar-primary, var(--primary))",
          "primary-foreground": "var(--sidebar-primary-foreground, var(--primary-foreground))",
          accent: "var(--sidebar-accent, var(--accent))",
          "accent-foreground": "var(--sidebar-accent-foreground, var(--accent-foreground))",
          border: "var(--sidebar-border, var(--border))",
          ring: "var(--sidebar-ring, var(--ring))",
        },
        "chart-1": "var(--chart-1, var(--primary))",
        "chart-2": "var(--chart-2, var(--secondary))",
        "chart-3": "var(--chart-3, var(--accent))",
        "chart-4": "var(--chart-4, var(--muted))",
        "chart-5": "var(--chart-5, var(--border))",

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
        display: ["var(--font-bb-display)", "TASA Orbiter", "Bebas Neue", "serif"],
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
