"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H2, Lead } from "@/components/ui/Typography";
import { TeamCard } from "@/components/cards/TeamCard";
import { aboutContent } from "@/content/about";
import { easing } from "@/lib/motion";

export function Team() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper theme="light" spacing="large" id="team">
      <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 flex flex-col items-center">
        <Kicker theme="light">{aboutContent.team.kicker}</Kicker>
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing.entrance }}
          className="mb-5"
        >
          <H2 theme="light" className="mx-auto">
            {aboutContent.team.headline}
          </H2>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Lead theme="light" className="mx-auto text-left sm:text-center">
            {aboutContent.team.subline}
          </Lead>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {aboutContent.team.roles.map((role) => (
          <TeamCard key={role.id} role={role} theme="light" />
        ))}
      </div>
    </SectionWrapper>
  );
}
