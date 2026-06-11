// ====== SOCIAL LINKS ======
// TODO Samuel: remplace ces deux URLs par tes vrais profils.
export const LINKS = {
  email: "samuel92320@gmail.com",
  github: "https://github.com/", // <-- ton GitHub ici
  linkedin: "https://linkedin.com/", // <-- ton LinkedIn ici
};

// ====== PROJECTS ======
export const PROJECTS = [
  {
    num: "01",
    title: "Moteur d'échecs CNN",
    short: "Moteur d'échecs CNN",
    desc: "Réseau de neurones convolutionnel entraîné sur mes parties Chess.com, avec self-play loop et correction Stockfish. Interface Flask, pipeline PyTorch complet.",
    meta: "PyTorch · Flask · Stockfish",
    tags: ["PyTorch", "Flask", "Stockfish"],
    live: true,
    gradient: "linear-gradient(135deg,#f0ebe2,#e7ddcf)",
    visual: (
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#c8643f" strokeWidth="1.5" fill="none" opacity="0.6">
          <line x1="15" y1="22" x2="40" y2="32" />
          <line x1="15" y1="22" x2="40" y2="50" />
          <line x1="15" y1="42" x2="40" y2="32" />
          <line x1="15" y1="62" x2="40" y2="50" />
          <line x1="40" y1="32" x2="65" y2="38" />
          <line x1="40" y1="50" x2="65" y2="38" />
          <line x1="40" y1="50" x2="65" y2="58" />
        </g>
        <circle cx="15" cy="22" r="5" fill="#c8643f" />
        <circle cx="15" cy="42" r="5" fill="#c8643f" />
        <circle cx="15" cy="62" r="5" fill="#c8643f" />
        <circle cx="40" cy="32" r="5" fill="#9a8a5a" />
        <circle cx="40" cy="50" r="5" fill="#9a8a5a" />
        <circle cx="65" cy="38" r="6" fill="#0d0d0c" />
        <circle cx="65" cy="58" r="6" fill="#0d0d0c" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Climeira — Jeu d'escalade",
    short: "Climeira",
    desc: "Jeu d'escalade FPS sous Unreal Engine 5, esthétique low-poly stylisée. Terrain réel via OpenTopography, scripting Blueprint, version control Git LFS.",
    meta: "Unreal Engine 5 · Blueprint",
    tags: ["Unreal Engine 5", "Blueprint"],
    live: true,
    gradient: "linear-gradient(135deg,#e9ede8,#dde6da)",
    visual: (
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 12 56 L 30 24 L 44 44 L 54 30 L 70 56 Z"
          fill="none"
          stroke="#0d0d0c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M 12 56 L 30 24 L 38 36 L 30 56 Z" fill="#c8643f" opacity="0.8" />
        <circle cx="56" cy="20" r="4" fill="#c8643f" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Chatbot conversationnel",
    short: "Chatbot conversationnel",
    desc: "Assistant capable de tenir une conversation naturelle avec compréhension contextuelle. Intégration de l'API Anthropic et gestion de l'historique de session.",
    meta: "Python · NLP · API Claude",
    tags: ["Python", "NLP", "API Claude"],
    live: false,
    gradient: "linear-gradient(135deg,#ece8f0,#e0dcec)",
    visual: (
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="14"
          y="18"
          width="52"
          height="40"
          rx="10"
          fill="none"
          stroke="#0d0d0c"
          strokeWidth="2"
        />
        <circle cx="30" cy="36" r="4" fill="#c8643f" />
        <circle cx="50" cy="36" r="4" fill="#c8643f" />
        <path
          d="M 30 48 Q 40 54 50 48"
          fill="none"
          stroke="#c8643f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M 26 58 L 22 66 L 34 58 Z" fill="#0d0d0c" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Réseau de neurones from scratch",
    short: "Réseau de neurones",
    desc: "Implémentation d'architectures neuronales sans framework — forward, backprop, descente de gradient — pour comprendre le deep learning de l'intérieur.",
    meta: "Python · NumPy · Deep Learning",
    tags: ["Python", "NumPy", "Deep Learning"],
    live: false,
    gradient: "linear-gradient(135deg,#f0ebe2,#e6ded2)",
    visual: (
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#c8643f" strokeWidth="1.5" fill="none" opacity="0.5">
          <line x1="20" y1="28" x2="45" y2="22" />
          <line x1="20" y1="28" x2="45" y2="40" />
          <line x1="20" y1="52" x2="45" y2="40" />
          <line x1="20" y1="52" x2="45" y2="58" />
          <line x1="45" y1="22" x2="62" y2="40" />
          <line x1="45" y1="40" x2="62" y2="40" />
          <line x1="45" y1="58" x2="62" y2="40" />
        </g>
        <circle cx="20" cy="28" r="5" fill="#c8643f" />
        <circle cx="20" cy="52" r="5" fill="#c8643f" />
        <circle cx="45" cy="22" r="4" fill="#9a8a5a" />
        <circle cx="45" cy="40" r="4" fill="#9a8a5a" />
        <circle cx="45" cy="58" r="4" fill="#9a8a5a" />
        <circle cx="62" cy="40" r="6" fill="#0d0d0c" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Mini-jeu Java",
    short: "Mini-jeu Java",
    desc: "Développement d'un jeu en Java pour expérimenter la POO, la gestion d'événements et le rendu graphique avec Swing.",
    meta: "Java · POO · Game Dev",
    tags: ["Java", "POO", "Game Dev"],
    live: false,
    gradient: "linear-gradient(135deg,#efe9e0,#e4dccd)",
    visual: (
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="16"
          y="28"
          width="48"
          height="28"
          rx="14"
          fill="none"
          stroke="#0d0d0c"
          strokeWidth="2"
        />
        <line x1="26" y1="42" x2="34" y2="42" stroke="#c8643f" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="38" x2="30" y2="46" stroke="#c8643f" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="50" cy="38" r="3" fill="#c8643f" />
        <circle cx="56" cy="46" r="3" fill="#9a8a5a" />
      </svg>
    ),
  },
];

// ====== SKILLS ======
export const SKILLS = [
  {
    title: "Langages",
    items: [
      ["Python", "Principal"],
      ["Java", "Avancé"],
      ["HTML / CSS", "Solide"],
      ["C++", "Notions"],
      ["Node.js", "En cours"],
    ],
  },
  {
    title: "IA & Data",
    items: [
      ["PyTorch", "ML"],
      ["scikit-learn", "ML"],
      ["NumPy / Pandas", "Data"],
      ["Deep Learning", "Focus"],
      ["IA générative", "Explore"],
    ],
  },
  {
    title: "Domaines & outils",
    items: [
      ["Backend / API", "Domaine"],
      ["Full-stack", "Domaine"],
      ["Unreal Engine 5", "Game"],
      ["Git / Git LFS", "Versioning"],
      ["Flask", "Web"],
    ],
  },
];

// ====== PATH ======
export const PATH = [
  {
    date: "2024 — Aujourd'hui",
    title: "Développeur Junior",
    place: "Projets personnels & exploration",
    desc: "Développement de plusieurs projets — chatbot, réseau neuronal, moteur d'échecs CNN, jeu UE5 — pour consolider mes compétences en backend, full-stack et IA.",
  },
  {
    date: "2024 — 2025",
    title: "Développement de site internet",
    place: "Stage — Freelance",
    desc: "Création d'un site internet pour une entreprise solo, gérée de bout en bout en autonomie, de la conception à la mise en ligne.",
  },
  {
    date: "En continu",
    title: "Veille & certifications",
    place: "Google Cloud · Anthropic Academy",
    desc: "Certifications Google Cloud en IA générative et MLOps, parcours Anthropic Academy, étude active des architectures neuronales modernes.",
  },
  {
    date: "2022 — 2023",
    title: "Stage en entreprise",
    place: "Rent A Car",
    desc: "Première immersion professionnelle : fonctionnement d'une entreprise, process internes et travail en équipe.",
  },
];
