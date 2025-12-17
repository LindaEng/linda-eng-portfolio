import {
  mobile,
  njpc,
  backend,
  creator,
  web,
  elixir,
  aws,
  javascript,
  typescript,
  openAI,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  multiverse,
  nycDOE,
  dykebeer,
  threejs,
  elixirCRUD,
  steven,
  raz,
  loretta,
  synth,
  s3
} from "../assets";

export const navLinks = [
  {
    id: "resume",
    title: "Resume",
    url: "src/assets/Linda_Eng2025.pdf"
  },
  {
    id: "linkedIn",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/linda-eng/"
  },
  {
    id: "about",
    title: "About",
    url: "#about",
  },
  {
    id: "work",
    title: "Work",
    url: "#work",
  },
  {
    id: "projects",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "contact",
    title: "Contact",
    url: "#contact",
  }
];

const services = [
  { title: "AI Product Engineering", icon: web },
  { title: "React Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Web Developer", icon: creator },
];

const technologies = [
  { name: "OpenAI", icon: openAI},
  { name: "AWS Cloud", icon: aws},
  { name: "TypeScript", icon: typescript },
  { name: "React", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Redux Toolkit", icon: redux },
  { name: "Elixir", icon: elixir },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "MongoDB", icon: mongodb },
  // { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "New Jersey Parent Caucus – Legal Service Non-Profit",
    icon: njpc,
    iconBg: "#383E56",
    date: "May 2024 – Present",
    points: [
      "Built responsive, modular components in React and TypeScript from Figma designs, improving maintainability and load times across user and admin dashboards",
      "Implemented secure login and token-based authentication using OAuth and bcrypt, strengthening protection against token leakage and brute-force attacks",
      "Designed and optimized RESTful APIs with Express.js and Postgres, adding input validation, access control, and error sanitization to minimize security risks",
      "Collaborated with stakeholders to define MVP features and delivered a production-ready portal for 500+ users on a tight volunteer timeline"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Multiverse - AI EdTech Start Up",
    icon: multiverse,
    iconBg: "#383E56",
    date: "May 2021 - August 2024",
    points: [
      "Delivered UI enhancements that improved responsiveness and usability across a high-traffic LMS serving thousands of learners",
      "Developed GPT-powered personalization features via secure API architecture (RBAC, token management), increasing user engagement",
      "Improved system reliability by refactoring REST endpoints with structured logging, rate limiting, and clearer error surfaces",
      "Strengthened release quality by implementing CI/CD pipelines and automated testing coverage",
      "Designed and deployed AWS microservices supporting scalable profile creation and distributed workflows",
      "Mentored peers on system design, debugging, and secure coding, elevating team output"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Nestor – Real Estate SaaS Startup",
    icon: dykebeer,
    iconBg: "#383E56",
    date: "January 2017 — February 2019",
    points: [
      "Coordinated bi-weekly release cycles with design, QA, and product, ensuring features shipped on schedule with minimal defects",
      "Modernized a legacy frontend codebase, reducing load times and improving maintainability for faster iteration",
      "Migrated file handling to AWS S3 using presigned URLs, increasing upload reliability and strengthening data governance"
    ],
  },
  {
    title: "Lead Developer",
    company_name: "DBTO - NYC Local Beer Distribution Company",
    icon: dykebeer,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Built a lightweight full-stack web application that mapped product distribution across New York City, helping the team track inventory, visibility, and retailer demand",
      "Designed and implemented a searchable storefront dashboard so customers and retailers could easily find nearby stockists, improving brand engagement and inbound interest",
      "Integrated third-party APIs and geolocation tools to display real-time availability, reducing manual tracking effort for the business owner"
    ],
  },
  {
    title: "Computer Science Instructor",
    company_name: "NYC Department of Education",
    icon: nycDOE,
    iconBg: "#E6DEDD",
    date: "September 2013 - January 2020",
    points: [
      "Designed and led a full-year computer science curriculum, managing projects across multiple classrooms and aligning instruction with College Board standards",
      "Built strong relationships with students, parents, and administrators, translating complex technical concepts for diverse, non-technical audiences",
      "Mentored underrepresented students in tech pathways, demonstrating calm leadership under pressure while preparing them for AP exams and enrichment programs"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "An incredibly talented and gifted developer. Linda is a pleasure to work with and a true professional.",
    name: "Razvan Espiritu",
    designation: "Senior Engineer Manager",
    company: "Multiverse",
    image: raz,
  },
  {
    testimonial:
      "Linda is a skilled software engineer. Has aptitude for learning new technologies and is a great team player.",
    name: "Steven Eng",
    designation: "Software Engineer",
    company: "JP Morgan Chase",
    image: steven,
  },
  {
    testimonial:
      "Linda is a great developer. She is always willing to help and is a great asset to the team.",
    name: "Loretta Chung",
    designation: "CEO",
    company: "DB Takeover",
    image: loretta,
  },
];

const projects = [
  {
    name: "Direct-Upload",
    description:
      "Direct-Upload is a full-stack web application that allows users to upload multimedia to an AWS S3 bucket. It is built with React, Node, Express, and AWS S3.",
    tags: [
      { name: "AWS S3", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: s3,
    source_code_link: "https://github.com/LindaEng/upload-direct",
  },
  {
    name: "Elixir CRUD",
    description:
      "Elixir CRUD is a robust and efficient web application built with Phoenix live view for the frontend and Elixir for the backend.",
    tags: [
      { name: "Elixir", color: "blue-text-gradient" },
      { name: "Phoenix", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: elixirCRUD,
    source_code_link: "https://github.com/LindaEng/elixir_discuss_app",
  },
  {
    name: "Synth",
    description:
      "A synthesizer built with Tone.js and React. Designed with Material UI.",
    tags: [
      { name: "Tone.js", color: "blue-text-gradient" },
      { name: "Material UI", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
    ],
    image: synth,
    source_code_link: "https://github.com/LindaEng/Skyboxx",
  },
];

export { services, technologies, experiences, testimonials, projects };
