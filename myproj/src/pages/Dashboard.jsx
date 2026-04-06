// Dashboard page — the Intelligence Hub
// Responsive Bento Grid with search, filter, and bookmarkable post cards

import { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import SearchFilter from '../components/srm/SearchFilter';
import PostCard from '../components/srm/PostCard';
import useBookmarks from '../hooks/useBookmarks';
import { MOCK_POSTS } from '../data/posts';

export default function Dashboard() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const { isBookmarked, toggleBookmark } = useBookmarks();

  // Filter and search posts
  const filtered = useMemo(() => {
    return MOCK_POSTS.filter(post => {
      const matchesFilter = filter === 'All' || post.category === filter;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SearchFilter
          filter={filter}
          onFilterChange={setFilter}
          search={search}
          onSearchChange={setSearch}
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-brand-light-accent/10 dark:border-brand-dark-accent/10">
          <AnimatePresence mode="popLayout">
            {filtered.map(post => (
              <PostCard
                key={post.id}
                post={post}
                isBookmarked={isBookmarked(post.id)}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24 opacity-30">
            <p className="text-lg font-bold uppercase tracking-widest text-brand-light-text dark:text-brand-dark-text">
              No Intelligence Found
            </p>
            <p className="text-sm mt-2 text-brand-light-text dark:text-brand-dark-text">
              Try adjusting your search or filter parameters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}