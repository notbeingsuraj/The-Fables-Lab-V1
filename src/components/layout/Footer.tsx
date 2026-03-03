"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal border-t-[0.5px] border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-hot-pink/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="md:col-span-5">
            <h2 className="font-grotesk font-black text-4xl mb-6 tracking-tighter text-white">
              Drive <span className="text-electric-blue">Carefree.</span>
            </h2>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-8">
              The next generation of car rentals. No queues, no hassle. Just premium vehicles and seamless experiences.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h3 className="font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/cars" className="hover:text-white transition-colors">
                  Browse Fleet
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors flex items-center gap-1 group">
                  Careers <ArrowUpRight size={14} className="group-hover:text-hot-pink transition-colors" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-[0.5px] border-white/10">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Carefree Rental. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social Links Placeholders */}
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-electric-blue transition-colors cursor-pointer text-white/60">
              <span className="text-xs">IG</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-electric-blue transition-colors cursor-pointer text-white/60">
              <span className="text-xs">TW</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
