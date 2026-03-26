import type { Dictionary } from "@/infrastructure/translations/dictionaries";
import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";

interface SkillsSectionProps {
  t: Dictionary["home"];
}

const SkillsSection = ({ t }: SkillsSectionProps) => {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <SectionHeader label={t.skillsLabel} title={t.skillsTitle} centered titleSize="lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            icon="smartphone"
            title={t.mobileTitle}
            skills={["React Native", "iOS / Swift", "Android / Kotlin", "Core Bluetooth"]}
          />
          <SkillCard
            icon="database"
            title={t.backendTitle}
            skills={["Node.js", "GraphQL", "PostgreSQL", "Redis", "TypeScript"]}
          />
          <SkillCard
            icon="terminal"
            title={t.devopsTitle}
            skills={["Docker", "AWS", "Terraform", "CI/CD", "Unit Testing"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
