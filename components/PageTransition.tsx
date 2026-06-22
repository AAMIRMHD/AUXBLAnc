"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col pointer-events-none"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Top gold bar */}
          <motion.div
            className="w-full bg-accent-gold"
            initial={{ scaleY: 1, originY: 0 }}
            animate={{ scaleY: 0, originY: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
            style={{ height: "50vh" }}
          />
          {/* Bottom navy bar */}
          <motion.div
            className="w-full bg-primary-navy"
            initial={{ scaleY: 1, originY: 1 }}
            animate={{ scaleY: 0, originY: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
            style={{ height: "50vh" }}
          />

          {/* Logo in the centre during load */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.45 }}
          >
            <span className="font-serif text-3xl font-bold tracking-[0.15em] text-white select-none">
              AUX BLANC
            </span>
            <span className="font-sans text-[9px] font-semibold tracking-[0.3em] text-white/60 uppercase mt-1 select-none">
              Financial Advisory
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
