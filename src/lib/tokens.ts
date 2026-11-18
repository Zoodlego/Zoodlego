// Single source of truth for design tokens
// Matches /docs/UI_UX_DESIGN.md specifications

export const colors = {
  // Brand accent colors (reserved for interactive states, badges, hero motifs - never body text)
  navy: {
    DEFAULT: "#14264A",
    surface: "#11203E",
    dark: "#0A1325",
    light: "#1E3A5F",
  },
  // Text color roles
  text: {
    light: {
      primary: "#111827",    // Near-black on light
      secondary: "#52525B",  // WCAG compliant secondary (>= #6E6E73)
      muted: "#6B7280",      // Meta labels / borders
    },
    dark: {
      primary: "#FFFFFF",    // Solid white on dark
      secondary: "#CBD5E1",  // Slate-300 on dark (>= #A1A1A6, contrast 9.2:1)
      muted: "#94A3B8",      // Meta captions
    },
  },
  surface: {
    white: "#FFFFFF",
    offwhite: "#F8FAFC",
    borderLight: "#E2E8F0",
    borderDark: "rgba(255, 255, 255, 0.12)",
  },
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-inter), -apple-system, "SF Pro Display", system-ui, sans-serif',
  },
  weights: {
    normal: 400,
    medium: 500, // Small UI labels only
    semibold: 600,
  },
  // Exact 8-role type scale
  roles: {
    display: {
      fontSize: "clamp(2.75rem, 7vw, 6rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      fontWeight: 600,
      maxMeasure: "20ch",
    },
    h1: {
      fontSize: "clamp(2.25rem, 5vw, 4rem)",
      lineHeight: 1.08,
      letterSpacing: "-0.025em",
      fontWeight: 600,
      maxMeasure: "22ch",
    },
    h2: {
      fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
      lineHeight: 1.12,
      letterSpacing: "-0.02em",
      fontWeight: 600,
      maxMeasure: "22ch",
    },
    h3: {
      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
      fontWeight: 600,
    },
    lead: {
      fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
      lineHeight: 1.45,
      letterSpacing: "-0.005em",
      fontWeight: 400,
      maxMeasure: "52ch",
    },
    body: {
      fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)",
      lineHeight: 1.6,
      letterSpacing: "0em",
      fontWeight: 400,
      maxMeasure: "65ch",
    },
    caption: {
      fontSize: "clamp(0.8125rem, 0.8rem + 0.1vw, 0.875rem)",
      lineHeight: 1.45,
      letterSpacing: "0em",
      fontWeight: 400,
    },
    eyebrow: {
      fontSize: "0.8125rem", // 13px min text size
      lineHeight: 1.3,
      letterSpacing: "+0.12em",
      fontWeight: 600,
      textTransform: "uppercase" as const,
    },
  },
} as const;

export const spacing = {
  sectionPadding: "clamp(80px, 12vw, 160px)",
  headingToLead: "clamp(16px, 2vw, 24px)",
  leadToCta: "clamp(32px, 3.5vw, 40px)",
  cardGap: "clamp(24px, 2.5vw, 32px)",
} as const;
