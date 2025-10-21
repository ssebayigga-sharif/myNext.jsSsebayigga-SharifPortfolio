import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: {
    absolute: "About",
  },
};

const AboutMe = () => {
  return (
    <div>
      <h1>About me</h1>

      <div>
        I am Ssebayigga Sharif, a passionate Frond-End Developer with love for
        clean code ,beautiful interfaces, and smppth user experience. I
        specialise in building modern , responsive websites using tools like
        HTML, CSS, Javascript and React.js, Next.js plus Tailwind CSS. My goal
        is to craft interfaces that feel justgood as they look
      </div>
      <Image
        src="/Screenshot (31).png"
        alt="my image"
        width={400}
        height={400}
      />
      <h2>Background and Journey</h2>
      <div>
        {" "}
        i started learning in january 2025 and completed in July 2025 the
        Front-End part. I loved the creativity in programming since then I have
        been trying out different trials as well as contributing to Medical
        Records System
      </div>
      <h3>Soft skills</h3>
      <div>
        <ol>
          <li>Strong communication</li>
          <li>Problem solver</li>
          <li>Time management</li>
          <li>Always learning new things</li>
        </ol>
      </div>
      <h4>Current focus</h4>
      <div>
        Right now am deepening my skills in Next.js , exploring Typescript and
        Tailwind CSS. To expand my opportunities in Tech.
      </div>
      <h5>Skills</h5>
      <div>
        <ol>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Tailwind and sass</li>
        </ol>
      </div>
    </div>
  );
};

export default AboutMe;
