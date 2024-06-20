import { ProjectCard } from "../components/ProjectCard"


export const projects = [
  {
    title: "Project 1",
    tech: ["Figma", "Javascript", "Typescript", "Java","Python", "SQL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      github: "https://stripe.com",
      live: "https://netflix.com"
  },
  {
    title: "Project 2",
    tech: ["Java", "JSON"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      github: "https://netflix.com",
      live: "https://netflix.com"
  },
  {
    title: "Project 3",
    tech: ["Python", "Java", "TypeScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      github: "https://geoogle.com",
      live: "https://netflix.com"
  },
  {
    title: "Project 4",
    tech: ["Figma", "Javascript", "Typescript", "Java","Python"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    live: "https://netflix.com"
  },
  {
    title: "Project 5",
    tech: ["Figma", "Javascript", "Typescript", "Java", "Python"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    github: "https://geooglge.com",
    live: "https://netflix.com"
  },
  {
    title: "Project 6",
    tech: ["Figma", "Javascript", "Typescript", "Java", "Python"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    github: "https://gogogle.com",
  },
];


const Projects = () => {
    return (
    
    <div className="min-h-screen">
    <div className="flex flex-col items-center justify-center text-primary font-main-font w-full text-3xl font-bold text-center">
            Projects
    </div>
    <div className="max-w-5xl mx-auto px-8">
      <ProjectCard items={projects} />
    </div>
    </div>

    
);
};
export default Projects;