import HeroSection from "@/app/ui/sections/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center w-full bg-primary-300">
      <HeroSection />

      {/* Próxima sección: pendiente de fondo e ilustración propios */}
      <section className="flex min-h-dvh w-full flex-col items-center justify-center gap-6 bg-primary-50 px-8 py-16 text-center">
        <h2 className="font-meow-script text-8xl text-primary-800">Angelo y Carolina</h2>
        <p className="font-hortensia text-2xl text-primary-900">
          Quieren compartir un momento especial contigo.
        </p>
        <h2 className="font-hortensia text-3xl text-primary-900">¡Nos casamos!</h2>
      </section>
    </main>
  );
}
