"use client";

import React, { useState, useEffect } from "react";
import type { PrivacySection } from "@/content/privacy";
import { H2, H3, Body, Caption } from "@/components/ui/Typography";

interface PrivacyContentProps {
  sections: PrivacySection[];
  lastUpdated: string;
}

export function PrivacyContent({ sections, lastUpdated }: PrivacyContentProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = async (id: string) => {
    const url = `${window.location.origin}/privacy#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="flex-1 max-w-[65ch] text-slate-700 relative">
      {/* Effective Date & Publication Notice */}
      <div className="mb-8 pb-6 border-b border-slate-200">
        <Caption theme="light" className="font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2 block">
          Effective Date & Publication Notice
        </Caption>
        <p className="type-caption font-medium text-slate-800">
          Last modified: <span className="tabular-nums font-semibold">{lastUpdated}</span> • Formal Review Draft
        </p>
      </div>

      {/* Scannable Plain-Language Policy Summary for Players, Parents, and Reviewers */}
      <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#14264A]" />
          <h2 className="type-caption font-mono uppercase tracking-wider font-semibold text-[#14264A]">
            Plain-Language Policy Summary
          </h2>
        </div>
        <div className="space-y-3 type-body text-slate-700 font-normal leading-relaxed text-[0.9375rem]">
          <p>
            <strong>What we collect:</strong> We adhere strictly to data minimization. Our games only collect non-personal device diagnostics (crash logs, device model, framerate) and pseudonymous advertising identifiers (Google GAID) via Google AdMob to deliver in-game ads.
          </p>
          <p>
            <strong>What we never do:</strong> We do not sell your personal data, build invasive behavioral tracking profiles, or run advertising trackers on our website.
          </p>
          <p>
            <strong>Children & families:</strong> We comply with COPPA and Google Play Families policies. For children&apos;s titles, AdMob is configured for non-personalized, child-directed treatment.
          </p>
          <p>
            <strong>Your choices & contact:</strong> You can reset or delete your Advertising ID at any time in Android settings. For any privacy inquiries or deletion requests, email our team directly at{" "}
            <a
              href="mailto:info@zoodlego.com?subject=Privacy%20Inquiry%20-%20Zoodlego"
              className="text-[#14264A] font-semibold underline underline-offset-2 hover:text-[#1E3A5F]"
            >
              info@zoodlego.com
            </a>.
          </p>
        </div>
      </div>

      {/* Main Legal Sections */}
      <div className="space-y-14">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 group"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <H2 theme="light" className="text-left">
                {section.title}
              </H2>
              <button
                onClick={() => handleCopyLink(section.id)}
                aria-label={`Copy link to ${section.title}`}
                className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity p-2 text-slate-400 hover:text-[#14264A] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14264A] rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                title="Copy link to this section"
              >
                <span className="font-mono text-sm font-bold">
                  {copiedId === section.id ? "✓" : "#"}
                </span>
                <span className="sr-only">
                  {copiedId === section.id ? "Link copied to clipboard" : "Copy link"}
                </span>
              </button>
            </div>

            <div className="space-y-4">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="type-body measure-privacy text-slate-600 font-normal">
                  {paragraph}
                </p>
              ))}
            </div>

            {section.subsections && section.subsections.length > 0 && (
              <div className="mt-8 space-y-8 pl-4 sm:pl-6 border-l-2 border-slate-300">
                {section.subsections.map((sub) => (
                  <div key={sub.id} id={sub.id} className="scroll-mt-28 pt-2 group/sub">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <H3 theme="light" className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14264A]" />
                        {sub.title}
                      </H3>
                      <button
                        onClick={() => handleCopyLink(sub.id)}
                        aria-label={`Copy link to ${sub.title}`}
                        className="opacity-0 group-hover/sub:opacity-100 group-focus-within/sub:opacity-100 transition-opacity p-2 text-slate-400 hover:text-[#14264A] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14264A] rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                        title="Copy link to this game subsection"
                      >
                        <span className="font-mono text-sm font-bold">
                          {copiedId === sub.id ? "✓" : "#"}
                        </span>
                        <span className="sr-only">
                          {copiedId === sub.id ? "Link copied to clipboard" : "Copy link"}
                        </span>
                      </button>
                    </div>

                    <div className="space-y-2.5 type-caption text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono">
                      {sub.content.map((sp, spIdx) => (
                        <p key={spIdx}>{sp}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top of privacy policy"
          className="fixed bottom-6 right-6 z-30 min-h-[44px] px-4 py-2.5 rounded-full bg-[#14264A] text-white shadow-lg shadow-black/20 hover:bg-[#1E3A5F] active:scale-95 transition-all flex items-center gap-2 type-caption font-semibold select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </button>
      )}

      {/* Toast Feedback Notification for Screen Readers and Visual Confirmation */}
      {copiedId && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-full bg-slate-900 text-white type-caption font-mono shadow-md flex items-center gap-2"
        >
          <span>✓</span>
          <span>Section link copied to clipboard</span>
        </div>
      )}
    </article>
  );
}
