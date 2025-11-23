/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "About",
  },
  icons: {
    icon: "/saaarif.png",
  },
};

const AboutMe = () => {
  // "About Me"
  const aboutMe: string = `Hi, I am Ssebayigga Sharif  — a passionate Front-End Developer
   dedicated to building seamless, elegant, and user-focused web applications. With a love for
   clean code and eye-catching interfaces, I bring designs to life using HTML, CSS, JavaScript,
   React.js, Next.js, and Tailwind CSS. My mission: create interactive digital experiences that people love
   to use.`;

  const focus: string = "Current Focus";
  const currentFocus: string = `I am currently sharpening my Next.js skills, diving deeper 
  into TypeScript, and experimenting with advanced Tailwind CSS features to push my projects to the
   next level. Continuous learning drives me to stay updated with the latest web tech trends.`;
  //skills list
  const softSkills: string[] = [
    " Strong communication",
    " Creative problem solving",
    " Effective time management",
    " Lifelong learning & adaptability",
    " Team collaboration",
    " Empathy & user-centric mindset",
  ];
  //tools list
  const tools: string[] = [
    " HTML5 & CSS",
    " JavaScript (ES6+), React.js",
    " Next.js & TypeScript",
    "Tailwind CSS",
    " Git & GitHub",
    "jest",
  ];

  return (
    <main
      className="min-h-screen bg-linear-to-b from-gray-50 to-blue-100 py-10 px-4 font-mono
     text-gray-900"
    >
      <section className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2 items-center">
        <div className="flex flex-col items-start gap-6 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-extrabold capitalize text-blue-900 mb-3">
            About Me
          </h1>
          <p className="text-lg leading-relaxed">{aboutMe}</p>

          <div>
            <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-700">
              Tools & Technologies
            </h2>
            <ul className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <li
                  key={idx}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full px-4 py-1 
                  text-sm transition"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-7">
          <div
            className="bg-white shadow-xl rounded-full overflow-hidden border-4
           border-blue-200 hover:scale-105 transition"
          >
            <Image
              src="/saaarif.png"
              alt="Ssebayigga Sharif"
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </div>
          <Link href="/Contact" passHref legacyBehavior>
            <a
              className="mt-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full 
            shadow font-semibold transition"
            >
              Contact Me
            </a>
          </Link>
        </div>
      </section>

      <section
        className="mx-auto max-w-3xl mt-12 bg-white/80 p-7 rounded-xl shadow flex flex-col 
      md:flex-row gap-10"
      >
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-blue-700 mb-3">Soft Skills</h3>
          <ul className="space-y-2 pl-4">
            {softSkills.map((item, index) => (
              <li key={index} className="list-disc text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <h4 className="text-2xl font-bold text-blue-700 mb-3">{focus}</h4>
          <p className="text-base">{currentFocus}</p>
        </div>
      </section>

      <footer className="mt-16 text-center text-gray-600 text-sm">
        Made by Ssebayigga Sharif —{" "}
        <span className="italic">Let's build something amazing together!</span>
      </footer>
    </main>
  );
};

export default AboutMe;
