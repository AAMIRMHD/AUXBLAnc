"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeLeft, lineDraw } from "@/lib/motion";

interface PointItem {
  title: string;
  desc: string;
}

export default function WhyChooseUs() {
  const points: PointItem[] = [
    {
      title: "Practical business guidance",
      desc: "Clear directions that focus on operations, funding targets, and long-term viability rather than checklist compliance.",
    },
    {
      title: "End-to-end support",
      desc: "We support founders from initial name registration to daily ledgers, direct taxation filings, and ROC compliance checks.",
    },
    {
      title: "Clear and timely communication",
      desc: "Our advisors maintain dedicated contact lines with prompt replies to answer your bookkeeping and operational requests.",
    },
    {
      title: "Compliance-focused approach",
      desc: "Avoid costly late filing penalties and structural risks through proactive audit calendars and tax computations.",
    },
    {
      title: "Support for startups and growing businesses",
      desc: "Optimized corporate frameworks built for founders, SMEs, entrepreneurs, and raising institutional seed capital.",
    },
  ];

  const pointVariants = {
    hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle parallax accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-gold/[0.03] to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Heading Column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 text-left lg:sticky lg:top-28"
          >
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 block">
              Our Commitment
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy tracking-tight leading-tight mb-6">
              Clear Advice. <br />
              Reliable Support. <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic text-accent-gold inline-block"
              >
                Better Decisions
              </motion.span>.
            </h2>
            <motion.div
              variants={lineDraw}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-12 h-[1.5px] bg-accent-gold mt-6 mb-8"
            />
            
            {/* Advisory Quote Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 max-w-sm border-l-2 border-accent-gold/30 pl-4 py-1"
            >
              <p className="font-serif text-base md:text-lg italic text-charcoal/70 leading-relaxed">
                "Our mission is to bring institutional-grade financial advisory and compliance management to scaling enterprises and modern startups with complete clarity."
              </p>
              <p className="font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-primary-navy uppercase mt-3">
                — Aux Blanc Advisory Team
              </p>
            </motion.div>
          </motion.div>

          {/* Right Points Column */}
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 space-y-6"
          >
            {points.map((point, idx) => (
              <motion.div
                custom={idx}
                variants={pointVariants}
                whileHover={{
                  scale: 1.02,
                  x: 8,
                  boxShadow: "0 20px 40px -15px rgba(10,29,55,0.1)",
                  borderColor: "rgba(197,168,128,0.3)",
                  transition: { duration: 0.3 },
                }}
                key={idx}
                className="flex flex-col items-center text-center border border-slate-100 rounded-xl px-8 py-6 bg-white shadow-sm cursor-default relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-gold/0 via-accent-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Gold Checkmark icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="w-8 h-8 rounded-full border border-accent-gold/45 flex items-center justify-center shrink-0 mb-4 bg-background-ivory relative z-10"
                >
                  <svg className="w-4 h-4 text-accent-gold stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <div className="relative z-10">
                  <h3 className="font-serif text-xl font-bold text-primary-navy mb-2 group-hover:text-accent-gold transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
