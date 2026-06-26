"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, lineDraw } from "@/lib/motion";

export default function IntroSection() {
  const steps = [
    { label: "Start", desc: "Entity selection & business setup" },
    { label: "Structure", desc: "GST, licensing & setup deeds" },
    { label: "Comply", desc: "ROC filings, tax returns & bookkeeping" },
    { label: "Grow", desc: "Management advisory & scaling support" },
  ];

  return (
    <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          
          {/* Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-3 mb-4"
            >
              <motion.span variants={lineDraw} className="h-[1.5px] w-8 bg-accent-gold block" />
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase">
                Business Lifecycle
              </span>
              <motion.span variants={lineDraw} className="h-[1.5px] w-8 bg-accent-gold block" style={{ originX: 1 }} />
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy tracking-tight leading-tight mb-6">
              Supporting Businesses at Every Stage.
            </h2>
            <p className="font-sans text-base md:text-lg text-charcoal/90 font-normal leading-relaxed max-w-3xl mx-auto">
              From setting up your company to managing accounts, taxation, and statutory requirements, we provide practical advisory support that helps businesses move forward with clarity.
            </p>
          </motion.div>

          {/* Timeline Sequence */}
          <div className="max-w-4xl mx-auto pt-4 relative">
            <motion.div
              variants={staggerContainer(0.15, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative"
            >
              {steps.map((step, idx) => (
                <motion.div
                  variants={fadeUp}
                  key={step.label}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Step indicator dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    className="hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-gold border-2 border-white shadow-sm z-20"
                  />

                  {/* Node Label Card */}
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 25px 50px -20px rgba(10,29,55,0.12)",
                      borderColor: "rgba(197,168,128,0.35)",
                    }}
                    className="premium-card w-full p-6 flex flex-col items-center justify-center min-h-[140px] relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <span className="font-serif text-2xl font-bold text-primary-navy group-hover:text-accent-gold transition-colors duration-300 mb-2 relative z-10">
                      {step.label}
                    </span>
                    <span className="font-sans text-xs md:text-sm text-charcoal/80 leading-normal max-w-[160px] font-medium relative z-10">
                      {step.desc}
                    </span>
                  </motion.div>

                  {/* Connecting Arrow */}
                  {idx < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.15 + 0.5 }}
                      className="hidden md:flex absolute top-[40%] -right-3 z-10 text-accent-gold select-none"
                    >
                      <motion.svg
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>
  );
}
