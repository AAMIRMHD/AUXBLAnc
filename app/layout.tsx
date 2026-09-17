import type { Metadata } from "next";
import "./globals.css";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";

export const metadata: Metadata = {
  title: "Aux Blanc Financial Advisory | Premium Business Consultancy & Accounting",
  description:
    "Aux Blanc Financial Advisory delivers world-class corporate consultancy, business planning, tax strategy, bookkeeping, LLP/Pvt Ltd incorporation, and ROC compliance support.",
  keywords: [
    "financial consultancy",
    "business advisory",
    "accounting services",
    "bookkeeping",
    "tax planning",
    "LLP incorporation",
    "private limited company registration",
    "GST compliance",
    "ROC filings",
    "Aux Blanc",
  ],
  openGraph: {
    title: "Aux Blanc Financial Advisory | Clarity for Today. Confidence for Tomorrow.",
    description:
      "Premium business advisory, company incorporation, bookkeeping, tax management, and compliance services for ambitious startups and SMEs.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Professional Service JSON-LD Structured Data
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Aux Blanc Financial Advisory",
    "alternateName": "Aux Blanc",
    "description":
      "Aux Blanc Financial Advisory provides management consultancy, business advisory, accounting, bookkeeping, tax, company formation, and ROC compliance support.",
    "telephone": "+917591938118",
    "email": "auxblancfinancialadvisory@gmail.com",
    "url": "https://auxblanc.com",
    "areaServed": "IN",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data Script injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>
        <LenisSmoothScroll>
          {children}
        </LenisSmoothScroll>
      </body>
    </html>
  );
}
