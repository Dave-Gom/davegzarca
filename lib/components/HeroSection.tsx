/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import type { Dictionary } from "@/infrastructure/translations/dictionaries";

interface HeroSectionProps {
  t: Dictionary["home"];
  lang: string;
}

const HeroSection = ({ t, lang }: HeroSectionProps) => {
  return (
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
              src="/assets/images/me/david_principal.jpeg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
