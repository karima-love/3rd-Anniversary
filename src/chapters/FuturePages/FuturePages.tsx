import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Quote } from '../../components/ui/Quote';
import { futurePages, messages } from '../../content/messages';
import { quotes } from '../../content/quotes';
import { useReducedMotion } from '../../hooks/useReducedMotion';
export default function FuturePages() {
  const [index, setIndex] = useState(0);
  const page = futurePages[index] ?? futurePages[0];
  const reduced = useReducedMotion();
  return <ChapterLayout number="07" className="future-chapter">
    <SectionHeading kicker="THERE IS SO MUCH MORE TO COME">The Pages<br /><em>We Haven't Written</em></SectionHeading>
    <div className="future-layout">
      <div className="future-list" role="tablist" aria-label="Future chapters">
        {futurePages.map((item, i) => <button type="button" role="tab" key={item.number} id={`future-tab-${i}`} aria-selected={index === i} aria-controls="future-panel" onClick={() => setIndex(i)} className={`future-list-item ${i === index ? 'future-list-item--active' : ''}`}>
          <span>{item.number}</span><strong>{item.title}</strong><span className="future-list-mark">{item.icon}</span>
        </button>)}
      </div>
      <div className="future-page" id="future-panel" role="tabpanel" aria-labelledby={`future-tab-${index}`}>
        <div className="future-page-hdr">CHAPTERS WE'LL WRITE TOGETHER <span>22:11</span></div>
        <AnimatePresence mode="wait"><motion.div key={page.number} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -12 }} transition={{ duration: reduced ? 0 : .3 }}>
          <span className="future-page-icon">{page.icon}</span><span className="eyebrow">COMING SOON <span>—</span> NO RUSH</span>
          <h3>{page.title}</h3><p className="arabic-body" dir="rtl" lang="ar">{page.arabic}</p>
        </motion.div></AnimatePresence>
        <div className="future-page-footer"><span>PAGE {page.number} OF 04</span><div><button onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0} type="button" aria-label="Previous future page"><ArrowLeft size={18} /></button><button onClick={() => setIndex(i => Math.min(3, i + 1))} disabled={index === 3} type="button" aria-label="Next future page"><ArrowRight size={18} /></button></div></div>
      </div>
    </div>
    <div className="future-outro" dir="rtl" lang="ar">{messages.future.map(p => <p className="arabic-body" key={p}>{p}</p>)}</div>
    <Quote text={quotes.future} />
  </ChapterLayout>;
}
