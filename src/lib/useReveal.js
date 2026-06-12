import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies GSAP fade-up reveals to every `.fade-up` element on scroll.
 * Runs once after mount.
 */
export default function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
      // Unified staggered list reveal — same fade-up cascade used for the
      // projects list is applied to Stack (Compétences) and Parcours too.
      const groups = [
        { items: ".work-row", trigger: ".work-list" },
        { items: ".path-row", trigger: ".path-list" },
        { items: ".cap-col li", trigger: ".caps-grid" },
      ];
      groups.forEach(({ items, trigger }) => {
        const els = gsap.utils.toArray(items);
        if (!els.length) return;
        gsap.from(els, {
          y: 40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger, start: "top 85%" },
        });
      });
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      ctx.revert();
    };
  }, []);
}
