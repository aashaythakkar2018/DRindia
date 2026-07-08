import { motion } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  x = 0,
  scale = 1,
  className = ""
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
