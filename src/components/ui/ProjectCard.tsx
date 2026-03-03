"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  color: "neon-cyan" | "cyber-yellow" | "hot-pink" | "neon-green" | "electric-blue" | "neon-purple";
}

export default function ProjectCard({
  id,
  name,
  description,
  image,
  tags,
  color,
}: ProjectCardProps) {
  const textHoverMap = {
    "neon-cyan": "group-hover:text-neon-cyan",
    "cyber-yellow": "group-hover:text-cyber-yellow",
    "hot-pink": "group-hover:text-hot-pink",
    "neon-green": "group-hover:text-neon-green",
    "electric-blue": "group-hover:text-electric-blue",
    "neon-purple": "group-hover:text-neon-purple",
  };

  const glowMap = {
    "neon-cyan": "hover:shadow-[0_0_40px_rgba(0,229,255,0.25)] border-neon-cyan/40",
    "cyber-yellow": "hover:shadow-[0_0_40px_rgba(255,230,0,0.25)] border-cyber-yellow/40",
    "hot-pink": "hover:shadow-[0_0_40px_rgba(255,0,127,0.25)] border-hot-pink/40",
    "neon-green": "hover:shadow-[0_0_40px_rgba(57,255,20,0.25)] border-neon-green/40",
    "electric-blue": "hover:shadow-[0_0_40px_rgba(0,68,255,0.25)] border-electric-blue/40",
    "neon-purple": "hover:shadow-[0_0_40px_rgba(176,38,255,0.25)] border-neon-purple/40",
  };

  const bgMap = {
    "neon-cyan": "from-neon-cyan",
    "cyber-yellow": "from-cyber-yellow",
    "hot-pink": "from-hot-pink",
    "neon-green": "from-neon-green",
    "electric-blue": "from-electric-blue",
    "neon-purple": "from-neon-purple",
  };

  return (
    <Link href={`/projects/${id}`} className="block h-full">
      <motion.div
        whileHover={{ scale: 1.02, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative h-full bg-charcoal/50 backdrop-blur-md border border-gridline p-5 transition-all duration-500 overflow-hidden flex flex-col ${glowMap[color]}`}
      >
        {/* Top Tag Badge */}
        <div className="absolute top-8 left-8 z-10 bg-black/80 backdrop-blur-md px-3 py-1 border border-gridline">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-off-white">
            Case Study
          </span>
        </div>

        {/* Arrow Top Right */}
        <div className={`absolute top-8 right-8 z-10 w-10 h-10 bg-black/80 backdrop-blur-md border border-gridline flex items-center justify-center text-off-white transition-all duration-300 group-hover:bg-off-white group-hover:-translate-y-1 group-hover:translate-x-1 ${textHoverMap[color]}`}>
          <ArrowUpRight size={18} className="text-off-white group-hover:text-black transition-colors" />
        </div>

        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden mb-6 bg-navy border border-gridline">
          {/* Fallback pattern */}
          <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${bgMap[color]} to-transparent`} />
          <Image
            src={image || "/placeholder-project.jpg"} // Replace with proper placeholder handling
            alt={name}
            fill
            className="object-cover transition-transform duration-1000 ease-out mix-blend-luminosity group-hover:scale-105 group-hover:mix-blend-normal"
          />
        </div>

        {/* Content */}
        <div className="px-2 flex flex-col flex-grow">
          <h3 className={`font-grotesk font-light italic text-3xl mb-2 text-off-white transition-colors duration-300 ${textHoverMap[color]}`}>
            {name}
          </h3>
          <p className="text-off-white/60 font-light text-sm mb-6 flex-grow leading-relaxed">
            {description}
          </p>

          {/* Tags Row */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gridline">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-charcoal border border-gridline font-mono text-[10px] uppercase tracking-widest text-off-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
