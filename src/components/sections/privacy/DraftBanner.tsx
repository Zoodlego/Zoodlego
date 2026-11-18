import React from "react";

interface DraftBannerProps {
  message?: string;
}

export function DraftBanner({
  message = "Draft - needs legal review before publishing.",
}: DraftBannerProps) {
  return (
    <div
      role="alert"
      className="w-full bg-[#14264A] text-white border-b border-white/20 py-3 px-4 text-center type-caption sm:type-body font-medium tracking-wide flex items-center justify-center gap-2"
    >
      <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
      <span>{message}</span>
    </div>
  );
}
