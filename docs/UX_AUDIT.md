# UX_AUDIT.md — User Experience & Usability Audit

> Project: Zoodlego Studio Marketing Site  
> Version: 2.0 | Date: 2026-11-18  
> Standard: Nielsen Norman Group 10 Usability Heuristics & Core Audience Tasks

---

## 1. Audience Task Walkthroughs (Mobile 390px & Desktop 1440px)

| Audience & Task | Start Page | Steps Taken | Clicks/Taps | Est. Time | Result | Identified Friction |
|---|---|---|:---:|:---:|:---:|---|
| **1. Player**<br>Understand what Zoodlego makes ($\le 5$s); find a game; see explicit status; access Play Store link. | `/` | 1. Land on hero (read headline/subline)<br>2. Tap "Explore Games" to scroll to `#our-games`<br>3. Inspect game cards | 1 | 6s | **PARTIAL FAIL** | Statuses use internal jargon ("v1.0 Built", "Ready"). Cards have NO store action button; only a Privacy Policy link. Missing `[PLAY_STORE_URL]` fallback. |
| **2. Collaborator / Publisher**<br>Learn who studio is; find contact email; send message with prefilled subject. | `/` or `/about/` | 1. Click "About Us" (or scroll to Story)<br>2. Read team roles & studio manifesto<br>3. Click "Contact Studio" / email | 2–3 | 9s | **PARTIAL FAIL** | `mailto:info@zoodlego.com` lacks prefilled subject. No 1-click copy-to-clipboard button with visual feedback ("Copied!"). |
| **3. Reviewer & Parents**<br>Find privacy policy from footer; reach specific game by stable link (`/privacy#game-slug`); verify last-updated date & email; read without scripts. | Any page | 1. Click "Privacy Policy" in footer<br>2. Navigate to `/privacy#hole-rush-3d`<br>3. Review technical disclosures | 1–2 | 6s | **PARTIAL FAIL** | No plain-language summary at top. Game subsections missing from Table of Contents. No "Copy link to section" anchor buttons. No "Back to top" button. |
| **4. Follower**<br>Find Instagram handle & channel. | Any page | 1. Scroll to footer or ContactCTA<br>2. Click Instagram link | 1 | 4s | **PASS** | Instagram handle `@zoodlegofficial` is easily accessible. (YouTube/LinkedIn tracked in `OPEN_QUESTIONS.md`). |

---

## 2. Heuristic Usability Issue Inventory

| # | Page / Section | File | Task Affected | Problem | Heuristic Broken | Severity | Proposed Fix |
|---|---|---|---|---|---|:---:|---|
| **1** | Home / Featured Games | `src/content/games.json`<br>`GameCard.tsx` | Task 1 (Player) | Game status labels ("v1.0 Built", "Ready", "In Development") are developer jargon and ambiguous. | H1 (Visibility of Status)<br>H2 (Match to Real World) | **High** | Normalize statuses strictly to: `Coming soon`, `In testing`, or `On Google Play`. |
| **2** | Home / Featured Games | `src/components/cards/GameCard.tsx` | Task 1 (Player) | Card lacks a primary store action button. User has no way to see download status or store link. | H7 (Flexibility & Efficiency)<br>H1 (Visibility of Status) | **High** | Add primary action button: "Get it on Google Play" if URL exists; disabled "Coming soon to Google Play" badge if unconfirmed. |
| **3** | Privacy / Header & Intro | `src/components/sections/privacy/PrivacyContent.tsx` | Task 3 (Reviewer / Parents) | Missing a scannable plain-language summary at the top before the 12 technical legal sections. | H10 (Help & Documentation)<br>H6 (Recognition over Recall) | **High** | Add high-visibility "Plain-Language Summary" box covering data minimization, AdMob, children's safety, and contact email. |
| **4** | System / 404 Error | `src/app/not-found.tsx` | All Tasks (Error Recovery) | No custom 404 page exists. Invalid URLs trigger default Next.js unstyled text without recovery navigation. | H9 (Error Recovery) | **High** | Create Apple-style `not-found.tsx` with clear explanation and direct navigation links to Home and Privacy Policy. |
| **5** | Shared / Contact CTA | `src/components/sections/shared/ContactCTA.tsx`<br>`src/components/layout/Header.tsx` | Task 2 (Publisher / Partner) | `mailto:info@zoodlego.com` lacks prefilled subject line (`?subject=Studio%20Inquiry%20-%20Zoodlego`). | H5 (Error Prevention)<br>H7 (Flexibility & Efficiency) | **Medium** | Add prefilled subject line `?subject=Studio%20Inquiry%20-%20Zoodlego` across all mailto links. |
| **6** | Shared / Contact CTA | `src/components/sections/shared/ContactCTA.tsx`<br>`src/components/layout/Footer.tsx` | Task 2 (Publisher / Partner) | No copy-to-clipboard button with visual feedback for users without native mail apps. | H7 (Flexibility & Efficiency)<br>H1 (Visibility of Status) | **Medium** | Add accessible 1-click "Copy email" button with dynamic "Copied!" confirmation tooltip. |
| **7** | Privacy / Section Anchors | `src/components/sections/privacy/PrivacyContent.tsx` | Task 3 (Reviewer / Parents) | Headings lack direct "Copy link to section" anchor buttons for easy deep-link sharing. | H7 (Flexibility & Efficiency) | **Medium** | Add accessible hover/focus `#` anchor button that copies full section URL to clipboard with confirmation. |
| **8** | Privacy / Navigation | `src/app/privacy/page.tsx`<br>`PrivacyContent.tsx` | Task 3 (Reviewer / Parents) | No "Back to top" control on a ~5,000px long document. | H3 (User Control & Freedom) | **Medium** | Add an accessible "Back to top ↑" floating / inline control with smooth scroll. |
| **9** | Privacy / Table of Contents | `src/components/sections/privacy/TableOfContents.tsx` | Task 3 (Reviewer / Parents) | Table of Contents lists only the 12 parent sections; game subsections (#11) are omitted. | H6 (Recognition over Recall)<br>H7 (Flexibility & Efficiency) | **Medium** | Expand ToC to include nested sub-links for all 5 game titles under Section 11. |
| **10** | Shared / External Links | `src/components/layout/Footer.tsx`<br>`ContactCTA.tsx` | Task 4 (Follower) | Instagram external link opens in new tab without screen reader notice or visual external indicator. | H1 (Visibility of Status)<br>Accessibility | **Low** | Add `<span className="sr-only">(opens in a new tab)</span>` and external arrow indicator. |

---

## 3. Ambiguities & Misleading States Inventory

1. **"Released" Perception Risk**:
   - `Hole Rush 3D` and `Hexa Puzzle` labeled "v1.0 Built" and "Ready" could mislead visitors into thinking they are available for public download today.
   - *Resolution*: Clearly display `In testing` or `Coming soon` status pills and a disabled "Coming soon to Google Play" button until production store URLs are confirmed.
2. **Missing Store URLs**:
   - Tracked in `docs/OPEN_QUESTIONS.md` under `[PLAY_STORE_URL]`. Cards must visibly indicate that production store approval is pending rather than showing dead links.
3. **Empty & Error States**:
   - Route `/not-found.tsx` currently missing from `src/app/`. Needs dedicated implementation.
