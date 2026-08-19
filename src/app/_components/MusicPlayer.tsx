'use client';

import { IoPlayCircleOutline, IoPauseCircle } from 'react-icons/io5';

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      className="absolute top-4 right-4 z-30 text-primary-100 drop-shadow-lg"
    >
      {isPlaying ? (
        <IoPauseCircle className="text-5xl" />
      ) : (
        <IoPlayCircleOutline className="text-5xl" />
      )}
    </button>
  );
}
