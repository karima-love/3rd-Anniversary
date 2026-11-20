import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { BloomingFlower } from '../../components/effects/BloomingFlower';
import { stars } from '../../content/constellation';
import { quotes } from '../../content/quotes';
import { Star } from './Star';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './Constellation.css';
export default function Constellation() {
  const [visited, setVisited] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const complete = visited.length === stars.length;
  const current = stars.find(s => s.id === selected);
  const reveal = (id: number) => { setSelected(id); setVisited(old => old.includes(id) ? old : [...old, id]); };
  const points = visited.map(id => stars.find(s => s.id === id)).filter((s): s is typeof stars[number] => Boolean(s)).map(s => `${s.x * 10},${s.y * 6}`).join(' ');
  return <ChapterLayout number="05" className="constellation-chapter">
    <SectionHeading kicker="A SKY MADE OF LITTLE THINGS">The Constellation <em>of Us</em>
      <span className="block-subtitle" lang="ar" dir="rtl">كل نجمة وراها حاجة بحبها فيك</span>
    </SectionHeading>
    <div className="constellation-layout">
      <div className={`constellation-map ${complete ? 'constellation-map--complete' : ''}`}>
        <div className="constellation-map-top"><span>OUR LITTLE UNIVERSE</span><span>22 STARS</span></div>
        <svg className="constellation-lines" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
          <polyline points={points} stroke="#D9BE91" strokeWidth="1.3" fill="none" opacity=".6" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
        </svg>
        {stars.map(s => <Star key={s.id} x={s.x} y={s.y} index={s.id} visited={visited.includes(s.id)} selected={s.id === selected} disabled={complete} onClick={() => reveal(s.id)} />)}
        {complete && <div className="constellation-bloom" aria-hidden="true"><BloomingFlower stage="full" /></div>}
        <div className="constellation-coordinate">22°11′ <span>✧</span> ONLY OURS</div>
      </div>
      <div className="constellation-message" aria-live="polite">
        {complete ? <div className="constellation-complete"><BloomingFlower stage="full" /><p className="eyebrow">ALL 22 LITTLE REASONS</p><h3>Every little thing <em>leads me to you.</em></h3><p>{quotes.constellation}</p><button className="text-link constellation-again" type="button" onClick={() => { setVisited([]); setSelected(null); }}>Explore the stars again ↺</button></div> : <>
          <span className="eyebrow">LET THE STARS TELL YOU</span>
          <div className="star-counter"><strong>{String(visited.length).padStart(2, '0')}</strong><span> / 22 DISCOVERED</span></div>
          <div className="star-progress"><span style={{ width: `${(visited.length / 22) * 100}%` }} /></div>
          <AnimatePresence mode="wait">
            <motion.div key={selected ?? 0} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: reduced ? 0 : .3 }}>
              {current ? <><p className="star-note" lang="ar" dir="rtl">{current.message}</p><p className="star-english">“{current.quote}”</p></> : <><p className="star-note" lang="ar" dir="rtl">اختاري أي نجمة وشوفي وراها إيه من الحاجات اللي بحبها فيكي</p><p className="star-english">Every star holds a little piece of us.</p></>}
            </motion.div>
          </AnimatePresence>
          <span className="star-instruction">TAP ANY STAR TO UNFOLD A NOTE</span>
        </>}
      </div>
    </div>
  </ChapterLayout>;
}
