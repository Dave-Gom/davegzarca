import type { AboutDictionary } from "@/infrastructure/types";

interface OpenSourceCardProps {
  t: AboutDictionary;
}

const OpenSourceCard = ({ t }: OpenSourceCardProps) => {
  return (
    <div className="bg-primary-container text-on-primary rounded-xl p-10 flex flex-col justify-between relative overflow-hidden group">
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-on-primary-container">
            source
          </span>
          <span className="text-sm text-on-primary-container font-bold">
            {t.openSourceLabel}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-4">{t.openSourceTitle}</h3>
        <p className="text-on-primary-container text-base leading-relaxed">
          {t.openSourceDesc}
        </p>
      </div>
      <div className="mt-12 relative z-10">
        <span className="text-4xl font-black text-on-primary-container/20">
          {t.openSourceStars}
        </span>
      </div>
      <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
        <span className="material-symbols-outlined text-[12rem]">
          code_blocks
        </span>
      </div>
    </div>
  );
};

export default OpenSourceCard;
