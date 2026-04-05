import { useRef } from "react";
import { useInView, type UseInViewOptions } from "framer-motion";

interface ScrollRevealOptions {
  once?: boolean;
  margin?: string;
  amount?: UseInViewOptions["amount"];
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const { once = true, margin = "-80px", amount = 0.2 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as never, amount });
  return { ref, isInView };
}

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export function stagger(index: number, base = 0.1) {
  return { delay: index * base };
}
