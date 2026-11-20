export function GoldOrbit({ className = '' }: { className?: string }) {
  return <div className={`gold-orbit ${className}`} aria-hidden="true"><div className="gold-orbit-ring gold-orbit-ring--a" /><div className="gold-orbit-ring gold-orbit-ring--b" /><span className="gold-orbit-star">✦</span></div>;
}
