"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  Work: [
    { label: "Case Studies", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Our Process", href: "/process" },
  ],
  Studio: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Connect: [
    { label: "X (Twitter)", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">

        {/* Top: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 pb-16 border-b border-border/40">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              <span className="font-display font-semibold text-2xl text-text-primary group-hover:text-fable-blue transition-colors">
                Fables Lab
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs mb-8">
              Building investor-ready MVPs in under 30 days. Engineered for clarity, traction, and fundability.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Start a project
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <p className="text-xs font-medium text-text-dim uppercase tracking-[0.1em] mb-5">
                  {category}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-text-dim">
            © {new Date().getFullYear()} Fables Lab. Chandigarh, India.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-text-dim hover:text-text-muted transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-text-dim hover:text-text-muted transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
