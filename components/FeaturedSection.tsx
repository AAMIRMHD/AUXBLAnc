"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  num: string;
  title: string;
  description: string;
  deliverables: string[];
}

export default function FeaturedSection() {
  const steps: ProcessStep[] = [
    {
      num: "01",
      title: "Understand Your Business",
      description:
        "We begin with a strategic audit of your vision, target market, capital structure constraints, and corporate liability requirements.",
      deliverables: ["Entity Strategy Matrix", "Capital Structure Mapping", "Risk Profile Audit"],
    },
    {
      num: "02",
      title: "Build the Right Structure",
      description:
        "We handle registration tasks for Private Limited, LLP, or Partnership entities, alongside securing GST, PAN, TAN, and MSME licenses.",
      deliverables: ["Incorporation Filings", "Tax Registrations", "Operational Licensing"],
    },
    {
      num: "03",
      title: "Manage Finance & Compliance",
      description:
        "Our team establishes professional digital accounting ledgers and maintains recurrent GST filings, annual ROC audits, and tax returns.",
      deliverables: ["Daily Ledgers & Payroll", "Recurring GST Returns", "ROC Annual Compliances"],
    },
    {
      num: "04",
      title: "Support Sustainable Growth",
      description:
        "Through management consultancy and financial advisory, we optimize cash flows, structure corporate planning, and scale operations.",
      deliverables: ["Management Consulting", "Cash Flow Optimization", "Strategic Advisory Support"],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-primary-navy noise-overlay-navy relative overflow-hidden">
      {/* Decorative luxury abstract background element */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-accent-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase mb-3 block">
            Core Methodology
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white tracking-tight leading-tight">
            From Formation to Growth — <br />
            <span className="italic text-accent-gold-light">One Trusted Partner</span>
          </h2>
          <div className="w-12 h-[1px] bg-accent-gold/40 mx-auto mt-6" />
        </div>

        {/* Process Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              variants={stepVariants}
              className="bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:border-accent-gold/30 hover:bg-white/[0.07] transition-all duration-500 relative group"
            >
              {/* Animated Connecting Line on Desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[100%] w-full h-[1px] bg-gradient-to-r from-accent-gold/30 to-transparent z-0" />
              )}

              <div>
                {/* Step Number Circle */}
                <div className="w-10 h-10 rounded-full border border-accent-gold/30 flex items-center justify-center mb-6 transition-all duration-500 group-hover:border-accent-gold group-hover:bg-accent-gold/10">
                  <span className="font-serif text-sm font-semibold text-accent-gold">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-medium text-white mb-4 transition-colors duration-300 group-hover:text-accent-gold-light">
                  {step.title}
                </h3>
                
                <p className="font-sans text-xs text-white/60 leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="border-t border-white/10 pt-4 mt-4">
                <ul className="space-y-2">
                  {step.deliverables.map((deliv, index) => (
                    <li key={index} className="flex items-center text-[10px] text-white/80 font-medium font-sans">
                      <span className="w-1 h-1 bg-accent-gold rounded-full mr-2" />
                      {deliv}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
