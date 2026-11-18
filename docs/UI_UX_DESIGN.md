# UI_UX_DESIGN.md — Design System & Interaction Specification

> Project: Zoodlego Studio Marketing Site  
> Version: 2.0 | Date: 2026-11-18  

---

## 1. Brand Tokens & Identity

### 1.1 Logos
- **Navy Logo (`/public/brand/logo-navy.png`)**: Navy filled Z mark with controller cutout for pure white or light gray surfaces.
- **White Outline Logo (`/public/brand/logo-outline-white.png`)**: Crisp white vector contour for Navy `#14264A` and dark backdrops.
- **Aspect Ratio**: Exact aspect ratio $546 \times 593$ ($0.92:1$) styled with `aspect-[546/593]` to prevent layout shift.

### 1.2 Color Palette & Surface Philosophy (De-Automated Apple Direction)
- **Palette**: Restrained strictly to Navy `#14264A`, White `#FFFFFF`, Black `#000000`, and neutral grays. All multi-color rainbow accents (cyan, pink, amber, purple) and gradient text have been eliminated.
- **Surfaces**: Solid, flat, confident Apple-grade containers (`bg-[#11203E]` on dark, `bg-white` or `bg-slate-50` on light). Glassmorphism blur, mouse-following spotlights, and ambient glow orbs are banned.
- **Motif**: Single recurring motif derived from the official brand logo mark (`logo-outline-white.png`) used as subtle studio watermark backdrops.

```yaml
colors:
  navy:
    DEFAULT: "#14264A"   # Brand primary accent, dark section background (never body text)
    surface: "#11203E"   # Solid flat dark card background
    dark:    "#0A1325"   # Deepest background stop
    light:   "#1E3A5F"   # Container fill on dark, button hover state
  text:
    light:
      primary:   "#111827" # Near-black on light surfaces (WCAG AAA)
      secondary: "#52525B" # Secondary body text (>= #6E6E73, WCAG AA)
      muted:     "#6B7280" # Meta captions and hairline borders
    dark:
      primary:   "#FFFFFF" # Solid white on dark surfaces
      secondary: "#CBD5E1" # Slate-300 on dark (>= #A1A1A6, contrast 9.2:1)
      muted:     "#94A3B8" # Meta captions
  surface:
    white:       "#FFFFFF" # Light section background
    offwhite:    "#F8FAFC" # Light card and panel background
    borderLight: "#E2E8F0" # Hairline dividers on light surfaces
    borderDark:  "rgba(255, 255, 255, 0.12)" # Hairline dividers on dark surfaces
```

### 1.3 Strict 8-Role Apple-Grade Typography Scale (Inter Variable)
Font stack: `var(--font-inter), -apple-system, "SF Pro Display", system-ui, sans-serif`.  
Weights: **400 (Regular)** and **600 (SemiBold)** only (`500` allowed strictly for small UI labels). All text sizes $\ge 13$px.

| Role | Size Formula | Line-Height | Tracking | Weight | Max Measure & Rules |
|---|---|---|---|---|---|
| **Display** (hero only) | `clamp(2.75rem, 7vw, 6rem)` | `1.05` | `-0.03em` | 600 | 18–22ch max, `text-wrap: balance` |
| **H1** | `clamp(2.25rem, 5vw, 4rem)` | `1.08` | `-0.025em` | 600 | 18–22ch max, `text-wrap: balance` |
| **H2** | `clamp(1.75rem, 3.2vw, 2.75rem)` | `1.12` | `-0.02em` | 600 | 18–22ch max, `text-wrap: balance` |
| **H3** | `clamp(1.25rem, 2vw, 1.5rem)` | `1.20` | `-0.01em` | 600 | `text-wrap: balance` |
| **Lead** | `clamp(1.125rem, 1.6vw, 1.375rem)` | `1.45` | `-0.005em` | 400 | 52ch max, `text-wrap: pretty` |
| **Body** | `clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)` | `1.60` | `0em` | 400 | 60–70ch max, `text-wrap: pretty` |
| **Caption** | `clamp(0.8125rem, 0.8rem + 0.1vw, 0.875rem)` | `1.45` | `0em` | 400 | Min 13px on all devices |
| **Eyebrow** (caps) | `0.8125rem` (13px) | `1.30` | `+0.12em` | 600 | Uppercase only, `select-none` |

### 1.4 Hierarchy & Spacing Principles
- **One Focal Point Per Section**: Headline or game visual leads; supporting text follows; single primary action.
- **Card Order Rule**: Strict sequence across all components:
  $$\text{H3 (Title)} \longrightarrow \text{One-line description (secondary color)} \longrightarrow \text{Status caption}$$
