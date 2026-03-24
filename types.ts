import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  stats: {
    modelType: string;
    accuracy: string;
    dataset: string;
  };
  award?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'tool';
  iconUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: LucideIcon;
}
