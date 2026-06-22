"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import InsightsSection from "@/components/InsightsSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background-ivory select-none">
      {/* 1. Header (Translucent Sticky Navbar) */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Introduction Section */}
      <IntroSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 6. Process Section */}
      <ProcessSection />

      {/* 7. Insights Section */}
      <InsightsSection />

      {/* 8. Contact CTA Section */}
      <ContactCTA />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
