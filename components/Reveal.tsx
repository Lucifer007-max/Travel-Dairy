"use client";

import { useEffect } from "react";

// Fades `.reveal` elements in as they scroll into view. Content is visible without JS
// because the class that hides it is only added here.
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    for (const el of els) {
      if (el.getBoundingClientRect().top < window.innerHeight) continue;
      el.classList.add("reveal");
      io.observe(el);
    }
    return () => io.disconnect();
  }, []);
  return null;
}
