import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Home",
  },
};

export default function Home() {
  // Headings and subtext
  const myHead: string = "Hello, I am Ssebayigga Sharif.";
  const myTittle: string = "Front-End Developer";
  const able: string = "Creative and Flexible";

  return (
    <main
      className="min-h-screen bg-linear-to-br from-gray-100 via-white to-blue-100 flex 
    flex-col justify-center items-center py-12"
    >
      <div
        className="flex flex-col md:flex-row items-center md:justify-between w-full max-w-6xl 
      mx-auto px-6 space-y-10 md:space-y-0"
      >
        {/* Left section: Texts and Upwork Link */}
        <div className="md:w-2/3 flex flex-col gap-6">
          <Link
            href="https://www.upwork.com/freelancers/~013bc5e039b326c4a3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1
              className="text-5xl md:text-7xl font-extrabold font-serif capitalize text-gray-900
             hover:text-blue-700 transition-colors duration-300 animate-fade-in-up cursor-pointer shadow-sm"
            >
              {myHead}
            </h1>
          </Link>
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-500 font-mono animate-fade-in">
            {myTittle}
          </h3>
          <h4 className="text-2xl md:text-3xl text-gray-600 tracking-wide">
            {able}
          </h4>

          {/*  about me section */}
          <p className="text-lg md:text-xl text-gray-700 mt-2 max-w-xl">
            I build responsive, dynamic web applications with{" "}
            <span className="font-bold text-blue-500">Next.js</span> and{" "}
            <span className="font-bold text-blue-500">TypeScript</span>,
            focusing on clean, beautiful UIs and seamless user experiences. I
            love solving problems with creativity and flexibility!
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              href="https://github.com/ssebayigga-sharif"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 rounded shadow bg-gray-900 text-white
               hover:bg-blue-700 transition-colors duration-300 font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2 fill-white"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .5a12 12 0 0 0-3.793 23.401c.6.112.82-.26.82-.577 0-.287-.01-1.05-.016-2.06-3.
                337.726-4.042-1.61-4.042-1.61-.547-1.377-1.336-1.745-1.336-1.745-1.092-.746.083-.73.083-.73
                1.207.086 1.843 1.24 1.843 1.24 1.074 1.84 2.817 1.308 3.505 1 .11-.779.42-1.308.763-1.61-2.666-.
                307-5.467-1.33-5.467-5.92 0-1.306.467-2.373 1.234-3.21-.124-.308-.534-1.545.117-3.222 0 0 1.008-.
                322 3.3 1.23a11.53 11.53 0 0 1 6.006 0c2.291-1.553 3.297-1.23 3.297-1.23.652 1.677.242 2.914.119
                 3.222.77.837 1.232 1.904 1.232 3.21 0 4.6-2.805 5.61-5.479 5.911.431.372.815 1.104.815 2.225 0
                 1.606-.014 2.9-.014 3.294 0 .319.216.694.825.576A12 12 0 0 0 12 .5z"
                />
              </svg>
              GitHub
            </Link>
            <Link
              href="mailto: sharifsseba@gmail.com"
              className="inline-flex items-center px-6 py-2 rounded shadow border border-blue-500
               text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right section: Profile image */}
        <div className="md:w-1/3 flex justify-center items-center">
          <Link
            href="https://github.com/ssebayigga-sharif"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative group">
              <Image
                src="/saaarif.png"
                alt="Sharif"
                width={350}
                height={400}
                className="rounded-xl shadow-2xl border-4 border-white 
                group-hover:opacity-70 group-hover:scale-105 transition-all duration-300 transform"
                priority
              />
              <div
                className="absolute bottom-3 left-1/2 -translate-x-1/2
               px-4 py-1 bg-blue-600/80 rounded-full text-white text-base
               font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow"
              >
                GitHub Profile
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
