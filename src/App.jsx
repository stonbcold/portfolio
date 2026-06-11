import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import useLenis from "./lib/useLenis";
import useReveal from "./lib/useReveal";

import Cursor from "./components/Cursor";
import Particles from "./components/Particles";
import Marquee from "./components/Marquee";
import SplitText from "./components/SplitText";
import ShinyText from "./components/ShinyText";
import GradientText from "./components/GradientText";
import BlurText from "./components/BlurText";
import SpotlightCard from "./components/SpotlightCard";
import StarBorder from "./components/StarBorder";

import { LINKS, PROJECTS, SKILLS, PATH } from "./data";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded] = useState(true);
  const [pct, setPct] = useState(0);
  const heroRef = useRef(null);
  const magneticRef = useRef(null);

  useLenis(setPct);
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
      <Cursor />

      {/* Animated particle background (ReactBits) */}
      <div className="bg-particles" aria-hidden="true">
        <Particles
          particleColors={["#c8643f", "#b0a07a", "#2b2a27"]}
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
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="scroll-pct">
          <b>{pct}</b>%
        </div>

        {/* HERO */}
        <section className="hero" id="top" ref={heroRef}>
          <div className="hero-inner">
            <GradientText className="eyebrow">
              Disponible — Alternance Sept. 2026
            </GradientText>
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
                text="Développeur & Ingénieur IA — Châtillon, FR"
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

        {/* MARQUEE */}
        <Marquee />

        {/* ABOUT */}
        <section className="block" id="about">
          <div className="container">
            <div className="sec-head">
              <span className="sec-index">(01) — À propos</span>
            </div>
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
          </div>
        </section>

        {/* WORK */}
        <Work />

        {/* CAPS */}
        <section className="block section-divider" id="caps">
          <div className="container">
            <div className="sec-head">
              <div>
                <span className="sec-index">(03) — Compétences</span>
                <h2 className="sec-title fade-up">
                  Boîte à <em>outils</em>
                </h2>
              </div>
            </div>
            <div className="caps-grid">
              {SKILLS.map((col) => (
                <div className="cap-col fade-up" key={col.title}>
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

        {/* PARCOURS */}
        <section className="block section-divider">
          <div className="container">
            <div className="sec-head">
              <div>
                <span className="sec-index">(04) — Parcours</span>
                <h2 className="sec-title fade-up">
                  Mon <em>chemin</em>
                </h2>
              </div>
            </div>
            <div className="path-list">
              {PATH.map((p) => (
                <div className="path-row fade-up" key={p.title}>
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

        {/* CONTACT */}
        <section className="block section-divider contact" id="contact">
          <div className="container">
            <span className="sec-index">(05) — Contact</span>
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

/* ====== WORK SECTION (list / grid toggle) ====== */
function Work() {
  const [view, setView] = useState("list");

  return (
    <section className="block section-divider" id="work">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="sec-index">(02) — Sélection</span>
            <h2 className="sec-title fade-up">
              Projets <em>récents</em>
            </h2>
          </div>
          <div className="work-toggle">
            <button
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
            >
              Liste
            </button>
            <button
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
            >
              Grille
            </button>
          </div>
        </div>

        {view === "list" ? (
          <div className="work-list">
            {PROJECTS.map((p) => (
              <a href="#contact" className="work-row" key={p.num}>
                <div className="work-num">{p.num}</div>
                <div className="work-main">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
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
              </a>
            ))}
          </div>
        ) : (
          <div className="work-grid">
            {PROJECTS.slice(0, 4).map((p) => (
              <SpotlightCard key={p.num}>
                <a href="#contact" className="grid-card-inner">
                  <div className="grid-visual" style={{ background: p.gradient }}>
                    {p.visual}
                  </div>
                  <div className="grid-body">
                    <div>
                      <h3>{p.short}</h3>
                      <div className="gb-meta">{p.meta}</div>
                    </div>
                    <span className="grid-num">{p.num}</span>
                  </div>
                </a>
              </SpotlightCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
