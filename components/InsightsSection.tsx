"use client";

import { motion } from "framer-motion";

interface Article {
  title: string;
  category: string;
  readTime: string;
  summary: string;
}

export default function InsightsSection() {
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

  const whatsappUrl = "https://wa.me/917591938118?text=Hi%20Aux%20Blanc%20Financial%20Advisory%2C%20I%20would%2520like%20to%20read%20your%20latest%20insights.";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <section id="insights" className="py-24 bg-background-ivory relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 block">
              Knowledge Hub
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-navy tracking-tight leading-tight">
              Business Insights
            </h2>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] font-bold tracking-widest text-accent-gold uppercase border-b border-accent-gold/40 hover:border-accent-gold transition-colors duration-300 pb-1 cursor-pointer"
          >
            View All Insights
          </a>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((art, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              className="premium-card p-8 flex flex-col justify-between h-[350px] group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-sans text-[9px] font-bold text-accent-gold tracking-widest uppercase">
                    {art.category}
                  </span>
                  <span className="font-sans text-[9px] text-charcoal/50 font-bold">
                    {art.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-primary-navy group-hover:text-accent-gold transition-colors duration-300 mb-4 line-clamp-2 leading-snug">
                  {art.title}
                </h3>

                <p className="font-sans text-sm text-charcoal/85 leading-relaxed font-normal line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-slate-100 pt-4 mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] font-bold tracking-widest text-accent-gold uppercase flex items-center group/link cursor-pointer"
                >
                  Read Article
                  <svg className="w-3.5 h-3.5 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
