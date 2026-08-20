'use client';
import Link from 'next/link'
import { useState } from 'react';
import { MdContentCopy, MdOpenInNew, MdLibraryAddCheck } from "react-icons/md";
import Image from 'next/image';

export default function Home() {
  const pase1PersonaLink = '/pase-1-persona';
  const pase2PersonasLink = '/pase-2-personas';
  const pase3PersonasLink = '/pase-3-personas';

  const [isCopied1, setIsCopied1] = useState<boolean>(false);
  const [isCopied2, setIsCopied2] = useState<boolean>(false);
  const [isCopied3, setIsCopied3] = useState<boolean>(false);

  const handleCopyLink = (link: string) => {
    let fullLink = `${window.location.origin}${link}`;
    navigator.clipboard.writeText(fullLink);
    switch (link) {
      case "/pase-1-persona":
        setIsCopied1(true);
        setTimeout(() => {
          setIsCopied1(false);
        }, 2000);
        break;
      case "/pase-2-personas":
        setIsCopied2(true);
        setTimeout(() => {
          setIsCopied2(false);
        }, 2000);
        break;
      case "/pase-3-personas":
        setIsCopied3(true);
        setTimeout(() => {
          setIsCopied3(false);
        }, 2000);
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary-300 p-4 gap-8">
      <Image
                src="/assets/images/elements/anillos-icono.avif"
                alt="Adorno de la sección dos"
                className="z-20 object-contain"
                width={80}
                height={80}
              />
      <h1 className="text-2xl font-bold text-center">Invitaciones de la boda de Angelo y Carolina</h1>
      <p className="text-lg">Links de las invitaciones:</p>
      <div className="flex flex-row gap-2">
        <Link href="/pase-1-persona" transitionTypes={['slide-in']} className="bg-primary-600 text-white p-2 rounded-full"><MdOpenInNew className="inline mr-2 text-2xl" /> Pase para 1 persona</Link>
        <button onClick={() => handleCopyLink(pase1PersonaLink)} className="bg-primary-600 text-white p-2 rounded-full">{isCopied1 ? <MdLibraryAddCheck className="inline mr-2 text-2xl" /> : <MdContentCopy className="inline mr-2 text-2xl" />} {isCopied1 ? 'Link copiado' : 'Copiar link'}</button>
      </div>
      <div className="flex flex-row gap-2">
        <Link href="/pase-2-personas" transitionTypes={['slide-in']} className="bg-primary-600 text-white p-2 rounded-full"><MdOpenInNew className="inline mr-2 text-2xl" /> Pase para 2 personas</Link>
        <button onClick={() => handleCopyLink(pase2PersonasLink)} className="bg-primary-600 text-white p-2 rounded-full">{isCopied2 ? <MdLibraryAddCheck className="inline mr-2 text-2xl" /> : <MdContentCopy className="inline mr-2 text-2xl" />} {isCopied2 ? 'Link copiado' : 'Copiar link'}</button>
      </div>
      <div className="flex flex-row gap-2">
        <Link href="/pase-3-personas" transitionTypes={['slide-in']} className="bg-primary-600 text-white p-2 rounded-full"><MdOpenInNew className="inline mr-2 text-2xl" /> Pase para 3 personas</Link>
        <button onClick={() => handleCopyLink(pase3PersonasLink)} className="bg-primary-600 text-white p-2 rounded-full">{isCopied3 ? <MdLibraryAddCheck className="inline mr-2 text-2xl" /> : <MdContentCopy className="inline mr-2 text-2xl" />} {isCopied3 ? 'Link copiado' : 'Copiar link'}</button>
      </div>
    </div>
  )
}
