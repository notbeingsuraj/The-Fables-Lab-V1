"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "word" | "line";
  once?: boolean;
}

/**
 * RevealText — Animate text into view with a staggered,
 * per-word or per-character reveal. Feels premium and editorial.
 */
export default function RevealText({
  children,
  className = "",
  delay = 0,
  as: Tag = "h2",
  splitBy = "word",
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-8% 0px" });

  const words = children.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: splitBy === "word" ? 0.07 : 0.04,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`inline`}
      >
        <Tag className={className}>
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden leading-[1.1]">
              <motion.span
                variants={wordVariant}
                className="inline-block"
              >
                {word}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </Tag>
      </motion.div>
    </div>
  );
}
