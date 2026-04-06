// Theme toggle button — fixed position, top-right
// Switches between light (sun) and dark (moon) modes with scale animation

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-light-accent dark:bg-brand-dark-accent text-white dark:text-brand-dark-bg transition-colors duration-300 shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
}