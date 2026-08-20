'use client';

import { useInView } from '@/app/_components/hooks/useInView';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
