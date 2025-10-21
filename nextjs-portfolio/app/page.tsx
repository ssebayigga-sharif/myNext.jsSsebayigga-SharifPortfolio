import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
//import saarif from "saarif.jpg"

export const metadata: Metadata = {
  title: {
    absolute: "Home",
  },
};

export default function Home() {
  return (
    <>
      <div className=" flex items-center justify-between">
        <div className=" ml-4">
          <h1 className=" text-4xl"> Hey, I am SSEBAYIGGA SHARIF</h1>
          <p>
            A Front-End developer crafting mordern, responsive and user friendly
            web applications
          </p>
          <p>
            Passionate about turning design into reality using HTML, CSS,
            Javascript, React and modern tools like Next.js and Tailwind CSS
          </p>
          .
        </div>
        <div className="">
          <Image
            src="/Screenshot (31).png"
            alt="my image"
            width={350}
            height={400}
            className=" opacity-50"
          />
        </div>
      </div>
    </>
  );
}
