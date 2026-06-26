"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/aux_blanc?igsh=MTdnY2VjaGtlOXhzMw%3D%3D&utm_source=qr",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/aux-blanc-financial-advisory/",
    },
  ];

  const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <footer className="bg-white border-t border-slate-200/60 py-16 text-charcoal/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Main Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16"
        >
          
          {/* Brand Col */}
          <motion.div custom={0} variants={columnVariants} className="lg:col-span-5 flex flex-col items-start text-left">
            <a href="#home" className="group flex flex-col items-start cursor-pointer select-none mb-6">
              <span className="font-serif text-2xl font-bold tracking-[0.12em] text-primary-navy group-hover:text-accent-gold transition-colors duration-300">
                AUX BLANC
              </span>
              <span className="font-sans text-[9px] font-semibold tracking-[0.25em] text-primary-navy/60 uppercase group-hover:text-accent-gold/60 transition-colors duration-300">
                Financial Advisory
              </span>
            </a>
            <p className="font-sans text-sm text-charcoal/90 leading-relaxed font-semibold max-w-sm">
              Management Consultancy | Business Advisory | Accounting | Tax | Compliance
            </p>
            <p className="font-sans text-sm text-charcoal/70 leading-relaxed font-normal max-w-sm mt-3">
              Providing professional advisory support services for startups, entrepreneurs, SMEs, and growing companies.
            </p>
          </motion.div>

          {/* Nav Links Col */}
          <motion.div custom={1} variants={columnVariants} className="lg:col-span-3 text-left">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-6">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((item, idx) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 + 0.2 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="font-sans text-sm text-charcoal/90 hover:text-accent-gold transition-colors duration-300 uppercase tracking-wider font-bold inline-block hover:translate-x-1 transition-transform"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Details Col */}
          <motion.div custom={2} variants={columnVariants} className="lg:col-span-4 text-left">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-6">
              Contact Channels
            </h4>
            <ul className="space-y-3 font-sans text-sm text-charcoal/90 font-normal mb-6">
              <li className="flex items-center">
                <span className="text-primary-navy font-bold mr-2">Phone / WhatsApp:</span>
                <a href="tel:+917591938118" className="hover:text-accent-gold transition-colors duration-300 font-medium">
                  +91 75919 38118
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-primary-navy font-bold mr-2 font-sans">Email:</span>
                <a href="mailto:auxblancfinancialadvisory@gmail.com" className="hover:text-accent-gold transition-colors duration-300 break-all font-medium">
                  auxblancfinancialadvisory@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-2">
              <motion.a
                href={socialLinks[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-sm"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              <motion.a
                href={socialLinks[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0077B5] shadow-sm"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

        </motion.div>

        {/* Legal Disclaimers */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div className="max-w-2xl text-left">
            <p className="font-sans text-[10px] text-charcoal/50 leading-relaxed font-light mb-4">
              Disclaimer: Services are provided in accordance with applicable laws and professional standards. Where required, services may be delivered in association with qualified professionals.
            </p>
            <p className="font-sans text-[10px] text-charcoal/45 font-medium">
              &copy; {currentYear} Aux Blanc Financial Advisory. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 shrink-0 font-sans text-[10px] text-charcoal/50">
            <a href="#" className="hover:text-accent-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-gold transition-colors duration-300">
              Terms & Conditions
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
