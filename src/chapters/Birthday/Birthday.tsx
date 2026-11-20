import { useState } from 'react';
import { motion } from 'motion/react';
import { ChapterLayout } from '../../components/layout/ChapterLayout';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { Quote } from '../../components/ui/Quote';
import { BirthdayCake } from './BirthdayCake';
import { messages } from '../../content/messages';
import { quotes } from '../../content/quotes';
import { useReducedMotion } from '../../hooks/useReducedMotion';
export default function Birthday() {
  const [wished, setWished] = useState(false);
  const reduced = useReducedMotion();
  return <ChapterLayout number="06" className="birthday-chapter">
    <SectionHeading kicker="22 NOVEMBER · A CELEBRATION OF YOU">The Day the World<br /><em>Met You</em></SectionHeading>
    <p className="birthday-before" lang="ar" dir="rtl">في النهارده من كل سنة عندي سبب خاص أوي إني أفرح</p>
    <BirthdayCake onComplete={() => setWished(true)} />
    {!wished ? <p className="birthday-instruction" lang="ar" dir="rtl">دوسي على الشمعات التلاتة واطلبي أمنية يا حبيبتي ♡</p> :
      <motion.div className="birthday-message" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .8 }} aria-live="polite">
        <div className="birthday-confetti" aria-hidden="true">✦ &nbsp; ✧ &nbsp; ♡ &nbsp; ✧ &nbsp; ✦</div>
        <h3>Happy Birthday, <em>Karima</em></h3>
        {messages.birthday.map(p => <p className="arabic-body" dir="rtl" lang="ar" key={p}>{p}</p>)}
      </motion.div>
    }
    <Quote text={quotes.birthday} />
  </ChapterLayout>;
}
