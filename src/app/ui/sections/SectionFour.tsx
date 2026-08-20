'use client';
import Image from 'next/image';

export default function SectionFour() {
  return (
    <div className="flex flex-col relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/SectionOne.avif"
        alt="Fondo de la sección cuatro"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-auto z-20 justify-center items-center px-8">
        <Image
          src="/assets/images/elements/17.avif"
          alt="Adorno de la sección cuatro"
          className="top-4 relative z-20 object-contain"
          width={350}
          height={100}
        />
        <Image
          src="/assets/images/elements/AngeloCaroG.avif"
          alt="Foto de Angelo y Carolina"
          className="-top-16 relative z-20 object-contain"
          width={250}
          height={100}
        />
        <Image
          src="/assets/images/elements/18.avif"
          alt="Adorno de la sección cuatro"
          className="-top-12 relative z-20 object-contain"
          width={250}
          height={100}
        />        
      </div>
      <div className='clear-both mt-10'></div>
    </div>
  );
}
