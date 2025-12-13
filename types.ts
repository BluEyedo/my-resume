import { ReactHTMLElement } from "react";

export interface Skill {
  name: string;
  icon?: any;
  level: number; // 0-100
  category:
    | "frontend"
    | "backend"
    | "fullstack"
    | "graphics"
    | "tools"
    | "soft-skills"
    | "language";
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  objectFit?: string;
  tags: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface ResumeData {
  fullName: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  skills: Skill[];
  experience: ExperienceItem[];
  certificationCourses: any[];
  education: any[];
  projects: ProjectItem[];
}
