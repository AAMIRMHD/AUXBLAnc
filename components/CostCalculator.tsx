"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface EntityOption {
  key: string;
  name: string;
  govtFee: number;
  profFee: number;
  timeframe: string;
}

interface AddonOption {
  key: string;
  name: string;
  price: number;
}

export default function CostCalculator() {
  const entityOptions: EntityOption[] = [
    { key: "pvt-ltd", name: "Private Limited Company", govtFee: 2000, profFee: 4499, timeframe: "8-12 days" },
    { key: "llp", name: "Limited Liability Partnership (LLP)", govtFee: 1500, profFee: 2999, timeframe: "7-10 days" },
    { key: "partnership", name: "Partnership Firm", govtFee: 1000, profFee: 1999, timeframe: "3-5 days" },
    { key: "proprietorship", name: "Proprietorship & MSME", govtFee: 0, profFee: 1499, timeframe: "2-3 days" },
  ];

  const addonOptions: AddonOption[] = [
    { key: "gst", name: "GST Registration & Setup", price: 999 },
    { key: "trademark", name: "Trademark Filing (One Class)", price: 4499 },
    { key: "iec", name: "Import Export Code (IEC)", price: 1999 },
    { key: "audit", name: "Initial Accounting & Ledger Setup", price: 2499 },
  ];

  const [selectedEntity, setSelectedEntity] = useState<string>("pvt-ltd");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [totals, setTotals] = useState({ govt: 0, prof: 0, total: 0 });

  useEffect(() => {
    const entity = entityOptions.find((e) => e.key === selectedEntity);
    if (!entity) return;

    let govtSum = entity.govtFee;
    let profSum = entity.profFee;

    selectedAddons.forEach((addonKey) => {
      const addon = addonOptions.find((a) => a.key === addonKey);
      if (addon) {
        // Assume addons are mostly professional setup costs
        profSum += addon.price;
      }
    });

    setTotals({
      govt: govtSum,
      prof: profSum,
      total: govtSum + profSum,
    });
  }, [selectedEntity, selectedAddons]);

  const handleAddonToggle = (key: string) => {
    if (selectedAddons.includes(key)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== key));
    } else {
      setSelectedAddons([...selectedAddons, key]);
    }
  };

  const getWhatsAppLink = () => {
    const entity = entityOptions.find((e) => e.key === selectedEntity);
    const addonsList = selectedAddons
      .map((k) => addonOptions.find((a) => a.key === k)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Hi Aux Blanc, I used your Cost Calculator. I want to register a ${
      entity?.name
    }${addonsList ? ` with additions: ${addonsList}` : ""}. The estimated quote is ₹${
      totals.total
    }. I would like to get started.`;

    return `https://wa.me/917591938118?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-24 bg-background-ivory noise-overlay relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] md:text-xs font-semibold tracking-[0.25em] text-accent-gold uppercase mb-3 block">
            Pricing Transparency
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal tracking-tight">
            Estimate Your Incorporation Cost
          </h2>
          <p className="font-sans text-xs md:text-sm text-charcoal/60 leading-relaxed font-light mt-4">
            Select your preferred business entity and compliance additions below to get an instant cost and timeline estimate.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Options Column */}
          <div className="lg:col-span-7 space-y-8 bg-background-navy/40 backdrop-blur-md border border-accent-gold/10 p-8">
            
            {/* Step 1: Entity Choice */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-wider text-accent-gold uppercase mb-4">
                1. Select Entity Structure
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {entityOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setSelectedEntity(opt.key)}
                    className={`p-4 border text-left flex flex-col justify-between transition-all duration-300 ${
                      selectedEntity === opt.key
                        ? "border-accent-gold bg-accent-gold/5"
                        : "border-accent-gold/15 bg-transparent hover:border-accent-gold/50"
                    }`}
                  >
                    <span className="font-serif text-sm font-medium text-white mb-2">
                      {opt.name}
                    </span>
                    <span className="font-sans text-[10px] text-white/50">
                      Timeline: {opt.timeframe}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Addons */}
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-wider text-accent-gold uppercase mb-4">
                2. Select Core Addons (Optional)
              </h3>
              <div className="space-y-3">
                {addonOptions.map((opt) => {
                  const isChecked = selectedAddons.includes(opt.key);
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleAddonToggle(opt.key)}
                      className={`w-full p-4 border text-left flex items-center justify-between transition-all duration-300 ${
                        isChecked
                          ? "border-accent-gold bg-accent-gold/5"
                          : "border-accent-gold/15 bg-transparent hover:border-accent-gold/50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 border flex items-center justify-center ${isChecked ? "border-accent-gold bg-accent-gold text-primary-navy" : "border-white/30"}`}>
                          {isChecked && (
                            <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="font-sans text-xs text-white/90">
                          {opt.name}
                        </span>
                      </div>
                      <span className="font-sans text-xs font-semibold text-accent-gold">
                        + ₹{opt.price.toLocaleString("en-IN")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Quote Column */}
          <div className="lg:col-span-5 bg-background-navy border border-accent-gold/20 p-8 flex flex-col justify-between h-full sticky top-28">
            <div>
              <h3 className="font-serif text-xl font-light text-white mb-6 border-b border-accent-gold/15 pb-4">
                Estimated Summary
              </h3>

              <div className="space-y-4 font-sans text-xs text-white/70 mb-8">
                <div className="flex justify-between">
                  <span>Entity Government Fees:</span>
                  <span className="text-white font-medium">₹{totals.govt.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Professional Setup & Addons:</span>
                  <span className="text-white font-medium">₹{totals.prof.toLocaleString("en-IN")}</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-baseline">
                  <span className="text-sm font-medium text-white">Total Estimate:</span>
                  <span className="text-2xl font-serif font-semibold text-accent-gold">
                    ₹{totals.total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="bg-accent-gold/5 border border-accent-gold/20 p-4 mb-8">
                <p className="font-sans text-[10px] text-white/60 leading-relaxed">
                  *Govt fees are estimates based on standard nominal capital codes in India. State stamp duties and stamp taxes may vary. Final invoices will be clarified before filing starts.
                </p>
              </div>
            </div>

            <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center w-full block font-sans text-xs font-semibold tracking-wider text-primary-navy uppercase bg-accent-gold border border-accent-gold hover:bg-transparent hover:text-accent-gold transition-all duration-500 py-4 rounded-none cursor-pointer"
              >
                Proceed via WhatsApp
              </a>
          </div>

        </div>

      </div>
    </section>
  );
}
