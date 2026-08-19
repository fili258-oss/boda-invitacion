import { notFound } from 'next/navigation';
import { PASES, isPaseSlug } from '@/app/lib/pases';
import HeroSection from '@/app/ui/sections/HeroSection';
import SectionOne from '@/app/ui/sections/SectionOne';
import SectionTwo from '@/app/ui/sections/SectionTwo';
import SectionThree from '@/app/ui/sections/SectionThree';
import SectionFour from '@/app/ui/sections/SectionFour';
import SectionFive from '@/app/ui/sections/SectionFive';
import SectionSix from '@/app/ui/sections/SectionSix';
import SectionSeven from '@/app/ui/sections/SectionSeven';
import SectionEight from '@/app/ui/sections/SectionEight';
import SectionNine from '@/app/ui/sections/SectionNine';
import SectionTen from '@/app/ui/sections/SectionTen';

export function generateStaticParams() {
  return Object.keys(PASES).map((pase) => ({ pase }));
}

interface PasePageProps {
  params: Promise<{ pase: string }>;
}

export default async function PasePage({ params }: PasePageProps) {
  const { pase } = await params;

  if (!isPaseSlug(pase)) notFound();

  const config = PASES[pase];

  return (
    <main className="flex flex-col items-center w-full bg-primary-300">
      <HeroSection videoSrc={config.videoSrc} />
      <SectionOne />
      <SectionTwo whatsappMessage={config.whatsappMessage} />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen whatsappMessage={config.whatsappMessage} />
    </main>
  );
}
