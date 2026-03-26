/* eslint-disable @next/next/no-img-element */
import type { AboutDictionary } from "@/infrastructure/types";

interface AboutHeroSectionProps {
  t: AboutDictionary;
}

const AboutHeroSection = ({ t }: AboutHeroSectionProps) => {
  return (
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
  );
};

export default AboutHeroSection;
