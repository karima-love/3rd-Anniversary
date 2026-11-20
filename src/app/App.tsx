import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react';
import { AmbientBackground } from '../components/effects/AmbientBackground';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { PasswordGate } from '../features/auth/PasswordGate';
import { usePasswordGate } from '../features/auth/usePasswordGate';
import { MusicPlayer } from '../features/music/MusicPlayer';
import { useMusic, type MusicControls } from '../features/music/useMusic';
import { useChapterNavigation } from '../features/navigation/useChapterNavigation';
import { useInView } from '../hooks/useInView';
import type { ChapterId } from '../config/site';

const Opening = lazy(() => import('../chapters/Opening/Opening'));
const NovemberFlower = lazy(() => import('../chapters/NovemberFlower/NovemberFlower'));
const TwoReasons = lazy(() => import('../chapters/TwoReasons/TwoReasons'));
const OurStory = lazy(() => import('../chapters/OurStory/OurStory'));
const Constellation = lazy(() => import('../chapters/Constellation/Constellation'));
const Birthday = lazy(() => import('../chapters/Birthday/Birthday'));
const FuturePages = lazy(() => import('../chapters/FuturePages/FuturePages'));
const LoveLetter = lazy(() => import('../chapters/LoveLetter/LoveLetter'));
const FinalBloom = lazy(() => import('../chapters/FinalBloom/FinalBloom'));

function DeferredChapter({ id, children }: { id: ChapterId; children: ReactNode }) {
  const { ref, inView } = useInView<HTMLDivElement>('1000px 0px');
  return <div id={id} ref={ref} className="chapter-shell">
    {inView ? <Suspense fallback={<LoadingScreen />}>{children}</Suspense> : <div className="chapter-await" aria-hidden="true" />}
  </div>;
}

function Experience({ logout, music }: { logout: () => void; music: MusicControls }) {
  const [replayKey, setReplayKey] = useState(0);
  const { active, navigate } = useChapterNavigation(replayKey);
  useEffect(() => { music.setDucked(active === 'forever'); }, [active, music.setDucked]);
  const replay = () => { setReplayKey(k => k + 1); navigate('opening'); };
  const begin = () => { if (!music.isPlaying) music.play(); navigate('flower'); };
  return <div className="experience">
    <AmbientBackground />
    <a href="#opening" className="skip-link">Skip to story</a>
    <Navbar active={active} navigate={navigate} logout={logout} />
    <main className="story-main" key={replayKey}>
      <DeferredChapter id="opening"><Opening begin={begin} next={() => navigate('flower')} /></DeferredChapter>
      <DeferredChapter id="flower"><NovemberFlower /></DeferredChapter>
      <DeferredChapter id="reasons"><TwoReasons /></DeferredChapter>
      <DeferredChapter id="our-story"><OurStory next={() => navigate('stars')} /></DeferredChapter>
      <DeferredChapter id="stars"><Constellation /></DeferredChapter>
      <DeferredChapter id="birthday"><Birthday /></DeferredChapter>
      <DeferredChapter id="future"><FuturePages /></DeferredChapter>
      <DeferredChapter id="letter"><LoveLetter /></DeferredChapter>
      <DeferredChapter id="forever"><FinalBloom replay={replay} /></DeferredChapter>
    </main>
    <Footer />
    <MusicPlayer music={music} />
  </div>;
}
export default function App() {
  const { unlocked, unlock, logout } = usePasswordGate();
  // The audio object must already exist BEFORE the password-submit gesture.
  // Mounting it after unlocking would lose the browser's user-activation window.
  const music = useMusic();
  const leave = () => { music.pause(); logout(); };
  return unlocked
    ? <Experience logout={leave} music={music} />
    : <PasswordGate unlock={unlock} onUnlocked={music.play} />;
}

