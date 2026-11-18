"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H2, Lead } from "@/components/ui/Typography";
import { GameCard } from "@/components/cards/GameCard";
import { homeContent } from "@/content/home";
import { easing } from "@/lib/motion";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All Titles", count: 5 },
  { id: "flagship", label: "Flagships", count: 2 },
  { id: "puzzles", label: "Tactile Puzzles", count: 2 },
  { id: "action", label: "Atmospheric", count: 1 },
];

export function FeaturedGames() {
  const [activeFilter, setActiveFilter] = useState("all");
  const shouldReduceMotion = useReducedMotion();
  const allGames = homeContent.ourGames.games;

  const filteredGames = allGames.filter((game) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "flagship") return game.id === "hole-rush-3d" || game.id === "arrow-puzzle";
    if (activeFilter === "puzzles") return game.id === "hexa-puzzle" || game.id === "block-puzzle";
    if (activeFilter === "action") return game.id === "limbo-inspired";
    return true;
  });

  return (
    <SectionWrapper theme="dark" spacing="large" id="our-games">
      {/* Centered Symmetrical Section Header: H2 > Lead */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center">
        <Kicker theme="dark">
          {homeContent.ourGames.kicker}
        </Kicker>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing.entrance }}
          className="mb-5"
        >
          <H2 theme="dark" className="mx-auto">
            {homeContent.ourGames.headline}
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
            {homeContent.ourGames.subline}
          </Lead>
        </motion.div>

        {/* Restrained Apple-Style Segmented Filter Control (13px Caption Token, >=44px Touch Targets) */}
        <div className="w-full flex justify-center overflow-x-auto py-1 px-4 no-scrollbar">
          <div className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/15 max-w-full">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "type-caption px-4 min-h-[44px] flex items-center justify-center font-mono rounded-full transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer whitespace-nowrap active:scale-[0.98]",
                    isActive
                      ? "bg-white text-[#14264A] font-semibold shadow-sm"
                      : "text-slate-300 hover:text-white font-normal"
                  )}
                >
                  <span>{filter.label}</span>
                  <span className="ml-1 opacity-80 tabular-nums">({filter.count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Symmetrical Centered Cards Grid: Card Gap 24-32px, Tablet 2-Col */}
      <motion.div
        layout
        className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md flex flex-col"
            >
              <GameCard game={game} theme="dark" />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
