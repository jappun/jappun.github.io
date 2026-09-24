import { cn } from "../utils/cn";
import { PaperTapes, experienceTapes, logoTapes } from "./Tape";

const LINK_CLASS = "text-link";

const STRIP_COLORS = ["#f7f1e3", "#fbf6ea", "#f3ead7", "#f8f2e6", "#f4efe2"];
const STRIP_ROTATIONS = [-0.7, 0.55, -0.35, 0.7, -0.45];

const renderBullet = (bullet) => {
  if (typeof bullet === "string") return bullet;

  return (
    <>
      {bullet.prefix}{" "}
      {bullet.links.map((link, index) => (
        <span key={link.href}>
          {index > 0 && (bullet.join ?? " or ")}
          <a className={LINK_CLASS} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        </span>
      ))}
      {bullet.suffix ? ` ${bullet.suffix}` : null}
    </>
  );
};

const CompanyLogo = ({ logo, company, logoFit = "cover", logoScale = 1, logoPadding = "", tape }) => {
  if (!logo) return null;

  return (
    <div className="relative shrink-0">
      <span className="tape tape-sm" style={{ ...tape, width: "2.6rem" }} aria-hidden="true" />
      <div className="h-16 w-16 overflow-hidden border border-black/15 bg-white md:h-[4.5rem] md:w-[4.5rem]">
        <img
          src={logo}
          alt={`${company} logo`}
          className={cn("h-full w-full", logoFit === "cover" ? "object-cover" : "object-contain", logoPadding)}
          style={logoScale !== 1 ? { transform: `scale(${logoScale})` } : undefined}
        />
      </div>
    </div>
  );
};

const ExperienceEntry = ({ experience, index }) => {
  const { company, role, startDate, endDate, location, logo, logoFit, logoScale, logoPadding, bullets, tech } = experience;

  return (
    <article
      className="paper-strip relative mb-7 px-4 py-5 md:px-6 md:py-6"
      style={{
        backgroundColor: STRIP_COLORS[index % STRIP_COLORS.length],
        transform: `rotate(${STRIP_ROTATIONS[index % STRIP_ROTATIONS.length]}deg)`,
      }}
    >
      <PaperTapes layout={experienceTapes[index % experienceTapes.length]} />
      <div className="flex items-start gap-4">
        <CompanyLogo
          logo={logo}
          company={company}
          logoFit={logoFit}
          logoScale={logoScale}
          logoPadding={logoPadding}
          tape={logoTapes[index % logoTapes.length]}
        />
        <div className="min-w-0">
          <h3 className="text-xl leading-tight md:text-2xl">{role}</h3>
          <p className="mt-1 text-base md:text-lg">{company}</p>
          <p className="mt-1 text-sm">
            {startDate} – {endDate} · {location}
          </p>
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed">
        {bullets.map((bullet, bulletIndex) => (
          <li key={bulletIndex}>{renderBullet(bullet)}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="bg-[#fff3a1] px-1 text-sm">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};

export const ExperienceTimeline = ({ items, className }) => {
  return (
    <div className={cn("relative py-2", className)}>
      {items.map((experience, index) => (
        <ExperienceEntry key={experience.id} experience={experience} index={index} />
      ))}
    </div>
  );
};
