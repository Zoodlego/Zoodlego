# Typography & Visual Hierarchy Audit

**Date:** November 18, 2026  
**Auditor:** Senior Typographer + Visual Designer + Front-End Engineer  
**Scope:** Home (`/`), About (`/about/`), Privacy Policy (`/privacy/`), Global Design Tokens & Primitives  
**Status:** Audit Complete — Awaiting Approval to Fix

---

## 1. Typography & Hierarchy Issue Inventory

| # | Page/Section | File | Problem | Rule Broken | Severity | Fix |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Global Tokens | `src/app/globals.css`, `src/lib/tokens.ts` | Typography scale uses non-standard clamp formulas, weights 700 & 800, missing Lead and Caption tokens, and body color is set to navy `#14264A`. | 8-role type scale, weights 400 & 600 only, primary text near-black on light. | High | Replace tokens with exact 8-role system (Display, H1, H2, H3, Lead, Body, Caption, Eyebrow). Set body text to near-black `#111827`. |
| **2** | Font Loader | `src/lib/fonts.ts` | Loads weights 400, 500, 600, 700 from Google Fonts; font-optical-sizing not configured. | "Weights 400 and 600 only (500 for small UI labels). font-optical-sizing: auto; antialiased." | High | Restrict weights to 400, 500, 600. Add `font-optical-sizing: auto;` and antialiasing fallback stack. |
| **3** | Home / Hero | `src/components/sections/home/Hero.tsx` | Two competing button CTAs (primary + secondary button); headline lacks `text-wrap: balance` and 18–22ch clamp; lead lacks 52ch clamp; mobile body centered across 4 lines. | One primary CTA style (secondary is text link with arrow); max 18–22ch balance; left-align mobile >3 lines. | High | Demote secondary CTA to clean text link with arrow. Apply `text-wrap: balance` (max-w-[20ch]), Lead token (`52ch`), and left-align mobile lead. |
| **4** | Home / What We Do | `src/components/sections/home/WhatWeDo.tsx` | Uses 6 sizes and 3 weights; H3 preceded by Pillar number tag; text sizes under 13px (`text-xs`); navy `#14264A` used for body text. | Max 2 weights & 4 sizes; Cards order H3 > desc > caption; Min text 13px; Navy never body text. | High | Reorder card to H3 > Body (secondary) > Caption. Replace ad-hoc sizes with H3, Body, Caption tokens. Ensure all text $\ge 13$px. |
| **5** | Home / Our Games | `src/components/sections/home/FeaturedGames.tsx`, `GameCard.tsx` | 8 sizes and 4 weights; GameCard places genre/platform above H3; status is absolute floating badge; text sizes `text-[10px]`, `text-[11px]`, `text-xs` (10–12px). | Max 2 weights & 4 sizes; Cards order H3 > desc > status; Min text 13px. | High | Enforce strict card order: H3 (`game.title`) > Body (`game.description`) > Status Caption (`Coming soon • Android`). Raise all microcopy to 13px Caption token. |
| **6** | Home / How We Build | `src/components/sections/home/HowWeBuild.tsx` | 9 sizes and 4 weights (including `font-black` 900); Stage number placed before H3; text sizes `text-[10px]`, `text-[11px]`, `text-xs`. | Max 2 weights & 4 sizes; Weights 400 & 600 only; Card order H3 > desc > caption; Min text 13px. | High | Remove `font-black`. Order card: H3 (`step.title`) > Body (`step.description`) > Status Caption (`STAGE 01 • Quality Gate: [Status]`). |
| **7** | Home / Why Zoodlego | `src/components/sections/home/WhyZoodlego.tsx` | Category label placed before H3; uses `text-xs` (12px); `mb-16` (64px) equal spacing breaks rhythm. | Card order H3 > desc > caption; Min text 13px; Varied intentional spacing. | Med | Reorder items to H3 > Body > Eyebrow/Caption. Standardize spacing with stack tokens. Replace `text-xs` with Caption token (13px). |
| **8** | Shared / Contact CTA | `src/components/sections/shared/ContactCTA.tsx` | Two competing button CTAs; lead paragraph lacks 52ch clamp; hardcoded padding `p-8 sm:p-14 lg:p-16`. | One primary CTA style (secondary is text link with arrow); Lead 52ch; Section padding clamp. | Med | Convert secondary Instagram button into a quiet text link with arrow. Apply Lead token (52ch) and standardized padding tokens. |
| **9** | About / Hero & Story | `src/components/sections/about/Story.tsx` | 8 sizes and 4 weights (including `font-black` 900); 4 large Fast Fact cards compete with the hero headline; dates lack `tabular-nums`; text sizes 10px and 12px. | Max 2 weights & 4 sizes; One focal point per section; Dates use tabular-nums; Min text 13px. | High | Demote 4 Fast Fact cards to an understated horizontal data strip below headline. Change `font-black` to weight 600. Add `tabular-nums` to `Nov 4, 2026`. Raise text to $\ge 13$px. |
| **10** | About / Mission | `src/components/sections/about/Mission.tsx` | Uses `font-serif` for quote mark; navy `#14264A` used as heading text color. | Single font family (Inter variable); Primary text near-black on light. | Med | Remove `font-serif` quote decoration. Set heading to near-black `#111827`. Align to H2 + Lead token system. |
| **11** | About / Values | `src/components/sections/about/Values.tsx`, `ValueCard.tsx` | `font-black` (900) on number; index placed before H3; text-size `text-[11px]` (11px). | Weights 400 & 600 only; Card order H3 > desc > caption; Min text 13px. | High | Reorder card to H3 > Body > Caption (`01 • Studio Value`). Remove `font-black` in favor of weight 600. Standardize on 13px Caption token. |
| **12** | About / Team | `src/components/sections/about/Team.tsx`, `TeamCard.tsx` | 7 sizes and 3 weights; discipline badge placed between name and responsibilities; hardcoded heights (`h-8`, `h-10`, `h-24`); text sizes 10px and 12px. | Max 2 weights & 4 sizes; Card order H3 > desc > caption; Min text 13px; Natural optical spacing. | High | Restructure card: H3 (`memberName`) > Body (`responsibilities`) > Caption (`roleTitle • Cross-covers: backup`). Remove hardcoded pixel container heights. |
| **13** | Privacy Policy | `src/app/privacy/page.tsx`, `PrivacyContent.tsx`, `TableOfContents.tsx` | `PrivacyContent` max-width is 70ch instead of 65ch; line-height is 1.625 instead of 1.7; `text-xs` (12px) in ToC and subcontent; missing `tabular-nums` on update date; navy used for H2/H3 headings. | Privacy measure 65ch; line-height 1.7; Min text 13px; Dates use tabular-nums; Primary text near-black on light. | High | Set measure to strict `max-w-[65ch]`, `leading-[1.7]`, `text-wrap: pretty`. Convert headings to near-black `#111827`. Raise ToC links to 13px. Add `tabular-nums` to dates. |
| **14** | Header & Nav | `src/components/layout/Header.tsx`, `MobileNav.tsx` | Wordmark uses `font-extrabold` (800); "Contact Studio" button uses `text-xs font-bold` (12px, 700). | Weights 400 & 600 only; Min text 13px; Touch targets $\ge 44$px. | Med | Change wordmark and button to weight 600. Change button text size to 13px (`text-caption`). Preserve 44px touch targets. |
| **15** | Footer | `src/components/layout/Footer.tsx` | Logo uses `font-black` (900); centered layout lacks clear column structure; dates lack `tabular-nums`; text sizes under 13px. | Weights 400 & 600 only; Footer: caption size, secondary color, clear columns; Dates use tabular-nums; Min text 13px. | Med | Format footer into clear semantic columns. Standardize all text to Caption token (`text-caption`, secondary color). Change weight to 600. Add `tabular-nums`. |
| **16** | UI Primitives | `src/components/ui/Kicker.tsx`, `Button.tsx`, `SectionWrapper.tsx` | `Kicker` uses `text-xs font-bold` (12px, 700); `Button` sm uses `text-xs` (12px); `SectionWrapper` light theme sets text to navy `#14264A` and uses arbitrary vertical padding. | Eyebrow 0.8125rem (13px), line-height 1.3, tracking +0.12em, weight 600; Min text 13px; Section padding clamp(80px, 12vw, 160px). | High | Rewrite `Kicker` as strict Eyebrow primitive (13px, weight 600, +0.12em tracking). Fix Button sm to 13px. Update `SectionWrapper` to clamp padding and near-black text. |

