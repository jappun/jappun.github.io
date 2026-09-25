import J from "../img/name/J.png";
import A from "../img/name/A.png";
import P1 from "../img/name/P1.png";
import P2 from "../img/name/P2.png";
import U from "../img/name/U.png";
import N1 from "../img/name/N1.png";
import D from "../img/name/D.png";
import H from "../img/name/H.png";
import I from "../img/name/I.png";
import L1 from "../img/name/L1.png";
import L2 from "../img/name/L2.png";
import O from "../img/name/O.png";
import N2 from "../img/name/N2.png";
import arrow from "../img/new-arrow.png";

const firstName = [
  [J, -5],
  [A, 3],
  [P1, -2],
  [P2, 4],
  [U, -3],
  [N1, 2],
];

const lastName = [
  [D, 3],
  [H, -4],
  [I, 2],
  [L1, -2],
  [L2, 3],
  [O, -3],
  [N2, 2],
];

const LetterRow = ({ letters }) => (
  <div className="name-row flex items-end justify-center">
    {letters.map(([src, rotate]) => (
      <img
        key={src}
        src={src}
        alt=""
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    ))}
  </div>
);

const Home = ({ aboutRef }) => {
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center px-4 pb-16">
      <h1 className="sr-only">Jappun Dhillon</h1>
      <div aria-hidden="true" className="flex flex-col items-center gap-1">
        <LetterRow letters={firstName} />
        <LetterRow letters={lastName} />
      </div>
      <p className="mt-6 max-w-2xl text-center text-lg sm:text-xl">
        UBC New Grad | Software Developer | Writer
      </p>
      <p className="mt-3 text-center text-base sm:text-lg">
        Open to US-based SWE roles
      </p>
      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="down-arrow"
      >
        <img src={arrow} alt="" className="h-20 w-auto" />
      </button>
    </div>
  );
};

export default Home;
