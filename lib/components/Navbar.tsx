"use client";

import { Locale } from "@/infrastructure/translations/dictionaries";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavbarProps {
  lang: Locale;
  labels: {
    brand: string;
    home: string;
    about: string;
    experience: string;
    contact: string;
    resume: string;
    resumeFile: string;
  };
}

const Navbar = ({ lang, labels }: NavbarProps) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${lang}`, label: labels.home, match: null },
    { href: `/${lang}/about`, label: labels.about, match: "/about" },
    {
      href: `/${lang}/experience`,
      label: labels.experience,
      match: "/experience",
    },
    { href: `/${lang}/contact`, label: labels.contact, match: "/contact" },
  ];

  const isActive = (link: (typeof navLinks)[number]) => {
    const pathWithoutLang = pathname.replace(`/${lang}`, "") || "/";
    if (link.match === null) return pathWithoutLang === "/";
    return pathWithoutLang.startsWith(link.match);
  };

  const allLocales: Locale[] = ["en", "es", "de"];
  const otherLocales = allLocales.filter((l) => l !== lang);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-16">
        <Link
          href={`/${lang}`}
          className="text-lg md:text-xl font-bold tracking-tighter text-slate-900"
        >
          {labels.brand}
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link)
                  ? "text-slate-900 font-semibold border-b border-slate-900 pb-1 font-sans text-sm tracking-tight"
                  : "text-slate-500 hover:text-slate-900 transition-colors font-sans text-sm tracking-tight font-medium"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {lang.toUpperCase()}
            </span>
            <span className="text-slate-300 text-xs">/</span>
            {otherLocales.map((l, i) => (
              <span key={l} className="flex items-center">
                <Link
                  href={pathname.replace(`/${lang}`, `/${l}`)}
                  className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-slate-900 transition-colors"
                >
                  {l.toUpperCase()}
                </Link>
                {i < otherLocales.length - 1 && (
                  <span className="text-slate-300 text-xs mx-1">/</span>
                )}
              </span>
            ))}
          </div>
          <a
            href={labels.resumeFile}
            download
            className="hidden md:block bg-primary-container text-on-primary px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {labels.resume}
          </a>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      <div className="bg-slate-200/20 h-px w-full absolute bottom-0"></div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-slate-200/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive(link)
                    ? "text-slate-900 font-semibold py-3 px-4 rounded-lg bg-slate-100/50 text-sm tracking-tight"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50 py-3 px-4 rounded-lg transition-colors text-sm tracking-tight font-medium"
                }
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-slate-200/30">
              <a
                href={labels.resumeFile}
                download
                className="w-full bg-primary-container text-on-primary px-5 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity block text-center"
              >
                {labels.resume}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
