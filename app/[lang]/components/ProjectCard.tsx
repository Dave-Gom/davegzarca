interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  tags: string[];
  title: string;
  description: string;
  impact: string;
  impactLabel: string;
  icon: string;
  role: string;
  imagePosition?: "left" | "right";
}

export default function ProjectCard({
  imageSrc,
  imageAlt,
  tags,
  title,
  description,
  impact,
  impactLabel,
  icon,
  role,
  imagePosition = "left",
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div
        className={`${imagePosition === "right" ? "lg:order-last " : ""}rounded-xl overflow-hidden bg-surface-container-low shadow-sm`}
      >
        <img
          alt={imageAlt}
          className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-700"
          src={imageSrc}
        />
      </div>
      <div className="space-y-6">
        <div className="flex gap-3 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="ghost-border px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-3xl font-bold text-primary tracking-tight">
          {title}
        </h4>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          {description}
        </p>
        <div className="bg-surface-container-low p-6 rounded-lg border-l-4 border-primary">
          <p className="text-primary font-bold text-xl">{impact}</p>
          <p className="text-secondary text-sm font-medium uppercase mt-1">
            {impactLabel}
          </p>
        </div>
        <div className="flex items-center gap-2 text-primary font-semibold">
          <span className="material-symbols-outlined">{icon}</span>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
}
