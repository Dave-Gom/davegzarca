import type { Locale } from "@/infrastructure/types";
import { Footer } from "@/lib/components/Footer";
import Navbar from "@/lib/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import {
  defaultLocale,
  getDictionary,
  hasLocale,
  locales,
} from "../../infrastructure/translations/dictionaries";
import "../globals.css";

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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const generateStaticParams = async () =>
  locales.map((lang) => ({ lang }));

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
    metadataBase: new URL(SITE_URL),
    title: dict.metadata.homeTitle,
    description: dict.metadata.homeDescription,
    keywords: dict.metadata.homeKeywords,
    authors: [{ name: "David Gómez" }],
    creator: "David Gómez",
    publisher: "David Gómez",
    applicationName: "David Gómez Portfolio",
    category: "Software Development",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => ogLocaleMap[l]),
      url: `${SITE_URL}/${locale}`,
      siteName: "David Gómez Portfolio",
      title: dict.metadata.homeTitle,
      description: dict.metadata.homeDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.homeTitle,
      description: dict.metadata.homeDescription,
      images: [`${SITE_URL}/${locale}/opengraph-image`],
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        ...Object.fromEntries(
          locales.map((l) => [hrefLangMap[l], `${SITE_URL}/${l}`])
        ),
        "x-default": `${SITE_URL}/${defaultLocale}`,
      },
    },
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) => {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);
  const locale = lang as Locale;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Gómez",
    url: `${SITE_URL}/${locale}`,
    jobTitle: "Senior Fullstack Mobile & Web Developer",
    sameAs: [
      "https://www.linkedin.com/in/davegzarca/",
      "https://github.com/Dave-Gom",
      "https://www.instagram.com/davegzarca/",
    ],
    knowsAbout: ["React Native", "TypeScript", "Node.js", "Fintech"],
  };

  return (
    <html lang={lang} className={`${inter.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-white font-body"
        cz-shortcut-listen="true"
      >
        <Navbar lang={locale} labels={dict.navbar} />
        {children}
        <Footer labels={dict.footer} />
      </body>
    </html>
  );
};

export default RootLayout;
