import gamesData from "./games.json";

export interface FeaturedGame {
  id: string;
  title: string;
  genre: string;
  status: string;
  platform: string;
  description: string;
  playStoreUrl: string;
  image: string;
  privacyAnchor: string;
  notes?: string;
}

export const homeContent = {
  hero: {
    kicker: "Independent Game Studio • Gujarat, India",
    headline: "Original Android games built around strong core mechanics.",
    subline: "Independent studio in Gujarat, India. Practical design, steady progress, no hype.",
    primaryCta: {
      label: "View Games",
      href: "#our-games",
    },
    secondaryCta: {
      label: "About Us",
      href: "/about/",
    },
  },
  whatWeDo: {
    kicker: "What We Do",
    headline: "Original Android Puzzle & Arcade Games",
    description: "We build touch-first Android games and lightweight browser editions for Playables.",
    pillars: [
      {
        number: "01",
        title: "Tactile Mobile Mechanics",
        description: "From 3D hole physics to hexagonal color merges, we tune each mechanic until controls feel immediate and responsive.",
      },
      {
        number: "02",
        title: "Clean Android Architecture",
        description: "Built for Google Play with small download sizes, stable framerates, and future support for YouTube Playables.",
      },
      {
        number: "03",
        title: "Standard Google AdMob Ads",
        description: "Monetized transparently through Google AdMob ads. No deceptive paywalls, predatory timers, or forced payment gates.",
      },
    ],
  },
  ourGames: {
    kicker: "Active Pipeline",
    headline: "Games in Development & Testing",
    subline: "Our confirmed development roster across active testing, completed builds, and pre-production.",
    games: gamesData as FeaturedGame[],
  },
  howWeBuild: {
    kicker: "How We Build",
    headline: "Simple Process. Steady Polish.",
    subline: "We avoid bureaucratic layers, moving directly from proven mechanics to tested releases.",
    steps: [
      {
        step: "01",
        title: "Idea & Mechanic Validation",
        description: "We isolate one interaction, like merging seven tiles, before adding art or UI layers.",
      },
      {
        step: "02",
        title: "Playable Graybox Prototype",
        description: "Rapid iteration on control responsiveness and difficulty curves to ensure intuitive single-hand touch play.",
      },
      {
        step: "03",
        title: "Multi-Device Test Tracks",
        description: "Testing across real Android devices and closed Google Play testing tracks to resolve display and AdMob SDK issues.",
      },
      {
        step: "04",
        title: "Production Release & Evolution",
        description: "Publishing to Google Play with compliant privacy standards, monitored crash reports, and planned Playables support.",
      },
    ],
  },
  whyZoodlego: {
    kicker: "Studio Values",
    headline: "Practical Craft, Steady Quality",
    body: "Founded on November 4, 2026, Zoodlego is a four-role independent team. We build games with disciplined scope and honest monetization.",
    points: [
      "Original game ideas engineered with disciplined scope",
      "Standard Google AdMob ads that respect player focus",
      "Android-first development with future browser compatibility",
    ],
  },
  contactCta: {
    kicker: "Collaborate With Us",
    headline: "Have a Publishing or Co-Dev Inquiry?",
    body: "We welcome discussions with platform holders, publishers, and fellow creators interested in our mobile puzzle and arcade portfolio.",
    buttonText: "Email the Studio (info@zoodlego.com)",
    email: "info@zoodlego.com",
  },
};
