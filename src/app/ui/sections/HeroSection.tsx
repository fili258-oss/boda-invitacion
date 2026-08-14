"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { RiCursorHand } from "react-icons/ri";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    videoRef.current?.play();
  };

  return (
    <section className="relative h-dvh w-full md:w-[40%] lg:w[30%] overflow-hidden">
      <Image
        src="/assets/images/backgrounds/PNGFondo/5.png"
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <video
        ref={videoRef}
        src="/assets/videos/pase-2-personas.mp4"
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {showButton && (
        <div className="absolute inset-0 flex justify-center top-[40%]">
          <button
            onClick={handleOpen}
            onTransitionEnd={(e) => {
              if (e.propertyName === "opacity" && isOpen) setShowButton(false);
            }}
            className={`relative transition-all duration-700 ease-out ${
              isOpen ? "pointer-events-none scale-90 opacity-0" : "opacity-100"
            }`}
          >
            <span
              aria-hidden
              className={`absolute inset-0 -z-10 rounded-full bg-secondary-400/70 ${
                isOpen ? "" : "animate-ping"
              }`}
            />
            <span
              className={`relative z-10 block rounded-full bg-secondary-600 px-8 py-3 text-xl tracking-wide text-primary-50 shadow-lg shadow-secondary-950/40 ${
                isOpen ? "" : "animate-[button-pulse_2.4s_ease-in-out_infinite]"
              }`}
            >
              <RiCursorHand/>                                                
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
