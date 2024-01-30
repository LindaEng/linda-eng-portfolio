import {
    mobile,
    backend,
    creator,
    web,
    elixir,
    javascript,
    typescript,
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
      url: "src/assets/resume.pdf"
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
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Elixir",
      icon: elixir,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Elixir Developer / Software Engineering Coaching",
      company_name: "Multiverse",
      icon: multiverse,
      iconBg: "#383E56",
      date: "May 2021 - Present",
      points: [
        "Refined the learning management platform with functional programming in Elixir, achieving a 40% scalability boost and cutting latency by 50%, significantly improving user engagement and satisfaction.",
        "Built React and RESTful APIs aimed at streamlining content access and improving navigational ease, ensuring seamless performance and usability for a user base exceeding 10,000 individuals.",
        "Led the successful migration of data from diverse platforms to establish a unified single source of truth, streamlining data access and enhancing data accuracy and consistency across the organization.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "DykeBeer",
      icon: dykebeer,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Led the complete design and development of Dyke Beer's website, from conceptualization to deployment, creating a visually appealing and user-friendly online presence.",
        "Implemented robust e-commerce capabilities, including shopping cart, secure payment processing, and inventory management, driving online sales and enhancing customer experience.",
        "Leveraged interactive elements and user-friendly navigation to improve user engagement, resulting in increased visitor retention and higher conversion rates",
        "Ensured the website's scalability and performance by employing best practices in web development, resulting in a responsive and reliable platform capable of handling high traffic loads.",
      ],
    },
    {
      title: "Computer Science Instructor",
      company_name: "NYC Department of Education",
      icon: nycDOE,
      iconBg: "#E6DEDD",
      date: "September 2013 - January 2020",
      points: [
        "Fostered a passion for computer science by inspiring and mentoring students through engaging lessons, hands-on projects, and real-world applications.",
        "Designed, updated, and expanded the computer science curriculum to align with industry trends and educational standards, ensuring students received a comprehensive and relevant education.",
        "•Solid understanding of data structures, algorithms, and programming languages, gained through teaching and practical application.",
        "Cultivated students' analytical thinking and problem-solving abilities by challenging them with complex coding projects, algorithms, and logical exercises.",
        "Guided students to excel in computer science competitions and exams, resulting in high scores, awards, and recognition at local and regional levels, showcasing the program's excellence."
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
        {
          name: "AWS S3",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: s3,
      source_code_link: "https://github.com/LindaEng/upload-direct",
    },
    {
      name: "Elixir CRUD",
      description:
        "Elixir CRUD is a robust and efficient web application built with Phoenix live view for the frontend and Elixir for the backend. Leveraging the power of Elixir and Phoenix Framework, it ensures high performance and fault tolerance, making it ideal for applications that require real-time updates and concurrent processing.",
      tags: [
        {
          name: "Elixir",
          color: "blue-text-gradient",
        },
        {
          name: "Phoenix",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: elixirCRUD,
      source_code_link: "https://github.com/LindaEng/elixir_discuss_app",
    },
    {
      name: "Synth",
      description: "A synthesizer built with Tone.js and React. Designed with Material UI.",
      tags: [
        {
          name: "Tone.js",
          color: "blue-text-gradient",
        },
        {
          name: "Material UI",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: synth,
      source_code_link: "https://github.com/LindaEng/Skyboxx",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };