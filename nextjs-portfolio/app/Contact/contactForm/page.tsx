"use client";

import React, { useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [name, setName] = useState("Ssebayigga Sharif"); //sets the name
  const [email, setEmail] = useState("sharifsseba@gmail.com"); //sets the email
  const [phone, setPhone] = useState("0760021334"); //sets the contact

  return (
    <div>
      <div className="flex justify-center">
        <section className="flex flex-col justify-center pr-20 text-2xl gap-4">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // You can put here your form submission logic incase you want to
              alert("Form submitted!");
            }}
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-1">
                Name :
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} //tracks the value of name on delete and on entrance
                className="px-2 py-1 border rounded"
                required //makes this field a requirement before submission
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold mb-1">
                Email :
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} //tracks the email
                className="px-2 py-1 border rounded"
                required //makes this field a requirement
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="font-semibold mb-1">
                Phone :
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} //tracks the phone number
                className="px-2 py-1 border rounded"
                required //makes this field a requirement
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <label className="font-semibold">Github :</label>
                <Link
                  href="https://github.com/ssebayigga-sharif" //takes you to my github account
                  className="hover:text-pink-500 underline"
                  target="_blank" //tells the browser to open the link in  new tab
                  rel="noopener noreferrer" //increases security and privacy
                >
                  GitHub
                </Link>
              </span>
              <span className="flex items-center gap-2">
                <label className="font-semibold">LinkedIn :</label>
                <Link
                  href="https://www.linkedin.com/in/sharif-ssebayigga-7025a6375/"
                  className="hover:text-red-700 underline"
                  target="_blank" //tells the browser to open the link in a new tab
                  rel="noopener noreferrer" //increases security and privacy
                >
                  LinkedIn
                </Link>
              </span>
            </div>

            <button
              type="submit" //this is the on submit button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactForm;
