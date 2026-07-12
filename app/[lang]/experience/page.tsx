import type { Locale } from "@/infrastructure/types";
import ExperienceCta from "@/lib/components/experience/ExperienceCta";
import ExperienceHeader from "@/lib/components/experience/ExperienceHeader";
import ExperienceProjectsSection from "@/lib/components/experience/ExperienceProjectsSection";
import ExperienceTimeline from "@/lib/components/experience/ExperienceTimeline";
import SectionHeader from "@/lib/components/SectionHeader";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getDictionary,
  hasLocale,
  locales,
} from "../../../infrastructure/translations/dictionaries";

const SITE_URL = "https://davegzarca.dev";

const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  es: "es_PY",
  de: "de_DE",
};

const hrefLangMap: Record<Locale, string> = {
  en: "en-US",
  es: "es",
  de: "de-DE",
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
      images: [
        {
          url: `${SITE_URL}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "David Gómez — Senior Fullstack Mobile & Web Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.experienceTitle,
      description: dict.metadata.experienceDescription,
      images: [`${SITE_URL}/${locale}/opengraph-image`],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/experience`,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [hrefLangMap[l], `${SITE_URL}/${l}/experience`]),
        ),
        "x-default": `${SITE_URL}/en/experience`,
      },
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
      <ExperienceProjectsSection t={t.projects} />
      <div className="mb-20">
        <SectionHeader
          label={t.timelineSectionLabel}
          title={t.timelineSectionTitle}
        />
      </div>
      <ExperienceTimeline t={t.timeline} />
      <ExperienceCta
        t={t.cta}
        lang={lang}
        resumeFile={dict.navbar.resumeFile}
      />
    </main>
  );
};

export default ExperiencePage;
