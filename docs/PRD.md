# PRD.md — Product Requirements Document

> Project: Zoodlego Studio Marketing Site  
> Version: 2.0 (Fact-Verified) | Date: 2026-11-18  

---

## 1. Goals & Strategic Purpose

1. **Establish Brand Credibility**: Present Zoodlego as a dedicated, craft-first independent game studio from Gujarat, India.
2. **Platform & Reviewer Compliance**: Provide a transparent, compliant marketing home and authoritative Privacy Policy required for Google Play Console, Google AdMob review, and future platform publishing.
3. **Showcase Active Game Pipeline**: Highlight the studio's 5 mobile game titles honestly with accurate lifecycle stages (v1.0 built, in testing, ready, in development) without inflated metrics.
4. **Partner & Publisher Funnel**: Provide clear inquiry channels (`info@zoodlego.com`, Instagram `@zoodlegofficial`) for collaborators, co-developers, and publishers.

---

## 2. Target Audiences

| Audience | Primary Need | Relevant Surface |
|---|---|---|
| **Players** | Discover new arcade/puzzle games, check release status, follow development | Home (Games Grid, Hero), Footer (Instagram) |
| **Google Reviewers (Play Console & AdMob)** | Verify developer identity, test track legitimacy, ad disclosures, and COPPA/Families privacy policies | Privacy Policy (Per-Game Anchors, AdMob section), Footer |
| **Collaborators & Publishers** | Assess team development capabilities, workflow discipline, and technical philosophy | About Us (Story, Roles, Values), Home ("How We Build"), Contact CTA |

---

## 3. Success Metrics

- **Zero Policy Rejections**: Privacy policy meets Google Play Store and AdMob certification requirements on first submission.
- **Performance Excellence**: Lighthouse score $\ge 95$ across Performance, Accessibility, Best Practices, and SEO.
- **Universal Responsiveness**: Seamless presentation across 360px (mobile), 768px (tablet), 1024px (desktop), and 1440px (wide desktop).
- **Zero Console Errors**: 100% clean runtime execution and static prefetching.

---

## 4. Scope

### In Scope (Exactly 3 Pages)
1. **Home (`/`)**: Hero $\rightarrow$ What We Do $\rightarrow$ Our Games (5 titles) $\rightarrow$ How We Build $\rightarrow$ Why Zoodlego $\rightarrow$ Contact CTA $\rightarrow$ Footer.
2. **About Us (`/about/`)**: Studio Story (draft) $\rightarrow$ Mission (draft) $\rightarrow$ Values $\rightarrow$ Team by Role (4 SOP roles with cross-backup) $\rightarrow$ Contact CTA $\rightarrow$ Footer.
3. **Privacy Policy (`/privacy/`)**: Legal draft warning $\rightarrow$ Sticky Table of Contents $\rightarrow$ 12 numbered sections including Google AdMob, Advertising ID, and Dedicated Anchors for each of the 5 games $\rightarrow$ Contact info.

### Shared Shell Components
- Fixed header with brand logo, primary navigation, and Contact action.
- Full-screen mobile navigation drawer with staggered entrance and scroll lock.
- Footer with white outline logo, nav links, confirmed Instagram `@zoodlegofficial`, confirmed contact email, and `[LEGAL_ENTITY_NAME]`.

### Out of Scope
- Careers page or hiring portals (strictly excluded).
- User authentication, player accounts, cloud saves, leaderboards.
- Direct payment processing or in-app commerce on the website.
- Dynamic CMS backend (all game data is decoupled into `games.json`).

---

## 5. Facts Used Verification Table

| Fact Item | Source | Verification Status |
|---|---|:---:|
| Studio Name: Zoodlego | Chat export (Oct 28, 2026) | **CONFIRMED** |
| Location: India (Gujarat) | Company brief & chat | **CONFIRMED** |
| Launch Date: 4 November 2026 | Chat export (Oct 31, 2026) | **CONFIRMED** |
| 4 Core Roles: Marketing & Sales, Game Dev 1, Game Dev 2, BD & Testing | Chat SOP-Wiszoo-001 (Oct 28, 2026) | **CONFIRMED** |
| Cross-Role Backup Structure: Team members cross-cover secondary roles | Chat SOP-Wiszoo-001 (Oct 28, 2026) | **CONFIRMED** |
| Platform Strategy: Android first via Google Play | Chat export (Nov 3–14, 2026) | **CONFIRMED** |
| Future Target: Lightweight browser games for YouTube Playables | Chat export (Oct 25, 2026) | **CONFIRMED** |
| Monetization: Google AdMob ad SDK | Chat export (Oct 27, Nov 3–13, 2026) | **CONFIRMED** |
| Game 1: Hole Rush 3D (v1.0 built, store release pending) | Chat export (Nov 5, Nov 13, 2026) | **CONFIRMED (`Coming soon`)** |
| Game 2: Arrow Puzzle (maze/arrow, Google Play testing track) | Chat export (Nov 12–16, 2026) | **CONFIRMED (`In testing`)** |
| Game 3: Hexa puzzle (hexagon-based game, ready for release) | Chat export (Nov 8, Nov 14, 2026) | **CONFIRMED (`Coming soon`)** |
| Game 4: Tetris-style block puzzle (ready for release) | Chat export (Nov 8, 2026) | **CONFIRMED (`Coming soon`)** |
| Game 5: Limbo-inspired harder game (in active development) | Chat export (Nov 5, 2026) | **CONFIRMED (`Coming soon`)** |
| Color puzzle mechanic: 6-7 same-colored blocks merge & clear, ends when full | Chat export (Oct 31, 2026) | **CONFIRMED** |
| Brand Colors: Navy `#14264A`, White, Black, Grays | Chat export & logo files | **CONFIRMED** |
| Logos: `/public/brand/logo-navy.png`, `/public/brand/logo-outline-white.png` | Provided brand assets | **CONFIRMED** |
| Contact Email: `info@zoodlego.com` (to confirm before publishing) | Chat export (Nov 17, 2026) | **CONFIRMED (Drafted)** |
| Instagram Handle: `@zoodlegofficial` (`instagram.com/zoodlegofficial`) | Chat export (Nov 3, 2026) | **CONFIRMED** |
| Legal Entity Name & Registered Address | Missing in chat | **UNCONFIRMED (`[LEGAL_ENTITY_NAME]`, `[REGISTERED_ADDRESS]`)** |
| Target Age Group (COPPA / Families policy) | Missing in chat | **UNCONFIRMED (`[TARGET_AGE_GROUP]`)** |
| Final Game Descriptions & Production Play Store URLs | Pending Google approval | **UNCONFIRMED (`[PLAY_STORE_URL]`)** |
| Individual Team Names, Bios, and Photos | Chat SOP contains first names; no bios | **UNCONFIRMED (`[TEAM_MEMBER_NAME]`)** |
| YouTube Channel & LinkedIn URLs | Referenced in chat, no URLs | **UNCONFIRMED (`[YOUTUBE_URL]`, `[LINKEDIN_URL]`)** |

