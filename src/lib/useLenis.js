import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth scrolling with Lenis, wired into the GSAP ticker + ScrollTrigger.
 * Also handles anchor-link smooth scroll and reports scroll progress.
 */
export default function useLenis(onProgress) {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);
    lenis.on("scroll", () => {
      if (onProgress) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        onProgress(Math.round((window.scrollY / h) * 100) || 0);
      }
    });

    const tickerFn = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    const handleAnchor = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = a.getAttribute("href");
      if (target.length > 1) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: 0 });
      }
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      document.removeEventListener("click", handleAnchor);
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
