import React, { useEffect, useRef } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';




const generateRandomPercent = (min = 0, max = 100) => {
  const randomInteger = Math.floor(Math.random() * (max + 1));
  return `${randomInteger}%`;
};

const generateRandomDelay = (interval = 3) => {
  const randomInteger = Math.random() * (interval + 1);
  return `${randomInteger}s`;
};

const createStar = () => {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = generateRandomPercent();
  star.style.left = generateRandomPercent();
  star.style.animationDelay = generateRandomDelay();
  return star;
};

const renderStars = (amount = 30) => {
  const container = document.getElementById('container');
  const starsArray = Array(amount).fill().map(() => createStar());
  container.append(...starsArray);
};


const App = () => {
  useEffect(() => {
    renderStars();
  }, []);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);



  return (
    // Stars
    <div id="container" className="fixed top-0 left-0 w-screen h-screen bg-darkblue overflow-hidden">
      {/* Content */}
      <div className="relative z-10 h-full overflow-y-auto">
        <NavBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} />
        <section ref={homeRef}>
          <Home />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <div classNAme="w-full">
          <p className="text-center text-primary">© 2025 Jappun Dhillon. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default App;
