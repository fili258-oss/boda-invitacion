'use client';
import Image from 'next/image';

export default function SectionFour() {
  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/20.png"
        alt="Fondo de la sección cuatro"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-4 px-8">
        <Image
          src="/assets/images/elements/17.avif"
          alt="Adorno de la sección cuatro"
          className="z-20 object-contain"
          width={350}
          height={100}
        />
        <Image
          src="/assets/images/elements/AngeloCaroG.avif"
          alt="Foto de Angelo y Carolina"
          className="-top-25 relative z-20 object-contain"
          width={250}
          height={100}
        />
        <Image
          src="/assets/images/elements/18.avif"
          alt="Adorno de la sección cuatro"
          className="relative -top-25 z-20 object-contain"
          width={250}
          height={100}
        />
      </div>
    </div>
  );
}
