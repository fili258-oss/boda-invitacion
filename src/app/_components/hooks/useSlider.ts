'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface UseSliderReturn {
  currentIndex: number;
  goTo: (index: number) => void;
  goNext: () => void;
  goPrev: () => void;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchEnd: (e: React.TouchEvent) => void;
}

const SWIPE_THRESHOLD_PX = 50;

export function useSlider(count: number, intervalMs: number): UseSliderReturn {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const delta = touchStartX.current - e.changedTouches[0].clientX;
      if (Math.abs(delta) > SWIPE_THRESHOLD_PX) {
        delta > 0 ? goNext() : goPrev();
      }
    },
    [goNext, goPrev],
  );

  useEffect(() => {
    const id = setInterval(goNext, intervalMs);
    return () => clearInterval(id);
  }, [goNext, intervalMs]);

  return { currentIndex, goTo, goNext, goPrev, handleTouchStart, handleTouchEnd };
}
