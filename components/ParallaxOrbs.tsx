"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxOrbsProps {
  className?: string;
}

export default function ParallaxOrbs({ className = "" }: ParallaxOrbsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-gold/[0.07] blur-[80px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -left-16 w-56 h-56 rounded-full bg-primary-navy/[0.04] blur-[60px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full bg-accent-gold/[0.05] blur-[50px]"
      />
    </div>
  );
}
