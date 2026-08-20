'use client';
import Image from 'next/image';
import FadeIn from '@/app/_components/FadeIn';

export default function SectionFour() {
  return (
    <div className="flex relative h-screen w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/SectionOne.avif"
        alt="Fondo de la sección cuatro"
        fill
        priority
        className="z-10 h-auto w-full object-cover"
      />
      <div className="flex flex-wrap z-20 justify-center items-center px-8">
        <FadeIn delay={0}>
          <Image
            src="/assets/images/elements/17.avif"
            alt="Adorno de la sección cuatro"
            className="top-2 relative z-20 object-contain"
            width={320}
            height={100}
          />
        </FadeIn>
        <FadeIn delay={200}>
          <Image
            src="/assets/images/elements/AngeloCaroG.avif"
            alt="Foto de Angelo y Carolina"
            className="-top-16 relative z-20 object-contain"
            width={250}
            height={100}
          />
        </FadeIn>
        <FadeIn delay={400}>
          <Image
            src="/assets/images/elements/18.avif"
            alt="Adorno de la sección cuatro"
            className="-top-12 relative z-20 object-contain"
            width={250}
            height={100}
          />
        </FadeIn>
        <div className="mb-14"></div>
      </div>      
    </div>
  );
}
