"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseScrollAnimationReturn<T extends HTMLElement> {
  ref: RefObject<T>;
  isVisible: boolean;
  hasAnimated: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn<T> {
  const { threshold = 0.15, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref: ref as RefObject<T>, isVisible, hasAnimated };
}

// Staggered animation helper
export function getStaggerDelay(index: number, baseDelay = 100): string {
  return `${index * baseDelay}ms`;
}

// Animation class generator
export function getAnimationClasses(
  isVisible: boolean,
  animation: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp" = "fadeUp"
): string {
  const baseClasses = "transition-all duration-700 ease-out";

  const animations = {
    fadeUp: {
      hidden: "opacity-0 translate-y-12",
      visible: "opacity-100 translate-y-0",
    },
    fadeIn: {
      hidden: "opacity-0",
      visible: "opacity-100",
    },
    slideLeft: {
      hidden: "opacity-0 translate-x-12",
      visible: "opacity-100 translate-x-0",
    },
    slideRight: {
      hidden: "opacity-0 -translate-x-12",
      visible: "opacity-100 translate-x-0",
    },
    scaleUp: {
      hidden: "opacity-0 scale-95",
      visible: "opacity-100 scale-100",
    },
  };

  const { hidden, visible } = animations[animation];
  return `${baseClasses} ${isVisible ? visible : hidden}`;
}
