"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
}

export function SpotlightCard({
  children,
  theme = "dark",
  className,
  ...props
}: SpotlightCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
