"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic - Threshold based last active section
      const sections = ["home", "services", "about", "insights", "contact"];
      let currentActive = "home";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section has scrolled past the threshold (180px)
          if (rect.top <= 180) {
            currentActive = section;
          }
        }
      }

      // Fallback for reaching the very bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentActive = "contact";
      }

      setActiveSection(currentActive);
    };

    // Trigger scroll check initially
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
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

  const whatsappUrl = "https://wa.me/917591938118?text=Hi%20Aux%20Blanc%20Financial%20Advisory%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "top-4 left-4 right-4 md:left-8 md:right-8 max-w-7xl mx-auto py-2.5 bg-white/90 backdrop-blur-md border border-slate-200/40 shadow-lg rounded-full overflow-hidden"
            : "top-0 left-0 right-0 max-w-full py-6 bg-transparent border-b border-transparent rounded-none"
        }`}
      >
        <div className={`mx-auto flex justify-between items-center transition-all duration-500 ${
          isScrolled ? "px-8 w-full" : "max-w-7xl px-6 md:px-12"
        }`}>
          
          {/* Logo Brand Group */}
          <a href="#home" className="group flex flex-col items-start cursor-pointer select-none">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.12em] text-primary-navy transition-all duration-300">
              AUX BLANC
            </span>
            <span className="font-sans text-[8px] md:text-[9px] font-semibold tracking-[0.25em] text-primary-navy/60 uppercase transition-all duration-300">
              Financial Advisory
            </span>
          </a>

          {/* Desktop Navigation Link Items */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className={`font-sans text-xs font-semibold tracking-wider uppercase relative group py-2 transition-colors duration-300 ${
                    isActive ? "text-accent-gold" : "text-charcoal/80 hover:text-accent-gold"
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-accent-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </a>
              );
            })}
          </nav>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center font-sans text-xs font-bold tracking-wider uppercase px-5 py-2 rounded-full shadow-sm cursor-pointer"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-primary-navy focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 lg:hidden bg-white flex flex-col justify-center px-8 md:px-16 pt-24"
          >
            <div className="flex flex-col space-y-6 text-center">
              {menuItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="font-serif text-2xl font-light tracking-wide text-primary-navy hover:text-accent-gold transition-colors duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.04, duration: 0.3 }}
                className="pt-6"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block w-full text-center font-sans text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-full cursor-pointer"
                >
                  Book a Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
