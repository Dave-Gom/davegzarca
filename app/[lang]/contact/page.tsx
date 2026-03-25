/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: dict.metadata.contactTitle };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);
  const t = dict.contact;

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-12">
          <header className="space-y-4">
            <span className="uppercase tracking-[0.2em] text-secondary font-semibold text-xs">
              {t.availability}
            </span>
            <h1 className="text-[3.5rem] leading-none font-bold tracking-tight text-primary-container">
              {t.title} <br />
              {t.titleLine2}
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed pt-4">
              {t.description}
            </p>
          </header>
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-surface-container-low grayscale hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              alt={t.imageAlt}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZMAHPoQ8SALYNIRHz-mE3Idt-_PTNgqJIi6jjhF1kN2SHaGu71qMHxQXgxRush_Ir--kitAezlI5gFwFQWKvzcgCGAZA6cVkLs06aocCCZOuFCb1bt3rZEBJ5YGsqdvnKR962ksV5SBHwF62bynMlLyQAhgMxRFvZO7EeOwfGr4sBGbQ_m0USXxN9supi0WbEwjgMD2LePzWXqcFuIvX01JEGCZRI4uydXdAIC99B_Faw9u9Im4Wx0YzYAbpi65l-AcSBrt0THLsY"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-8 sticky top-32">
          <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(26,28,29,0.04)] border border-outline-variant/10">
            <h2 className="text-xl font-semibold text-primary-container mb-8">
              {t.formTitle}
            </h2>
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="group cursor-pointer">
                <p className="uppercase tracking-widest text-secondary mb-2 text-sm">
                  {t.emailLabel}
                </p>
                <a
                  className="text-2xl font-medium text-primary hover:text-primary-container transition-colors flex items-center gap-3"
                  href="mailto:hello@alexchen.dev"
                >
                  hello@alexchen.dev
                  <span className="material-symbols-outlined text-primary/30 group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>

              {/* Form */}
              <form className="space-y-6 pt-4">
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-secondary text-sm">
                    {t.nameLabel}
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary-container focus:bg-surface-container-lowest transition-all"
                    placeholder={t.namePlaceholder}
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-secondary text-sm">
                    {t.visionLabel}
                  </label>
                  <textarea
                    className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary-container focus:bg-surface-container-lowest transition-all"
                    placeholder={t.visionPlaceholder}
                    rows={4}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-container text-on-primary py-4 rounded-lg font-bold tracking-wide hover:bg-primary transition-colors flex justify-center items-center gap-2"
                >
                  {t.sendButton}
                  <span className="material-symbols-outlined text-[1.2rem]">
                    send
                  </span>
                </button>
              </form>

              {/* Social Links */}
              <div className="pt-8 border-t border-outline-variant/20">
                <p className="uppercase tracking-widest text-secondary mb-6 text-sm">
                  {t.socialLabel}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    className="px-4 py-2 bg-surface-container-low rounded-full text-sm font-medium text-primary hover:bg-secondary-container transition-colors"
                    href="#"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="px-4 py-2 bg-surface-container-low rounded-full text-sm font-medium text-primary hover:bg-secondary-container transition-colors"
                    href="#"
                  >
                    GitHub
                  </a>
                  <a
                    className="px-4 py-2 bg-surface-container-low rounded-full text-sm font-medium text-primary hover:bg-secondary-container transition-colors"
                    href="#"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicator */}
          <div className="flex items-center gap-4 px-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-xs">bolt</span>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary-container flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-xs text-on-primary">
                  verified
                </span>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant italic">
              {t.trustText}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
