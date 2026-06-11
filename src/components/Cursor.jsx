import { useEffect, useRef } from "react";

/**
 * Custom trailing cursor that grows over interactive elements.
 */
const Cursor = () => {
  const ref = useRef(null);

  useEffect(() => {
    const cursor = ref.current;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!cursor || !canHover || reduce) return;

    let cx = innerWidth / 2,
      cy = innerHeight / 2,
      tx = cx,
      ty = cy;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    addEventListener("mousemove", onMove);

    let raf;
    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const grow = () => cursor.classList.add("grow");
    const shrink = () => cursor.classList.remove("grow");
    const attach = () => {
      document
        .querySelectorAll("a, button, .spotlight-card, .tilt")
        .forEach((el) => {
          el.addEventListener("mouseenter", grow);
          el.addEventListener("mouseleave", shrink);
        });
    };
    // attach after a tick so dynamic content exists
    const id = setTimeout(attach, 100);

    return () => {
      removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(id);
    };
  }, []);

  return <div className="cursor" ref={ref} />;
};

export default Cursor;
