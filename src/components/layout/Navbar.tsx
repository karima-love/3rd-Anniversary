import { useEffect, useState } from 'react';
import { Menu, X, LockKeyhole } from 'lucide-react';
import { chapterLinks, type ChapterId } from '../../config/site';
export function Navbar({ active, navigate, logout }: {
  active: ChapterId; navigate: (id: ChapterId) => void; logout: () => void;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle('nav-open', open); return () => document.body.classList.remove('nav-open'); }, [open]);
  const handleNav = (id: ChapterId) => { setOpen(false); navigate(id); };
  const activeIndex = chapterLinks.findIndex(c => c.id === active);
  return <>
    <header className="site-header">
      <button type="button" onClick={() => handleNav('opening')} className="header-brand" aria-label="Back to opening">22<span>:</span>11 <small>A STORY CALLED US</small></button>
      <span className="header-chapter">{chapterLinks[activeIndex]?.title ?? 'The Beginning'} <i> / {String(activeIndex + 1).padStart(2, '0')}</i></span>
      <div className="header-actions">
        <button type="button" className="header-logout" onClick={logout} title="Lock our universe"><LockKeyhole size={16} /><span>Lock</span></button>
        <button className="header-menu" type="button" aria-label={open ? 'Close chapters menu' : 'Open chapters menu'} aria-expanded={open} aria-controls="chapters-menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />} <span>CHAPTERS</span></button>
      </div>
      <div className="reading-progress" style={{ transform: `scaleX(${(activeIndex + 1) / chapterLinks.length})` }} aria-hidden="true" />
    </header>
    {open && <div className="nav-shade" onClick={() => setOpen(false)} aria-hidden="true" />}
    <nav className={`chapters-menu ${open ? 'chapters-menu--open' : ''}`} id="chapters-menu" aria-label="Story chapters" aria-hidden={!open} inert={!open}>
      <p className="eyebrow">AN INVITATION TO REMEMBER</p>
      {chapterLinks.map(ch => <button key={ch.id} type="button" onClick={() => handleNav(ch.id)} className={active === ch.id ? 'nav-link nav-link--active' : 'nav-link'} aria-current={active === ch.id ? 'location' : undefined}>
        <span>{ch.number}</span>{ch.title}<span className="nav-link-arrow">↗</span>
      </button>)}
      <p className="nav-menu-footer">22.11.2023 — ∞ &nbsp; ♡ &nbsp; KARIMA</p>
    </nav>
  </>;
}
