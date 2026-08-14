import HeroSection from "@/app/ui/sections/HeroSection";
import SectionOne from "./ui/sections/SectionOne";
import SectionTwo from "./ui/sections/SectionTwo";
import SectionThree from "./ui/sections/SectionThree";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-primary-300">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      


      
    </main>
  );
}
