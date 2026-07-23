import type { ProjectsSectionTranslations } from "@/infrastructure/types/translations/screens";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

interface ProjectsSectionProps {
  t: ProjectsSectionTranslations;
  className?: string;
}

const ProjectsSection = ({ t, className = "py-32 bg-surface" }: ProjectsSectionProps) => {
  return (
    <section className={className} id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
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
            imageAlt={t.project1Alt}
            tags={["React Native", "Expo", "SQLite", "Firebase"]}
            title={t.project1Title}
            description={t.project1Desc}
            impact={t.project1Impact}
            impactLabel={t.project1ImpactLabel}
            icon="monitoring"
            role={t.project1Role}
            url="https://www.ploutosapp.com.py/"
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
            imageAlt={t.project2Alt}
            tags={["React Native", "UIKit", "Kotlin"]}
            title={t.project2Title}
            description={t.project2Desc}
            impact={t.project2Impact}
            impactLabel={t.project2ImpactLabel}
            icon="verified"
            role={t.project2Role}
            imagePosition="right"
            url="https://mangoapp.com.py/"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
