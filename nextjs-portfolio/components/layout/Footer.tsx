import Link from "next/link";
import {
  GitBranch,
  LinkIcon,
  Mail,
  Phone,
  ExternalLink,
  Heart,
} from "lucide-react";
import {
  SITE_NAME,
  GITHUB_URL,
  LINKEDIN_URL,
  CONTACT_EMAIL,
  PHONE_PRIMARY,
  UPWORK_URL,
  NAV_LINKS,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-white font-bold text-lg tracking-tight">
                {SITE_NAME}
              </h3>
              <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mt-0.5">
                Front-End Developer
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building fast, beautiful, and accessible web experiences. Open to
              freelance projects and full-time opportunities.
            </p>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/50 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance work
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-300 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-indigo-300 text-sm transition-colors duration-200 group"
                >
                  <Mail
                    size={14}
                    className="text-indigo-500 group-hover:text-indigo-300 shrink-0"
                  />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_PRIMARY.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-indigo-300 text-sm transition-colors duration-200 group"
                >
                  <Phone
                    size={14}
                    className="text-indigo-500 group-hover:text-indigo-300 shrink-0"
                  />
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <GitBranch size={16} />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-blue-400 hover:bg-blue-900/20 transition-all duration-200"
                >
                  <LinkIcon size={16} />
                </a>
                <a
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Upwork"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-emerald-400 hover:bg-emerald-900/20 transition-all duration-200"
                >
                  <ExternalLink size={16} />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  aria-label="Email"
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-indigo-400 hover:bg-indigo-900/20 transition-all duration-200"
                >
                  <Mail size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            © {currentYear} {SITE_NAME}. Made with{" "}
            <Heart size={12} className="text-red-500 fill-red-500" /> All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
