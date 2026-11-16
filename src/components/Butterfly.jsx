import { useEffect, useMemo, useRef } from "react";
import lottie from "lottie-web";

// "Butterfly Flying" by Asad Awan — LottieFiles free animation (Lottie Simple License)
// https://lottiefiles.com/free-animation/butterfly-flying-iLaJ7ODbRC
import butterflyData from "../assets/butterfly.json";

// Colours baked into the Lottie file that get swapped per butterfly.
const WING = [0.137254901961, 0.098039215686, 0.086274509804]; // dark wings + body
const TINT = [1, 0.878431372549, 0.898039215686]; // pale pink detail

const DEFAULT_SWARM = [
  { color: "#3b82f6", size: 104 }, // bleu
  { color: "#f97316", size: 84 }, // orange
  { color: "#a855f7", size: 96 }, // violet
  { color: "#10b981", size: 74 }, // émeraude
  { color: "#ec4899", size: 88 }, // rose
  { color: "#eab308", size: 70 }, // jaune
];

const hexToRgb = (hex) => {
  const n = parseInt(hex.replace("#", ""), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
};
const same = (a, b) => a.every((v, i) => Math.abs(v - b[i]) < 1e-6);

// Deep-copies the animation and recolours its fills.
function recolor(data, hex) {
  const wing = hexToRgb(hex);
  const tint = wing.map((v) => v + (1 - v) * 0.65); // lighter shade of the wing colour
  const copy = JSON.parse(JSON.stringify(data));
  const walk = (o) => {
    if (Array.isArray(o)) return o.forEach(walk);
    if (!o || typeof o !== "object") return;
    if (o.ty === "fl" && Array.isArray(o.c?.k) && typeof o.c.k[0] === "number") {
      const rgb = o.c.k.slice(0, 3);
      if (same(rgb, WING)) o.c.k = [...wing, 1];
      else if (same(rgb, TINT)) o.c.k = [...tint, 1];
    }
    Object.values(o).forEach(walk);
  };
  walk(copy);
  return copy;
}

/**
 * A swarm of Lottie butterflies wandering inside their shared area,
 * each with its own colour, size and flight path.
 */
export default function Butterfly({ swarm = DEFAULT_SWARM }) {
  const zoneRef = useRef(null);
  return (
    <div className="butterfly-zone" ref={zoneRef} aria-hidden="true">
      {swarm.map((b, i) => (
        <WanderingButterfly key={i} zoneRef={zoneRef} color={b.color} size={b.size} />
      ))}
    </div>
  );
}

function WanderingButterfly({ zoneRef, color, size }) {
  const moverRef = useRef(null);
  const wingRightRef = useRef(null);
  const wingLeftRef = useRef(null);
  const data = useMemo(() => recolor(butterflyData, color), [color]);

  // Lottie playback: the same animation twice, the left one mirrored,
  // so the side-view butterfly gets a matching wing on the other side.
  useEffect(() => {
    const opts = { renderer: "svg", loop: true, autoplay: true, animationData: data };
    const right = lottie.loadAnimation({ ...opts, container: wingRightRef.current });
    const left = lottie.loadAnimation({ ...opts, container: wingLeftRef.current });
    // Desynchronise the flapping between butterflies.
    const offset = Math.random() * (right.totalFrames || 1);
    right.goToAndPlay(offset, true);
    left.goToAndPlay(offset, true);
    return () => {
      right.destroy();
      left.destroy();
    };
  }, [data]);

  // Wandering motion
  useEffect(() => {
    const zone = zoneRef.current;
    const mover = moverRef.current;
    if (!zone || !mover) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const h = size * (131 / 110);

    const bounds = () => ({
      w: Math.max(0, zone.clientWidth - size),
      h: Math.max(0, zone.clientHeight - h),
    });

    let b = bounds();
    let x = Math.random() * b.w;
    let y = Math.random() * b.h;
    let vx = 0;
    let vy = 0;
    let tx = x;
    let ty = y;
    let nextTargetAt = 0;
    let tilt = 0;
    const phase = Math.random() * 1000;

    const place = () => {
      mover.style.transform = `translate(${x}px, ${y}px) rotate(${tilt}deg)`;
    };

    if (reduce) {
      place();
      return;
    }

    const pickTarget = (now) => {
      b = bounds();
      tx = Math.random() * b.w;
      ty = Math.random() * b.h;
      nextTargetAt = now + 1600 + Math.random() * 2200;
    };

    let raf;
    let last = performance.now();
    pickTarget(last);

    const loop = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (now > nextTargetAt) pickTarget(now);

      // spring toward the target + a little flutter
      const flutterX = Math.sin((now + phase) / 260) * 18;
      const flutterY = Math.cos((now + phase) / 190) * 22;
      vx += ((tx - x) * 1.6 + flutterX) * dt;
      vy += ((ty - y) * 1.6 + flutterY) * dt;
      vx *= 0.96;
      vy *= 0.96;
      x = Math.min(Math.max(x + vx * dt * 6, 0), b.w);
      y = Math.min(Math.max(y + vy * dt * 6, 0), b.h);

      const targetTilt = Math.max(-25, Math.min(25, vx * 0.35));
      tilt += (targetTilt - tilt) * 0.08;
      place();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onResize = () => (b = bounds());
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [size, zoneRef]);

  return (
    <div
      className="butterfly"
      ref={moverRef}
      style={{ width: size, height: size * (131 / 110) }}
    >
      <div className="bf-pair">
        <div className="bf-wing bf-wing--left" ref={wingLeftRef} />
        <div className="bf-wing bf-wing--right" ref={wingRightRef} />
      </div>
    </div>
  );
}
