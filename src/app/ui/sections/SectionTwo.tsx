'use client';
import Image from 'next/image';
import { CiCircleCheck } from 'react-icons/ci';

interface SectionTwoProps {
  whatsappMessage: string;
}

export default function SectionTwo({ whatsappMessage }: SectionTwoProps) {
  const encodedMsg = encodeURIComponent(whatsappMessage);
  const href = `https://api.whatsapp.com/send?phone=573008497024&text=${encodedMsg}`;

  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/7.png"
        alt="Fondo de la sección dos"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-4 px-8">
        <h2 className="flex z-20 text-center text-4xl font-bold text-primary-500">
          ¡Bienvenidos!
        </h2>
        <Image
          src="/assets/images/elements/12.png"
          alt="Adorno de la sección dos"
          className="z-20 object-contain"
          width={200}
          height={100}
        />
        <p className="text-2xl text-center">
          Después de tantas historias, risas y sueños compartidos, hemos decidido escribir
          juntos el capítulo más hermoso:
        </p>
        <h2 className="font-meow-script text-4xl text-primary-600">¡Nos casamos!</h2>
        <p className="text-2xl text-center">Y queremos que nos acompañes.</p>
        <a
          href={href}
          className="bg-primary-500 hover:bg-primary-600 text-white text-2xl font-bold py-2 px-4 mt-20 rounded-full animate-bounce"
        >
          <CiCircleCheck className="inline mr-2 text-3xl" />
          Confirmar asistencia
        </a>
      </div>
    </div>
  );
}
