"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = "https://wa.me/917591938118?text=Hi%20Aux%20Blanc%20Financial%20Advisory%2C%20I%20would%20like%20to%20know%20more%20about%20your%2520services.";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section
      id="home"
      className="min-h-screen pt-28 md:pt-36 pb-12 flex flex-col justify-between relative overflow-hidden bg-background-ivory"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-center flex-1 relative z-20">
        
        {/* Left Editorial Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col justify-center text-left"
        >
          {/* Accent Label */}
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center space-x-3 mb-6"
          >
            <span className="h-[1.5px] w-6 bg-accent-gold" />
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase">
              Financial & Corporate Advisory
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUpVariants}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-navy leading-[1.08] mb-6"
          >
            Your Trusted Partner for <br />
            Business, Finance & <span className="font-serif italic text-accent-gold">Compliance</span>.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            variants={fadeUpVariants}
            className="font-sans text-base md:text-lg text-charcoal/90 font-medium max-w-3xl leading-relaxed mb-10"
          >
            Aux Blanc Financial Advisory helps entrepreneurs, startups, and growing businesses navigate management consultancy, accounting, taxation, company incorporation, and recurring regulatory compliance.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center font-sans text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-none shadow-sm cursor-pointer"
            >
              Book a Consultation
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center font-sans text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-none cursor-pointer"
            >
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Legacy Partners Logo Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full border-t border-charcoal/10 bg-background-ivory/50 backdrop-blur-sm py-8 relative z-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-charcoal/50 uppercase shrink-0">
            Our Legacy Partners
          </span>
          <div className="flex flex-wrap items-center gap-x-12 md:gap-x-16 gap-y-6">
            {/* Pelago */}
            <a
              href="https://www.pelago.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 group cursor-pointer transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <svg
                className="w-5 h-5 text-primary-navy group-hover:text-accent-gold transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12A10 10 0 1 1 12 2v10z" />
                <path d="M12 2a10 10 0 0 1 10 10H12z" />
              </svg>
              <span className="font-serif text-base md:text-lg font-bold tracking-wide text-primary-navy group-hover:text-accent-gold transition-colors duration-300">
                PELAGO
              </span>
            </a>

            {/* Tass */}
            <a
              href="https://tasshamjit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 group cursor-pointer transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <svg
                className="w-5 h-5 text-primary-navy group-hover:text-accent-gold transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 17V9h6" />
              </svg>
              <span className="font-serif text-base md:text-lg font-bold tracking-wide text-primary-navy group-hover:text-accent-gold transition-colors duration-300">
                TASS
              </span>
            </a>

            {/* Hamjid */}
            <a
              href="https://tasshamjit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 group cursor-pointer transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <svg
                className="w-5 h-5 text-primary-navy group-hover:text-accent-gold transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M8 11h8" />
                <path d="M12 7v8" />
              </svg>
              <span className="font-serif text-base md:text-lg font-bold tracking-wide text-primary-navy group-hover:text-accent-gold transition-colors duration-300">
                HAMJID
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
