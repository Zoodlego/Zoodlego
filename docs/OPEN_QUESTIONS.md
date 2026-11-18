# OPEN_QUESTIONS.md — Unconfirmed Facts & Placeholder Tracker

> Project: Zoodlego Studio Marketing Site  
> Version: 2.0 | Date: 2026-11-18  

This tracker lists every piece of unconfirmed studio data. Each item is represented by a standardized bracketed token across the codebase and rendered visually so that no placeholder is accidentally published.

---

## Unconfirmed Items & Placeholder Registry

| # | Placeholder Token | Description / Question for Studio | Surface / Page Used | Current Fallback in Code |
|---|---|---|---|---|
| **1** | `[LEGAL_ENTITY_NAME]` | What is the exact registered legal business entity name (and relationship to "Wisaxis")? | Footer, Privacy Policy (§1, §12) | `"Zoodlego Studios [LEGAL_ENTITY_NAME]"` |
| **2** | `[REGISTERED_ADDRESS]` | What is the official registered physical address for legal notice & Play Store listing? | Privacy Policy (§1, §12) | `"[REGISTERED_ADDRESS], Gujarat, India"` |
| **3** | `[TARGET_AGE_GROUP]` | What is the intended target age group of players across the games (affects COPPA / Google Play Families Policy)? | Privacy Policy (§7) | `"General audience [TARGET_AGE_GROUP]"` |
| **4** | `[PLAY_STORE_URL]` | What will be the final Google Play Store URLs for each game once approved? | Home (`games.json`), Privacy Policy (§11) | Placeholder link to Google Play (`[PLAY_STORE_URL]`) with "Coming Soon" badge |
| **5** | ~~`[TEAM_MEMBER_NAME]`~~ (RESOLVED) | Team member names confirmed on 18 Nov 2026: Hardik Goswami (BD & Testing), Krish Barot (Digital Marketing & Sales), Krish Nayi (Game Dev), Akshay Rajput (Game Dev). | About Us (`TeamCard.tsx`) | **Confirmed & integrated in codebase** |
| **6** | `[TARGET_JURISDICTIONS]` | Which specific country privacy terms apply (chat mentions UK and US terms)? | Privacy Policy (§9) | Neutral coverage for India, US (CCPA), UK/EU (GDPR), and Global players |
| **7** | `[YOUTUBE_URL]` | What is the exact URL of Zoodlego's official YouTube channel? | Footer, About Us | Omitted / `[YOUTUBE_URL]` placeholder until confirmed |
| **8** | `[LINKEDIN_URL]` | What is the exact URL of Zoodlego's company LinkedIn presence? | Footer, About Us | Omitted / `[LINKEDIN_URL]` placeholder until confirmed |
| **9** | `[CONTACT_EMAIL_CONFIRMATION]` | Confirm whether `info@zoodlego.com` is live and ready to receive public inquiries. | Header, Footer, Home, About, Privacy | `info@zoodlego.com` (displayed with confirm badge in docs) |
