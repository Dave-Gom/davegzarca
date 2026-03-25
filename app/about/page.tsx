/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Architectural Portfolio",
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
        <div className="lg:col-span-7">
          <span className="uppercase tracking-widest text-secondary font-semibold mb-4 block text-sm">
            Senior Fullstack Developer
          </span>
          <h1 className="text-[3.5rem] font-extrabold tracking-tighter leading-none mb-8 text-primary">
            About Me
          </h1>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>
              I am a senior engineering leader specializing in high-performance
              mobile ecosystems and scalable fullstack architecture. With over a
              decade of experience, I bridge the gap between high-level business
              strategy and granular code execution.
            </p>
            <p>
              My focus lies in building resilient mobile-first platforms that
              prioritize developer experience, performance, and long-term
              maintainability. I thrive at the intersection of complex
              architectural decision-making and hands-on engineering leadership.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low shadow-sm relative group">
          <img
            alt="Professional portrait"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4eMlGdhOuT0Cp-1hC43xXT7UHuqs3LbU5B7Py93JzeRJig7P8njtISuhueFD0vljLYCU84px2u8ZwFF99oudzal1taf4pSltXpmDr131PUuD1u-JSWRUdTcFuK1vQJ3RAwRW1B1JlWpO45wr8r-Qq8mpLsQ5rFIyK5g-2325QYP7zQEeUULh8o2G4dTNOx3vN2oKtkpA_NyrlArWZMvICIP7NW737KH0W-OGwRyIqKorAtYobesEE-X9vPOvK33DUwAZiSa1GMskg"
          />
          <div className="absolute inset-0 border-[24px] border-surface/10 pointer-events-none"></div>
        </div>
      </section>

      {/* Philosophy Section - Asymmetric Layout */}
      <section className="mb-32">
        <div className="bg-surface-container-low rounded-xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/5 -skew-x-12 transform translate-x-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold text-primary mb-4">
                My Philosophy
              </h2>
              <div className="w-12 h-1 bg-primary mb-8"></div>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    architecture
                  </span>
                  <h3 className="text-xl font-bold text-primary-container">
                    Architectural Integrity
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    I believe code is a liability until it&apos;s proven as an
                    asset. I prioritize structural patterns that allow teams to
                    move fast without breaking fundamental system invariants.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    precision_manufacturing
                  </span>
                  <h3 className="text-xl font-bold text-primary-container">
                    Strategic Precision
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    Every technical decision is a business decision. I weigh the
                    long-term maintenance costs of libraries and frameworks
                    against immediate feature velocity.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    terminal
                  </span>
                  <h3 className="text-xl font-bold text-primary-container">
                    Code as Craft
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    Quality is not an afterthought; it&apos;s a prerequisite. I
                    advocate for rigorous testing, automated CI/CD pipelines, and
                    expressive, self-documenting codebases.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    groups
                  </span>
                  <h3 className="text-xl font-bold text-primary-container">
                    Human Centricity
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    Systems are built by people. I focus on reducing cognitive
                    load for developers through consistent APIs and clear
                    documentation standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Code Section - Bento Grid Style */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <h2 className="text-2xl font-bold text-primary">Beyond the Code</h2>
          <span className="uppercase tracking-widest text-secondary font-semibold text-sm">
            Leadership &amp; Impact
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mentoring Card */}
          <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-10 ghost-border flex flex-col justify-between hover:bg-surface transition-colors duration-300">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">
                  school
                </span>
                <span className="text-sm text-secondary font-bold">
                  Mentoring
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary-container mb-4">
                Cultivating Engineering Talent
              </h3>
              <p className="text-on-surface-variant text-base max-w-2xl leading-relaxed">
                I&apos;ve spent the last 5 years mentoring junior and mid-level
                developers, helping them navigate complex architectural shifts
                and fostering a culture of continuous learning and peer-review
                excellence.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <span className="px-4 py-1.5 rounded-full bg-surface-container-low text-[0.7rem] uppercase tracking-wider font-bold text-primary">
                Workshops
              </span>
              <span className="px-4 py-1.5 rounded-full bg-surface-container-low text-[0.7rem] uppercase tracking-wider font-bold text-primary">
                1:1 Coaching
              </span>
            </div>
          </div>

          {/* Open Source Card */}
          <div className="bg-primary-container text-on-primary rounded-xl p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-on-primary-container">
                  source
                </span>
                <span className="text-sm text-on-primary-container font-bold">
                  Open Source
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Giving Back</h3>
              <p className="text-on-primary-container text-base leading-relaxed">
                Active contributor to various mobile-first libraries and
                maintaining high-performance UI components for the React Native
                ecosystem.
              </p>
            </div>
            <div className="mt-12 relative z-10">
              <span className="text-4xl font-black text-on-primary-container/20">
                500+ Stars
              </span>
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[12rem]">
                code_blocks
              </span>
            </div>
          </div>

          {/* Technical Speaking Card */}
          <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-surface-container-low rounded-xl p-10 ghost-border flex items-center gap-8">
              <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-200">
                <img
                  alt="Speaking at conference"
                  className="w-full h-full object-cover grayscale"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaL9el3EaNELuOaEJ5OoQpyJb7_J_G6Fn6r03gBay5DWLs86xHYRqGJmI9SfjM2llL99wgp7C9cq3HSYnyplHIzZ-kdsoIlTpWPjgb1dxdqRFGLhgt3qgjDs71_mtVs4p8-55xv6Ug6Twdet2k-YJXhatcoIawUDvpF3MiG-wka6GPKZXQrMf-M95eCM1nr8RYxx-3S7wTGL5VBXXQEnxRCTXEqDQf9uta8XZocDjmiuK-z88LZieRgQ9upn8OzqpBo6guMbxMKaBT"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-container">
                  Technical Speaking
                </h3>
                <p className="text-on-surface-variant mt-2">
                  Regular guest at international tech summits, sharing insights
                  on mobile-native performance and system scalability.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-10 ghost-border flex flex-col justify-center">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-primary uppercase text-xs tracking-[0.2em]">
                  Latest Appearances
                </h4>
                <span className="text-secondary text-xs font-mono">
                  2023-2024
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant text-sm">
                    MobileConf Global
                  </span>
                  <span className="text-primary font-bold text-sm">
                    Helsinki
                  </span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant text-sm">
                    Fullstack Summit
                  </span>
                  <span className="text-primary font-bold text-sm">London</span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant text-sm">
                    React Native EU
                  </span>
                  <span className="text-primary font-bold text-sm">
                    Wrocław
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
