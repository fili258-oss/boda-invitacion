"use client";
import Image from "next/image";
import { CiCircleCheck, CiCircleRemove  } from "react-icons/ci";
export default function SectionNine() {
  return (
    <div className="flex flex-wrap items-center relative h-dvh w-full md:w-[40%] lg:w[30%] overflow-hidden">
        <Image
        src="/assets/images/backgrounds/PNGFondo/26.png"
        alt="Fondo de la sección nueve"
        fill
        priority
        className="z-10 h-full w-full object-cover"
        />
        <div className="flex flex-wrap basis-5/5 z-20 justify-center gap-8 px-8 md:px-4 lg:px-8"> 
            <Image
            src="/assets/images/elements/32.png"
            alt="Adorno de la sección nueve"
            className="z-20 object-contain"
            width={200}
            height={100}
            />
            <h2 className="flex z-20 text-center text-4xl md:text-6xl lg:text-6xl font-bold text-primary-500 ">
                Información importante
            </h2>           
            <CiCircleCheck className="inline mr-2 text-3xl text-primary-500" />
            <p className="text-2xl text-center">A la hora de la ceremonía: puden llevar niños</p>
            <CiCircleRemove className="inline mr-2 text-3xl text-primary-500" />   
            <p className="text-2xl text-center">A la hora de la recepción: no se permite el ingreso de niños</p>                                 
        </div>
        
        
        
    </div>
  )
}
