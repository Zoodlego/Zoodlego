"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  theme = "light",
  size = "md",
  href,
  external,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-tight active:scale-[0.98]",
    // Minimum touch target 48px
    "min-h-[48px]",
    // Sizes
    size === "sm" && "type-caption text-[13px] py-2 px-5 min-h-[44px]",
    size === "md" && "type-caption sm:type-body py-3 px-7 min-h-[48px]",
    size === "lg" && "type-body py-3.5 px-8 sm:px-9 min-h-[48px]",
    // Variants & Theme logic
    theme === "dark" && [
      variant === "primary" &&
        "bg-white text-[#14264A] hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-white focus-visible:ring-offset-[#14264A]",
      variant === "secondary" &&
        "bg-white/10 text-white hover:bg-white/15 active:bg-white/20 border border-white/20 hover:border-white/40 focus-visible:ring-white focus-visible:ring-offset-[#14264A]",
      variant === "ghost" &&
        "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/10 active:bg-white/20 focus-visible:ring-white focus-visible:ring-offset-[#14264A]",
    ],
    theme === "light" && [
      variant === "primary" &&
        "bg-[#14264A] text-white hover:bg-[#1E3A5F] active:bg-[#0A1325] focus-visible:ring-[#14264A] focus-visible:ring-offset-white",
      variant === "secondary" &&
        "bg-slate-100 text-[#14264A] hover:bg-slate-200 active:bg-slate-300 border border-slate-200 hover:border-slate-300 focus-visible:ring-[#14264A] focus-visible:ring-offset-white",
      variant === "ghost" &&
        "bg-transparent text-[#14264A] border border-[#14264A]/25 hover:border-[#14264A] hover:bg-[#14264A]/5 active:bg-[#14264A]/10 focus-visible:ring-[#14264A] focus-visible:ring-offset-white",
    ],
    className
  );

  if (href) {
    if (external || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={baseClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...(props as any)}>
      {children}
    </button>
  );
}
