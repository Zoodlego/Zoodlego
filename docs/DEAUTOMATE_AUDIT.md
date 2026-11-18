# De-Automation Audit: Eliminating AI Tells & Restoring Human Craft

**Date:** November 18, 2026  
**Status:** Audit Complete — Pending Approval  
**Scope:** Home (`/`), About (`/about/`), Privacy Policy (`/privacy/`), Shared Layout, Design Tokens

---

## 1. Comprehensive Tell Inventory

| # | Page/Section | File | Tell Found | Category | Severity | Fix Planned |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Design Tokens | `src/app/globals.css` | Text gradients (`.text-gradient-*`), glassmorphism blur classes (`.glass-surface-*`), radial ambient glows (`.ambient-glow-*`). | Visual / Code | High | Remove all gradients, blur effects, and glow utilities. Restrict palette strictly to solid Navy (`#14264A`), White, Black, and neutral grays. |
| 2 | Home / Hero | `src/components/sections/home/Hero.tsx` | Looping infinite background glow blobs (`motion.div` with 160px blur); 3D tilt perspective unfold (`rotateX`, `transformPerspective`); gradient headline text; glassmorphic duplicate card deck. | Visual / Motion | High | Remove looping glow blobs and 3D scroll tilt. Use flat solid typography. Remove redundant mini-card deck; anchor hero with studio identity and single confident statement. |
| 3 | Home / What We Do | `src/components/sections/home/WhatWeDo.tsx` | Repetitive 3-column card grid with Lucide-style decorative stock SVG line-icons and floating number pills (`01`, `02`, `03`). | Visual / Structure | High | Break template: convert into an asymmetrical two-column editorial text/architecture layout without decorative stock icons. |
| 4 | Home / Our Games | `src/components/sections/home/FeaturedGames.tsx`, `GameCard.tsx` | Multi-colored hover borders (`border-cyan-400`, `border-amber-400`); animated filter spring pill; AI-generated synthetic Pillow artwork; uniform 5-card repeating grid. | Visual / Code | High | Remove rainbow borders and spring switcher. Give lead titles (Hole Rush 3D & Arrow Puzzle) prominent editorial scale. Replace AI art with labeled technical wireframe frames. |
| 5 | Home / How We Build | `src/components/sections/home/HowWeBuild.tsx` | 4-column card grid with stock line-icons; em dashes in body copy (`—like merging 6-7...—`); looping pulse beacon dots. | Structure / Copy | High | Convert to a clean horizontal linear production timeline. Remove em dashes and stock icons. Let typography establish the sequence. |
| 6 | Home / Why Zoodlego | `src/components/sections/home/WhyZoodlego.tsx` | Identical 3-column card grid template as What We Do; stock icons; generic "Studio Commitment" footers. | Structure / Visual | High | Eliminate redundant 3-card template. Merge essential points into a quiet, confident studio manifesto block with generous whitespace. |
| 7 | Shared / CTA | `src/components/sections/shared/ContactCTA.tsx` | Glowing cyan blurred background orb (`blur-[130px]`); heavy drop shadows. | Visual | Med | Remove blurred color orb. Restyle as a flat, restrained Apple-style contact panel with crisp border and direct email action. |
| 8 | About / Hero & Story | `src/components/sections/about/Story.tsx` | Atmospheric radial color beams (sky/blue/indigo); multi-color glowing cards; em dashes in body copy; editorial buzzwords ("bloated budgets", "short-lived trends"). | Visual / Copy | High | Remove radial colored glow beams and dot-grid overlay. Remove multi-color accents (emerald, cyan, amber, indigo); use solid navy/white/gray. Remove em dashes and editorial buzzwords. |
| 9 | About / Values | `src/components/sections/about/Values.tsx`, `ValueCard.tsx` | 4 cards repeating the exact same squircle icon + card layout with 4 different accent colors (cyan, emerald, amber, purple). | Visual / Structure | High | Remove decorative stock icons and rainbow accents. Reformat as an Apple-style quiet typographic list or clean 2-column text grid. |
| 10 | About / Team | `src/components/sections/about/Team.tsx`, `TeamCard.tsx` | Stock icons (megaphone, code, shield) used as card headers; repetitive card bento format matching How We Build. | Visual / Structure | Med | Remove decorative icons. Present team roles in a refined human directory format with clear hierarchy and clean SOP secondary backup labels. |
| 11 | Shared Motion | `src/components/motion/SpotlightCard.tsx`, `TextReveal.tsx` | Mouse-tracking radial spotlight illumination effect (`rgba(56, 189, 248, 0.12)`); word-by-word micro-staggers. | Visual / Motion | Med | Remove radial cursor flashlight effect. Use quiet, native CSS border/surface hover transitions without artificial glow. |
| 12 | UI Primitives | `src/components/ui/Kicker.tsx`, `Button.tsx` | Pulsing animation loop (`animate-ping` / `animate-pulse`) on pill badges; multi-color beacons. | Motion / Visual | Low | Remove looping pulse animations. Standardize kicker as a quiet, static, tracked typographic eyebrow (`type-kicker`). |
| 13 | Layout & Footer | `src/components/layout/Footer.tsx` | Multi-colored beacon dots (pink for Instagram, cyan for email). | Visual | Low | Remove rainbow dots. Use clean monochrome typography and standard Apple-style subtle hover states. |

