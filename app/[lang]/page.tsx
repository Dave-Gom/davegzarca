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
      <HeroSection t={t} lang={lang} />
      <AboutSection t={t} />
      <ProjectsSection t={t} />
      <ExperienceSection t={t} />
      <SkillsSection t={t} />
      <ContactSection t={t} />
    </main>
  );
};

export default Home;
