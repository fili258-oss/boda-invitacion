"use client";
import Image from "next/image";

export default function SectionOne() {
  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full md:w-[40%] lg:w[30%] overflow-hidden">
        <Image
        src="/assets/images/backgrounds/PNGFondo/7.png"
        alt="Fondo de la sección uno"
        fill
        priority
        className="z-10 h-full w-full object-cover"
        />
        <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-4 px-8 md:px-4 lg:px-8"> 
            <h2 className="flex z-20 text-center text-4xl md:text-6xl lg:text-6xl font-bold text-primary-500 ">
                ¡Bienvenidos!
            </h2>           
            <Image
            src="/assets/images/elements/12.png"
            alt="Adorno de la sección dos"
            className="z-20 object-contain"
            width={200}
            height={100}
            />            
            <p className="text-2xl text-center">Después de tantas historias, risas y sueños compartidos, hemos decidido escribir juntos el capítulo más hermoso:</p>
            <h2 className="font-meow-script text-4xl text-primary-600">¡Nos casamos!</h2>
            <p className="text-2xl text-center">Y queremos que nos acompañes.</p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full animate-bounce">
                Confirmar asistencia
            </button>

        </div>
        
        
        
    </div>
  )
}
