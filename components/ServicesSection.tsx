"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const orbX = useTransform(scrollYProgress, [0, 1], [-20, 40]);

  const services: Service[] = [
    {
      id: "mgmt-consultancy",
      title: "Management Consultancy",
      description: "Strategic guidance to refine operations, streamline workflows, and enhance organizational performance.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold stroke-[1.25] transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      id: "biz-advisory",
      title: "Business Advisory",
      description: "Critical advice on corporate structure planning, valuation metrics, and scaling strategies.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold stroke-[1.25] transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: "accounting",
      title: "Accounting & Bookkeeping",
      description: "Meticulous system integration for ledgers, cash flows, payroll, and standard financial reporting.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold stroke-[1.25] transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "tax-consultancy",
      title: "Tax Consultancy",
      description: "Structured tax planning, computation filings, indirect tax filings, and representation support.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold stroke-[1.25] transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "company-formation",
      title: "Company Formation",
      description: "Seamless incorporation filings, name approvals, digital signatures, and startup registries.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold stroke-[1.25] transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "compliance-support",
      title: "Compliance Support",
      description: "Regular updates, ROC filing maintenance, annual compliance audits, and GST registers.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold stroke-[1.25] transition-transform duration-500 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  const ease = [0.16, 1, 0.3, 1];

  const headingVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.9, ease },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.94, rotateX: 8 },
    visible: {
      opacity: 1, y: 0, scale: 1, rotateX: 0,
      transition: { duration: 0.75, ease },
    },
  };

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-background-ivory relative overflow-hidden">
      {/* Parallax decorative orb */}
      <motion.div
        style={{ y: orbY, x: orbX }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-accent-gold/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">

        {/* Section Header */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl text-left mb-16"
        >
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy tracking-tight leading-tight">
            Our Core Services
          </h2>
        </motion.div>

        {/* Services Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1200px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                rotateX: -3,
                rotateY: 3,
                boxShadow: "0 30px 60px -15px rgba(10,29,55,0.13), 0 0 0 1px rgba(197,168,128,0.2)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="premium-card p-8 flex flex-col justify-between min-h-[240px] relative group"
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
            >
              <div>
                {/* Icon */}
                <div className="mb-6 w-11 h-11 flex items-center justify-center bg-background-ivory border border-slate-200/60 group-hover:border-accent-gold/50 group-hover:bg-white transition-all duration-500 group-hover:scale-105">
                  {service.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-navy mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-charcoal/85 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
