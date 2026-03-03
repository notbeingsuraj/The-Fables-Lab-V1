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
        charcoal: "#0f0f11", // Slightly lighter, textured base
        navy: "#0a1128",
        "cobalt": "#0047FF",
        "acid": "#DFFF00",
        "safety-orange": "#FF5722",
        "off-white": "#F4F4F0",
        "gridline": "rgba(244, 244, 240, 0.15)", // Brighter gridlines
        background: "#0f0f11",
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
