// Main site layout wrapper
// Includes Navbar, ThemeToggle, Footer, and AnimatePresence for page transitions

import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import useTheme from '../../hooks/useTheme';

export default function SiteLayout() {
  const { isDark, toggle } = useTheme();
  const location = useLocation();

  return (
    <div className="min-h-screen transition-colors duration-500 bg-brand-light-bg dark:bg-brand-dark-bg text-brand-light-text dark:text-brand-dark-text font-sans selection:bg-brand-dark-accent selection:text-brand-dark-bg">
      <ThemeToggle isDark={isDark} onToggle={toggle} />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}