import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  getDictionary,
  hasLocale,
  locales,
  type Locale,
} from "./dictionaries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.homeTitle,
    description: dict.metadata.homeDescription,
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className={`${inter.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface antialiased selection:bg-primary-container selection:text-white font-body">
        <Navbar lang={lang as Locale} labels={dict.navbar} />
        {children}
        <Footer labels={dict.footer} />
      </body>
    </html>
  );
}
