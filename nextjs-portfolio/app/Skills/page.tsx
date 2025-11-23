import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Skills",
  },
  icons: {
    icon: "/saaarif.png",
  },
};

const Skills = () => {
  const them: string = "My Skills & Tools";

  // Skills
  const mySkills: { name: string; description: string }[] = [
    {
      name: "HTML",
      description: "Semantic, accessible markup for modern web apps.",
    },
    {
      name: "CSS",
      description:
        "Responsive design, animations, and frameworks like Tailwind CSS.",
    },
    {
      name: "JavaScript",
      description: "Dynamic, interactive web experiences.",
    },
    {
      name: "React.js",
      description: "Component-based UI development.",
    },
    {
      name: "TypeScript",
      description: "Strongly-typed JavaScript for larger applications.",
    },
    {
      name: "Next.js",
      description: "Production React framework, SSR, SSG, and API routes.",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI building.",
    },
    {
      name: "jQuery",
      description: "DOM manipulation & AJAX.",
    },
    {
      name: "Jest",
      description: " JavaScript testing framework.",
    },
    {
      name: "Testing Library (React Testing Library)",
      description: " component testing for React.",
    },
  ];

  return (
    <main className="flex flex-col items-center px-4 py-12">
      <h1 className="text-5xl pb-8 text-fuchsia-950 font-extrabold capitalize tracking-wide">
        {them}
      </h1>
      <p className="max-w-2xl pb-8 text-center text-neutral-800 font-light text-lg">
        These are the primary skills and tools I use for building, maintaining,
        and testing modern frontend applications.
      </p>

      <section className="capitalize grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {mySkills.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-amber-100 shadow-lg border-2
             border-amber-200 rounded-2xl p-6 hover:scale-105 hover:shadow-amber-300 transition"
          >
            <div className="text-4xl md:text-5xl font-bold text-amber-800 mb-3">
              {item.name}
            </div>
            <p className="text-neutral-700 text-center font-medium text-base">
              {item.description}
            </p>
            {/* Add badge or icon for testing tools */}
            {(item.name === "Jest" ||
              item.name.includes("Testing Library")) && (
              <div className="mt-3 flex flex-col items-center">
                <span className="text-xs font-semibold bg-purple-200 text-purple-800 px-2 py-1 rounded">
                  Testing Tool
                </span>
              </div>
            )}
          </div>
        ))}
      </section>

      <div className="mt-12 flex flex-row gap-8 w-full max-w-3xl justify-center">
        <Link
          href="/Skills/myprojects"
          className="bg-fuchsia-900 hover:bg-fuchsia-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          See My Projects
        </Link>
        <Link
          href="/"
          className="bg-amber-800 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default Skills;
