"use client";

import { motion } from "framer-motion";

interface RegistrationOption {
  title: string;
  timeframe: string;
  benefits: string[];
}

export default function CompanyFormation() {
  const options: RegistrationOption[] = [
    {
      title: "Proprietorship Registration",
      timeframe: "2-3 business days",
      benefits: ["Sole control", "Minimal overheads", "Easy tax filing"],
    },
    {
      title: "Partnership Firm",
      timeframe: "3-5 business days",
      benefits: ["Co-founder deeds", "Shared capitals", "Flexible structures"],
    },
    {
      title: "LLP Registration",
      timeframe: "7-10 business days",
      benefits: ["Limited liability", "Low compliance costs", "Corporate status"],
    },
    {
      title: "Private Limited Company",
      timeframe: "8-12 business days",
      benefits: ["Maximum investor trust", "Separate legal entity", "Venture capital friendly"],
    },
    {
      title: "GST Registration",
      timeframe: "3-5 business days",
      benefits: ["Voluntary setups", "B2B input tax claims", "Pan-India trade eligibility"],
    },
    {
      title: "MSME / Udyam Registration",
      timeframe: "1-2 business days",
      benefits: ["Priority bank credits", "Stamp duty subsidies", "Government tenders support"],
    },
  ];

  const whatsappUrl = "https://wa.me/917591938118?text=Hi%20Aux%20Blanc%20Financial%20Advisory%2C%20I%20would%20like%20to%20know%20more%20about%20your%20company%20formation%20services.";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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
    <section className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl text-left mb-16"
        >
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-3 block">
            Incorporation Setup
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy tracking-tight leading-tight">
            Start Your Business With Confidence.
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal/85 leading-relaxed font-normal mt-4 max-w-2xl">
            Choose from standard structural options to register your business. We manage the paperwork, name reservations, and MCA filings so you start on sound legal footing.
          </p>
        </motion.div>

        {/* Formations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {options.map((opt, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="premium-card p-8 flex flex-col justify-between group"
            >
              <div>
                <span className="font-sans text-[9px] font-bold text-accent-gold tracking-widest uppercase block mb-1">
                  Timeline: {opt.timeframe}
                </span>
                <h3 className="font-serif text-xl font-bold text-primary-navy mb-4 group-hover:text-accent-gold transition-colors duration-300">
                  {opt.title}
                </h3>
              </div>

              <ul className="space-y-2 border-t border-slate-200/40 pt-4 mt-2">
                {opt.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm text-charcoal/85 font-medium font-sans">
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Speak With an Advisor CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-background-ivory border border-slate-200/50 p-8 md:p-12 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8"
        >
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-primary-navy mb-2 font-bold">
              Unsure which corporate structure fits your timeline?
            </h3>
            <p className="font-sans text-sm text-charcoal/80 font-normal max-w-xl leading-relaxed">
              Our consultants can evaluate your liability limits, tax structures, and funding targets to guide you toward the right setup.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-sans text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-none cursor-pointer"
          >
            Speak With an Advisor
          </a>
        </motion.div>

      </div>
    </section>
  );
}
