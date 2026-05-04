import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SOFT_SKILLS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Ssebayigga Sharif — a passionate Front-End Developer dedicated to building elegant, user-focused web applications.",
};

const tools = [
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Jest & RTL",
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row items-center gap-14 mb-20">
        {/* Photo */}
        <div className="shrink-0">
          <div className="relative w-52 h-52 md:w-64 md:h-64">
            <div className="absolute -inset-1 rounded-full bg-linear-to-br from-indigo-500 to-cyan-500 blur-sm opacity-50" />
            <Image
              src="/saaarif.png"
              alt="Ssebayigga Sharif"
              width={256}
              height={256}
              className="relative rounded-full object-cover border-2 border-white/10 shadow-2xl w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-5 text-center lg:text-left">
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
              About Me
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Passionate about{" "}
              <span className="gradient-text">building for the web</span>
            </h1>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Hi, I&apos;m{" "}
            <span className="text-white font-semibold">Ssebayigga Sharif</span>{" "}
            — a Front-End Developer dedicated to building seamless, elegant, and
            user-focused web applications. With a love for clean code and
            eye-catching interfaces, I bring designs to life using modern web
            technologies.
          </p>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            My mission is to create interactive digital experiences that people
            love to use — combining technical precision with creative problem
            solving.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-900/40 group"
            >
              Hire Me
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Current Focus ─────────────────────────────────────────── */}
      <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-10">
        <h2 className="text-2xl font-bold text-white mb-3">Current Focus</h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          I&apos;m currently sharpening my Next.js skills, diving deeper into
          TypeScript, and experimenting with advanced Tailwind CSS and Framer
          Motion to push my projects to the next level. Continuous learning
          drives me to stay updated with the latest web tech trends.
        </p>
      </section>

      {/* ── Two columns: Tools & Soft Skills ─────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tools */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-5">
            Tools &amp; Technologies
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-indigo-900/40 border border-indigo-700/50 text-indigo-300 text-sm font-medium px-3 py-1.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-5">Soft Skills</h2>
          <ul className="flex flex-col gap-3">
            {SOFT_SKILLS.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2.5 text-gray-400 text-sm"
              >
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
