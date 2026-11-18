# AGENT.md — Autonomous Agent Operating Rules

> Project: Zoodlego Studio Marketing Site  
> Version: 2.0 | Date: 2026-11-18  

---

## 1. Mission & Scope

Build and maintain a high-craft, Apple-style marketing site for Zoodlego game studio across exactly 3 pages (Home, About Us, Privacy Policy). Ensure strict compliance with Google Play Store, Google AdMob, and WCAG AA standards.

---

## 2. Mandatory Rules (MUST DO)

| # | Directive | Enforcement |
|---|---|---|
| **1** | **Consult Documentation First** | Read PRD.md, UI_UX_DESIGN.md, MOTION_ANIMATION.md, and OPEN_QUESTIONS.md before creating or altering code. |
| **2** | **Use Verified Facts Only** | Rely strictly on CONFIRMED facts in `<company_facts>` and PRD.md. For anything unconfirmed, use explicit placeholders like `[PLAY_STORE_URL]`. |
| **3** | **Enforce Design Tokens** | All colors (`#14264A`, white, grays), spacing, and typography must originate from `src/lib/tokens.ts` and Tailwind tokens. |
| **4** | **Decouple Content Layer** | Game titles live in `src/content/games.json`. Site copy lives in `src/content/*.ts`. No hardcoded strings in UI components. |
| **5** | **Multi-Breakpoint Verification** | Verify layouts at 360px, 768px, 1024px, and 1440px with `hasHorizontalScroll: false`. |
| **6** | **Honor Accessibility Standards** | Maintain WCAG AA compliance, semantic landmarks, minimum 44px touch targets, and `prefers-reduced-motion` fallbacks. |
| **7** | **Atomic Scoped Commits** | Format commits cleanly according to conventional commit specifications. |
| **8** | **Document Decision Changes** | Update the relevant markdown document in `/docs/` whenever an architectural change occurs. |

---

## 3. Strict Prohibitions (MUST NOT DO)

| # | Prohibited Action | Justification |
|---|---|---|
| **1** | **No Invented Facts** | Never invent awards, download statistics, team member biographies, physical addresses, or legal claims. |
| **2** | **No Private Data Exposure** | Never place passwords, personal emails, or telephone numbers into source code or documentation. |
| **3** | **No Scope Creep** | Exactly 3 pages. Do not create careers pages, blog sections, individual game microsites, or account portals. |
| **4** | **No 1:1 Reference Copying** | Emulate Apple's design principles (whitespace, monumentality), never replicate layouts or assets 1:1. |
| **5** | **No Heavy Libraries** | No GSAP, Three.js, Lottie, or video players without explicit justification in PRD.md. |
| **6** | **No Layout-Shifting Motion** | Animate strictly `transform` and `opacity`. Never animate `width`, `height`, `margin`, or `padding`. |
| **7** | **No Gate Skipping** | Execute strictly one phase per turn and halt for user "approved". |

---

## 4. Definition of Done (DoD)

A release step or page is considered **Done** only when:
1. All acceptance criteria in `PRD.md` are satisfied.
2. Lighthouse scores $\ge 95$ across all audited categories (Performance, Accessibility, Best Practices, SEO).
3. Browser DevTools console confirms 0 errors, 0 warnings, and 0 missing resources.
4. Layout tested at 360, 768, 1024, and 1440px with zero horizontal scroll.
5. All unconfirmed items use visible bracketed placeholders documented in `OPEN_QUESTIONS.md`.

---

## 5. Commit Standards

```text
type(scope): concise description in imperative mood

Types: feat | fix | docs | style | refactor | test | chore
Scopes: scaffold | tokens | layout | hero | games | about | privacy | motion | seo | qa
```
*Example: `feat(games): decouple titles and metadata into games.json with per-game anchors`*

---

## 6. Tool Matrix Reference (from MCP_TOOLS.md)

- **File Operations**: `read_file`, `write_file`, `edit_file`.
- **Build & Verification**: `run_command` (npm build, local preview server).
- **QA & Auditing**: `chrome-devtools` (`lighthouse_audit`, `resize_page`, `evaluate_script`, `list_console_messages`).
- **Research Fallback**: `search_web` (since Mobbin MCP requires a paid subscription).
