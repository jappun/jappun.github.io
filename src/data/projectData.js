import hervision from "../img/projects/hervision.png";
import workoutjournal from "../img/projects/workoutjournal.png";
import erdiagram from "../img/projects/ER-diagram.png";
import dictionary from "../img/projects/dictionary.png";
import insightubc from "../img/projects/insightubc.png";
import gather from "../img/projects/gather.png";
import busbuddies from "../img/projects/busbuddies.png";
import aiblocker from "../img/projects/aiblocker.png";
import storywizard from "../img/projects/storywizard.png";
import storywizardV2 from "../img/projects/storywizard-v2.png";
import nytCrosswords from "../img/projects/crossword.svg";
import nytCrosswordsV2 from "../img/projects/crossword-v2.png";
import drumPractice from "../img/projects/drum-practice.png";

export const projects = [
  {
    id: "drum-practice",
    title: "Drum Practice",
    featured: true,
    year: 2026,
    status: "in progress",
    tech: ["Python", "PySide6", "MIDI", "Anthropic / Open AI / Gemini APIs", "pytest"],
    description:
      "Desktop app that plays a drumbeat, listens to your electronic kit, and scores your playing.",
    bullets: [
      "Reads drumkit input over USB and scores every hit, with latency calibration",
      "Supports a grid view and real notation view with the Bravura music font",
      "Turns a photo of a groove into a playable beat with Claude, GPT or Gemini, plus a script to compare their accuracy",
      "Next up: import songs from MusicXML, a Drum Hero game mode, a setup wizard for any kit, and ghost notes and accents.",
    ],
    img: drumPractice,
    github: "https://github.com/jappun/drum-practice",
  },
  {
    id: "nyt-crosswords",
    title: "NYT Crosswords",
    featured: true,
    year: 2026,
    tech: ["Python", "Streamlit", "Pandas", "Plotly"],
    description:
      "Scraped 30+ years of NYT crossword data into a Streamlit dashboard for word frequency analysis, search, and per-puzzle rankings.",
    bullets: [
      "Scraped ~1M clue–answer rows from 11.9k Daily, 4.3k Mini and every Midi puzzle",
      "Per-100-puzzle rates so the new Midi isn't dwarfed by 30 years of Daily",
      "Dashboard to browse top answers, filter by type, year and length, and look up any word",
      "Settled my original curiosity of how often OREO comes up (428 times), which inspired the project",
    ],
    img: nytCrosswords,
    imgV2: nytCrosswordsV2,
    previewBg: "bg-white",
    imageFit: "object-contain",
    github: "https://github.com/jappun/NYT-crosswords",
    live: "https://nytcrosswords.streamlit.app/",
  },
  {
    id: "gather",
    title: "Gather",
    featured: true,
    year: 2025,
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    description:
      "Full-stack event planning web app where users can host events, invite friends, assign tasks, and split expenses.",
    bullets: [
      "Guests join an event with a shareable join code",
      "Tasks with assignees and status, plus an expense list for splitting costs",
      "Next.js API routes for events, guests, tasks and expenses on a Supabase database",
      "Next up: a poll for picking the date, and deploying it",
    ],
    img: gather,
    github: "https://github.com/jappun/gather",
  },
  {
    id: "storywizard-ai",
    title: "StoryWizard AI",
    featured: false,
    year: 2025,
    tech: ["Python", "FastAPI", "Gemini API", "Vite", "React", "Tailwind CSS"],
    description:
      "AI-powered full-stack web application that guides primary students through basic plot structure and generates a personalized story.",
    img: storywizard,
    imgV2: storywizardV2,
    github: "https://github.com/jappun/storywizard-ai",
  },
  {
    id: "busbuddies",
    title: "BusBuddies",
    featured: false,
    year: 2025,
    context: "youCode hackathon · 24h",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Figma"],
    description:
      "Matching platform for UBC students to find study buddies on their daily commute. Users with UBC student emails can create a profile, search for matches, and chat with potential buddies. Built in 24 hours at UBC's youCode hackathon.",
    img: busbuddies,
    github: "https://github.com/joy1234567891/BusBuddies",
  },
  {
    id: "should-i-ai",
    title: "should i ai?",
    featured: false,
    year: 2025,
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "Chrome extension that temporarily blocks AI tools for a user-set time period to motivate intentional AI usage and prevent overreliance.",
    img: aiblocker,
    github: "https://github.com/jappun/ai-blocker",
    live: "https://chromewebstore.google.com/detail/should-i-ai/heakodlbffjmkafelmngkbdniebdboml",
  },
  {
    id: "hervision",
    title: "HerVision",
    featured: false,
    year: 2024,
    context: "girlCode hackathon · 24h",
    tech: ["Swift", "xCode"],
    description:
      "iOS application that creates a personalized and social e-commerce experience for Aritzia customers. Users can search Aritzia's inventory, add items to their digital wardrobe, and upload images of their outfits to a community explore page. Built in 24 hours at UBC's girlCode hackathon.",
    img: hervision,
    github: "https://github.com/jappun/her-vision",
  },
  {
    id: "lexilog",
    title: "LexiLog",
    featured: false,
    year: 2024,
    tech: ["HTML", "CSS", "JavaScript", "Wordnik API"],
    description:
      "Powered by the Wordnik API, LexiLog is a personal dictionary Chrome Extension. Users can search and save words with their preferred definition and any personal notes.",
    img: dictionary,
    github: "https://github.com/jappun/dict-chrome",
  },
  {
    id: "community-db",
    title: "Community Centre Database",
    featured: false,
    year: 2024,
    context: "UBC course project",
    tech: ["SQL", "PHP", "Figma"],
    description:
      "Web-based database application that simulates a community centre management system. Authorized administrators can access and maintain data regarding facilities, equipment, customers and employees.",
    img: erdiagram,
    github: "https://github.com/jappun/community-db",
  },
  {
    id: "workout-journal",
    title: "Workout Journal",
    featured: false,
    year: 2023,
    context: "UBC course project",
    tech: ["Java", "JSON", "JUnit"],
    description:
      "Java GUI where users can track their workouts. Complete with data persistence.",
    img: workoutjournal,
    github: "https://github.com/jappun/workout-journal",
  },
  // {
  //   id: "insightubc",
  //   title: "InsightUBC",
  //   featured: false,
  //   tech: ["TypeScript", "JavaScript", "React", "Postman"],
  //   description:
  //     "Fullstack web application where users can filter through historical UBC course data. This was built for a UBC course, so I cannot share the code. Demo video coming soon!",
  //   img: insightubc,
  // },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);

export default projects;
