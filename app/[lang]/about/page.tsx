import { notFound } from "next/navigation";
import type { Locale } from "@/infrastructure/types";
import {
  getDictionary,
  hasLocale,
} from "../../../infrastructure/translations/dictionaries";
import AboutHeroSection from "@/lib/components/about/AboutHeroSection";
import PhilosophySection from "@/lib/components/about/PhilosophySection";
import BeyondCodeSection from "@/lib/components/about/BeyondCodeSection";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.metadata.aboutTitle };
};

const AboutPage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.about;

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <AboutHeroSection t={t} />
      <PhilosophySection t={t} />
      <BeyondCodeSection t={t} />
    </main>
  );
};

export default AboutPage;
