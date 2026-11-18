"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H2, H3, Lead, Body, Caption } from "@/components/ui/Typography";
import { homeContent } from "@/content/home";
import { easing } from "@/lib/motion";

export function WhyZoodlego() {
  const shouldReduceMotion = useReducedMotion();

  const values = [
    {
      label: "SCOPE DISCIPLINE",
      title: "Focused Mechanics",
      desc: "We isolate one fun touch loop before adding art or UI. Scope stays small so performance stays high.",
    },
    {
      label: "PLAYER RESPECT",
      title: "Fair AdMob Integration",
      desc: "Clean in-game advertising without deceptive buttons, fake countdowns, or pay-to-progress gates.",
    },
    {
      label: "CROSS-PLATFORM",
      title: "Android & Playables",
      desc: "Engineered first for Google Play, with small bundle architectures ready for lightweight browser play.",
    },
  ];

  return (
    <SectionWrapper theme="dark" spacing="large" id="why-zoodlego">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <Kicker theme="dark">{homeContent.whyZoodlego.kicker}</Kicker>
        
        <H2 theme="dark" className="mb-5 mx-auto">
          {homeContent.whyZoodlego.headline}
        </H2>
        
        <Lead theme="dark" className="mb-9 mx-auto text-left sm:text-center">
          {homeContent.whyZoodlego.body}
        </Lead>

        {/* Minimal 3-Column Editorial Grid: Strict Order H3 > Body > Caption */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 w-full pt-10 border-t border-white/10 text-left">
          {values.map((item, index) => (
            <motion.div
              key={item.label}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex flex-col justify-between"
            >
              <div>
                {/* 1. H3 Title */}
                <H3 theme="dark" className="mb-2">
                  {item.title}
                </H3>

                {/* 2. One-line description (secondary color) */}
                <Body theme="dark" className="mb-4 text-slate-300">
                  {item.desc}
                </Body>
              </div>

              {/* 3. Status Caption */}
              <div className="pt-3 border-t border-white/10">
                <Caption theme="dark" className="font-mono font-semibold uppercase tracking-widest text-slate-400 block">
                  {item.label}
                </Caption>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
