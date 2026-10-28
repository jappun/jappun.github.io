import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../utils/cn";
import { PaperTapes, allProjectsTapes } from "./Tape";

const ROTATIONS = [-1.2, 0.9, -0.6, 1.1, -0.9, 0.5];

const ProjectLinks = ({ github, live }) => (
  <>
    {github && (
      <a className="marker-link" href={github} target="_blank" rel="noopener noreferrer">
        code
      </a>
    )}
    {live && (
      <a className="marker-link" href={live} target="_blank" rel="noopener noreferrer">
        live
      </a>
    )}
  </>
);

const CardHeader = ({ item, titleId, subtitle, size = "sm", children }) => (
  <div className="index-card-header">
    <img
      src={item.imgV2 ?? item.img}
      alt=""
      className={cn(
        "aspect-square shrink-0",
        size === "lg" ? "w-14 md:w-16" : "w-11",
        item.imageFit === "object-contain" ? "object-contain" : "object-cover"
      )}
    />
    <div className="min-w-0">
      <h3 id={titleId} className={cn("leading-tight", size === "lg" ? "text-2xl md:text-3xl" : "text-xl")}>
        {item.title}
      </h3>
      {subtitle && <p className="mt-1 flex gap-3 text-sm">{subtitle}</p>}
    </div>
    {children}
  </div>
);

const IndexCard = ({ item, index, onOpen }) => (
  <button
    type="button"
    className="index-card index-card-preview w-full text-left"
    style={{ "--tilt": `${ROTATIONS[index % ROTATIONS.length]}deg` }}
    onClick={onOpen}
    aria-haspopup="dialog"
  >
    <CardHeader item={item} />
    <div className="index-card-lines">
      <p className="line-clamp-2 h-[calc(var(--rule)*2)]">{item.blurb}</p>
      <p className="text-right">
        <span className="card-cta text-sm">more →</span>
      </p>
    </div>
  </button>
);

const ProjectDialog = ({ item, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    const onKey = (event) => event.key === "Escape" && onClose();
    const { overflow } = document.body.style;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [onClose]);

  const links = <ProjectLinks github={item.github} live={item.live} />;

  // Portal into the page root so it sits above every section and keeps the v2 styles.
  return createPortal(
    <div
      className="project-dialog-backdrop"
      style={{ position: "fixed", inset: 0, zIndex: 50 }}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${item.id}-title`}
        className="index-card project-dialog mx-auto w-full max-w-2xl text-base md:text-lg"
      >
        <CardHeader item={item} titleId={`${item.id}-title`} subtitle={links} size="lg">
          {item.status && <span className="stamp">{item.status}</span>}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-auto self-start px-2 text-2xl leading-none hover:bg-[#ffe45c]"
          >
            ×
          </button>
        </CardHeader>
        <div className="index-card-lines index-card-lines-full">
          <p className="mb-[var(--rule)]">{item.blurb}</p>
          {item.bullets && (
            <ul className="list-disc pl-5">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          <p className="flex flex-wrap gap-x-2 text-sm">
            {item.tech.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>,
    document.querySelector(".v2") ?? document.body
  );
};

export const IndexCards = ({ items }) => {
  const [openId, setOpenId] = useState(null);
  const openItem = items.find((item) => item.id === openId);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <>
      <div className="grid gap-8 py-2 md:grid-cols-3 md:gap-6">
        {items.map((item, index) => (
          <IndexCard key={item.id} item={item} index={index} onOpen={() => setOpenId(item.id)} />
        ))}
      </div>
      {openItem && <ProjectDialog item={openItem} onClose={close} />}
    </>
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
