"use client";

import { motion } from "framer-motion";

export default function LineOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen opacity-[0.15]">
      
      {/* Dense Vertical Lines */}
      <div className="absolute inset-0 flex justify-between max-w-[100vw] px-4 md:px-[5vw]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 2, delay: i * 0.05, ease: "circOut" }}
            className={`w-[1px] h-full ${i % 3 === 0 ? "bg-off-white" : "bg-off-white/30"} origin-top`}
          />
        ))}
      </div>

      {/* Dense Horizontal Lines */}
      <div className="absolute inset-0 flex flex-col justify-between py-[5vh]">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: i * 0.1, ease: "circOut" }}
            className={`w-full h-[1px] ${i % 2 === 0 ? "bg-off-white" : "bg-off-white/30"} origin-left`}
          />
        ))}
      </div>

      {/* Physics Geometry - Orbital Rings */}
      <div className="absolute top-[20%] right-[10%] w-[800px] h-[800px] rounded-full border border-off-white/40 -translate-y-1/2 translate-x-1/4 animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full border border-off-white/20 border-dashed -translate-y-1/2 translate-x-1/4 animate-[spin_40s_linear_infinite_reverse]" />
      <div className="absolute top-[20%] right-[10%] w-[900px] h-[900px] rounded-full border-[0.5px] border-off-white/10 -translate-y-1/2 translate-x-1/4" />

    </div>
  );
}
