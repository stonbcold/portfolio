import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SplitText (ReactBits-style) — splits text into chars/words and animates
 * them in with GSAP. Uses a manual splitter so it works without the
 * premium GSAP SplitText plugin.
 */
const SplitText = ({
  text = "",
  className = "",
  tag = "h1",
  delay = 40,
  duration = 0.7,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  threshold = 0.2,
  rootMargin = "-60px",
  scrollTrigger = false,
  onComplete,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    el.innerHTML = "";
    const spans = [];
    // Split on spaces first so words never break across lines, then split
    // each word into chars (or keep whole words for splitType "words").
    const words = text.split(/(\s+)/);

    words.forEach((word) => {
      if (word === "") return;
      if (/^\s+$/.test(word)) {
        el.appendChild(document.createTextNode(word));
        return;
      }
      const wordWrap = document.createElement("span");
      wordWrap.className = "split-word";
      el.appendChild(wordWrap);

      if (splitType === "words") {
        wordWrap.classList.add("blur-word");
        wordWrap.textContent = word;
        spans.push(wordWrap);
      } else {
        word.split("").forEach((ch) => {
          const span = document.createElement("span");
          span.className = "split-char";
          span.textContent = ch;
          wordWrap.appendChild(span);
          spans.push(span);
        });
      }
    });

    gsap.set(spans, from);

    const tween = gsap.to(spans, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      onComplete,
      ...(scrollTrigger
        ? {
            scrollTrigger: {
              trigger: el,
              start: `top ${100 - threshold * 100}%`,
            },
          }
        : {}),
    });

    return () => {
      tween.scrollTrigger && tween.scrollTrigger.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const Tag = tag;
  return (
    <Tag ref={ref} className={`split-parent ${className}`}>
      {text}
    </Tag>
  );
};

export default SplitText;
