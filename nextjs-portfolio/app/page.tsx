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
        <div className=" ml-10">
          <Link href={"https://www.upwork.com/freelancers/~013bc5e039b326c4a3"}>
            {" "}
            <h1 className=" text-6xl animate-slide-up font-serif font-extrabold">
              {" "}
              Hello, I am SSEBAYIGGA SHARIF.
            </h1>
          </Link>
          <h3 className=" animate-ping text-4xl">Front-End Developer.</h3>.
        </div>
        <div className=" w-110 h-120 rounded-3xl  bg-fuchsia-300">
          <div className=" w-100 h-115 rounded-b-full  rounded-t-full  bg-blue-300">
            <Link href={"https://github.com/ssebayigga-sharif"}>
              {" "}
              <Image
                src="/Saaarif.png"
                alt="my image"
                width={350}
                height={400}
                className=" opacity-120 hover:opacity-30 hover: scale-75"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
