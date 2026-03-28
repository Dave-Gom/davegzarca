/* eslint-disable @next/next/no-img-element */
import type { SpeakingCardTranslations } from "@/infrastructure/types/translations/screens";

interface SpeakingCardProps {
  t: SpeakingCardTranslations;
}

const SpeakingCard = ({ t }: SpeakingCardProps) => {
  return (
    <div className="bg-surface-container-low rounded-xl p-10 ghost-border flex items-center gap-8">
      <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-200">
        <img
          alt={t.imageAlt}
          className="w-full h-full object-cover grayscale"
          src="/assets/images/me/productOwnerShip.jpg"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary-container">
          {t.title}
        </h3>
        <p className="text-on-surface-variant mt-2">{t.description}</p>
      </div>
    </div>
  );
};

export default SpeakingCard;
