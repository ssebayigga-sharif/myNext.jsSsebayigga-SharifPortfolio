import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    absolute: "Why Me",
  },
  icons: {
    icon: "/saaarif.png",
  },
};

const WhyMe = () => {
  const why = "Why me.";
  const whyMe = `I am a passionate front-end developer dedicated to building fast, accessible, and visually appealing web experiences. Every line of code I write is driven by the desire to create interfaces that not only work, but also feel intuitive and engaging.
With a strong foundation in React, Next.js, TypeScript, and Tailwind CSS, my focus is on crafting responsive, user-centered solutions that help businesses stand out online.`;

  // What makes me different
  const myDifference = "What Makes Me Different";
  const differenceIs = `• Modern Front-End Stack: I create scalable, maintainable applications using cutting-edge web technologies such as Next.js for performance and Tailwind CSS for efficient, flexible styling. I believe the details make a big difference in user experience.
• Problem Solver: I enjoy breaking down complex challenges into elegant, functional solutions.
• Collaborative Mindset: I thrive in team settings, communicate clearly, and adapt quickly to new challenges.
• Continuous Learning: The web evolves fast—and so do I. I'm always improving my skills to deliver top-quality results and stay ahead of industry trends.`;

  // My goals
  const myGoal = "My Goal";
  const goal = `To design and develop front-end experiences that connect with people—quickly and meaningfully. Whether it’s a personal project, startup idea, or enterprise web app, I aim to deliver real value through code that is clean, reliable, and delightful to use.`;

  return (
    <div className="flex flex-col items-center py-16 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 w-full">
        <section className="flex-1 font-light space-y-4">
          <h1 className="text-4xl font-semibold mb-2">{why}</h1>
          <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
            {whyMe}
          </p>
        </section>
        <section className="flex-1 font-sans space-y-4">
          <h2 className="text-3xl font-semibold mb-2">{myDifference}</h2>
          <ul className="list-disc ml-5 text-base text-gray-700 space-y-1 whitespace-pre-line">
            {differenceIs
              .split("• ")
              .filter(Boolean)
              .map((point, idx) => (
                <li key={idx}>{point.trim()}</li>
              ))}
          </ul>
        </section>
        <section className="flex-1 font-serif space-y-4">
          <h3 className="text-2xl font-semibold mb-2">{myGoal}</h3>
          <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
            {goal}
          </p>
        </section>
      </div>
      <div className="mt-10 flex flex-col items-center">
        <Image
          src="/saaarif.png"
          alt="Saarif"
          width={90}
          height={90}
          className="rounded-full shadow-sm border border-gray-200"
        />
        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default WhyMe;
