/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[870px] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-8">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
              Based in San Francisco
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1]">
              Alex Chen.
              <br />
              <span className="text-on-primary-container">
                Architecting Scalable Mobile Ecosystems.
              </span>
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
              Senior Mobile &amp; Fullstack Developer specializing in
              high-performance React Native architectures and robust Node.js
              infrastructures for industry leaders.
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <a
                className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                href="#projects"
              >
                View My Work
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
              <Link
                className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:bg-surface-container-highest"
                href="/contact"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <img
                alt="Portrait of Alex Chen"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWRn39l-xmGHUB-TXZUYiuzwrh1-yKAnfNqf-AjdCZNplPfoUeqAAlHvq1hRgdmITdTRl_VOlSZ93axbCMS9NOnx7qIiTJXQKxKYGJFbcLtvGnhEUdJ66D84DAOL1R0aFAh6D0xk0rkUm2Swc4SCZtxOex57KwTBc9R_gFAphCFY8tJsk19TeZDVz717aPOl1NpAZEw7MylUjE_c4Xs2d5uxwC61aFVBfy8Vik-Hu0cvtFfx_H9hX4TRIRodLAe_x_VGpakZGxBWi5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section (Asymmetrical Layout) */}
      <section className="py-32 bg-surface-container-low" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
              The Philosophy
            </h2>
            <p className="text-3xl font-bold text-primary leading-tight">
              Code quality is a prerequisite; strategic decision-making is the
              differentiator.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6">
            <p className="text-lg text-on-surface-variant leading-relaxed">
              With over 8 years of experience, I lead engineering teams through
              the complexity of modern product lifecycles. My approach focuses on{" "}
              <strong>predictable delivery</strong> and{" "}
              <strong>maintainable abstraction</strong>.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              I bridge the gap between technical execution and business
              objectives, ensuring that every architectural choice—from database
              schema to state management—directly supports long-term product
              growth and team velocity.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-extrabold text-primary">8+</p>
                <p className="text-sm font-medium text-secondary tracking-wide uppercase mt-2">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-primary">14</p>
                <p className="text-sm font-medium text-secondary tracking-wide uppercase mt-2">
                  Shipped Apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Gallery Style) */}
      <section className="py-32 bg-surface" id="projects">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
                Selected Works
              </h2>
              <h3 className="text-4xl font-extrabold text-primary tracking-tighter">
                Impact-Driven Engineering
              </h3>
            </div>
          </div>
          <div className="space-y-32">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-sm">
                <img
                  alt="Fintech Dashboard Project"
                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGgrSwLQvRfQ3PpkRlNKXqBI3-KyLAtPnSlPNlmNBzGzfFVB73IHkzbG4HPmernA--LR3vQbe7bqWQqpx8gy5QgHQKg26fTI6jRAi9ZAU5xIwhQKnnL_x4xS5Og12XB-TBjDXMyNmUHc9jxJjnbXKW0WTv9oRD46ChjHc-g335Qnr8ByHXgNjUJzo_gBfU-okn6FMV_WGIOVtLbt7OV39a10c-7N5jIn95WHfiyGrEAUgBkpFb8KET2V8koDxapFXvG3s7ugADPKzJ"
                />
              </div>
              <div className="space-y-6">
                <div className="flex gap-3 flex-wrap">
                  <span className="ghost-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">
                    React Native
                  </span>
                  <span className="ghost-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">
                    GraphQL
                  </span>
                  <span className="ghost-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">
                    Node.js
                  </span>
                </div>
                <h4 className="text-3xl font-bold text-primary tracking-tight">
                  Vanguard Finance Mobile
                </h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Lead architect for a high-frequency trading mobile application.
                  Engineered a custom WebSocket middleware that reduced real-time
                  data latency by 60%, enabling sub-second price updates.
                </p>
                <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-bold text-xl">
                    40% Performance Increase
                  </p>
                  <p className="text-secondary text-sm font-medium uppercase mt-1">
                    Measurable Impact
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span className="material-symbols-outlined">verified</span>
                  <span>Lead Mobile Architect</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-last rounded-xl overflow-hidden bg-surface-container-low shadow-sm">
                <img
                  alt="E-commerce Fullstack Platform"
                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-CmxdgQYe5ciIRC0_uHQHJawgn9ykSpxl0Rvg4hJtR8NzetLW0IDM_nzBhEY9O5rEsjsgoJ4q86V5sVqXw-RZvsMXdPFZfWyL7ooSyZpS7jWofoFC_61wdf0Ya7GuC2XErtt5aeY5dQ4P8vpv2RyJUdHDJmQwJXGQ_jqpPv9Q7pU29TmtwOPaGvRpk6bQOabBuk8puvDMW2_skOtkwDPbDQQeimGr8vPdXE80akancpPUSOOUH5pfh_8bwVMEsoWq9YwYuAVus-QJ"
                />
              </div>
              <div className="space-y-6">
                <div className="flex gap-3 flex-wrap">
                  <span className="ghost-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">
                    Swift UI
                  </span>
                  <span className="ghost-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">
                    PostgreSQL
                  </span>
                  <span className="ghost-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary">
                    AWS Lambda
                  </span>
                </div>
                <h4 className="text-3xl font-bold text-primary tracking-tight">
                  Aura Marketplace
                </h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  Redesigned the checkout infrastructure for a luxury retail
                  platform. Implemented a distributed caching layer that handled
                  10k+ concurrent transactions during peak seasonal launches.
                </p>
                <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-bold text-xl">
                    0% Downtime During Black Friday
                  </p>
                  <p className="text-secondary text-sm font-medium uppercase mt-1">
                    Infrastructure Resilience
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span className="material-symbols-outlined">
                    architecture
                  </span>
                  <span>Fullstack Systems Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section (Timeline) */}
      <section className="py-32 bg-surface-container-low" id="experience">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
                History
              </h2>
              <h3 className="text-4xl font-extrabold text-primary tracking-tighter">
                Career Milestones
              </h3>
            </div>
            <div className="md:col-span-8 space-y-20">
              {/* Role 1 */}
              <div className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                  <span className="text-sm font-bold text-primary/40 uppercase tracking-widest md:w-32 pt-1">
                    2021 — Pres.
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="text-2xl font-bold text-primary">
                      Senior Staff Engineer — CloudStream
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed max-w-xl">
                      Spearheading the transition to a monorepo architecture for
                      all mobile properties. Mentoring 12+ developers while
                      maintaining hands-on contribution to core framework
                      libraries.
                    </p>
                    <ul className="space-y-3 text-sm text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          check_circle
                        </span>
                        Reduced onboarding time for new hires by 50% via
                        documentation overhaul.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          check_circle
                        </span>
                        Orchestrated the migration from REST to Federated
                        GraphQL.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Role 2 */}
              <div className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                  <span className="text-sm font-bold text-primary/40 uppercase tracking-widest md:w-32 pt-1">
                    2018 — 2021
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="text-2xl font-bold text-primary">
                      Lead Mobile Developer — FinTech Collective
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed max-w-xl">
                      Managed the full lifecycle of the primary consumer iOS app.
                      Integrated complex biometric security protocols and
                      localized the platform for 8 international markets.
                    </p>
                    <ul className="space-y-3 text-sm text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          check_circle
                        </span>
                        4.8 Star rating maintained on App Store with 1M+ active
                        users.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          check_circle
                        </span>
                        Implemented CI/CD pipelines that reduced deployment
                        errors by 80%.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Role 3 */}
              <div className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                  <span className="text-sm font-bold text-primary/40 uppercase tracking-widest md:w-32 pt-1">
                    2016 — 2018
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="text-2xl font-bold text-primary">
                      Fullstack Engineer — StartupFoundry
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed max-w-xl">
                      Rapidly prototyped and launched MVP products for
                      venture-backed startups. Balanced technical debt with
                      high-velocity feature delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (Categorized Bento Grid) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
              Core Competencies
            </h2>
            <h3 className="text-4xl font-extrabold text-primary tracking-tighter">
              The Technical Stack
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mobile Card */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-white">
                  smartphone
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-6">
                Mobile Development
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  React Native
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  iOS / Swift
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  Android / Kotlin
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  Core Bluetooth
                </span>
              </div>
            </div>
            {/* Fullstack Card */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-white">
                  database
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-6">
                Back-end &amp; Systems
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  Node.js
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  GraphQL
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  PostgreSQL
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  Redis
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  TypeScript
                </span>
              </div>
            </div>
            {/* Infrastructure Card */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-white">
                  terminal
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-6">
                DevOps &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  Docker
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  AWS
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  Terraform
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  CI/CD
                </span>
                <span className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant">
                  Unit Testing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-32 bg-primary-container text-white overflow-hidden relative"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-on-primary-container mb-6">
            Available for Consultation
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12">
            Let&apos;s build something exceptional.
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a
              className="group bg-white text-primary px-10 py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-100 transition-all"
              href="mailto:hello@alexchen.dev"
            >
              <span className="material-symbols-outlined">mail</span>
              hello@alexchen.dev
            </a>
            <a
              className="group border border-white/20 px-10 py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">link</span>
              LinkedIn Profile
            </a>
          </div>
        </div>
        {/* Decorative backdrop */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] opacity-50"></div>
      </section>
    </main>
  );
}
