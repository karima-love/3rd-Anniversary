import { useRef } from 'react';
export function Star({ x, y, index, visited, selected, disabled, onClick }: {
  x: number; y: number; index: number; visited: boolean; selected: boolean; disabled?: boolean; onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  return <button ref={ref} type="button" className={`constellation-star${visited ? ' constellation-star--visited' : ''}${selected ? ' constellation-star--selected' : ''}`}
    style={{ left: `${x}%`, top: `${y}%` }} disabled={disabled} onClick={onClick} aria-label={`Star ${index}: reveal a love note`} aria-pressed={selected}>
    <span className="star-halo" /><span className="star-point">✦</span>
  </button>;
}
