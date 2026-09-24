import { useRef } from "react";
import NavBar from "../components/NavBar";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const Portfolio = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="v2 min-h-screen">
      <section ref={homeRef} id="home" className="flex min-h-[100svh] flex-col">
        <NavBar
          homeRef={homeRef}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          projectsRef={projectsRef}
        />
        <Home aboutRef={aboutRef} />
      </section>
      <section ref={aboutRef} id="about">
        <About />
      </section>
      <section ref={experienceRef} id="experience">
        <Experience />
      </section>
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      <p className="px-4 pb-10 pt-4 text-center text-sm">
        © 2026 Jappun Dhillon. All rights reserved.
      </p>
    </div>
  );
};

export default Portfolio;
