"use client";

import { motion } from "framer-motion";

interface Step {
  num: string;
  title: string;
  desc: string;
}

export default function ProcessSection() {
  const steps: Step[] = [
    {
      num: "01",
      title: "Understand Your Needs",
      desc: "We analyze your business lifecycle, capital requirements, and compliance timelines.",
    },
    {
      num: "02",
      title: "Build the Right Plan",
      desc: "We recommend corporate structures and plan taxation and ledger frameworks.",
    },
    {
      num: "03",
      title: "Handle Finance & Compliance",
      desc: "We process entity registration, GST filing, ledgers, and annual audits.",
    },
    {
      num: "04",
      title: "Support Your Growth",
      desc: "Our advisors provide ongoing consultations and management reviews as you scale.",
    },
  ];

  return (
    <section className="py-24 bg-background-ivory relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={step.num}
              className="flex flex-col text-left relative"
            >
              {/* Connecting line on desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[65%] w-full h-[0.75px] bg-slate-250 z-0" />
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
