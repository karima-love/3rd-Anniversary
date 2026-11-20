import { RotateCcw } from 'lucide-react';
import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { BloomingFlower } from '../../components/effects/BloomingFlower';
import { ElegantButton } from '../../components/ui/ElegantButton';
import { RevealText } from '../../components/ui/RevealText';
import { Quote } from '../../components/ui/Quote';
import { messages } from '../../content/messages';
import { quotes } from '../../content/quotes';
export default function FinalBloom({ replay }: { replay: () => void }) {
  return <ChapterLayout number="09" className="final-chapter">
    <div className="final-flower"><BloomingFlower stage="full" /></div>
    <RevealText><p className="eyebrow">AND THE STORY KEEPS BLOOMING</p></RevealText>
    <RevealText delay={.1}><h2 className="final-name">Karima<span>♡</span></h2></RevealText>
    <div className="final-words" lang="ar" dir="rtl">{messages.forever.map(p => <RevealText key={p}><p className="arabic-body">{p}</p></RevealText>)}</div>
    <RevealText><Quote text={quotes.forever} /></RevealText>
    <RevealText><h3 className="final-wish">Happy Birthday <span>&</span><br />Happy 3rd Anniversary, <em>Karima ♡</em></h3></RevealText>
    <RevealText><p className="final-signature">22.11.2023 <span>—</span> ∞</p></RevealText>
    <RevealText><ElegantButton onClick={replay} variant="outline" className="replay-button" showArrow={false}><RotateCcw size={17} aria-hidden="true" /><span>Relive Our Story</span></ElegantButton></RevealText>
    <p className="final-smallprint">THE BEST PART IS THAT WE'RE STILL WRITING IT.</p>
  </ChapterLayout>;
}
