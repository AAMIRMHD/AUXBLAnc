"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, Check } from "lucide-react";

export default function ContactCTA() {
  const phoneNum = "+91 75919 38118";
  const phoneUrl = "tel:+917591938118";
  const emailUrl = "mailto:auxblancfinancialadvisory@gmail.com";
  const whatsappUrl = "https://wa.me/917591938118?text=Hi%20Aux%20Blanc%20Financial%20Advisory%2C%20I%20would%20like%20to%20know%2520more%20about%20your%20services.";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "incorporation",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    setStatus("submitting");

    // Simulate API posting latency
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  const services = [
    { value: "incorporation", label: "Company Incorporation / LLP" },
    { value: "gst", label: "GST Registration & Filing" },
    { value: "accounting", label: "Bookkeeping & Accounting" },
    { value: "tax", label: "Tax Consultancy & Planning" },
    { value: "roc", label: "ROC & Annual Compliance" },
    { value: "mgmt", label: "Management Consulting" },
  ];

  return (
    <section id="contact" className="py-24 bg-primary-navy relative overflow-hidden text-left">
      {/* Subtle background visual overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* Decorative radial gradients for premium feel */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Accent Label */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="h-[1.5px] w-6 bg-accent-gold" />
                <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-gold uppercase">
                  Contact Channels
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Let’s Build Your Business With Confidence.
              </h2>

              {/* Subtitle Description */}
              <p className="font-sans text-sm text-white/70 max-w-md leading-relaxed font-normal mb-10">
                Reach out to our advisory team directly or send us an inquiry. We support founders, corporate managers, and startups with high-grade advisory, accounting, and compliance.
              </p>

              {/* Contact Channels List */}
              <div className="space-y-5 mb-10">
                {/* Phone Channel */}
                <a
                  href={phoneUrl}
                  className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:border-accent-gold/40 group-hover:bg-accent-gold/5 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-white/70 group-hover:text-accent-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] font-bold text-white/40 tracking-wider uppercase mb-0.5">
                      Call Us Directly
                    </span>
                    <span className="font-sans text-sm font-semibold text-white tracking-wide">
                      {phoneNum}
                    </span>
                  </div>
                </a>

                {/* Email Channel */}
                <a
                  href={emailUrl}
                  className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:border-accent-gold/40 group-hover:bg-accent-gold/5 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-white/70 group-hover:text-accent-gold transition-colors duration-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-sans text-[9px] font-bold text-white/40 tracking-wider uppercase mb-0.5">
                      Email Our Team
                    </span>
                    <span className="font-sans text-xs md:text-sm font-semibold text-white tracking-wide block truncate">
                      {emailUrl.replace("mailto:", "")}
                    </span>
                  </div>
                </a>

                {/* WhatsApp Channel */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:border-accent-gold/40 group-hover:bg-accent-gold/5 transition-colors duration-300">
                    {/* SVG WhatsApp Path */}
                    <svg
                      className="w-4 h-4 text-white/70 group-hover:text-accent-gold transition-colors duration-300"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.013-5.091-2.858-6.939-1.846-1.848-4.31-2.862-6.933-2.863-5.442 0-9.867 4.414-9.87 9.831-.001 1.73.457 3.42 1.326 4.919l-.982 3.585 3.676-.964zm10.844-5.677c-.202-.101-1.194-.59-1.379-.658-.185-.067-.32-.101-.455.101-.135.203-.522.658-.64.793-.118.135-.236.152-.438.051-.202-.101-.853-.314-1.624-.1.002-.597.534-1.03 1.047-1.232.084-.034.126-.06.185-.084l.32-.135c-.059.025-.135.059-.21.084z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block font-sans text-[9px] font-bold text-white/40 tracking-wider uppercase mb-0.5">
                      WhatsApp Live Chat
                    </span>
                    <span className="font-sans text-sm font-semibold text-white tracking-wide">
                      Chat with an Advisor
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Metadata Info */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block font-sans text-[9px] font-bold text-white/40 tracking-wider uppercase mb-0.5">
                    Advisory Hours
                  </span>
                  <span className="font-sans text-xs font-medium text-white/80">
                    Mon - Sat: 9:30 AM - 6:30 PM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Callback Request Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-center shadow-xl backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-white font-bold mb-2">
                      Schedule a Consultation
                    </h3>
                    <p className="font-sans text-xs text-white/60 leading-relaxed font-light mb-2">
                      Provide your details below to schedule an initial advisory call at no charge.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[10px] font-bold text-white/50 uppercase mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-accent-gold focus:bg-white/[0.04] outline-none px-4 py-3 text-xs text-white transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] font-bold text-white/50 uppercase mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-accent-gold focus:bg-white/[0.04] outline-none px-4 py-3 text-xs text-white transition-all duration-300"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-[10px] font-bold text-white/50 uppercase mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.02] border border-white/10 focus:border-accent-gold focus:bg-white/[0.04] outline-none px-4 py-3 text-xs text-white transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[10px] font-bold text-white/50 uppercase mb-2">
                        Required Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-primary-navy border border-white/10 focus:border-accent-gold focus:bg-white/[0.04] outline-none px-4 py-3 text-xs text-white/80 transition-all duration-300 cursor-pointer"
                      >
                        {services.map((s) => (
                          <option key={s.value} value={s.value} className="bg-primary-navy text-white/95">
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[10px] font-bold text-white/50 uppercase mb-2">
                      Brief Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.02] border border-white/10 focus:border-accent-gold focus:bg-white/[0.04] outline-none px-4 py-3 text-xs text-white transition-all duration-300 resize-none"
                      placeholder="Details of your business entity or requirements..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full font-sans text-xs font-bold tracking-wider text-primary-navy uppercase bg-accent-gold border border-accent-gold hover:bg-transparent hover:text-accent-gold transition-all duration-500 py-4 rounded-none cursor-pointer"
                    >
                      Request Callback
                    </button>
                  </div>
                </motion.form>
              )}

              {status === "submitting" && (
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center space-y-4 py-20"
                >
                  <div className="w-10 h-10 border-2 border-accent-gold border-t-transparent rounded-full animate-spin" />
                  <span className="font-sans text-xs text-white/70 font-light">
                    Registering your details...
                  </span>
                </motion.div>
              )}

              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="w-14 h-14 rounded-full border border-accent-gold flex items-center justify-center mx-auto bg-accent-gold/10">
                    <Check className="w-6 h-6 text-accent-gold stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-white font-bold mb-2">
                      Inquiry Received
                    </h3>
                    <p className="font-sans text-xs text-white/70 leading-relaxed font-light max-w-sm mx-auto">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>! A senior financial advisor will review your request and get in touch at <span className="text-white font-medium">{formData.phone}</span> within 2 business hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
