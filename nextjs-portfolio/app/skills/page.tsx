import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SkillCard from "@/components/sections/SkillCard";
import { SKILLS } from "@/lib/constants";
import type { Skill } from "@/lib/types";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technologies and tools Ssebayigga Sharif uses to build modern web apps.",
};

const categories: { key: Skill["category"]; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "language", label: "Languages" },
  { key: "tool", label: "Tools" },
  { key: "testing", label: "Testing" },
];

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Expertise
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Technologies I use to build, maintain, and test modern frontend
          applications.
        </p>
      </div>

      {categories.map(({ key, label }) => {
        const filtered = SKILLS.filter((skill) => skill.category === key);
        if (!filtered.length) return null;

        return (
          <section key={key} className="mb-12">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-white">{label}</h2>
              <p className="text-sm text-gray-400">{filtered.length} skills</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-900/40 group"
        >
          Hire Me
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
