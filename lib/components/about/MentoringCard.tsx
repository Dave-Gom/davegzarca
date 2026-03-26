import type { AboutDictionary } from "@/infrastructure/types";

interface MentoringCardProps {
  t: AboutDictionary;
}

const MentoringCard = ({ t }: MentoringCardProps) => {
  return (
    <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-10 ghost-border flex flex-col justify-between hover:bg-surface transition-colors duration-300">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary">school</span>
          <span className="text-sm text-secondary font-bold">
            {t.mentoringLabel}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-primary-container mb-4">
          {t.mentoringTitle}
        </h3>
        <p className="text-on-surface-variant text-base max-w-2xl leading-relaxed">
          {t.mentoringDesc}
        </p>
      </div>
      <div className="mt-8 flex gap-4">
        <span className="px-4 py-1.5 rounded-full bg-surface-container-low text-[0.7rem] uppercase tracking-wider font-bold text-primary">
          {t.workshops}
        </span>
        <span className="px-4 py-1.5 rounded-full bg-surface-container-low text-[0.7rem] uppercase tracking-wider font-bold text-primary">
          {t.coaching}
        </span>
      </div>
    </div>
  );
};

export default MentoringCard;
