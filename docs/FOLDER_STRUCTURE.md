# FOLDER_STRUCTURE.md — Architecture & File Organization

> Project: Zoodlego Studio Marketing Site  
> Version: 2.0 | Date: 2026-11-18  

---

## 1. Full Directory Tree

```text
zoodlego/
├── docs/                               # Project documentation & architectural blueprints
│   ├── MCP_TOOLS.md                    # Tool inventory, status, and usage matrix
│   ├── REFERENCES.md                   # 11 design pattern references & guidelines
│   ├── PRD.md                          # Product requirements & verified facts table
│   ├── UI_UX_DESIGN.md                 # Design system tokens, components, ASCII wireframes
│   ├── MOTION_ANIMATION.md             # Framer Motion choreography & easing specs
│   ├── FOLDER_STRUCTURE.md             # Directory hierarchy & import rules (this file)
│   ├── AGENT.md                        # Agent behavioral boundaries & DoD
│   └── OPEN_QUESTIONS.md               # Unconfirmed items and placeholder tracker
│
├── public/                             # Public static assets delivered directly
│   ├── brand/
│   │   ├── logo-navy.png               # Navy logo for light backgrounds (546x593, transparent)
│   │   └── logo-outline-white.png      # White outline logo for dark backgrounds (546x593, transparent)
│   ├── images/
│   │   └── games/                      # 16:9 WebP game thumbnails
│   │       ├── hole-rush-3d.webp       # Game 1 visual artwork
│   │       ├── arrow-puzzle.webp       # Game 2 visual artwork
│   │       ├── hexa-puzzle.webp        # Game 3 visual artwork
│   │       ├── block-puzzle.webp       # Game 4 visual artwork
│   │       └── limbo-inspired.webp     # Game 5 visual artwork
│   ├── favicon.ico                     # 32x32 multi-resolution brand icon
│   ├── apple-touch-icon.png            # 180x180 iOS touch icon
│   ├── og-image.png                    # 1200x630 OpenGraph social share card
│   ├── robots.txt                      # Search crawler directives
│   └── sitemap.xml                     # XML sitemap for SEO discovery
│
├── src/                                # Application source code
│   ├── app/                            # Next.js App Router endpoints
│   │   ├── layout.tsx                  # Root layout (Metadata, Header, Footer, Transitions)
│   │   ├── page.tsx                    # Home page route
│   │   ├── about/
│   │   │   └── page.tsx                # About Us page route
│   │   ├── privacy/
│   │   │   └── page.tsx                # Privacy Policy route with deep anchors
│   │   └── globals.css                 # Tailwind v4 import, font variables, fluid typography
│   │
│   ├── components/                     # Modular React component hierarchy
│   │   ├── layout/                     # Page-level chrome & layout structure
│   │   │   ├── Header.tsx              # Sticky navigation header with responsive states
│   │   │   ├── Footer.tsx              # Site footer with brand, Instagram, and legal entity
│   │   │   ├── MobileNav.tsx           # Fullscreen mobile navigation drawer
│   │   │   └── PageTransition.tsx      # Framer Motion route transition wrapper
│   │   │
│   │   ├── ui/                         # Atomic, reusable design system primitives
│   │   │   ├── Button.tsx              # Tactile button supporting theme, sizes, and links
│   │   │   ├── SectionWrapper.tsx      # Full-bleed section with theme and spacing logic
│   │   │   ├── Kicker.tsx              # Wide-tracked uppercase label
│   │   │   └── SkipLink.tsx            # Accessibility skip-to-content anchor
│   │   │
│   │   ├── cards/                      # Data-driven presentation cards
│   │   │   ├── GameCard.tsx            # Featured game card with status, mechanics, and badges
│   │   │   ├── TeamCard.tsx            # Role-based team member card with backup indicator
│   │   │   └── ValueCard.tsx           # Studio core values & philosophy card
│   │   │
│   │   └── sections/                   # Page-specific semantic content assemblies
│   │       ├── home/
│   │       │   ├── Hero.tsx            # Cinematic hero with logo reveal & parallax
│   │       │   ├── WhatWeDo.tsx        # Core studio capabilities & mobile focus
│   │       │   ├── FeaturedGames.tsx   # Games showcase driven by games.json
│   │       │   ├── HowWeBuild.tsx      # 4-stage development pipeline
│   │       │   └── WhyZoodlego.tsx     # Fair AdMob & gameplay-first differentiators
│   │       ├── about/
│   │       │   ├── Story.tsx           # Founded Nov 2026 in Gujarat, India (draft)
│   │       │   ├── Mission.tsx         # Studio mission statement (draft)
│   │       │   ├── Values.tsx          # Studio core values grid
│   │       │   └── Team.tsx            # 4 SOP roles with cross-backup indicators
│   │       ├── privacy/
│   │       │   ├── DraftBanner.tsx     # Legal review required warning banner
│   │       │   ├── TableOfContents.tsx # Sticky desktop ToC & mobile accordion
│   │       │   └── PrivacyContent.tsx  # 12 legal sections & 5 per-game anchors
│   │       └── shared/
│   │           └── ContactCTA.tsx      # Reusable contact call-to-action block
│   │
│   ├── content/                        # Decoupled content layer (Zero code edits to update copy)
│   │   ├── games.json                  # Single source of truth for all studio titles
│   │   ├── home.ts                     # Home page section copy & headlines
│   │   ├── about.ts                    # About Us narrative, mission, and team roles
│   │   └── privacy.ts                  # Legal privacy disclosure clauses & per-game anchors
│   │
│   └── lib/                            # Shared utilities and configurations
│       ├── tokens.ts                   # Design tokens (colors, typography, breakpoints)
│       ├── motion.ts                   # Easing curves, duration constants, Framer variants
│       ├── fonts.ts                    # Next.js self-hosted Inter font definition
│       └── utils.ts                    # Tailwind class merging utility (`cn`)
│
├── scripts/                            # Operational & build pipeline scripts
│   └── postbuild.js                    # Post-export RSC routing alias generator
├── next.config.ts                      # Next.js static export & image config
├── postcss.config.mjs                  # PostCSS configuration for Tailwind v4
├── tailwind.config.ts                  # Tailwind configuration
├── tsconfig.json                       # TypeScript compiler paths (`@/*` alias)
└── package.json                        # Project metadata, scripts, and dependencies
```

---

## 2. Naming Conventions

- **React Components**: PascalCase (`GameCard.tsx`, `TableOfContents.tsx`).
- **Data & Content Files**: kebab-case or camelCase (`games.json`, `privacy.ts`).
- **Static Media**: kebab-case (`logo-outline-white.png`, `hole-rush-3d.webp`).
- **Utility / Config Files**: camelCase (`tokens.ts`, `motion.ts`, `utils.ts`).

---

## 3. Data Decoupling: `games.json`

All game data is strictly isolated in `src/content/games.json`. Adding a game requires **zero code changes**:
```json
[
  {
    "id": "hole-rush-3d",
    "title": "Hole Rush 3D",
    "genre": "3D Action Arcade",
    "status": "v1.0 Built",
    "description": "Fast-paced spatial 3D arcade title featuring physics-driven hole mechanics and level progression.",
    "playStoreUrl": "[PLAY_STORE_URL]",
    "image": "/images/games/hole-rush-3d.webp",
    "privacyAnchor": "#hole-rush-3d"
  }
]
```

---

## 4. Import Rules & Boundaries

1. **Tokens as Single Source of Truth**: Never hardcode colors (`#14264A`) or spacing. Import from `@/lib/tokens` or use Tailwind classes.
2. **Motion from `lib/motion.ts`**: Variants, transitions, and easing curves must be imported from `@/lib/motion`.
3. **Clean Content Separation**: Components must never contain hardcoded copy; import content from `@/content/*`.
4. **Path Aliasing**: Always use `@/` alias for imports inside `src/`.
