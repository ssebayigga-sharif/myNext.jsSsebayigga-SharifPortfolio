import Link from "next/link";
import React from "react";
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
  return (
    <div>
      <h1 className=" text-8xl animate-bounce text-pink-600">Contact me</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
