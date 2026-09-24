import { RuledProjects, StickyNotes } from "../components/ProjectCard";
import { Section } from "../components/Section";
import { featuredProjects, otherProjects } from "../data/projectData";
import projectsTitle from "../img/sections/projects-ink.png";
import allProjectsTitle from "../img/sections/all-projects-ink.png";

const Projects = () => {
  return (
    <>
      <Section titleSrc={projectsTitle} titleAlt="Projects" rotate={-0.8}>
        <StickyNotes items={featuredProjects} />
      </Section>
      <Section titleSrc={allProjectsTitle} titleAlt="All Projects" rotate={0.7}>
        <RuledProjects items={otherProjects} />
      </Section>
    </>
  );
};

export default Projects;
