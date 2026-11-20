import { ArrowUpRight } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  showArrow?: boolean;
}
export function ElegantButton({ children, variant = 'primary', showArrow = true, className = '', ...props }: Props) {
  return <button className={`elegant-button elegant-button--${variant} ${className}`} {...props}>
    <span>{children}</span>{showArrow && <ArrowUpRight size={17} aria-hidden="true" />}
  </button>;
}
