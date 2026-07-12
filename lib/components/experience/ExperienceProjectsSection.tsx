import type { ExperienceProjectsSectionTranslations } from "@/infrastructure/types/translations/screens";
import ProjectCard from "../ProjectCard";
import SectionHeader from "../SectionHeader";

interface ExperienceProjectsSectionProps {
  t: ExperienceProjectsSectionTranslations;
}

const ExperienceProjectsSection = ({ t }: ExperienceProjectsSectionProps) => {
  return (
    <div className="py-20">
      <div className="mb-16">
        <SectionHeader label={t.worksLabel} title={t.worksTitle} />
      </div>
      <div className="space-y-32">
        <ProjectCard
          images={[
            "/assets/images/projects/ploutos/P1-Dashboard.jpg",
            "/assets/images/projects/ploutos/P2-Dashboard-scroll.jpg",
            "/assets/images/projects/ploutos/P3-Statistics.jpg",
            "/assets/images/projects/ploutos/P4-Categories.jpg",
            "/assets/images/projects/ploutos/P5-Transactions.jpg",
            "/assets/images/projects/ploutos/P6-Settings.jpg",
          ]}
          imageAlt={t.project3Alt}
          tags={["React Native", "Expo", "SQLite", "Firebase"]}
          title={t.project3Title}
          description={t.project3Desc}
          impact={t.project3Impact}
          impactLabel={t.project3ImpactLabel}
          icon="monitoring"
          role={t.project3Role}
        />
        <ProjectCard
          images={[
            "/assets/images/projects/mango/image.png",
            "/assets/images/projects/mango/image2.png",
            "/assets/images/projects/mango/image3.png",
            "/assets/images/projects/mango/image4.png",
            "/assets/images/projects/mango/image5.png",
            "/assets/images/projects/mango/image6.png",
          ]}
          imageAlt={t.project1Alt}
          tags={["React Native", "UIKit", "Kotlin"]}
          title={t.project1Title}
          description={t.project1Desc}
          impact={t.project1Impact}
          impactLabel={t.project1ImpactLabel}
          icon="verified"
          role={t.project1Role}
          imagePosition="right"
        />
        <ProjectCard
          images={[
            "/assets/images/projects/contimovil/image.png",
            "/assets/images/projects/contimovil/image2.png",
            "/assets/images/projects/contimovil/image3.png",
            "/assets/images/projects/contimovil/image4.png",
            "/assets/images/projects/contimovil/image5.png",
            "/assets/images/projects/contimovil/image6.png",
            "/assets/images/projects/contimovil/image7.png",
          ]}
          imageAlt={t.project2Alt}
          tags={["React Native", "Firebase", "UIKit"]}
          title={t.project2Title}
          description={t.project2Desc}
          impact={t.project2Impact}
          impactLabel={t.project2ImpactLabel}
          icon="architecture"
          role={t.project2Role}
        />
      </div>
    </div>
  );
};

export default ExperienceProjectsSection;
