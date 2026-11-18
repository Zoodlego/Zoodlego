# MOTION_ANIMATION.md — Motion & Choreography Specification

> Project: Zoodlego Studio Marketing Site  
> Version: 2.0 | Date: 2026-11-18  

---

## 1. Principles & Motion Philosophy (De-Automated Apple Discipline)

1. **Restraint & Purpose**: Reveal only key content once upon scroll. Banned: looping idle animations, floating glowing orbs, 3D perspective scroll tilts, and rubbery spring text/button scaling.
2. **Physicality & Tactility**: Motion echoes the calm, responsive feedback of physical hardware — crisp starts with cushioned, smooth settlements.
3. **Zero Layout Shift**: Animate strictly `transform` and `opacity`. Never animate layout dimensions (`width`, `height`, `margin`, `padding`).
4. **Content Immediacy**: Content is never obscured or delayed by animation.
5. **Accessibility First**: Respect `prefers-reduced-motion: reduce` unconditionally. Continuous loops and bouncing effects are completely removed.

---

## 2. Library Choice & Justification

| Library | Version | Justification |
|---|---|---|
| **Framer Motion (`framer-motion` / `motion`)** | latest (React 19 compatible) | Best-in-class declarative animation for React, native scroll progress (`useScroll`), hardware-accelerated transforms, and built-in `useReducedMotion`. |

---

## 3. Motion Tokens

### 3.1 Easing Tokens
- **Entrance Easing**: `cubic-bezier(0.16, 1, 0.3, 1)` — rapid initial acceleration with prolonged, silky deceleration.
- **UI & Micro-interactions**: `cubic-bezier(0.25, 0.1, 0.25, 1)` — balanced, natural physical curve.
- **Exit Easing**: `cubic-bezier(0.4, 0, 1, 1)` — swift, clean departure.

### 3.2 Duration Tokens
- `instant`: `0.15s` (button press, tab switches)
- `fast`: `0.20s` (hover feedback, focus transitions)
- `normal`: `0.40s` (card entrances, mobile menu transitions)
- `slow`: `0.60s` (hero text reveals, major section entrances)

### 3.3 Stagger Tokens
- `fast`: `0.05s` (navigation items)
- `normal`: `0.08s` (game card grids, value pillars)
- `slow`: `0.12s` (hero headline line stagger)

---

## 4. Per-Section Animation Specification

| Section / Element | Trigger | Animated Properties | From $\rightarrow$ To | Duration | Easing | Stagger |
|---|---|---|---|---|---|---|
| **Hero Logo Mark** | Mount / Load | `opacity`, `scale` | `0, 0.9` $\rightarrow$ `1, 1.0` | 0.70s | Entrance | — |
| **Hero Kicker Label** | Mount / Load | `opacity`, `translateY` | `0, 16px` $\rightarrow$ `1, 0px` | 0.50s | Entrance | Delay 0.20s |
| **Hero Headline** | Mount / Load | `opacity`, `translateY` | `0, 28px` $\rightarrow$ `1, 0px` | 0.60s | Entrance | Delay 0.35s |
| **Hero Parallax** | Scroll Progress | `translateY` | `0px` $\rightarrow$ `-60px` | Linked | Linear | — |
| **What We Do (Pillars)** | Scroll (`whileInView`) | `opacity`, `translateY` | `0, 24px` $\rightarrow$ `1, 0px` | 0.50s | Entrance | 0.08s per card |
| **Game Cards Grid** | Scroll (`whileInView`) | `opacity`, `translateY` | `0, 24px` $\rightarrow$ `1, 0px` | 0.50s | Entrance | 0.08s per card |
| **Game Card Hover** | Pointer Enter | `translateY`, `box-shadow` | `0px` $\rightarrow$ `-4px`, elevated shadow | 0.20s | UI | — |
| **How We Build (Steps)** | Scroll (`whileInView`) | `opacity`, `translateY` | `0, 20px` $\rightarrow$ `1, 0px` | 0.40s | Entrance | 0.08s per step |
| **Why Zoodlego Pillars** | Scroll (`whileInView`) | `opacity`, `translateY` | `0, 18px` $\rightarrow$ `1, 0px` | 0.40s | Entrance | 0.08s per item |
| **Contact CTA Section** | Scroll (`whileInView`) | `opacity`, `scale` | `0, 0.96` $\rightarrow$ `1, 1.0` | 0.40s | Entrance | — |
| **Privacy Table of Contents** | Scroll Intersection | `border-color`, `color` | `gray-200` $\rightarrow$ `navy-DEFAULT` | 0.20s | UI | — |

---

## 5. Page Transitions & Reduced Motion

### 5.1 Route Transitions (`PageTransition.tsx`)
```ts
export const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.20, ease: [0.4, 0, 1, 1] } }
};
```

### 5.2 Responsive Motion & Touch Device Adaptation
- **Touch Devices (`(pointer: coarse)`)**:
  - Hover elevation transforms are disabled. Replaced with `:active:scale-[0.98]` tactile press states.
  - Scroll reveals use single uniform transform/opacity reveals (`y: 16px` $\rightarrow$ `0px`, duration `0.4s`).
  - Mobile Drawer opens with lightweight transform/opacity only (`y: -6px` $\rightarrow$ `0px`, duration `0.25s`).
  - No scroll-jacking, no multi-layer parallax, and no tilt effects on mobile or tablet.
- **Viewport Dynamic Units**:
  - Full-height sections use `dvh`/`svh` instead of static `100vh`, preventing iOS Safari address bar jump/clip.

### 5.3 Reduced Motion Fallback
When `prefers-reduced-motion: reduce` is enabled:
- Scroll parallax is completely disabled (`y: 0`).
- Card translateY lifts on hover are suppressed.
- Element entrances collapse to instant opacity transitions or are rendered immediately.
- CSS smooth-scrolling is bypassed to avoid vestibular disorientation.

---

## 6. Performance Budget

- **Max Main-Thread Frame Budget**: $\le 16.6$ms per frame ($60$ FPS target).
- **Cumulative Layout Shift (CLS)**: $0.000$ (enforced via explicit aspect ratios and composite-only properties).
- **GPU Acceleration**: Animate strictly `transform` (3D matrix) and `opacity`.
