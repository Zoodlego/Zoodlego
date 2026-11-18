import React from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Kicker } from "@/components/ui/Kicker";
import { H1, Lead } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <SectionWrapper
      theme="dark"
      spacing="hero"
      className="flex flex-col items-center justify-center text-center min-h-[85dvh]"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center">
        <Kicker theme="dark" badge={true}>
          404 Error
        </Kicker>

        <H1 theme="dark" className="mb-4 mx-auto">
          Page Not Found.
        </H1>

        <Lead theme="dark" className="mb-10 mx-auto text-center">
          The link you followed may be broken or the page may have been moved.
          Explore our games or review our studio privacy policies below.
        </Lead>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <Button
            href="/"
            variant="primary"
            theme="dark"
            size="lg"
            className="w-full sm:w-auto shadow-md"
          >
            <span>Return to Homepage</span>
            <span className="ml-2" aria-hidden="true">→</span>
          </Button>

          <Link
            href="/privacy/"
            className="type-body text-slate-300 hover:text-white transition-colors inline-flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded py-2 px-4 min-h-[44px]"
          >
            <span>Read Privacy Policy</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
