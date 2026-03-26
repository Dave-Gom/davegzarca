import type { ExperienceDictionary } from "@/infrastructure/types";
import Link from "next/link";

interface ExperienceCtaProps {
  t: ExperienceDictionary;
  lang: string;
  resumeFile: string;
}

const ExperienceCta = ({ t, lang, resumeFile }: ExperienceCtaProps) => {
  return (
    <section className="mt-32 p-12 rounded-xl bg-primary-container text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold tracking-tight mb-2">
          {t.ctaTitle}
        </h2>
        <p className="text-on-primary-container">{t.ctaDesc}</p>
      </div>
      <div className="relative z-10 flex gap-4">
        <Link
          href={`/${lang}/contact`}
          className="px-8 py-3 bg-white text-primary-container font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          {t.ctaButton}
        </Link>
        <a
          href={resumeFile}
          download
          className="px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
        >
          {t.ctaDownload}
        </a>
      </div>
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv8GXj8rCkU-dGS-gj2IHaT39jWIV2kWyt1TLNZDks4f9Q3-7ZQ1g7R478tBbZnLWm_i04CD9ltn-680Mwyg3eZxgL8X-Xs1yUuAP2Fo4x2j2JSneNdoCYf_eJi8GBQFVJs6xuRHxb1W140U3XQc0mdmz0mjDMAHJHx8uL9HDkSjPGILcLQ_j5ZwbettjVzOH7LhgXXzisN_YJf1L61mjpoa6hRCMJ9nCMMsfOsprB-0EtM0kEsZQ3BV_RI0e4MKFZ-rRv9JXdT-Ds')",
        }}
      ></div>
    </section>
  );
};

export default ExperienceCta;
