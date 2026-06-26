"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Article {
  title: string;
  category: string;
  readTime: string;
  summary: string;
}

export default function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [-60, 80]);

  const articles: Article[] = [
    {
      category: "Incorporation Strategy",
      readTime: "6 min read",
      title: "LLP vs Private Limited Company",
      summary:
        "Analyzing legal structures, capital rules, fundraising potential, and compliance differences to select the correct corporate vehicle.",
    },
    {
      category: "Taxation Guidelines",
      readTime: "5 min read",
      title: "GST Basics for New Businesses",
      summary:
        "A practical handbook covering registration limits, input tax credits, filing timelines, and steps to avoid recurring penalties.",
    },
    {
      category: "Finance Planning",
      readTime: "7 min read",
      title: "How to Manage Cash Flow Better",
      summary:
        "Essential tools for managing startup liquidity, tracking cash burn, optimizing bills, and structuring initial capital reserves.",
    },
  ];

  const ease = [0.16, 1, 0.3, 1];

  const headingVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(4px)" },
    visible: {
      opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
      transition: { duration: 0.75, ease },
    },
  };

  return (
    <section ref={sectionRef} id="insights" className="py-24 bg-background-ivory relative border-b border-slate-100 overflow-hidden">
      {/* Parallax decorative orb */}
      <motion.div
        style={{ y: orbY }}
        className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">

        {/* Section Header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 block">
            Knowledge Hub
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
            Business Insights
          </h2>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ perspective: "1200px" }}
        >
          {articles.map((art, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateX: -4,
                rotateY: 4,
                y: -8,
                boxShadow: "0 30px 60px -15px rgba(10,29,55,0.12), 0 0 0 1px rgba(197,168,128,0.2)",
                transition: { duration: 0.35, ease: "easeOut" },
              }}
              className="premium-card p-8 flex flex-col justify-start h-full group"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-[9px] font-bold text-accent-gold tracking-widest uppercase">
                  {art.category}
                </span>
                <span className="font-sans text-[9px] text-charcoal/50 font-bold">
                  {art.readTime}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-primary-navy group-hover:text-accent-gold transition-colors duration-300 mb-4 leading-snug">
                {art.title}
              </h3>

              <p className="font-sans text-sm text-charcoal/85 leading-relaxed font-normal">
                {art.summary}
              </p>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
