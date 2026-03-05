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
    heroImage: "https://images.unsplash.com/photo-1510279931157-4caac8cbb72c?q=80&w=2000&auto=format&fit=crop",
    solutionImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop",
    summary: "Carefree needed a way to penetrate the stagnant car rental market with a Gen-Z focused, mobile-first approach. I stepped in and architected a high-performance web application featuring instant booking algorithms, immersive WebGL interactions, and a cinematic dark mode UI. I spent countless late nights refining every micro-interaction to ensure it blew away their previous sluggish metrics.",
    problem: "Traditional car rental platforms are bloated, slow, and visually unappealing to younger demographics. They lacked the technical firepower to build a custom solution from scratch in under a month, making it intensely frustrating for the client to watch competitors launch faster with inferior products.",
    solution: "I deployed a Next.js 14 architecture with a highly optimized Tailwind CSS design system. By leveraging Framer Motion for complex animations and a custom Headless CMS, I delivered an MVP that looks and feels like a multimillion-dollar product, engineered completely single-handedly over a brutal but rewarding sprint.",
    techStack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Supabase", "Stripe API"],
    metrics: [
      { label: "Launch Time", value: "28 Days" },
      { label: "Performance", value: "99/100" },
      { label: "Conversion", value: "+314%" },
    ],
    thoughtProcess: [
      { id: 1, title: "01. Mental Model Deconstruction", text: "I tore apart existing car rental flows, analyzing exactly what makes them feel so painfully slow. The goal was to remove cognitive friction and reduce the clicks-to-book ratio by at least 60%." },
      { id: 2, title: "02. Motion & Physics Ideation", text: "Because static UI feels cheap, I conceptualized a physics-based interaction model where buttons resist interaction and swipe gestures feel tactile, using heavy spring math in Framer Motion." },
      { id: 3, title: "03. Aggressive Database Modeling", text: "To support instant availability checks, I denormalized the car availability schema in Postgres. This allowed me to fetch localized inventory in under 40ms globally." },
      { id: 4, title: "04. Polish & Deployment", text: "The final stretch involved ruthless performance audits. I stripped out heavy JS libraries and moved computing to the edge, resulting in a 99/100 Lighthouse score." }
    ],
    process: {
      dfd: {
        title: "DATA FLOW Architecture",
        description: "The application relies on a lightning-fast data pipeline. Every user interaction is instantly synced via real-time websockets, heavily optimized to prevent layout shifts. I obsessed over the database layer, specifically optimizing the PostgreSQL queries to achieve consistent sub-50ms latency across the board.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "ITERATIVE PROTOTYPING",
        description: "Moving from wireframe to production meant relentless iterations. Every micro-animation and transition was carefully sculpted in Framer Motion, ensuring the application felt tactile. The effort was astronomical—over 40 prototype versions were scrapped before we landed on the perfect, immersive feel.",
        image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2000&auto=format&fit=crop",
    solutionImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    summary: "Aethos wanted to simplify complex institutional crypto management. I took their chaotic data models and transformed them into a breathtaking, modular UI. I built this dashboard to not just show data, but to command a cinematic experience, wrestling with raw WebSocket feeds for days to ensure absolute fluidity.",
    problem: "Their existing dashboard was a nightmare of disconnected tables and laggy Web3 components. It was actively scaring away institutional investors who expected premium, zero-latency fintech experiences, putting millions of TVL at risk.",
    solution: "I built a lightning-fast React architecture with D3.js integrated directly into Framer Motion contexts. The result was a shockingly smooth, hyper-visual terminal that made reading blockchain data feel like flying a spaceship. The visual density is high, but the cognitive load is effectively zero.",
    techStack: ["React", "Web3", "D3.js", "GraphQL", "Tailwind CSS"],
    metrics: [
      { label: "TVL Handled", value: "$40M+" },
      { label: "User Retention", value: "94%" },
      { label: "Render Time", value: "<100ms" },
    ],
    thoughtProcess: [
      { id: 1, title: "01. Information Hierarchy Mapping", text: "Dealing with institutional DeFi means drowning in data. I mapped out the core psychological needs of a trader: extreme clarity on volatile assets, and instant execution." },
      { id: 2, title: "02. The Terminal Concept", text: "I rejected standard dashboard layouts and instead designed an 'operating system' or 'terminal' interface. This allowed for deeply nested, modular widgets that the user could freely configure." },
      { id: 3, title: "03. Zero-Latency D3 Implementation", text: "Plotting thousands of candlesticks usually crashes React. I bypassed React's render cycle entirely for the charts, mounting D3 directly to the canvas for native-level GPU paint speeds." },
      { id: 4, title: "04. Cinematic Execution", text: "Added subtle chromatic aberration and glow effects to positive/negative values. It makes making (or losing) money feel incredibly visceral and impactful." }
    ],
    process: {
      dfd: {
        title: "STATE MANAGEMENT & DFD",
        description: "Cryptocurrency data is incredibly volatile. I engineered a strict state management DFD that completely isolated live price feeds from user input. This required massive architectural rewrites but guaranteed zero frame drops even during intense market volatility and thousands of ticks per second.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "HIGH-FIDELITY ITERATIONS",
        description: "Financial dashboards demand extreme precision. I generated dozens of high-fidelity interface prototypes, refining typography, layout grids, and visual hierarchy until it felt like a tier-one banking terminal wrapped in a cyberpunk aesthetic. The visual iterations were exhausting but absolutely critical.",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2000&auto=format&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2000&auto=format&fit=crop",
    solutionImage: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop",
    summary: "Lumina needed an enterprise AI content generator prototype fast. I went from concept to a fully functional, high-margin prototype in under 3 weeks. It was an exercise in intense focus, leveraging raw API power while crafting an interface that felt completely frictionless to end-users.",
    problem: "They were struggling with slow legacy LLMs and a heavily disjointed vector database approach. The UI was clunky, and generation operations were constantly timing out, completely destroying the user trust during demonstrations.",
    solution: "I entirely ripped out their legacy backend and wired OpenAI directly to Pinecone using edge-deployed Next.js API routes. I wrapped this raw power in an extremely vibrant, minimal, and premium interface. The application started generating revenue within days of its deployment.",
    techStack: ["OpenAI", "Next.js", "Pinecone", "SaaS", "Vercel"],
    metrics: [
      { label: "MRR Generated", value: "$10k+" },
      { label: "Latency Drop", value: "-60%" },
      { label: "Time to Market", value: "18 Days" },
    ],
    thoughtProcess: [
      { id: 1, title: "01. Prompt Engineering Foundation", text: "Before writing the UI, I spent a week locked in prompt optimization. I needed the LLM to return strictly structured JSON so I could programmatically render rich components, rather than dumping plain text." },
      { id: 2, title: "02. The Magic Sandbox", text: "An AI tool needs to feel magical. I designed the input field to be the absolute center of the universe—a glowing, breathing component that reacts physically to user keystrokes." },
      { id: 3, title: "03. Streaming UI Pipeline", text: "Waiting 15 seconds for a response is death for UX. I established an edge-streaming pipeline that parses LLM chunks in real-time, rendering UI elements instantly as the stream completes them." },
      { id: 4, title: "04. Vector Caching", text: "To save API costs, I built a brutal caching layer using Pinecone. If a similar prompt was fired globally within a 90% vector similarity, it returned the cached result instantly, saving the client thousands." }
    ],
    process: {
      dfd: {
        title: "AI PIPELINE ARCHITECTURE",
        description: "The AI data pipeline was constructed to sanitize prompts contextually before hitting the LLM APIs, utilizing Redis for aggressive edge caching. This Data Flow structure drastically reduced latency and token expenditure. I rigorously stress-tested the pipeline to handle massive usage spikes without degrading.",
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "WIREFRAMING GENERATION",
        description: "Instead of standard block layouts, I heavily prototyped conversational and generative UI elements. I focused intensely on micro-feedback states—glowing text, morphing loaders—to ensure users always felt the AI was actively processing in real-time. It's the small visual cues that make AI feel like magic.",
        image: "https://images.unsplash.com/photo-1550684376-ef3dbceadd93?q=80&w=2000&auto=format&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000&auto=format&fit=crop",
    solutionImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop",
    summary: "Strata is a PropTech marketplace designed to fractionalize real estate. I led the development of the primary investment portal from absolute scratch, ensuring military-grade transaction security wrapped tightly in an editorial, high-fashion aesthetic.",
    problem: "Buying fractional real estate felt like using an Excel spreadsheet. The client was bleeding potential high-net-worth individuals because the interface felt cheap. They wanted a platform that felt as premium and trustworthy as the multi-million dollar luxury properties they were fractionalizing.",
    solution: "By utilizing React Native and Firebase alongside a rigidly mathematical geometric design system, I created an investment platform that feels incredibly dynamic and trustworthy. Every screen transition was choreographed to instill a sense of absolute security and luxury.",
    techStack: ["React Native", "Firebase", "Stripe", "Next.js"],
    metrics: [
      { label: "Tx Volume", value: "$5M+" },
      { label: "Sec Audits", value: "Passed" },
      { label: "Onboarding", value: "<2 Mins" },
    ],
    thoughtProcess: [
      { id: 1, title: "01. Establishing Trust via Typography", text: "When asking users for $10,000+ fractional investments on a screen, trust is everything. I selected austere, razor-sharp typefaces and implemented intense grid logic to project total systemic stability." },
      { id: 2, title: "02. High-Fashion Real Estate", text: "I engineered a custom image-loading pipeline that applies subtle color grading via canvas to property images, ensuring every listing looks like an editorial spread in Vogue Architecture." },
      { id: 3, title: "03. Transactional Security Flows", text: "I mapped out an unbreakable State Machine for the checkout flow. The UI physically locked down during escrow verification, using deterministic loading sequences to communicate high security to the user." },
      { id: 4, title: "04. Native Bridge Optimization", text: "To keep the mobile experience perfectly buttery, I wrote custom Native Modules for the React Native bridge to handle crypto-graphic signing without dropping a single UI frame." }
    ],
    process: {
      dfd: {
        title: "TRANSACTIONAL DFD",
        description: "Handling real-estate fractionality required a strict edge-to-edge State Machine. The data flow mapped Escrow verifications dynamically, preventing locking states during heavy transaction volumes. Building this transactional flow required brutal attention to edge cases and database rollbacks.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "EDITORIAL PROTOTYPING",
        description: "The mockups were purposefully designed to feel like a digital luxury magazine. I iterated endlessly on subtle type-scales, grid alignments, and image aspect ratios. The goal was to ensure properties were presented flawlessly on everything from a massive 4K display to a cracked iPhone screen.",
        image: "https://images.unsplash.com/photo-1528459801415-a3c510738916?q=80&w=2000&auto=format&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2000&auto=format&fit=crop",
    solutionImage: "https://images.unsplash.com/photo-1550807014-1236e91b92d4?q=80&w=2000&auto=format&fit=crop",
    summary: "A telehealth scheduling app targeting boutique clinics. I designed the entire backend architecture to handle severe API load spikes while maintaining an extremely calm, modern, and visually engaging frontend user interface. Balancing clinical reliability with cutting-edge design was the ultimate challenge here.",
    problem: "Legacy medical scheduling is horrific for everyone involved. Nexus desperately needed a system that exhausted doctors wouldn't hate using at 3 AM, and that anxious patients could navigate intuitively without calling support.",
    solution: "I opted for a Vue/Nuxt frontend backed by an aggressively tuned PostgreSQL database, eliminating the massive load times inherent to typical medical apps. I delivered a completely custom-built calendar interface from the ground up that finally made booking appointments feel effortless.",
    techStack: ["Nuxt", "Vue", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Bookings", value: "10k+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Load Speed", value: "0.8s" },
    ],
    thoughtProcess: [
      { id: 1, title: "01. Stress-Free Architecture", text: "Medical environments are high-stress. The UI had to be actively calming. I created a design system based entirely on incredibly soft neon-greens and massive amounts of negative space to lower the user's resting heart rate." },
      { id: 2, title: "02. Infinite Horizon Calendar", text: "I tore apart standard calendar libraries because they were too rigid. I built a custom virtualized grid that allowed for infinite, frictionless scrolling through 50 years of appointments globally." },
      { id: 3, title: "03. Concurrency Protection", text: "Two patients booking the same highly-demanded specialist could cripple operations. I implemented optimistic UI updates paired with pessimistic Postgres locks to ensure flawless booking integrity." },
      { id: 4, title: "04. Webhooks & Automations", text: "I wired up background queue processors to handle SMS reminders and pre-appointment surveys perfectly synchronously, preventing drop-offs and miscommunications entirely." }
    ],
    process: {
      dfd: {
        title: "SCHEDULING DATA FLOW",
        description: "The core DFD was built entirely around hardcore concurrency. I meticulously mapped the journey of a single booking request through the load balancers, ensuring absolutely zero double-bookings via pessimistic locking in Postgres. It took days of simulating race conditions to get it flawless.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "ACCESSIBLE ITERATIONS",
        description: "Healthcare UI strictly demands accessibility. We pushed through six major prototyping phases solely focused on AAA color contrast, heavily readable typography, and massive touch targets—all without compromising the futuristic, neon aesthetic they explicitly wanted.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
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
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    solutionImage: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=2000&auto=format&fit=crop",
    summary: "Vertex is a B2B SaaS data visualization tool built for massive enterprise e-commerce. I authored the entire rendering pipeline and dashboard UI to ensure that displaying millions of rows wouldn't drop frame rates. I lived and breathed performance profiling for ten straight weeks.",
    problem: "Most analytics tools immediately crash the browser when manipulating large datasets. Vertex needed a robust solution that was brutally efficient but also aggressively stylish, standing out from the sea of boring gray B2B dashboards.",
    solution: "I implemented a Next.js/Prisma backend directly integrated with massive AWS data lakes. More importantly, I created a heavily customized, grid-based dashboard using WebGL and Three.js that turns boring massive datasets into striking visual art, running flawlessly at 60FPS.",
    techStack: ["Next.js", "Prisma", "AWS", "Three.js"],
    metrics: [
      { label: "Rows Processed", value: "10M+" },
      { label: "Active Users", value: "2k+" },
      { label: "FPS Maintained", value: "60FPS" },
    ],
    thoughtProcess: [
      { id: 1, title: "01. Overcoming the DOM Limit", text: "Rendering 10,000 DOM nodes means an instant browser crash. The first decision was to abandon HTML for the heavy dataviz entirely, committing to a complete WebGL rendering strategy." },
      { id: 2, title: "02. Cyberpunk Data Aesthetics", text: "Enterprise dashboards look like spreadsheets. I injected an ultra-vibrant, glowing wireframe aesthetic using custom fragment shaders to make massive data swarms look absolutely beautiful and menacing." },
      { id: 3, title: "03. Interstellar Streaming", text: "I engineered a WebSocket streaming pipeline that pulled gigabytes of raw analytics and serialized them into ArrayBuffers, passing them directly to Web Workers to keep the UI thread completely unblocked." },
      { id: 4, title: "04. Tactile Filtering", text: "Building the filter logic meant executing bitwise operations on the client so users could slice through 1,000,000 rows in realtime, watching the 3D particles reform and cluster instantly." }
    ],
    process: {
      dfd: {
        title: "STREAMING ARCHITECTURE",
        description: "A comprehensive massive DFD was required to stream millions of rows without blocking the browser's main thread. I engineered a solution using concurrent Web Workers and heavily optimized buffer geometry in Three.js resulting in buttery-smooth, jaw-dropping data rendering.",
        image: "https://images.unsplash.com/photo-1605806616949-1e87b487cc2a?q=80&w=2000&auto=format&fit=crop"
      },
      prototyping: {
        title: "DATAVIZ PROTOTYPING",
        description: "Graphing data isn't just plotting static points. We prototyped intense physics-based interactions, magnetic hover states, and glowing neon color ramps. The iterations focused heavily on creating an aesthetic reminiscent of cyberpunk UI systems, making data analysis actually fun.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop"
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
        {project.heroImage && (
          <div className="absolute inset-0 z-0">
            <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover opacity-40 mix-blend-luminosity filter saturate-200" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-navy/50 mix-blend-multiply" />
          </div>
        )}
        <TopographicPattern className={`${textClasses[project.color]} opacity-10 absolute inset-0 mix-blend-screen scale-150 z-0`} />
        
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
            <p className="text-xl text-off-white/70 font-grotesk font-light leading-relaxed mb-12">{project.summary}</p>
            
            {project.solutionImage && (
              <div className={`relative aspect-square md:aspect-video lg:aspect-square border p-2 backdrop-blur-sm ${borderClasses[project.color]}`}>
                <div className={`absolute -inset-0.5 bg-current ${textClasses[project.color]} opacity-20 blur-xl z-0`} />
                <img 
                  src={project.solutionImage} 
                  alt="Solution Context" 
                  className="w-full h-full object-cover filter mix-blend-screen opacity-90 hover:opacity-100 transition-opacity duration-500 relative z-10" 
                />
                <div className={`absolute bottom-0 right-0 p-3 text-[10px] font-mono uppercase bg-charcoal border-t border-l ${borderClasses[project.color]} ${textClasses[project.color]} z-20`}>
                  VISUAL_ASSET.JPG
                </div>
              </div>
            )}
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

      {/* Animated Thought Process */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-x border-gridline bg-gradient-to-b from-navy/30 to-charcoal">
        <div className="mb-16">
          <span className={`font-mono text-xs tracking-widest uppercase mb-4 block ${textClasses[project.color]}`}>{"// Cognitive Flow"}</span>
          <h2 className="font-grotesk font-black text-4xl md:text-5xl mb-6 text-off-white tracking-tighter">THOUGHT PROCESS.</h2>
        </div>
        <div className="relative border-l border-gridline ml-4 md:ml-8 pl-8 md:pl-16 space-y-24">
          {project.thoughtProcess?.map((step: any, index: number) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`absolute -left-[37px] md:-left-[69px] top-0 w-4 h-4 rounded-full border-2 bg-charcoal ${borderClasses[project.color]}`} />
              <div className={`absolute -left-[36px] md:-left-[68px] top-1 w-2 h-2 rounded-full ${bgClasses[project.color]} animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_10px_currentcolor] ${textClasses[project.color]}`} />
              
              <h3 className={`font-mono font-bold text-2xl tracking-widest uppercase mb-4 ${textClasses[project.color]}`}>{step.title}</h3>
              <p className="text-xl text-off-white/70 font-grotesk font-light leading-relaxed max-w-3xl">
                {step.text}
              </p>
            </motion.div>
          ))}
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
