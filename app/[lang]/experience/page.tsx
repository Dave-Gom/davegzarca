/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.metadata.experienceTitle };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.experience;

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="mb-20 md:w-2/3">
        <span className="uppercase tracking-widest text-on-secondary-container mb-4 block text-sm">
          {t.subtitle}
        </span>
        <h1 className="text-[3.5rem] font-bold tracking-tighter text-primary leading-none mb-6">
          {t.title}
        </h1>
        <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
          {t.description}
        </p>
      </header>

      {/* Experience Timeline */}
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/30 transform md:-translate-x-1/2 hidden md:block"></div>

        {/* Role 1: CloudStream */}
        <div className="relative mb-24 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-left md:text-right order-2 md:order-1">
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm">
              <div className="flex items-center justify-between md:flex-row-reverse gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary-container">
                  {t.company1}
                </h3>
                <span className="text-sm bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full">
                  {t.current}
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                {t.role1}
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed text-left">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    architecture
                  </span>
                  <span>{t.role1Item1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    speed
                  </span>
                  <span>{t.role1Item2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    groups
                  </span>
                  <span>{t.role1Item3}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-container z-10 border-4 border-surface ring-4 ring-primary-container/10"></div>
          <div className="md:w-1/2 md:pl-16 order-1 md:order-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
              {t.period1}
            </span>
          </div>
        </div>

        {/* Role 2: FinTech Collective */}
        <div className="relative mb-24 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 md:pr-16 mb-4 md:mb-0 text-left md:text-right">
            <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
              {t.period2}
            </span>
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant z-10 border-4 border-surface ring-4 ring-outline-variant/10"></div>
          <div className="md:w-1/2 md:pl-16">
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary-container">
                  {t.company2}
                </h3>
                <span className="text-sm bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full">
                  {t.years3}
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                {t.role2}
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    verified_user
                  </span>
                  <span>{t.role2Item1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    star
                  </span>
                  <span>{t.role2Item2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    monitoring
                  </span>
                  <span>{t.role2Item3}</span>
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
                  {t.company3}
                </h3>
                <span className="text-sm bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full">
                  {t.years2}
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                {t.role3}
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed text-left">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    rocket_launch
                  </span>
                  <span>{t.role3Item1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    database
                  </span>
                  <span>{t.role3Item2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    layers
                  </span>
                  <span>{t.role3Item3}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant z-10 border-4 border-surface ring-4 ring-outline-variant/10"></div>
          <div className="md:w-1/2 md:pl-16 order-1 md:order-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
              {t.period3}
            </span>
          </div>
        </div>

        {/* Role 4: Sercicronos */}
        <div className="relative mb-12 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-left md:text-right order-2 md:order-1">
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant z-10 border-4 border-surface ring-4 ring-outline-variant/10"></div>
          <div className="md:w-1/2 md:pl-16 order-1 md:order-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
              {t.period4}
            </span>
          </div>
        </div>
        <div className="relative mb-12 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 order-1 md:order-2">
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary-container">
                  {t.company4}
                </h3>
                <span className="text-sm bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full">
                  {t.years4}
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                {t.role4}
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    directions_run
                  </span>
                  <span>{t.role4Item1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    timer
                  </span>
                  <span>{t.role4Item2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    layers
                  </span>
                  <span>{t.role4Item3}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant z-10 border-4 border-surface ring-4 ring-outline-variant/10"></div>
          <div className="md:w-1/2 md:pr-16 order-2 md:order-1"></div>
        </div>

        {/* Role 5: PadelSys */}
        <div className="relative mb-12 flex flex-col md:flex-row items-start md:items-center">
          <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-left md:text-right order-2 md:order-1">
            <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm">
              <div className="flex items-center justify-between md:flex-row-reverse gap-4 mb-4">
                <h3 className="text-xl font-semibold text-primary-container">
                  {t.company5}
                </h3>
                <span className="text-sm bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full">
                  {t.years5}
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-2">
                {t.role5}
              </h4>
              <ul className="space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed text-left">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    sports_tennis
                  </span>
                  <span>{t.role5Item1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    leaderboard
                  </span>
                  <span>{t.role5Item2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    layers
                  </span>
                  <span>{t.role5Item3}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant z-10 border-4 border-surface ring-4 ring-outline-variant/10"></div>
          <div className="md:w-1/2 md:pl-16 order-1 md:order-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
              {t.period5}
            </span>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-32 p-12 rounded-xl bg-primary-container text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            {t.ctaTitle}
          </h2>
          <p className="text-on-primary-container">{t.ctaDesc}</p>
        </div>
        <div className="relative z-10 flex gap-4">
          <Link
            href={`/${lang}/contact`}
            className="px-8 py-3 bg-white text-primary-container font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            {t.ctaButton}
          </Link>
          <button className="px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
            {t.ctaDownload}
          </button>
        </div>
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
