export const musicConfig = {
  src: `${import.meta.env.BASE_URL}assets/audio/our-song.mp3`,
  initialVolume: 0.35,
  loop: true,
  fadeInDuration: 1800,
  fadeOutDuration: 1200,
} as const;
