interface SkillCardProps {
  icon: string;
  title: string;
  skills: string[];
}

export default function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-8">
        <span className="material-symbols-outlined text-white">{icon}</span>
      </div>
      <h4 className="text-xl font-bold text-primary mb-6">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="ghost-border px-4 py-2 rounded-md text-xs font-semibold text-on-surface-variant"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
