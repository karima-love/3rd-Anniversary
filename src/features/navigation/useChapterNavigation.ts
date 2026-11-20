import { useEffect, useState } from 'react';
import { chapterLinks, type ChapterId } from '../../config/site';
import { smoothScrollTo } from '../../utils/performance';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function useChapterNavigation(replayKey = 0) {
  const [active, setActive] = useState<ChapterId>('opening');
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const candidates = entries.filter((entry) => entry.isIntersecting);
      if (!candidates.length) return;
      candidates.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      const id = candidates[0]?.target.id as ChapterId;
      if (id) setActive(id);
    }, { rootMargin: '-22% 0px -65% 0px', threshold: 0 });
    chapterLinks.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [replayKey]);
  const navigate = (id: ChapterId) => {
    setActive(id);
    smoothScrollTo(id, reduceMotion);
  };
  return { active, navigate };
}
