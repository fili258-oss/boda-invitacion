'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { RiCursorHand } from 'react-icons/ri';
import { useAudioPlayer } from '@/app/_components/hooks/useAudioPlayer';
import MusicPlayer from '@/app/_components/MusicPlayer';

interface HeroSectionProps {
  videoSrc: string;
}

export default function HeroSection({ videoSrc }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const { isPlaying, play, toggle } = useAudioPlayer('/assets/music/halelulla.mp3');

  const handleVideoEnd = () => {
    document.getElementById('section-one')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpen = () => {
    setIsOpen(true);
    videoRef.current?.play();
    play();
  };

  return (
    <div className="flex relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/5.png"
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <video
        ref={videoRef}
        src={videoSrc}
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <MusicPlayer isPlaying={isPlaying} onToggle={toggle} />

      {showButton && (
        <div className="absolute inset-0 flex justify-center top-[40%]">
          <button
            onClick={handleOpen}
            onTransitionEnd={(e) => {
              if (e.propertyName === 'opacity' && isOpen) setShowButton(false);
            }}
            className={`relative transition-all duration-700 ease-out ${
              isOpen ? 'pointer-events-none scale-90 opacity-0' : 'opacity-100'
            }`}
          >
            <span
              aria-hidden
              className={`inset-0 -z-10 rounded-full bg-secondary-400/70 ${
                isOpen ? '' : 'animate-bounce-pulse'
              }`}
            />
            <span
              className={`relative z-10 block rounded-full bg-secondary-600 px-8 py-3 text-xl tracking-wide text-primary-50 shadow-lg shadow-secondary-950/40 ${
                isOpen ? '' : 'animate-bounce'
              }`}
            >
              <RiCursorHand />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
