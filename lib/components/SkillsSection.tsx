import type { SkillsSectionTranslations } from "@/infrastructure/types/translations/screens";
import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";

interface SkillsSectionProps {
  t: SkillsSectionTranslations;
}

const SkillsSection = ({ t }: SkillsSectionProps) => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <SectionHeader
            label={t.skillsLabel}
            title={t.skillsTitle}
            centered
            titleSize="lg"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            icon="smartphone"
            title={t.mobileTitle}
            skills={[
              "React Native",
              "UIKit / SwiftUI",
              "Android / Kotlin",
              "Flutter / Dart",
            ]}
          />
          <SkillCard
            icon="laptop"
            title={t.webTitle}
            skills={["Next.js", "Vue.js", "CSS", "Tailwind CSS", "Laravel"]}
          />
          <SkillCard
            icon="database"
            title={t.backendTitle}
            skills={[
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "MySQL",
              "Redis",
              "MongoDB",
            ]}
          />
          <SkillCard
            icon="terminal"
            title={t.devopsTitle}
            skills={["Docker", "CI/CD", "Unit Testing", "Claude AI"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
