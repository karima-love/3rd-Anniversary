import { useState } from 'react';
import { siteConfig } from '../../config/site';
export function usePasswordGate() {
  const [unlocked, setUnlocked] = useState(() => {
    try { return sessionStorage.getItem(siteConfig.storageKey) === '1'; } catch { return false; }
  });
  const unlock = (password: string) => {
    if (password !== siteConfig.password) return false;
    try { sessionStorage.setItem(siteConfig.storageKey, '1'); } catch { /* Storage may be blocked */ }
    setUnlocked(true);
    return true;
  };
  const logout = () => {
    try { sessionStorage.removeItem(siteConfig.storageKey); } catch { /* Ignore */ }
    setUnlocked(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  return { unlocked, unlock, logout };
}
