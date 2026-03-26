interface ExperienceRoleProps {
  period: string;
  title: string;
  description: string;
  items?: string[];
}

export default function ExperienceRole({
  period,
  title,
  description,
  items,
}: ExperienceRoleProps) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
        <span className="text-sm font-bold text-primary/40 uppercase tracking-widest md:w-32 pt-1">
          {period}
        </span>
        <div className="space-y-4 flex-1">
          <h4 className="text-2xl font-bold text-primary">{title}</h4>
          <p className="text-on-surface-variant leading-relaxed max-w-xl">
            {description}
          </p>
          {items && items.length > 0 && (
            <ul className="space-y-3 text-sm text-secondary">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
