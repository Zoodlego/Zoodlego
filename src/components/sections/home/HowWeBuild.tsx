"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H2, H3, Lead, Body } from "@/components/ui/Typography";
import { homeContent } from "@/content/home";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";

const pipelineStages = [
  {
    step: "01",
    phase: "Phase 01",
    tag: "Validation",
    gate: "Mechanic Proven",
  },
  {
    step: "02",
    phase: "Phase 02",
    tag: "Prototype",
    gate: "60 FPS Benchmark",
  },
  {
    step: "03",
    phase: "Phase 03",
    tag: "Test Track",
    gate: "Device Verified",
  },
  {
    step: "04",
    phase: "Phase 04",
    tag: "Production",
    gate: "Store Compliant",
  },
];

export function HowWeBuild() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper theme="light" spacing="large" id="how-we-build" className="bg-[#FBFBFD]">
      {/* Symmetrical Centered Header: H2 > Lead */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
        <Kicker theme="light">{homeContent.howWeBuild.kicker}</Kicker>
        
        <H2 theme="light" className="mb-4">
          {homeContent.howWeBuild.headline}
        </H2>
        
        <Lead theme="light" className="mx-auto text-left sm:text-center">
          {homeContent.howWeBuild.subline}
        </Lead>
      </div>

      {/* Symmetrical 4-Stage Architectural Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {homeContent.howWeBuild.steps.map((step, index) => {
          const stage = pipelineStages[index];
          return (
            <motion.div
              key={step.step}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
                ease: easing.entrance,
              }}
              className={cn(
                "p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90",
                "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.02)]",
                "hover:border-slate-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
                "transition-all duration-300 flex flex-col justify-between h-full group"
              )}
            >
              <div className="flex flex-col flex-grow">
                {/* 1. Integrated Stage Header: Phase Number + Discipline Tag (Guaranteed single-line, zero wrap) */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-100">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-500 whitespace-nowrap">
                    {stage.phase}
                  </span>
                  <span className="type-caption font-mono uppercase tracking-wider font-semibold text-[#14264A] bg-[#14264A]/5 border border-[#14264A]/10 px-2.5 py-0.5 rounded-full text-[10px] shrink-0 whitespace-nowrap">
                    {stage.tag}
                  </span>
                </div>

                {/* 2. H3 Step Title (Locked min-height for cross-column baseline alignment) */}
                <div className="min-h-[52px] sm:min-h-[58px] flex items-start mb-3">
                  <H3 theme="light" className="leading-snug text-slate-900 group-hover:text-[#14264A] transition-colors">
                    {step.title}
                  </H3>
                </div>

                {/* 3. Step Description */}
                <Body theme="light" className="text-slate-600 mb-6 flex-grow leading-relaxed">
                  {step.description}
                </Body>
              </div>

              {/* 4. Exit Standard Quality Gate (High-contrast, zero-wrap horizontal baseline) */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500 font-semibold shrink-0 whitespace-nowrap">
                  Standard
                </span>
                <span className="font-mono text-xs font-semibold text-slate-800 flex items-center gap-1.5 shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                  <span>{stage.gate}</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
