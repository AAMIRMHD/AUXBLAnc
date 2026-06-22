"use client";

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
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-slate-200/60 py-16 text-charcoal/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
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
          </div>

          {/* Nav Links Col */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-sans text-xs font-bold tracking-[0.2em] text-accent-gold uppercase mb-6">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="font-sans text-sm text-charcoal/90 hover:text-accent-gold transition-colors duration-300 uppercase tracking-wider font-bold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="lg:col-span-4 text-left">
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

            {/* Social Icons Placeholders */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="font-sans text-xs text-charcoal/60 hover:text-accent-gold transition-colors duration-300 uppercase tracking-widest font-bold"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Legal Disclaimers & Professional Boundaries */}
        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
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
        </div>

      </div>
    </footer>
  );
}
