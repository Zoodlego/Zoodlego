export interface CoreValue {
  id: string;
  title: string;
  description: string;
}

export interface TeamRole {
  id: string;
  roleTitle: string;
  memberName: string;
  responsibilities: string;
  backupRole: string;
}

export const aboutContent = {
  hero: {
    kicker: "About Zoodlego • Founded Nov 4, 2026",
    headline: "An Independent Studio Dedicated to Satisfying Mobile Games.",
    subline: "Based in Gujarat, India, we build intuitive, tactile Android arcade and puzzle games focused on genuine player enjoyment.",
  },
  story: {
    kicker: "Studio Origin",
    headline: "Built on a Love for Simple, Polished Play",
    badge: "Internal Draft: Pending Team Confirmation",
    paragraphs: [
      "Zoodlego was established on November 4, 2026, in Gujarat, India. We build games around responsive touch controls and solid core mechanics.",
      "We test prototypes on real Android hardware before committing to production. Our pipeline spans 3D spatial gameplay, directional arrow puzzles, and color-matching mechanics.",
      "Alongside Android releases on Google Play, we engineer lightweight games suited for instant browser play on platforms like YouTube Playables.",
    ],
  },
  mission: {
    kicker: "Studio Mission",
    headline: "To deliver straightforward, engaging games with fair monetization and enduring replay value.",
    subline: "Steady development, fair AdMob ads, and straightforward touch controls.",
  },
  values: [
    {
      id: "practical-craft",
      title: "Practical Craftsmanship",
      description: "We focus on clean code, responsive touch controls, and compact download sizes so games run smoothly on all Android hardware.",
    },
    {
      id: "fair-monetization",
      title: "Fair Ad Monetization",
      description: "Our games are supported cleanly via Google AdMob without predatory dark patterns, fake button traps, or forced pay-to-progress mechanics.",
    },
    {
      id: "steady-growth",
      title: "Steady, Measured Growth",
      description: "We prioritize consistent iteration, verified Play Store testing tracks, and sustainable teamwork over rushed or incomplete releases.",
    },
    {
      id: "cross-functional",
      title: "Cross-Role Synergy",
      description: "Every member of our studio understands development, testing, and distribution, ensuring reliable project continuity across all titles.",
    },
  ] as CoreValue[],
  team: {
    kicker: "Studio Structure (SOP-Wiszoo-001)",
    headline: "Organized by Functional Roles.",
    subline: "Our team operates with a defined cross-role backup structure: each specialist actively trains and assists in a secondary discipline.",
    roles: [
      {
        id: "role-marketing-sales",
        roleTitle: "Digital Marketing & Sales",
        memberName: "Krish Barot",
        responsibilities: "Audience outreach, store presence, branding collateral, and social media engagement (@zoodlegofficial).",
        backupRole: "Cross-covers: Game Development (secondary support)",
      },
      {
        id: "role-game-dev-1",
        roleTitle: "Game Development",
        memberName: "Krish Nayi",
        responsibilities: "Core game mechanics programming, 3D spatial simulation, and interactive touch controls architecture.",
        backupRole: "Cross-covers: Business Development & Testing (secondary support)",
      },
      {
        id: "role-game-dev-2",
        roleTitle: "Game Development",
        memberName: "Akshay Rajput",
        responsibilities: "Puzzle logic programming, color-merge systems, UI implementation, and browser/Playables optimization.",
        backupRole: "Cross-covers: Game Development (secondary support)",
      },
      {
        id: "role-bd-testing",
        roleTitle: "Business Development & Testing",
        memberName: "Hardik Goswami",
        responsibilities: "Google Play Console track administration, AdMob SDK integration, device testing, and publisher relations.",
        backupRole: "Cross-covers: Digital Marketing & Sales (secondary support)",
      },
    ] as TeamRole[],
  },
  contactCta: {
    kicker: "Work With Zoodlego",
    headline: "Interested in Partnering or Collaborating?",
    body: "Contact our team directly at info@zoodlego.com or follow studio updates on Instagram @zoodlegofficial.",
    buttonText: "Get in Touch (info@zoodlego.com)",
    email: "info@zoodlego.com",
  },
};
