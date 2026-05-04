import type { Skill } from "@/lib/types";

const categoryColors: Record<
  Skill["category"],
  { bg: string; text: string; badge: string }
> = {
  frontend: {
    bg: "from-indigo-900/40 to-purple-900/20",
    text: "text-indigo-300",
    badge: "bg-indigo-900/60 text-indigo-300 border-indigo-700/50",
  },
  language: {
    bg: "from-cyan-900/40 to-blue-900/20",
    text: "text-cyan-300",
    badge: "bg-cyan-900/60 text-cyan-300 border-cyan-700/50",
  },
  tool: {
    bg: "from-emerald-900/40 to-teal-900/20",
    text: "text-emerald-300",
    badge: "bg-emerald-900/60 text-emerald-300 border-emerald-700/50",
  },
  testing: {
    bg: "from-violet-900/40 to-fuchsia-900/20",
    text: "text-violet-300",
    badge: "bg-violet-900/60 text-violet-300 border-violet-700/50",
  },
};

const categoryLabel: Record<Skill["category"], string> = {
  frontend: "Frontend",
  language: "Language",
  tool: "Tool",
  testing: "Testing",
};

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const colors = categoryColors[skill.category];

  return (
    <div
      className={`group flex flex-col bg-linear-to-br ${colors.bg} border border-gray-800 hover:border-gray-600 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className={`font-bold text-base ${colors.text}`}>{skill.name}</h3>
        <span
          className={`text-xs px-2 py-0.5 rounded-full border font-medium ${colors.badge}`}
        >
          {categoryLabel[skill.category]}
        </span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        {skill.description}
      </p>
    </div>
  );
}
