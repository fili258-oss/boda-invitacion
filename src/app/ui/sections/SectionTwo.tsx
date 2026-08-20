'use client';
import Image from 'next/image';
import { CiCircleCheck } from 'react-icons/ci';
import FadeIn from '@/app/_components/FadeIn';

interface SectionTwoProps {
  whatsappMessage: string;
}

export default function SectionTwo({ whatsappMessage }: SectionTwoProps) {
  const encodedMsg = encodeURIComponent(whatsappMessage);
  const href = `https://api.whatsapp.com/send?phone=573008497024&text=${encodedMsg}`;

  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/SectionTwo.avif"
        alt="Fondo de la sección dos"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-14 px-8">
        <h2 className="flex z-20 text-center text-4xl font-bold text-primary-500">
          ¡Nos casamos!
        </h2>
        <FadeIn>
          <Image
            src="/assets/images/elements/anillos-icono.avif"
            alt="Adorno de la sección dos"
            className="z-20 object-contain"
            width={80}
            height={80}
          />
        </FadeIn>
        <p className="text-2xl text-center">
          Después de tantas historias, risas y sueños compartidos, hemos decidido escribir
          juntos el capítulo más hermoso:
        </p>        
        <p className="text-2xl text-center">Y queremos que nos acompañes.</p>        
      </div>
    </div>
  );
}
