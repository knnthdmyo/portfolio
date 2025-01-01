import { WorkExperience } from "@/shared/models";

export const EXPERIENCES:WorkExperience[] = [
    {
      company: "Performativ UK",
      role: "Frontend Developer",
      year: 2022,
      description: "I led frontend development with React, TypeScript, Storybook, and Docker, improving performance and securing App Store approval. I mentored junior developers, conducted code reviews, and contributed to hiring. Additionally, I implemented mobile-first updates and enhanced product stability with rigorous testing. I collaborated with cross-functional teams to ensure effective communication, smooth workflow, and timely delivery of the app. This involved working closely with product managers and designers to refine user experiences, while coordinating with backend teams to ensure seamless integration and performance."
    },
    {
      company: "Extendops BPO",
      role: "Fullstack Developer",
      year: 2020,
      description: "I collaborated with US and Mexican teams across different time zones to ensure smooth communication and alignment. I refactored legacy code, optimized ReactFinalForm, and built a UI library with Svelte, Tailwind, and Storybook. I also developed RESTful APIs using AdonisJS and NestJS, improved performance with Redux, and streamlined backend functionality. I worked with backend developers to improve system architecture and enhance frontend-backend integration. Additionally, I regularly interacted with project managers to prioritize tasks and meet deadlines."
    },
    {
      company: "Stacktrek Enterprise Inc.",
      role: "Junior Software Developer",
      year: 2019,
      description: "I worked with React and React Native, enhancing code maintainability for both web and mobile platforms. I built a messaging feature with backend developers and implemented React i18n to expand the app’s reach to non-English-speaking users. I collaborated with both local and international teams, ensuring smooth project progress across different time zones. This involved coordinating with backend engineers to develop new features, and working with international teams to implement localization strategies and improve the app's global accessibility."
    }
  ];
  

export const LANGUAGES = ['TypeScript', 'JavaScript', 'C#']
export const FRONTEND_FRAMEWORKS = ['React', 'React Native', 'Svelte', 'Next.js', 'Gatsby']
export const BACKEND_FRAMEWORKS = ['Node.js', 'Express', 'AdonisJS', 'NestJS']
export const DATABASES = ['MongoDB', 'PostgreSQL', 'MySQL']
export const TOOLS = ['Git', 'Docker', 'Jest', 'Storybook', 'TailwindCSS']
export const CLOUD_SERVICES = ['AWS', 'Azure', 'Google Cloud']
export const LIBRARIES = ['Redux', 'React Final Form', 'React i18n', 'React Query', 'Tailwind CSS', 'Styled Components', 'Material UI']

export const TECHNOLOGIES = {
    languages: LANGUAGES,
    frontendFrameworks: FRONTEND_FRAMEWORKS,
    backendFrameworks: BACKEND_FRAMEWORKS,
    databases: DATABASES,
    tools: TOOLS,
    cloudServices: CLOUD_SERVICES,
    libraries: LIBRARIES
}