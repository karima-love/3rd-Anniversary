import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
export function RevealText({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }}
    transition={{ duration: reduced ? 0 : .7, ease: [0.22, 1, 0.36, 1], delay: reduced ? 0 : delay }}>{children}</motion.div>;
}