---

## 2. Inventory of Current Font Sizes & Weights

### A. Font Sizes Currently in Use (17 Total)
1. `text-[10px]` (10px) — Violates 13px minimum rule
2. `text-[11px]` (11px) — Violates 13px minimum rule
3. `text-xs` (12px) — Violates 13px minimum rule
4. `text-sm` (14px)
5. `text-base` (16px)
6. `text-lg` (18px)
7. `text-xl` (20px)
8. `text-2xl` (24px)
9. `text-3xl` (30px)
10. `text-4xl` (36px)
11. `text-5xl` (48px)
12. `text-6xl` (60px)
13. `type-display` (`clamp(2.75rem, ..., 5.25rem)`)
14. `type-h1` (`clamp(2.25rem, ..., 3.75rem)`)
15. `type-h2` (`clamp(1.75rem, ..., 2.75rem)`)
16. `type-h3` (`clamp(1.25rem, ..., 1.75rem)`)
17. `type-body-lg` / `type-body` / `type-kicker`

**Target State:** Exactly **8 roles** defined by tokens (Display, H1, H2, H3, Lead, Body, Caption, Eyebrow). Every text size $\ge 13$px.

### B. Font Weights Currently in Use (6 Total)
1. `font-black` (900) — Used in `HowWeBuild`, `Story`, `ValueCard`, `Footer`
2. `font-extrabold` (800) — Used in `Header`, `globals.css`
3. `font-bold` (700) — Used in nearly all headings and card titles
4. `font-semibold` (600) — Used in buttons, badges, kickers
5. `font-medium` (500) — Used in nav links and chips
6. `font-normal` (400) — Used in paragraph body copy

