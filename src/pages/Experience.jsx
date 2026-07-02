import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { Section } from "../components/Section";
import { experiences } from "../data/experienceData";

const Experience = () => {
  return (
    <Section title="Experience" maxWidth="full">
      <ExperienceTimeline items={experiences} />
    </Section>
  );
};

export default Experience;