- **Spacing (4/8 base)**:
  - Section vertical padding: `clamp(80px, 12vw, 160px)`
  - Heading $\rightarrow$ Lead: `16–24px` (`mb-4` to `mb-5`)
  - Lead $\rightarrow$ Action/Grid: `32–40px` (`mb-8` to `mb-10`)
  - Card Gap: `24–32px` (`gap-6 sm:gap-8`)
- **Action Hierarchy**: One primary CTA button per section; secondary action is an understated text link with arrow.
- **Privacy Measure**: Strict `max-w-[65ch]`, `line-height: 1.7`, `text-wrap: pretty`.
- **Numbers & Dates**: Tabular figures (`tabular-nums`) applied to all launch dates, years, and version labels.

---

## 2. Grid & Layout System

### 2.1 Responsive Breakpoint Architecture
- **Mobile (0–599px)**: 4-column grid, 16–20px side margins, single-column vertical flow, no horizontal scroll at any width (down to 320px).
- **Tablet (600–1023px)**: 8-column grid, 24px gutters, 32px margins. Dedicated 2-column card layouts, 2-column footer, and 65ch readable measure without squeezed sidebars.
- **Desktop (1024–1439px)**: 12-column grid, max-width `1152px` (`max-w-6xl`), 32px gutters, centered. Sticky sidebars and 3-to-4 column card sequences.
- **Large Desktop (1440px+)**: 12-column grid with generous whitespace breathing room (`max-w-7xl` containers).

### 2.2 Wireframe Layout Specifications (3 Pages × 3 Breakpoints)

| Page | Mobile (0–599px) | Tablet (600–1023px) | Desktop (1024px+) |
|---|---|---|---|
| **Home (`/`)** | 1-col reading flow; full-width CTA; 1-col games; stacked 4-step sequence; 1-col footer. | 2-col split for What We Do; 2-col game cards; 2x2 How We Build grid; 2-col footer. | 5+7 split What We Do; 3-col game cards; 4-col horizontal sequence; 3-col 12-grid footer. |
| **About (`/about/`)** | 1-col hero; 2x2 data grid; 1-col story milestones; 1-col team cards; 1-col principles. | 2x2 data grid; 2-col team grid; 2-col values grid; centered story milestones. | 4-col inline data strip; 4-col team cards with locked baselines; 2-col values grid. |
| **Privacy (`/privacy/`)** | Collapsible top ToC accordion; single column reading article ($\ge 65$ch); 44px links. | Collapsible top ToC accordion ($\ge 65$ch reading measure preserved); full-width tables. | 288px sticky sidebar ToC ($\ge 1280$px); 65ch reading column; side-by-side layout. |

### 2.3 Alternating Sections
Rhythm is established strictly by background color transitions:
- **Home**: Hero (Navy) $\rightarrow$ What We Do (White) $\rightarrow$ Games (Navy) $\rightarrow$ How We Build (White) $\rightarrow$ Why Zoodlego (Navy) $\rightarrow$ Contact (Navy).
- **About**: Story (Navy) $\rightarrow$ Mission (White) $\rightarrow$ Values (Navy) $\rightarrow$ Team (White) $\rightarrow$ Contact (Navy).
- **Privacy**: Legal Notice $\rightarrow$ Content with Sticky ToC (White) $\rightarrow$ Footer (Navy).

---

## 3. Component Inventory & States

### 3.1 Navigation (`Header.tsx` & `MobileNav.tsx`)
- **Desktop**: Fixed top, `bg-[#14264A]/95` backdrop blur, height 64px, touch targets $\ge 44$px.
- **Mobile**: Fixed bar with brand mark + 44px hamburger button; opens full-screen overlay with staggered link entrance and scroll lock.
- **States**: Default, Scrolled (98% opacity + shadow), Active link (bottom indicator), Hover (`hover:bg-white/10`).

### 3.2 Button (`Button.tsx`)
- **Primary (Dark surface)**: `bg-white text-[#14264A] hover:bg-gray-100 min-h-[48px] rounded-full`.
- **Secondary (Dark surface)**: `bg-white/10 text-white border border-white/20 hover:bg-white/20 min-h-[48px] rounded-full`.
- **Primary (Light surface)**: `bg-[#14264A] text-white hover:bg-[#1E3A5F] min-h-[48px] rounded-full`.
- **States**: Default, Hover (`scale: 1.02`), Active/Press (`scale: 0.98`), Focus-visible (`ring-2 ring-offset-2`).

