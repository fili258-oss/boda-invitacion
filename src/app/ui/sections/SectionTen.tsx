'use client';
import Image from 'next/image';
import { CiCircleCheck } from 'react-icons/ci';
import FadeIn from '@/app/_components/FadeIn';

interface SectionTenProps {
  whatsappMessage: string;
}

export default function SectionTen({ whatsappMessage }: SectionTenProps) {
  const encodedMsg = encodeURIComponent(whatsappMessage);
  const href = `https://api.whatsapp.com/send?phone=573008497024&text=${encodedMsg}`;

  return (
    <div className="flex flex-wrap items-center relative h-screen w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/SectionOne.avif"
        alt="Fondo de la sección diez"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-28 px-8">
        <FadeIn>
          <Image
            src="/assets/images/elements/31.png"
            alt="Adorno separador"
            className="z-20 object-contain"
            width={400}
            height={40}
          />
        </FadeIn>
        <div className="flex flex-col items-center gap-8">
          <p className="text-4xl bold text-center">
            Tu compañía es muy importante para nosotros, déjanos saber si contaremos con
            tu asistencia.
          </p>
          <p className="text-xl italic text-center">Confirmar antes del 12 de octubre.</p>
          <FadeIn delay={200}>
            <Image
              src="/assets/images/elements/30.avif"
              alt="Ilustración sobre"
              className="z-20 object-contain"
              width={80}
              height={20}
            />
          </FadeIn>
          <a
            href={href}
            className="bg-primary-500 hover:bg-primary-600 text-white text-2xl font-bold py-2 px-4 mt-20 rounded-full animate-bounce"
          >
            <CiCircleCheck className="inline mr-2 text-3xl" />
            Confirmar asistencia
          </a>
        </div>
      </div>
    </div>
  );
}
