/* eslint-disable @next/next/no-img-element */
import type { ContactDictionary } from "@/infrastructure/types";

interface ContactHeroProps {
  t: ContactDictionary;
}

const ContactHero = ({ t }: ContactHeroProps) => {
  return (
    <div className="lg:col-span-7 space-y-4">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-[3.5rem] leading-none font-bold tracking-tight text-primary-container">
          {t.title} <br />
          {t.titleLine2}
        </h1>
        <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed pt-4">
          {t.description}
        </p>
      </header>
      <div className="aspect-[14/9] w-full rounded-xl overflow-hidden bg-surface-container-low transition-all duration-700">
        <img
          className="w-full h-full object-cover"
          alt={t.imageAlt}
          src="/assets/images/contacts/ASUCorp.jpeg"
        />
      </div>
    </div>
  );
};

export default ContactHero;
