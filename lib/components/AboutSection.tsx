import type { Dictionary } from "@/infrastructure/translations/dictionaries";
import SectionHeader from "./SectionHeader";

interface AboutSectionProps {
  t: Dictionary["home"];
}

const AboutSection = ({ t }: AboutSectionProps) => {
  return (
    <section className="py-32 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <SectionHeader label={t.philosophyLabel} title={t.philosophyTitle} titleSize="lg" />
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6">
          <p className="text-lg text-on-surface-variant leading-relaxed">
            {t.philosophyP1Start}
            <strong>{t.philosophyP1Bold1}</strong>
            {t.philosophyP1Mid}
            <strong>{t.philosophyP1Bold2}</strong>
            {t.philosophyP1End}
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            {t.philosophyP2}
          </p>
          <div className="grid grid-cols-2 gap-8 pt-8">
            <StatItem value={t.yearsCount} label={t.yearsLabel} />
            <StatItem value={t.appsCount} label={t.appsLabel} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const StatItem = ({ value, label }: { value: string; label: string }) => {
  return (
    <div>
      <p className="text-3xl md:text-4xl font-extrabold text-primary">
        {value}
      </p>
      <p className="text-sm font-medium text-secondary tracking-wide uppercase mt-2">
        {label}
      </p>
    </div>
  );
};
