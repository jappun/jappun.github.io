export const PaperTapes = ({ layout, size = "" }) =>
  layout.map((style, index) => <span key={index} className={`tape ${size}`} style={style} aria-hidden="true" />);

export const aboutTapes = [
  { top: "-0.7rem", left: "1.5rem", transform: "rotate(-7deg)" },
  { top: "-0.45rem", right: "2.2rem", transform: "rotate(4deg)" },
];

export const experienceTapes = [
  [{ top: "-0.6rem", left: "42%", transform: "rotate(-2deg)" }],
  [{ top: "-0.45rem", right: "1.2rem", transform: "rotate(8deg)" }],
  [
    { top: "-0.75rem", right: "0.6rem", transform: "rotate(11deg)" },
    { bottom: "-0.45rem", right: "2.4rem", transform: "rotate(7deg)" },
  ],
  [{ top: "-0.55rem", right: "2rem", transform: "rotate(-6deg)" }],
  [{ top: "-0.55rem", right: "18%", transform: "rotate(3deg)" }],
];

export const logoTapes = [
  { top: "-0.38rem", left: "0.15rem", transform: "rotate(-12deg)" },
  { top: "-0.32rem", left: "0.45rem", transform: "rotate(8deg)" },
  { top: "-0.42rem", left: "0.2rem", transform: "rotate(-4deg)" },
  { top: "-0.3rem", left: "0.55rem", transform: "rotate(14deg)" },
  { top: "-0.4rem", left: "0.1rem", transform: "rotate(-8deg)" },
];

export const allProjectsTapes = [
  { top: "-0.3rem", left: "0.15rem", transform: "rotate(-13deg)" },
  { top: "-0.8rem", right: "1.4rem", transform: "rotate(8deg)" },
  { bottom: "-0.45rem", left: "28%", transform: "rotate(-4deg)", width: "3.8rem" },
];

export const drawingTapes = [
  { top: "-0.35rem", left: "-0.45rem", transform: "rotate(-22deg)" },
  { top: "-0.28rem", right: "-0.4rem", transform: "rotate(16deg)" },
  { bottom: "-0.32rem", left: "-0.35rem", transform: "rotate(14deg)" },
  { bottom: "-0.4rem", right: "-0.45rem", transform: "rotate(-18deg)" },
];
