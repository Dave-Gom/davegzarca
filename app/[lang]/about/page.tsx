/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import {
  getDictionary,
  hasLocale,
  type Locale,
} from "../../../infrastructure/translations/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.metadata.aboutTitle };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.about;

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
        <div className="lg:col-span-7">
          <span className="uppercase tracking-widest text-secondary font-semibold mb-4 block text-sm">
            {t.subtitle}
          </span>
          <h1 className="text-3xl md:text-[3.5rem] font-extrabold tracking-tighter leading-none mb-8 text-primary">
            {t.title}
          </h1>
          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
        </div>
        <div className="lg:col-span-5 aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-low shadow-sm relative group">
          <img
            alt={t.portraitAlt}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            src="/assets/images/me/david_about.jpeg"
          />
          <div className="absolute inset-0 border-[24px] border-surface/10 pointer-events-none"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-32">
        <div className="bg-surface-container-low rounded-xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/5 -skew-x-12 transform translate-x-20"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {t.philosophyTitle}
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
                    {t.archTitle}
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    {t.archDesc}
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    precision_manufacturing
                  </span>
                  <h3 className="text-xl font-bold text-primary-container">
                    {t.precisionTitle}
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    {t.precisionDesc}
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    terminal
                  </span>
                  <h3 className="text-xl font-bold text-primary-container">
                    {t.craftTitle}
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    {t.craftDesc}
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    groups
                  </span>
                  <h3 className="text-xl font-bold text-primary-container">
                    {t.humanTitle}
                  </h3>
                  <p className="text-on-surface-variant text-base leading-relaxed">
                    {t.humanDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond the Code Section */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
          <h2 className="text-2xl font-bold text-primary">{t.beyondTitle}</h2>
          <span className="uppercase tracking-widest text-secondary font-semibold text-sm">
            {t.beyondSubtitle}
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
                  {t.mentoringLabel}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-primary-container mb-4">
                {t.mentoringTitle}
              </h3>
              <p className="text-on-surface-variant text-base max-w-2xl leading-relaxed">
                {t.mentoringDesc}
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <span className="px-4 py-1.5 rounded-full bg-surface-container-low text-[0.7rem] uppercase tracking-wider font-bold text-primary">
                {t.workshops}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-surface-container-low text-[0.7rem] uppercase tracking-wider font-bold text-primary">
                {t.coaching}
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
                  {t.openSourceLabel}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.openSourceTitle}</h3>
              <p className="text-on-primary-container text-base leading-relaxed">
                {t.openSourceDesc}
              </p>
            </div>
            <div className="mt-12 relative z-10">
              <span className="text-4xl font-black text-on-primary-container/20">
                {t.openSourceStars}
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
                  alt={t.speakingAlt}
                  className="w-full h-full object-cover grayscale"
                  src="/assets/images/me/productOwnerShip.jpg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-container">
                  {t.speakingTitle}
                </h3>
                <p className="text-on-surface-variant mt-2">{t.speakingDesc}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-10 ghost-border flex flex-col justify-center">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-primary uppercase text-xs tracking-[0.2em]">
                  {t.appearancesTitle}
                </h4>
                <span className="text-secondary text-xs font-mono">
                  2022-2025
                </span>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant text-sm">
                    {t.appearance1}
                  </span>
                  <span className="text-primary font-bold text-sm">
                    {t.appearance1Detail}
                  </span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant text-sm">
                    {t.appearance2}
                  </span>
                  <span className="text-primary font-bold text-sm">
                    {t.appearance2Detail}
                  </span>
                </li>
                <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                  <span className="text-on-surface-variant text-sm">
                    {t.appearance3}
                  </span>
                  <span className="text-primary font-bold text-sm">
                    {t.appearance3Detail}
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
