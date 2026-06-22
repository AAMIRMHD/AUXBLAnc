"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  colSpan: string;
  icon: React.ReactNode;
}

function BentoCard({ title, subtitle, description, colSpan, icon }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calculate rotation (-6 to 6 degrees max)
    const rotateX = -(mouseY / (height / 2)) * 5;
    const rotateY = (mouseX / (width / 2)) * 5;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`bg-background-navy/60 backdrop-blur-sm border border-accent-gold/15 p-8 flex flex-col justify-between hover:border-accent-gold hover:shadow-2xl relative overflow-hidden group select-none ${colSpan}`}
    >
      {/* Decorative subtle grid background lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,168,128,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,168,128,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />
      
      {/* Golden animated border highlight line */}
      <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-accent-gold transition-all duration-700 group-hover:w-full z-10" />

      <div className="relative z-10">
        {/* Card Icon Header */}
        <div className="mb-6 flex justify-between items-start">
          <div className="w-10 h-10 flex items-center justify-center bg-background-ivory border border-accent-gold/10 group-hover:border-accent-gold transition-colors duration-500">
            {icon}
          </div>
          <span className="font-sans text-[9px] font-semibold tracking-[0.2em] text-accent-gold uppercase">
            {subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-light text-charcoal mb-4 group-hover:text-accent-gold transition-colors duration-300">
          {title}
        </h3>
      </div>

      <div className="relative z-10">
        <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhyAuxBlanc() {
  const cards: BentoCardProps[] = [
    {
      title: "Strategic Thinking",
      subtitle: "Advisory",
      description: "We look beyond immediate checklists. We evaluate compliance tasks and accounting pipelines against your funding requirements, shareholder liabilities, and market trajectory.",
      colSpan: "lg:col-span-7",
      icon: (
        <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Clear Financial Direction",
      subtitle: "Accounting",
      description: "Unravel complicated tax books. We structure reports to deliver clarity, helping you comprehend cash burn rates, gross margins, and working capital requirements.",
      colSpan: "lg:col-span-5",
      icon: (
        <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
      ),
    },
    {
      title: "Reliable Compliance Support",
      subtitle: "Legalities",
      description: "Missed deadlines degrade brand credibility. We ensure consistent processing of corporate returns, ROC annual reports, and GST audits on time.",
      colSpan: "lg:col-span-5",
      icon: (
        <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: "Client-First Partnership",
      subtitle: "Values",
      description: "We operate as an extension of your leadership team. Our professionals remain accessible for continuous calls and email consultations without pricing surprises.",
      colSpan: "lg:col-span-7",
      icon: (
        <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.97 5.97 0 00-.75-2.985m-.05-3.015a3 3 0 004.682-2.72m-6.362 1a5.996 5.996 0 000-5.986m0 5.986a5.993 5.993 0 01-1.04 2.879m1.04-2.879a6 6 0 00-4.32-4.905m0 9.81a5.993 5.993 0 01-1.04-2.879m0 0a5.996 5.996 0 010-5.986m0 5.986a6 6 0 004.32-4.905m-4.32 4.905a5.97 5.97 0 00-.75 2.985m-.05-3.015a3 3 0 00-4.682-2.72m4.682 2.72a3 3 0 00-4.682-2.72m.94 3.197a11.943 11.943 0 010-5.986M6 18.72a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198l-.001.031c0 .225.012.447.037.666A11.944 11.944 0 0012 21c2.17 0 4.207-.576 5.963-1.584A6.062 6.062 0 0018 18.72" />
        </svg>
      ),
    },
    {
      title: "Confidential & Professional Service",
      subtitle: "Security",
      description: "Financial records and incorporation parameters warrant complete privacy. Aux Blanc implements strict document safety and corporate standards, guaranteeing that your proprietary metrics remain protected.",
      colSpan: "lg:col-span-12",
      icon: (
        <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background-ivory noise-overlay relative">
      {/* Decorative vertical grid lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-accent-gold/5 hidden lg:block pointer-events-none" />
      <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-accent-gold/5 hidden lg:block pointer-events-none" />
      <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-accent-gold/5 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase mb-3 block">
            Why Aux Blanc
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal tracking-tight leading-tight">
            Designed for Founders Who <br />
            Require <span className="italic text-accent-gold">Excellence</span>.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <BentoCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              colSpan={card.colSpan}
              icon={card.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
