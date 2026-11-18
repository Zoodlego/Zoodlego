"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pageVariants } from "@/lib/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return <div className="w-full">{children}</div>;
}
