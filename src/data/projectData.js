import hervision from "../img/hervision.png";
import workoutjournal from "../img/workoutjournal.png";
import erdiagram from "../img/ER-diagram.png";
import dictionary from "../img/dictionary.png";
import insightubc from "../img/insightubc.png";
import gather from "../img/gather.png";
import busbuddies from "../img/busbuddies.png";
import aiblocker from "../img/aiblocker.png";
import storywizard from "../img/storywizard.png";
import nytCrosswords from "../img/crossword.svg";

export const projects = [
  {
    id: "nyt-crosswords",
    title: "NYT Crosswords",
    featured: true,
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    description:
      "Scraped 30+ years of NYT daily, mini, and midi crosswords into a Streamlit dashboard for word frequency analysis, search, and per-puzzle rankings.",
    img: nytCrosswords,
    previewBg: "bg-white",
    imageFit: "object-contain",
    github: "https://github.com/jappun/NYT-crosswords",
    live: "https://nytcrosswords.streamlit.app/",
  },
  {
    id: "gather",
    title: "Gather",
    featured: true,
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    description:
      "Full-stack event planning web app where users can host events, invite friends, assign tasks, and split expenses.",
    img: gather,
    github: "https://github.com/jappun/gather",
  },
  {
    id: "storywizard-ai",
    title: "StoryWizard AI",
    featured: true,
    tech: ["Python", "FastAPI", "Gemini API", "Vite", "React", "Tailwind CSS"],
    description:
      "AI-powered full-stack web application that guides primary students through basic plot structure and generates a personalized story.",
    img: storywizard,
    github: "https://github.com/jappun/storywizard-ai",
  },
  {
    id: "busbuddies",
    title: "BusBuddies",
    featured: false,
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Figma"],
    description:
      "Matching platform for UBC students to find study buddies on their daily commute. Users with UBC student emails can create a profile, search for matches, and chat with potential buddies.",
    img: busbuddies,
    github: "https://github.com/joy1234567891/BusBuddies",
  },
  {
    id: "workout-journal",
    title: "Workout Journal",
    featured: false,
    tech: ["Java", "JSON", "JUnit"],
    description:
      "Java GUI where users can track their workouts. Complete with data persistence.",
    img: workoutjournal,
    github: "https://github.com/jappun/workout-journal",
  },
  {
    id: "hervision",
    title: "HerVision",
    featured: false,
    tech: ["Swift", "xCode"],
    description:
      "HerVision is an iOS application that creates a personalized and social e-commerce experience for Aritzia customers. Users can search Aritzia's inventory, add items to their digital wardrobe, and upload images of their outfits to a community explore page.",
    img: hervision,
    github: "https://github.com/jappun/her-vision",
  },
  {
    id: "community-db",
    title: "Community Centre Database",
    featured: false,
    tech: ["SQL", "PHP", "Figma"],
    description:
      "Web-based database application that simulates a community centre management system. Authorized administrators can access and maintain data regarding facilities, equipment, customers and employees.",
    img: erdiagram,
    github: "https://github.com/jappun/community-db",
  },
  {
    id: "lexilog",
    title: "LexiLog",
    featured: false,
    tech: ["HTML", "CSS", "JavaScript", "Wordnik API"],
    description:
      "Powered by the Wordnik API, LexiLog is a personal dictionary Chrome Extension. Users can search and save words with their preferred definition and any personal notes.",
    img: dictionary,
    github: "https://github.com/jappun/dict-chrome",
  },
  {
    id: "should-i-ai",
    title: "should i ai?",
    featured: false,
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Chrome extension that temporarily blocks AI tools for a user-set time period to motivate intentional AI usage and prevent overreliance.",
    img: aiblocker,
    github: "https://github.com/jappun/ai-blocker",
    live: "https://chromewebstore.google.com/detail/should-i-ai/heakodlbffjmkafelmngkbdniebdboml",
  },
  {
    id: "insightubc",
    title: "InsightUBC",
    featured: false,
    tech: ["TypeScript", "JavaScript", "React", "Postman"],
    description:
      "Fullstack web application where users can filter through historical UBC course data. This was built for a UBC course, so I cannot share the code. Demo video coming soon!",
    img: insightubc,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export default projects;
