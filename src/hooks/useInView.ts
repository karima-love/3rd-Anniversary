import { useEffect, useRef, useState } from 'react';
export function useInView<T extends HTMLElement>(rootMargin = '150px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;
    if (!('IntersectionObserver' in window)) { setInView(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { rootMargin, threshold: 0.01 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, inView]);
  return { ref, inView };
}
