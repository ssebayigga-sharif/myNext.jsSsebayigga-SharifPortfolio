"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GitBranch,
  ExternalLink,
  ArrowRight,
  Code2,
  Zap,
  Layers,
} from "lucide-react";
import { GITHUB_URL, UPWORK_URL, LINKEDIN_URL } from "@/lib/constants";
import { type Variants } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const stats = [
  { label: "Projects Shipped", value: "10+" },
  { label: "Technologies", value: "8+" },
  { label: "Available", value: "Now" },
];

const highlights = [
  {
    icon: Code2,
    label: "Clean Code",
    desc: "Readable, maintainable, scalable",
  },
  {
    icon: Zap,
    label: "Fast Delivery",
    desc: "Delivering polished builds on time",
  },
  {
    icon: Layers,
    label: "Full UI/UX",
    desc: "From prototypes to polished experiences",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(to right, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2  h-150 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full w-fit mx-auto lg:mx-0"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to work · Frontend Developer
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              Hi, I&apos;m <span className="gradient-text">Ssebayigga</span>
              <br />
              <span className="text-gray-300 text-4xl sm:text-5xl lg:text-6xl font-bold">
                Sharif
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-indigo-300 font-semibold tracking-wide font-mono"
            >
              {"<"} Front-End Developer · Next.js · TypeScript {"/>"}
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              I build high-quality web experiences that help businesses launch
              faster, convert visitors, and stand out with polished design and
              strong performance.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-900/40 group"
              >
                Hire Me
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:bg-white/5"
              >
                <GitBranch size={16} />
                GitHub
              </a>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center lg:justify-start pt-2"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center lg:items-start"
                >
                  <span className="text-2xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-500 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-indigo-500 via-purple-500 to-cyan-500 blur-sm opacity-60 animate-pulse" />
              <div className="relative">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Image
                    src="/saaarif.png"
                    alt="Ssebayigga Sharif – Front-End Developer"
                    width={300}
                    height={340}
                    className="rounded-3xl border-2 border-white/10 object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 rounded-3xl bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <span className="flex items-center gap-1.5 bg-black/60 text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
                      <ExternalLink size={13} /> View LinkedIn Profile
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full max-w-75">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-gray-900/80 border border-gray-800 rounded-xl px-4 py-3 backdrop-blur-sm"
                >
                  <div className="p-1.5 rounded-lg bg-indigo-600/20">
                    <Icon size={14} className="text-indigo-400" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-white text-xs font-semibold">
                      {label}
                    </span>
                    <span className="text-gray-500 text-xs mt-0.5">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-8">
            <p className="text-sm text-indigo-400 uppercase tracking-[0.3em] mb-4">
              What I Build
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              High-performance web apps
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Custom applications built for speed, accessibility, and scale —
              delivered with polished user experiences.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-8">
            <p className="text-sm text-indigo-400 uppercase tracking-[0.3em] mb-4">
              UX & Motion
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Interactive interfaces
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Smooth interactions, refined animations, and an intuitive visual
              hierarchy that keeps users engaged.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-8">
            <p className="text-sm text-indigo-400 uppercase tracking-[0.3em] mb-4">
              Product Focus
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Business-ready results
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              I translate ideas into polished web products that communicate
              value clearly and convert visitors into clients.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="contact"
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Get in touch and let&apos;s
              discuss your project.
            </p>
          </div>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
