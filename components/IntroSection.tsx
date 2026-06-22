"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  const steps = [
    { label: "Start", desc: "Entity selection & business setup" },
    { label: "Structure", desc: "GST, licensing & setup deeds" },
    { label: "Comply", desc: "ROC filings, tax returns & bookkeeping" },
    { label: "Grow", desc: "Management advisory & scaling support" },
  ];

  return (
    <section className="py-24 bg-white relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 block">
            Business Lifecycle
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy tracking-tight leading-tight mb-6">
            Supporting Businesses at Every Stage.
          </h2>
          <p className="font-sans text-base md:text-lg text-charcoal/90 font-normal leading-relaxed max-w-3xl mx-auto">
            From setting up your company to managing accounts, taxation, and statutory requirements, we provide practical advisory support that helps businesses move forward with clarity.
          </p>
        </motion.div>

        {/* Timeline Sequence */}
        <div className="max-w-4xl mx-auto pt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            
            {steps.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={step.label}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Node Label Card */}
                <div className="premium-card w-full p-6 flex flex-col items-center justify-center min-h-[140px]">
                  <span className="font-serif text-2xl font-bold text-primary-navy group-hover:text-accent-gold transition-colors duration-300 mb-2">
                    {step.label}
                  </span>
                  <span className="font-sans text-xs md:text-sm text-charcoal/80 leading-normal max-w-[160px] font-medium">
                    {step.desc}
                  </span>
                </div>

                {/* Connecting Arrow (hidden on last step and on mobile) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-[40%] -right-3 z-10 text-accent-gold select-none">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
