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
  const them: string = "my skills";
  //skills I use
  const mySkills: string[] = [
    "html",
    "css",
    "javascript",
    "react.js",
    "typescript",
    "next.js",
    "tailwind css",
    "jquery",
    "jest",
  ];
  return (
    <>
      <h1 className=" text-5xl pb-10  text-fuchsia-950 capitalize">{them}</h1>
      <section className=" capitalize  grid-cols-3 grid gap-5 text-7xl">
        {mySkills.map((item, index) => (
          <section key={index} className=" bg-amber-800 rounded-full pb-7">
            {item}
          </section>
        ))}
      </section>
    </>
  );
};

export default Skills;
