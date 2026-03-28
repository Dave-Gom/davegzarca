import type { BeyondCodeSectionTranslations } from "@/infrastructure/types/translations/screens";
import MentoringCard from "./MentoringCard";
import OpenSourceCard from "./OpenSourceCard";
import SpeakingCard from "./SpeakingCard";
import AppearancesCard from "./AppearancesCard";

interface BeyondCodeSectionProps {
  t: BeyondCodeSectionTranslations;
}

const BeyondCodeSection = ({ t }: BeyondCodeSectionProps) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
        <h2 className="text-2xl font-bold text-primary">{t.title}</h2>
        <span className="uppercase tracking-widest text-secondary font-semibold text-sm">
          {t.subtitle}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MentoringCard t={t.mentoringCard} />
        <OpenSourceCard t={t.openSourceCard} />
        <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpeakingCard t={t.speakingCard} />
          <AppearancesCard t={t.appearancesCard} />
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
