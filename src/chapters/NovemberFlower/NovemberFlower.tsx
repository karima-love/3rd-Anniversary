import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { RevealText } from '../../components/ui/RevealText';
import { Quote } from '../../components/ui/Quote';
import { BloomingFlower } from '../../components/effects/BloomingFlower';
import { messages } from '../../content/messages';
import { quotes } from '../../content/quotes';
export default function NovemberFlower() {
  return <ChapterLayout number="02" className="flower-chapter">
    <div className="flower-grid">
      <RevealText className="flower-illustration">
        <span className="botanical-tag">FIG. 01 &nbsp; · &nbsp; CHRYSANTHEMUM</span>
        <div className="botanical-arch"><BloomingFlower stage="partial" /></div>
        <span className="botanical-caption">A flower for your month</span>
      </RevealText>
      <div className="flower-writing">
        <SectionHeading center={false} kicker="NOVEMBER, IN FULL BLOOM">November's<br /><em>Flower</em></SectionHeading>
        <div className="flower-copy" dir="rtl" lang="ar">
          {messages.flower.map((paragraph, i) => <RevealText key={paragraph} delay={i * .12}><p className="arabic-body">{paragraph}</p></RevealText>)}
        </div>
        <RevealText><Quote text={quotes.flower} /></RevealText>
        <div className="flower-footnote">NOVEMBER'S BIRTH FLOWER <span>✧</span> CHRYSANTHEMUM</div>
      </div>
    </div>
  </ChapterLayout>;
}
