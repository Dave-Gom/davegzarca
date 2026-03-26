import type { AboutDictionary } from "@/infrastructure/types";
import MentoringCard from "./MentoringCard";
import OpenSourceCard from "./OpenSourceCard";
import SpeakingCard from "./SpeakingCard";
import AppearancesCard from "./AppearancesCard";

interface BeyondCodeSectionProps {
  t: AboutDictionary;
}

const BeyondCodeSection = ({ t }: BeyondCodeSectionProps) => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
        <h2 className="text-2xl font-bold text-primary">{t.beyondTitle}</h2>
        <span className="uppercase tracking-widest text-secondary font-semibold text-sm">
          {t.beyondSubtitle}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MentoringCard t={t} />
        <OpenSourceCard t={t} />
        <div className="md:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SpeakingCard t={t} />
          <AppearancesCard t={t} />
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
