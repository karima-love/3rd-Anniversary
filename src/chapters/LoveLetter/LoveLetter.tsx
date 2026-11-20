import { Heart } from 'lucide-react';
import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Quote } from '../../components/ui/Quote';
import { messages } from '../../content/messages';
import { quotes } from '../../content/quotes';
export default function LoveLetter() {
  return <ChapterLayout number="08" className="letter-chapter">
    <SectionHeading kicker="SOME THINGS ARE BETTER WRITTEN DOWN">A Letter from<br /><em>My Heart</em></SectionHeading>
    <div className="letter-paper"><span className="letter-watermark" aria-hidden="true">22:11</span>
      <div className="letter-topline"><span>TO MY FAVORITE PERSON</span><span>22 NOVEMBER 2026</span></div>
      <div className="letter-seal" aria-hidden="true"><Heart size={18} fill="currentColor" strokeWidth={1} /></div>
      <article className="letter-body" lang="ar" dir="rtl">{messages.letter.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</article>
      <div className="letter-signature"><span>Forever yours,</span><strong>22:11 <span>♡</span></strong></div>
      <div className="letter-bottom-rule" aria-hidden="true" />
    </div>
    <Quote text={quotes.letter} />
  </ChapterLayout>;
}
