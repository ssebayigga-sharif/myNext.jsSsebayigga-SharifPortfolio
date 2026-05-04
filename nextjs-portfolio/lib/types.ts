export interface Skill {
  name: string;
  description: string;
  icon?: string;
  category: "frontend" | "language" | "tool" | "testing";
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
