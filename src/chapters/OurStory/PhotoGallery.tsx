import { useRef, useState, type CSSProperties, type KeyboardEvent, type TouchEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { timeline } from '../../content/timeline';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function Frame({ src, title, index, onAspect }: { src: string; title: string; index: number; onAspect: (src: string, ratio: number) => void }) {
  const [failed, setFailed] = useState(false);
  return <div className="photo-artwork">
    {failed ? <div className="image-placeholder" role="img" aria-label={`Photo ${index + 1} is missing: ${src.split('/').at(-1)}`} >
      <svg width="116" height="116" viewBox="0 0 116 116" fill="none" aria-hidden="true">
        <circle cx="58" cy="58" r="50" stroke="#bfa7a7" strokeWidth=".65" />
        <circle cx="58" cy="58" r="40" stroke="#bfa7a7" strokeWidth=".65" strokeDasharray="2 5" />
        <path d="M58 85C30 64 27 46 40 37C49 30 57 36 58 42C65 30 79 32 84 43C92 59 76 74 58 85Z" stroke="#d4a0a9" strokeWidth="1.3" />
        <path d="M42 58H74M58 42V75" stroke="#d4a0a9" strokeWidth=".6" />
      </svg>
      <span>YOUR MEMORY IS WAITING</span><strong>{title}</strong>
      <p lang="ar" dir="rtl">ضيف الصورة في فولدر <b>public/assets/images</b></p>
      <code dir="ltr">{src.split('/').at(-1)}</code>
    </div> : <img src={src} alt={`Our memory: ${title}`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async"
      onLoad={(event) => {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        if (naturalHeight > 0) onAspect(src, naturalWidth / naturalHeight);
      }}
      onError={() => setFailed(true)} />}
  </div>;
}
export function PhotoGallery({ onNext }: { onNext: () => void }) {
  const [index, setIndex] = useState(0);
  // Each image has its own real dimensions. The frame follows those dimensions,
  // rather than imposing the old fixed 420px tall landscape rectangle.
  const [aspects, setAspects] = useState<Record<string, number>>({});
  const touchStart = useRef<number | null>(null);
  const reduced = useReducedMotion();
  const chapter = timeline[index] ?? timeline[0];
  const setPhotoAspect = (src: string, ratio: number) => {
    if (!Number.isFinite(ratio) || ratio <= 0) return;
    setAspects(old => old[src] === ratio ? old : { ...old, [src]: ratio });
  };
  const frameStyle: CSSProperties & { '--photo-aspect': number } = { '--photo-aspect': aspects[chapter.photo] ?? 1.333333 };
  const previous = () => setIndex(i => Math.max(0, i - 1));
  const next = () => { if (index === timeline.length - 1) onNext(); else setIndex(i => Math.min(timeline.length - 1, i + 1)); };
  const keyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); previous(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  };
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => { touchStart.current = e.changedTouches[0]?.clientX ?? null; };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const end = e.changedTouches[0]?.clientX;
    if (touchStart.current === null || end === undefined) return;
    const dx = touchStart.current - end;
    touchStart.current = null;
    if (Math.abs(dx) > 55) { if (dx > 0) next(); else previous(); }
  };
  return <div className="gallery-stage" role="region" tabIndex={0} aria-label="Our four year-by-year memories. Use arrow keys or swipe." onKeyDown={keyHandler} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
    <div className="gallery-topline"><span>OUR LOVE, IN FOUR CHAPTERS</span><span>FRAME {String(index + 1).padStart(2, '0')} / 04</span></div>
    <div className="gallery-layout">
      <div className="gallery-photo-wrap">
        <AnimatePresence mode="wait">
          <motion.div key={chapter.number} initial={reduced ? false : { opacity: 0, x: 25 }} animate={{ opacity: 1, x: 0 }} exit={reduced ? undefined : { opacity: 0, x: -25 }} transition={{ duration: reduced ? 0 : .45 }} className="gallery-photo-frame" style={frameStyle}>
            <div className="photo-inner-border"><Frame key={chapter.photo} src={chapter.photo} title={chapter.title} index={index} onAspect={setPhotoAspect} /></div>
            <span className="gallery-frame-corner gallery-frame-corner--tl" /><span className="gallery-frame-corner gallery-frame-corner--br" />
          </motion.div>
        </AnimatePresence>
        <span className="gallery-photo-caption">✦ &nbsp; MOMENT NO. {chapter.number} &nbsp; ✦</span>
      </div>
      <div className="gallery-story">
        <span className="eyebrow">OUR STORY <span>·</span> {chapter.year}</span>
        <AnimatePresence mode="wait">
          <motion.div key={chapter.number} initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -12 }} transition={{ duration: reduced ? 0 : .38 }} aria-live="polite">
            <span className="gallery-index">{chapter.number}</span>
            <h3 lang="ar" dir="rtl">{chapter.title}</h3>
            <p className="arabic-body" lang="ar" dir="rtl">{chapter.text}</p>
            <blockquote className="gallery-quote">“{chapter.quote}”</blockquote>
          </motion.div>
        </AnimatePresence>
        <div className="gallery-controls">
          <button type="button" className="gallery-arrow" onClick={previous} disabled={index === 0} aria-label="Previous memory"><ArrowLeft size={19} /></button>
          <div className="gallery-dots" role="group" aria-label="Choose memory">
            {timeline.map((memory, i) => <button key={memory.number} type="button" onClick={() => setIndex(i)} className={i === index ? 'gallery-dot gallery-dot--active' : 'gallery-dot'} aria-label={`Memory ${i + 1}`} aria-current={i === index ? 'step' : undefined} />)}
          </div>
          <button type="button" className="gallery-arrow" onClick={next} aria-label={index === timeline.length - 1 ? 'Continue to constellation' : 'Next memory'}><ArrowRight size={19} /></button>
        </div>
        <span className="gallery-hint">SWIPE OR USE ARROW KEYS TO EXPLORE</span>
      </div>
    </div>
  </div>;
}
