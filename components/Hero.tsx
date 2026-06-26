"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParallaxOrbs from "@/components/ParallaxOrbs";

const headline1 = "Your Trusted Partner for";
const headline2Words = ["Business,", "Finance", "&"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.96]);

  const whatsappUrl =
    "https://wa.me/917591938118?text=Hi%20Aux%20Blanc%20Financial%20Advisory%2C%20I%20would%20like%20to%20know%20more%20about%20your%2520services.";

  /* ── Shared easing ── */
  const ease = [0.16, 1, 0.3, 1];

  /* ── Label line draw ── */
  const lineVariant = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, ease } },
  };

  /* ── Label text blur-in ── */
  const labelVariant = {
    hidden: { opacity: 0, filter: "blur(8px)", x: -8 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      transition: { duration: 0.7, ease },
    },
  };

  /* ── Word reveal (clip from bottom) ── */
  const wordVariant = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.75, ease },
    },
  };

  /* ── Paragraph fade + slide ── */
  const paraVariant = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease },
    },
  };

  /* ── Button spring pop ── */
  const btnVariant = {
    hidden: { opacity: 0, scale: 0.88, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease, delay: i * 0.12 },
    }),
  };

  /* ── Gold underline draw ── */
  const underlineVariant = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.1 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen pt-28 md:pt-36 pb-12 flex flex-col justify-between relative overflow-hidden bg-background-ivory"
    >
      <ParallaxOrbs />

      {/* Floating accent rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-[10%] w-64 h-64 border border-accent-gold/[0.08] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-[5%] w-40 h-40 border border-primary-navy/[0.05] rounded-full pointer-events-none"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center flex-1 relative z-20"
      >

        {/* ── Accent Label ── */}
        <motion.div
          className="flex items-center space-x-3 mb-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            variants={lineVariant}
            className="h-[1.5px] w-8 bg-accent-gold block"
          />
          <motion.span
            variants={labelVariant}
            className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent-gold uppercase"
          >
            Financial &amp; Corporate Advisory
          </motion.span>
        </motion.div>

        {/* ── Headline line 1 — clip reveal ── */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-navy leading-[1.08]"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.85, ease, delay: 0.2 }}
          >
            {headline1}
          </motion.h1>
        </div>

        {/* ── Headline line 2 — word by word ── */}
        <div className="flex flex-wrap items-baseline gap-x-4 mb-6 overflow-hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.55 }}
            className="flex flex-wrap items-baseline gap-x-4"
          >
            {headline2Words.map((word) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  variants={wordVariant}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-navy leading-[1.08] inline-block"
                >
                  {word}
                </motion.span>
              </div>
            ))}

            {/* ── "Compliance" with animated gold underline ── */}
            <div className="overflow-hidden">
              <motion.span
                variants={wordVariant}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-accent-gold italic leading-[1.08] inline-block relative"
              >
                Compliance
                {/* SVG underline draw */}
                <motion.svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  height="8"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.path
                    d="M0 5 Q50 1 100 5 Q150 9 200 5"
                    stroke="#C5A880"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    variants={underlineVariant}
                  />
                </motion.svg>
              </motion.span>
            </div>

            {/* Period */}
            <div className="overflow-hidden">
              <motion.span
                variants={wordVariant}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-navy leading-[1.08] inline-block"
              >
                .
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* ── Supporting Paragraph ── */}
        <motion.p
          variants={paraVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0 }}
          className="font-sans text-base md:text-lg text-charcoal/90 font-medium max-w-2xl leading-relaxed mb-10"
        >
          Aux Blanc Financial Advisory helps entrepreneurs, startups, and growing
          businesses navigate management consultancy, accounting, taxation,
          company incorporation, and recurring regulatory compliance.
        </motion.p>

        {/* ── Action Buttons ── */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#contact"
            custom={0}
            variants={btnVariant}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary text-center font-sans text-xs font-bold tracking-wider uppercase px-10 py-4 rounded-full shadow-sm cursor-pointer"
          >
            Book a Consultation
          </motion.a>

          <motion.a
            href={whatsappUrl}
            custom={1}
            variants={btnVariant}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-center font-sans text-xs font-bold tracking-wider uppercase px-10 py-4 rounded-full cursor-pointer"
          >
            WhatsApp Us
          </motion.a>
        </motion.div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
        aria-label="Scroll to services"
      >
        <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-charcoal/40 uppercase group-hover:text-accent-gold transition-colors duration-300">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-accent-gold/40 flex items-start justify-center p-1.5 group-hover:border-accent-gold transition-colors duration-300"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-accent-gold" />
        </motion.div>
      </motion.a>
    </section>
  );
}
