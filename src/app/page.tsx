import React from "react";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { WhatWeDo } from "@/components/sections/home/WhatWeDo";
import { FeaturedGames } from "@/components/sections/home/FeaturedGames";
import { HowWeBuild } from "@/components/sections/home/HowWeBuild";
import { WhyZoodlego } from "@/components/sections/home/WhyZoodlego";
import { ContactCTA } from "@/components/sections/shared/ContactCTA";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Zoodlego: Independent Mobile Game Studio",
  description:
    "Original Android games built around strong core mechanics. Explore our titles, engineering pipeline, and studio team.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. What We Do (Light Section) */}
      <WhatWeDo />

      {/* 3. Featured Games (Dark Section) */}
      <FeaturedGames />

      {/* 4. How We Build (Light Section) */}
      <HowWeBuild />

      {/* 5. Why Zoodlego (Dark Section) */}
      <WhyZoodlego />

      {/* 6. Contact CTA (Dark Section) */}
      <ContactCTA
        kicker={homeContent.contactCta.kicker}
        headline={homeContent.contactCta.headline}
        body={homeContent.contactCta.body}
        buttonText={homeContent.contactCta.buttonText}
        email={homeContent.contactCta.email}
      />
    </>
  );
}
