import React from "react";
import type { Metadata } from "next";
import { TableOfContents } from "@/components/sections/privacy/TableOfContents";
import { PrivacyContent } from "@/components/sections/privacy/PrivacyContent";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H1, Lead } from "@/components/ui/Typography";
import { privacyContent } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review Zoodlego's privacy policy, data collection practices, user rights, and security policies.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header section with integrated Draft Banner */}
      <SectionWrapper theme="light" spacing="compact" className="pt-32 sm:pt-40 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Kicker theme="light">Legal & Compliance</Kicker>
          
          <H1 theme="light" className="mb-4 mx-auto">
            {privacyContent.title}
          </H1>
          
          <Lead theme="light" className="mb-6 mx-auto text-left sm:text-center">
            {privacyContent.subtitle}
          </Lead>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-900 border border-amber-500/20 type-caption font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>{privacyContent.legalDisclaimer}</span>
          </div>
        </div>
      </SectionWrapper>

      {/* Main Content with Sticky ToC */}
      <SectionWrapper theme="light" spacing="default" containerSize="wide">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start">
          <TableOfContents sections={privacyContent.sections} />
          <PrivacyContent
            sections={privacyContent.sections}
            lastUpdated={privacyContent.lastUpdated}
          />
        </div>
      </SectionWrapper>
    </>
  );
}
