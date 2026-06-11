import { useRef } from "react";

/**
 * SpotlightCard (ReactBits) — a radial spotlight that follows the cursor
 * across the card surface.
 */
const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(200, 100, 63, 0.18)",
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = divRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    el.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
