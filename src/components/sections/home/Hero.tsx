"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { Display, Lead } from "@/components/ui/Typography";
import { homeContent } from "@/content/home";
import { easing } from "@/lib/motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      theme="dark"
      spacing="hero"
      className="flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Subtle Studio Logo Motif Watermark Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] select-none"
      >
        <Image
          src="/brand/logo-outline-white.png"
          alt=""
          width={800}
          height={800}
          className="w-[600px] h-[600px] object-contain"
          priority
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow Kicker */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easing.entrance }}
        >
          <Kicker theme="dark" badge={true}>
            {homeContent.hero.kicker}
          </Kicker>
        </motion.div>

        {/* Monumental Apple Display Headline: 18-22ch max, text-wrap: balance */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: easing.entrance }}
          className="mb-5"
        >
          <Display as="h1" theme="dark" className="mx-auto">
            {homeContent.hero.headline}
          </Display>
        </motion.div>

        {/* Lead Subline: 52ch max, left-aligned on mobile if >3 lines */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: easing.entrance }}
          className="mb-9"
        >
          <Lead theme="dark" className="mx-auto text-left sm:text-center">
            {homeContent.hero.subline}
          </Lead>
        </motion.div>

        {/* Clear Action Hierarchy: One Primary Button CTA, Secondary Text Link with Arrow */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto"
        >
          <Button
            href={homeContent.hero.primaryCta.href}
            variant="primary"
            theme="dark"
            size="lg"
            className="w-full sm:w-auto shadow-md"
          >
            <span>{homeContent.hero.primaryCta.label}</span>
            <span className="ml-2" aria-hidden="true">↓</span>
          </Button>

          <Link
            href={homeContent.hero.secondaryCta.href}
            className="type-body text-slate-300 hover:text-white transition-colors inline-flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded py-2 px-3 min-h-[44px]"
          >
            <span>{homeContent.hero.secondaryCta.label}</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
