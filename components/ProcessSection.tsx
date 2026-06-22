"use client";

import { motion } from "framer-motion";

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function ProcessSection() {
  const steps: Step[] = [
    { num: "01", title: "Understand Your Needs", desc: "We analyze your business lifecycle, capital requirements, and compliance timelines." },
    { num: "02", title: "Build the Right Plan", desc: "We recommend corporate structures and plan taxation and ledger frameworks." },
    { num: "03", title: "Handle Finance & Compliance", desc: "We process entity registration, GST filing, ledgers, and annual audits." },
    { num: "04", title: "Support Your Growth", desc: "Our advisors provide ongoing consultations and management reviews as you scale." },
  ];

  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className="py-24 bg-background-ivory relative border-b border-slate-100 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent-gold/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 block">
            Our Method
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-navy tracking-tight">
            How We Work
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.93 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.07, y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.13, ease }}
              key={step.num}
              className="flex flex-col text-left relative cursor-default bg-white border border-slate-100 rounded-xl p-6 shadow-sm"
              style={{ willChange: "transform" }}
            >
              {/* Connecting line */}
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.13 + 0.4, ease }}
                  className="hidden md:block absolute top-10 left-[calc(100%+1px)] w-full h-[1px] bg-gradient-to-r from-accent-gold/40 to-transparent origin-left z-0"
                />
              )}

              {/* Step number */}
              <div className="font-serif italic text-4xl md:text-5xl text-accent-gold font-bold mb-4 relative z-10">
                {step.num}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-primary-navy mb-2 relative z-10">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-sm text-charcoal/85 leading-relaxed font-normal relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
