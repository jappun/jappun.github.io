import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const ProjectCard = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
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
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle title={item.title} github={item.github} live={item.live}/>
            <CardImage isHovered={hoveredIndex === idx} description={item.description}/>
            <CardTechStack tech={item.tech} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden bg-lighterSky border border-transparent group-hover:border-slate-700 relative z-20", className)}>
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, title, github, live }) => {
  return (
    <div className="flex justify-between">
      <h4 className={cn("text-primary font-mont font-bold tracking-wide", className)}>
        {title}
      </h4>
      <div className="flex items-center gap-2">
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
          {/* <svg className="h-6 w-6 fill-primary" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M32.032 16c0-8.501-6.677-15.472-15.072-15.969-0.173-0.019-0.346-0.032-0.523-0.032-0.052 0-0.104 0.005-0.156 0.007-0.093-0.002-0.186-0.007-0.281-0.007-8.84 0-16.032 7.178-16.032 16.001s7.192 16.001 16.032 16.001c0.094 0 0.188-0.006 0.281-0.008 0.052 0.002 0.104 0.008 0.156 0.008 0.176 0 0.349-0.012 0.523-0.032 8.395-0.497 15.072-7.468 15.072-15.969zM29.049 21.151c-0.551-0.16-1.935-0.507-4.377-0.794 0.202-1.381 0.313-2.84 0.313-4.357 0-1.196-0.069-2.354-0.197-3.469 3.094-0.37 4.45-0.835 4.54-0.867l-0.372-1.050c0.695 1.659 1.080 3.478 1.080 5.386 0 1.818-0.352 3.555-0.987 5.151zM8.921 16c0-1.119 0.074-2.212 0.21-3.263 1.621 0.127 3.561 0.222 5.839 0.243v6.939c-2.219 0.021-4.114 0.111-5.709 0.234-0.22-1.319-0.34-2.715-0.34-4.154zM16.967 2.132c2.452 0.711 4.552 4.115 5.492 8.628-1.512 0.12-3.332 0.209-5.492 0.229v-8.857zM14.971 2.156v8.832c-2.136-0.021-3.965-0.109-5.502-0.226 0.96-4.457 3.076-7.836 5.502-8.606zM14.971 21.913l0 7.929c-2.263-0.718-4.256-3.705-5.293-7.719 1.492-0.11 3.253-0.189 5.292-0.21zM16.967 29.868l-0-7.955c2.061 0.020 3.814 0.102 5.288 0.217-1.019 4.067-3 7.076-5.288 7.738zM16.967 19.92l0-6.939c2.291-0.021 4.218-0.118 5.818-0.25 0.131 1.053 0.203 2.147 0.203 3.268 0 1.442-0.116 2.84-0.329 4.16-1.575-0.128-3.462-0.219-5.692-0.24zM28.588 9.81c-0.302 0.094-1.564 0.453-4.094 0.751-0.564-2.998-1.584-5.561-2.91-7.412 3.048 1.325 5.535 3.697 7.005 6.661zM11.213 2.831c-1.632 1.873-2.963 4.568-3.691 7.754-2.265-0.245-3.623-0.534-4.166-0.665 1.585-3.27 4.407-5.836 7.856-7.088zM2.614 11.787c0.385 0.104 1.841 0.467 4.549 0.766-0.155 1.107-0.24 2.26-0.24 3.447 0 1.509 0.136 2.96 0.383 4.334-2.325 0.251-3.755 0.552-4.396 0.706-0.607-1.566-0.944-3.264-0.944-5.041 0-1.467 0.228-2.883 0.649-4.213zM3.784 22.886c0.727-0.154 2.029-0.39 3.956-0.591 0.759 2.803 1.993 5.175 3.473 6.874-3.16-1.148-5.79-3.398-7.429-6.282v0zM21.583 28.849c1.195-1.665 2.14-3.907 2.728-6.525 1.982 0.227 3.226 0.494 3.853 0.652-1.5 2.596-3.808 4.669-6.581 5.873z"></path> </g></svg> */}
       {/* <svg className="h-7 w-7 fill-primary hover:fill-white" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path  d="M33,1.832V16.05c3.678-0.095,7.227-0.706,10.573-1.775C40.982,9.398,37.362,5.155,33,1.832z"></path> <path  d="M46.361,15.408c2.198,4.789,3.476,10.085,3.613,15.667h14c-0.245-7.968-3.396-15.202-8.439-20.675 C52.73,12.446,49.653,14.141,46.361,15.408z"></path> <path  d="M45.479,13.606c3.095-1.175,5.99-2.748,8.638-4.646c-5.278-5.051-12.278-8.312-20.035-8.811 C38.809,3.722,42.718,8.313,45.479,13.606z"></path> <path  d="M49.975,33.075c-0.153,6.246-1.736,12.134-4.438,17.354c3.153,1.134,6.117,2.66,8.846,4.508 c5.71-5.592,9.328-13.303,9.592-21.861H49.975z"></path> <path  d="M47.975,33.075H33v15.025c3.684,0.091,7.244,0.672,10.615,1.693C46.264,44.78,47.818,39.103,47.975,33.075z "></path> <path  d="M31,33.075H16.025c0.156,6.027,1.711,11.705,4.359,16.719c3.371-1.021,6.932-1.603,10.615-1.693V33.075z"></path> <path  d="M33,62.318c3.844-2.929,7.113-6.569,9.609-10.731c-3.062-0.889-6.282-1.4-9.609-1.486V62.318z"></path> <path d="M33,31.075h14.975c-0.139-5.346-1.377-10.416-3.504-14.993C40.847,17.271,36.997,17.951,33,18.05V31.075z"></path> <path d="M31,18.05c-3.997-0.099-7.848-0.779-11.471-1.968c-2.127,4.577-3.365,9.647-3.504,14.993H31V18.05z"></path> <path  d="M18.521,13.606c2.761-5.293,6.67-9.885,11.397-13.457c-7.757,0.499-14.757,3.76-20.035,8.812 C12.53,10.859,15.427,12.432,18.521,13.606z"></path> <path  d="M31,62.318V50.101c-3.327,0.086-6.548,0.598-9.609,1.486C23.887,55.749,27.156,59.391,31,62.318z"></path> <path d="M44.559,52.21c-2.683,4.592-6.251,8.599-10.476,11.79c7.156-0.46,13.668-3.271,18.778-7.671 C50.293,54.639,47.512,53.244,44.559,52.21z"></path> <path d="M19.441,52.209c-2.953,1.034-5.734,2.429-8.304,4.119c5.11,4.4,11.623,7.212,18.779,7.672 C25.692,60.809,22.124,56.802,19.441,52.209z"></path> <path d="M14.025,33.075h-14c0.264,8.559,3.882,16.27,9.592,21.861c2.729-1.848,5.692-3.374,8.846-4.508 C15.762,45.209,14.179,39.321,14.025,33.075z"></path> <path d="M31,1.832c-4.362,3.322-7.982,7.566-10.573,12.442c3.347,1.069,6.896,1.681,10.573,1.775V1.832z"></path> <path  d="M14.025,31.075c0.138-5.582,1.415-10.878,3.613-15.667c-3.292-1.268-6.369-2.962-9.174-5.008 c-5.043,5.473-8.194,12.707-8.439,20.675H14.025z"></path> </g> </g></svg>  */}
         <svg className="h-8 w-8 stroke-primary hover:stroke-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </a>

      )}

      </div>

    </div>

  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-4 text-primary tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

export const CardImage = ({ isHovered, description }) => {
  return (
    <div className="relative flex-1 flex self-end w-full aspect-square rounded-md overflow-hidden mt-4 bg-primary transition-all duration-300">
      <img
        src="src/img/Placeholder_Image.png"
        alt="Placeholder"
        className={`w-full h-full object-cover ${isHovered ? 'blur' : ''}`}
      />
      <p
        className={`absolute inset-0 flex items-center justify-center text-center p-4 bg-black bg-opacity-50 text-primary tracking-wide leading-relaxed text-sm transition-opacity duration-300 ${
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