---

## 2. Assets You Must Provide

Until real files are supplied, clean labeled wireframe frames will be rendered in place of fake AI art:

1. `hole-rush-3d-screen.png` (16:9, min 1920×1080, PNG or WebP): Real gameplay screenshot of Hole Rush 3D showing core hole mechanic and scale.
2. `arrow-puzzle-screen.png` (16:9, min 1920×1080, PNG or WebP): Real gameplay screenshot of Arrow Puzzle showing directional arrow maze grid.
3. `hexa-puzzle-screen.png` (16:9, min 1920×1080, PNG or WebP): Real gameplay screenshot of Hexa Puzzle showing 6–7 tile merge mechanic.
4. `block-puzzle-screen.png` (16:9, min 1920×1080, PNG or WebP): Real gameplay screenshot of Block Puzzle showing grid layout and piece placement.
5. `shadow-descent-screen.png` (16:9, min 1920×1080, PNG or WebP): Real in-development silhouette screenshot or concept frame for Limbo-inspired game.
6. `app-icons/` (512×512, 1:1, PNG): Official store app icons for the 5 titles.

---

## 3. Copy Lines to Rewrite (Max 12 Words Each)

| Location | Before (AI Style / Generic / Em Dash) | After (Human Studio Voice / Concrete) | Word Count |
| :--- | :--- | :--- | :--- |
| **Home Hero Headline** | `Mobile Games. Crafted for Pure Play.` | `Original Android games built around strong core mechanics.` | 8 words |
| **Home Hero Subline** | `Zoodlego creates original, mechanics-first Android arcade and puzzle titles engineered for instant tactile fun and honest gameplay.` | `Independent studio in Gujarat, India. Practical design, steady progress, no hype.` | 10 words |
| **Home Process Step 1** | `We isolate one compelling interaction—like merging 6-7 same-colored tiles—and prove the core fun loop before art or UI.` | `We isolate one interaction, like merging seven tiles, before adding art.` | 11 words |
| **Home What We Do Body** | `We focus on compact, highly polished interactive experiences built from first principles for touch screens...` | `We build touch-first Android games and lightweight browser editions for Playables.` | 11 words |
| **About Story Para 1** | `...a focused group of creators who believe great games start with strong core mechanics rather than bloated production budgets.` | `Founded November 4, 2026. We build games around responsive touch controls.` | 10 words |
| **About Story Para 2** | `Rather than chasing short-lived trends, our studio is dedicated to crafting accessible mobile games—from spatial 3D challenges...` | `We test prototypes on real Android devices before committing to production.` | 10 words |
| **About Story Badge** | `Draft — Team Review` | `Internal Draft: Pending Team Confirmation` | 5 words |
| **About Mission Subline** | `We value steady craftsmanship, player respect, and disciplined engineering over speculative hype.` | `Steady development, fair AdMob ads, and straightforward touch controls.` | 9 words |

---

## 4. Sections Sharing the Same Layout That Need Structural Redesign

1. **`Hero` (Home)**: Remove the redundant 3D Unfolding Deck of 2 game cards directly above the actual games section. Replace with a calm, monumental presentation anchored by the authentic studio mark and clear typography.
2. **`WhatWeDo` & `WhyZoodlego`**: Eliminate the duplicate 3-column card grid. Merge the essential pillars and values into a single high-contrast, asymmetric 2-column editorial layout.
3. **`HowWeBuild`**: Break the 4-card bento box pattern. Convert into a clean horizontal engineering timeline showing concrete milestones from graybox to Google Play.
4. **`Values`**: Remove the 4 rainbow-accented cards. Convert to an Apple-style quiet, numbered typographic split list with generous whitespace.
5. **`Team`**: Replace the repeating card template with a clean, executive studio directory honoring confirmed names and SOP cross-role backup assignments.
