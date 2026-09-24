import ubcLogo from "../img/experience/ubc-logo.svg";
import abcFitnessLogo from "../img/experience/abc-fitness.jpeg";
import bathroomAppLogo from "../img/experience/bathroom-app-logo.jpeg";
import geeringUpLogo from "../img/experience/geering-up-square.png";
import pieLineLogo from "../img/experience/pieline.jpeg";

export const experiences = [
  {
    id: "pieline",
    company: "PieLine",
    role: "Software Engineer Intern",
    startDate: "Aug 2026",
    endDate: "Present",
    location: "Remote",
    logo: pieLineLogo,
    logoFit: "cover",
    bullets: [
      "Owned the analytics system end-to-end: built an LLM-powered pipeline to extract structured data from call transcripts, and replaced a single-page view with a 4-tab dashboard.",
      "Personalized caller experience by introducing customer memory and customizable agent greetings per restaurant.",
    ],
    tech: ["JavaScript", "React", "Next.js", "Supabase"],
  },
  {
    id: "ubc-nlp",
    company: "UBC Natural Language Processing",
    role: "Research Assistant",
    startDate: "Oct 2024",
    endDate: "Dec 2025",
    location: "Vancouver, BC",
    logo: ubcLogo,
    logoFit: "contain",
    logoScale: 1.08,
    logoPadding: "p-1",
    bullets: [
      {
        prefix: "Second author on a",
        links: [
          {
            label: "paper presented at ACM WebSci 2026",
            href: "https://dl.acm.org/doi/10.1145/3795766.3799754",
          }
        ],
        suffix: "and shared first authorship on a poster at COLM 2025."
      },
      "Built a GPT-4o prompting pipeline for entity recognition and a Playwright scraping pipeline for 4,000+ articles with automated error recovery.",
    ],
    tech: ["Python", "OpenAI", "scikit-learn", "BeautifulSoup", "Playwright", "Next.js"],
  },
  {
    id: "abc-fitness",
    company: "ABC Fitness",
    role: "Software Engineer Intern",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    location: "Remote",
    logo: abcFitnessLogo,
    logoFit: "cover",
    bullets: [
      "Migrated legacy code to React with Redux and RxJS, ensuring feature parity through 100% Jest unit test coverage.",
      "Identified a data sync bug affecting multiple product areas and designed a reusable solution adopted site-wide.",
    ],
    tech: ["TypeScript", "JavaScript", "React", "Redux", "RxJS", "Jest"],
  },
  {
    id: "bathroom-app",
    company: "Bathroom App",
    role: "Frontend Developer Intern",
    startDate: "May 2024",
    endDate: "Aug 2024",
    location: "Remote",
    logo: bathroomAppLogo,
    logoFit: "contain",
    logoPadding: "p-1",
    bullets: [
      "Implemented secure Gmail authentication with OAuth 2.0, enabling 500+ user sign-ups.",
      "Built modular React components and redesigned core UI elements with responsive animations.",
    ],
    tech: ["JavaScript", "Next.js", "React", "Supabase", "OAuth 2.0", "Tailwind CSS"],
  },
  {
    id: "geering-up",
    company: "Geering Up",
    role: "STEM Instructor",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    location: "Vancouver, BC",
    logo: geeringUpLogo,
    logoFit: "cover",
    logoScale: 1.18,
    bullets: [
      "Taught engineering and computer science fundamentals to 400+ students in grades 4–12.",
    ],
    tech: ["Python", "MongoDB", "Node.js", "JavaScript"],
  },
];

export default experiences;
