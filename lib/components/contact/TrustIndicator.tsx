import type { ContactDictionary } from "@/infrastructure/types";

interface TrustIndicatorProps {
  t: ContactDictionary;
}

const TrustIndicator = ({ t }: TrustIndicatorProps) => {
  return (
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
      <p className="text-xs text-on-surface-variant italic">{t.trustText}</p>
    </div>
  );
};

export default TrustIndicator;
