"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b-[0.5px] border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-grotesk font-black text-2xl tracking-tighter text-white group-hover:text-electric-blue transition-colors duration-300">
              CAREFREE.
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Browse Cars", "Locations", "About"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-electric-blue group-hover:w-full transition-all duration-300"
                />
              </Link>
            ))}
            <Link
              href="/booking"
              className="px-5 py-2.5 rounded-full bg-neon-green text-black font-bold text-sm tracking-wide hover:glow-neon-green transition-all duration-300 transform hover:scale-105"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-electric-blue transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b-[0.5px] border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {["Browse Cars", "Locations", "About"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-lg font-medium text-white/70 hover:text-white block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="/booking"
                className="inline-block mt-4 px-6 py-3 rounded-full bg-neon-green text-black font-bold text-center tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                BOOK NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Ensure AnimatePresence is used properly, we'll actually import it from framer-motion inside the component
// Let's replace AnimatePresence correctly
