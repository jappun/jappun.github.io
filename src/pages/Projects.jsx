import { ProjectCard } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { featuredProjects, otherProjects } from "../data/projectData";

const Projects = () => {
  return (
    <Section title="Projects" maxWidth="full">
      <h3 className="text-primary font-mont text-xl font-semibold mb-1">
        Featured
      </h3>
      <ProjectCard
        items={featuredProjects}
        variant="featured"
        layoutIdPrefix="featured"
      />

      <h3 className="text-primary font-mont text-xl font-semibold mt-6 mb-1">
        All Projects
      </h3>
      <ProjectCard
        items={otherProjects}
        variant="default"
        layoutIdPrefix="all"
      />
    </Section>
  );
};

export default Projects;
