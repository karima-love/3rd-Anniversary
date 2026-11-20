import { useState } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
export function BirthdayCake({ onComplete }: { onComplete: () => void }) {
  const [out, setOut] = useState<number[]>([]);
  const reduced = useReducedMotion();
  const extinguish = (i: number) => {
    if (out.includes(i)) return;
    const next = [...out, i]; setOut(next);
    if (next.length === 3) onComplete();
  };
  return <div className="cake-stage">
    <span className="cake-top-ornament">✧ &nbsp; MAKE A LITTLE WISH &nbsp; ✧</span>
    <div className="cake-art" role="group" aria-label="Tap the three candles to make a birthday wish">
      <svg viewBox="0 0 400 340" aria-hidden="true">
        <defs>
          <linearGradient id="cake-main" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e7acbb" /><stop offset="1" stopColor="#b2768f" /></linearGradient>
          <linearGradient id="cake-icing" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff5ea" /><stop offset="1" stopColor="#f2d9d7" /></linearGradient>
        </defs>
        <ellipse cx="200" cy="288" rx="158" ry="21" fill="#0a0912" opacity=".4" />
        <ellipse cx="200" cy="281" rx="139" ry="13" fill="#d9be91" opacity=".7" />
        <rect x="84" y="167" width="232" height="108" rx="20" fill="url(#cake-main)" />
        <ellipse cx="200" cy="168" rx="116" ry="27" fill="#f4c4c9" />
        <path d="M84 168 Q95 201 110 184 Q122 168 135 196 Q147 215 163 182 Q174 170 187 192 Q201 214 216 184 Q230 171 242 192 Q252 207 268 184 Q282 174 293 187 Q311 195 316 168 Q302 140 200 138 Q104 140 84 168Z" fill="url(#cake-icing)" />
        <path d="M87 214 H313" stroke="#ffe0d9" strokeWidth="3" strokeDasharray="2 13" opacity=".72" />
        <path d="M89 245 H311" stroke="#ffe0d9" strokeWidth="2" opacity=".5" />
        <path d="M200 201 C176 178 167 195 176 212 L200 233 L224 212 C233 196 221 178 200 201Z" fill="#9d516f" opacity=".85" />
        <path d="M93 276 H307" stroke="#d9be91" strokeWidth="2" />
      </svg>
      {[0, 1, 2].map(i => <button type="button" key={i} className={`candle-button candle-button--${i + 1} ${out.includes(i) ? 'candle--out' : ''}`}
        onClick={() => extinguish(i)} aria-label={`Blow out candle ${i + 1}`} aria-pressed={out.includes(i)} disabled={out.includes(i)}>
        {!out.includes(i) && <motion.span className="candle-flame" animate={reduced ? undefined : { scale: [1, 1.09, .97, 1], rotate: [0, 3, -3, 0] }} transition={{ duration: 1.9, repeat: Infinity }} />}
        <span className="candle-wick" /><span className="candle-stick" />
        {out.includes(i) && <span className="candle-smoke" aria-hidden="true">∿</span>}
      </button>)}
    </div>
    <span className="cake-counter">{out.length} / 3 LITTLE WISHES MADE</span>
  </div>;
}
