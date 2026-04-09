"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// ─── Utility: Fade-up on scroll ────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Utility: Section divider ───────────────────────────────────────────────
function Divider() {
  return <div className="w-full h-px bg-border/60" />;
}

// ─── FEATURES data ──────────────────────────────────────────────────────────
const FEATURES = [
  {
    num: "01",
    title: "Built for investors, not just users.",
    body: "Every architectural decision is made with due-diligence in mind. Clean code, clear structure, explainable stack — the kind of codebase that builds confidence in any technical reviewer.",
    image: "/dashboard-mockup.png",
    imageAlt: "Clean analytics dashboard",
  },
  {
    num: "02",
    title: "Speed without sacrificing structure.",
    body: "We operate with AI-assisted engineering and battle-tested templates. First iteration in 7 days. Full MVP in under 30. No cutting corners — just eliminating waste.",
    image: "/app-mockup.png",
    imageAlt: "Mobile app interfaces",
  },
  {
    num: "03",
    title: "Design that earns trust on first look.",
    body: "A product that looks accidental loses traction before a word is spoken. We deliver interfaces that signal competence, clarity, and craft — because first impressions fund companies.",
    image: "/dashboard-mockup.png",
    imageAlt: "Product interface design",
  },
];

// ─── PROCESS steps ──────────────────────────────────────────────────────────
const PROCESS = [
  {
    step: "01",
    label: "Discover & Define",
    body: "We spend the first 48 hours understanding your vision, investor thesis, and user core. No assumptions.",
  },
  {
    step: "02",
    label: "Design & Build",
    body: "Parallel UI design and engineering. Your product takes shape in real time — transparency throughout.",
  },
  {
    step: "03",
    label: "Launch & Validate",
    body: "Deployed, documented, and demo-ready. Built to withstand investor scrutiny from day one.",
  },
];

