"use client";

import React, { useState, useEffect } from "react";
import type { PrivacySection } from "@/content/privacy";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  sections: PrivacySection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-90px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);

      if (sec.subsections) {
        sec.subsections.forEach((sub) => {
          const subEl = document.getElementById(sub.id);
          if (subEl) observer.observe(subEl);
        });
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile & Tablet Collapsible Accordion (Used on <1280px to guarantee >=65ch article reading measure) */}
      <div className="xl:hidden mb-8 w-full border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          className="w-full px-5 py-4 min-h-[48px] flex items-center justify-between text-left type-caption font-semibold text-[#111827] hover:bg-slate-100 transition-colors select-none"
        >
          <span>Table of Contents ({sections.length} sections)</span>
          <svg
            className={cn("w-4 h-4 transition-transform", isMobileOpen && "rotate-180")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isMobileOpen && (
          <nav className="px-5 pb-4 pt-1 border-t border-slate-200 divide-y divide-slate-100">
            {sections.map((sec) => (
              <div key={sec.id} className="py-1">
                <a
                  href={`#${sec.id}`}
                  onClick={(e) => handleLinkClick(e, sec.id)}
                  className={cn(
                    "flex items-center min-h-[44px] type-caption py-2 transition-colors font-mono",
                    activeId === sec.id
                      ? "font-semibold text-[#111827] pl-2 border-l-2 border-[#14264A]"
                      : "text-slate-600 hover:text-[#111827]"
                  )}
                >
                  {sec.title}
                </a>

                {sec.subsections && sec.subsections.length > 0 && (
                  <div className="pl-4 pb-2 space-y-1">
                    {sec.subsections.map((sub) => (
                      <a
                        key={sub.id}
                        href={`#${sub.id}`}
                        onClick={(e) => handleLinkClick(e, sub.id)}
                        className={cn(
                          "flex items-center min-h-[44px] type-caption text-[13px] py-1 font-mono transition-colors",
                          activeId === sub.id
                            ? "font-semibold text-[#14264A] pl-2 border-l-2 border-[#14264A]"
                            : "text-slate-500 hover:text-[#111827]"
                        )}
                      >
                        ↳ {sub.title.split("(")[0].trim()}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar (>=1280px only) */}
      <aside className="hidden xl:block w-72 flex-shrink-0 sticky top-28 self-start max-h-[calc(100vh-8rem)] overflow-y-auto pr-6" aria-label="Table of Contents">
        <h2 className="type-caption font-mono font-semibold uppercase tracking-widest text-slate-500 mb-4">
          On this page
        </h2>
        <nav className="space-y-1 border-l border-slate-200 pl-3">
          {sections.map((sec) => {
            const isActive = activeId === sec.id;
            return (
              <div key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  onClick={(e) => handleLinkClick(e, sec.id)}
                  className={cn(
                    "block type-caption py-1.5 transition-all relative font-mono",
                    isActive
                      ? "font-semibold text-[#111827] -ml-[13px] pl-3 border-l-2 border-[#14264A]"
                      : "text-slate-600 hover:text-[#111827]"
                  )}
                >
                  {sec.title}
                </a>

                {sec.subsections && sec.subsections.length > 0 && (
                  <div className="pl-3.5 space-y-1 py-1 border-l border-slate-200/60 ml-1">
                    {sec.subsections.map((sub) => {
                      const isSubActive = activeId === sub.id;
                      return (
                        <a
                          key={sub.id}
                          href={`#${sub.id}`}
                          onClick={(e) => handleLinkClick(e, sub.id)}
                          className={cn(
                            "block type-caption text-[12px] py-1 transition-all relative font-mono",
                            isSubActive
                              ? "font-semibold text-[#14264A] -ml-[15px] pl-3 border-l-2 border-[#14264A]"
                              : "text-slate-500 hover:text-slate-800"
                          )}
                        >
                          ↳ {sub.title.split("(")[0].trim()}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
