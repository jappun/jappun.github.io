import hervision from "../img/hervision.png"
import workoutjournal from "../img/workoutjournal.png"
import erdiagram from "../img/ER-diagram.png"
import dictionary from "../img/dictionary.png"
import insightubc from "../img/insightubc.png"

export const projects = [
  {
    title: "HerVision",
    tech: ["Swift", "xCode"],
    description:
    "HerVision is an iOS application that creates a personalized and social e-commerce experience for Aritzia customers. Users can search Aritzia's inventory, add items to their digital wardrobe, and upload images of their outfits to a communtiy explore page.",
    img: hervision,
      github: "https://github.com/jappun/her-vision",
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
    title: "Personal Dictionary",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A Chrome Extension where users can search and save word, with definitions and their own notes. Powered by the Wordnik API",
      img: dictionary,
      github: "https://github.com/jappun/dict-chrome"
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
    title: "InsightUBC",
    tech: ["TypeScript", "JavaScript", "React", "Postman"],
    description:
      "Fullstack web application where users can filter through historical UBC course data.",
      img: insightubc,
  },
];

export default projects;