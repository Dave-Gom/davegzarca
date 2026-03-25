/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.home;

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[870px] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-2 space-y-8">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-xs">
              {t.basedIn}
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-primary leading-[1.1]">
              {t.heroName}
              <br />
              <span className="text-on-primary-container">{t.heroTagline}</span>
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
              {t.heroDescription}
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <a
                className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                href="#projects"
              >
                {t.viewWork}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
              <Link
                className="bg-surface-container-high text-primary px-8 py-4 rounded-lg font-semibold transition-all hover:bg-surface-container-highest"
                href={`/${lang}/contact`}
              >
                {t.getInTouch}
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
              <img
                alt={t.portraitAlt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWRn39l-xmGHUB-TXZUYiuzwrh1-yKAnfNqf-AjdCZNplPfoUeqAAlHvq1hRgdmITdTRl_VOlSZ93axbCMS9NOnx7qIiTJXQKxKYGJFbcLtvGnhEUdJ66D84DAOL1R0aFAh6D0xk0rkUm2Swc4SCZtxOex57KwTBc9R_gFAphCFY8tJsk19TeZDVz717aPOl1NpAZEw7MylUjE_c4Xs2d5uxwC61aFVBfy8Vik-Hu0cvtFfx_H9hX4TRIRodLAe_x_VGpakZGxBWi5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-surface-container-low" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
              {t.philosophyLabel}
            </h2>
            <p className="text-3xl font-bold text-primary leading-tight">
              {t.philosophyTitle}
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-6">
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {t.philosophyP1Start}
              <strong>{t.philosophyP1Bold1}</strong>
              {t.philosophyP1Mid}
              <strong>{t.philosophyP1Bold2}</strong>
              {t.philosophyP1End}
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              {t.philosophyP2}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-extrabold text-primary">
                  {t.yearsCount}
                </p>
                <p className="text-sm font-medium text-secondary tracking-wide uppercase mt-2">
                  {t.yearsLabel}
                </p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-primary">
                  {t.appsCount}
                </p>
                <p className="text-sm font-medium text-secondary tracking-wide uppercase mt-2">
                  {t.appsLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-surface" id="projects">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
                {t.worksLabel}
              </h2>
              <h3 className="text-4xl font-extrabold text-primary tracking-tighter">
                {t.worksTitle}
              </h3>
            </div>
          </div>
          <div className="space-y-32">
            {/* Project 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-xl overflow-hidden bg-surface-container-low shadow-sm">
                <img
                  alt={t.project1Alt}
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
                  {t.project1Title}
                </h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {t.project1Desc}
                </p>
                <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-bold text-xl">
                    {t.project1Impact}
                  </p>
                  <p className="text-secondary text-sm font-medium uppercase mt-1">
                    {t.project1ImpactLabel}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span className="material-symbols-outlined">verified</span>
                  <span>{t.project1Role}</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-last rounded-xl overflow-hidden bg-surface-container-low shadow-sm">
                <img
                  alt={t.project2Alt}
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
                  {t.project2Title}
                </h4>
                <p className="text-on-surface-variant text-lg leading-relaxed">
                  {t.project2Desc}
                </p>
                <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-primary font-bold text-xl">
                    {t.project2Impact}
                  </p>
                  <p className="text-secondary text-sm font-medium uppercase mt-1">
                    {t.project2ImpactLabel}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span className="material-symbols-outlined">
                    architecture
                  </span>
                  <span>{t.project2Role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-surface-container-low" id="experience">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
                {t.historyLabel}
              </h2>
              <h3 className="text-4xl font-extrabold text-primary tracking-tighter">
                {t.historyTitle}
              </h3>
            </div>
            <div className="md:col-span-8 space-y-20">
              {/* Role 1 */}
              <div className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                  <span className="text-sm font-bold text-primary/40 uppercase tracking-widest md:w-32 pt-1">
                    {t.role1Period}
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="text-2xl font-bold text-primary">
                      {t.role1Title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed max-w-xl">
                      {t.role1Desc}
                    </p>
                    <ul className="space-y-3 text-sm text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          check_circle
                        </span>
                        {t.role1Item1}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          check_circle
                        </span>
                        {t.role1Item2}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Role 2 */}
              <div className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                  <span className="text-sm font-bold text-primary/40 uppercase tracking-widest md:w-32 pt-1">
                    {t.role2Period}
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="text-2xl font-bold text-primary">
                      {t.role2Title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed max-w-xl">
                      {t.role2Desc}
                    </p>
                    <ul className="space-y-3 text-sm text-secondary">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          check_circle
                        </span>
                        {t.role2Item1}
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary">
                          check_circle
                        </span>
                        {t.role2Item2}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Role 3 */}
              <div className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                  <span className="text-sm font-bold text-primary/40 uppercase tracking-widest md:w-32 pt-1">
                    {t.role3Period}
                  </span>
                  <div className="space-y-4 flex-1">
                    <h4 className="text-2xl font-bold text-primary">
                      {t.role3Title}
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed max-w-xl">
                      {t.role3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
              {t.skillsLabel}
            </h2>
            <h3 className="text-4xl font-extrabold text-primary tracking-tighter">
              {t.skillsTitle}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-white">
                  smartphone
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-6">
                {t.mobileTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Native",
                  "iOS / Swift",
                  "Android / Kotlin",
                  "Core Bluetooth",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-white">
                  database
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-6">
                {t.backendTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "GraphQL",
                  "PostgreSQL",
                  "Redis",
                  "TypeScript",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-white">
                  terminal
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-6">
                {t.devopsTitle}
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS", "Terraform", "CI/CD", "Unit Testing"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant"
                    >
                      {skill}
                    </span>
                  )
                )}
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
            {t.ctaLabel}
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12">
            {t.ctaTitle}
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
              {t.ctaLinkedIn}
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] opacity-50"></div>
      </section>
    </main>
  );
}
