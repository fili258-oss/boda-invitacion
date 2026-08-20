'use client';
import Image from 'next/image';
import ImageSlider from '@/app/_components/ImageSlider';
import FadeIn from '@/app/_components/FadeIn';

const SLIDE_IMAGES = [
  { src: '/assets/images/backgrounds/PNGFondo/AngeloCaroSlideUno.avif',    alt: 'Angelo y Carolina 1' },
  { src: '/assets/images/backgrounds/PNGFondo/AngeloCaroSlideDos.avif',    alt: 'Angelo y Carolina 2' },
  { src: '/assets/images/backgrounds/PNGFondo/AngeloCaroSlideTres.avif',   alt: 'Angelo y Carolina 3' },
  { src: '/assets/images/backgrounds/PNGFondo/AngeloCaroSlideCuatro.avif', alt: 'Angelo y Carolina 4' },
  { src: '/assets/images/backgrounds/PNGFondo/AngeloCaroSlideCinco.avif',  alt: 'Angelo y Carolina 5' },
];

export default function SectionOne() {
  return (
    <div id="section-one" className="flex flex-wrap items-center relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/SectionOne.avif"
        alt="Fondo de la sección uno"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-4 px-8">
        <FadeIn>
          <ImageSlider images={SLIDE_IMAGES} width={260} height={450} intervalMs={4000} />
        </FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <h2 className="flex z-20 text-4xl font-bold text-primary-500">
            Angelo &amp; Carolina
          </h2>
          <p className="text-2xl text-center">Quieren compartir un momento especial contigo</p>
          <button className="cursor-pointer bg-primary-500 hover:bg-primary-600 text-white text-2xl font-bold py-2 px-4 rounded-full animate-bounce mt-8">
            Ver invitación
          </button>
        </div>
      </div>
    </div>
  );
}
