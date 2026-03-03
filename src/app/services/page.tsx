"use client";

import { Code2, Smartphone, Terminal, LayoutTemplate, ArrowRight } from "lucide-react";
import LineOverlay from "@/components/ui/LineOverlay";
import ColorBlock from "@/components/layout/ColorBlock";
import Link from "next/link";

const SERVICES = [
  {
    id: "mvp",
    title: "MVP Engineering",
    desc: "We turn complex ideas into functional, investor-ready MVPs in under 30 days. No bloated architectures, just rapid execution using Next.js, Supabase, and Stripe.",
    icon: Terminal,
    color: "electric-blue" as const,
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
    color: "purple" as const,
    features: ["Architecture Reviews", "Tech Stack Selection", "Code Audits", "Startup Strategy"]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative w-full bg-charcoal min-h-screen">
      <LineOverlay />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[200px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
            <span className="text-electric-blue font-bold text-xs tracking-widest uppercase mb-4 block">Capabilities</span>
            <h1 className="font-grotesk font-black text-6xl md:text-8xl tracking-tighter text-white mb-8">
              WHAT WE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-neon-green to-white">
                BUILD.
              </span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              We operate at the bleeding edge of product development, combining robust engineering with elite design to launch startups that win.
            </p>
        </div>
      </section>

      {/* Services Grid using vibrant panels */}
      <section className="pb-32">
         {SERVICES.map((service, i) => (
             <ColorBlock key={service.id} color={service.color} className={i % 2 !== 0 ? "bg-opacity-10 text-white" : ""}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                   <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                      <service.icon size={48} className="mb-8 opacity-80" />
                      <h2 className="font-grotesk font-black text-5xl md:text-7xl tracking-tighter mb-6">{service.title}</h2>
                      <p className="text-lg opacity-80 leading-relaxed font-light mb-8 max-w-lg">
                         {service.desc}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                         {service.features.map(feat => (
                            <div key={feat} className="flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                               <span className="font-medium tracking-wide text-sm">{feat}</span>
                            </div>
                         ))}
                      </div>

                      <Link href="/contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:underline">
                         Discuss {service.title} <ArrowRight size={16} />
                      </Link>
                   </div>
                   
                   <div className={`relative h-[400px] rounded-3xl overflow-hidden ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                      {/* Decorative Tech Graphic Placeholder */}
                      <div className="absolute inset-10 border border-white/20 rounded-2xl flex items-center justify-center bg-white/5 backdrop-blur-sm">
                         <span className="font-mono text-white/30 text-xs text-center p-8">
                            {`// ${service.id}_module.init()`}<br/><br/>
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