---

## 6. Per-Page Functional Requirements

### 6.1 Home Page (`/`)
- **Hero**: Studio name, tagline focusing on pure game feel, primary CTA ("Explore Games" / "Get in Touch"), floating logo mark.
- **What We Do**: Original Android puzzle and arcade games engineered with tight mechanics and responsive touch feedback.
- **Our Games Grid**: Driven by `games.json`. 5 cards showing title, working genre, confirmed status badge ("Testing Track", "v1.0 Built", "Ready", "In Development"), mechanics description, and `[PLAY_STORE_URL]` action.
- **How We Build**: 4-step pipeline: Idea Validation $\rightarrow$ Playable Prototype $\rightarrow$ Multi-Device Testing $\rightarrow$ Ship & Refine. Mention lightweight Playables optimization.
- **Why Zoodlego**: 3 grounded studio pillars: Focused Scope, Fair AdMob Integration (no deceptive loops), and Steady Quality.
- **Contact CTA**: Reusable block pointing to `info@zoodlego.com`.

### 6.2 About Us Page (`/about/`)
- **Story (Draft)**: Founded in Gujarat, India in November 2026 by developers focused on practical, high-polish gameplay.
- **Mission (Draft)**: Crafting accessible, satisfying games that respect player time and device performance.
- **Values**: Craftsmanship, Gameplay-First, Fair Monetization, and Sustainable Pace.
- **Team by Role**: Showcase the 4 confirmed SOP functional roles with cross-role backup indicators and `[TEAM_MEMBER_NAME]` tokens.
- **Contact CTA**: Consistent studio contact block.

### 6.3 Privacy Policy Page (`/privacy/`)
- **Legal Notice**: Prominent banner: `"Draft - needs legal review before publishing."`
- **Sticky Table of Contents**: Navigates 12 specific sections:
  1. Who We Are (`[LEGAL_ENTITY_NAME]`, Gujarat, India)
  2. Data We Collect
  3. How We Use Data
  4. Google AdMob & Advertising ID (GAID) Disclosures
  5. Other Third-Party SDKs & Store Platforms
  6. Website Cookies & Technical Logs
  7. Children's Privacy (COPPA & Families Policy with `[TARGET_AGE_GROUP]`)
  8. Data Retention Policies
  9. Player Rights & Statutory Choices
  10. Security Safeguards
  11. **Per-Game Specific Privacy Notices** (Anchors: `#hole-rush-3d`, `#arrow-puzzle`, `#hexa-puzzle`, `#block-puzzle`, `#limbo-inspired`)
  12. Contact Information
- **Last Modified Timestamp**: Displayed clearly at top.

---

## 7. Non-Functional Requirements

- **Performance**: Static HTML export (`output: 'export'`), sub-second FCP, zero layout shift (CLS = 0).
- **Accessibility**: WCAG 2.1 AA compliance, 100% audit score, visible focus rings, min 44px touch targets.
- **Responsiveness**: Fluid layout across 360px, 768px, 1024px, and 1440px.
- **Security & Privacy**: Zero tracking pixels, zero personal phone numbers or credentials exposed in code or documentation.

---

## 8. Assumptions & Risks

| Item | Type | Impact | Mitigation |
|---|---|---|---|
| Google Play Review Timing | Risk | Arrow Puzzle approval is pending | Badge clearly as "In Testing" with placeholder store link |
| AdMob SDK Telemetry | Risk | Mismatch between policy text and SDK data collection | Include detailed AdMob advertising ID disclosures and mandate legal review |
| Target Age Classification | Assumption | If games target children under 13, COPPA applies | Written neutrally using `[TARGET_AGE_GROUP]` until confirmed |
| Static Export Route Handling | Technical | Client-side routing prefetch files | Postbuild script verifies RSC aliases in `/out` |
