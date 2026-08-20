'use client';
import Image from 'next/image';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import FadeIn from '@/app/_components/FadeIn';

export default function SectionNine() {
  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/SectionTwo.avif"
        alt="Fondo de la sección nueve"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 items-center justify-center gap-4 px-4">
        <FadeIn>
          <Image
            src="/assets/images/elements/corazones-icono.avif"
            alt="Adorno de la sección nueve"
            className="z-20 object-contain"
            width={100}
            height={50}
          />
        </FadeIn>
        <h2 className="flex z-20 text-center text-4xl font-bold text-primary-500">
          Información importante
        </h2>
        <CiCircleCheck className="inline mr-2 text-6xl text-primary-500" />
        <p className="text-2xl text-center">
          <strong>Ceremonía:</strong> Los más pequeños son bienvenidos.
        </p>
        <CiCircleRemove className="inline mr-2 text-6xl text-primary-500" />
        <p className="text-2xl text-center">
          <strong>Recepción:</strong> Esta celebración será solo para adultos.
        </p>
      </div>
    </div>
  );
}
