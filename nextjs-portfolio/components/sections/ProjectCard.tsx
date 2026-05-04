import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className={`group relative flex flex-col bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/20 hover:-translate-y-1 ${
        project.featured ? "ring-1 ring-indigo-600/30" : ""
      }`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Card Header Gradient */}
      <div
        className="h-36 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, hsl(${(index * 60 + 230) % 360}, 70%, 15%), hsl(${
            (index * 60 + 260) % 360
          }, 60%, 10%))`,
        }}
      >
        <span
          className="text-5xl font-black tracking-tighter opacity-20 select-none"
          style={{
            color: `hsl(${(index * 60 + 230) % 360}, 80%, 70%)`,
          }}
        >
          {project.title.charAt(0)}
        </span>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-800 text-gray-300 border border-gray-700 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors duration-200 flex-1 justify-center"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Code2 size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
