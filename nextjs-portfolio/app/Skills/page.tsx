import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
export const metadata: Metadata = {
  title: {
    absolute: "Skills",
  },
};

const Skills = () => {
  return (
    <div>
      <h1>Current skills </h1>

      <Image
        src="/Screenshot (31).png"
        alt="my image"
        width={200}
        height={200}
      />
      <section>
        <div className="bg-[url('/Screenshot (31).png')] bg-cover bg-center bg-no-repeat h-screen w-full">
          <table className="bg-amber-100">
            <th className=" text-4xl pr-6">skills</th>
            <tr className="border-b-amber-50 pr-2.5 pl-2.5">
              <td>HTML</td>
            </tr>
            <tr className="border-b-amber-50 pl-2.5 pr-2.5">
              <td>CSS</td>
            </tr>
            <tr className="  border-amber-50 pl-2.5 pr-2.5">
              <td>Javascript</td>
            </tr>
            <tr className="  border-amber-50 pl-2.5 pr-2.5">
              <td>React.js</td>
            </tr>
            <tr className="  border-amber-50 pl-2.5 pr-2.5">
              <td>Typescript</td>
            </tr>
            <tr className="  border-amber-50 pl-2.5 pr-2.5">
              <td>jQuery</td>
            </tr>
            <tr className="  border-b-amber-50 pl-2.5 pr-2.5">
              <td>Next.js</td>
            </tr>
            <tr className="  border-b-amber-50 pl-2.5 pr-2.5">
              <td>Tailwind CSS</td>
            </tr>
          </table>
        </div>
        <h2>Aiming to build from here to increase on my portfolio</h2>
      </section>
    </div>
  );
};

export default Skills;
