"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H2, H3, Lead, Body, Caption } from "@/components/ui/Typography";
import { homeContent } from "@/content/home";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function WhatWeDo() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper theme="light" spacing="large" id="what-we-do">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Quiet, Confident Studio Positioning */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing.entrance }}
          className="lg:col-span-5 flex flex-col items-start text-left"
        >
          <Kicker theme="light">{homeContent.whatWeDo.kicker}</Kicker>
          
          <H2 theme="light" className="mb-5 text-left">
            {homeContent.whatWeDo.headline}
          </H2>
          
          <Lead theme="light" className="mb-8 text-left">
            {homeContent.whatWeDo.description}
          </Lead>

          <div className="pt-6 border-t border-slate-200 w-full">
            <Caption theme="light" className="font-mono text-slate-500 uppercase tracking-wider block">
              PLATFORM: ANDROID FIRST • GUJARAT, INDIA
            </Caption>
          </div>
        </motion.div>

        {/* Right Column: Structured Architectural Breakdown (Strict Card Order: H3 > Body > Caption) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {homeContent.whatWeDo.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={cn(
                "p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 transition-colors flex flex-col justify-between",
                index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
              )}
            >
              <div>
                {/* 1. H3 Heading */}
                <H3 theme="light" className="mb-2">
                  {pillar.title}
                </H3>

                {/* 2. One-line description (Secondary Color) */}
                <Body theme="light" className="mb-4">
                  {pillar.description}
                </Body>
              </div>

              {/* 3. Status Caption */}
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between mt-auto">
                <Caption theme="light" className="font-mono uppercase tracking-wider font-semibold text-slate-600">
                  PILLAR {pillar.number}
                </Caption>
                <Caption theme="light" className="font-mono uppercase tracking-wider font-semibold text-slate-800">
                  GOOGLE PLAY
                </Caption>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
