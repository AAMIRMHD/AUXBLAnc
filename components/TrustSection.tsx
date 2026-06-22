"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Stage {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export default function TrustSection() {
  const stages: Stage[] = [
    {
      id: "start",
      label: "Start",
      title: "Establish Your Vision",
      subtitle: "Entity Selection & Advisory",
      description:
        "Every successful journey begins with a solid foundation. We assist entrepreneurs and startups in choosing the optimal legal framework for their business, aligned with long-term capital raising, liability protection, and operational requirements.",
      deliverables: ["Proprietorship Setup", "Partnership Structures", "Startup Guidance", "Entity Strategy"],
    },
    {
      id: "structure",
      label: "Structure",
      title: "Build the Foundation",
      subtitle: "Incorpoation & Initial Registrations",
      description:
        "Translate your concept into a formal legal structure. We manage the entire incorporation process for LLPs, Private Limited Companies, and Partnerships, securing essential operational licensing including GST, MSME, and local permits.",
      deliverables: ["LLP & Pvt Ltd Incorporation", "GST Registration", "MSME / Udyam Filing", "PAN & TAN Allocation"],
    },
    {
      id: "comply",
      label: "Comply",
      title: "Maintain Financial Integrity",
      subtitle: "Taxation & Annual Compliance",
      description:
        "Navigate complex statutory landscapes with absolute peace of mind. Our team handles your ongoing accounting, bookkeeping, recurring GST returns, ROC annual filings, and direct tax compliance with zero delays.",
      deliverables: ["Bookkeeping & Accounts", "GST Returns & Filing", "ROC / Annual Filings", "Tax Compliance"],
    },
    {
      id: "scale",
      label: "Scale",
      title: "Expand With Confidence",
      subtitle: "Management Consultancy & Advisory",
      description:
        "Scale your operations with clarity. We provide strategic management consultancy, cash flow analysis, corporate restructuring support, and business advisory services to secure long-term viability and growth.",
      deliverables: ["Management Consultancy", "Cash Flow Advisory", "Business Restructuring", "Strategic Growth Planning"],
    },
  ];

  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="about" className="py-24 md:py-32 bg-background-ivory noise-overlay relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-6">
            <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase mb-3 block">
              Lifecycle Support
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal tracking-tight leading-tight">
              Your Business, Supported <br />at Every Stage.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="font-sans text-sm md:text-base text-charcoal/70 font-light leading-relaxed max-w-xl">
              From day one of incorporation to sustainable scale-up, Aux Blanc serves as a trusted financial and compliance partner. We handle backend details so you can focus on building what matters.
            </p>
          </div>
        </div>

        {/* Timeline Interaction */}
        <div className="w-full">
          {/* Timeline Nodes */}
          <div className="relative flex justify-between items-center mb-12 max-w-4xl mx-auto">
            {/* Connecting Horizontal Line */}
            <div className="absolute left-0 right-0 h-[2px] bg-white/10 z-0" />
            <motion.div 
              className="absolute left-0 h-[2px] bg-accent-gold z-10 origin-left"
              animate={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ right: 0 }}
            />

            {stages.map((stage, idx) => {
              const isActive = idx === activeStage;
              const isPassed = idx < activeStage;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  className="flex flex-col items-center relative z-20 focus:outline-none group"
                >
                  {/* Indicator Dot */}
                  <motion.div
                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-500 bg-background-ivory ${
                      isActive
                        ? "border-accent-gold"
                        : isPassed
                        ? "border-accent-gold bg-accent-gold"
                        : "border-white/20 group-hover:border-accent-gold/50"
                    }`}
                  >
                    {isPassed ? (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className={`text-[10px] md:text-xs font-semibold ${isActive ? "text-accent-gold" : "text-charcoal/40"}`}>
                        0{idx + 1}
                      </span>
                    )}
                  </motion.div>

                  {/* Label */}
                  <span
                    className={`absolute -bottom-7 font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase mt-3 transition-colors duration-300 ${
                      isActive ? "text-accent-gold" : "text-charcoal/50 group-hover:text-charcoal/80"
                    }`}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Timeline Details Box */}
          <div className="mt-16 max-w-4xl mx-auto bg-background-navy/50 backdrop-blur-sm border border-accent-gold/15 p-8 md:p-12 relative shadow-sm">
            <div className="absolute top-0 right-0 p-4 font-serif italic text-7xl md:text-9xl text-accent-gold/10 select-none pointer-events-none">
              0{activeStage + 1}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative z-10"
              >
                {/* Stage Info */}
                <div className="md:col-span-7">
                  <span className="font-sans text-[10px] font-semibold tracking-widest text-accent-gold uppercase mb-2 block">
                    {stages[activeStage].subtitle}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal mb-4">
                    {stages[activeStage].title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed font-light mb-6">
                    {stages[activeStage].description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="md:col-span-5 border-l border-accent-gold/20 pl-0 md:pl-8 pt-6 md:pt-0">
                  <h4 className="font-sans text-[10px] font-semibold tracking-widest text-charcoal/50 uppercase mb-4">
                    Core Solutions Included:
                  </h4>
                  <ul className="space-y-3">
                    {stages[activeStage].deliverables.map((item, index) => (
                      <li key={index} className="flex items-center text-xs text-charcoal/80 font-medium font-sans">
                        <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
