import { notFound } from "next/navigation";
import type { Locale } from "@/infrastructure/types";
import {
  getDictionary,
  hasLocale,
} from "../../../infrastructure/translations/dictionaries";
import ContactHero from "@/lib/components/contact/ContactHero";
import ContactSidebar from "@/lib/components/contact/ContactSidebar";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.metadata.contactTitle };
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
        <ContactHero t={t} />
        <ContactSidebar t={t} />
      </div>
    </main>
  );
};

export default ContactPage;
