"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Play, Layers } from "lucide-react";
import LineOverlay from "@/components/ui/LineOverlay";
import ColorBlock from "@/components/layout/ColorBlock";

// Placeholder mock data that would normally come from an API/CMS
const PROJECT = {
  id: "carefree",
  name: "Carefree Mobility",
  client: "Carefree Startup Auth",
  role: "MVP Engineering / UI Systems",
  duration: "4 Weeks",
  color: "electric-blue" as const,
  heroText: "REINVENTING RENTALS.",
  summary: "Carefree needed a way to penetrate the stagnant car rental market with a Gen-Z focused, mobile-first approach. We built a high-performance web application featuring instant booking algorithms, immersive WebGL interactions, and a cinematic dark mode UI.",
  problem: "Traditional car rental platforms are bloated, slow, and visually unappealing to younger demographics. The client had a strong brand vision but lacked the technical firepower to build a custom solution from scratch in under a month.",
  solution: "We deployed a Next.js 14 architecture with a highly optimized Tailwind CSS design system. By leveraging Framer Motion for micro-interactions and a custom Headless CMS, we delivered an MVP that looks like a multimillion-dollar product.",
  techStack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Supabase", "Stripe API", "Vercel"],
  metrics: [
    { label: "Launch Time", value: "28 Days" },
    { label: "Performance Score", value: "99/100" },
    { label: "Conversion Rate", value: "+ 314%" },
  ]
};

export default function CaseStudyPage() { 
  return (
    <div className="relative w-full bg-charcoal min-h-screen">
      <LineOverlay />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-end pb-24 border-b-[0.5px] border-white/10 overflow-hidden bg-navy">
        {/* Abstract Glow */}
        <div className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px] -z-10 animate-pulse bg-electric-blue/20`} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                  Case Study
                </span>
                <span className="text-electric-blue font-bold text-xs tracking-widest uppercase">
                  {PROJECT.name}
                </span>
              </div>
              <h1 className="font-grotesk font-black text-6xl md:text-9xl tracking-tighter text-white leading-[0.85] mb-8">
                {PROJECT.heroText}
              </h1>
            </motion.div>
        </div>

        {/* Hero Image Mock */}
        <div className="w-full absolute inset-0 -z-20">
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-charcoal/90" />
             <div className="w-full h-full bg-[url('/noise.png')] mix-blend-overlay opacity-20 absolute inset-0" />
        </div>
      </section>

      {/* Meta Specs */}
      <section className="py-12 border-b-[0.5px] border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Client</p>
              <p className="text-white font-medium">{PROJECT.client}</p>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Role</p>
              <p className="text-white font-medium">{PROJECT.role}</p>
            </div>
            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Timeline</p>
              <p className="text-white font-medium">{PROJECT.duration}</p>
            </div>
            <div>
               <a href="#" className="inline-flex items-center gap-2 text-electric-blue font-bold uppercase tracking-widest text-sm hover:underline">
                 View Live Site <ArrowUpRight size={16} />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Narrative */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-grotesk font-black text-4xl mb-6">THE VISION</h2>
            <p className="text-xl text-white/70 font-light leading-relaxed">{PROJECT.summary}</p>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Play className="text-hot-pink" size={24} />
                <h3 className="font-bold text-2xl tracking-wide uppercase">The Problem</h3>
              </div>
              <p className="text-white/60 leading-relaxed font-light">{PROJECT.problem}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-neon-green" size={24} />
                <h3 className="font-bold text-2xl tracking-wide uppercase">The Solution</h3>
              </div>
              <p className="text-white/60 leading-relaxed font-light">{PROJECT.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Big Impact Numbers wrapped in ColorBlock */}
      <ColorBlock color="electric-blue" className="text-charcoal border-y border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-charcoal/20">
          {PROJECT.metrics.map((metric, i) => (
             <div key={i} className="pt-8 md:pt-0 md:px-8 first:px-0 text-center md:text-left">
               <p className="font-grotesk font-black text-6xl lg:text-8xl tracking-tighter mb-4 text-charcoal/90">{metric.value}</p>
               <p className="font-bold uppercase tracking-widest text-sm text-charcoal/60">{metric.label}</p>
             </div>
          ))}
        </div>
      </ColorBlock>

      {/* Tech Stack */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div>
             <span className="text-white/50 font-bold text-xs tracking-widest uppercase mb-3 block">Architecture</span>
             <h2 className="font-grotesk font-black text-5xl tracking-tighter">TECH STACK.</h2>
           </div>
           <Layers className="text-white/20" size={64} />
        </div>
        <div className="flex flex-wrap gap-4">
          {PROJECT.techStack.map(tech => (
            <div key={tech} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium text-lg hover:bg-white/10 transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Next Project CTA Footer */}
      <section className="relative py-40 border-t-[0.5px] border-white/10 flex items-center justify-center text-center overflow-hidden bg-navy">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-hot-pink/20 via-navy to-navy" />
         <div className="relative z-10 max-w-3xl px-4">
            <p className="text-white/60 font-bold text-sm tracking-widest uppercase mb-6">Next Case Study</p>
            <h2 className="font-grotesk font-black text-5xl md:text-7xl tracking-tighter mb-10 hover:text-hot-pink transition-colors cursor-pointer">
               AETHOS FINANCE.
            </h2>
            <button className="px-10 py-5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all">
               View Project
            </button>
         </div>
      </section>
    </div>
  );
}
