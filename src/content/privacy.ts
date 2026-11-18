export interface PrivacySection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    id: string;
    title: string;
    content: string[];
  }[];
}

export const privacyContent = {
  title: "Privacy Policy",
  subtitle: "Official data privacy disclosures for Zoodlego games and website.",
  lastUpdated: "November 18, 2026",
  legalDisclaimer: "Draft - needs legal review before publishing.",
  tocTitle: "On this page",
  sections: [
    {
      id: "who-we-are",
      title: "1. Who We Are",
      content: [
        "Zoodlego Studios ('Zoodlego', 'we', 'our', or 'us') is an independent game development studio founded on November 4, 2026, operating from Gujarat, India. Our legal entity details are registered under [LEGAL_ENTITY_NAME], with registered premises at [REGISTERED_ADDRESS], Gujarat, India.",
        "We develop and publish mobile video games primarily for Android devices via Google Play, alongside operating our informational marketing website at zoodlego.com. This Privacy Policy outlines our data handling principles across both our games and this website.",
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      content: [
        "We are committed to data minimization. We only collect or facilitate the collection of information strictly necessary to operate our games, deliver in-game advertising, and respond to direct communications.",
        "A. Information You Provide Voluntarily: When you email us directly at info@zoodlego.com, we receive your email address, name (if supplied), and the contents of your message. We use this strictly to address your question, support ticket, or business inquiry.",
        "B. Automatic In-Game Technical Data: Our mobile games may automatically transmit standard non-personal telemetry through mobile OS runtime APIs to ensure gameplay stability, such as device model, OS version, language preference, crash stack traces, and framerate statistics.",
        "C. Pseudonymous Advertising Identifiers: Our games integrate Google AdMob, which may access your device's Google Advertising ID (GAID) or Identifier for Advertisers (IDFA) as permitted by your device settings. See Section 4 for complete AdMob disclosures.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "3. How We Use Information",
      content: [
        "We process data exclusively for legitimate operational purposes:",
        "• To provide and maintain uninterrupted, responsive gameplay across our mobile titles.",
        "• To monetize free-to-play games through non-intrusive mobile advertisements served by Google AdMob.",
        "• To troubleshoot bugs, optimize app sizes, and maintain framerate targets across various Android hardware configurations.",
        "• To fulfill legal obligations and verify compliance with platform guidelines (such as the Google Play Developer Program Policies).",
        "We do NOT engage in automated personal profiling, selling of player data, or renting lists to third-party data brokers.",
      ],
    },
    {
      id: "google-admob-advertising-id",
      title: "4. Google AdMob & Advertising Identifiers",
      content: [
        "Our free-to-play Android games incorporate the Google Mobile Ads SDK (Google AdMob) to serve banner, interstitial, and optional rewarded advertisements.",
        "Information Collected by AdMob: In order to deliver contextual or personalized ads, Google AdMob may collect and process device identifiers (including Google Advertising ID / GAID), coarse location data (IP-derived country/city), device hardware specifications, and in-app ad interaction telemetry (impressions, clicks).",
        "Your Advertising ID Controls: You can reset your device's Advertising ID or opt out of personalized ads at any time via your device settings: Settings -> Google -> Ads -> 'Delete advertising ID' or 'Opt out of Ads Personalization'. When opted out, you will still see ads, but they will be contextual rather than interest-based.",
        "For comprehensive details on how Google processes ad data, please review Google's Privacy & Terms at https://policies.google.com/technologies/ads.",
      ],
    },
    {
      id: "third-party-sdks",
      title: "5. Third-Party SDKs & Store Platforms",
      content: [
        "A. Google Play Services: Our Android games depend on Google Play Services for distribution, automated updates, licensing validation, and optional achievements/cloud backups.",
        "B. Web Infrastructure: Our marketing website is statically hosted on global edge infrastructure ([HOSTING_PROVIDER_NAME]). Standard CDN access logs (IP address, user agent, requested file) may be temporarily captured for cyber-defense and DDoS mitigation.",
        "We do not embed third-party analytics telemetry (such as Firebase Analytics or Facebook Pixel) on our marketing website without explicit user notice.",
      ],
    },
    {
      id: "cookies-and-analytics",
      title: "6. Website Cookies & Local Storage",
      content: [
        "The Zoodlego website (zoodlego.com) is a static showcase. It does NOT use third-party tracking cookies, marketing pixels, or invasive behavioral fingerprinting scripts.",
        "Any temporary browser storage used is strictly functional (such as remembering your table of contents scroll position or respecting reduced-motion accessibility preferences).",
      ],
    },
    {
      id: "childrens-privacy",
      title: "7. Children's Privacy (COPPA & Families Policy)",
      content: [
        "Protecting young audiences is of the highest importance to Zoodlego.",
        "Target Audience Designation: Our titles are designed for [TARGET_AGE_GROUP]. We do not knowingly solicit or collect personally identifiable information from children under the age of 13 (or under 16 in the European Economic Area / UK).",
        "If a specific game is designated in the Google Play Families program or directed toward children, we ensure that Google AdMob is configured to request child-directed treatment (TAG For Child-Directed Treatment - TFCD) and non-personalized advertising, disabling behavioral tracking.",
        "If a parent or legal guardian believes that a child has provided us with personal information, please contact info@zoodlego.com, and we will promptly delete such records.",
      ],
    },
    {
      id: "data-retention",
      title: "8. Data Retention Policies",
      content: [
        "We retain personal communications sent to info@zoodlego.com only for as long as required to resolve your query or maintain business continuity.",
        "AdMob advertising data and server diagnostic logs are managed in accordance with Google's established retention schedules (typically automatically aggregated or cycled within 30 to 180 days).",
      ],
    },
    {
      id: "user-rights-and-choices",
      title: "9. Player Rights & Statutory Choices",
      content: [
        "Depending on your jurisdiction (such as under the GDPR in the UK/EU, California CCPA/CPRA, or applicable Indian data privacy legislation), you possess clear rights regarding your data:",
        "• Right of Access: You may request details of the personal data we hold about you.",
        "• Right to Rectification or Erasure: You may ask us to correct inaccurate data or delete information you have provided to us.",
        "• Right to Restrict Processing: You may object to or limit certain processing activities.",
        "• Right to Opt-Out of Sale / Sharing: We do not sell your personal information.",
        "To exercise any of these rights, contact our Data Protection representative at info@zoodlego.com. We respond to all verified statutory inquiries within 30 days without fee or discrimination.",
      ],
    },
    {
      id: "security-measures",
      title: "10. Security Safeguards",
      content: [
        "We maintain technical and organizational safeguards designed to protect information from loss, misuse, and unauthorized access.",
        "All data transmissions to and from zoodlego.com are encrypted using Transport Layer Security (TLS 1.3 / HTTPS). However, please acknowledge that no internet transmission or digital storage system can be guaranteed 100% impenetrable.",
      ],
    },
    {
      id: "per-game-policies",
      title: "11. Per-Game Specific Disclosures (Play Store Deep Anchors)",
      content: [
        "Google Play Console requires each published app listing to maintain an accessible, specific privacy disclosure URL. The anchors below serve as the direct deep-link targets for our individual titles:",
      ],
      subsections: [
        {
          id: "hole-rush-3d",
          title: "Hole Rush 3D (Anchor: #hole-rush-3d)",
          content: [
            "Game Title: Hole Rush 3D | Platform: Android | Status: v1.0 Built",
            "Data Handled: Google AdMob ad requests (GAID), device hardware capabilities, and game level progression stored locally on your device.",
            "In-App Ads: Banner and interstitial ads powered by Google AdMob SDK.",
            "Official Play Store Policy URL: https://zoodlego.com/privacy/#hole-rush-3d",
          ],
        },
        {
          id: "arrow-puzzle",
          title: "Arrow Puzzle (Anchor: #arrow-puzzle)",
          content: [
            "Game Title: Arrow Puzzle | Platform: Android | Status: Google Play Testing Track",
            "Data Handled: Closed test track diagnostics, localized puzzle progress stored in private device sandbox, AdMob test ad SDK requests.",
            "In-App Ads: Google AdMob ad units.",
            "Official Play Store Policy URL: https://zoodlego.com/privacy/#arrow-puzzle",
          ],
        },
        {
          id: "hexa-puzzle",
          title: "Hexa Puzzle (Anchor: #hexa-puzzle)",
          content: [
            "Game Title: Hexa Puzzle | Platform: Android | Status: Ready for Release",
            "Data Handled: Local high-score data and board state (color cluster clearing logic). Non-personalized and personalized ad telemetry through Google AdMob.",
            "Official Play Store Policy URL: https://zoodlego.com/privacy/#hexa-puzzle",
          ],
        },
        {
          id: "block-puzzle",
          title: "Block Puzzle (Anchor: #block-puzzle)",
          content: [
            "Game Title: Block Puzzle | Platform: Android | Status: Ready for Release",
            "Data Handled: High scores and tactile grid preferences stored locally on Android storage. AdMob banner and interstitial delivery.",
            "Official Play Store Policy URL: https://zoodlego.com/privacy/#block-puzzle",
          ],
        },
        {
          id: "limbo-inspired",
          title: "Shadow Descent / Limbo-Inspired (Anchor: #limbo-inspired)",
          content: [
            "Working Title: Limbo-inspired action | Platform: Android | Status: In Active Development",
            "Data Handled: Precision touch input buffering, checkpoint saves, and performance profiling metrics during pre-release builds.",
            "Official Play Store Policy URL: https://zoodlego.com/privacy/#limbo-inspired",
          ],
        },
      ],
    },
    {
      id: "contact-information",
      title: "12. Contact Us",
      content: [
        "If you have questions, feedback, or statutory data privacy requests concerning this policy, please reach out to our studio team:",
        "Zoodlego Studios [LEGAL_ENTITY_NAME]",
        "Official Studio Email: info@zoodlego.com",
        "Official Instagram: @zoodlegofficial (instagram.com/zoodlegofficial)",
        "Registered Location: [REGISTERED_ADDRESS], Gujarat, India",
      ],
    },
  ] as PrivacySection[],
};
