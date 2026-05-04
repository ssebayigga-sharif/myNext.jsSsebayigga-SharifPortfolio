import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Users } from "lucide-react";
import { WHY_ME_POINTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Me",
  description:
    "Why choose Ssebayigga Sharif for your next web development project — modern frontend, polished UX, and fast delivery.",
};

export default function WhyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-14">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Why Me
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Why I&apos;m the right choice for your next web project
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I create modern frontend experiences that look great, perform well,
          and solve real problems for users and businesses.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mb-10">
        {WHY_ME_POINTS.map((point) => (
          <article
            key={point.title}
            className="rounded-4xl border border-gray-800 bg-gray-900 p-8 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-600/15 text-indigo-300">
              {point.title.includes("Modern") ? (
                <Sparkles size={20} />
              ) : point.title.includes("Problem") ? (
                <ShieldCheck size={20} />
              ) : (
                <Users size={20} />
              )}
            </div>
            <h2 className="text-white text-xl font-semibold mb-3">
              {point.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {point.body}
            </p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
          <h2 className="text-white text-xl font-bold mb-4">
            Clear communication
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            I keep project conversations simple, open, and aligned with your
            business goals.
          </p>
        </div>
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
          <h2 className="text-white text-xl font-bold mb-4">
            Focused delivery
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            I deliver clean, maintainable code designed for real use and fast
            iteration.
          </p>
        </div>
        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-8">
          <h2 className="text-white text-xl font-bold mb-4">
            Client-first mindset
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your success is the goal — I build with the end user and business
            value in mind.
          </p>
        </div>
      </div>

      <div className="mt-14 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40 transition-all duration-200 hover:bg-indigo-500"
        >
          Talk about your next project
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
