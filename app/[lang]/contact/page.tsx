import { notFound } from "next/navigation";
import type { Locale } from "@/infrastructure/types";
import {
  getDictionary,
  hasLocale,
  locales,
} from "../../../infrastructure/translations/dictionaries";
import ContactHero from "@/lib/components/contact/ContactHero";
import ContactSidebar from "@/lib/components/contact/ContactSidebar";
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
    title: dict.metadata.contactTitle,
    description: dict.metadata.contactDescription,
    keywords: dict.metadata.contactKeywords,
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocaleMap[l]),
      url: `${SITE_URL}/${locale}/contact`,
      siteName: "David Gómez Portfolio",
      title: dict.metadata.contactTitle,
      description: dict.metadata.contactDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.contactTitle,
      description: dict.metadata.contactDescription,
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: Object.fromEntries(
        locales.map((l) => [ogLocaleMap[l], `${SITE_URL}/${l}/contact`])
      ),
    },
  };
};

const ContactPage = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.contact;

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <ContactHero t={t.hero} />
        <ContactSidebar t={t.sidebar} />
      </div>
    </main>
  );
};

export default ContactPage;
