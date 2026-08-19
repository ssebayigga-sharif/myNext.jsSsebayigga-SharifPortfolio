import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import "./globals.css";

const myUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(myUrl),
  title: {
    template: "%s | Sharif Portfolio",
    default: "Ssebayigga Sharif  Front-End Developer",
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
    title: "Ssebayigga Sharif  Front-End Developer",
    description:
      "Front-End Developer specializing in Next.js, TypeScript, and React.",
    images: [
      {
        url: "/saaarif.png",
        width: 1200,
        height: 630,
        alt: "Ssebayigga Sharif",
      },
    ],
  },
  icons: {
    icon: "/saaarif.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ssebayigga Sharif – Front-End Developer",
    description:
      "Front-End Developer specializing in Next.js, TypeScript, and React.",
    images: ["/saaarif.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
