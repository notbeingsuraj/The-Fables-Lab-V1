/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Play, Layers } from "lucide-react";
import LineOverlay from "@/components/ui/LineOverlay";
import { VectorGrid, GeometricShapes, HandDrawnLines, TopographicPattern, MagneticField } from "@/components/ui/PhysicsIllustrations";
import { useParams } from "next/navigation";
import Link from "next/link";

const PROJECTS_DATA: Record<string, any> = {
  "carefree": {
    name: "Carefree Mobility",
    client: "Carefree Auth",
    role: "Full-Stack Architect",
    duration: "4 Weeks",
    color: "neon-cyan",
    heroText: "REINVENTING RENTALS.",
    summary: "Carefree needed a way to penetrate the stagnant car rental market with a Gen-Z focused, mobile-first approach. I stepped in and architected a high-performance web application featuring instant booking algorithms, immersive WebGL interactions, and a cinematic dark mode UI that completely blew away their previous metrics.",
    problem: "Traditional car rental platforms are bloated, slow, and visually unappealing to younger demographics. They lacked the technical firepower to build a custom solution from scratch in under a month.",
    solution: "I deployed a Next.js 14 architecture with a highly optimized Tailwind CSS design system. By leveraging Framer Motion for micro-interactions and a custom Headless CMS, I delivered an MVP that looks like a multimillion-dollar product, built completely single-handedly.",
    techStack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Supabase", "Stripe API"],
    metrics: [
      { label: "Launch Time", value: "28 Days" },
      { label: "Performance", value: "99/100" },
      { label: "Conversion", value: "+314%" },
    ],
    process: {
      dfd: {
        title: "DATA FLOW Architecture",
        description: "The application relies on a lightning-fast data pipeline. Every user interaction is instantly synced via real-time websockets, heavily optimized to prevent layout shifts. The architecture ensures instant availability.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "ITERATIVE PROTOTYPING",
        description: "Moving from wireframe to production meant relentless iterations. Every micro-animation and transition was carefully sculpted in Framer Motion, ensuring the application felt tactile and responsive.",
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2000&auto=format&fit=crop"
      }
    }
  },
  "aethos": {
    name: "Aethos Finance",
    client: "Aethos Core",
    role: "Lead UI/UX & UI Engineer",
    duration: "6 Weeks",
    color: "cyber-yellow",
    heroText: "DEFI REDEFINED.",
    summary: "Aethos wanted to simplify complex institutional crypto management. I took their chaotic data models and transformed them into a breathtaking, modular UI. I built this dashboard to not just show data, but to command a cinematic experience.",
    problem: "Their existing dashboard was a nightmare of tables and disconnected Web3 components. It was scaring away institutional investors who expected premium fintech experiences.",
    solution: "I built a lightning-fast React architecture with D3.js integrated directly into Framer Motion contexts. The result was a shockingly smooth, hyper-visual terminal that made reading blockchain data feel like flying a spaceship.",
    techStack: ["React", "Web3", "D3.js", "GraphQL", "Tailwind CSS"],
    metrics: [
      { label: "TVL Handled", value: "$40M+" },
      { label: "User Retention", value: "94%" },
      { label: "Render Time", value: "<100ms" },
    ],
    process: {
      dfd: {
        title: "STATE MANAGEMENT & DFD",
        description: "Cryptocurrency data is extremely volatile. I built a state management DFD that strictly isolated live price feeds from user input, guaranteeing zero frame drops even during massive market volatility.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "HIGH-FIDELITY ITERATIONS",
        description: "Financial dashboards require extreme precision. I generated dozens of high-fidelity interface prototypes, refining typography, layout grids, and visual hierarchy until it felt like a tier-one banking terminal.",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000&auto=format&fit=crop"
      }
    }
  },
  "lumina": {
    name: "Lumina AI",
    client: "Lumina Intelligence",
    role: "AI Systems Architect",
    duration: "3 Weeks",
    color: "hot-pink",
    heroText: "PURE INTELLIGENCE.",
    summary: "Lumina needed an enterprise AI content generator prototype fast. I went from concept to a fully functional, high-margin prototype in under 3 weeks. It was an exercise in intense focus and leveraging raw API power.",
    problem: "They were struggling with slow legacy LLMs and disjointed vector databases. The UI was clunky and the generation was constantly timing out.",
    solution: "I completely ripped out their backend and wired up OpenAI directly to Pinecone using Next.js API routes, wrapping it in an extremely vibrant, minimal, and premium interface. It started generating revenue within days.",
    techStack: ["OpenAI", "Next.js", "Pinecone", "SaaS", "Vercel"],
    metrics: [
      { label: "MRR Generated", value: "$10k+" },
      { label: "Latency Drop", value: "-60%" },
      { label: "Time to Market", value: "18 Days" },
    ],
    process: {
      dfd: {
        title: "AI PIPELINE ARCHITECTURE",
        description: "The AI data pipeline was constructed to sanitize prompts contextually before hitting the LLM APIs, utilizing Redis for caching. This Data Flow structure drastically reduced latency and token expenditure.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "WIREFRAMING GENERATION",
        description: "Instead of standard layouts, I prototyped conversational and generative UI elements. I focused intensely on feedback states to ensure users knew the AI was actively processing in real-time.",
        image: "https://images.unsplash.com/photo-1627398240309-089a14405537?q=80&w=2000&auto=format&fit=crop"
      }
    }
  },
  "strata": {
    name: "Strata Homes",
    client: "Strata Investments",
    role: "Mobile/Web Architect",
    duration: "8 Weeks",
    color: "electric-blue",
    heroText: "FRACTIONAL FUTURE.",
    summary: "Strata is a PropTech marketplace designed to fractionalize real estate. I led the development of the primary investment portal, ensuring military-grade security wrapped in an editorial, high-fashion aesthetic.",
    problem: "Buying fractional real estate felt like using a spreadsheet. The client wanted an interface that felt as premium as the luxury properties they were selling.",
    solution: "By utilizing React Native and Firebase alongside a rigid geometric design system, I created an investment platform that feels incredibly dynamic and trustworthy.",
    techStack: ["React Native", "Firebase", "Stripe", "Next.js"],
    metrics: [
      { label: "Tx Volume", value: "$5M+" },
      { label: "Sec Audits", value: "Passed" },
      { label: "Onboarding", value: "<2 Mins" },
    ],
    process: {
      dfd: {
        title: "TRANSACTIONAL DFD",
        description: "Handling real-estate fractionality required a strict edge-to-edge State Machine. The data flow mapped Escrow verifications dynamically, preventing locking states during heavy transaction volumes.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "EDITORIAL PROTOTYPING",
        description: "The mockups were designed like a luxury magazine. I iterated extensively on type-scales and image aspect ratios to ensure properties were presented beautifully on every device.",
        image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2000&auto=format&fit=crop"
      }
    }
  },
  "nexus": {
    name: "Nexus Health",
    client: "Nexus Clinics",
    role: "Full-Stack Engineer",
    duration: "5 Weeks",
    color: "neon-green",
    heroText: "DIGITAL CLINIC.",
    summary: "A telehealth scheduling app targeting boutique clinics. I designed the architecture to handle severe load spikes while maintaining an extremely calm, modern, and engaging user interface.",
    problem: "Legacy medical scheduling is horrific. Nexus needed a system that doctors wouldn't hate using, and patients could navigate intuitively.",
    solution: "I opted for a Vue/Nuxt frontend backed by an aggressive PostgreSQL database, eliminating massive load times and delivering a completely custom-built calendar interface.",
    techStack: ["Nuxt", "Vue", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Bookings", value: "10k+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Load Speed", value: "0.8s" },
    ],
    process: {
      dfd: {
        title: "SCHEDULING DATA FLOW",
        description: "The core DFD was built around concurrency. I mapped the exact journey of a booking request through the load balancers, ensuring zero double-bookings via pessimistic locking in Postgres.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "ACCESSIBLE ITERATIONS",
        description: "Healthcare UI requires accessibility. We went through six major prototyping phases solely focused on color contrast, readable typography, and large touch targets without compromising the futuristic aesthetic.",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop"
      }
    }
  },
  "vertex": {
    name: "Vertex Analytics",
    client: "Vertex B2B",
    role: "Founding Engineer",
    duration: "10 Weeks",
    color: "neon-purple",
    heroText: "DATA VISUALIZED.",
    summary: "Vertex is a B2B SaaS data visualization tool for enterprise e-commerce. I built the entire rendering pipeline and dashboard UI to ensure that displaying millions of rows wouldn't drop frame rates.",
    problem: "Most analytics tools crash the browser when manipulating large datasets. Vertex needed something robust but aggressively stylish.",
    solution: "I implemented a Next.js/Prisma backend directly integrated with AWS, and created a heavily customized, grid-based dashboard that turns boring data into striking visual art.",
    techStack: ["Next.js", "Prisma", "AWS", "Three.js"],
    metrics: [
      { label: "Rows Processed", value: "10M+" },
      { label: "Active Users", value: "2k+" },
      { label: "FPS Maintained", value: "60FPS" },
    ],
    process: {
      dfd: {
        title: "STREAMING ARCHITECTURE",
        description: "A comprehensive DFD was required to stream millions of rows without blocking the main thread. We used Web Workers and optimized buffer geometry in Three.js resulting in buttery-smooth data rendering.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "DATAVIZ PROTOTYPING",
        description: "Graphing data isn't just plotting points. We prototyped physics-based interactions and glowing neon color ramps. The iterations focused heavily on creating an aesthetic reminiscent of cyberpunk UI systems.",
        image: "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?q=80&w=2000&auto=format&fit=crop"
      }
    }
  }
};

