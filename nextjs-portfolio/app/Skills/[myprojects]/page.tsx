"use client";

import React from "react";
import Link from "next/link";

const MyProjects = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 ">
        My Projects
      </h2>
      <div className="flex flex-col gap-6 ">
        <div>
          <Link
            href="https://sharifcalculator-nnf4rvsuy-ssebayigga-sharifs-projects.vercel.app/"
            className=" font-serif hover: text-green-400"
          >
            Calculator
          </Link>
        </div>
        <div>
          <Link
            href={
              "https://landing-page-beoc7rbpt-ssebayigga-sharifs-projects.vercel.app/"
            }
            className=" font-mono text-shadow-blue-400"
          >
            Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
