"use client";

import LineOverlay from "@/components/ui/LineOverlay";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative w-full bg-charcoal min-h-screen pt-32 pb-24">
      <LineOverlay />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-24 text-center">
            <span className="text-neon-green font-bold text-xs tracking-widest uppercase mb-4 block">Let&apos;s Talk</span>
            <h1 className="font-grotesk font-black text-6xl md:text-8xl tracking-tighter text-white mb-8">
              START YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-electric-blue">
                BUILD.
              </span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Skip the agency bloat. We build cinematic, high-performance MVPs in 30 days. Tell us what you&apos;re building.
            </p>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
               <div>
                  <h3 className="font-grotesk font-black text-3xl md:text-5xl text-white mb-6">THE STUDIO</h3>
                  <p className="text-white/60 font-light text-lg leading-relaxed mb-8">
                     We operate out of Chandigarh University TBI. We selective about the projects we take on. If you&apos;re a founder with a clear vision, we want to hear from you.
                  </p>
               </div>
               
               <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-electric-blue group-hover:border-electric-blue transition-colors">
                        <Mail className="text-white group-hover:text-charcoal" size={20} />
                     </div>
                     <div>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                        <p className="text-white font-medium">hello@thefableslab.com</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-hot-pink group-hover:border-hot-pink transition-colors">
                        <MapPin className="text-white group-hover:text-charcoal" size={20} />
                     </div>
                     <div>
                        <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Base</p>
                        <p className="text-white font-medium">Chandigarh University TBI, India</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* High-Contrast Form */}
            <div className="lg:col-span-7">
               <form className="bg-white/[0.02] border-[0.5px] border-white/10 rounded-4xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                     <div className="space-y-2">
                        <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-2">Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-green transition-colors" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-2">Email</label>
                        <input type="email" placeholder="john@startup.com" className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-green transition-colors" />
                     </div>
                  </div>

                  <div className="space-y-2 mb-6">
                     <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-2">Company / Project Name</label>
                     <input type="text" placeholder="Acme Inc." className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-green transition-colors" />
                  </div>

                  <div className="space-y-2 mb-10">
                     <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-2">Project Details</label>
                     <textarea rows={5} placeholder="Tell us about the vision, timeline, and current state..." className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-neon-green transition-colors resize-none" />
                  </div>

                  <button type="button" className="w-full py-5 rounded-full bg-neon-green text-charcoal font-black uppercase tracking-widest text-sm hover:glow-neon-green hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                     Submit Request <ArrowRight size={18} />
                  </button>
               </form>
            </div>

         </div>
      </div>
    </div>
  );
}
