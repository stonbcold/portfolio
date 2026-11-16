import nnVizImg from "./img/nn-viz-demo-animation.webp";
import chessImg from "./img/1_8AEkwxyf2jbAGvDZ9ongDQ.webp";
import javaGameImg from "./img/java-game-square.webp";

// ====== SOCIAL LINKS ======
// TODO Samuel: remplace ces deux URLs par tes vrais profils.
export const LINKS = {
  email: "samuel92320@gmail.com",
  github: "https://github.com/stonbcold",
  linkedin: "https://www.linkedin.com/in/samuel-gomes-5473a0401",
};

// ====== PROJECTS ======
export const PROJECTS = [
  {
    num: "01",
    title: "Moteur d'échecs CNN",
    image: chessImg, // card image (replaces the SVG visual)
    short: "Moteur d'échecs CNN",
    desc: "Réseau de neurones convolutionnel entraîné sur mes parties Chess.com, avec self-play loop et correction Stockfish. Interface Flask, pipeline PyTorch complet.",
    meta: "PyTorch · Flask · Stockfish",
    tags: ["PyTorch", "Flask", "Stockfish"],
    live: true,
    gradient: "linear-gradient(135deg,#f0ebe2,#e7ddcf)",
    visual: (
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#a7abb0" strokeWidth="1.5" fill="none" opacity="0.6">
          <line x1="15" y1="22" x2="40" y2="32" />
          <line x1="15" y1="22" x2="40" y2="50" />
          <line x1="15" y1="42" x2="40" y2="32" />
          <line x1="15" y1="62" x2="40" y2="50" />
          <line x1="40" y1="32" x2="65" y2="38" />
          <line x1="40" y1="50" x2="65" y2="38" />
          <line x1="40" y1="50" x2="65" y2="58" />
        </g>
        <circle cx="15" cy="22" r="5" fill="#a7abb0" />
        <circle cx="15" cy="42" r="5" fill="#a7abb0" />
        <circle cx="15" cy="62" r="5" fill="#a7abb0" />
        <circle cx="40" cy="32" r="5" fill="#82868c" />
        <circle cx="40" cy="50" r="5" fill="#82868c" />
        <circle cx="65" cy="38" r="6" fill="#0d0d0c" />
        <circle cx="65" cy="58" r="6" fill="#0d0d0c" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Chatbot conversationnel",
    short: "Chatbot conversationnel",
    desc: "Assistant capable de tenir une conversation naturelle avec compréhension contextuelle. Base de réponses et historique de session stockés en JSON.",
    meta: "Python · NLP · JSON",
    tags: ["Python", "NLP", "JSON"],
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
        <circle cx="30" cy="36" r="4" fill="#a7abb0" />
        <circle cx="50" cy="36" r="4" fill="#a7abb0" />
        <path
          d="M 30 48 Q 40 54 50 48"
          fill="none"
          stroke="#a7abb0"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M 26 58 L 22 66 L 34 58 Z" fill="#0d0d0c" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Réseau de neurones from scratch",
    image: nnVizImg, // card image (replaces the SVG visual)
    animated: true, // animated webp: rendered as a live texture
    short: "Réseau de neurones",
    desc: "Implémentation d'architectures neuronales sans framework — forward, backprop, descente de gradient — pour comprendre le deep learning de l'intérieur.",
    meta: "Python · NumPy · Deep Learning",
    tags: ["Python", "NumPy", "Deep Learning"],
    live: false,
    gradient: "linear-gradient(135deg,#f0ebe2,#e6ded2)",
    visual: (
      <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#a7abb0" strokeWidth="1.5" fill="none" opacity="0.5">
          <line x1="20" y1="28" x2="45" y2="22" />
          <line x1="20" y1="28" x2="45" y2="40" />
          <line x1="20" y1="52" x2="45" y2="40" />
          <line x1="20" y1="52" x2="45" y2="58" />
          <line x1="45" y1="22" x2="62" y2="40" />
          <line x1="45" y1="40" x2="62" y2="40" />
          <line x1="45" y1="58" x2="62" y2="40" />
        </g>
        <circle cx="20" cy="28" r="5" fill="#a7abb0" />
        <circle cx="20" cy="52" r="5" fill="#a7abb0" />
        <circle cx="45" cy="22" r="4" fill="#82868c" />
        <circle cx="45" cy="40" r="4" fill="#82868c" />
        <circle cx="45" cy="58" r="4" fill="#82868c" />
        <circle cx="62" cy="40" r="6" fill="#0d0d0c" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Mini-jeu Java",
    image: javaGameImg, // card image (replaces the SVG visual)
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
        <line x1="26" y1="42" x2="34" y2="42" stroke="#a7abb0" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="30" y1="38" x2="30" y2="46" stroke="#a7abb0" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="50" cy="38" r="3" fill="#a7abb0" />
        <circle cx="56" cy="46" r="3" fill="#82868c" />
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
      ["SQL", "Débutant"],
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
      ["Git / Git LFS", "Versioning"],
      ["React", "Débutant"],
      ["Node.js", "Débutant"],
    ],
  },
];

// ====== PATH ======
export const PATH = [
  {
    date: "2022 — 2023",
    title: "Stage en entreprise",
    place: "Rent A Car",
    desc: "Stage technique : réparation et remise à neuf du parc informatique, et support aux utilisateurs, sur place comme à distance.",
    missions: [
      "Réparation et remise à neuf d'ordinateurs de bureau, d'iPhone et d'imprimantes",
      "Diagnostic des pannes matérielles et logicielles",
      "Configuration et maintenance du matériel technique",
      "Assistance à distance pour les employés de l'entreprise et pour des particuliers",
    ],
    tools: ["Windows", "iOS", "Diagnostic matériel", "Imprimantes", "Assistance à distance"],
  },
  {
    date: "Mars 2024 — Juillet 2024",
    title: "Développeur WordPress",
    place: "ILT Informatique",
    desc: "Amélioration du site internet de l'agence sous WordPress : mises à jour, ajustements de contenu et de mise en page, pour un site plus clair et plus efficace.",
    missions: [
      "Développement et maintenance du site web de l'entreprise",
      "Création et mise en page de nouvelles pages sous WordPress",
      "Amélioration de l'expérience utilisateur",
      "Travail en autonomie sur plusieurs tâches techniques",
    ],
    tools: ["WordPress"],
  },
  {
    date: "2024 — 2025",
    title: "Développement de site internet",
    place: "Stage — Academy Mathématique",
    desc: "Création d'un site internet pour une entreprise solo, gérée de bout en bout en autonomie, de la conception à la mise en ligne.",
    missions: [
      "Recueil des besoins du client",
      "Conception de la structure et du design du site",
      "Intégration et mise en page responsive",
      "Mise en ligne et suivi après livraison",
    ],
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    date: "En continu",
    title: "Veille & certifications",
    place: "Google Cloud · Anthropic Academy",
    desc: "Certifications Google Cloud en IA générative et MLOps, parcours Anthropic Academy, étude active des architectures neuronales modernes.",
  },
  {
    date: "2024 — Aujourd'hui",
    title: "Développeur Junior",
    place: "Projets personnels & exploration",
    desc: "Développement de plusieurs projets — chatbot, réseau neuronal, moteur d'échecs CNN, jeu UE5 — pour consolider mes compétences en backend, full-stack et IA.",
    missions: [
      "Chatbot conversationnel avec historique de session en JSON",
      "Réseau de neurones codé from scratch",
      "Moteur d'échecs basé sur un CNN, entraîné sur des parties réelles",
      "Recréation d'un jeu en Java, physique et collisions comprises",
    ],
    tools: ["Python", "PyTorch", "NumPy", "Pandas", "Java", "Git"],
  },
];
