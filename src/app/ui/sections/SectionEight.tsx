'use client';
import Image from 'next/image';

export default function SectionEight() {
  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/SectionOne.avif"
        alt="Fondo de la sección ocho"
        fill
        priority
        className="z-10 h-full w-full object-cover"
      />
      <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-28 px-8">
        <Image
          src="/assets/images/elements/31.png"
          alt="Adorno separador"
          className="z-20 object-contain"
          width={400}
          height={40}
        />
        <div className="flex flex-col items-center gap-8">
          <p className="text-4xl bold text-center">
            Ese día no habrá paraguas… pero sí una lluvia de sobres que nos llenará de
            sueños y proyectos.
          </p>
          <p className="text-xl italic text-center">
            ¡Gracias por ser parte de esta aventura!.
          </p>
          <Image
            src="/assets/images/elements/30.avif"
            alt="Ilustración sobre"
            className="z-20 object-contain"
            width={80}
            height={20}
          />
        </div>
        <Image
          src="/assets/images/elements/31.png"
          alt="Adorno separador"
          className="z-20 object-contain"
          width={400}
          height={20}
        />
      </div>
    </div>
  );
}
