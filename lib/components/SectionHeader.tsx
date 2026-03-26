interface SectionHeaderProps {
  label: string;
  title: string;
  centered?: boolean;
  titleSize?: "md" | "lg";
}

export default function SectionHeader({
  label,
  title,
  centered = false,
  titleSize = "md",
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-xs font-bold uppercase tracking-widest text-primary/40 mb-4">
        {label}
      </h2>
      <h3
        className={`font-extrabold text-primary tracking-tighter ${
          titleSize === "lg"
            ? "text-4xl"
            : "text-2xl md:text-4xl"
        }`}
      >
        {title}
      </h3>
    </div>
  );
}
