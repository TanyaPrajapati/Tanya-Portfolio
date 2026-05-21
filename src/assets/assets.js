import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot,FaRocket } from 'react-icons/fa';

import profileImg from '../assets/profile.jpeg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-lavender'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend',
    icon: FaReact,
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    title: 'Backend',
    icon: FaServer,
    tags: ['Node.js', 'Express.js', 'MongoDB']
  },
  {
    title: 'Tools',
    icon: FaTools,
    tags: ['GitHub', 'Postman', 'VS Code', 'Figma']
  },
  {
    title: 'Currently Exploring',
    icon: FaRocket,
    tags: ['AI Integration', 'Recommendation Systems', 'Cloud']
  }
];


export const projects = [
  {
    title: "UniEvents",
    description:
      "A university event management platform where students can explore events, register easily, and get updates through a clean dashboard interface.",
    image: projectImg1,
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },

  {
    title: "Wonderlust",
    description:
      "A travel and stay booking website inspired by Airbnb with property listings, destination exploration, and responsive UI design.",
    image: projectImg2,
    tech: ["React", "Express.js", "MongoDB", "Node.js"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "#",
    code: "#",
  },

  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects, skills, and learning journey with smooth animations and modern UI.",
    image: projectImg3,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },

 
];

export const journeyData = [
  {
    title: "Started Web Development",
    duration: "2023",
    description:
      "Began learning HTML, CSS, JavaScript, and React through projects and practice."
  },
  {
    title: "Built UniEvents",
    duration: "2024",
    description:
      "Created a university event management platform with admin and student modules."
  },
  {
    title: "Learning Full Stack Development",
    duration: "Present",
    description:
      "Currently improving backend, authentication, APIs, and AI integration skills."
  }
];