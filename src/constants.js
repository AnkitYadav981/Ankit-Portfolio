// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mcLogo from './assets/tech_logo/mc.png'
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import webverseLogo from './assets/company_logo/ibm.webp';


// Education Section Logo's
import starexLogo from './assets/education_logo/starex Logo.webp';
import hbseLogo from './assets/education_logo/HBSE logo.webp';

// Project Section Logo's
import taskManagerIMG from "./assets/work_logo/Student-task-manager.png"



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Render', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Remote Mentoring Internship",
      company: "IBM",
      date: "April 2025 - June 2025",
      desc: "Built a Python-based facial emotion detection system using computer vision and machine learning. Implemented face detection, emotion classification, and real-time prediction using camera input, gaining hands-on experience in OpenCV, and image processing.",
      skills: [
        "Python",
        "PyTorch",
        "Flask",
        "OpenCV"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: starexLogo,
      school: "Starex University, Gurugram",
      date: "Sept 2022 - present",
      grade: "",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology in computer science and engineering - B.Tech CSE",
    },
    {
      id: 1,
      img: hbseLogo,
      school: "DronaCharya Sr. Sec. School, Gurugram",
      date: "Apr 2017 - March 2018",
      grade: "74.2%",
      desc: "I completed my class 12 education from DronaCharya Sr. Sec. School, Haily Mandi, under the HBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "HBSE(XII) - PCM",
    },
    {
      id: 2,
      img: hbseLogo,
      school: "Saraswati High School, Gurugram",
      date: "Apr 2015 - March 2016",
      grade: "79.8%",
      desc: "I completed my class 10 education from Saraswati High School, Gurugram, under the HBSE board, where I studied Science and Maths.",
      degree: "HBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Student Task Manager",
      description:
        "Student Task Manager is a web-based task management system designed for students to efficiently organize academic and personal activities. The application allows users to create tasks, categorize them as Urgent, Pending, or Completed, and automatically shifts tasks between sections based on due dates and status updates. It supports real-time task updates in UI, secure authentication using JWT, password hashing with bcrypt, clean UI built using React + JSX, Tailwind CSS, DaisyUI, and Lucide React Icons, and a Node.js / MongoDB backend. The system is scalable for future enhancements like teacher portal integration, admin control panel, settings management, and institutional use in schools and universities.",
      image: taskManagerIMG,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","Express.js","JWT","Hashing"],
      github: "https://github.com/AnkitYadav981/Student-Task-Manager",
      webapp: "https://test-marj.onrender.com/",
    },
    {
      id: 1,
      title: "Real time Chat App",
      description:
        "Developed a scalable, secure real-time chat application enabling users to send and receive instant messages with seamless communication. Integrated real-time messaging using WebSockets, ensuring low-latency interactions and reliable message delivery. Implemented features like one-to-one chat, group chat, message status (delivered/read), user authentication, and persistent chat history with a robust backend database. Focused on clean UI/UX for smooth user experience and efficient performance across devices.",
      image: taskManagerIMG,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","Socket.io","Express.js","JWT","Hashing"],
      github: "https://github.com/AnkitYadav981/ChatApp",
      webapp: "https://chatapp-d55s.onrender.com",
    },
    // {
    //   id: 2,
    //   title: "GitHub Profile Detective",
    //   description:
    //     "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    //   image: csprepLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    //   github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    //   webapp: "https://githubprofiledetective.netlify.app/",
    // },
    
  ];  