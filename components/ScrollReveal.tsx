"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type VariantName = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "clipReveal";

const variants: Record<VariantName, Variants> = {
  fadeUp: fadeUp,
  fadeLeft: {
    hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.88, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  },
  clipReveal: {
    hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0% 0 0 0)",
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: VariantName;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "span";
  once?: boolean;
  margin?: string;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
  as = "div",
  once = true,
  margin = "-80px",
}: ScrollRevealProps) {
  const Component = motion[as];

  return (
    <Component
      variants={variants[variant] ?? fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
