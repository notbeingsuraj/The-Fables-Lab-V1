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
        navy: "#050b14",
        "neon-cyan": "#00E5FF",
        "cyber-yellow": "#FFE600",
        "hot-pink": "#FF007F",
        "neon-green": "#39FF14",
        "electric-blue": "#0044FF",
        "neon-purple": "#B026FF",
        "off-white": "#F4F4F0",
        "gridline": "rgba(255, 255, 255, 0.12)",
        background: "#0a0a0c",
        foreground: "#F4F4F0",
      },
      borderRadius: {
        '4xl': '24px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
      },
      backgroundImage: {
        'physics-grid': 'linear-gradient(to right, rgba(244, 244, 240, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(244, 244, 240, 0.05) 1px, transparent 1px)',
        'blueprint': 'linear-gradient(to right, rgba(0, 71, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 71, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '20px 20px',
        'grid-lg': '100px 100px',
      }
    },
  },
  plugins: [],
};
export default config;
