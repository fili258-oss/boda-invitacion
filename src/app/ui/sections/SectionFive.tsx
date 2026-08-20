'use client';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import FadeIn from '@/app/_components/FadeIn';

export default function SectionFive() {
  return (
    <div className="flex flex-wrap items-center relative h-screen w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/SectionTwo.avif"
        alt="Fondo de la sección cinco"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-8 px-8">
        <FadeIn>
          <Image
            src="/assets/images/elements/iglesia-icono.avif"
            alt="Adorno de la sección cinco"
            className="z-20 object-contain"
            width={100}
            height={50}
          />
        </FadeIn>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <p className="text-4xl text-center">Ceremonía religosa</p>
          <p className="text-2xl bold text-primary-600">
            <strong>Hora:</strong> 5:00 PM
          </p>
          <p className="text-2xl text-center text-primary-600">
            <strong>Lugar:</strong> Iglesia cátedral - Parque Colón
          </p>
        </div>
        <a
          href="https://maps.app.goo.gl/tJMm2y25oafXbDsQ7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-500 hover:bg-primary-600 text-white text-2xl font-bold py-2 px-4 mt-20 rounded-full animate-bounce"
        >
          <CiLocationOn className="inline mr-2 text-3xl" />
          Ver ubicación
        </a>
        <FadeIn delay={200}>
          <Image
            src="/assets/images/elements/adorno-icono.avif"
            alt="Adorno de la sección cinco"
            className="z-20 object-contain"
            width={400}
            height={20}
          />
        </FadeIn>
      </div>
    </div>
  );
}
