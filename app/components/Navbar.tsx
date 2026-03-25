"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-16">
        <Link
          href="/"
          className="text-lg md:text-xl font-bold tracking-tighter text-slate-900"
        >
          Architectural Portfolio
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-slate-900 font-semibold border-b border-slate-900 pb-1 font-sans text-sm tracking-tight"
                  : "text-slate-500 hover:text-slate-900 transition-colors font-sans text-sm tracking-tight font-medium"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="bg-primary-container text-on-primary px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          Resume
        </button>
      </div>
      <div className="bg-slate-200/20 h-px w-full absolute bottom-0"></div>
    </nav>
  );
}
