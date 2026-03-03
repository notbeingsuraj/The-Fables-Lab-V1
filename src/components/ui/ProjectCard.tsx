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
  color: "cobalt" | "acid" | "safety-orange";
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
    "cobalt": "group-hover:text-cobalt",
    "acid": "group-hover:text-acid",
    "safety-orange": "group-hover:text-safety-orange",
  };

  const glowMap = {
    "cobalt": "hover:shadow-[0_0_40px_rgba(0,71,255,0.25)] border-cobalt/40",
    "acid": "hover:shadow-[0_0_40px_rgba(223,255,0,0.25)] border-acid/40",
    "safety-orange": "hover:shadow-[0_0_40px_rgba(255,87,34,0.25)] border-safety-orange/40",
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
        <div className={`absolute top-8 right-8 z-10 w-10 h-10 bg-black/80 backdrop-blur-md border border-gridline flex items-center justify-center text-off-white transition-all duration-300 group-hover:bg-off-white group-hover:-translate-y-1 group-hover:translate-x-1 ${textHoverMap[color].replace('group-hover:', 'group-hover:')}`}>
          <ArrowUpRight size={18} className="text-off-white group-hover:text-black transition-colors" />
        </div>

        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden mb-6 bg-navy border border-gridline">
          {/* Fallback pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cobalt to-transparent" />
          <Image
            src={image || "/placeholder-project.jpg"} // Replace with proper placeholder handling
            alt={name}
            fill
            className="object-cover transition-transform duration-1000 ease-out mix-blend-luminosity group-hover:scale-105 group-hover:mix-blend-normal"
          />
        </div>

        {/* Content */}
        <div className="px-2 flex flex-col flex-grow">
          <h3 className={`font-serif font-light italic text-3xl mb-2 text-off-white transition-colors duration-300 ${textHoverMap[color]}`}>
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
