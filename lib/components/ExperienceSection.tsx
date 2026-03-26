import type { Dictionary } from "@/infrastructure/translations/dictionaries";
import SectionHeader from "./SectionHeader";
import ExperienceRole from "./ExperienceRole";

interface ExperienceSectionProps {
  t: Dictionary["home"];
}

const ExperienceSection = ({ t }: ExperienceSectionProps) => {
  return (
    <section className="py-32 bg-surface-container-low" id="experience">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <SectionHeader label={t.historyLabel} title={t.historyTitle} />
          </div>
          <div className="md:col-span-8 space-y-20">
            <ExperienceRole
              period={t.role1Period}
              title={t.role1Title}
              description={t.role1Desc}
              items={[t.role1Item1, t.role1Item2]}
            />
            <ExperienceRole
              period={t.role5Period}
              title={t.role5Title}
              description={t.role5Desc}
            />
            <ExperienceRole
              period={t.role2Period}
              title={t.role2Title}
              description={t.role2Desc}
              items={[t.role2Item1, t.role2Item2]}
            />
            <ExperienceRole
              period={t.role3Period}
              title={t.role3Title}
              description={t.role3Desc}
            />
            <ExperienceRole
              period={t.role4Period}
              title={t.role4Title}
              description={t.role4Desc}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
