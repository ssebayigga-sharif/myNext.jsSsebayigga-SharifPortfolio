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
  const why: string = "Why me.";
  const whyMe: string = `I am a passionate front-end
          developer dedicated to building fast, accessible, and visually
          appealing web experiences. Every line of code I write is driven by the
          desire to create interfaces that do not just work — they feel right.
          With a strong foundation in React, Next.js, TypeScript, and Tailwind
          CSS, My focus is on crafting responsive, and user-centered solutions
          that help businesses stand out online.`;
  //what makees me different
  const myDifference: string = "What Makes Me Different";
  const differnceIs: string = `Modern Front-End Stack: I build scalable, maintainable applications
          using the latest web technologies — including Next.js for performance,
          and Tailwind CSS for clean, efficient styling. I believe the small
          things make a big difference in user experience. Problem Solver: I
          enjoy transforming complex ideas into elegant, functional solutions.
          Collaborative Mindset: I thrive in team environments, communicate
          clearly, and adapt quickly to new challenges. Continuous Learning: The
          web evolves fast and so do I. I constantly improve my skills to stay
          ahead of trends and deliver top-quality results.`;
  //my goals
  const myGoal: string = "My Goal";
  const goal: string = `    To design and develop Front-End experiences that connect with people
          fast, and meaningful. Whether it is a personal project, a startup
          idea, or a large-scale web app, I aim to deliver value through code
          that is clean, reliable, and delightful to use.`;
  return (
    <div>
      <div className=" w-300 h-106 flex justify-center pl-5">
        <section className=" font-extralight pt-30">
          {" "}
          <h1 className=" text-4xl">{why}</h1>
          {whyMe}
        </section>

        <section className=" pl-5 font-sans">
          <h2 className=" text-4xl">{myDifference}</h2>
          {differnceIs}
        </section>
        <section className=" pl-5 font-serif pt-30">
          <h3 className=" text-4xl">{myGoal}</h3>
          {goal}
        </section>
      </div>
    </div>
  );
};

export default WhyMe;
