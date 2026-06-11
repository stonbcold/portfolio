import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  "Python",
  "PyTorch",
  "Deep Learning",
  "Machine Learning",
  "Flask",
  "Unreal Engine 5",
  "Java",
  "Full-stack",
];

/**
 * Infinite scrolling marquee that speeds up with scroll velocity.
 */
const Marquee = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const track = trackRef.current;
    if (!track || reduce) return;

    const half = track.scrollWidth / 2;
    const tween = gsap.to(track, {
      x: -half,
      duration: 18,
      ease: "none",
      repeat: -1,
    });

    const st = ScrollTrigger.create({
      trigger: track,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) =>
        gsap.to(tween, {
          timeScale: 1 + Math.abs(self.getVelocity()) / 4000,
          duration: 0.3,
          overwrite: true,
        }),
    });

    return () => {
      st.kill();
      tween.kill();
    };
  }, []);

  return (
    <div className="marquee">
      <div className="marquee-track" ref={trackRef}>
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
