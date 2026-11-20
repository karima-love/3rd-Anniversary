import { Volume2, VolumeX, Music2, Pause, Play } from 'lucide-react';
import { useState } from 'react';
import type { MusicControls } from './useMusic';

export function MusicPlayer({ music }: { music: MusicControls }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="music-dock">
      {expanded && <div className="music-panel" id="music-settings">
        <p className="music-panel-title">OUR SONG <span>♫</span></p>
        <div className="music-panel-row">
          <button className="icon-button" type="button" onClick={music.toggleMute} disabled={music.unavailable} aria-label={music.muted ? 'Unmute' : 'Mute'}>
            {music.muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <label className="sr-only" htmlFor="volume-control">Music volume</label>
          <input id="volume-control" className="volume-range" type="range" min="0" max="100"
            value={Math.round(music.volume * 100)} onChange={e => music.setVolume(Number(e.target.value) / 100)} disabled={music.unavailable} />
          <span className="volume-label">{Math.round(music.volume * 100)}%</span>
        </div>
        {music.unavailable && <p className="music-warning" lang="ar" dir="rtl">الأغنية مش موجودة دلوقتي</p>}
      </div>}
      <div className="music-controls">
        <button type="button" className="music-main-button" onClick={music.toggle} disabled={music.unavailable}
          aria-label={music.isPlaying ? 'Pause our song' : 'Play our song'} title="Our song">
          {music.isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
        </button>
        <span className="music-text"><span>{music.unavailable ? 'SONG UNAVAILABLE' : music.isPlaying ? 'NOW PLAYING' : 'TAP TO PLAY'}</span><strong>Our Song</strong></span>
        <button type="button" className="music-more-button" onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded} aria-controls="music-settings" aria-label="Music settings"><Music2 size={18} /></button>
      </div>
    </div>
  );
}
