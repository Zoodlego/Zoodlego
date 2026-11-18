"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { H3, Body, Caption } from "@/components/ui/Typography";
import type { FeaturedGame } from "@/content/home";
import { cn } from "@/lib/utils";

interface GameCardProps {
  game: FeaturedGame;
  theme?: "light" | "dark";
  className?: string;
}

export function GameCard({ game, theme = "dark", className }: GameCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      layout
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className={cn("w-full flex flex-col h-full", className)}
    >
      <div
        className={cn(
          "rounded-2xl flex flex-col justify-between h-full border select-none overflow-hidden transition-colors duration-200",
          theme === "dark"
            ? "bg-[#11203E] border-white/10 hover:border-white/25 text-white"
            : "bg-white border-slate-200 hover:border-slate-300 text-[#111827]"
        )}
      >
        {/* Technical Frame Placeholder: Labeled per Replacement Principles */}
        <div className="relative aspect-video w-full bg-[#0A1325] border-b border-white/10 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-white/60 mb-2 font-mono font-semibold type-caption">
            Z
          </div>
          <Caption theme="dark" className="font-mono uppercase tracking-widest text-slate-400 block">
            [PLAY_STORE_SCREENSHOT]
          </Caption>
          <Caption theme="dark" className="text-white font-medium mt-1 block">
            {game.title}
          </Caption>
        </div>

        {/* Card Content with Strict Order: H3 > Status > Body > One Action */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between text-left">
          <div className="flex flex-col flex-grow">
            {/* 1. H3 Title */}
            <div className="min-h-[36px] flex items-start mb-2">
              <H3 theme={theme} className="leading-snug">
                {game.title}
              </H3>
            </div>

            {/* Status Pill Badge (Strict values: Coming soon / In testing / On Google Play) */}
            <div className="mb-4">
              <span
                className={cn(
                  "type-caption font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border inline-flex items-center gap-1.5",
                  game.status === "On Google Play"
                    ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
                    : game.status === "In testing"
                    ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                    : "bg-white/10 text-slate-300 border-white/15"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    game.status === "On Google Play"
                      ? "bg-emerald-400"
                      : game.status === "In testing"
                      ? "bg-amber-400"
                      : "bg-slate-400"
                  )}
                />
                {game.status}
              </span>
            </div>

            {/* 2. One-line description (secondary color) */}
            <Body theme={theme} className="mb-6 text-slate-300 flex-grow">
              {game.description}
            </Body>
          </div>

          {/* 3. One Action (Google Play link or honest disabled status button) */}
          <div className="mb-5">
            {game.playStoreUrl && game.playStoreUrl.startsWith("http") ? (
              <a
                href={game.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] px-5 py-2.5 rounded-full bg-white text-[#14264A] font-semibold type-caption inline-flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
              >
                <span>Get it on Google Play</span>
                <span className="sr-only">(opens in new tab)</span>
                <span aria-hidden="true">↗</span>
              </a>
            ) : game.status === "In testing" ? (
              <div
                className="w-full min-h-[44px] px-4 py-2.5 rounded-full bg-white/10 text-slate-200 border border-white/20 font-mono type-caption inline-flex items-center justify-center gap-2 select-none"
                title="Currently available on Google Play closed testing track"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>Google Play Closed Test Track</span>
              </div>
            ) : (
              <div
                className="w-full min-h-[44px] px-4 py-2.5 rounded-full bg-white/5 text-slate-400 border border-white/10 font-mono type-caption inline-flex items-center justify-center select-none"
                title="Production store URL pending Google Play publication"
              >
                <span>Coming Soon to Google Play</span>
              </div>
            )}
          </div>

          {/* 4. Meta & Deep Privacy Link Footer */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between min-h-[44px]">
            <Caption theme={theme} className="font-mono text-slate-400">
              {game.genre}
            </Caption>

            <Link
              href={`/privacy${game.privacyAnchor}`}
              className="type-caption text-slate-300 hover:text-white underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white rounded transition-colors min-h-[44px] inline-flex items-center px-1"
            >
              Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
