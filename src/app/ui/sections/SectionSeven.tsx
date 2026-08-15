"use client";
import Image from "next/image";

export default function SectionSeven() {
  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full md:w-[40%] lg:w[30%] overflow-hidden">
        <Image
        src="/assets/images/backgrounds/PNGFondo/10.png"
        alt="Fondo de la sección siete"
        fill
        priority
        className="z-10 h-full w-full object-cover"
        />
        <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-8 px-8 md:px-4 lg:px-8"> 
            <h2 className="flex z-20 text-center text-4xl md:text-6xl lg:text-6xl font-bold text-primary-500 ">
                Vestimenta casual o formal
            </h2>           
            <Image
            src="/assets/images/elements/23.png"
            alt="Adorno de la sección siete"
            className="z-20 object-contain"
            width={200}
            height={100}
            />            
            <p className="text-2xl text-center">Colores reservados: <strong>Novio y Novia Blanco </strong></p>                        
            <div className="flex flex-row basis-5/5 justify-center gap-8">
                <Image
                src="/assets/images/elements/27.png"
                alt="Adorno de la sección siete"
                className="z-20 object-contain"
                width={100}
                height={200}
                />
                <Image
                src="/assets/images/elements/28.avif"
                alt="Adorno de la sección siete"
                className="z-20 object-contain"
                width={80}
                height={100}
                />
            </div>

        </div>
        
        
        
    </div>
  )
}
