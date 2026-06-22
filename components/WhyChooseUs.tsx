"use client";

import { motion } from "framer-motion";

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

  return (
    <section id="about" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Heading Column */}
          <div className="lg:col-span-5 text-left sticky top-28">
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 block">
              Our Commitment
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy tracking-tight leading-tight mb-6">
              Clear Advice. <br />
              Reliable Support. <br />
              <span className="font-serif italic text-accent-gold">Better Decisions</span>.
            </h2>
            <div className="w-8 h-[1px] bg-accent-gold mt-6 mb-8" />
            
            {/* Advisory Quote Block (Pure Typographic replacement for image) */}
            <div className="mt-12 max-w-sm border-l-2 border-accent-gold/30 pl-4 py-1">
              <p className="font-serif text-base md:text-lg italic text-charcoal/70 leading-relaxed">
                "Our mission is to bring institutional-grade financial advisory and compliance management to scaling enterprises and modern startups with complete clarity."
              </p>
              <p className="font-sans text-[9px] md:text-[10px] font-bold tracking-widest text-primary-navy uppercase mt-3">
                — Aux Blanc Advisory Team
              </p>
            </div>
          </div>

          {/* Right Points Column */}
          <div className="lg:col-span-7 space-y-6">
            {points.map((point, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={idx}
                className="flex flex-col items-center text-center border border-slate-100 rounded-xl px-8 py-6 bg-white shadow-sm cursor-default"
              >
                {/* Gold Checkmark icon */}
                <div className="w-8 h-8 rounded-full border border-accent-gold/45 flex items-center justify-center shrink-0 mb-4 bg-background-ivory">
                  <svg className="w-4 h-4 text-accent-gold stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-primary-navy mb-2">
                    {point.title}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/80 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
