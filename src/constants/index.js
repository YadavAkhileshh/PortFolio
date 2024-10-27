import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated Full Stack Developer with six months of practical experience in building robust and scalable web applications. My expertise encompasses both front-end technologies, including React and Next.js, and back-end technologies such as Node.js, Express, and MongoDB. I am also the creator of LinkShalaa, a SaaS platform designed to simplify web development. My aim is to use my skills to develop innovative solutions that foster business growth and provide exceptional user experiences.`;

export const ABOUT_TEXT = `I’m a full stack developer with a year of experience in building web applications. I work with tools like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My interest in web development started from a curiosity about how things work and has grown into a rewarding career.

I enjoy solving problems, working with teams, and learning new technologies. Outside of coding, I stay active and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: " Full Stack Developer",
    company: "Craftify_AI",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "Javascript",
      "React.js",
      "Next.js",
      "mongoDB",
      "HTML5",
      "CSS",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "CodeClause",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL", "React"],
  },
  {
    year: "2022 - 2023",
    role: "Graphic Designer",
    company: "WorkEase",
    description: `Worked as a graphic designer `,
    technologies: ["Figma", "Spline", "Canva", "Editing"],
  },
  {
    year: "2019-Present",
    role: "Content Creator",
    company: "Youtube",
    description: `Making my own content `,
    technologies: ["CapcutPc", "Internet"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "NostalgicCalc",
    description: "Vintage Calculator",
    image: project2,
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    url: "https://65b412e8d130b80c80e1037f--cerulean-phoenix-c9b368.netlify.app/",
    github: "https://github.com/user/project1",
    category: "Web",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart,.",
    image: project1,
    technologies: ["HTML", "CSS"],
    url: "https://65b4256a1cb91314dee8c1d0--fabulous-sprinkles-d33d07.netlify.app/",
    github: "https://github.com/user/project2",
    category: "Web",
  },
  {
    title: "Portfolio Website",
    image: project3,
    url: "https://65ba2ee42c9f7dc1f83033ad--loquacious-narwhal-df55ce.netlify.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    github: "https://github.com/",
    category: "Web",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    title: "Neumo linktree",
    image: project4,
    url: "https://65b42ee7b6342019da35ad5b--luminous-cajeta-e291c5.netlify.app/ ",
    description: "A clone of Linktree using Neumorphism.",
    github: "https://github.com/",
    category: "Web",
    technologies: ["HTML", "CSS"],
  },
];

export const CONTACT = {
  email: "ayadavvisionnary@gmail.com",
  phoneNo: "+91 91376 65426 ",
  address: " Pune ",
};
