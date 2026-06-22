"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordionNode({ question, answer, isOpen, onToggle }: FAQItem & { isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-accent-gold/15 py-5">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-serif text-base md:text-lg text-primary-navy group-hover:text-accent-gold transition-colors duration-300">
          {question}
        </span>
        <span className="text-accent-gold ml-4 shrink-0 transition-transform duration-300">
          {isOpen ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-xs md:text-sm text-charcoal/80 leading-relaxed font-light mt-4 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const faqs: FAQItem[] = [
    {
      question: "What documents are required to register a Private Limited Company?",
      answer:
        "You will need PAN cards, Aadhaar cards (or Passports for foreign nationals), passport-size photographs of all directors, and proof of the registered business office. Office proof includes a recent utility bill (electricity, telephone, or gas bill not older than 2 months), property rent agreement, and an NOC (No Objection Certificate) from the property owner.",
    },
    {
      question: "Is GST registration mandatory from day one?",
      answer:
        "GST registration is mandatory if your business turnover exceeds ₹40 Lakhs for goods suppliers or ₹20 Lakhs for service providers (limit is ₹10 Lakhs for North-Eastern and hill states). Additionally, businesses executing inter-state trading or selling online via e-commerce portals require registration regardless of turnover. Voluntary registration is recommended to claim Input Tax Credit (ITC) on initial setups.",
    },
    {
      question: "What is the average timeline to incorporate an LLP?",
      answer:
        "Incorporating a Limited Liability Partnership (LLP) typically takes between 7 to 10 business days. The process includes securing Digital Signature Certificates (DSC) for all partners, obtaining name approvals from the MCA, drafting partnership deeds, and filing final incorporation forms.",
    },
    {
      question: "What are the annual compliances for a Private Limited Company?",
      answer:
        "A Private Limited Company must file annual financial statements (Form AOC-4) and annual returns (Form MGT-7) with the Registrar of Companies (ROC) every year. In addition, it must hold regular board meetings, file annual income tax returns (Form ITR-6), audit its accounts, and file recurring monthly/quarterly GST returns.",
    },
    {
      question: "Can I convert my sole proprietorship to an LLP or Private Limited Company later?",
      answer:
        "Yes. As your startup expands, raises capital, or adds co-founders, sole proprietorships can be converted to an LLP or a Private Limited Company. We handle the entire conversion workflow, including contract transfers, updating tax registration numbers, and drafting corporate charters.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background-ivory noise-overlay relative border-t border-accent-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Section Header Copy */}
          <div className="lg:col-span-4 text-left">
            <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase mb-3 block">
              Support Center
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-xs md:text-sm text-charcoal/60 leading-relaxed font-light mt-4">
              Clear answers regarding incorporation guidelines, tax compliance structures, and regulatory deadlines.
            </p>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-8 space-y-2">
            {faqs.map((faq, idx) => (
              <FAQAccordionNode
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={idx === openIndex}
                onToggle={() => setOpenIndex(idx === openIndex ? null : idx)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
