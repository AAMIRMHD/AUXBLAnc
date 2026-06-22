"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import of ThreeScene to prevent Next.js SSR hydration errors
const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => <FallbackVisual />,
});

// A luxury-style abstract SVG/CSS fallback for mobile, reduced-motion, and SSR loading
function FallbackVisual() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[550px] flex items-center justify-center relative overflow-hidden select-none">
      {/* Background Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-accent-gold/20 animate-[spin_40s_linear_infinite]" />
        <div className="w-[240px] h-[240px] md:w-[340px] md:h-[340px] rounded-full border border-charcoal/5 absolute animate-[spin_25s_linear_infinite_reverse]" />
        <div className="w-[180px] h-[180px] md:w-[260px] md:h-[260px] rounded-full border border-accent-gold/10 absolute" />
      </div>

      {/* Floating Editorial Sculptures */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center pointer-events-none">
        {/* Core Navy Block */}
        <div className="w-28 h-28 md:w-36 md:h-36 bg-primary-navy border border-accent-gold/20 rotate-45 flex items-center justify-center shadow-2xl relative animate-slow-float z-10">
          <div className="absolute inset-2 border border-accent-gold/10" />
        </div>

        {/* Muted Gold Ring */}
        <div className="absolute w-36 h-36 md:w-48 md:h-48 border-[6px] border-accent-gold/80 rounded-full mix-blend-multiply opacity-80 animate-[spin_30s_linear_infinite]" style={{ transform: "rotateX(60deg) rotateY(15deg)" }} />

        {/* Small Ivory Sphere */}
        <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-[#F5F3ED] rounded-full border border-accent-gold/20 shadow-md animate-[bounce_4s_ease-in-out_infinite]" />
      </div>
    </div>
  );
}

export default function Hero3D() {
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    // 1. Check for reduced motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // 2. Check screen width (disable heavy 3D on small mobile screens to save resource performance)
    const isMobile = window.innerWidth < 768;

    if (!prefersReducedMotion && !isMobile) {
      setShouldRender3D(true);
    }
  }, []);

  return (
    <div className="w-full h-full">
      {shouldRender3D ? <ThreeScene /> : <FallbackVisual />}
    </div>
  );
}
