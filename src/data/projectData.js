import hervision from "../img/hervision.png"
import workoutjournal from "../img/workoutjournal.png"
import erdiagram from "../img/ER-diagram.png"
import dictionary from "../img/dictionary.png"
import insightubc from "../img/insightubc.png"
import portfolio from "../img/portfolio.png"
import gather from "../img/gather.png"
import busbuddies from "../img/busbuddies.png"
import aiblocker from "../img/aiblocker.png"


export const projects = [
  {
    title: "should i ai?",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
    "Chrome extension that temporarily blocks AI tools for a user-set time period to motivate intentional AI usage and prevent overreliance.",
    img: aiblocker,
      github: "https://github.com/jappun/ai-blocker",
      live: "https://chromewebstore.google.com/detail/should-i-ai/heakodlbffjmkafelmngkbdniebdboml"

  },
  {
    title: "Gather",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    description:
    "Full-stack event planning web app where you can host events, invite friends, assign tasks, and splits expenses.",
    img: gather,
      github: "https://github.com/jappun/gather",

  },
  {
    title: "Workout Journal",
    tech: ["Java", "JSON", "JUnit"],
    description:
      "Java GUI where users can track their workouts. Complete with data persistence.",
      img: workoutjournal,
      github: "https://github.com/jappun/workout-journal"
  },
  {
    title: "HerVision",
    tech: ["Swift", "xCode"],
    description:
    "HerVision is an iOS application that creates a personalized and social e-commerce experience for Aritzia customers. Users can search Aritzia's inventory, add items to their digital wardrobe, and upload images of their outfits to a communtiy explore page.",
    img: hervision,
      github: "https://github.com/jappun/her-vision",
  },
  {
    title: "Community Centre Database",
    tech: ["SQL", "PHP", "Figma"],
    description:
      "Web-based database application that simulates a community centre management system. Authorized adminstrators can access and maintain data regarding facilities, equipment, customers and employees.",
      img: erdiagram,
      github: "https://github.com/jappun/community-db",
  },
  {
    title: "BusBuddies",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase", "Figma"],
    description:
    "Matching platform for UBC students to find study buddies on their daily commute. Users with UBC student emails can create a profile, search for matches, and chat with potential buddies.",
    img: busbuddies,
      github: "https://github.com/joy1234567891/BusBuddies",

  },
  {
    title: "LexiLog",
    tech: ["HTML", "CSS", "JavaScript", "Worknik API"],
    description:
      "Powered by the Wordnik API, LexiLog is a personal dictionary Chrome Extension. Users can search and save words with their preferred definition and any personal notes.",
      img: dictionary,
      github: "https://github.com/jappun/dict-chrome"
  },
  {
    title: "InsightUBC",
    tech: ["TypeScript", "JavaScript", "React", "Postman"],
    description:
      "Fullstack web application where users can filter through historical UBC course data. This was built for a UBC course, so I cannot share the code. Demo video coming soon!",
      img: insightubc,
  },
  // {
  //   title: "Portfolio",
  //   tech: ["JavaScript", "Tailwind CSS", "React", "Vite"],
  //   description:
  //     "The website you're on now!",
  //     img: portfolio,
  //     github: "https://github.com/jappun/jappun.github.io"
  // },
];

export default projects;