// Content detail page — focused reading view
// Includes article content, metadata, and related posts sidebar

import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Clock, Calendar, User, Bookmark } from 'lucide-react';
import RelatedPosts from '../components/srm/RelatedPosts';
import useBookmarks from '../hooks/useBookmarks';
import { MOCK_POSTS } from '../data/posts';

export default function PostDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  // Extract post ID from URL path
  const pathParts = window.location.pathname.split('/');
  const postId = parseInt(pathParts[pathParts.length - 1]);

  const post = useMemo(() => MOCK_POSTS.find(p => p.id === postId), [postId]);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-brand-light-text dark:text-brand-dark-text">Post Not Found</h2>
          <Link to="/dashboard" className="text-brand-light-accent dark:text-brand-dark-accent underline underline-offset-4 text-sm font-bold uppercase tracking-widest">
            Return to Hub
          </Link>
        </div>
      </div>
    );
  }

  const bookmarked = isBookmarked(post.id);

  return (
    <div className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 opacity-50 hover:opacity-100 font-bold uppercase text-[11px] tracking-[0.15em] transition-opacity text-brand-light-text dark:text-brand-dark-text"
          >
            <ChevronLeft size={16} /> Back to Hub
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
          {/* Main content */}
          <article>
            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-64 md:h-96 mb-12 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-light-bg dark:from-brand-dark-bg to-transparent opacity-50" />
            </motion.div>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 border border-brand-light-accent/30 dark:border-brand-dark-accent/30 text-brand-light-accent dark:text-brand-dark-accent">
                  #{post.category}
                </span>
                <button
                  onClick={() => toggleBookmark(post.id)}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-bold transition-all duration-300"
                >
                  <Bookmark
                    size={16}
                    fill={bookmarked ? 'currentColor' : 'none'}
                    className={bookmarked ? 'text-brand-dark-accent' : 'opacity-40 text-brand-light-text dark:text-brand-dark-text'}
                  />
                  <span className={`${bookmarked ? 'text-brand-dark-accent' : 'opacity-40 text-brand-light-text dark:text-brand-dark-text'}`}>
                    {bookmarked ? 'Saved' : 'Save'}
                  </span>
                </button>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-[-0.02em] mb-8 text-brand-light-text dark:text-brand-dark-text">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-[0.15em] font-bold opacity-40 text-brand-light-text dark:text-brand-dark-text">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> {post.readTime} read
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={12} /> {post.author}
                </span>
              </div>
            </header>

            {/* Article body */}
            <div className="space-y-6 text-base md:text-lg leading-[1.8] opacity-85 text-brand-light-text dark:text-brand-dark-text">
              {post.content.split('\n\n').map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <div className="hidden lg:block pt-96">
            <div className="sticky top-28">
              <RelatedPosts currentPost={post} allPosts={MOCK_POSTS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}