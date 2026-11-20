import { useCallback, useEffect, useRef, useState } from 'react';
import { musicConfig } from '../../config/music';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function useMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolumeState] = useState<number>(musicConfig.initialVolume);
  const [unavailable, setUnavailable] = useState(false);
  const reduceMotion = useReducedMotion();
  const volumeRef = useRef<number>(musicConfig.initialVolume);
  const duckedRef = useRef(false);

  const cancelFade = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
  }, []);

  useEffect(() => {
    const audio = new Audio(musicConfig.src);
    audio.preload = 'none';
    audio.loop = musicConfig.loop;
    audio.volume = musicConfig.initialVolume;
    const onError = () => { setUnavailable(true); setIsPlaying(false); };
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    audio.addEventListener('error', onError);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('play', onPlay);
    audioRef.current = audio;
    return () => {
      cancelFade(); audio.pause(); audio.removeAttribute('src'); audio.load();
      audio.removeEventListener('error', onError);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('play', onPlay);
      audioRef.current = null;
    };
  }, [cancelFade]);

  const fade = useCallback((target: number, duration: number, onComplete?: () => void) => {
    cancelFade();
    const audio = audioRef.current;
    if (!audio) return;
    if (reduceMotion || duration <= 0) { audio.volume = target; onComplete?.(); return; }
    const startVolume = audio.volume;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      audio.volume = Math.max(0, Math.min(1, startVolume + (target - startVolume) * progress));
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      else { frameRef.current = null; onComplete?.(); }
    };
    frameRef.current = requestAnimationFrame(tick);
  }, [cancelFade, reduceMotion]);

  // Must be called directly from a real click/tap to satisfy autoplay policies.
  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || unavailable) return;
    cancelFade();
    audio.volume = reduceMotion ? volumeRef.current * (duckedRef.current ? .55 : 1) : 0;
    const playPromise = audio.play();
    void playPromise.then(() => {
      setUnavailable(false);
      if (!reduceMotion) fade(volumeRef.current * (duckedRef.current ? .55 : 1), musicConfig.fadeInDuration);
    }).catch(() => {
      // Browser disallowed playback or file is missing; keep everything usable.
      setIsPlaying(false);
    });
  }, [cancelFade, fade, reduceMotion, unavailable]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    fade(0, musicConfig.fadeOutDuration, () => audio.pause());
  }, [fade]);
  const toggle = useCallback(() => { if (audioRef.current?.paused) play(); else pause(); }, [play, pause]);
  const setVolume = (value: number) => {
    const next = Math.min(1, Math.max(0, value));
    volumeRef.current = next; setVolumeState(next);
    cancelFade();
    if (audioRef.current) audioRef.current.volume = next * (duckedRef.current ? .55 : 1);
  };
  const setDucked = useCallback((value: boolean) => {
    if (duckedRef.current === value) return;
    duckedRef.current = value;
    if (audioRef.current && !audioRef.current.paused) fade(volumeRef.current * (value ? .55 : 1), 1100);
  }, [fade]);
  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    if (audioRef.current) audioRef.current.muted = next;
  };
  return { play, pause, toggle, isPlaying, muted, toggleMute, volume, setVolume, unavailable, setDucked };
}
export type MusicControls = ReturnType<typeof useMusic>;
