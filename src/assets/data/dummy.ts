import IMG_Labstar from "@/assets/images/labstar.jpg";
import IMG_XtendOps from "@/assets/images/xo-apply.png";
import { WorkExperience } from "@/shared/models";
import { faCss3Alt, faDocker, faFacebook, faGitAlt, faGithub, faInstagram, faJs, faLinkedin, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faAt, faBook, faChartLine, faClipboardList, faCode, faDatabase, faGlobe, faLocationDot, faMobileScreen, faPalette, faServer, faTable, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

export const EXPERIENCES: WorkExperience[] = [
  {
    company: "Performativ UK",
    role: "Frontend Developer",
    year: 2022,
    description:
      "I led frontend development with React, TypeScript, Storybook, and Docker, improving performance and securing App Store approval. I mentored junior developers, conducted code reviews, and contributed to hiring. Additionally, I implemented mobile-first updates and enhanced product stability with rigorous testing. I collaborated with cross-functional teams to ensure effective communication, smooth workflow, and timely delivery of the app. This involved working closely with product managers and designers to refine user experiences, while coordinating with backend teams to ensure seamless integration and performance.",
  },
  {
    company: "Extendops BPO",
    role: "Fullstack Developer",
    year: 2020,
    description:
      "I collaborated with US and Mexican teams across different time zones to ensure smooth communication and alignment. I refactored legacy code, optimized ReactFinalForm, and built a UI library with Svelte, Tailwind, and Storybook. I also developed RESTful APIs using AdonisJS and NestJS, improved performance with Redux, and streamlined backend functionality. I worked with backend developers to improve system architecture and enhance frontend-backend integration. Additionally, I regularly interacted with project managers to prioritize tasks and meet deadlines.",
  },
  {
    company: "Stacktrek Enterprise Inc.",
    role: "Junior Software Developer",
    year: 2019,
    description:
      "I worked with React and React Native, enhancing code maintainability for both web and mobile platforms. I built a messaging feature with backend developers and implemented React i18n to expand the app’s reach to non-English-speaking users. I collaborated with both local and international teams, ensuring smooth project progress across different time zones. This involved coordinating with backend engineers to develop new features, and working with international teams to implement localization strategies and improve the app's global accessibility.",
  },
];

export const LANGUAGES = [
  { name: "TypeScript", color: "#3178C6", icon: faCode, link: "https://www.typescriptlang.org/" },
  { name: "JavaScript", color: "#F7DF1E", icon: faJs, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "C#", color: "#512BD4", icon: faCode, link: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
];
export const FRONTEND_FRAMEWORKS = [
  { name: "React", color: "#61DAFB", icon: faReact, link: "https://react.dev/" },
  { name: "React Native", color: "#61DAFB", icon: faMobileScreen, link: "https://reactnative.dev/" },
  { name: "Expo", color: "#000020", icon: faMobileScreen, link: "https://expo.dev/" },
  { name: "Next.js", color: "#000000", icon: faReact, link: "https://nextjs.org/" },
  { name: "Svelte", color: "#FF3E00", icon: faCode, link: "https://svelte.dev/" },
  { name: "Vue.js", color: "#42B883", icon: faCode, link: "https://vuejs.org/" },
];
export const BACKEND_FRAMEWORKS = [
  { name: "Node.js", color: "#339933", icon: faNodeJs, link: "https://nodejs.org/" },
  { name: "Express", color: "#000000", icon: faServer, link: "https://expressjs.com/" },
  { name: "NestJS", color: "#E0234E", icon: faServer, link: "https://nestjs.com/" },
  { name: "AdonisJS", color: "#5A45FF", icon: faServer, link: "https://adonisjs.com/" },
];
export const DATABASES = [
  { name: "SQL", color: "#00758F", icon: faDatabase, link: "https://www.w3schools.com/sql/" },
  { name: "MongoDB", color: "#47A248", icon: faDatabase, link: "https://www.mongodb.com/" },
];
export const TOOLS = [
  { name: "Git", color: "#F05032", icon: faGitAlt, link: "https://git-scm.com/" },
  { name: "Docker", color: "#2496ED", icon: faDocker, link: "https://www.docker.com/" },
  { name: "Jest", color: "#C21325", icon: faWandMagicSparkles, link: "https://jestjs.io/" },
  { name: "Storybook", color: "#FF4785", icon: faBook, link: "https://storybook.js.org/" },
  { name: "Figma", color: "#F24E1E", icon: faPalette, link: "https://www.figma.com/" },
  { name: "Jira", color: "#0052CC", icon: faClipboardList, link: "https://www.atlassian.com/software/jira" },
];
export const LIBRARIES = [
  { name: "Redux", color: "#764ABC", icon: faReact, link: "https://redux.js.org/" },
  { name: "React Query", color: "#FF4154", icon: faReact, link: "https://tanstack.com/query/latest" },
  { name: "React i18n", color: "#009688", icon: faGlobe, link: "https://react.i18next.com/" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: faCss3Alt, link: "https://tailwindcss.com/" },
  { name: "Material UI", color: "#007FFF", icon: faPalette, link: "https://mui.com/" },
  { name: "agGrid", color: "#0084E7", icon: faTable, link: "https://www.ag-grid.com/" },
  { name: "Recharts", color: "#22B5BF", icon: faChartLine, link: "https://recharts.org/" },
];


export const TECHNOLOGIES = {
  languages: LANGUAGES,
  frontendFrameworks: FRONTEND_FRAMEWORKS,
  backendFrameworks: BACKEND_FRAMEWORKS,
  databases: DATABASES,
  tools: TOOLS,
  libraries: LIBRARIES,
};

export const PROJECTS = [
  
  {
    image: IMG_XtendOps,
    title: "XtendOps",
    description:
      "A platform that helps businesses streamline their operations by providing a centralized hub for managing tasks, projects, and teams. It features a user-friendly interface, real-time updates, and robust security measures.",
  },
  {
    image: IMG_Labstar,
    title: "Labstar",
    description:
      "Cloud-based lab management software to help run a dental lab from case entry to invoice, with powerful features to manage clients, sales, logistics, digital files, reporting, and billing, enabling clients organizes all the moving parts of a lab's business and helping improve client management.",
  },
  {
    title: "Performativ",
    description:
      "A wealth management platform designed to streamline client reporting tasks for finance professionals. ",
  },
];

export const CONTACT = [
  {title: 'Email', value: 'donkennethgdemayo@gmail.com', icon: faAt},
  {title: 'Phone', value: '+639761604020', icon: faMobileScreen},
  {title: 'Location', value: 'Philippines', icon: faLocationDot},
]

export const SOCIAL_NETWORKS = [
  {title: 'GitHub', link: 'https://github.com/knnthdmyo', icon: faGithub},
  {title: 'LinkedIn', link: 'https://www.linkedin.com/in/kennethgdemayo/', icon: faLinkedin},
  {title: 'Facebook', link: 'https://www.facebook.com/knnthdmyo/', icon: faFacebook},
  {title: 'Instagram', link: 'https://www.instagram.com/knnthdmyo/', icon: faInstagram},
]