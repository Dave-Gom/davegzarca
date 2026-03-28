import type { ExperienceHeaderTranslations } from "@/infrastructure/types/translations/screens";

interface ExperienceHeaderProps {
  t: ExperienceHeaderTranslations;
}

const ExperienceHeader = ({ t }: ExperienceHeaderProps) => {
  return (
    <header className="mb-20 md:w-2/3">
      <span className="uppercase tracking-widest text-on-secondary-container mb-4 block text-sm">
        {t.subtitle}
      </span>
      <h1 className="text-3xl md:text-[3.5rem] font-bold tracking-tighter text-primary leading-none mb-6">
        {t.title}
      </h1>
      <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
        {t.description}
      </p>
    </header>
  );
};

export default ExperienceHeader;
