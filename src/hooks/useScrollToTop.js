/**
 * useScrollToTop
 * Scrolls the window to the top on every route change.
 * Usage: Call this hook once inside the root App component (or a wrapper component).
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
}
