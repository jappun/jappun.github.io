const Home = ({ aboutRef }) => {
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col font-mont items-center justify-center h-screen px-6">
      <div className="text-primary w-full text-5xl sm:text-6xl md:text-7xl font-extrabold text-center">
        Jappun Dhillon
      </div>
      <p className="text-lg sm:text-xl text-center text-primary mt-4 max-w-2xl">
        UBC New Grad | Software Developer | Researcher
      </p>
      <p className="text-base sm:text-lg text-center text-primary/80 mt-3">
        Open to US-based SWE roles
      </p>

      <button
        type="button"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-24 text-primary hover:text-white transition-colors animate-bounce"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Home;
