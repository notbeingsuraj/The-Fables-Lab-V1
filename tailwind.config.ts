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
        charcoal: "#0f1014",
        "electric-blue": "#00f0ff",
        "neon-green": "#39ff14",
        "hot-pink": "#ff0055",
        purple: "#b026ff",
        "bright-orange": "#ff5e00",
        background: "#0f1014",
        foreground: "#ffffff",
      },
      borderRadius: {
        '4xl': '24px',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
