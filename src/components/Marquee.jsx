const ITEMS = [
  "Python",
  "PyTorch",
  "Deep Learning",
  "Machine Learning",
  "Flask",
  "Java",
  "Full-stack",
];

/**
 * Static skill band (no animation).
 */
const Marquee = () => (
  <div className="marquee">
    <div className="marquee-track">
      {ITEMS.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </div>
  </div>
);

export default Marquee;
