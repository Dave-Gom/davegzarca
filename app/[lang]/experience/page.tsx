import { notFound } from "next/navigation";
import type { Locale } from "@/infrastructure/types";
import {
  getDictionary,
  hasLocale,
  locales,
} from "../../../infrastructure/translations/dictionaries";
import ExperienceHeader from "@/lib/components/experience/ExperienceHeader";
import ExperienceTimeline from "@/lib/components/experience/ExperienceTimeline";
import ExperienceCta from "@/lib/components/experience/ExperienceCta";
import type { Metadata } from "next";

const SITE_URL = "https://www.davegzarca.dev";

const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  es: "es_PY",
  de: "de_DE",
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> => {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.experienceTitle,
    description: dict.metadata.experienceDescription,
    keywords: dict.metadata.experienceKeywords,
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocaleMap[l]),
      url: `${SITE_URL}/${locale}/experience`,
      siteName: "David Gómez Portfolio",
      title: dict.metadata.experienceTitle,
      description: dict.metadata.experienceDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.experienceTitle,
      description: dict.metadata.experienceDescription,
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/experience`,
      languages: Object.fromEntries(
        locales.map((l) => [ogLocaleMap[l], `${SITE_URL}/${l}/experience`])
      ),
    },
  };
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
