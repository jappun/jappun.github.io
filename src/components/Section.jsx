import { cn } from "../utils/cn";

const maxWidthClasses = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-6xl",
  full: "max-w-7xl",
};

export const Section = ({
  title,
  children,
  maxWidth = "wide",
  className,
  contentClassName,
}) => {
  return (
    <div className={cn("py-16 md:py-24", className)}>
      {title && (
        <h2 className="text-primary font-mont w-full text-3xl font-bold text-center mb-8 md:mb-10">
          {title}
        </h2>
      )}
      <div
        className={cn(
          maxWidthClasses[maxWidth],
          "mx-auto px-6 md:px-8",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
