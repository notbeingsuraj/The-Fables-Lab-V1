"use client";

import { motion } from "framer-motion";

export default function LineOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-50">
      {/* Container to bound the grid within max-w if desired. Full width works best for immersive grids. */}
      {/* Vertical Lines */}
      <div className="absolute inset-0 flex justify-between max-w-[100vw] px-[5vw]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: i * 0.15, ease: "circOut" }}
            className="w-[1px] h-full bg-white/10 origin-top"
          />
        ))}
      </div>

      {/* Horizontal Lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-[10vh]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }}
            className="w-full h-[1px] bg-white/10 origin-left"
          />
        ))}
      </div>
    </div>
  );
}
