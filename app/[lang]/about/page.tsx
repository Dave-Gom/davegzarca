import { notFound } from "next/navigation";
import type { Locale } from "@/infrastructure/types";
import {
  getDictionary,
  hasLocale,
  locales,
} from "../../../infrastructure/translations/dictionaries";
import AboutHeroSection from "@/lib/components/about/AboutHeroSection";
import PhilosophySection from "@/lib/components/about/PhilosophySection";
import BeyondCodeSection from "@/lib/components/about/BeyondCodeSection";
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
    title: dict.metadata.aboutTitle,
    description: dict.metadata.aboutDescription,
    keywords: dict.metadata.aboutKeywords,
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocaleMap[l]),
      url: `${SITE_URL}/${locale}/about`,
      siteName: "David Gómez Portfolio",
      title: dict.metadata.aboutTitle,
      description: dict.metadata.aboutDescription,
      images: [
        {
          url: "/assets/images/me/david_about.jpeg",
          width: 1200,
          height: 630,
          alt: "David Gómez — About",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.aboutTitle,
      description: dict.metadata.aboutDescription,
      images: ["/assets/images/me/david_about.jpeg"],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/about`,
      languages: Object.fromEntries(
        locales.map((l) => [ogLocaleMap[l], `${SITE_URL}/${l}/about`])
      ),
    },
  };
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
      <AboutHeroSection t={t.heroSection} />
      <PhilosophySection t={t.philosophySection} />
      <BeyondCodeSection t={t.beyondCodeSection} />
    </main>
  );
};

export default AboutPage;
