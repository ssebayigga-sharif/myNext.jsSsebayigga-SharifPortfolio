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
  return (
    <div>
      <section className=" grid md:grid-cols-2 font-mono">
        <div className=" w-170 h-20">
          <h1 className=" text-5xl">About me</h1>I am Ssebayigga Sharif, a
          passionate Front-End Developer with love for clean code, beautiful
          interfaces, and smooth user experiences. I specialize in building
          modern, responsive websites using tools like HTML, CSS, JavaScript,
          React.js, Next.js, and Tailwind CSS. My goal is to craft interfaces
          that feel just as good as they look
        </div>

        <div className=" font-mono">
          <h3 className=" text-2xl">Soft skills</h3>
          <ol>
            <li>Strong communication</li>
            <li>Problem solver</li>
            <li>Time management</li>
            <li>Always learning new things</li>
          </ol>
          <section className=" bg-gray-200 w-60 ml-90 rounded-b-full rounded-t-full justify-center opacity-15 ">
            {" "}
            <Link href={"/Contact"}>
              <Image
                src="/Saaarif.png"
                alt="my image"
                width={160}
                height={200}
              />
            </Link>
          </section>
        </div>

        <div className=" font-mono">
          <h4 className=" text-3xl">Current focus</h4>I am currently deepening
          my skills in Next.js, and exploring TypeScript and Tailwind CSS to
          expand my opportunities in the tech world.
        </div>

        {/* <div>
          <h5 className=" text-5xl">Skills</h5>
          <ol>
            <li>  <Link href={"/Contact"}>
            <Image src="/Saaarif.png" alt="my image" width={100} height={200} />
          </Link></li>
          </ol>
        </div> */}
      </section>
    </div>
  );
};

export default AboutMe;
