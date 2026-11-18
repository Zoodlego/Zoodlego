// Animation tokens and variants
// Matches /docs/MOTION_ANIMATION.md specifications

import type { Variants, Transition } from "framer-motion";

export const easing = {
  // Entrance animations: fast start, smooth deceleration: cubic-bezier(0.16, 1, 0.3, 1)
  entrance: [0.16, 1, 0.3, 1] as const,
  // UI interactions: balanced, natural feel: cubic-bezier(0.25, 0.1, 0.25, 1)
  ui: [0.25, 0.1, 0.25, 1] as const,
  // Exit animations
  exit: [0.4, 0, 1, 1] as const,
};

export const duration = {
  instant: 0.15,
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
  slower: 0.7,
} as const;

export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
} as const;

// Transition presets
export const transitions = {
  entrance: {
    duration: duration.slow,
    ease: easing.entrance,
  } satisfies Transition,
  ui: {
    duration: duration.fast,
    ease: easing.ui,
  } satisfies Transition,
  fade: {
    duration: duration.normal,
    ease: easing.ui,
  } satisfies Transition,
};

// Section / Element Entrance Variants
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.normal,
      ease: easing.ui,
    },
  },
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.entrance,
    },
  },
};

export const heroHeadlineVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.entrance,
      delay: 0.2,
    },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.normal,
      delayChildren: 0.1,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: easing.entrance,
    },
  },
};

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.normal,
      ease: easing.entrance,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: duration.fast,
      ease: easing.exit,
    },
  },
};

export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    clipPath: "circle(0px at calc(100% - 36px) 36px)",
    transition: {
      duration: duration.normal,
      ease: easing.exit,
    },
  },
  open: {
    opacity: 1,
    clipPath: "circle(150% at calc(100% - 36px) 36px)",
    transition: {
      duration: duration.slow,
      ease: easing.entrance,
    },
  },
};