### 3.3 Game Card (`GameCard.tsx`)
- **Visuals**: 16:9 technical frame placeholder, title, explicit status badge (`Coming soon` / `In testing` / `On Google Play`), mechanics description, primary store action button, and deep privacy policy link.
- **Strict Status Contract**: Every title explicitly displays one of: `Coming soon`, `In testing`, or `On Google Play`. Ambiguous jargon like "v1.0 Built" or "Ready" is prohibited.
- **Action Contract**:
  - Valid Store URL: "Get it on Google Play ↗" (`target="_blank" rel="noopener noreferrer"`).
  - Closed Testing Track: Disabled badge "Google Play Closed Test Track".
  - Unconfirmed Store URL: Disabled badge "Coming Soon to Google Play" (no dead clicks).
  - Deep Privacy Link: "Privacy Policy →" pointing directly to `/privacy#<game-slug>`.
- **States**: Default (`bg-[#11203E] border-white/10`), Hover (`border-white/25`), Active press (`scale: 0.98`).

### 3.4 Contact & Inquiries Flow (`ContactCTA.tsx`)
- **Direct Mailto**: Prefilled subject line `?subject=Studio%20Inquiry%20-%20Zoodlego` prevents ambiguous incoming messages.
- **1-Click Copy**: Dedicated copy button next to visible address `info@zoodlego.com` with inline tooltip feedback ("Copied!") and screen-reader status announcement (`aria-live="polite"`).

### 3.5 Privacy Policy Page & Deep Anchors (`PrivacyContent.tsx` & `TableOfContents.tsx`)
- **Plain-Language Summary**: High-contrast, scannable overview card at top of policy covering data collection, AdMob, children's privacy, and contact email.
- **Copy-Link-to-Section**: Hoverable/focusable `#` anchor button on all H2 sections and H3 game subsections copying direct URL (e.g., `/privacy#hole-rush-3d`) to clipboard with confirmation.
- **Nested ToC**: Table of contents includes indented sub-links for all 5 game titles under Section 11.
- **Back to Top**: Floating button (`Back to top ↑`) visible when scrolled past 400px.

### 3.6 System 404 Error Recovery (`not-found.tsx`)
- Branded Apple-style full-screen layout with H1, clear explanation, primary "Return to Homepage" button, and secondary "Read Privacy Policy" link.

### 3.7 Process Pipeline Architecture (`HowWeBuild.tsx`)
- **Visual Rhythm**: Light off-white canvas (`#FBFBFD`) hosting 4 pure white cards (`bg-white`) with hairline border (`border-slate-200/90`) and subtle elevation (`shadow-[0_1px_3px_rgba(0,0,0,0.04),0_6px_16px_rgba(0,0,0,0.02)]`).
- **Integrated Stage Header**: Top of each card features `PHASE 0X` in uppercase monospace (`text-[11px] text-slate-500`) paired with a pill badge for discipline (`VALIDATION`, `PROTOTYPE`, `TEST TRACK`, `PRODUCTION`). Prevents awkward wrapping while eliminating disconnected top stepper clutter.
- **Locked Baseline Typography**: H3 titles locked to `min-h-[52px] sm:min-h-[58px]` to guarantee mathematically identical horizontal baseline alignment for the body text across all 4 columns.
- **Quality Exit Gate Footer**: Bottom row features `STANDARD` in uppercase monospace and an active emerald status dot `●` with the concrete verification gate (`Mechanic Proven`, `60 FPS Benchmark`, `Device Verified`, `Store Compliant`). Zero text wrapping across 320px–1440px viewports.

### 3.8 Studio Editorial Mission (`Mission.tsx`)
- **De-carded Editorial Hero**: Replaced isolated floating card anti-pattern with an expansive, monumental typographic centerpiece (`text-2xl sm:text-4xl lg:text-[2.75rem]` font-semibold leading-[1.18]).
- **Studio Standards Strip**: 3-point benchmark strip (`CRAFT: Immediate 60 FPS Controls`, `MONETIZATION: Standard Google AdMob`, `PLATFORM: Android-First Architecture`) anchored with hairline top border (`border-slate-200/90`) and vertical dividers, establishing credibility and breathing room between dark sections.

### 3.4 Section Wrapper (`SectionWrapper.tsx`)
- **Props**: `theme` ("light" | "dark" | "black"), `spacing` ("hero" | "large" | "default" | "compact"). Handles max-width constraints and responsive padding automatically.

