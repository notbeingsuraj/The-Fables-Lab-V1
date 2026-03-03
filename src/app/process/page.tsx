"use client";

import LineOverlay from "@/components/ui/LineOverlay";
import ColorBlock from "@/components/layout/ColorBlock";
import { Search, PenTool, Braces, Rocket } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Arch",
    icon: Search,
    desc: "We don&apos;t just write code; we interrogate the problem. In week one, we define the product scope, select the optimal database schema, and finalize the exact user journeys required for launch.",
    deliverables: ["Technical Specification", "Database Schema", "User Flow Diagrams"],
    color: "purple" as const,
  },
  {
    num: "02",
    title: "Design System",
    icon: PenTool,
    desc: "A product is only as good as its interface. We build a comprehensive, modular design system in Figma, establishing the visual hierarchy, color tokens, and typographic scale before a single line of frontend code is written.",
    deliverables: ["Figma Prototype", "Component Library", "Motion Specs"],
    color: "electric-blue" as const,
  },
  {
    num: "03",
    title: "Rapid Build",
    icon: Braces,
    desc: "We execute the build phase with ruthless efficiency. Utilizing our proprietary boilerplate architectures alongside Next.js and Supabase, we transition from design to fully functional frontend and backend systems simultaneously.",
    deliverables: ["Frontend App", "Backend API", "Admin Dashboard"],
    color: "hot-pink" as const,
  },
  {
    num: "04",
    title: "Launch & Iterate",
    icon: Rocket,
    desc: "The MVP is deployed to production via Vercel. We set up analytics, monitor for critical errors, and remain on standby to iterate immediately based on initial user feedback.",
    deliverables: ["Production Deployment", "Analytics Dashboard", "Source Code Handoff"],
    color: "neon-green" as const,
  },
];

export default function ProcessPage() {
  return (
    <div className="relative w-full bg-charcoal min-h-screen">
      <LineOverlay />

      <section className="relative pt-32 pb-20 border-b-[0.5px] border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <span className="text-hot-pink font-bold text-xs tracking-widest uppercase mb-4 block">The Formula</span>
            <h1 className="font-grotesk font-black text-6xl md:text-8xl tracking-tighter text-white mb-8">
              HOW WE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-hot-pink to-purple">
                OPERATE.
              </span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
              We have productized startup engineering. Our 30-day MVP framework minimizes risk, eliminates redundant meetings, and maximizes speed to market.
            </p>
        </div>
      </section>

      {/* The Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="space-y-32">
          {STEPS.map((step, i) => (
             <div key={step.num} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative group">
                
                {/* Connecting Line (Desktop) */}
                {i !== STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-32 left-[calc(41.666%-2px)] w-[1px] h-[calc(100%+80px)] bg-white/10 group-hover:bg-white/30 transition-colors" />
                )}

                <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col gap-6 lg:gap-0 lg:pr-12 md:items-center lg:items-end text-left lg:text-right">
                   <h2 className={`font-grotesk font-black text-8xl md:text-9xl tracking-tighter text-${step.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500 line-clamp-1`}>
                     {step.num}
                   </h2>
                   <div className="mt-4 md:mt-0 lg:mt-4">
                     <p className="font-bold text-white uppercase tracking-widest text-sm mb-2">Phase {parseInt(step.num)}</p>
                     <p className="text-white/40 font-mono text-xs">Est: 1 Week</p>
                   </div>
                </div>

                <div className="lg:col-span-7 bg-white/[0.02] border-[0.5px] border-white/10 p-8 md:p-12 rounded-4xl backdrop-blur-sm hover:bg-white/5 transition-colors duration-500">
                   <div className="flex items-center gap-4 mb-6">
                     <div className={`p-4 rounded-2xl bg-${step.color}/10`}>
                        <step.icon size={32} className={`text-${step.color}`} />
                     </div>
                     <h3 className="font-grotesk font-black text-3xl md:text-4xl text-white">{step.title}</h3>
                   </div>
                   
                   <p className="text-white/60 font-light leading-relaxed text-lg mb-8">
                     {step.desc}
                   </p>

                   <div className="border-t-[0.5px] border-white/10 pt-6">
                     <p className="text-white/40 font-bold uppercase tracking-widest text-xs mb-4 block">Key Deliverables</p>
                     <ul className="space-y-3">
                        {step.deliverables.map(item => (
                           <li key={item} className="flex items-center gap-3 text-white/80 text-sm font-medium">
                              <div className={`w-1.5 h-1.5 rounded-full bg-${step.color} shadow-[0_0_10px_currentColor]`} />
                              {item}
                           </li>
                        ))}
                     </ul>
                   </div>
                </div>
             </div>
          ))}
        </div>

      </section>

      {/* Final CTA wrapped in ColorBlock */}
      <ColorBlock color="neon-green" className="text-center">
         <h2 className="font-grotesk font-black text-6xl md:text-8xl tracking-tighter mb-8 leading-[0.9]">
            READY TO <br/>BUILD?
         </h2>
         <p className="text-charcoal/70 text-lg font-medium mb-10 max-w-xl mx-auto">
            Our next cohort begins soon. Secure your build slot and let&apos;s turn your concept into a tangible product.
         </p>
         <button className="px-10 py-5 rounded-full bg-charcoal text-neon-green font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            Book Discovery Call
         </button>
      </ColorBlock>
    </div>
  );
}
