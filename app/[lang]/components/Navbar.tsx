"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "../dictionaries";

interface NavbarProps {
  lang: Locale;
  labels: {
    brand: string;
    about: string;
    experience: string;
    projects: string;
    contact: string;
    resume: string;
  };
}

export default function Navbar({ lang, labels }: NavbarProps) {
  const pathname = usePathname();

  const navLinks = [
    { href: `/${lang}/about`, label: labels.about, match: "/about" },
    {
      href: `/${lang}/experience`,
      label: labels.experience,
      match: "/experience",
    },
    { href: `/${lang}`, label: labels.projects, match: null },
    { href: `/${lang}/contact`, label: labels.contact, match: "/contact" },
  ];

  function isActive(link: (typeof navLinks)[number]) {
    const pathWithoutLang = pathname.replace(`/${lang}`, "") || "/";
    if (link.match === null) return pathWithoutLang === "/";
    return pathWithoutLang.startsWith(link.match);
  }

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
          <button className="bg-primary-container text-on-primary px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            {labels.resume}
          </button>
        </div>
      </div>
      <div className="bg-slate-200/20 h-px w-full absolute bottom-0"></div>
    </nav>
  );
}
