import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute: "Contact",
  },
};

const Contact = () => {
  return (
    <div>
      <h1 className=" text-2xl">Contact me</h1>

      <section className=" flex justify-center">
        <form action="">
          <label>Name : </label>
          <input type="text" placeholder="Ssebayigga Sharif" />
          <br></br>
          <br></br>
          <label>
            Email : <input type="email" placeholder="sharifsseba@gmail.com" />
          </label>
          <br></br>
          <br></br>
          <label> Github : </label>
          <Link href={"https://github.com/ssebayigga-sharif"}>Github</Link>
          <br></br>
          <br></br>
          <label>LinkedIn : </label>
          <Link
            href={"https://www.linkedin.com/in/sharif-ssebayigga-7025a6375/"}
          >
            LinkedIn
          </Link>
        </form>
      </section>
      <Image
        src="/Screenshot (31).png"
        alt="my image"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Contact;
