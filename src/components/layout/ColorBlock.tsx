"use client";

import { motion } from "framer-motion";

interface ColorBlockProps {
  children: React.ReactNode;
  color: "electric-blue" | "neon-green" | "hot-pink" | "purple" | "bright-orange" | "charcoal" | "navy" | "transparent";
  className?: string;
  delay?: number;
  id?: string;
}

export default function ColorBlock({ children, color, className = "", delay = 0, id }: ColorBlockProps) {
  const bgMap = {
    "electric-blue": "bg-electric-blue text-charcoal",
    "neon-green": "bg-neon-green text-charcoal",
    "hot-pink": "bg-hot-pink text-white",
    purple: "bg-purple text-white",
    "bright-orange": "bg-bright-orange text-charcoal",
    charcoal: "bg-charcoal text-white",
    navy: "bg-navy text-white",
    transparent: "bg-transparent text-white",
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} // smooth custom ease
      className={`w-full relative py-24 overflow-hidden ${bgMap[color]} ${className}`}
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}
