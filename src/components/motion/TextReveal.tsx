"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, className }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={cn("inline-block", className)}>{children}</span>;
  }

  return (
    <span className={cn("inline-block overflow-hidden align-top", className)}>
      <motion.span
        initial={{ y: "115%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.75,
          delay,
          ease: easing.entrance,
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
