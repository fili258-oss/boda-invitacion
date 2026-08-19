'use client';
import Image from 'next/image';
import { CiLocationArrow1 } from 'react-icons/ci';

export default function SectionSix() {
  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/35.png"
        alt="Fondo de la sección seis"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-8 px-8">
        <Image
          src="/assets/images/elements/25.avif"
          alt="Adorno copas"
          className="z-20 object-contain"
          width={200}
          height={100}
        />
        <Image
          src="/assets/images/elements/23.png"
          alt="Adorno de la sección seis"
          className="z-20 object-contain"
          width={400}
          height={20}
        />
        <div className="flex flex-col items-center gap-8">
          <p className="text-4xl text-center">Recepción</p>
          <p className="text-2xl bold text-primary-600">
            <strong>Hora:</strong> 4:00 PM
          </p>
          <p className="text-2xl bold text-primary-600">
            <strong>Lugar:</strong> Restaurante rico mar
          </p>
        </div>
        <button className="bg-primary-500 hover:bg-primary-600 text-white text-2xl font-bold py-2 px-4 mt-20 rounded-full animate-bounce">
          <CiLocationArrow1 className="inline mr-2 text-3xl" />
          Cómo llegar
        </button>
        <Image
          src="/assets/images/elements/23.png"
          alt="Adorno de la sección seis"
          className="z-20 object-contain"
          width={400}
          height={20}
        />
      </div>
    </div>
  );
}
