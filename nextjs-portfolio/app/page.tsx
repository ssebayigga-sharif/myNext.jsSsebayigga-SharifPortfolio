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
  const myHead: string = "Hello, I am Ssebayigga sharif.";
  const myTittle: string = "Front-End developer.";
  const able: string = "Creative and Flexible";
  return (
    <>
      <div className=" flex items-center justify-between">
        <div className=" ml-10">
          <Link href={"https://www.upwork.com/freelancers/~013bc5e039b326c4a3"}>
            {" "}
            <h1 className=" text-6xl animate-slide-up font-serif font-extrabold capitalize">
              {" "}
              {myHead}
            </h1>
          </Link>
          <h3 className=" text-4xl">{myTittle}</h3>.
          <h4 className=" text-3xl">{able}</h4>
        </div>

        <Link href={"https://github.com/ssebayigga-sharif"}>
          {" "}
          <Image
            src="/saaarif.png"
            alt="Sharif"
            width={350}
            height={400}
            className="opacity-100 hover:opacity-30 
            hover:scale-75 transition-all duration-300 transform mr-3.5"
          />
        </Link>
      </div>
    </>
  );
}
