// Search bar and category filter tags
// Used in the Dashboard to filter and search posts

import { Search, LayoutGrid, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  LayoutGrid,
  Briefcase,
  GraduationCap,
  Globe,
};

const CATEGORIES = [
  { key: "All", label: "All", icon: "LayoutGrid" },
  { key: "About the club", label: "About the club", icon: "Briefcase" },
  { key: "Projects", label: "Projects", icon: "GraduationCap" },
  { key: "Club Structure", label: "Club Structure", icon: "Globe" },
];

export default function SearchFilter({ filter, onFilterChange, search, onSearchChange }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
      {/* Title & filters */}
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-[-0.02em] text-brand-light-text dark:text-brand-dark-text"
        >
          Intelligence Hub
        </motion.h2>

        <div className="flex flex-wrap gap-3 md:gap-5">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon];
            const isActive = filter === cat.key;
            return (
              <motion.button
                key={cat.key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onFilterChange(cat.key)}
                className={`flex items-center gap-2 text-[10px] md:text-[11px] uppercase font-bold tracking-[0.15em] px-3 py-2 border transition-all duration-300 ${
                  isActive
                    ? 'border-brand-light-accent dark:border-brand-dark-accent bg-brand-light-accent dark:bg-brand-dark-accent text-white dark:text-brand-dark-bg'
                    : 'border-brand-light-accent/20 dark:border-brand-dark-accent/20 opacity-50 hover:opacity-100 text-brand-light-text dark:text-brand-dark-text'
                }`}
              >
                <Icon size={13} />
                {cat.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Search input */}
      <div className="relative w-full md:w-96">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 text-brand-light-text dark:text-brand-dark-text"
          size={18}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search the archive..."
          className="w-full bg-transparent border-b-2 border-brand-light-accent/20 dark:border-brand-dark-accent/20 py-4 pl-12 pr-4 text-sm text-brand-light-text dark:text-brand-dark-text placeholder:text-brand-light-text/30 dark:placeholder:text-brand-dark-text/30 focus:border-brand-light-accent dark:focus:border-brand-dark-accent outline-none transition-colors duration-300"
        />
      </div>
    </div>
  );
}