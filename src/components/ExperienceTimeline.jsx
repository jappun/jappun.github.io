import { cn } from "../utils/cn";

const LOGO_BOX = "w-[4.75rem] h-[4.75rem] md:w-[5.25rem] md:h-[5.25rem]";

const LINK_CLASS = "underline rounded-sm hover:text-lighterSky hover:bg-primary p-1";

const renderBullet = (bullet) => {
  if (typeof bullet === "string") return bullet;

  return (
    <>
      {bullet.prefix}
      {bullet.links.map((link, index) => (
        <span key={link.href}>
          {index > 0 && (bullet.join ?? " or ")}
          <a
            className={LINK_CLASS}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        </span>
      ))}
      {bullet.suffix}
    </>
  );
};

const CompanyLogo = ({ logo, company, logoFit = "cover", logoScale = 1, logoPadding = "" }) => {
  if (logo) {
    return (
      <div
        className={cn(
          LOGO_BOX,
          "shrink-0 rounded-xl bg-white overflow-hidden"
        )}
      >
        <img
          src={logo}
          alt={`${company} logo`}
          className={cn(
            "w-full h-full",
            logoFit === "cover" ? "object-cover" : "object-contain",
            logoPadding
          )}
          style={logoScale !== 1 ? { transform: `scale(${logoScale})` } : undefined}
        />
      </div>
    );
  }

  const initials = company
    .split(" ")
    .filter((word) => word.length > 0 && word[0] === word[0].toUpperCase())
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div
      className={cn(
        LOGO_BOX,
        "rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0"
      )}
      aria-hidden="true"
    >
      <span className="text-primary font-mont font-bold text-base">
        {initials || company[0]}
      </span>
    </div>
  );
};

const ExperienceEntry = ({ experience, isLast }) => {
  const { company, role, startDate, endDate, location, logo, logoFit, logoScale, logoPadding, bullets, tech } = experience;

  return (
    <div className="relative flex gap-6 md:gap-8">
      <div className="flex flex-col items-center shrink-0 w-4">
        <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 mt-2 z-10" />
        {!isLast && (
          <div className="w-px flex-1 bg-primary/30 mt-2" aria-hidden="true" />
        )}
      </div>

      <div
        className={cn(
          "flex-1 bg-lighterSky bg-opacity-70 rounded-2xl p-6 md:p-8",
          !isLast && "mb-8"
        )}
      >
        <div className="flex items-start gap-4 md:gap-5">
          <CompanyLogo
            logo={logo}
            company={company}
            logoFit={logoFit}
            logoScale={logoScale}
            logoPadding={logoPadding}
          />
          <div className="min-w-0">
            <h3 className="text-primary font-mont font-bold text-xl md:text-2xl leading-tight">
              {role}
            </h3>
            <p className="text-primary/80 font-mont font-medium text-base md:text-lg mt-1">
              {company}
            </p>
            <p className="text-primary/70 font-mont text-sm mt-1 uppercase tracking-wide">
              {startDate} – {endDate} · {location}
            </p>
          </div>
        </div>

        <ul className="mt-4 space-y-2 list-disc list-outside pl-5 text-primary font-mont text-base md:text-[1.05rem] leading-relaxed">
          {bullets.map((bullet, index) => (
            <li key={index}>{renderBullet(bullet)}</li>
          ))}
        </ul>

        <div className="flex flex-wrap mt-4 gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-primary text-sky rounded-md px-2 py-1 text-xs font-mont"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ExperienceTimeline = ({ items, className }) => {
  return (
    <div className={cn("py-6 md:py-8", className)}>
      {items.map((experience, index) => (
        <ExperienceEntry
          key={experience.id}
          experience={experience}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};