export default function DynamicCaseStudyPage() {
  const params = useParams() as any;
  const projectSlug = params?.slug as string;
  const project = PROJECTS_DATA[projectSlug] || PROJECTS_DATA["carefree"];
  
  if (!project) return null;

  const bgClasses: Record<string, string> = {
    "neon-cyan": "bg-neon-cyan",
    "cyber-yellow": "bg-cyber-yellow",
    "hot-pink": "bg-hot-pink",
    "neon-green": "bg-neon-green",
    "electric-blue": "bg-electric-blue",
    "neon-purple": "bg-neon-purple",
  };

  const textClasses: Record<string, string> = {
    "neon-cyan": "text-neon-cyan",
    "cyber-yellow": "text-cyber-yellow",
    "hot-pink": "text-hot-pink",
    "neon-green": "text-neon-green",
    "electric-blue": "text-electric-blue",
    "neon-purple": "text-neon-purple",
  };

  const borderClasses: Record<string, string> = {
    "neon-cyan": "border-neon-cyan",
    "cyber-yellow": "border-cyber-yellow",
    "hot-pink": "border-hot-pink",
    "neon-green": "border-neon-green",
    "electric-blue": "border-electric-blue",
    "neon-purple": "border-neon-purple",
  };

  return (
    <div className="relative w-full bg-charcoal min-h-screen">
      <LineOverlay />
      <VectorGrid className={`opacity-10 ${textClasses[project.color]}`} />
      <GeometricShapes className="opacity-20 mix-blend-screen z-0" />
      <HandDrawnLines className="opacity-20 z-0" />
      <MagneticField className={`absolute top-0 right-0 opacity-10 -translate-y-1/2 w-full max-w-[1000px] ${textClasses[project.color]}`} />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-16 border-b-[1px] border-gridline overflow-hidden bg-navy/80 backdrop-blur-sm">
        <TopographicPattern className={`${textClasses[project.color]} opacity-10 absolute inset-0 mix-blend-screen scale-150`} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12 border-x border-gridline pt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`bg-charcoal border px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest ${textClasses[project.color]} ${borderClasses[project.color]} shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                  Project Initialized By Suraj
                </span>
                <span className="text-off-white/60 font-mono text-xs tracking-widest uppercase">
                  Data.Log // {project.name}
                </span>
              </div>
              <h1 className="font-grotesk font-black text-6xl md:text-8xl lg:text-9xl tracking-tighter text-off-white leading-[0.85] mb-8 uppercase">
                {project.heroText}
              </h1>
            </motion.div>
        </div>
      </section>

      {/* Meta Specs */}
      <section className="py-12 border-b-[1px] border-gridline bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-x border-gridline">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-off-white/40 font-mono text-xs font-bold uppercase tracking-widest mb-2">Entity</p>
              <p className="text-off-white font-grotesk font-medium text-lg">{project.client}</p>
            </div>
            <div>
              <p className="text-off-white/40 font-mono text-xs font-bold uppercase tracking-widest mb-2">Protocol Role</p>
              <p className="text-off-white font-grotesk font-medium text-lg">{project.role}</p>
            </div>
            <div>
              <p className="text-off-white/40 font-mono text-xs font-bold uppercase tracking-widest mb-2">Execution Time</p>
              <p className="text-off-white font-grotesk font-medium text-lg">{project.duration}</p>
            </div>
            <div>
               <a href="#" className={`inline-flex items-center gap-2 font-mono font-bold uppercase tracking-widest text-sm hover:underline ${textClasses[project.color]}`}>
                 Live Target <ArrowUpRight size={16} />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Narrative */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-x border-gridline">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className={`font-mono text-xs tracking-widest uppercase mb-4 block ${textClasses[project.color]}`}>{"// Initialization"}</span>
            <h2 className="font-grotesk font-black text-4xl md:text-5xl mb-6 text-off-white tracking-tighter">THE VISION</h2>
            <p className="text-xl text-off-white/70 font-grotesk font-light leading-relaxed">{project.summary}</p>
          </div>
          
          <div className="lg:col-span-6 lg:col-start-7 space-y-16">
            <div className="bg-navy border border-gridline p-8 relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-1 h-full ${bgClasses[project.color]}`} />
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 border border-gridline bg-charcoal ${textClasses[project.color]}`}>
                  <Play size={20} />
                </div>
                <h3 className="font-mono font-bold text-xl tracking-widest uppercase text-off-white">The Conflict</h3>
              </div>
              <p className="text-off-white/60 font-grotesk leading-relaxed font-light text-lg">{project.problem}</p>
            </div>

            <div className="bg-navy border border-gridline p-8 relative overflow-hidden group">
              <div className={`absolute top-0 right-0 w-1 h-full ${bgClasses[project.color]}`} />
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 border border-gridline bg-charcoal ${textClasses[project.color]}`}>
                  <Code2 size={20} />
                </div>
                <h3 className="font-mono font-bold text-xl tracking-widest uppercase text-off-white">My Solution</h3>
              </div>
              <p className="text-off-white/60 font-grotesk leading-relaxed font-light text-lg">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Engineering Process (DFD & Prototyping) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-x border-gridline">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <span className={`h-px w-12 bg-current ${textClasses[project.color]} glow-${project.color.split('-')[1]}`} />
            <h2 className="font-mono font-bold text-2xl tracking-widest uppercase text-off-white">Architecture & Data Flow</h2>
            <span className={`h-px flex-1 bg-gridline`} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className={`font-grotesk font-black text-4xl uppercase tracking-tighter ${textClasses[project.color]}`}>
                {project.process.dfd.title}
              </h3>
              <p className="text-xl text-off-white/70 font-grotesk font-light leading-relaxed">
                {project.process.dfd.description}
              </p>
            </div>
            <div className={`relative aspect-video border p-2 backdrop-blur-sm ${borderClasses[project.color]}`}>
              <div className={`absolute -inset-0.5 bg-current ${textClasses[project.color]} opacity-20 blur-xl z-0`} />
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/80 to-transparent z-10 pointer-events-none" />
              <img 
                src={project.process.dfd.image} 
                alt="Data Flow Diagram" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 relative z-0"
              />
              <div className={`absolute top-0 right-0 p-3 text-xs font-mono uppercase bg-charcoal border-b border-l ${borderClasses[project.color]} ${textClasses[project.color]} z-20 shadow-md`}>
                SYS_ARCH.PNG
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12 flex-row-reverse text-right">
            <span className={`h-px w-12 bg-current ${textClasses[project.color]} glow-${project.color.split('-')[1]}`} />
            <h2 className="font-mono font-bold text-2xl tracking-widest uppercase text-off-white">Prototyping & Iteration</h2>
            <span className={`h-px flex-1 bg-gridline`} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`relative aspect-[4/3] border p-2 backdrop-blur-sm lg:order-1 order-2 ${borderClasses[project.color]}`}>
              <div className={`absolute -inset-0.5 bg-current ${textClasses[project.color]} opacity-20 blur-xl z-0`} />
              <div className="absolute inset-0 bg-gradient-to-bl from-charcoal/80 to-transparent z-10 pointer-events-none" />
              <img 
                src={project.process.prototyping.image} 
                alt="Prototyping Iterations" 
                className="w-full h-full object-cover filter mix-blend-screen opacity-80 hover:opacity-100 transition-all duration-700 hover:mix-blend-normal relative z-0"
              />
              <div className={`absolute bottom-0 left-0 p-3 text-xs font-mono uppercase bg-charcoal border-t border-r ${borderClasses[project.color]} ${textClasses[project.color]} z-20 shadow-md`}>
                UI_ITERATIONS.FIG
              </div>
            </div>
            <div className="space-y-6 lg:order-2 order-1 text-left lg:text-right">
              <h3 className={`font-grotesk font-black text-4xl uppercase tracking-tighter ${textClasses[project.color]}`}>
                {project.process.prototyping.title}
              </h3>
              <p className="text-xl text-off-white/70 font-grotesk font-light leading-relaxed">
                {project.process.prototyping.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phased Creation Section - Highlight of Suraj's work */}
      <section className="relative py-32 bg-navy border-y border-gridline overflow-hidden">
        <VectorGrid className="opacity-20 text-electric-blue" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full border-x border-gridline">
           <div className="text-center mb-24 relative z-10">
              <span className={`font-mono font-bold text-xs uppercase tracking-widest block mb-4 ${textClasses[project.color]}`}>Execution Blueprint</span>
              <h2 className="font-grotesk font-black text-6xl tracking-tighter text-off-white">MY FOUR PHASE PROTOCOL.</h2>
              <p className="text-off-white/60 font-grotesk font-light text-lg mt-6 max-w-2xl mx-auto">This is exactly how I orchestrated the build from a raw concept to a fully realized production environment.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gridline border border-gridline bg-charcoal relative z-10">
              {[
                { phase: "01", title: "DISCOVERY", quality: "Obsessive Deep Dive", desc: "Before writing a single line of code, I map the entire psychological and technical surface area of the product." },
                { phase: "02", title: "ARCHITECTURE", quality: "Scalable Precision", desc: "Setting up a bulletproof Next.js foundation, defining schemas, and constructing the structural grid system." },
                { phase: "03", title: "EXECUTION", quality: "Relentless Coding", desc: "Isolating myself to build out the components, injecting Framer Motion math, and wiring the entire application together." },
                { phase: "04", title: "LAUNCH", quality: "Zero Tolerance deployment", desc: "Running intense QA, performance audits, and ensuring the final live build matches the visual perfection of the design." }
              ].map((step, i) => (
                <div key={i} className="p-8 group hover:bg-navy transition-colors relative">
                   <span className={`absolute top-4 right-6 font-grotesk font-black text-5xl opacity-10 group-hover:opacity-40 transition-opacity ${textClasses[project.color]}`}>{step.phase}</span>
                   <h3 className="font-mono font-bold text-xl text-off-white tracking-widest mb-2 mt-12">{step.title}</h3>
                   <span className={`text-[10px] font-mono tracking-widest uppercase mb-4 block border px-2 py-1 inline-block ${borderClasses[project.color]} ${textClasses[project.color]} shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>{step.quality}</span>
                   <p className="text-off-white/60 font-grotesk font-light text-xs leading-loose">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Big Impact Numbers wrapped in ColorBlock style context */}
      <div className={`border-b border-gridline`}>
        <div className="max-w-7xl mx-auto border-x border-gridline">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gridline">
            {project.metrics.map((metric: any, i: number) => (
               <div key={i} className={`p-12 text-center md:text-left bg-charcoal backdrop-blur-md hover:${bgClasses[project.color]} hover:bg-opacity-10 transition-colors group`}>
                 <p className={`font-grotesk font-black text-6xl lg:text-7xl tracking-tighter mb-4 text-off-white transition-colors`}>{metric.value}</p>
                 <p className={`font-mono font-bold uppercase tracking-widest text-xs ${textClasses[project.color]} transition-colors`}>{metric.label}</p>
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-x border-gridline">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div>
             <span className={`font-mono font-bold text-xs tracking-widest uppercase mb-3 block ${textClasses[project.color]}`}>{"</> Core Components"}</span>
             <h2 className="font-grotesk font-black text-5xl tracking-tighter text-off-white">MY TECH STACK.</h2>
           </div>
           <Layers className={`opacity-40 ${textClasses[project.color]}`} size={64} />
        </div>
        <div className="flex flex-wrap gap-4 px-2">
          {project.techStack.map((tech: string) => (
            <div key={tech} className={`px-6 py-4 bg-navy border font-mono font-bold text-sm tracking-widest uppercase text-off-white hover:bg-charcoal transition-colors cursor-default ${borderClasses[project.color]}`}>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Next Project CTA Footer */}
      <section className="relative py-40 border-t-[1px] border-gridline flex items-center justify-center text-center overflow-hidden bg-navy">
         <MagneticField className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] text-hot-pink opacity-20 animate-[spin_60s_linear_infinite]" />
         <div className="relative z-10 max-w-3xl px-4">
            <p className="text-off-white/40 font-mono font-bold text-xs tracking-widest uppercase mb-6">Review Next Implementation</p>
            <Link href="/projects">
              <h2 className="font-grotesk font-black text-5xl md:text-7xl tracking-tighter mb-10 text-off-white hover:text-electric-blue transition-colors hover:glow-cyan">
                 RETURN TO ARCHIVE.
              </h2>
            </Link>
            <Link href="/projects" className="px-10 py-5 bg-charcoal border border-gridline text-off-white font-mono font-bold tracking-widest uppercase hover:bg-electric-blue transition-all">
               View All
            </Link>
         </div>
      </section>
    </div>
  );
}
