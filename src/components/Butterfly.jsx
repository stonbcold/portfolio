import { useEffect, useRef } from "react";
import lottie from "lottie-web";

// "Butterfly Flying" by Asad Awan — LottieFiles free animation (Lottie Simple License)
// https://lottiefiles.com/free-animation/butterfly-flying-iLaJ7ODbRC
import butterflyData from "../assets/butterfly.json";

/**
 * Lottie butterfly that wanders around inside its parent area,
 * gently drifting toward random points and tilting toward where it flies.
 */
export default function Butterfly({ size = 110 }) {
  const zoneRef = useRef(null);
  const moverRef = useRef(null);
  const wingRightRef = useRef(null);
  const wingLeftRef = useRef(null);

  // Lottie playback: the same animation twice, the left one mirrored,
  // so the side-view butterfly gets a matching wing on the other side.
  useEffect(() => {
    const opts = { renderer: "svg", loop: true, autoplay: true, animationData: butterflyData };
    const right = lottie.loadAnimation({ ...opts, container: wingRightRef.current });
    const left = lottie.loadAnimation({ ...opts, container: wingLeftRef.current });
    return () => {
      right.destroy();
      left.destroy();
    };
  }, []);

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
    let x = b.w / 2;
    let y = b.h / 2;
    let vx = 0;
    let vy = 0;
    let tx = x;
    let ty = y;
    let nextTargetAt = 0;
    let tilt = 0;

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
      const flutterX = Math.sin(now / 260) * 18;
      const flutterY = Math.cos(now / 190) * 22;
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
  }, [size]);

  return (
    <div className="butterfly-zone" ref={zoneRef} aria-hidden="true">
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
    </div>
  );
}
