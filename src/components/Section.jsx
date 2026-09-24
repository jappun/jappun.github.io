import { cn } from "../utils/cn";

export const Section = ({ titleSrc, titleAlt, rotate = -1, children, className }) => {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-4 py-12 md:px-8 md:py-16", className)}>
      <h2 className="mb-8 flex justify-center md:mb-10">
        <img
          src={titleSrc}
          alt={titleAlt}
          className="section-title"
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </h2>
      {children}
    </div>
  );
};

export default Section;
