import type { ReactNode } from 'react';
export function SectionHeading({ kicker, children, subline, center = true }: {
  kicker: string; children: ReactNode; subline?: string; center?: boolean;
}) {
  return <header className={`section-heading${center ? ' section-heading--center' : ''}`}>
    <span className="eyebrow">{kicker}</span>
    <h2 className="display-title">{children}</h2>
    {subline && <p className="section-subline" dir="rtl" lang="ar">{subline}</p>}
  </header>;
}
