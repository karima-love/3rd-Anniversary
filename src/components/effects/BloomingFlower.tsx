import { motion } from 'motion/react';
import { useId } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
export type BloomStage = 'bud' | 'partial' | 'full';
export function BloomingFlower({ stage = 'full', className = '', headOnly = false }: { stage?: BloomStage; className?: string; headOnly?: boolean }) {
  const reduced = useReducedMotion();
  const key = useId().replace(/:/g, '');
  const petal = `petal-${key}`;
  const inner = `inner-${key}`;
  const center = `center-${key}`;
  const scale = stage === 'bud' ? 0.48 : stage === 'partial' ? 0.82 : 1;
  const petalsOuter = Array.from({ length: 20 }, (_, i) => i * 18);
  const petalsInner = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <svg className={`flower-svg ${className}`} viewBox={headOnly ? "0 0 400 400" : "0 0 400 470"} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A blush-pink chrysanthemum blooming">
      <defs>
        <linearGradient id={petal} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f4c1c5" /><stop offset=".58" stopColor="#d98da0" /><stop offset="1" stopColor="#a45e79" /></linearGradient>
        <linearGradient id={inner} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffe3dc" /><stop offset="1" stopColor="#cc8494" /></linearGradient>
        <radialGradient id={center}><stop stopColor="#f8dfb2" /><stop offset="1" stopColor="#b78b58" /></radialGradient>
      </defs>
      {!headOnly && <>
        <path d="M200 218 C188 310 210 375 195 450" fill="none" stroke="#687b64" strokeWidth="4" strokeLinecap="round" />
        <path d="M197 366 C164 326 136 328 127 336 C140 363 166 382 197 378" fill="#60775e" opacity=".9" />
        <path d="M201 396 C240 352 264 357 277 366 C266 389 242 411 202 410" fill="#728968" opacity=".85" />
      </>}
      <motion.g style={{ transformOrigin: '200px 202px' }} initial={false} animate={{ scale }} transition={{ duration: reduced ? 0 : 2, ease: [0.16, 1, 0.3, 1] }}>
        <g opacity=".8">{petalsOuter.map(a => <path key={`o-${a}`} d="M199 196 Q172 137 186 58 Q202 15 216 61 Q228 138 201 196" fill={`url(#${petal})`} stroke="#f7d1d4" strokeWidth=".8" transform={`rotate(${a} 200 202)`} />)}</g>
        <g>{petalsInner.map(a => <path key={`i-${a}`} d="M200 203 Q182 158 195 112 Q203 93 212 117 Q221 158 200 203" fill={`url(#${inner})`} stroke="#ffe0de" strokeWidth=".7" transform={`rotate(${a} 200 202)`} />)}</g>
        <circle cx="200" cy="202" r="29" fill="#dbac91" />
        <circle cx="200" cy="202" r="23" fill={`url(#${center})`} />
        {Array.from({ length: 12 }, (_, i) => {
          const a = i * Math.PI / 6;
          return <circle key={i} cx={200 + 13 * Math.cos(a)} cy={202 + 13 * Math.sin(a)} r="2.3" fill="#fff2c8" />;
        })}
        <circle cx="200" cy="202" r="5" fill="#f9e2b4" />
      </motion.g>
    </svg>
  );
}
