import type { ContactCardTranslations } from "@/infrastructure/types/translations/screens";
import SocialLinks from "./SocialLinks";

interface ContactCardProps {
  t: ContactCardTranslations;
}

const ContactCard = ({ t }: ContactCardProps) => {
  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(26,28,29,0.04)] border border-outline-variant/10">
      <h2 className="text-xl font-semibold text-primary-container mb-8">
        {t.formTitle}
      </h2>
      <div className="space-y-8">
        <div className="group cursor-pointer">
          <p className="uppercase tracking-widest text-secondary mb-2 text-sm">
            {t.emailLabel}
          </p>
          <a
            className="text-lg md:text-2xl font-medium text-primary hover:text-primary-container transition-colors flex items-center gap-3"
            href="mailto:davegomez426@gmail.com"
          >
            davegomez426@gmail.com
            <span className="material-symbols-outlined text-primary/30 group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="pt-4">
          <a
            href="mailto:davegomez426@gmail.com"
            className="w-full bg-primary-container text-on-primary py-4 rounded-lg font-bold tracking-wide hover:bg-primary transition-colors flex justify-center items-center gap-2"
          >
            {t.sendButton}
            <span className="material-symbols-outlined text-[1.2rem]">
              mail
            </span>
          </a>
        </div>

        <SocialLinks t={t} />
      </div>
    </div>
  );
};

export default ContactCard;
