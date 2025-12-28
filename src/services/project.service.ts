import { Project } from '@/models';
import IMG_Labstar from "@/assets/images/labstar.jpg";
import IMG_XtendOps from "@/assets/images/xo-apply.png";

const PROJECTS_DATA: Project[] = [
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
      "A wealth management platform designed to streamline client reporting tasks for finance professionals.",
  },
];

export const ProjectService = {
  getProjects(): Project[] {
    return PROJECTS_DATA;
  },

  getProjectCount(): number {
    return PROJECTS_DATA.length;
  },
};

