import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Sharif Portfolio",
    default: "Ssebayigga Sharif – Front-End Developer",
  },
  description:
    "Front-End Developer specializing in Next.js, TypeScript, and React. Building fast, beautiful, and accessible web applications.",
  keywords: [
    "Ssebayigga Sharif",
    "Front-End Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Uganda",
    "Web Development",
  ],
  authors: [
    { name: "Ssebayigga Sharif", url: "https://github.com/ssebayigga-sharif" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ssebayigga Sharif Portfolio",
    title: "Ssebayigga Sharif – Front-End Developer",
    description:
      "Front-End Developer specializing in Next.js, TypeScript, and React.",
    images: [
      {
        url: "/saaarif.png",
        width: 350,
        height: 400,
        alt: "Ssebayigga Sharif",
      },
    ],
  },
  icons: {
    icon: "/saaarif.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-950 text-gray-100`}
      >
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