**Target State:** Exactly **2 weights site-wide: 400 and 600** (with 500 permitted strictly for small UI labels). Weights 700, 800, and 900 completely eliminated.

---

## 3. Sections with Competing Focal Points

1. **Home / Hero (`Hero.tsx`)**:
   - *Problem*: Primary CTA button (`Explore Titles ↓`) and Secondary CTA button (`About Zoodlego →`) have equal visual weight and button pill styling, competing for the primary click.
   - *Fix*: Keep `Explore Titles ↓` as the sole primary button; demote `About Zoodlego →` to a clean secondary text link with an arrow.

2. **About / Hero & Story (`Story.tsx`)**:
   - *Problem*: The monumental Page Headline is immediately followed by 4 heavy, dark Fast Fact cards with giant numbers (`Nov 4, 2026`, `Gujarat, India`, `Android First`, `5 Titles`), splitting user attention between reading the studio identity and reading the cards.
   - *Fix*: Demote the 4 Fast Fact cards into a quiet, integrated horizontal data strip below the subline, letting the headline remain the unmistakable hero focal point.

3. **Shared / Contact CTA (`ContactCTA.tsx`)**:
   - *Problem*: Two equal pill buttons (`Get in Touch` and `Instagram @zoodlegofficial`) compete at the bottom of the section.
   - *Fix*: Keep `Get in Touch` as the sole primary button; demote `Instagram @zoodlegofficial` to a secondary text link with an arrow.

---

## 4. Elements to Remove or Demote

1. **Remove**:
   - `font-serif` quote character (`“`) in `Mission.tsx`.
   - Ad-hoc pixel height containers (`h-8`, `h-10`, `h-24 sm:h-28`) in `TeamCard.tsx`.
   - All sub-13px font sizes (`text-[10px]`, `text-[11px]`, `text-xs`) across all components.
   - `font-black` (900), `font-extrabold` (800), and `font-bold` (700) classes across all components.
   - Navy body text styling on light backgrounds (`text-[#14264A]`).

2. **Demote / Reorder**:
   - Demote secondary button CTAs in `Hero.tsx` and `ContactCTA.tsx` to text links with an arrow.
   - Demote Fast Fact cards in `Story.tsx` to an understated typographic baseline strip.
   - Reorder card contents in `WhatWeDo`, `GameCard`, `HowWeBuild`, `WhyZoodlego`, `ValueCard`, and `TeamCard` to strictly follow:
     $$\text{H3} \longrightarrow \text{One-line description (secondary color)} \longrightarrow \text{Status caption}$$
   - Restrict line lengths: Headings max 18–22ch (`text-wrap: balance`), Lead max 52ch, Body max 60–70ch (Privacy strict 65ch, `text-wrap: pretty`).
   - Add `tabular-nums` to all dates, launch years, and version labels.
