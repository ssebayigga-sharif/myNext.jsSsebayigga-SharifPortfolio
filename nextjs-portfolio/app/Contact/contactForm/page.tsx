"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div>
      <div className=" flex justify-center">
        <section className=" flex justify-center pr-20 text-3xl">
          <form action="">
            <label>Name : </label>
            <input
              type="text"
              value="Ssebayigga Sharif"
              onChange={(e) => console.log(e.target.value)}
            />
            <br></br>
            <br></br>
            <label>
              Email :{" "}
              <input
                type="email"
                value="sharifsseba@gmail.com"
                onChange={(e) => console.log(e.target.value)}
              />
            </label>
            <br></br>
            <br></br>
            <label>
              Phone :{" "}
              <input
                type="telephone"
                value="0760021334"
                onChange={(e) => console.log(e.target.value)}
              />
            </label>
            <br></br>
            <br></br>
            <label> Github : </label>
            <Link
              href={"https://github.com/ssebayigga-sharif"}
              className=" hover:text-pink-500"
            >
              GitHub
            </Link>
            <br></br>
            <br></br>
            <label>LinkedIn : </label>
            <Link
              href={"https://www.linkedin.com/in/sharif-ssebayigga-7025a6375/"}
              className=" hover:text-red-700"
            >
              LinkedIn
            </Link>
          </form>
        </section>
        <section
          className=" rounded-b-full rounded-t-full bg-blue-300 justify-center 
        w-3xs opacity-20"
        >
          <Link href={"/Skills"}>
            <Image src="/saaarif.png" alt="my image" width={200} height={300} />
          </Link>{" "}
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
