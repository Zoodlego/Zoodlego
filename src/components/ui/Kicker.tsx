import React from "react";
import { cn } from "@/lib/utils";

export interface KickerProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: "light" | "dark";
  badge?: boolean;
  children: React.ReactNode;
}

export function Kicker({
  theme = "light",
  badge = false,
  className,
  children,
  ...props
}: KickerProps) {
  if (!badge) {
    return (
      <span
        className={cn(
          "type-eyebrow inline-block mb-4 select-none",
          theme === "dark" ? "text-slate-300" : "text-slate-600",
          className
        )}
        {...(props as any)}
      >
        {children}
      </span>
    );
  }

  return (
    <div
      className={cn(
        "type-eyebrow inline-flex items-center px-3.5 py-1 rounded-full mb-5 select-none",
        theme === "dark"
          ? "bg-white/10 text-white border border-white/20"
          : "bg-slate-100 text-slate-800 border border-slate-200",
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </div>
  );
}
