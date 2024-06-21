import { ProjectCard } from "../components/ProjectCard"
import { projects } from "../data/projectData";



const Projects = () => {
    return (
    
    <div className="min-h-screen">
    <div className="flex flex-col items-center justify-center text-primary font-mont w-full text-3xl font-bold text-center">
            Projects
    </div>
    <div className="max-w-5xl mx-auto px-8">
      <ProjectCard items={projects} />
    </div>
    </div>

    
);
};
export default Projects;