import { notFound } from "next/navigation";
import type { Locale } from "@/infrastructure/types";
import {
  getDictionary,
  hasLocale,
} from "../../infrastructure/translations/dictionaries";
import HeroSection from "@/lib/components/HeroSection";
import AboutSection from "@/lib/components/AboutSection";
import ProjectsSection from "@/lib/components/ProjectsSection";
import ExperienceSection from "@/lib/components/ExperienceSection";
import SkillsSection from "@/lib/components/SkillsSection";
import ContactSection from "@/lib/components/ContactSection";

const Home = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.home;

  return (
    <main className="pt-16">
      <HeroSection t={t.heroSection} lang={lang} />
      <AboutSection t={t.aboutSection} />
      <ProjectsSection t={t.projectsSection} />
      <ExperienceSection t={t.experienceSection} />
      <SkillsSection t={t.skillsSection} />
      <ContactSection t={t.contactSection} />
    </main>
  );
};

export default Home;
