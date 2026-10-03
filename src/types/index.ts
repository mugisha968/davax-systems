export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: string;
}

export interface ProcessStepItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  focusArea: string;
}

export interface SolutionCategory {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  coreModules: string[];
  solvedProblems: string[];
  typicalBusiness: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: string[];
  architecture: {
    stack: string[];
    components: string[];
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface WhyPoint {
  title: string;
  description: string;
  bulletPoints: string[];
  metricLabel?: string;
  metricValue?: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Data' | 'APIs & Cloud' | 'Intelligence';
  role: string;
  badge: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  serviceNeeded: string;
  projectDetails: string;
  budgetRange: string;
  timeline: string;
}
