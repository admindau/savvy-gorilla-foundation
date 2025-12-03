"use client";

import { useEffect } from "react";

/**
 * Global scroll + animation wiring.
 * - Adds .is-visible to [data-animate] elements as they enter the viewport.
 * - Automatically treats .card-hover elements as animated.
 * - Toggles .is-scrolled on the header for the subtle glow line.
 */
export default function ScrollEffects() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const header = document.querySelector<HTMLElement>("[data-header]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    const tracked = new Set<Element>();

    const findAnimatedElements = () => {
      // Elements that explicitly opt in
      document
        .querySelectorAll<HTMLElement>("[data-animate]")
        .forEach((el) => {
          if (!tracked.has(el)) {
            tracked.add(el);
            observer.observe(el);
          }
        });

      // Treat every .card-hover as a fade-up by default
      document.querySelectorAll<HTMLElement>(".card-hover").forEach((el) => {
        if (!el.dataset.animate) {
          el.dataset.animate = "fade-up";
        }
        if (!tracked.has(el)) {
          tracked.add(el);
          observer.observe(el);
        }
      });
    };

    findAnimatedElements();

    const onScroll = () => {
      if (!header) return;
      const scrolled = window.scrollY > 4;
      header.classList.toggle("is-scrolled", scrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // If the DOM changes (navigation, etc.), rescan for new elements
    const mutationObserver = new MutationObserver(() => {
      findAnimatedElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // This component only runs side effects – it doesn't render anything.
  return null;
}
