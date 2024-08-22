import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  flutter,
  html,
  css,
  reactjs,
  kotlin,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  firebase,
  swam_tech,
  shadiyana,
  jobify,
  upmeal_app,
  graysol,
  instagram,
  threejs,
  GDSC,
  community,
  easetour,
  yaruq,
  shahryar,
  hamza,
  faizan,
  insta_logo,
  linkedIn_logo,
  gmail,
  dodao,
  geokits,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Kotlin",
    icon: kotlin,
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
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "GeoKits",
    icon: geokits,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Leading mobile app development for GeoKits, developing a GIS-based app using Flutter, Firebase, Node.js, and Mapbox, displaying real-time natural event data on a map, managing all workflows and delivering a seamless user experience",
      "Enhanced real-time updates using WebSockets and Node.js, improving user engagement.",
      "Optimized load times and app performance through efficient coding practices.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "DODAO",
    icon: dodao,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - May 2024",
    points: [
      "Created DODAO's flagship website and four additional products using a single, efficient codebase with Next.js, significantly boosting productivity and scalability.",
      "Developed a highly dynamic solution, including a feature that allows users to launch their own websites in just 2-3 clicks, streamlining the user experience.",
      "Implemented robust database solutions with Prisma, GraphQL and PostgreSQL, ensuring efficient data management",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "AEC Softwares",
    icon: swam_tech,
    iconBg: "#383E56",
    date: "June 2023 - Sep 2023",
    points: [
      "Developed and maintained mobile applications using Flutter and Swift, contributing to two major projects.",
      "Led the development of a legal app for a UK-based company, enabling lawyers to manage client data digitally with Flutter, Node.js, MongoDB, and Hive for offline storage.",
      "Built an iOS streaming and quiz app with rewards, using Swift, delivering a smooth user experience.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Shadiyana",
    icon: shadiyana,
    iconBg: "#E6DEDD",
    date: "July 2023 - Sep 2023",
    points: [
      "Developed key components of Shadiyana's main website and a dedicated event website for a major event in Islamabad, handling both frontend and backend using the MERN stack.",
      "Collaborated with cross-functional teams, including designers and product managers, to implement responsive design practices for an optimal user experience.",
      "Actively participated in code reviews, offering constructive feedback to enhance code quality."
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "SWAM Tech",
    icon: swam_tech,
    iconBg: "#383E56",
    date: "June 2022 - Oct 2022",
    points: [
      "Developed a community assistance app using Flutter and Firebase,enabling users to share and fulfill requests within a 10km radius.",
      "Integrated Google Maps API for real-time location-based services.",
      "Delivered the project under contract for one of NSTP NUST's major companies."
    ],
  },
  {
    title: "Mobile Application Lead",
    company_name: "GDSC NUST",
    icon: GDSC,
    iconBg: "#383E56",
    date: "Nov 2022 - Present",
    points: [
      "As the App Lead at GDSC NUST, I have been responsible for overseeing the entire mobile app development lifecycle, from ideation and design to development, testing, and deployment.",
      "I have worked closely with team members to provide mentorship and guidance, resulting in a high-performing team that consistently delivers top-quality results.",
      "This has allowed me to develop a comprehensive understanding of mobile app development and management.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "As an intern, he was able to showcase his technical expertise and strong communication skills, which were essential to the successful delivery of our MVP.",
    name: "Shahryar Khan",
    designation: "CEO",
    company: "SWAM Tech",
    image: shahryar,
  },
  {
    testimonial:
      "During his tenure with our school, he displayed exceptional professionalism, work ethic, and dedication to his role. Highly recommend her for any future endeavors.",
    name: "Dorothea Stubs",
    designation: "Head",
    company: "Excalibur",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "He demonstrated exceptional skills in software development, which were evident in the timely delivery of the Minimum Viable Product (MVP) for the launch.",
    name: "Yaruq Nadeem",
    designation: "Head",
    company: "NSTP",
    image: yaruq,
  },
  {
    testimonial:
      "I hired Ali raza for my website and he delivered everything requested. Cooperative and friendly.I Recommend.",
    name: "Muhammad Hamza",
    designation: "CEO",
    company: "Graysol",
    image: hamza,
  },
  {
    testimonial:
      "I hired Ali for my mobile app, and he delivered everything I asked for. I'm happy with his cooperative and friendly approach. Highly recommended.",
    name: "Faizan Naseem",
    designation: "President",
    company: "CSS GCU",
    image: faizan,
  },
];

const projects = [
  {
    name: "EaseTour",
    description:
      "A ride sharing mobile application that allows customers to book rides and have realtime chat and ride visualization features. Users can share rides to share fare among them.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Google Maps API",
        color: "green-text-gradient",
      },
    ],
    image: easetour,
    source_code_link: "https://github.com/ALIRAZA17/EaseTour",
  },
  {
    name: "Graysol",
    description:
      "Developed a comprehensive company website using the MERN stack, showcasing all aspects of the business. Implemented a dynamic content management system to allow easy updates and scalability.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Three JS",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "pink-text-gradient",
      },
    ],
    image: graysol,
    source_code_link: "https://graysol.co/",
  },
  {
    name: "Jobify",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "JS",
        color: "blue-text-gradient",
      },

      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobify,
    source_code_link: "https://github.com/ALIRAZA17/web-project",
  },
  {
    name: "Marham",
    description:
      "A platform to connect people in need with those who are willing and able to provide assistance.  Specifically designed to help those who are struggling financially.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "GMAPI",
        color: "pink-text-gradient",
      },
    ],
    image: community,
    source_code_link: "https://github.com/ALIRAZA17/Marham",
  },
  {
    name: "Upmeal",
    description:
      "A platform where you can avail discounts on every item on the menu. Upmeal will connect hungry tummies to empty tables by providing time-based discounts to users.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: upmeal_app,
    source_code_link: "https://github.com/ALIRAZA17/upmeal_app",
  },
  {
    name: "Instagram Clone",
    description:
      "The mobile application serves as a social media platform that allows users to share photos and videos with their followers, similar to the popular social media app Instagram.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: instagram,
    source_code_link: "https://github.com/ALIRAZA17/Instagram-clone-Flutter",
  },
];

const options = [
  {
    logo: linkedIn_logo,
    link: "https://www.linkedin.com/in/ali-raza-296793219/",
  },
  {
    logo: insta_logo,
    link: "https://www.instagram.com/m_aliiii_5/",
  },
  {
    logo: gmail,
    link: "mailto:ialidar2001@gmail.com",
  },
];

export { services, technologies, experiences, testimonials, projects, options };
