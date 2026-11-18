"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H1, H2, H3, Lead, Body, Caption } from "@/components/ui/Typography";
import { aboutContent } from "@/content/about";
import { easing } from "@/lib/motion";

export function Story() {
  const shouldReduceMotion = useReducedMotion();

  const fastFacts = [
    {
      label: "FOUNDED",
      value: "Nov 4, 2026",
      sub: "Launch Date",
    },
    {
      label: "LOCATION",
      value: "Gujarat, India",
      sub: "Regional Studio",
    },
    {
      label: "PLATFORM",
      value: "Android First",
      sub: "Google Play",
    },
    {
      label: "PORTFOLIO",
      value: "5 Titles",
      sub: "Active Pipeline",
    },
  ];

  return (
    <SectionWrapper
      theme="dark"
      spacing="compact"
      className="overflow-hidden"
      id="story"
    >
      {/* Symmetrical Centered Page Hero: H1 (2.25rem - 4rem, 600 weight) */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center mb-10 sm:mb-12">
        <Kicker theme="dark" badge={true}>
          {aboutContent.hero.kicker}
        </Kicker>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing.entrance }}
          className="mb-5"
        >
          <H1 theme="dark" className="mx-auto">
            {aboutContent.hero.headline}
          </H1>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: easing.entrance }}
          className="mb-8"
        >
          <Lead theme="dark" className="mx-auto text-left sm:text-center">
            {aboutContent.hero.subline}
          </Lead>
        </motion.div>
      </div>

      {/* Understated Baseline Data Strip: Demoted to Support Single Hero Focal Point */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16 p-4 sm:p-6 rounded-2xl bg-[#11203E]/60 border border-white/10">
        {fastFacts.map((fact, index) => (
          <motion.div
            key={fact.label}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + index * 0.08, duration: 0.4, ease: easing.entrance }}
            className="flex flex-col items-center text-center p-3"
          >
            <Caption theme="dark" className="font-mono font-semibold uppercase tracking-widest text-slate-400 mb-1.5 block">
              {fact.label}
            </Caption>
            <p className="type-h3 text-white mb-1 tabular-nums font-semibold">
              {fact.value}
            </p>
            <Caption theme="dark" className="font-mono text-slate-400 block">
              {fact.sub}
            </Caption>
          </motion.div>
        ))}
      </div>

      {/* Symmetrical Centered Narrative Section */}
      <div className="max-w-4xl mx-auto pt-14 border-t border-white/10 flex flex-col items-center">
        <Kicker theme="dark">{aboutContent.story.kicker}</Kicker>
        
        <H2 theme="dark" className="mb-10 text-center mx-auto">
          {aboutContent.story.headline}
        </H2>
        
        {/* 3 Structured Editorial Story Paragraphs */}
        <div className="space-y-6 w-full text-left">
          {aboutContent.story.paragraphs.map((para, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-7 sm:p-8 rounded-2xl bg-[#11203E] border border-white/10"
            >
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <Caption theme="dark" className="font-mono uppercase tracking-wider text-slate-400">
                  MILESTONE 0{idx + 1}
                </Caption>
                <Caption theme="dark" className="font-mono uppercase tracking-wider text-slate-400">
                  STUDIO ARCHITECTURE
                </Caption>
              </div>
              <Body theme="dark" className="text-slate-200">
                {para}
              </Body>
            </motion.div>
          ))}
        </div>

        {/* Draft Review Badge Centered (13px Caption Token) */}
        <div className="mt-10 inline-flex items-center gap-2 type-caption font-mono text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
          <span>{aboutContent.story.badge}</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
