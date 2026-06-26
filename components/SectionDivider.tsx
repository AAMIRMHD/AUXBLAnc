"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden bg-slate-100/80">
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent"
      />
    </div>
  );
}
