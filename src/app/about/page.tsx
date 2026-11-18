import React from "react";
import type { Metadata } from "next";
import { Story } from "@/components/sections/about/Story";
import { Mission } from "@/components/sections/about/Mission";
import { Values } from "@/components/sections/about/Values";
import { Team } from "@/components/sections/about/Team";
import { ContactCTA } from "@/components/sections/shared/ContactCTA";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zoodlego's origin story, design ethos, core studio values, and leadership team.",
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Story */}
      <Story />

      {/* 2. Mission (Light) */}
      <Mission />

      {/* 3. Values (Dark) */}
      <Values />

      {/* 4. Team (Light) */}
      <Team />

      {/* 5. Contact CTA (Dark) */}
      <ContactCTA
        kicker={aboutContent.contactCta.kicker}
        headline={aboutContent.contactCta.headline}
        body={aboutContent.contactCta.body}
        buttonText={aboutContent.contactCta.buttonText}
        email={aboutContent.contactCta.email}
      />
    </>
  );
}
