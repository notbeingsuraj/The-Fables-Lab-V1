"use client";

import LineOverlay from "@/components/ui/LineOverlay";
import ColorBlock from "@/components/layout/ColorBlock";
import { TopographicPattern, VectorGrid, MagneticField } from "@/components/ui/PhysicsIllustrations";
import { Search, PenTool, Braces, Rocket } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Arch",
    icon: Search,
    desc: "We don't just write code; we interrogate the problem. In week one, we define the product scope, select the optimal database schema, and finalize the exact user journeys required for launch.",
    deliverables: ["Technical Specification", "Database Schema", "User Flow Diagrams"],
    color: "cobalt" as const,
  },
  {
    num: "02",
    title: "Design System",
    icon: PenTool,
    desc: "A product is only as good as its interface. We build a comprehensive, modular design system in Figma, establishing the visual hierarchy, color tokens, and typographic scale before a single line of frontend code is written.",
    deliverables: ["Figma Prototype", "Component Library", "Motion Specs"],
    color: "acid" as const,
  },
  {
    num: "03",
    title: "Rapid Build",
    icon: Braces,
    desc: "We execute the build phase with ruthless efficiency. Utilizing our proprietary boilerplate architectures alongside Next.js and Supabase, we transition from design to fully functional frontend and backend systems simultaneously.",
    deliverables: ["Frontend App", "Backend API", "Admin Dashboard"],
    color: "safety-orange" as const,
  },
  {
    num: "04",
    title: "Launch & Iterate",
    icon: Rocket,
    desc: "The MVP is deployed to production via Vercel. We set up analytics, monitor for critical errors, and remain on standby to iterate immediately based on initial user feedback.",
    deliverables: ["Production Deployment", "Analytics Dashboard", "Source Code Handoff"],
    color: "cobalt" as const,
  },
];

export default function ProcessPage() {
  return (
    <div className="relative w-full bg-transparent min-h-screen pt-20">
      <LineOverlay />
      <VectorGrid className="opacity-10" />

      <section className="relative pt-20 pb-20 border-b border-gridline bg-charcoal overflow-hidden">
        <MagneticField className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[1200px] h-[1200px] text-safety-orange opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full border-x border-gridline pt-12 min-h-[40vh] flex flex-col justify-center">
            <span className="text-safety-orange font-mono font-bold text-xs tracking-widest uppercase mb-4 block">{"// The Formula"}</span>
            <h1 className="font-serif italic font-light text-6xl md:text-8xl tracking-tighter text-off-white mb-8">
              HOW WE <br />
              <span className="font-grotesk not-italic font-black text-transparent text-stroke">
                OPERATE.
              </span>
            </h1>
            <p className="text-xl text-off-white/70 max-w-2xl font-serif font-light leading-relaxed">
              We have productized startup engineering. Our 30-day MVP framework minimizes risk, eliminates redundant meetings, and maximizes speed to market.
            </p>
        </div>
      </section>

      {/* The Timeline */}
      <section className="max-w-7xl mx-auto relative z-10 bg-transparent">
        
        <div className="flex flex-col border-x border-gridline divide-y divide-gridline">
          {STEPS.map((step) => (
             <div key={step.num} className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative group group-hover:bg-charcoal/30 transition-colors">

                <div className="lg:col-span-4 flex flex-col justify-center p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gridline bg-charcoal/50 backdrop-blur-md relative overflow-hidden">
                   <TopographicPattern className={`text-${step.color} opacity-10 absolute inset-0 mix-blend-screen scale-150 -translate-x-1/4`} />
                   
                   <h2 className={`font-grotesk font-black text-8xl md:text-9xl tracking-tighter text-${step.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500 relative z-10`}>
                     {step.num}
                   </h2>
                   <div className="mt-4 relative z-10">
                     <p className="font-mono text-off-white uppercase tracking-widest text-xs mb-2">Phase {parseInt(step.num)}</p>
                     <p className="text-off-white/40 font-mono text-[10px] tracking-widest uppercase border border-gridline inline-block px-2 py-1">Est: 1 Week</p>
                   </div>
                </div>

                <div className="lg:col-span-8 bg-black/40 p-8 md:p-16 backdrop-blur-sm transition-colors duration-500">
                   <div className="flex items-center gap-6 mb-8 border-b border-gridline pb-8">
                     <div className={`p-4 border border-gridline bg-charcoal shadow-[0_0_20px_rgba(255,255,255,0.02)]`}>
                        <step.icon size={28} className={`text-${step.color}`} />
                     </div>
                     <h3 className="font-serif italic font-light text-4xl md:text-5xl text-off-white">{step.title}</h3>
                   </div>
                   
                   <p className="text-off-white/70 font-serif font-light leading-relaxed text-lg mb-12 max-w-2xl">
                     {step.desc}
                   </p>

                   <div className="pt-6">
                     <p className="text-off-white/40 font-mono tracking-widest uppercase text-xs mb-6 block">{"// Key Deliverables"}</p>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {step.deliverables.map(item => (
                           <li key={item} className="flex items-center gap-3 text-off-white/80 text-sm font-mono tracking-wide uppercase text-xs border border-gridline p-3 bg-charcoal/30">
                              <div className={`w-1.5 h-1.5 bg-${step.color} shadow-[0_0_8px_currentColor]`} />
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
      <ColorBlock color="navy" className="text-center border-t border-gridline border-b !py-0">
        <div className="max-w-7xl mx-auto border-x border-gridline py-32 relative overflow-hidden">
             <VectorGrid className="opacity-20 text-acid" />
             <div className="relative z-10">
                 <h2 className="font-grotesk font-black text-6xl md:text-8xl tracking-tighter mb-8 leading-[0.9] text-off-white">
                    READY TO <br/><span className="font-serif italic font-light text-acid">BUILD?</span>
                 </h2>
                 <p className="text-off-white/70 font-serif font-light text-xl mb-12 max-w-xl mx-auto">
                    Our next cohort begins soon. Secure your build slot and let&apos;s turn your concept into a tangible product.
                 </p>
                 <button className="px-8 py-4 bg-acid text-charcoal font-mono font-bold text-sm uppercase tracking-widest hover:glow-acid transition-all duration-300">
                    Initialize Discovery
                 </button>
             </div>
        </div>
      </ColorBlock>
    </div>
  );
}
