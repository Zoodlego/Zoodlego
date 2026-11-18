import React from "react";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  theme?: ThemeMode;
  children: React.ReactNode;
  className?: string;
}

export function Display({
  as: Component = "h1",
  theme = "dark",
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "type-display measure-heading tracking-tight",
        theme === "dark" ? "text-white" : "text-[#111827]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H1({
  as: Component = "h1",
  theme = "light",
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "type-h1 measure-heading tracking-tight",
        theme === "dark" ? "text-white" : "text-[#111827]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H2({
  as: Component = "h2",
  theme = "light",
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "type-h2 measure-heading tracking-tight",
        theme === "dark" ? "text-white" : "text-[#111827]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function H3({
  as: Component = "h3",
  theme = "light",
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "type-h3 tracking-tight",
        theme === "dark" ? "text-white" : "text-[#111827]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Lead({
  as: Component = "p",
  theme = "light",
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "type-lead measure-lead",
        theme === "dark" ? "text-slate-300" : "text-slate-600",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Body({
  as: Component = "p",
  theme = "light",
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "type-body measure-body",
        theme === "dark" ? "text-slate-300" : "text-slate-600",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Caption({
  as: Component = "span",
  theme = "light",
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "type-caption",
        theme === "dark" ? "text-slate-400" : "text-slate-500",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Eyebrow({
  as: Component = "span",
  theme = "light",
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(
        "type-eyebrow select-none",
        theme === "dark" ? "text-slate-300" : "text-slate-600",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
