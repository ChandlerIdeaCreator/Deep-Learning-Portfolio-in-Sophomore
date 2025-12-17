import { Project, Skill, SocialLink } from './types';
import { Github, Mail, Database, Cpu, Layers, Terminal } from 'lucide-react';

export const PROFILE = {
  name: "Changyang Qian",
  role: "Deep Learning Researcher",
  university: "Northeastern University (NEU)",
  major: "Computer Science and Technology",
  gpa: "3.85 (Rank 4/123)",
  bio: [
    "Sophomore in Computer Science & Tech at NEU.",
    "Passion: Deep Learning (Theory & Practice) & Computer Vision.",
    "Research: Noise Learning, Robust Models, Webly Supervised Learning.",
    "Labs: HAIC Lab, DeepCV Lab.",
    "Philosophy: Open Source contributor (PaddlePaddle ecosystem)."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Webly Supervised Fine-Grained Recognition",
    description: "Award-winning project focusing on recognizing fine-grained image categories using noisy web data. Implements robust noise cleaning algorithms.",
    tags: ["PyTorch", "Noise Learning", "CV", "ResNet"],
    githubUrl: "https://github.com/ChandlerIdeaCreator/AIC-Webly-supervised-Fine-Grained-Image-Recognition-National-Second-Prize",
    stats: {
      modelType: "ResNet-50 variant",
      accuracy: "SOTA (Competition)",
      dataset: "WebFG-496"
    },
    award: "🏆 National Second Prize - AiC2025"
  },
  {
    id: "p2",
    title: "ViT Fine-Tuning CIFAR",
    description: "Deep dive into Vision Transformers. Fine-tuning heavy ViT models on the CIFAR-10/100 datasets to analyze attention map effectiveness vs CNNs.",
    tags: ["Vision Transformer", "ViT", "Transfer Learning", "CIFAR-10"],
    githubUrl: "https://github.com/ChandlerIdeaCreator/Vit_fine_tuning_cifar",
    stats: {
      modelType: "ViT-B/16",
      accuracy: "98.5%",
      dataset: "CIFAR-10"
    }
  },
  {
    id: "p3",
    title: "BERT Sentiment Classifier",
    description: "NLP implementation using Hugging Face Transformers. A comprehensive pipeline for fine-tuning BERT on Chinese sentiment analysis tasks.",
    tags: ["BERT", "NLP", "Hugging Face", "Sentiment Analysis"],
    githubUrl: "https://github.com/ChandlerIdeaCreator/bert_sentiment_classifier",
    stats: {
      modelType: "bert-base-chinese",
      accuracy: "94.2%",
      dataset: "ChnSentiCorp"
    }
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: "Python", level: 95, category: "language", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "C++", level: 80, category: "language", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
  { name: "Java", level: 75, category: "language", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  
  // Frameworks
  { name: "PyTorch", level: 90, category: "framework", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original-wordmark.svg" },
  { name: "TensorFlow", level: 70, category: "framework", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" },
  { name: "Spring", level: 60, category: "framework", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" },

  // Tools
  { name: "Git", level: 85, category: "tool", iconUrl: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Linux", level: 85, category: "tool", iconUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
  { name: "HuggingFace", level: 80, category: "tool", iconUrl: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/ChandlerIdeaCreator", label: "ChandlerIdeaCreator", icon: Github },
  { platform: "Email", url: "mailto:qcyqcy1802145@163.com", label: "qcyqcy1802145@163.com", icon: Mail },
];
