'use client';

import Image from 'next/image';
import { useSlider } from '@/app/_components/hooks/useSlider';

export interface SlideImage {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SlideImage[];
  width: number;
  height: number;
  intervalMs?: number;
}

export default function ImageSlider({
  images,
  width,
  height,
  intervalMs = 4000,
}: ImageSliderProps) {
  const { currentIndex, goTo, handleTouchStart, handleTouchEnd } = useSlider(
    images.length,
    intervalMs,
  );

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        style={{ width, height }}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.src} className="relative flex-shrink-0 h-full" style={{ width }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-tl-full rounded-tr-full border-4 border-primary-500"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Navegación de fotos">
        {images.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Foto ${i + 1}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex
                ? 'w-3 h-3 bg-primary-500'
                : 'w-2 h-2 bg-primary-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
