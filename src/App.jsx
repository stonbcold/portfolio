import { useEffect, useMemo, useRef, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useLenis from "./lib/useLenis";
import useReveal from "./lib/useReveal";

import FlexCarousel from "./components/FlexCarousel";
import Strands from "./components/Strands";
import Particles from "./components/Particles";
import SplitText from "./components/SplitText";
import ShinyText from "./components/ShinyText";
import BlurText from "./components/BlurText";
import Butterfly from "./components/Butterfly";
import StarBorder from "./components/StarBorder";
import GradientASCII from "./components/GradientASCII";

import { LINKS, PROJECTS, SKILLS, PATH } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded] = useState(true);
  const heroRef = useRef(null);
  const magneticRef = useRef(null);

  useLenis();
  useReveal();

  // Hero scroll-scrub: name scales up + fades as you scroll past it.
  useEffect(() => {
    if (!loaded) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-inner", {
        scale: 1.6,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [loaded]);

  // Magnetic contact link.
  useEffect(() => {
    const mag = magneticRef.current;
    const canHover = window.matchMedia("(hover: hover)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!mag || !canHover || reduce) return;

    const onMove = (e) => {
      const r = mag.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      mag.style.transform = `translate(${mx * 0.12}px, ${my * 0.12}px)`;
    };
    const onLeave = () => (mag.style.transform = "translate(0,0)");
    mag.addEventListener("mousemove", onMove);
    mag.addEventListener("mouseleave", onLeave);
    return () => {
      mag.removeEventListener("mousemove", onMove);
      mag.removeEventListener("mouseleave", onLeave);
    };
  }, [loaded]);

  return (
    <>

      {/* Animated particle background (ReactBits) */}
      <div className="bg-particles" aria-hidden="true">
        <Particles
          particleColors={["#a7abb0", "#888d94", "#2b2a27"]}
          particleCount={140}
          particleSpread={11}
          speed={0.06}
          particleBaseSize={70}
          sizeRandomness={1}
          alphaParticles={true}
          moveParticlesOnHover={true}
          particleHoverFactor={0.6}
          disableRotation={false}
        />
      </div>

      <div className="app-shell">
        {/* NAV */}
        <nav>
          <a href="#top" className="brand">
            Samuel Gomes<sup>©</sup>
          </a>
          <div className="nav-links">
            <a href="#work">Projets</a>
            <a href="#caps">Stack</a>
            <a href="veille.html">Veille</a>
            <a href="#contact">Contact</a>
            <a href="cv.html" className="nav-cv">CV</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero" id="top" ref={heroRef}>
          {/* Gradient ASCII background (ReactBits) */}
          <div className="hero-ascii" aria-hidden="true">
            <GradientASCII
              lightMode={true}
              colors={["#c8ccd1", "#a7abb0", "#888d94", "#57544e"]}
              shape="horizon"
              characters=" =+xX0S8#@"
              cellSize={18}
              density={0.8}
              glyphOpacity={0.85}
              glow={0.2}
              flicker={0.2}
              softness={0.5}
              flow={0.5}
              speed={1}
              gradientOpacity={0.9}
              grain={0.08}
              mouseInteraction={true}
              scrambleRadius={0.1}
              clickEffect="wave"
              intro={true}
              fontFamily='"JetBrains Mono", ui-monospace, monospace'
            />
          </div>
          <div className="hero-inner">
            {loaded ? (
              <SplitText
                text="Samuel Gomes"
                tag="h1"
                splitType="chars"
                delay={45}
                duration={0.8}
                from={{ opacity: 0, y: 80, rotateX: -40 }}
                to={{ opacity: 1, y: 0, rotateX: 0 }}
              />
            ) : (
              <h1>Samuel Gomes</h1>
            )}
            <div className="sub">
              <ShinyText
                text="Junior Développeur & Software Ingénieur en apprentissage"
                speed={6}
              />
            </div>
          </div>
          <div className="scroll-cue">
            Défiler pour explorer
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="6" y1="1" x2="6" y2="14" />
              <polyline points="1 9 6 14 11 9" />
            </svg>
          </div>
        </section>


        {/* PRÉSENTATION */}
        <section className="block" id="intro">
          <div className="container">
            <div className="sec-head">
              <div>
                <span className="sec-index">Présentation</span>
                <h2 className="sec-title fade-up">
                  Qui suis-<em>je</em> ?
                </h2>
              </div>
            </div>
            <p className="statement-block">
              <BlurText
                text="Je m'appelle Samuel, j'ai 19 ans et je suis étudiant en BTS."
                delay={60}
                animateBy="words"
              />{" "}
              <span className="muted">
                <BlurText
                  text="Passionné par le développement et l'intelligence artificielle, je passe mon temps libre à créer des projets, explorer de nouvelles technologies et apprendre comment fonctionnent les systèmes de l'intérieur."
                  delay={40}
                  animateBy="words"
                />
              </span>
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="block" id="about">
          <div className="container">
            <div className="sec-head">
              <span className="sec-index">À propos</span>
            </div>
            <div className="about-row">
              <p className="statement-block">
                <BlurText
                  text="Je conçois et entraîne des modèles d'IA, du réseau de neurones from scratch au moteur de jeu déployé."
                  delay={60}
                  animateBy="words"
                />{" "}
                <span className="muted">
                  <BlurText
                    text="Mon terrain : Python, le deep learning, et tout ce qui transforme une idée en système qui fonctionne."
                    delay={40}
                    animateBy="words"
                  />
                </span>
              </p>
              <Butterfly />
            </div>
          </div>
        </section>

        {/* WORK */}
        <Work />

        {/* PARCOURS */}
        <section className="block section-divider">
          <div className="container">
            <div className="sec-head">
              <div>
                <span className="sec-index">Parcours</span>
                <h2 className="sec-title fade-up">
                  Mon <em>chemin</em>
                </h2>
              </div>
            </div>
            <div className="path-list">
              {PATH.map((p) => (
                <div className="path-row" key={p.title}>
                  <div className="path-date">{p.date}</div>
                  <div>
                    <h3>{p.title}</h3>
                    <div className="place">{p.place}</div>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPS */}
        <section className="block section-divider" id="caps">
          <div className="container">
            <div className="sec-head">
              <div>
                <span className="sec-index">Compétences</span>
                <h2 className="sec-title fade-up">
                  Boîte à <em>outils</em>
                </h2>
              </div>
            </div>
            <div className="caps-grid">
              {SKILLS.map((col) => (
                <div className="cap-col" key={col.title}>
                  <h4>{col.title}</h4>
                  <ul>
                    {col.items.map(([name, tag]) => (
                      <li key={name}>
                        {name} <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="block section-divider contact" id="contact">
          <div className="container">
            <span className="sec-index">Contact</span>
            <div style={{ marginTop: 32 }}>
              <a
                href={`mailto:${LINKS.email}`}
                className="big-link"
                ref={magneticRef}
              >
                Discutons
                <br />
                d'un projet<span className="arrow">↗</span>
              </a>
            </div>
            <p className="contact-sub">
              Une idée, une opportunité d'alternance, ou simplement envie
              d'échanger sur le code et l'IA ? Ma boîte mail est ouverte.
            </p>
            <div style={{ marginTop: 40 }}>
              <StarBorder as="a" href={`mailto:${LINKS.email}`} speed="6s">
                M'écrire un message ↗
              </StarBorder>
            </div>
            <div className="contact-row">
              <div className="contact-links">
                <a href={`mailto:${LINKS.email}`}>Email</a>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="contact-links">
                <a href="#top">Retour en haut ↑</a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div>© 2026 Samuel Gomes</div>
          <div>Développeur & Ingénieur IA</div>
          <div>Fait main, avec soin</div>
        </footer>
      </div>
    </>
  );
}

/* ====== WORK SECTION (FlexCarousel, ReactBits) ====== */

// Build an SVG "poster" image for each project from its gradient + visual,
// so the WebGL carousel has a texture to render.
const projectImage = (p) => {
  const colors = p.gradient.match(/#[0-9a-fA-F]{3,8}/g) || ["#f0ebe2", "#e7ddcf"];
  const inner = renderToStaticMarkup(p.visual).replace(
    /^<svg[^>]*>|<\/svg>$/g,
    ""
  );
  const vb = (renderToStaticMarkup(p.visual).match(/viewBox="([^"]+)"/) || [])[1] || "0 0 80 80";
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const tags = esc(p.tags.join("  ·  ").toUpperCase());
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${colors[0]}"/><stop offset="1" stop-color="${colors[1] || colors[0]}"/>
</linearGradient></defs>
<rect width="800" height="1000" fill="url(#g)"/>
<text x="56" y="96" font-family="ui-monospace,Consolas,monospace" font-size="28" letter-spacing="3" fill="#57544e">${p.num}</text>
${p.live ? `<circle cx="680" cy="86" r="8" fill="#2f9e5b"/><text x="700" y="96" font-family="ui-monospace,Consolas,monospace" font-size="22" fill="#57544e">LIVE</text>` : ""}
<svg x="160" y="250" width="480" height="480" viewBox="${vb}">${inner}</svg>
<text x="400" y="910" text-anchor="middle" font-family="ui-monospace,Consolas,monospace" font-size="22" letter-spacing="2" fill="#57544e">${tags}</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

// Project whose card shows the live Strands animation instead of its drawing.
const STRANDS_PROJECT = "02";

function StrandsCardSource({ canvas, pulseRef }) {
  const hostRef = useRef(null);

  // Lets the carousel trigger Strands' click pulse on the hidden instance.
  useEffect(() => {
    if (!pulseRef) return;
    pulseRef.current = () => {
      const el = hostRef.current?.querySelector(".strands-container");
      el?.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
    };
    return () => {
      pulseRef.current = null;
    };
  }, [pulseRef]);

  // Copy only the Strands bubble (transparent background, no frame or text).
  useEffect(() => {
    const ctx = canvas.getContext("2d");
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const src = hostRef.current?.querySelector("canvas");
      if (src && src.width && src.height) {
        ctx.drawImage(src, 0, 0, canvas.width, canvas.height);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [canvas]);

  return (
    <div className="strands-source" ref={hostRef} aria-hidden="true">
      <Strands lightMode={true} interactive={false} clickPulse={true} />
    </div>
  );
}

// Draws an (animated) image into a canvas every frame so the carousel shows
// it as a live texture. The <img> stays in the DOM (invisible) so the browser
// keeps advancing its animation frames.
function ImageCardSource({ src, canvas }) {
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = canvas.getContext("2d");
    let raf;
    const draw = () => {
      const img = imgRef.current;
      if (img && img.complete && img.naturalWidth) {
        if (canvas.width !== img.naturalWidth) {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
        }
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [canvas]);

  return (
    <div className="strands-source" aria-hidden="true">
      <img ref={imgRef} src={src} alt="" />
    </div>
  );
}

function Work() {
  // One live canvas per project that has an `image` (sized to the image).
  const imageCanvases = useMemo(() => {
    const map = {};
    PROJECTS.forEach((p) => {
      if (!p.image || !p.animated) return;
      const c = document.createElement("canvas");
      c.width = 860;
      c.height = 591;
      map[p.num] = c;
    });
    return map;
  }, []);

  const strandsCanvas = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 800;
    c.height = 800;
    return c;
  }, []);
  const strandsProject = PROJECTS.find((p) => p.num === STRANDS_PROJECT);
  const strandsPulse = useRef(null);

  const items = useMemo(
    () =>
      PROJECTS.map((p) => ({
        ...(p.num === STRANDS_PROJECT
          ? { canvas: strandsCanvas, src: `live:${p.num}` }
          : imageCanvases[p.num]
          ? { canvas: imageCanvases[p.num], src: `img:${p.num}` }
          : p.image
          ? { src: p.image }
          : { src: projectImage(p) }),
        alt: p.title,
        title: p.title,
        subtitle: p.meta,
      })),
    [strandsCanvas, imageCanvases]
  );
  // The chatbot card sits in the centre when the carousel first appears.
  const startIndex = Math.max(0, PROJECTS.findIndex((p) => p.num === STRANDS_PROJECT));
  const [active, setActive] = useState(startIndex);
  const p = PROJECTS[active] || PROJECTS[0];

  return (
    <section className="block section-divider" id="work">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="sec-index">Sélection</span>
            <h2 className="sec-title fade-up">
              Projets <em>récents</em>
            </h2>
          </div>
        </div>
      </div>

      {strandsProject && (
        <StrandsCardSource canvas={strandsCanvas} pulseRef={strandsPulse} />
      )}

      {PROJECTS.filter((p) => imageCanvases[p.num]).map((p) => (
        <ImageCardSource key={p.num} src={p.image} canvas={imageCanvases[p.num]} />
      ))}

      <div className="work-carousel">
        <FlexCarousel
          items={items}
          preset="liquid"
          cardHeight={0.62}
          gap={16}
          radius={14}
          captions={true}
          captureWheel={false}
          focusOnClick={true}
          initialIndex={startIndex}
          onChange={(i) => setActive(i)}
          onSelect={(i) => {
            // Clicking the chatbot card makes the Strands bubble pulse.
            if (PROJECTS[i]?.num === STRANDS_PROJECT) strandsPulse.current?.();
          }}
        />
      </div>

      <div className="container">
        <div className="work-detail" key={p.num}>
          <p>{p.desc}</p>
          <div className="work-detail-foot">
            <div className="work-tags">
              {p.live && (
                <span className="work-tag live">
                  <span className="d" /> En cours
                </span>
              )}
              {p.tags.map((t) => (
                <span className="work-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="work-detail-link">
                Voir le projet ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
