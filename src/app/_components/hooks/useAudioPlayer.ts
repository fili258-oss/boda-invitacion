'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseAudioPlayerReturn {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export function useAudioPlayer(src: string): UseAudioPlayerReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audioRef.current = audio;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
      audio.pause();
    };
  }, [src]);

  const play = useCallback(() => {
    audioRef.current?.play();
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const toggle = useCallback(() => {
    if (audioRef.current?.paused) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }, []);

  return { isPlaying, play, pause, toggle, audioRef };
}
