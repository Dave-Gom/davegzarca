import { notFound } from "next/navigation";
import type { Locale } from "@/infrastructure/types";
import {
  getDictionary,
  hasLocale,
} from "../../../infrastructure/translations/dictionaries";
import ExperienceHeader from "@/lib/components/experience/ExperienceHeader";
import ExperienceTimeline from "@/lib/components/experience/ExperienceTimeline";
import ExperienceCta from "@/lib/components/experience/ExperienceCta";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.metadata.experienceTitle };
};

const ExperiencePage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.experience;

  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <ExperienceHeader t={t.header} />
      <ExperienceTimeline t={t.timeline} />
      <ExperienceCta t={t.cta} lang={lang} resumeFile={dict.navbar.resumeFile} />
    </main>
  );
};

export default ExperiencePage;
