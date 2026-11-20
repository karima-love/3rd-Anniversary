import { useId, useState, type FormEvent } from 'react';
import { Eye, EyeOff, Heart, LockKeyhole, ArrowRight } from 'lucide-react';
import { BloomingFlower } from '../../components/effects/BloomingFlower';
import { GoldOrbit } from '../../components/effects/GoldOrbit';
import { motion } from 'motion/react';

export function PasswordGate({ unlock, onUnlocked }: { unlock: (value: string) => boolean; onUnlocked: () => void }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const inputId = useId();
  const errorId = useId();
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (unlock(password.trim())) {
      // Still inside the user's real click / Enter key event. Start the song now.
      onUnlocked();
    } else {
      setError('ممم مش دي كلمة السر يا حبيبتي، جربي تاني ♡');
    }
  };
  return (
    <main className="gate-page">
      <div className="grain-overlay" aria-hidden="true" />
      <div className="gate-glow" aria-hidden="true" />
      <span className="gate-brand">22:11 <span>·</span> A STORY CALLED US</span>
      <GoldOrbit className="gate-orbit" />
      <motion.div className="gate-card" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
        <div className="gate-flower" aria-hidden="true"><BloomingFlower stage="partial" headOnly /></div>
        <p className="eyebrow gate-dedication"><span className="tiny-sparkle">✧</span> FOR KARIMA, WITH LOVE <span className="tiny-sparkle">✧</span></p>
        <h1 className="gate-heading">Our Private<br /><em>Universe</em></h1>
        <p className="gate-subtitle">A little world made only for you, Karima.</p>
        <div className="ornament"><span />♡<span /></div>
        <form className="gate-form" onSubmit={onSubmit}>
          <label className="form-label" htmlFor={inputId}>YOUR LITTLE KEY</label>
          <div className="password-field" dir="ltr">
            <LockKeyhole size={17} aria-hidden="true" />
            <input id={inputId} type={showPassword ? 'text' : 'password'} autoComplete="off"
              value={password} onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="اكتبي كلمة السر يا حبيبتي" dir="rtl" required
              aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} />
            <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="gate-error" id={errorId} role={error ? 'alert' : undefined} lang="ar" dir="rtl">{error || '\u00a0'}</div>
          <button className="gate-submit" type="submit">Enter Our Story <Heart size={16} fill="currentColor" strokeWidth={1.3} /> <ArrowRight size={17} /></button>
        </form>
        <p className="gate-footer">EST. 22 NOVEMBER 2023 <span>✦</span> FOREVER TO GO</p>
      </motion.div>
      <span className="corner-coordinates">22°11′ N &nbsp; · &nbsp; OUR OWN UNIVERSE</span>
    </main>
  );
}
