# REFERENCES.md — Design Pattern Research for Zoodlego

> Project: Zoodlego Marketing Site  
> Date: 2026-11-18 | Phase 1 Research  
> Sourced via: Web research & industry benchmarks (Mobbin MCP inactive without paid tier)

---

## Pattern Matrix (11 References)

| # | Reference / Source | Screen / Pattern | Pattern We Take | What We Change for Zoodlego |
|---|---|---|---|---|
| **1** | **Apple iPhone Product Page** (`apple.com/iphone`) | Hero section | Full-viewport dramatic stage, high-contrast dark backdrop, huge monumental headline, wide-tracked kicker label, single primary action. | Replace device 3D render with centered Zoodlego white-outline logo mark; replace Apple blue CTA with white pill button; use Inter sans-serif; keep no hype claims. |
| **2** | **Apple.com Editorial Rhythm** (`apple.com`) | Alternating section cadence | Clean full-bleed background alternation (White `#FFFFFF` ↔ Navy `#14264A` / Black `#000000`) without horizontal borders. One clear concept per screen. | Constrain dark panels to brand Navy `#14264A` rather than pure OLED black. Use generous `py-24` to `py-32` padding for airy whitespace. |
| **3** | **Apple Scrollytelling** (`apple.com/apple-vision-pro`) | Scroll-driven text & asset reveal | Text blocks fade in and translateY slightly as the viewport scrolls; subtle background parallax on hero asset. | Implement purely with CSS transforms + Framer Motion `whileInView({ once: true })` to prevent layout shift and maintain zero scroll hijacking. Honor `prefers-reduced-motion`. |
| **4** | **Supercell Mobile Portfolio** (`supercell.com`) | Mobile game cards showcase | Clean grid of game titles showcasing mobile art, genre classification, and immediate platform status. | Tailor to Zoodlego's 5 confirmed titles (Hole Rush 3D, Arrow Puzzle, Hexa Puzzle, Block Puzzle, Limbo-inspired game). Show explicit "Coming soon" state and `[PLAY_STORE_URL]` placeholders. No fabricated download counts or player stats. |
| **5** | **Google Play Developer Showcase** (`play.google.com`) | Android platform badge & store link pattern | Recognizable Google Play store pill badge and status indicators ("Early Access", "In Testing", "Coming Soon"). | Use unconfirmed `[PLAY_STORE_URL]` placeholder links with clean tactile pill buttons indicating "Google Play (Coming Soon)" or "Testing Track" for Arrow Puzzle. |
| **6** | **YouTube Playables Certification Guidelines** (`developers.google.com/youtube/gaming/playables`) | Browser-friendly gaming callout | Focus on instant load, lightweight bundle sizes, tactile simple UI, and non-intrusive monetization standards. | Highlight Zoodlego's pipeline principle: lightweight footprint, responsive mobile touch controls, and future browser/Playables compatibility in "How We Build". |
| **7** | **Supergiant Games** (`supergiantgames.com`) | Craft studio About & Story layout | Minimalist, craft-first tone emphasizing gameplay feel, indie autonomy, and tight-knit collaboration. | Adapt for Zoodlego's confirmed story: indie studio founded Nov 2026 in Gujarat, India, dedicated to responsive puzzle & arcade gameplay without dark UX patterns. Mark as draft for legal/team approval. |
| **8** | **Indie Collective Team Architecture** (Bento / Grid by Role) | Role-based team showcase | Grid organized by studio responsibility rather than hierarchy, suitable for small cross-functional teams. | Structure team strictly by the 4 confirmed SOP roles: Marketing & Sales, Game Developer 1, Game Developer 2, Business Development & Testing. Mention cross-role backup. Use `[TEAM_MEMBER_NAME]` placeholders. No photos/bios until confirmed. |
| **9** | **Fair-Play / AdMob Mobile Monetization** (Clean Ad Disclosure Pattern) | Honest ad policy section | Straightforward explanation of monetization (banner/interstitial/rewarded via Google AdMob) that respects player focus. | Highlight in "Why Zoodlego" and Privacy Policy that games are monetized fairly via Google AdMob with zero deceptive purchase prompts or forced loops. |
| **10** | **Legal & Privacy ToC with Deep Anchors** (Stripe & Notion Legal UX) | Sticky Table of Contents with section anchors | Left-hand sticky sidebar tracking current reading position; smooth scrolling to anchored headings. | Include dedicated per-game anchors (`#hole-rush-3d`, `#arrow-puzzle`, `#hexa-puzzle`, `#block-puzzle`, `#limbo-inspired`) so each Google Play Console app listing can deep-link directly to its specific disclosure. Include "Draft - needs legal review" warning. |
| **11** | **Full-Screen Mobile Navigation** (Modern App Drawer) | Mobile menu overlay | Fullscreen backdrop blur overlay, smooth entrance animation, clean vertical hierarchy, and visible social / contact anchors. | Navy `#14264A` background, white outline logo, staggered link entrance, body-scroll lock, and direct links to Home, About Us, Privacy Policy, plus Instagram `@zoodlegofficial`. |

---

## Architectural Guardrails Extracted

1. **Strict Fact Adherence**: Only confirmed games (5 titles), confirmed launch date (4 Nov 2026), confirmed roles (4 roles with cross-role backup), and confirmed handles (`@zoodlegofficial`, `info@zoodlego.com`) are used.
2. **Explicit Placeholders**: `[PLAY_STORE_URL]`, `[TEAM_MEMBER_NAME]`, `[LEGAL_ENTITY_NAME]`, `[TARGET_AGE_GROUP]`, `[YOUTUBE_URL]`, `[LINKEDIN_URL]`.
3. **No 1:1 Copying**: Layouts adapt Apple's whitespace and typography principles while remaining a distinct, lightweight game studio identity.
4. **Performance & a11y**: Zero heavy canvas video scrubs; lightweight WebP images; strict WCAG AA color contrast; full keyboard navigation.
