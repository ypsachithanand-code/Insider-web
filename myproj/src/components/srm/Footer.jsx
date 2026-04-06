// Site footer — minimal, uppercase micro-text with border top

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-brand-light-accent/10 dark:border-brand-dark-accent/10 text-brand-light-text dark:text-brand-dark-text">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-[10px] uppercase tracking-[0.3em]">
        <span>© 2025 SRM Insider — Institutional Archive</span>
        <div className="flex gap-8">
          <span className="cursor-pointer hover:opacity-70 transition-opacity">Privacy Protocol</span>
          <span className="cursor-pointer hover:opacity-70 transition-opacity">Terms of Access</span>
          <span className="cursor-pointer hover:opacity-70 transition-opacity">Contact</span>
        </div>
      </div>
    </footer>
  );
}