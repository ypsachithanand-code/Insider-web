// Top navigation bar — brand mark + navigation links
// Uses glassmorphism effect and sticks to top on scroll

import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, LogIn } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-md bg-brand-light-bg/70 dark:bg-brand-dark-bg/70 border-b border-brand-light-accent/10 dark:border-brand-dark-accent/10"
    >
      {/* Brand mark */}
      <Link to="/" className="flex items-center gap-3 group">
        <span className="text-lg font-extrabold uppercase tracking-[0.15em] text-brand-light-text dark:text-brand-dark-text">
          SRM
        </span>
        <span className="text-lg font-extrabold uppercase tracking-[0.15em] text-brand-light-accent dark:text-brand-dark-accent">
          Insider.
        </span>
      </Link>

      {/* Navigation links */}
      <div className="flex items-center gap-6">
        {!isHome && (
          <Link
            to="/dashboard"
            className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] opacity-60 hover:opacity-100 transition-opacity text-brand-light-text dark:text-brand-dark-text"
          >
            <LayoutGrid size={14} />
            Hub
          </Link>
        )}
        <Link
          to="/signin"
          className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] px-5 py-2.5 border border-brand-light-accent/30 dark:border-brand-dark-accent/30 hover:bg-brand-light-accent hover:text-white dark:hover:bg-brand-dark-accent dark:hover:text-brand-dark-bg transition-all duration-300"
        >
          <LogIn size={14} />
          Access
        </Link>
      </div>
    </motion.nav>
  );
}