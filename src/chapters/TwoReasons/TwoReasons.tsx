import { useEffect, useRef, useState } from 'react';
import { CalendarHeart, Sparkles } from 'lucide-react';
import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { RevealText } from '../../components/ui/RevealText';
import { Quote } from '../../components/ui/Quote';
import { messages } from '../../content/messages';
import { quotes } from '../../content/quotes';
import { useReducedMotion } from '../../hooks/useReducedMotion';

function SignatureMoment() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!('IntersectionObserver' in window)) { setTriggered(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) { setTriggered(true); observer.disconnect(); }
    }, { threshold: .35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="signature-moment" aria-label="22:11, 22 November, our favorite day">
    <span className="signature-line" aria-hidden="true" />
    <p className="eyebrow">A MOMENT THAT BECAME OUR WORLD</p>
    <div className={`signature-phrases ${triggered ? 'signature-phrases--run' : ''} ${reduceMotion ? 'signature-phrases--reduced' : ''}`} aria-hidden="true">
      <span>22:11</span><span>22 November</span><span>Our Favorite Day</span>
    </div>
    <span className="signature-line" aria-hidden="true" />
  </div>;
}

export default function TwoReasons() {
  return <ChapterLayout number="03" className="reasons-chapter">
    <RevealText><p className="eyebrow reasons-overline">TWO REASONS. ONE EXTRAORDINARY DATE.</p></RevealText>
    <div className="reasons-split">
      <RevealText className="reason-panel reason-panel--birthday">
        <CalendarHeart className="reason-icon" size={28} strokeWidth={1.2} aria-hidden="true" />
        <span className="reason-number">I.</span><h2>Your<br /><em>Birthday</em></h2>
        <p>THE DAY THE WORLD MET YOU</p>
      </RevealText>
      <div className="reasons-center"><span className="reasons-vertical-line" /><span className="reasons-date">22<span>.</span>11</span><span className="reasons-vertical-line" /></div>
      <RevealText className="reason-panel reason-panel--anniversary" delay={.14}>
        <Sparkles className="reason-icon" size={28} strokeWidth={1.2} aria-hidden="true" />
        <span className="reason-number">II.</span><h2>Our<br /><em>Anniversary</em></h2>
        <p>THE DAY OUR STORY BEGAN</p>
      </RevealText>
    </div>
    <RevealText><p className="arabic-body reasons-arabic" lang="ar" dir="rtl">{messages.reasons}</p></RevealText>
    <RevealText><Quote text={quotes.reasons} /></RevealText>
    <SignatureMoment />
  </ChapterLayout>;
}
