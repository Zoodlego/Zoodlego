"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/Button";
import { H2, Lead, Caption } from "@/components/ui/Typography";
import { easing } from "@/lib/motion";

interface ContactCTAProps {
  kicker?: string;
  headline: string;
  body: string;
  buttonText: string;
  email: string;
}

export function ContactCTA({
  kicker = "Collaborate With Us",
  headline,
  body,
  buttonText,
  email,
}: ContactCTAProps) {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  const mailtoUrl = `mailto:${email}?subject=Studio%20Inquiry%20-%20Zoodlego`;

  return (
    <SectionWrapper theme="dark" spacing="large">
      <div className="rounded-2xl p-8 sm:p-14 lg:p-16 bg-[#11203E] border border-white/10 text-center max-w-4xl mx-auto">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <Kicker theme="dark" badge={true}>
            {kicker}
          </Kicker>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easing.entrance }}
            className="mb-5"
          >
            <H2 theme="dark" className="mx-auto">
              {headline}
            </H2>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-8"
          >
            <Lead theme="dark" className="mx-auto text-left sm:text-center">
              {body}
            </Lead>
          </motion.div>

          {/* Direct Address & Copy Action with Feedback */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mb-8 flex flex-wrap items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 max-w-full"
          >
            <span className="type-caption font-mono text-slate-300">
              {email}
            </span>
            <span className="text-white/20">|</span>
            <button
              onClick={handleCopyEmail}
              aria-label={copied ? "Email address copied to clipboard" : "Copy email address to clipboard"}
              className="type-caption font-mono uppercase tracking-wider text-sky-400 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded px-2 py-1 min-h-[36px] flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>{copied ? "Copied!" : "Copy"}</span>
              <span aria-hidden="true" className="text-xs">{copied ? "✓" : "📋"}</span>
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </motion.div>

          {/* Primary Action Button (Mailto with prefilled subject) & Instagram Follow */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <Button
              href={mailtoUrl}
              variant="primary"
              theme="dark"
              size="lg"
              className="w-full sm:w-auto shadow-md"
            >
              <span>{buttonText}</span>
              <span className="ml-2" aria-hidden="true">→</span>
            </Button>

            <a
              href="https://www.instagram.com/zoodlegofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="type-body text-slate-300 hover:text-white transition-colors inline-flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded py-2 px-3 min-h-[44px]"
            >
              <span>Instagram @zoodlegofficial</span>
              <span className="sr-only">(opens in a new tab)</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
