import React, { useEffect } from 'react';
import Home from './pages/Home'

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

  return (
  <div id="container" className="flex justify-center items-center h-screen">
    <div>
    <Home />
    </div>
  </div>
  );
};

export default App;
