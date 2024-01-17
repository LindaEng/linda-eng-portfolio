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
    meta,
    multiverse,
    nycDOE,
    dykebeer,
    carrent,
    jobit,
    tripguide,
    threejs,
    elixirCRUD,
    steven,
    raz
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume"
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
        "Engineered and maintained the Learning Management Platform, ensuring seamless performance and usability for a user base exceeding 10,000 individuals.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };