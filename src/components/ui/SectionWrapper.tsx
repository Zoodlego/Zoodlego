import React from "react";
import { cn } from "@/lib/utils";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  theme?: "light" | "dark" | "black";
  spacing?: "default" | "large" | "hero" | "compact";
  containerSize?: "default" | "narrow" | "wide" | "full";
  as?: "section" | "div" | "article";
}

export function SectionWrapper({
  theme = "light",
  spacing = "default",
  containerSize = "default",
  as: Component = "section",
  className,
  children,
  ...props
}: SectionWrapperProps) {
  const bgThemeClasses = {
    light: "bg-white text-[#111827]",
    dark: "bg-[#14264A] text-white",
    black: "bg-black text-white",
  }[theme];

  const spacingClasses = {
    hero: "min-h-[90dvh] flex flex-col justify-center section-padding-hero",
    large: "section-padding-standard",
    default: "section-padding-standard",
    compact: "section-padding-compact",
  }[spacing];

  const containerClasses = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-none w-full",
  }[containerSize];

  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden transition-colors duration-300",
        bgThemeClasses,
        spacingClasses,
        className
      )}
      {...props}
    >
      <div className={cn("mx-auto px-5 sm:px-8 lg:px-12 w-full", containerClasses)}>
        {children}
      </div>
    </Component>
  );
}
