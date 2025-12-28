export type EmploymentType = 'fulltime' | 'freelance' | 'contract';
export type WorkArrangement = 'onsite' | 'remote' | 'hybrid';
export type MilestoneType = 'education' | 'achievement' | 'work';

export interface WorkExperience {
  company: string;
  role: string;
  startDate: Date;
  endDate: Date | null; // null = present
  description: string;
  employmentType: EmploymentType;
  workArrangement: WorkArrangement;
}

export interface Milestone {
  type: MilestoneType;
  title: string;
  subtitle: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  workArrangement?: WorkArrangement;
}

