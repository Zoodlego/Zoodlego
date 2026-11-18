"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { H3, Body, Caption } from "@/components/ui/Typography";
import type { TeamRole } from "@/content/about";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  role: TeamRole;
  theme?: "light" | "dark";
}

export function TeamCard({ role, theme = "light" }: TeamCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const getSecondaryRoleClean = (backupText: string) => {
    return backupText
      .replace(/^Cross-covers:\s*/i, "")
      .replace(/\s*\(secondary support\)$/i, "")
      .trim();
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="h-full flex flex-col"
    >
      <div
        className={cn(
          "rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full border select-none transition-colors",
          theme === "dark"
            ? "bg-[#11203E] border-white/10 text-white"
            : "bg-white border-slate-200 text-[#111827]"
        )}
      >
        <div className="flex flex-col text-left flex-grow">
          {/* 1. H3 Member Name (Locked baseline) */}
          <div className="min-h-[36px] flex items-start">
            <H3 theme={theme} className="mb-2">
              {role.memberName}
            </H3>
          </div>

          {/* Primary Role Pill (Locked min-height for uniform body baseline alignment) */}
          <div className="mb-4 min-h-[52px] sm:min-h-[56px] flex items-start">
            <span className="type-caption font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 inline-block leading-tight">
              {role.roleTitle}
            </span>
          </div>

          {/* 2. Responsibilities (Secondary Body Text) */}
          <Body theme={theme} className="mb-6 text-slate-600 flex-grow">
            {role.responsibilities}
          </Body>
        </div>

        {/* 3. Status Caption Footer: SOP Cross-Role Backup (Locked min-height) */}
        <div className="pt-4 border-t border-slate-100 flex flex-col justify-end gap-1.5 text-left min-h-[64px]">
          <Caption theme={theme} className="font-mono uppercase tracking-widest text-slate-500 font-semibold block">
            SOP SECONDARY BACKUP
          </Caption>
          <Caption theme={theme} className="font-mono text-slate-700 font-medium">
            {getSecondaryRoleClean(role.backupRole)}
          </Caption>
        </div>
      </div>
    </motion.div>
  );
}
