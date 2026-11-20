import { ArrowDown, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { GoldOrbit } from '../../components/effects/GoldOrbit';
import { RevealText } from '../../components/ui/RevealText';
import { ElegantButton } from '../../components/ui/ElegantButton';
import { Quote } from '../../components/ui/Quote';
import { messages } from '../../content/messages';
import { quotes } from '../../content/quotes';
import './Opening.css';

export default function Opening({ next, begin }: { next: () => void; begin: () => void }) {
  return <ChapterLayout number="01" className="opening-chapter">
    <div className="opening-ornament" aria-hidden="true"><GoldOrbit /><span className="opening-orbit-heart"><Heart size={17} fill="currentColor" /></span></div>
    <RevealText><p className="opening-welcome">Welcome to our little universe, Karima.</p></RevealText>
    <RevealText className="opening-topline"><span className="eyebrow">A PRIVATE LITTLE UNIVERSE <span className="mini-star">✧</span> EST. 2023</span></RevealText>
    <motion.h1 className="opening-numeral" initial={{ opacity: 0, scale: .92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>22<span>:</span>11</motion.h1>
    <RevealText delay={.1}><p className="opening-date">22 NOVEMBER <span>✦</span> THE DAY EVERYTHING CHANGED</p></RevealText>
    <RevealText delay={.17}><h2 className="arabic-hero" lang="ar" dir="rtl">كل الحكاية بدأت بيك</h2></RevealText>
    <RevealText delay={.23}><p className="arabic-body opening-description" lang="ar" dir="rtl">{messages.opening}</p></RevealText>
    <RevealText delay={.29}><Quote text={quotes.opening} /></RevealText>
    <RevealText className="opening-ctas" delay={.35}>
      <ElegantButton onClick={begin}>Begin Our Story</ElegantButton>
      <button type="button" className="text-link" onClick={next}>Skip Intro <ArrowDown size={15} /></button>
    </RevealText>
    <div className="scroll-indicator" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
  </ChapterLayout>;
}
