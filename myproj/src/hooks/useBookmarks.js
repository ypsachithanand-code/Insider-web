// Custom hook for managing bookmarked posts
// Persists bookmarks to localStorage

import { useState, useCallback } from 'react';

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('srm-insider-bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleBookmark = useCallback((postId) => {
    setBookmarks(prev => {
      const next = prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId];
      localStorage.setItem('srm-insider-bookmarks', JSON.stringify(next));
      return next;
    });
  }, []);

  const isBookmarked = useCallback((postId) => bookmarks.includes(postId), [bookmarks]);

  return { bookmarks, toggleBookmark, isBookmarked };
}