import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "./contactForm/page";

export const metadata: Metadata = {
  title: {
    absolute: "Contact",
  },
  icons: {
    icon: "/saaarif.png",
  },
};

const Contact = () => {
  const headingText: string = "Contact Me";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white py-12">
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/saaarif.png"
          alt="Contact Icon"
          width={100}
          height={100}
          className="mb-4 rounded-full shadow-lg"
        />
        <h1 className="text-6xl md:text-8xl font-bold text-pink-600 capitalize animate-bounce text-center">
          {headingText}
        </h1>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-xl">
          Reach out using the form below, or visit our{" "}
          <Link
            href="/"
            className="text-pink-500 underline hover:text-pink-700"
          >
            homepage
          </Link>
          .
        </p>
      </div>
      <div className="w-full max-w-lg">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
