interface TimelineItemProps {
  period: string;
  company: string;
  badge: string;
  badgeVariant?: "current" | "default";
  role: string;
  items: { icon: string; text: string }[];
  position?: "left" | "right";
  isLast?: boolean;
}

const TimelineItem = ({
  period,
  company,
  badge,
  badgeVariant = "default",
  role,
  items,
  position = "left",
  isLast = false,
}: TimelineItemProps) => {
  const isCurrent = badgeVariant === "current";
  const dotClasses = isCurrent
    ? "bg-primary-container ring-primary-container/10"
    : "bg-outline-variant ring-outline-variant/10";
  const badgeClasses = isCurrent
    ? "bg-secondary-container text-on-secondary-container"
    : "bg-surface-container-low text-on-surface-variant";

  const periodEl = (
    <span className="text-2xl font-bold text-primary opacity-30 tracking-tighter">
      {period}
    </span>
  );

  const cardEl = (
    <div className="bg-surface-container-lowest p-8 rounded-xl ghost-border shadow-sm">
      <div
        className={`flex items-center justify-between gap-4 mb-4 ${
          position === "left" ? "md:flex-row-reverse" : ""
        }`}
      >
        <h3 className="text-xl font-semibold text-primary-container">
          {company}
        </h3>
        <span className={`text-sm px-3 py-1 rounded-full ${badgeClasses}`}>
          {badge}
        </span>
      </div>
      <h4 className="text-lg font-bold text-primary mb-2">{role}</h4>
      <ul
        className={`space-y-4 text-on-surface-variant text-sm md:text-base leading-relaxed ${
          position === "left" ? "text-left" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item.icon} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-primary text-lg mt-0.5">
              {item.icon}
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      className={`relative ${isLast ? "mb-12" : "mb-24"} flex flex-col md:flex-row items-start md:items-center`}
    >
      {position === "left" ? (
        <>
          <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-left md:text-right order-2 md:order-1">
            {cardEl}
          </div>
          <div
            className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 border-4 border-surface ring-4 ${dotClasses}`}
          ></div>
          <div className="md:w-1/2 md:pl-16 order-1 md:order-2 mb-4 md:mb-0">
            {periodEl}
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 md:pr-16 mb-4 md:mb-0 text-left md:text-right">
            {periodEl}
          </div>
          <div
            className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 border-4 border-surface ring-4 ${dotClasses}`}
          ></div>
          <div className="md:w-1/2 md:pl-16">{cardEl}</div>
        </>
      )}
    </div>
  );
};

export default TimelineItem;
