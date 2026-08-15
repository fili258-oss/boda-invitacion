import HeroSection from "@/app/ui/sections/HeroSection";
import SectionOne from "./ui/sections/SectionOne";
import SectionTwo from "./ui/sections/SectionTwo";
import SectionThree from "./ui/sections/SectionThree";
import SectionFour from "./ui/sections/SectionFour";
import SectionFive from "./ui/sections/SectionFive";
import SectionSix from "./ui/sections/SectionSix";
import SectionSeven from "./ui/sections/SectionSeven";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full bg-primary-300">
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      

      
    </main>
  );
}
