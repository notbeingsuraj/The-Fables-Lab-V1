"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-navy border-t-[0.5px] border-white/10 pt-24 pb-12 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-hot-pink/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <h2 className="font-grotesk font-black text-4xl mb-6 tracking-tighter text-white uppercase">
              The Fables <span className="text-electric-blue">Lab.</span>
            </h2>
            <p className="text-white/60 max-w-sm text-sm font-light leading-relaxed mb-8">
              Where Ancient Stories Meet Future Tech. We build investor-ready MVPs in under 30 days. No fluff, just rapid execution and premium engineering.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold text-xs uppercase tracking-widest hover:border-electric-blue hover:text-electric-blue transition-colors group"
            >
              Book Discovery Call <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Links Cols */}
          <div className="md:col-span-2 md:col-start-7">
            <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Work</h3>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/projects" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Studio</h3>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors flex items-center gap-1 group">Careers <ArrowUpRight size={14} className="group-hover:text-hot-pink transition-colors" /></Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-white uppercase tracking-widest text-xs mb-6">Social</h3>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#" className="hover:text-white transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-[0.5px] border-white/10">
          <p className="text-white/40 text-xs font-light">
            © {new Date().getFullYear()} The Fables Lab. Base: Chandigarh.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 text-white/40 text-xs">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
