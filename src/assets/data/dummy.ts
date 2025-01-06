import IMG_Labstar from "@/assets/images/labstar.jpg";
import IMG_XtendOps from "@/assets/images/xo-apply.png";
import { WorkExperience } from "@/shared/models";
import { faFacebook, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faLocationDot, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

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

export const LANGUAGES = ["TypeScript", "JavaScript", "C#"];
export const FRONTEND_FRAMEWORKS = ["React.Js", "Svelte", "Next.js"];
export const BACKEND_FRAMEWORKS = ["Node.js", "Express", "AdonisJS", "NestJS"];
export const DATABASES = ["SQL"];
export const TOOLS = ["Git", "Docker", "Jest", "Storybook"];
export const LIBRARIES = [
  "Redux",
  "React Final Form",
  "React i18n",
  "React Query",
  "Tailwind CSS",
  "Styled Components",
  "Material UI",
  "Ant Design",
  "agGrid",
  "Recharts",
];


export const TECHNOLOGIES = {
  languages: LANGUAGES,
  frontendFrameworks: FRONTEND_FRAMEWORKS,
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