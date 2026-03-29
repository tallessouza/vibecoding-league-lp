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
        /* === AIOX Design Tokens === */
        "aiox-primary": "var(--aiox-primary)",
        "aiox-primary-hover": "var(--aiox-primary-hover)",
        "aiox-primary-foreground": "var(--aiox-primary-foreground)",
        "aiox-accent": "var(--aiox-accent)",
        "aiox-accent-hover": "var(--aiox-accent-hover)",
        "aiox-accent-foreground": "var(--aiox-accent-foreground)",
        "aiox-background": "var(--aiox-background)",
        "aiox-surface": "var(--aiox-surface)",
        "aiox-surface-elevated": "var(--aiox-surface-elevated)",
        "aiox-foreground": "var(--aiox-foreground)",
        "aiox-muted": "var(--aiox-muted)",
        "aiox-muted-foreground": "var(--aiox-muted-foreground)",
        "aiox-border": "var(--aiox-border)",
        "aiox-border-subtle": "var(--aiox-border-subtle)",
        "aiox-success": "var(--aiox-success)",
        "aiox-warning": "var(--aiox-warning)",
        "aiox-error": "var(--aiox-error)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["Fira Code", "Cascadia Code", "monospace"],
      },
      borderRadius: {
        sm: "var(--aiox-radius-sm)",
        DEFAULT: "var(--aiox-radius)",
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
