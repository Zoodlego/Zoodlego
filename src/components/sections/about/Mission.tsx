"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { Lead } from "@/components/ui/Typography";
import { aboutContent } from "@/content/about";
import { easing } from "@/lib/motion";

export function Mission() {
  const shouldReduceMotion = useReducedMotion();

  const standards = [
    { label: "CRAFT", value: "Immediate 60 FPS Controls" },
    { label: "MONETIZATION", value: "Standard Google AdMob" },
    { label: "PLATFORM", value: "Android-First Architecture" },
  ];

  return (
    <SectionWrapper theme="light" spacing="large" id="mission">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow Kicker */}
        <Kicker theme="light">{aboutContent.mission.kicker}</Kicker>
        
        {/* Monumental Editorial Statement: Breaths as pure typography without card container */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing.entrance }}
          className="max-w-3xl mx-auto my-4 sm:my-6"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold text-slate-900 tracking-tight leading-[1.18] text-balance">
            {aboutContent.mission.headline}
          </h2>
        </motion.div>
        
        {/* Supporting Lead */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mb-12 sm:mb-14 max-w-xl mx-auto"
        >
          <Lead theme="light" className="text-slate-600 text-center mx-auto">
            {aboutContent.mission.subline}
          </Lead>
        </motion.div>

        {/* 3-Point Studio Standard Strip (Hairline Separators, No Heavy Cards) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="w-full max-w-3xl pt-8 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4"
        >
          {standards.map((item, idx) => (
            <React.Fragment key={item.label}>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 px-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-slate-600 font-semibold mb-1">
                  {item.label}
                </span>
                <span className="type-caption font-semibold text-slate-900">
                  {item.value}
                </span>
              </div>
              {idx < standards.length - 1 && (
                <div className="hidden sm:block w-px h-8 bg-slate-200 shrink-0" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
