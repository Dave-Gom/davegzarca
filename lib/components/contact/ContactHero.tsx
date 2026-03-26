/* eslint-disable @next/next/no-img-element */
import type { ContactDictionary } from "@/infrastructure/types";

interface ContactHeroProps {
  t: ContactDictionary;
}

const ContactHero = ({ t }: ContactHeroProps) => {
  return (
    <div className="lg:col-span-7 space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-[3.5rem] leading-none font-bold tracking-tight text-primary-container">
          {t.title} <br />
          {t.titleLine2}
        </h1>
        <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed pt-4">
          {t.description}
        </p>
      </header>
      <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-surface-container-low grayscale hover:grayscale-0 transition-all duration-700">
        <img
          className="w-full h-full object-cover"
          alt={t.imageAlt}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZMAHPoQ8SALYNIRHz-mE3Idt-_PTNgqJIi6jjhF1kN2SHaGu71qMHxQXgxRush_Ir--kitAezlI5gFwFQWKvzcgCGAZA6cVkLs06aocCCZOuFCb1bt3rZEBJ5YGsqdvnKR962ksV5SBHwF62bynMlLyQAhgMxRFvZO7EeOwfGr4sBGbQ_m0USXxN9supi0WbEwjgMD2LePzWXqcFuIvX01JEGCZRI4uydXdAIC99B_Faw9u9Im4Wx0YzYAbpi65l-AcSBrt0THLsY"
        />
      </div>
    </div>
  );
};

export default ContactHero;
