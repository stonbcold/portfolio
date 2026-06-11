/**
 * GradientText (ReactBits-style) — animated gradient text, used here as an
 * availability badge with a leading dot.
 */
const GradientText = ({ children, className = "", withDot = true }) => {
  return (
    <span className={`gradient-text ${className}`}>
      {withDot && <span className="dot" style={dotStyle} />}
      <span className="text-content">{children}</span>
    </span>
  );
};

const dotStyle = {
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: "var(--accent)",
  display: "inline-block",
  boxShadow: "0 0 0 0 rgba(200,100,63,0.5)",
  animation: "pulse 2.4s cubic-bezier(0.22,1,0.36,1) infinite",
};

export default GradientText;
