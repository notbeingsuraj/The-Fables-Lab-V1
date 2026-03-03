"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Code2, Rocket } from "lucide-react";
import LineOverlay from "@/components/ui/LineOverlay";
import ColorBlock from "@/components/layout/ColorBlock";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";

const FEATURED_PROJECTS = [
  {
    id: "carefree",
    name: "Carefree Mobility",
    description: "A premium car rental platform designed to eliminate queues and maximize driving joy. Built with a futuristic aesthetic and robust booking engine.",
    image: "", // Placeholder
    tags: ["Next.js", "Tailwind", "Supabase", "Stripe"],
    color: "electric-blue" as const,
  },
  {
    id: "aethos",
    name: "Aethos Finance",
    description: "DeFi dashboard redefining institutional crypto management. Simplified complex data visualization into a stunning, modular UI.",
    image: "",
    tags: ["React", "Web3", "D3.js", "GraphQL"],
    color: "purple" as const,
  },
  {
    id: "lumina",
    name: "Lumina AI",
    description: "Enterprise AI content generator MVP. Went from concept to fully functional prototype generating $10k MRR in under 3 weeks.",
    image: "",
    tags: ["OpenAI", "Next.js", "Pinecone", "SaaS"],
    color: "neon-green" as const,
  },
];

export default function Home() {
  return (
    <div className="relative w-full bg-charcoal">
      <LineOverlay />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-electric-blue/15 rounded-full blur-[150px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple/15 rounded-full blur-[150px] -z-10 animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 lg:col-start-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-white font-bold text-xs tracking-widest uppercase">
                  Accepting New Projects
                </span>
              </div>
              
              <h1 className="font-grotesk font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] text-white overflow-hidden mb-8">
                BUILD <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-purple to-hot-pink">
                  FAST.
                </span>
                <br />SCALE.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-2xl mb-12">
                We are a product studio that crafts investor-ready MVPs in under 30 days. No fluff, just premium engineering and cinematic design.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-neon-green text-charcoal font-black text-sm uppercase tracking-widest hover:scale-105 hover:glow-neon-green transition-all duration-300"
                >
                  Start Your build
                </Link>
                <Link 
                  href="/projects"
                  className="flex items-center gap-3 text-white/70 hover:text-white font-bold text-sm uppercase tracking-widest transition-colors group"
                >
                  View Our Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects wrapped in Navy ColorBlock */}
      <ColorBlock color="navy" className="border-t-[0.5px] border-white/10" id="work">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-electric-blue font-bold text-xs tracking-widest uppercase mb-3 block">Case Studies</span>
            <h2 className="font-grotesk font-black text-5xl md:text-7xl tracking-tighter text-white">
              RECENT <br />LAUNCHES.
            </h2>
          </motion.div>
          <Link 
            href="/projects" 
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors group"
          >
            All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </ColorBlock>

      {/* Value Prop / Process Preview using Hot Pink Block */}
      <ColorBlock color="purple" delay={0.2}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-white/70 font-bold text-xs tracking-widest uppercase mb-3 block">Why Us?</span>
            <h2 className="font-grotesk font-black text-5xl lg:text-7xl tracking-tighter text-white leading-[0.9] mb-8">
              SPEED IS <br/> A FEATURE.
            </h2>
            <p className="text-white/80 text-lg font-light leading-relaxed mb-10">
              Founders lose momentum waiting months for agencies to deliver. We utilize robust boilerplate architectures, AI-assisted coding, and a rigid design system to build production-ready MVPs in weeks, not months.
            </p>
            <Link 
              href="/process"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white rounded-full text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-purple transition-colors"
            >
              See our Process <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            {[
              { icon: Zap, title: "Rapid Execution", desc: "First iteration ready in 7 days. Full MVP in under 30." },
              { icon: Code2, title: "Premium Stack", desc: "Next.js, Tailwind, Supabase. Scalable out of the box." },
              { icon: Rocket, title: "Investor Ready", desc: "Cinematic design that converts visits into venture capital." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-black/20 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex gap-6 items-start hover:bg-black/30 transition-colors"
              >
                <div className="p-3 bg-white/10 rounded-2xl">
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 tracking-wide">{item.title}</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ColorBlock>
    </div>
  );
}
