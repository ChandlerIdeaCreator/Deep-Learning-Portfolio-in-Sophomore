import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  imageUrl?: string;
  stats?: {
    accuracy?: string;
    modelType?: string;
    dataset?: string;
  };
  award?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool';
  iconUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon?: LucideIcon;
}

export enum TerminalLineType {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
  SYSTEM = 'SYSTEM',
  ERROR = 'ERROR'
}

export interface TerminalLine {
  id: string;
  type: TerminalLineType;
  content: React.ReactNode;
  delay?: number;
}