import type { AboutDictionary } from "@/infrastructure/types";

interface AppearancesCardProps {
  t: AboutDictionary;
}

const AppearancesCard = ({ t }: AppearancesCardProps) => {
  const appearances = [
    { name: t.appearance1, detail: t.appearance1Detail },
    { name: t.appearance2, detail: t.appearance2Detail },
    { name: t.appearance3, detail: t.appearance3Detail },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-xl p-10 ghost-border flex flex-col justify-center">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-bold text-primary uppercase text-xs tracking-[0.2em]">
          {t.appearancesTitle}
        </h4>
        <span className="text-secondary text-xs font-mono">2022-2025</span>
      </div>
      <ul className="space-y-3">
        {appearances.map((item) => (
          <li
            key={item.name}
            className="flex justify-between border-b border-outline-variant/10 pb-2"
          >
            <span className="text-on-surface-variant text-sm">
              {item.name}
            </span>
            <span className="text-primary font-bold text-sm">
              {item.detail}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppearancesCard;
