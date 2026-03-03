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
        charcoal: "#0a0a0c",
        navy: "#0a0f1c",
        "electric-blue": "#00f0ff",
        "neon-green": "#39ff14",
        "hot-pink": "#ff0055",
        purple: "#b026ff",
        "bright-orange": "#ff5e00",
        background: "#0a0a0c",
        foreground: "#ffffff",
      },
      borderRadius: {
        '4xl': '24px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.1em',
      }
    },
  },
  plugins: [],
};
export default config;
