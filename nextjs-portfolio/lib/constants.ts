import type { Skill, Project } from "./types";

//  Personal Info
export const SITE_NAME = "Ssebayigga Sharif";
export const SITE_TITLE = "Ssebayigga Sharif – Front-End Developer";
export const SITE_DESCRIPTION =
  "Front-End Developer specializing in Next.js, TypeScript, and React. Building fast, beautiful, and accessible web applications.";
export const CONTACT_EMAIL = "sharifsseba@gmail.com";
export const PHONE_PRIMARY = "+256 760 021 334";
export const PHONE_SECONDARY = "+256 754 564 588";
export const WHATSAPP_URL =
  "https://wa.me/256760021334?text=" +
  encodeURIComponent(
    "Hello Sharif, I found your portfolio and would like to talk to you about business!",
  );
export const UPWORK_URL =
  "https://www.upwork.com/freelancers/~013bc5e039b326c4a3";
export const GITHUB_URL = "https://github.com/ssebayigga-sharif";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sharifssebayigga-dev/";

//  Navigation
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Why Me", href: "/why" },
];

//  Skills
export const SKILLS: Skill[] = [
  {
    name: "HTML5",
    description: "Semantic, accessible markup for modern web applications.",
    category: "frontend",
  },

  {
    name: "CSS3",
    description:
      "Responsive design, animations, and modern layout with Grid & Flexbox.",
    category: "frontend",
  },
  {
    name: "SASS Styling",
    description:
      "Responsive design, animations, and modern layout with Grid & Flexbox.",
    category: "frontend",
  },
  {
    name: "JavaScript",
    description: "ES6+ dynamic and interactive web experiences.",
    category: "language",
  },
  {
    name: "TypeScript",
    description: "Strongly-typed JavaScript for scalable, maintainable apps.",
    category: "language",
  },
  {
    name: "React.js",
    description:
      "Component-based UI development with hooks and reusable architecture.",
    category: "frontend",
  },

  {
    name: "Tailwind CSS",
    description:
      "Utility-first CSS for consistent, responsive, and scalable interfaces.",
    category: "frontend",
  },

  {
    name: "Git & GitHub",
    description:
      "Version control, branch workflows, and collaborative development.",
    category: "tool",
  },
  {
    name: "Jest",
    description: "JavaScript unit testing for reliable and maintainable code.",
    category: "testing",
  },
  {
    name: "React Testing Library",
    description: "Component-level testing for accessible, user-focused UI.",
    category: "testing",
  },
];

// ── Projects
export const PROJECTS: Project[] = [
  {
    title: "Sharif Calculator",
    description:
      "A polished, responsive calculator built with clean JavaScript and modern styling. Designed for real-world usability and mobile-first performance.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    liveUrl:
      "https://sharifcalculator-nnf4rvsuy-ssebayigga-sharifs-projects.vercel.app/",
    githubUrl: "https://github.com/ssebayigga-sharif",
    featured: true,
  },
  {
    title: "Landing Page",
    description:
      "A conversion-focused landing page with modern typography, responsive layout, and subtle motion to guide visitors.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl:
      "https://landing-page-beoc7rbpt-ssebayigga-sharifs-projects.vercel.app/",
    githubUrl: "https://github.com/ssebayigga-sharif",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "A client-facing portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion to showcase polished frontend work.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "/",
    githubUrl: "https://github.com/ssebayigga-sharif",
    featured: true,
  },
];

// ── Soft Skills
export const SOFT_SKILLS = [
  "Strong communication",
  "Creative problem solving",
  "Effective time management",
  "Lifelong learning & adaptability",
  "Team collaboration",
  "Empathy & user-centric mindset",
];

// ── Why Me
export const WHY_ME_POINTS = [
  {
    title: "Modern Front-End Stack",
    body: "I build scalable, maintainable applications using Next.js for performance and Tailwind CSS for efficient, flexible styling. Details make the difference in user experience.",
  },
  {
    title: "Problem Solver",
    body: "I enjoy breaking down complex challenges into elegant, functional solutions that genuinely work for the end user.",
  },
  {
    title: "Collaborative Mindset",
    body: "I thrive in team settings, communicate clearly, and adapt quickly to new challenges and shifting requirements.",
  },
  {
    title: "Continuous Learning",
    body: "The web evolves fast — and so do I. I'm always improving my skills to deliver top-quality results and stay ahead of industry trends.",
  },
];
