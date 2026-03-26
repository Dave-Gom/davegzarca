interface PhilosophyCardProps {
  icon: string;
  title: string;
  description: string;
}

const PhilosophyCard = ({ icon, title, description }: PhilosophyCardProps) => {
  return (
    <div className="space-y-4">
      <span className="material-symbols-outlined text-primary text-3xl">
        {icon}
      </span>
      <h3 className="text-xl font-bold text-primary-container">{title}</h3>
      <p className="text-on-surface-variant text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default PhilosophyCard;
