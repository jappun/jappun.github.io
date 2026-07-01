import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { experiences } from "../data/experienceData";

const Experience = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="flex flex-col items-center justify-center text-primary font-mont w-full text-3xl font-bold text-center">
        Experience
      </div>
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <ExperienceTimeline items={experiences} />
      </div>
    </div>
  );
};

export default Experience;