// ─── METRICS ────────────────────────────────────────────────────────────────
const METRICS = [
  { value: "30", unit: "days", label: "average time to launch" },
  { value: "12+", unit: "", label: "MVPs shipped" },
  { value: "3", unit: "", label: "startups funded post-launch" },
  { value: "100%", unit: "", label: "on-time delivery rate" },
];

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <div className="w-full">

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 1 — HERO                                                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void"
      >
        {/* Ambient radial glow — single, restrained */}
        <div className="absolute inset-0 bg-gradient-void pointer-events-none" />
        {/* Subtle noise grain texture */}
        <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24 text-center"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-block text-xs font-medium text-text-muted uppercase tracking-[0.18em]">
              Product Studio — Chandigarh
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-text-primary text-balance leading-[1.04]"
              style={{
                fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Investor-Ready MVPs.
              <br />
              <span className="text-text-secondary font-light">In 30 Days.</span>
            </motion.h1>
          </div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted text-lg md:text-xl font-normal max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Built for clarity, traction, and fundability.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              id="hero-cta"
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-fable-blue text-white font-medium text-sm rounded-pill transition-all duration-300 hover:bg-fable-blue-muted active:scale-[0.98]"
            >
              Start your build
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-transparent via-text-dim to-transparent"
          />
        </motion.div>
      </section>

      <Divider />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 2 — BIG STATEMENT                                         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="statement" className="relative bg-void py-32 md:py-44 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <blockquote
              className="font-display font-semibold text-text-primary text-balance"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.12,
              }}
            >
              &ldquo;Most MVPs are built for demos.
              <br />
              <span className="text-text-secondary font-light">We build for deals.&rdquo;</span>
            </blockquote>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 3 — PROBLEM                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="problem" className="bg-surface py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeUp>
              <span className="block text-xs font-medium text-text-dim uppercase tracking-[0.18em] mb-6">
                The Problem
              </span>
              <h2
                className="font-display font-semibold text-text-primary"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Founders lose
                <br />
                6 months.
              </h2>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-text-secondary text-lg leading-relaxed mt-2 lg:mt-16">
                Traditional agencies move slowly, charge heavily, and deliver feature lists — not fundable products. By the time they&apos;re done, your runway is shorter, your momentum is gone, and investors want to see traction you don&apos;t have.
              </p>
              <p className="text-text-muted text-base leading-relaxed mt-6">
                The market doesn&apos;t wait. Investors don&apos;t either. And a product that took eight months to build rarely looks like it was worth the wait.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <Divider />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 4 — SOLUTION (light contrast section)                      */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="solution" className="bg-light-bg py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-16 lg:mb-24">
            <span className="block text-xs font-medium text-light-secondary uppercase tracking-[0.18em] mb-6">
              How We Work
            </span>
            <h2
              className="font-display font-semibold text-light-text"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              We build differently.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-light-border">
            {[
              {
                icon: "↗",
                title: "Speed",
                body: "First working iteration in 7 days. Production-ready MVP in under 30. Not because we rush — because we’ve eliminated everything that wastes time.",
              },
              {
                icon: "◎",
                title: "Structure",
                body: "Clean, scalable codebases built on proven stacks. Every decision is documented. Every component is purposeful.",
              },
              {
                icon: "◈",
                title: "Signal",
                body: "Design and UX calibrated for investor trust. Your product will look like it belongs in a Series A pitch — from day one.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="py-10 pr-10 border-b md:border-b-0 md:border-r border-light-border last:border-0">
                  <span className="block text-2xl text-light-secondary mb-6 font-light">
                    {item.icon}
                  </span>
                  <h3
                    className="font-display font-semibold text-light-text mb-4"
                    style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-light-secondary text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 5 — FEATURES (isolated product reveals)                   */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="features" className="bg-void">
        {FEATURES.map((feat, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={feat.num} className="border-b border-border/40 last:border-b-0">
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-36">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Text */}
                  <FadeUp delay={0.05}>
                    <span className="block font-mono text-xs text-text-dim mb-6">
                      {feat.num}
                    </span>
                    <h3
                      className="font-display font-semibold text-text-primary mb-6 text-balance"
                      style={{
                        fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed max-w-md">
                      {feat.body}
                    </p>
                  </FadeUp>

                  {/* Image */}
                  <FadeUp delay={0.15}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface border border-border/40">
                      <Image
                        src={feat.image}
                        alt={feat.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 6 — PRODUCT SHOWCASE                                       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="showcase" className="bg-surface py-0">
        <div className="relative w-full overflow-hidden">
          <FadeUp>
            <div className="relative aspect-[16/7] w-full overflow-hidden">
              <Image
                src="/dashboard-mockup.png"
                alt="Fables Lab product showcase — full-width dashboard view"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              {/* Overlay: bottom fade for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/10 to-transparent" />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                <p className="text-text-muted text-sm font-medium tracking-wide">
                  Production-grade interfaces. Delivered in weeks.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 7 — PROCESS                                                */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="process" className="bg-void py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeUp className="mb-16 lg:mb-24">
            <span className="block text-xs font-medium text-text-dim uppercase tracking-[0.18em] mb-6">
              The Process
            </span>
            <h2
              className="font-display font-semibold text-text-primary"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              From idea to fundable,
              <br />
              <span className="text-text-secondary font-light">in three moves.</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border/50">
            {PROCESS.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.1}>
                <div className="py-10 pr-10 border-b md:border-b-0 md:border-r border-border/40 last:border-0">
                  <span className="block font-mono text-xs text-text-dim mb-6">{p.step}</span>
                  <h3
                    className="font-display font-semibold text-text-primary mb-4"
                    style={{ fontSize: "1.15rem", letterSpacing: "-0.01em" }}
                  >
                    {p.label}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="mt-12">
            <Link
              href="/process"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
            >
              See our full process
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </FadeUp>
        </div>
      </section>

      <Divider />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 8 — CREDIBILITY / METRICS                                  */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="credibility" className="bg-surface py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-x border-t border-border/40">
            {METRICS.map((m, i) => (
              <FadeUp key={m.label} delay={i * 0.08}>
                <div className="p-8 lg:p-12 border-r border-b border-border/40 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span
                      className="font-display font-semibold text-text-primary"
                      style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
                    >
                      {m.value}
                    </span>
                    {m.unit && (
                      <span className="text-text-muted text-sm font-medium">{m.unit}</span>
                    )}
                  </div>
                  <p className="text-text-dim text-xs font-medium uppercase tracking-[0.1em]">
                    {m.label}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* SECTION 9 — FINAL CTA                                              */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section id="cta" className="relative bg-void py-36 md:py-48 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-void pointer-events-none opacity-70" />
        <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="font-display font-semibold text-text-primary text-balance mb-8"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.06,
              }}
            >
              Ready to build something
              <br />
              <span className="text-text-secondary font-light">fundable?</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="text-text-muted text-base leading-relaxed max-w-md mx-auto mb-12">
              Tell us about your idea. We&apos;ll tell you exactly how we&apos;d build it — and what it would take.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <Link
              id="final-cta"
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-9 py-4.5 bg-fable-blue text-white font-medium text-sm rounded-pill transition-all duration-300 hover:bg-fable-blue-muted active:scale-[0.98]"
            >
              Let&apos;s talk
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </FadeUp>
        </div>
      </section>

    </div>
  );
}
