import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const ProjectCard = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-primary block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                // animate={{ opacity: 1, transition: { duration: 0.15 } }}
                // exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.0 }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle title={item.title} github={item.github} live={item.live}/>
            <CardImage isHovered={hoveredIndex === idx} description={item.description} img={item.img}/>
            <CardTechStack tech={item.tech} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-lighterSky bg-opacity-70 hover:bg-opacity-100 border border-transparent group-hover:border-slate-700 relative z-20", className)}>
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, title, github, live }) => {
  return (
    <div className="flex justify-between items-start">
      <h4 className={cn("text-primary font-mont font-bold tracking-wide mr-2", className)}>
        {title}
      </h4>
      <div className="flex gap-2">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <svg className="w-8 h-8 text-primary hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd"
              d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer"> 
         <svg className="h-8 w-8 stroke-primary hover:stroke-white fill-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>

      )}

      </div>

    </div>

  );
};


export const CardImage = ({ isHovered, description, img }) => {
  return (
    <div className="relative flex-1 flex self-end w-full aspect-square rounded-md overflow-hidden mt-4 bg-primary transition-all duration-300">
      <img
        src={img}
        alt="Project Image"
        className={`w-full h-full object-cover ${isHovered ? 'blur' : ''}`}
      />
      <p
        className={`absolute inset-0 block p-4 bg-black bg-opacity-50 text-white tracking-wide leading-relaxed text-sm transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {description}
      </p>
    </div>
  );
};


export const CardTechStack = ({ tech }) => {
  return (
    <div className="flex flex-wrap mt-4 gap-2">
      {tech.map((item, index) => (
        <div key={index} className="bg-primary text-sky rounded-md p-1 text-xs">
          {item}
        </div>
      ))}
    </div>
  );
};





