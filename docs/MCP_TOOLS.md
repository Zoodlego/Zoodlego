# MCP_TOOLS.md — Tool & Capability Inventory

> Project: Zoodlego Marketing Site  
> Last Updated: 2026-11-18  

---

## 1. Mobbin MCP Status

- **Status**: Inactive / Payment Required.
- **Details**: Mobbin MCP server tools are registered (`search_screens`, `search_sections`, `search_flows`), but the remote API rejects queries without a paid subscription (`Mobbin MCP requires a paid plan`).
- **Sanctioned Fallback**: Use `search_web` for Apple and game-studio public design patterns, DevTools browser preview, or request screenshots directly if needed.

---

## 2. Tool & Resource Matrix

| Tool | Purpose | Use WHEN | Use WHERE (Phase/File) | Do NOT Use For | Fallback |
|---|---|---|---|---|---|
| **Filesystem (`read_file`, `write_file`, `edit_file`)** | Read, create, and atomically update source code and docs | Reading specifications, drafting documentation, and building application code | All Phases (`/docs/*`, `/src/*`, `/public/*`) | Running shell commands or process management | None (fundamental tool) |
| **Terminal (`run_command`)** | Execute commands in workspace shell (PowerShell on Windows) | Scaffolding Next.js, installing dependencies, building static bundle, starting servers | Phase 3 (Build) & Phase 4 (QA) | Direct file text replacement (prefer `edit_file`) | None |
| **Mobbin MCP (`search_screens`, `search_sections`)** | Query curated mobile/web UI design patterns | Researching layout, navigation, and card patterns | Phase 1 (`/docs/REFERENCES.md`) | Generating production code or fetching raw graphic assets | `search_web` querying public Apple/studio UI patterns |
| **Web Search (`search_web`)** | Search public web for design patterns, documentation, best practices | Researching Apple scrollytelling, legal UX best practices, or library specs | Phase 1 (`/docs/REFERENCES.md`) | Copying full templates or scraping entire sites 1:1 | `chrome-devtools` manual navigation |
| **Browser / DevTools (`chrome-devtools`)** | Emulate viewports, capture screenshots, audit Lighthouse, inspect DOM/console | Verifying layout at 360/768/1024/1440, running a11y & SEO audits, checking console errors | Phase 3 & Phase 4 (`out/`, `localhost`) | Writing code or generating mockups | Headless scripts via `run_command` |
| **Image / Asset Tools (Python `Pillow` via `run_command`)** | Convert, crop, resize logos, generate WebP thumbnails, favicon, touch icons | Optimizing brand marks and generating compliant game card placeholders | Phase 3 (`/public/brand/`, `/public/images/`) | Real game key art generation (requires studio assets) | Static placeholder SVGs/CSS |
| **Git / GitHub MCP (`github`)** | Repository creation, branching, pull requests, commits | Versioning project and managing releases | Phase 3 & Phase 4 | Local filesystem file edits | `git` CLI via `run_command` |
| **Code Review (`coderabbit`)** | Static code analysis, security auditing, best-practice compliance | Auditing codebase before delivery | Phase 4 (QA) | Writing architectural specs | Manual checklist verification |
| **PRD / Spec Validator (`ralph_validate_prd`, `gsd`)** | Spec-driven validation, acceptance criteria tracking | Validating PRD and milestone tracking | Phase 2 (`/docs/PRD.md`) | Designing UI components | Manual PRD audit |
| **Simplification Review (`ponytail`)** | Anti-overengineering review, dead-code detection | Reviewing code minimalism and diff sizes | Phase 4 (QA) | Scaffolding initial project structure | Manual code audit |
