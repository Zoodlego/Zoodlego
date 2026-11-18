# Mobile & Tablet Responsive Audit

**Date:** November 18, 2026  
**Auditor:** Senior Responsive UI Engineer + Product Designer  
**Scope:** Home (`/`), About (`/about/`), Privacy Policy (`/privacy/`), Global Layout & Breakpoint Tokens  
**Tested Viewports:** Phones: 320×568, 360×800, 390×844, 430×932; Phone Landscape: 844×390; Tablets: 768×1024, 820×1180; Tablet Landscape: 1024×768, 1180×820; Desktop: 1440×900  
**Status:** Audit Complete — Awaiting Approval to Fix

---

## 1. Responsive Issue Inventory

| # | Page/Section | Width / Device | File | Problem | Category | Severity | Fix |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Global Viewport & Safe Areas | All Mobile & Tablet | `src/app/layout.tsx`, `src/app/globals.css` | `viewport-fit=cover` is omitted from `Viewport` metadata; safe-area insets (`env(safe-area-inset-*)`) missing from Header, Footer, and MobileNav. | Browser Quirks | High | Add `viewportFit: "cover"` to viewport metadata in `layout.tsx`. Add safe-area padding utility classes to Header, Footer, and MobileNav. |
| **2** | Viewport Units (100vh vs dvh) | Mobile & Phone Landscape (844×390) | `src/components/ui/SectionWrapper.tsx`, `TableOfContents.tsx` | Hero uses `min-h-[90vh]` instead of `min-h-[90dvh]`; ToC uses `max-h-[calc(100vh-8rem)]`. On iOS Safari, address bar hides bottom CTA. | Browser Quirks | High | Replace all `vh` with `dvh` (`min-h-[90dvh]`, `max-h-[calc(100dvh-8rem)]`). Add compact padding for phone landscape. |
| **3** | Breakpoint Token Mapping | Tablet (600–639px) | `src/app/globals.css`, `src/lib/tokens.ts` | Tailwind default `sm:` starts at 640px, but design token defines Tablet starting at 600px, leaving a 40px unstyled gap where tablet layout fails to engage. | Breakpoints | High | Map `@theme` breakpoint tokens in `globals.css`: `--breakpoint-sm: 600px`, `--breakpoint-md: 768px`, `--breakpoint-lg: 1024px`, `--breakpoint-xl: 1440px`. |
| **4** | Mobile Nav Target Height & Focus Trap | Mobile (< 600px) & Tablet Portrait (< 1024px) | `src/components/layout/MobileNav.tsx` | Menu row height is 47px (rule requires $\ge 56$px); focus is not trapped inside dialog on Tab key; safe-area insets missing. | Navigation / A11y | High | Set nav link rows to `min-h-[56px] flex items-center`. Implement Tab focus trapping within dialog; add safe-area insets. |
| **5** | Header Height Budget | Mobile & Phone Landscape (844×390) | `src/components/layout/Header.tsx` | Header height is 76px (unscrolled), exceeding the 56–64px rule and consuming 19.5% of landscape screen height (> 15% budget). | Navigation / Layout | High | Lock header height to 56px on mobile/landscape (`h-14`) and 64px on desktop (`sm:h-16`). Add safe-area top padding. |
| **6** | Touch Targets Under 44px (Filter Tabs) | Mobile & Tablet (320–820px) | `src/components/sections/home/FeaturedGames.tsx` | Segmented filter tab buttons have height 31px with `px-3.5 py-1.5`, violating the 44×44px minimum touch target rule. | Touch Targets | High | Elevate filter tab touch target to `min-h-[44px]` with `px-4 py-2.5` and 8px inter-target spacing. |
| **7** | Touch Targets Under 44px (Footer & Cards) | Mobile & Tablet (320–1024px) | `src/components/layout/Footer.tsx`, `GameCard.tsx`, `ContactCTA.tsx` | Footer navigation and connect links are 19px tall; GameCard privacy links are 38px tall; ContactCTA Instagram link is 42px tall. | Touch Targets | High | Apply `min-h-[44px] inline-flex items-center` to all footer links, card links, and secondary CTA actions. |
| **8** | Tablet Layout Missing (What We Do) | Tablet Portrait (600–1023px) | `src/components/sections/home/WhatWeDo.tsx` | Uses only `lg:` (`grid-cols-1 lg:grid-cols-12`). Collapses into stretched single-column phone layout at 768px & 820px. | Tablet Layout | High | Implement dedicated 8-column tablet layout: 2-column split with left studio manifesto and 2-column pillar grid on tablet. |
| **9** | Tablet Landscape ToC Squeezing Body (< 65ch) | Tablet Landscape (1024×768, 1180×820) | `src/components/sections/privacy/TableOfContents.tsx`, `PrivacyContent.tsx` | At 1024px touch tablet, side ToC forces body column to 560px (< 65ch measure); sidebar links are 32px tall (under 44px target). | Tablet / Touch | High | Restrict side ToC to `xl:` (1280px+). Use collapsible top ToC on tablets (600–1279px) so body maintains strict 65ch measure and 44px touch targets. |
| **10** | Display Font at 320px Viewport | Narrow Phone (320px) | `src/app/globals.css`, `src/components/ui/Typography.tsx` | At 320px, Display clamp evaluates to 2.75rem (44px); "mechanics." word risks overflow with 16px side padding. | Type & Measure | Med | Add `@media (max-width: 360px)` override scaling Display to `clamp(2.25rem, 10vw, 2.75rem)` to guarantee zero word overflow. |
| **11** | Touch Action & Input Zoom Quirks | All Touch Devices | `src/app/globals.css` | `touch-action: manipulation` missing; `text-size-adjust: 100%` missing; `:active` visual feedback states missing on cards and links. | Touch / Browser Quirks | Med | Add `touch-action: manipulation; text-size-adjust: 100%;` to `html, body, button, a` in `globals.css`. Add visible `:active` scale/opacity states. |
| **12** | Image Optimization & Sizes Attribute | Mobile & Tablet | `Header.tsx`, `Hero.tsx`, `Footer.tsx` | Next.js `<Image>` elements lack explicit `sizes` attributes, causing browser to download desktop-resolution assets on mobile. | Performance / CLS | Med | Add explicit `sizes` attributes (`sizes="(max-width: 600px) 40px, 48px"` etc.) to all images to ensure optimal responsive srcset loading. |
| **13** | Hover vs Touch Media Queries | Tablet Landscape (1024px iPad) | `src/app/globals.css` | Hover states trigger stickily on touch taps on 1024px iPad landscape because styles are scoped by width (`lg:`) rather than pointer capability. | Touch Devices | Med | Wrap hover-only effects in `@media (hover: hover) and (pointer: fine)` so touch devices never get stuck hover highlights. |

