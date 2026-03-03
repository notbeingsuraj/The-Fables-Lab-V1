"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Code2, Rocket } from "lucide-react";
import LineOverlay from "@/components/ui/LineOverlay";
import ColorBlock from "@/components/layout/ColorBlock";
import ProjectCard from "@/components/ui/ProjectCard";
import { VectorGrid, TopographicPattern, MagneticField } from "@/components/ui/PhysicsIllustrations";
import Link from "next/link";

const FEATURED_PROJECTS = [
  {
    id: "carefree",
    name: "Carefree Mobility",
    description: "A premium car rental platform designed to eliminate queues and maximize driving joy. Built with a futuristic aesthetic and robust booking engine.",
    image: "", // Placeholder
    tags: ["Next.js", "Tailwind", "Supabase", "Stripe"],
    color: "cobalt" as const,
  },
  {
    id: "aethos",
    name: "Aethos Finance",
    description: "DeFi dashboard redefining institutional crypto management. Simplified complex data visualization into a stunning, modular UI.",
    image: "",
    tags: ["React", "Web3", "D3.js", "GraphQL"],
    color: "acid" as const,
  },
  {
    id: "lumina",
    name: "Lumina AI",
    description: "Enterprise AI content generator MVP. Went from concept to fully functional prototype generating $10k MRR in under 3 weeks.",
    image: "",
    tags: ["OpenAI", "Next.js", "Pinecone", "SaaS"],
    color: "safety-orange" as const,
  },
];

export default function Home() {
  return (
    <div className="relative w-full bg-transparent">
      <LineOverlay />
      <VectorGrid className="opacity-10" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-gridline">
        {/* Physics Geometry Backgrounds */}
        <div className="absolute top-0 right-0 w-1/2 h-full -z-10 mix-blend-screen opacity-50 flex items-center justify-center">
            <MagneticField className="w-full max-w-[800px] text-cobalt absolute" />
        </div>
        
        {/* Abstract Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cobalt/15 rounded-full blur-[150px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-safety-orange/15 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-x border-gridline min-h-[80vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-10 lg:col-start-1"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-gridline bg-charcoal/50 backdrop-blur-md mb-8">
                <span className="w-2 h-2 bg-acid animate-pulse shadow-[0_0_10px_#DFFF00]" />
                <span className="text-off-white font-mono text-xs tracking-widest uppercase">
                  Sys.Status: Accepting Projects
                </span>
              </div>
              
              <h1 className="font-grotesk font-black text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] text-off-white overflow-hidden mb-8">
                BUILD <span className="font-serif italic font-light text-cobalt">FAST.</span> <br />
                SCALE <span className="text-transparent text-stroke italic font-serif">NOW.</span>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-gridline pt-8 mt-12">
                 <p className="md:col-span-6 text-xl md:text-2xl text-off-white/70 font-serif font-light leading-relaxed">
                   We are a product studio that crafts investor-ready MVPs in under 30 days. No fluff, just premium engineering and absolute aesthetic precision.
                 </p>
                 <div className="md:col-span-6 flex flex-col justify-end items-start md:items-end">
                    <Link 
                      href="/contact"
                      className="px-8 py-4 bg-acid text-charcoal font-mono font-bold text-sm uppercase tracking-widest hover:scale-105 hover:glow-acid transition-all duration-300 w-full md:w-auto text-center"
                    >
                      Initialize Build
                    </Link>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Grid lines */}
      <section id="work" className="relative w-full border-b border-gridline bg-charcoal overflow-hidden py-32">
        <TopographicPattern className="text-cobalt opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-x border-gridline h-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gridline pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-safety-orange font-mono font-bold text-xs tracking-widest uppercase mb-4 block">{"// Case Studies"}</span>
              <h2 className="font-serif italic font-light text-5xl md:text-7xl tracking-tighter text-off-white">
                RECENT <br /> <span className="font-grotesk font-black not-italic">LAUNCHES.</span>
              </h2>
            </motion.div>
            <Link 
              href="/projects" 
              className="flex items-center gap-2 text-off-white/50 hover:text-off-white font-mono text-sm uppercase tracking-widest transition-colors group"
            >
              All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-y border-gridline divide-y md:divide-y-0 md:divide-x divide-gridline">
            {FEATURED_PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 md:p-8"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Prop / Process Preview using Editorial Colors */}
      <ColorBlock color="navy" delay={0.2} className="border-b border-gridline !py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-gridline max-w-7xl mx-auto divide-y lg:divide-y-0 lg:divide-x divide-gridline">
          <div className="lg:col-span-5 p-8 lg:p-16 relative overflow-hidden">
            <MagneticField className="text-acid absolute -top-1/4 -left-1/4 w-[150%] scale-150 opacity-10" />
            
            <div className="relative z-10">
                <span className="text-acid font-mono font-bold text-xs tracking-widest uppercase mb-4 block">[ Thesis ]</span>
                <h2 className="font-grotesk font-black text-5xl lg:text-7xl tracking-tighter text-off-white leading-[0.9] mb-8">
                  SPEED IS <br/> <span className="font-serif italic font-light">A FEATURE.</span>
                </h2>
                <p className="text-off-white/80 font-serif font-light text-lg leading-relaxed mb-10">
                  Founders lose momentum waiting months for agencies to deliver. We utilize robust layered architectures, AI-assisted coding, and mathematical precision to build production-ready MVPs in weeks.
                </p>
                <Link 
                  href="/process"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-off-white text-off-white font-mono font-bold text-xs tracking-widest uppercase hover:bg-off-white hover:text-navy transition-colors"
                >
                  View Blueprint <ArrowRight size={16} />
                </Link>
            </div>
          </div>
          
          <div className="lg:col-span-7 divide-y divide-gridline">
            {[
              { icon: Zap, title: "Velocity Mechanics", desc: "First iteration ready in 7 days. Full MVP in under 30. No compromises on quality." },
              { icon: Code2, title: "Atomic Architecture", desc: "Next.js, Tailwind, Supabase. Clean, scalable, structured codebases." },
              { icon: Rocket, title: "Capital Aesthetic", desc: "Editorial design language mapped directly to high conversion metrics." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 lg:p-12 flex gap-8 items-start hover:bg-white/5 transition-colors group"
              >
                <div className="p-4 border border-gridline bg-charcoal group-hover:bg-cobalt transition-colors duration-500 rounded-none relative">
                  <div className="absolute top-0 left-0 w-1 h-1 bg-off-white" />
                  <div className="absolute top-0 right-0 w-1 h-1 bg-off-white" />
                  <div className="absolute bottom-0 left-0 w-1 h-1 bg-off-white" />
                  <div className="absolute bottom-0 right-0 w-1 h-1 bg-off-white" />
                  <item.icon size={28} className="text-off-white" />
                </div>
                <div>
                  <h4 className="font-grotesk font-bold text-2xl mb-3 tracking-wide">{item.title}</h4>
                  <p className="text-off-white/60 font-serif font-light leading-relaxed text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ColorBlock>
    </div>
  );
}
