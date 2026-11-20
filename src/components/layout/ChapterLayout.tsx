import type { ReactNode } from 'react';
export function ChapterLayout({ children, number, className = '' }: { children: ReactNode; number: string; className?: string }) {
  return <div className={`chapter-layout ${className}`}>
    <span className="chapter-number" aria-hidden="true">CHAPTER {number} <span>✧</span> 09</span>
    <div className="chapter-content">{children}</div>
  </div>;
}
