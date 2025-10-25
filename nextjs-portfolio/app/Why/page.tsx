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
  return (
    <div>
      <div className=" w-300 h-106 flex justify-center pl-5">
        <section className=" font-extralight pt-30">
          {" "}
          <h1 className=" text-4xl">Why me.</h1>I am a passionate front-end
          developer dedicated to building fast, accessible, and visually
          appealing web experiences. Every line of code I write is driven by the
          desire to create interfaces that do not just work — they feel right.
          With a strong foundation in React, Next.js, TypeScript, and Tailwind
          CSS, My focus is on crafting responsive, and user-centered solutions
          that help businesses stand out online.
        </section>

        <section className=" pl-5 font-sans">
          <h2 className=" text-4xl">What Makes Me Different</h2>
          Modern Front-End Stack: I build scalable, maintainable applications
          using the latest web technologies — including Next.js for performance,
          and Tailwind CSS for clean, efficient styling. I believe the small
          things make a big difference in user experience. Problem Solver: I
          enjoy transforming complex ideas into elegant, functional solutions.
          Collaborative Mindset: I thrive in team environments, communicate
          clearly, and adapt quickly to new challenges. Continuous Learning: The
          web evolves fast and so do I. I constantly improve my skills to stay
          ahead of trends and deliver top-quality results.
        </section>
        <section className=" pl-5 font-serif pt-30">
          <h3 className=" text-4xl">My Goal</h3>
          To design and develop Front-End experiences that connect with people
          fast, and meaningful. Whether it is a personal project, a startup
          idea, or a large-scale web app, I aim to deliver value through code
          that is clean, reliable, and delightful to use.
        </section>
      </div>
    </div>
  );
};

export default WhyMe;
