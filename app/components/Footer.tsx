export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 py-12 gap-6">
        <p className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400">
          &copy; 2024 Architectural Portfolio. Built with precision.
        </p>
        <div className="flex gap-8">
          <a
            className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400 hover:text-slate-900 transition-colors"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400 hover:text-slate-900 transition-colors"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400 hover:text-slate-900 transition-colors"
            href="#"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
