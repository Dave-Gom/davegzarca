/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience | Architectural Portfolio",
};

export default function ExperiencePage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-20 md:w-2/3">
        <span className="uppercase tracking-widest text-on-secondary-container mb-4 block text-sm">
          Professional History
        </span>
        <h1 className="text-[3.5rem] font-bold tracking-tighter text-primary leading-none mb-6">
          Experience
        </h1>
        <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
          A chronological architectural deep-dive into nearly a decade of
          building high-performance mobile ecosystems and scalable fullstack
          solutions.
        </p>
      </header>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/30 transform md:-translate-x-1/2 hidden md:block"></div>

        {/* Role 1: CloudStream */}
        <div className="relative mb-24 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-left md:text-right order-2 md:order-1">
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm">
              <div className="flex items-center justify-between md:flex-row-reverse gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary-container">
                  CloudStream
                </h3>
                <span className="text-sm bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full">
                  Current
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                Senior Staff Engineer
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed text-left">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    architecture
                  </span>
                  <span>
                    Spearheaded the migration of legacy monolith to a
                    distributed micro-frontend architecture, improving deployment
                    frequency by 40%.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    speed
                  </span>
                  <span>
                    Optimized mobile application cold-start time by 60% through
                    advanced caching strategies and lazy-loading modules.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    groups
                  </span>
                  <span>
                    Mentored a team of 15+ engineers, implementing strict code
                    review standards and design document protocols.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-container z-10 border-4 border-surface ring-4 ring-primary-container/10"></div>
          <div className="md:w-1/2 md:pl-16 order-1 md:order-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
              2021 — PRESENT
            </span>
          </div>
        </div>

        {/* Role 2: FinTech Collective */}
        <div className="relative mb-24 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 md:pr-16 mb-4 md:mb-0 text-left md:text-right">
            <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
              2018 — 2021
            </span>
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant z-10 border-4 border-surface ring-4 ring-outline-variant/10"></div>
          <div className="md:w-1/2 md:pl-16">
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary-container">
                  FinTech Collective
                </h3>
                <span className="text-sm bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full">
                  3 Years
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                Lead Mobile Developer
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    verified_user
                  </span>
                  <span>
                    Engineered a secure biometric authentication layer reducing
                    user onboarding friction and decreasing setup time by 50%.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    star
                  </span>
                  <span>
                    Maintained a consistent 4.8-star rating on both App Store and
                    Play Store through proactive crash monitoring and UX
                    refinements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    monitoring
                  </span>
                  <span>
                    Established automated CI/CD pipelines for mobile deployments,
                    reducing manual release efforts by 80%.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Role 3: StartupFoundry */}
        <div className="relative mb-12 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-left md:text-right order-2 md:order-1">
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm">
              <div className="flex items-center justify-between md:flex-row-reverse gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary-container">
                  StartupFoundry
                </h3>
                <span className="text-sm bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full">
                  2 Years
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                Fullstack Engineer
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed text-left">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    rocket_launch
                  </span>
                  <span>
                    Bootstrapped 5+ MVP products for early-stage startups using
                    React, Node.js, and PostgreSQL in rapid 6-week cycles.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    database
                  </span>
                  <span>
                    Implemented real-time synchronization engines for
                    collaborative tools using WebSockets and Redis.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    layers
                  </span>
                  <span>
                    Designed and documented RESTful APIs utilized by over 200,000
                    monthly active users across the foundry portfolio.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant z-10 border-4 border-surface ring-4 ring-outline-variant/10"></div>
          <div className="md:w-1/2 md:pl-16 order-1 md:order-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
              2016 — 2018
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-32 p-12 rounded-xl bg-primary-container text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Ready to build something lasting?
          </h2>
          <p className="text-on-primary-container">
            Currently open to senior architectural consulting and leadership
            roles.
          </p>
        </div>
        <div className="relative z-10 flex gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-primary-container font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </Link>
          <button className="px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
            Download CV
          </button>
        </div>
        {/* Decorative Texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv8GXj8rCkU-dGS-gj2IHaT39jWIV2kWyt1TLNZDks4f9Q3-7ZQ1g7R478tBbZnLWm_i04CD9ltn-680Mwyg3eZxgL8X-Xs1yUuAP2Fo4x2j2JSneNdoCYf_eJi8GBQFVJs6xuRHxb1W140U3XQc0mdmz0mjDMAHJHx8uL9HDkSjPGILcLQ_j5ZwbettjVzOH7LhgXXzisN_YJf1L61mjpoa6hRCMJ9nCMMsfOsprB-0EtM0kEsZQ3BV_RI0e4MKFZ-rRv9JXdT-Ds')",
          }}
        ></div>
      </section>
    </main>
  );
}
