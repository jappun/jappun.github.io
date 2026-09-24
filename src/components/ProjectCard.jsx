import { useState } from "react";
import { cn } from "../utils/cn";
import { PaperTapes, allProjectsTapes } from "./Tape";

const ROTATIONS = [-2.2, 1.6, -1.1, 2, -1.6, 0.8];

const ProjectLinks = ({ github, live }) => (
  <div className="mt-3 flex gap-3 text-sm">
    {github && (
      <a className="text-link" href={github} target="_blank" rel="noopener noreferrer">
        code
      </a>
    )}
    {live && (
      <a className="text-link" href={live} target="_blank" rel="noopener noreferrer">
        live
      </a>
    )}
  </div>
);

const StickyNote = ({ item, index }) => {
  const [flipped, setFlipped] = useState(false);

  const toggle = (event) => {
    if (event.target.closest("a")) return;
    setFlipped((open) => !open);
  };

  return (
    <div
      className={cn("sticky", flipped && "is-flipped")}
      style={{ "--tilt": `${ROTATIONS[index % ROTATIONS.length]}deg` }}
    >
      <div
        className="sticky-inner cursor-pointer"
        onClick={toggle}
      >
        <div className="sticky-face px-3 pb-4 pt-3">
          <h3 className="mb-2 text-center text-xl leading-tight">{item.title}</h3>
          <img
            src={item.imgV2 ?? item.img}
            alt=""
            className={cn(
              "aspect-square w-full",
              item.imageFit === "object-contain" ? "bg-[#f4efe4] object-contain" : "object-cover"
            )}
          />
        </div>
        <div className="sticky-face sticky-back px-4 py-4 text-left">
          <h3 className="text-lg leading-tight">{item.title}</h3>
          <p className="mt-2 text-sm leading-snug">{item.description}</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {item.tech.map((tech) => (
              <span key={tech} className="bg-[#fff3a1] px-1 text-sm">
                {tech}
              </span>
            ))}
          </div>
          <ProjectLinks github={item.github} live={item.live} />
        </div>
      </div>
    </div>
  );
};

export const StickyNotes = ({ items }) => {
  return (
    <div className="flex flex-wrap items-start justify-center gap-6 py-2 md:gap-8">
      {items.map((item, index) => (
        <StickyNote key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export const RuledProjects = ({ items }) => {
  return (
    <div className="ruled text-base md:text-lg">
      <PaperTapes layout={allProjectsTapes} size="tape-lg" />
      <div className="ruled-row">&nbsp;</div>
      {items.map((item, index) => (
        <div key={item.id}>
          <div className="ruled-row flex items-start justify-between gap-3">
            <span className="ruled-title min-w-0">{item.title}</span>
            <span className="shrink-0 whitespace-nowrap">
              {item.github && (
                <a className="text-link" href={item.github} target="_blank" rel="noopener noreferrer">
                  code
                </a>
              )}
              {item.live && (
                <a
                  className="text-link ml-3"
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live
                </a>
              )}
            </span>
          </div>
          <p className="ruled-row">• {item.description}</p>
          {index < items.length - 1 && <div className="ruled-row">&nbsp;</div>}
        </div>
      ))}
    </div>
  );
};
