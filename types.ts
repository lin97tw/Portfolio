export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  technologies: string[];
  whatIDid?: string;
  whatILearned?: string;
  date?: string;
  link?: string;
}

export interface NavItem {
  label: string;
  path: string;
}