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
  color: "electric-blue" | "neon-green" | "hot-pink" | "purple" | "bright-orange";
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
    "electric-blue": "group-hover:text-electric-blue",
    "neon-green": "group-hover:text-neon-green",
    "hot-pink": "group-hover:text-hot-pink",
    purple: "group-hover:text-purple",
    "bright-orange": "group-hover:text-bright-orange",
  };

  const glowMap = {
    "electric-blue": "hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] border-electric-blue/40",
    "neon-green": "hover:shadow-[0_0_40px_rgba(57,255,20,0.25)] border-neon-green/40",
    "hot-pink": "hover:shadow-[0_0_40px_rgba(255,0,85,0.25)] border-hot-pink/40",
    purple: "hover:shadow-[0_0_40px_rgba(176,38,255,0.25)] border-purple/40",
    "bright-orange": "hover:shadow-[0_0_40px_rgba(255,94,0,0.25)] border-bright-orange/40",
  };

  return (
    <Link href={`/projects/${id}`} className="block h-full">
      <motion.div
        whileHover={{ scale: 1.02, y: -8 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative h-full bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-4xl p-5 transition-all duration-500 overflow-hidden flex flex-col ${glowMap[color]}`}
      >
        {/* Top Tag Badge */}
        <div className="absolute top-8 left-8 z-10 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
          <span className="text-xs font-bold uppercase tracking-widest text-white">
            Case Study
          </span>
        </div>

        {/* Arrow Top Right */}
        <div className={`absolute top-8 right-8 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:-translate-y-1 group-hover:translate-x-1 ${textHoverMap[color].replace('group-hover:', 'group-hover:')}`}>
          <ArrowUpRight size={18} className="text-white group-hover:text-black transition-colors" />
        </div>

        {/* Image Container */}
        <div className="relative h-64 w-full rounded-2xl md:rounded-3xl overflow-hidden mb-6 bg-charcoal">
          {/* Fallback pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-transparent" />
          <Image
            src={image || "/placeholder-project.jpg"} // Replace with proper placeholder handling
            alt={name}
            fill
            className="object-cover transition-transform duration-1000 ease-out mix-blend-luminosity group-hover:scale-105 group-hover:mix-blend-normal"
          />
        </div>

        {/* Content */}
        <div className="px-2 flex flex-col flex-grow">
          <h3 className={`font-grotesk font-black text-3xl mb-2 text-white transition-colors duration-300 ${textHoverMap[color]}`}>
            {name}
          </h3>
          <p className="text-white/60 font-light text-sm mb-6 flex-grow leading-relaxed">
            {description}
          </p>

          {/* Tags Row */}
          <div className="flex flex-wrap gap-2 pt-4 border-t-[0.5px] border-white/10">
            {tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
