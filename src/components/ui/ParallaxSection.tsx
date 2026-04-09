"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ScrollOffsetTuple = ["start end" | "end start" | "start start" | "end end", "start end" | "end start" | "start start" | "end end"];

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  offset?: ScrollOffsetTuple;
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.15,
  offset = ["start end", "end start"],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: offset as any,
  });

  const yRange = speed * 80;
  const y = useTransform(scrollYProgress, [0, 1], [`${yRange}px`, `-${yRange}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
