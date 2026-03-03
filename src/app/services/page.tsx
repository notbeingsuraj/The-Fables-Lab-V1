"use client";

import { Code2, Smartphone, Terminal, LayoutTemplate, ArrowRight } from "lucide-react";
import LineOverlay from "@/components/ui/LineOverlay";
import ColorBlock from "@/components/layout/ColorBlock";
import { TopographicPattern, VectorGrid, MagneticField, GeometricShapes, HandDrawnLines } from "@/components/ui/PhysicsIllustrations";
import Link from "next/link";

const SERVICES = [
  {
    id: "mvp",
    title: "MVP Engineering",
    desc: "We turn complex ideas into functional, investor-ready MVPs in under 30 days. No bloated architectures, just rapid execution using Next.js, Supabase, and Stripe.",
    icon: Terminal,
    color: "neon-cyan" as const,
    features: ["Rapid Prototyping", "Scalable Database Design", "API Integrations", "Authentication & Payments"]
  },
  {
    id: "uiux",
    title: "UI/UX Systems",
    desc: "Cinematic, high-conversion interfaces that command premium pricing. We build atomic design systems that scale flawlessly across web and mobile.",
    icon: LayoutTemplate,
    color: "hot-pink" as const,
    features: ["Design System Creation", "Figma Prototypes", "Framer Motion Animations", "Conversion Optimization"]
  },
  {
    id: "mobile",
    title: "Mobile Experiences",
    desc: "Native-feeling mobile applications built in React Native. We deploy to both iOS and Android simultaneously without compromising on performance.",
    icon: Smartphone,
    color: "neon-green" as const,
    features: ["React Native / Expo", "Offline Capabilities", "Push Notifications", "App Store Deployment"]
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    desc: "Fractional CTO services for early-stage startups. We help you define your architecture, vet technical hires, and plan your product roadmap.",
    icon: Code2,
    color: "cyber-yellow" as const,
    features: ["Architecture Reviews", "Tech Stack Selection", "Code Audits", "Startup Strategy"]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative w-full bg-transparent min-h-screen">
      <LineOverlay />
      <VectorGrid className="opacity-10" />
      <GeometricShapes className="opacity-60 mix-blend-screen z-0" />
      <HandDrawnLines className="opacity-50 z-0" />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-gridline bg-charcoal">
        <MagneticField className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-electric-blue opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center border-x border-gridline min-h-[40vh] flex flex-col justify-center">
            <span className="text-neon-green font-mono font-bold text-xs tracking-widest uppercase mb-4 block">Sys / Capabilities</span>
            <h1 className="font-grotesk italic font-light text-6xl md:text-8xl tracking-tighter text-off-white mb-8">
              WHAT WE <br />
              <span className="font-grotesk not-italic font-black text-transparent text-stroke">
                BUILD.
              </span>
            </h1>
            <p className="text-xl text-off-white/70 max-w-2xl mx-auto font-grotesk font-light leading-relaxed">
              We operate at the bleeding edge of product development, combining robust engineering mathematical precision with elite design to launch startups that win.
            </p>
        </div>
      </section>

      {/* Services Grid using vibrant panels */}
      <section className="pb-32">
         {SERVICES.map((service, i) => (
             <ColorBlock key={service.id} color="transparent" className={`!py-0 border-b border-gridline`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto border-x lg:divide-x divide-y lg:divide-y-0 divide-gridline items-stretch">
                   
                   <div className={`lg:col-span-6 p-8 lg:p-16 flex flex-col justify-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                      <div className={`p-4 border border-gridline inline-block mb-8 self-start bg-charcoal`}>
                        <service.icon size={32} className={`text-${service.color}`} />
                      </div>
                      <h2 className="font-grotesk font-black text-5xl md:text-6xl tracking-tighter mb-6 uppercase">{service.title}</h2>
                      <p className="text-lg text-off-white/70 font-grotesk font-light leading-relaxed mb-8 max-w-lg">
                         {service.desc}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border-t border-gridline pt-8">
                         {service.features.map(feat => (
                            <div key={feat} className="flex items-center gap-3">
                               <div className={`w-1.5 h-1.5 bg-${service.color} shadow-[0_0_8px_currentColor]`} />
                               <span className="font-mono text-off-white/80 text-xs tracking-widest uppercase">{feat}</span>
                            </div>
                         ))}
                      </div>

                      <Link href="/contact" className={`inline-flex items-center gap-2 font-mono font-bold uppercase tracking-widest text-xs text-${service.color} hover:underline w-fit`}>
                         Discuss {service.title} <ArrowRight size={16} />
                      </Link>
                   </div>
                   
                   <div className={`lg:col-span-6 relative flex flex-col justify-center border-gridline bg-navy/50 overflow-hidden ${i % 2 !== 0 ? "lg:order-1 border-r-0" : ""}`}>
                      <TopographicPattern className={`text-${service.color} opacity-20`} />
                      {/* Decorative Tech Graphic Placeholder */}
                      <div className="absolute inset-10 border border-gridline flex items-center justify-center bg-charcoal/80 backdrop-blur-md">
                         <span className="font-mono text-off-white/50 text-xs text-center p-8 leading-loose">
                            <span className={`text-${service.color}`}>{`// ${service.id}_module.init()`}</span><br/><br/>
                            const sys = await Engine.boot();<br/>
                            {`sys.deploy('${service.title.toLowerCase()}');`}
                         </span>
                      </div>
                   </div>
                </div>
             </ColorBlock>
         ))}
      </section>
    </div>
  );
}
