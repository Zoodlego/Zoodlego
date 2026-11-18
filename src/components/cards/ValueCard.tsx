"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { H3, Body, Caption } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
  theme?: "light" | "dark";
}

export function ValueCard({
  title,
  description,
  index,
  theme = "dark",
}: ValueCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="h-full"
    >
      <div
        className={cn(
          "p-7 sm:p-8 rounded-2xl flex flex-col justify-between h-full border select-none transition-colors",
          theme === "dark"
            ? "bg-[#11203E] border-white/10 hover:border-white/20 text-white"
            : "bg-white border-slate-200 hover:border-slate-300 text-[#111827]"
        )}
      >
        <div>
          {/* 1. H3 Title */}
          <H3 theme={theme} className="mb-3">
            {title}
          </H3>

          {/* 2. One-line description (secondary color) */}
          <Body theme={theme} className="mb-6 text-slate-300">
            {description}
          </Body>
        </div>

        {/* 3. Status Caption Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <Caption theme={theme} className="font-mono font-semibold uppercase tracking-widest text-slate-400">
            0{index + 1}
          </Caption>
          <Caption theme={theme} className="font-mono uppercase tracking-widest text-slate-400">
            STUDIO PRINCIPLE
          </Caption>
        </div>
      </div>
    </motion.div>
  );
}
