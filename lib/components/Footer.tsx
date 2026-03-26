interface FooterProps {
  labels: {
    copyright: string;
    linkedin: string;
    github: string;
    instagram: string;
  };
}

export const Footer = ({ labels }: FooterProps) => {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 py-12 gap-6">
        <p className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400">
          {labels.copyright}
        </p>
        <div className="flex gap-8">
          <a
            className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400 hover:text-slate-900 transition-colors"
            href="https://www.linkedin.com/in/davegzarca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.linkedin}
          </a>
          <a
            className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400 hover:text-slate-900 transition-colors"
            href="https://github.com/Dave-Gom"
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.github}
          </a>
          <a
            className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400 hover:text-slate-900 transition-colors"
            href="https://www.instagram.com/davegzarca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
};
