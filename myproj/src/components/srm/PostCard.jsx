// Individual post card for the Bento Grid
// Features bookmark toggle, hover lift, category tag, and image

import { motion } from 'framer-motion';
import { Bookmark, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PostCard({ post, isBookmarked, onToggleBookmark }) {
  // Determine grid span based on post size
  const sizeClasses = {
    large: 'md:col-span-2 md:row-span-2',
    medium: 'md:col-span-2',
    tall: 'md:row-span-2',
    small: '',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group flex flex-col border border-brand-light-accent/15 dark:border-brand-dark-accent/15 overflow-hidden bg-white/5 dark:bg-white/[0.02] backdrop-blur-sm ${sizeClasses[post.size] || ''}`}
    >
      {/* Image area */}
      <div className={`relative overflow-hidden ${post.size === 'large' ? 'h-48 md:h-64' : 'h-40'}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover opacity-80 dark:opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light-bg dark:from-brand-dark-bg to-transparent opacity-60" />
        
        {/* Bookmark button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggleBookmark(post.id);
          }}
          className="absolute top-4 right-4 z-10 p-2 transition-all duration-300 hover:scale-110"
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <Bookmark
            size={18}
            fill={isBookmarked ? 'currentColor' : 'none'}
            className={`transition-colors duration-300 ${
              isBookmarked
                ? 'text-brand-dark-accent'
                : 'text-brand-light-text/40 dark:text-brand-dark-text/40'
            }`}
          />
        </button>
      </div>

      {/* Content area */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        {/* Meta row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 border border-brand-light-accent/30 dark:border-brand-dark-accent/30 text-brand-light-accent dark:text-brand-dark-accent">
            #{post.category}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] opacity-40 text-brand-light-text dark:text-brand-dark-text">
            <Clock size={10} />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-bold leading-tight mb-3 group-hover:underline decoration-2 underline-offset-4 decoration-brand-light-accent/30 dark:decoration-brand-dark-accent/30 text-brand-light-text dark:text-brand-dark-text ${
          post.size === 'large' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm opacity-60 leading-relaxed mb-6 flex-1 text-brand-light-text dark:text-brand-dark-text">
          {post.excerpt}
        </p>

        {/* Read more link */}
        <Link
          to={`/post/${post.id}`}
          className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase group-hover:gap-4 transition-all duration-300 text-brand-light-accent dark:text-brand-dark-accent"
        >
          Read Analysis <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}