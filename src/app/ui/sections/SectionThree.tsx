"use client";
import WeddingCountdown from "@/app/_components/Weddingcountdown";
import Image from "next/image";

export default function SectionOne() {
  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full md:w-[40%] lg:w[30%] overflow-hidden">
        <Image
        src="/assets/images/backgrounds/PNGFondo/15.png"
        alt="Fondo de la sección uno"
        fill
        priority
        className="z-10 h-full w-full object-cover"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-4 px-8 md:px-4 lg:px-8"> 
            <h2 className="flex z-20 text-center text-4xl md:text-6xl lg:text-6xl font-bold text-primary-100 ">
                Nuestra boda comienza en...
            </h2>           
            <WeddingCountdown />

        </div>
        
        
        
    </div>
  )
}
