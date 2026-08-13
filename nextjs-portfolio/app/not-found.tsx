import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
      <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Page not found
      </h1>
      <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-900/40"
      >
        Back to Home
      </Link>
    </div>
  );
}
