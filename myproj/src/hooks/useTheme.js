// Custom hook for managing dark/light theme state
// Persists preference to localStorage and syncs with the document class

import { useState, useEffect, useCallback } from 'react';

export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('srm-insider-theme');
    return saved ? saved === 'dark' : true; // Default to dark mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('srm-insider-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggle = useCallback(() => setIsDark(prev => !prev), []);

  return { isDark, toggle };
}