import type { Dictionary } from "@/infrastructure/types";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

interface ProjectsSectionProps {
  t: Dictionary["home"];
}

const ProjectsSection = ({ t }: ProjectsSectionProps) => {
  return (
    <section className="py-32 bg-surface" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <SectionHeader label={t.worksLabel} title={t.worksTitle} />
        </div>
        <div className="space-y-32">
          <ProjectCard
            images={[
              "assets/images/projects/mango/image.png",
              "assets/images/projects/mango/image2.png",
              "assets/images/projects/mango/image3.png",
              "assets/images/projects/mango/image4.png",
              "assets/images/projects/mango/image5.png",
              "assets/images/projects/mango/image6.png",
            ]}
            imageAlt={t.project1Alt}
            tags={["React Native", "UIKit", "Kotlin"]}
            title={t.project1Title}
            description={t.project1Desc}
            impact={t.project1Impact}
            impactLabel={t.project1ImpactLabel}
            icon="verified"
            role={t.project1Role}
          />
          <ProjectCard
            images={[
              "assets/images/projects/contimovil/image.png",
              "assets/images/projects/contimovil/image2.png",
              "assets/images/projects/contimovil/image3.png",
              "assets/images/projects/contimovil/image4.png",
              "assets/images/projects/contimovil/image5.png",
              "assets/images/projects/contimovil/image6.png",
              "assets/images/projects/contimovil/image7.png",
            ]}
            imageAlt={t.project2Alt}
            tags={["Swift UI", "PostgreSQL", "AWS Lambda"]}
            title={t.project2Title}
            description={t.project2Desc}
            impact={t.project2Impact}
            impactLabel={t.project2ImpactLabel}
            icon="architecture"
            role={t.project2Role}
            imagePosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
