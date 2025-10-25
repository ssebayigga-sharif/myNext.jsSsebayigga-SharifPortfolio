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
  return (
    <>
      <h1 className=" text-5xl pb-10  text-fuchsia-950">My Skills</h1>
      <section className=" flex">
        <p className=" text-7xl font-serif pr-50 pl-20 pb-10 text-shadow-cyan-800 animate-pulse">
          HTML.
        </p>
        <p className=" text-7xl font-serif pr-50 pb-10 animate-pulse">CSS.</p>
        <p className=" text-7xl font-serif pb-10 animate-pulse">jQuery.</p>
      </section>
      <section className=" flex  text-shadow-green-700">
        <p className=" text-7xl font-serif pl-20 pb-10 animate-bounce">
          Javascript.
        </p>
        <p className=" text-7xl font-serif pl-50 pb-10 animate-bounce">
          Typescript.
        </p>
      </section>
      <section className=" flex  text-red-800 bg-[url('/saarif.png')] bg-cover bg-center">
        <p className=" text-7xl font-serif pl-20 pb-10 animate-slide-down">
          React.js.
        </p>
        <p className=" text-7xl font-serif pl-15 pb-10 animate-bounce">
          Next.js.
        </p>
        <p className=" text-7xl font-serif pl-15 pb-10 animate-slide-down">
          Tailwind CSS.
        </p>
      </section>
    </>
  );
};

export default Skills;
