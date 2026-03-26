import type { ContactDictionary } from "@/infrastructure/types";

interface SocialLinksProps {
  t: ContactDictionary;
}

const socialItems = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/davegzarca/" },
  { label: "GitHub", href: "https://github.com/Dave-Gom" },
  { label: "Instagram", href: "https://www.instagram.com/davegzarca/" },
];

const SocialLinks = ({ t }: SocialLinksProps) => {
  return (
    <div className="pt-8 border-t border-outline-variant/20">
      <p className="uppercase tracking-widest text-secondary mb-6 text-sm">
        {t.socialLabel}
      </p>
      <div className="flex flex-wrap gap-4">
        {socialItems.map((item) => (
          <a
            key={item.label}
            className="px-4 py-2 bg-surface-container-low rounded-full text-sm font-medium text-primary hover:bg-secondary-container transition-colors"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