### 3.5 Privacy Table of Contents (`TableOfContents.tsx`)
- **Desktop**: Sticky `top-28`, tracks scroll via `IntersectionObserver`, highlights active section with left Navy accent bar.
- **Mobile**: Top accordion dropdown ("Table of Contents — 12 sections") that collapses upon selection.

---

## 4. ASCII Wireframes (3 Pages $\times$ 3 Breakpoints)

### 4.1 Home Page

```text
=== DESKTOP (1440px) ===
+---------------------------------------------------------------+
| [LOGO]                      Home   About   Privacy  [Contact] |
+---------------------------------------------------------------+
|                                                               |
|                        [WHITE LOGO]                           |
|                 INDEPENDENT GAME STUDIO                       |
|          GAMES CRAFTED WITH OBSESSIVE DETAIL.                 |
|       Focused, tactile interactive worlds for mobile.         |
|             [Explore Games]     [About Studio]                |
|                                                               |
+---------------------------------------------------------------+ (Dark)
|                                                               |
|                         WHAT WE DO                            |
|             Pure Focus on Core Mechanics.                     |
|    +-------------------+ +-------------------+ +------------+ |
|    | 01 Original IP    | | 02 Mobile-First   | | 03 Fair    | |
|    +-------------------+ +-------------------+ +------------+ |
+---------------------------------------------------------------+ (Light)
|                                                               |
|                          OUR GAMES                            |
|                  Active Studio Pipeline                       |
|    +-----------------+ +-----------------+ +----------------+ |
|    | Hole Rush 3D    | | Arrow Puzzle    | | Hexa Puzzle    | |
|    | [v1.0 Built]    | | [Testing Track] | | [Ready]        | |
|    +-----------------+ +-----------------+ +----------------+ |
|    +-----------------+ +-----------------+                    |
|    | Block Puzzle    | | Limbo-inspired  |                    |
|    | [Ready]         | | [In Dev]        |                    |
|    +-----------------+ +-----------------+                    |
+---------------------------------------------------------------+ (Dark)
|                     HOW WE BUILD (4 Steps)                    |
+---------------------------------------------------------------+ (Light)
|                     WHY ZOODLEGO & MANIFESTO                  |
+---------------------------------------------------------------+ (Dark)
|                      CONTACT CTA                              |
+---------------------------------------------------------------+ (Dark)
|  [LOGO]     Instagram: @zoodlegofficial      (c) 2026         |
+---------------------------------------------------------------+

=== TABLET (768px) ===
+-----------------------------------------------+
| [LOGO]                                  [ = ] |
+-----------------------------------------------+
|                 [WHITE LOGO]                  |
|             GAMES CRAFTED WITH...             |
|         [Explore Games]  [About Studio]       |
+-----------------------------------------------+
| WHAT WE DO: 3 stacked cards                   |
+-----------------------------------------------+
| OUR GAMES: 2-column grid                      |
| [Game 1]              [Game 2]                |
| [Game 3]              [Game 4]                |
| [Game 5 (spans 1)]                            |
+-----------------------------------------------+
| HOW WE BUILD (2x2 grid)                       |
+-----------------------------------------------+
| FOOTER (stacked)                              |
+-----------------------------------------------+

=== MOBILE (360px) ===
+-------------------------+
| [LOGO]            [ = ] |
+-------------------------+
|      [WHITE LOGO]       |
|    GAMES CRAFTED...     |
|    [Explore Games]      |
|    [About Studio]       |
+-------------------------+
| WHAT WE DO (stacked)    |
+-------------------------+
| OUR GAMES (1-column)    |
| [Game 1]                |
| [Game 2]                |
| [Game 3]                |
| [Game 4]                |
| [Game 5]                |
+-------------------------+
| HOW WE BUILD (stacked)  |
+-------------------------+
| FOOTER                  |
+-------------------------+
```

---

## 5. User Flows & Accessibility

### Primary Flow: Reviewer / Publisher Evaluation
`Landing (Home) -> Inspect Game Badges -> View Pipeline in "How We Build" -> Navigate to Privacy Policy -> Verify AdMob & Per-Game Anchors -> Click Contact`.

### Accessibility Rules
1. **WCAG 2.1 AA Compliance**: All contrast pairs exceed 4.5:1 (text) and 3:1 (UI borders).
2. **Focus Visibility**: Universal `:focus-visible` ring `2px solid #14264A` (on light) and `2px solid white` (on dark).
3. **Skip Link**: Top-level `#main-content` jump link for keyboard screen reader users.
4. **Touch Target Standard**: Every interactive element enforces a minimum $44 \times 44$px bounding box.
