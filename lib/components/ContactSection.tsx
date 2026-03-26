import type { Dictionary } from "@/infrastructure/translations/dictionaries";

interface ContactSectionProps {
  t: Dictionary["home"];
}

export default function ContactSection({ t }: ContactSectionProps) {
  return (
    <section
      className="py-32 bg-primary-container text-white overflow-hidden relative"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-on-primary-container mb-6">
          {t.ctaLabel}
        </h2>
        <h3 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12">
          {t.ctaTitle}
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            className="group bg-white text-primary px-10 py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-100 transition-all"
            href="mailto:davegomez426@gmail.com"
          >
            <span className="material-symbols-outlined">mail</span>
            davegomez426@gmail.com
          </a>
          <a
            className="group border border-white/20 px-10 py-5 rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
            href="https://www.linkedin.com/in/davegzarca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined">link</span>
            {t.ctaLinkedIn}
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[120px] opacity-50"></div>
    </section>
  );
}
