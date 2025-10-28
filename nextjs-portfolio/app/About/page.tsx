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
  //explains well who I am and what I do
  const aboutMe: string = `I am Ssebayigga Sharif, a
          passionate Front-End Developer with love for clean code, beautiful
          interfaces, and smooth user experiences. I specialize in building
          modern, responsive websites using tools like HTML, CSS, JavaScript,
          React.js, Next.js, and Tailwind CSS. My goal is to craft interfaces
          that feel just as good as they look`;
  const focus: string = "current focus"; //what I am focused on now
  const currentFocus: string = `I am currently deepening
          my skills in Next.js, and exploring TypeScript and Tailwind CSS to
          expand my opportunities in the tech world.`;
  const softSkills: string[] = [
    //list of my soft skills
    "strong communication",
    "problem solving",
    "time management",
    "always learning new things",
  ];
  const sklls: string = "soft skills";
  const me: string = "about me";
  return (
    <div>
      <section className=" grid md:grid-cols-2 font-mono">
        <div className=" w-170 h-20">
          <h1 className=" text-5xl capitalize">{me}</h1>
          {aboutMe}
        </div>

        <div className=" font-mono">
          <h3 className=" text-2xl capitalize">{sklls}</h3>
          <div className=" flex flex-col space-y-2.5">
            {softSkills.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <section
            className=" bg-gray-200 w-60 ml-90 rounded-b-full 
          rounded-t-full justify-center opacity-15 "
          >
            {" "}
            <Link href={"/Contact"}>
              <Image
                src="/saaarif.png"
                alt="my image"
                width={150}
                height={200}
              />
            </Link>
          </section>
        </div>

        <div className=" font-mono">
          <h4 className=" text-3xl capitalize">{focus}</h4>
          {currentFocus}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
