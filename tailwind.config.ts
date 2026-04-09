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
        // Core surfaces
        void: "#080808",
        surface: "#111111",
        elevated: "#1a1a1a",
        border: "#2a2a2a",
        "border-subtle": "#1e1e1e",
        // Text
        "apple-white": "#f5f5f7",
        "text-primary": "#f5f5f7",
        "text-secondary": "#a1a1a6",
        "text-muted": "#6e6e73",
        "text-dim": "#3d3d40",
        // Accent — singular, restrained
        "fable-blue": "#2997ff",
        "fable-blue-muted": "#1a6db5",
        // Light surface (for contrast sections)
        "light-bg": "#f5f5f7",
        "light-surface": "#ffffff",
        "light-border": "#d2d2d7",
        "light-text": "#1d1d1f",
        "light-secondary": "#6e6e73",
        // Legacy pass-through (used in other pages — do not break)
        charcoal: "#0a0a0c",
        navy: "#050b14",
        "neon-cyan": "#00E5FF",
        "cyber-yellow": "#FFE600",
        "hot-pink": "#FF007F",
        "neon-green": "#39FF14",
        "electric-blue": "#0044FF",
        "neon-purple": "#B026FF",
        "off-white": "#F4F4F0",
        gridline: "rgba(255, 255, 255, 0.12)",
        background: "#080808",
        foreground: "#f5f5f7",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem,8vw,7rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.8rem,6vw,5.5rem)", { lineHeight: "1.06", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem,4vw,3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem,3vw,2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "body-lg": ["1.1875rem", { lineHeight: "1.65" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        "label": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      spacing: {
        "section": "8rem",
        "section-sm": "5rem",
      },
      borderRadius: {
        "4xl": "24px",
        "pill": "9999px",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        "gradient-void": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(41,151,255,0.07) 0%, transparent 70%)",
        "gradient-dark": "linear-gradient(to bottom, #111111, #080808)",
        "gradient-subtle": "linear-gradient(to bottom, rgba(255,255,255,0.03), transparent)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fadeIn 1s ease both",
        "scale-in": "scaleIn 1.2s cubic-bezier(0.16,1,0.3,1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      transitionTimingFunction: {
        "apple": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
