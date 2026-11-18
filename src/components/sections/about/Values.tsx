"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H2 } from "@/components/ui/Typography";
import { ValueCard } from "@/components/cards/ValueCard";
import { aboutContent } from "@/content/about";
import { easing } from "@/lib/motion";

export function Values() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper theme="dark" spacing="large" id="values">
      <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
        <Kicker theme="dark">Principles</Kicker>
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing.entrance }}
        >
          <H2 theme="dark" className="mx-auto">
            How We Work & What We Believe
          </H2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {aboutContent.values.map((val, idx) => (
          <ValueCard
            key={val.id}
            title={val.title}
            description={val.description}
            index={idx}
            theme="dark"
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
