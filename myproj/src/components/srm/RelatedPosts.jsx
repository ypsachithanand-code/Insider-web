// Sidebar component showing related posts
// Filters by same category, excluding the current post

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RelatedPosts({ currentPost, allPosts }) {
  const related = allPosts
    .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
    .slice(0, 3);

  // If no posts in same category, show other posts
  const fallback = related.length > 0
    ? related
    : allPosts.filter(p => p.id !== currentPost.id).slice(0, 3);

  return (
    <aside className="space-y-6">
      <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold opacity-50 text-brand-light-text dark:text-brand-dark-text">
        Related Intelligence
      </h4>

      {fallback.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <Link
            to={`/post/${post.id}`}
            className="group block p-4 border border-brand-light-accent/10 dark:border-brand-dark-accent/10 hover:border-brand-light-accent/30 dark:hover:border-brand-dark-accent/30 transition-all duration-300"
          >
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-light-accent dark:text-brand-dark-accent opacity-70">
              #{post.category}
            </span>
            <h5 className="text-sm font-bold mt-2 mb-2 leading-snug group-hover:underline decoration-1 underline-offset-2 text-brand-light-text dark:text-brand-dark-text">
              {post.title}
            </h5>
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase opacity-40 group-hover:opacity-70 group-hover:gap-3 transition-all duration-300 text-brand-light-text dark:text-brand-dark-text">
              Read <ArrowRight size={10} />
            </span>
          </Link>
        </motion.div>
      ))}
    </aside>
  );
}