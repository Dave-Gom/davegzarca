import type { PhilosophySectionTranslations } from "@/infrastructure/types/translations/screens";
import PhilosophyCard from "./PhilosophyCard";

interface PhilosophySectionProps {
  t: PhilosophySectionTranslations;
}

const PhilosophySection = ({ t }: PhilosophySectionProps) => {
  return (
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
              <PhilosophyCard
                icon="architecture"
                title={t.archTitle}
                description={t.archDesc}
              />
              <PhilosophyCard
                icon="precision_manufacturing"
                title={t.precisionTitle}
                description={t.precisionDesc}
              />
              <PhilosophyCard
                icon="terminal"
                title={t.craftTitle}
                description={t.craftDesc}
              />
              <PhilosophyCard
                icon="groups"
                title={t.humanTitle}
                description={t.humanDesc}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