---

## 2. Breakpoint Token Usage Audit

- **Current Tailwind Breakpoints in Codebase**:
  - `sm:` (640px) — Used in 18 files. *Flagged: Non-token!* Token specification defines Tablet starting at 600px.
  - `md:` (768px) — Used in 6 files (`Footer`, `Values`, `FeaturedGames`, `HowWeBuild`, `WhyZoodlego`).
  - `lg:` (1024px) — Used in 10 files (`Header`, `MobileNav`, `WhatWeDo`, `HowWeBuild`, `Story`, `Team`, `TableOfContents`, `PrivacyPage`, `SectionWrapper`).
- **Normalized Token Breakpoints to Enforce**:
  - `sm`: **600px** (Tablet portrait boundary, 0–599px is mobile)
  - `md`: **768px** (Standard tablet portrait)
  - `lg`: **1024px** (Desktop & Tablet landscape boundary)
  - `xl`: **1440px** (Large desktop boundary)

---

## 3. Desktop-Only Elements

1. Desktop inline navigation bar in `src/components/layout/Header.tsx` (`hidden lg:flex`).
2. Desktop sticky sidebar Table of Contents in `src/components/sections/privacy/TableOfContents.tsx` (`hidden lg:block`).

---

## 4. Components Lacking a Dedicated Tablet Layout

1. **`src/components/sections/home/WhatWeDo.tsx`**: Below 1024px, collapses into a stretched single-column phone layout. Lacks 8-column tablet 2-column structure.
2. **`src/components/sections/privacy/TableOfContents.tsx`**: Activates desktop 2-column sidebar prematurely at 1024px touch tablet, reducing body reading width below the 65ch requirement.
3. **`src/components/sections/home/WhyZoodlego.tsx`**: Uses 3 narrow columns on 768px tablet portrait where a 2-column or stacked layout is visually superior.
4. **`src/components/sections/about/Mission.tsx`**: Uses single narrow card on tablet without optical width scaling.
