import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 text-center">
        <h2 className="font-meow-script text-9xl text-primary-600">Angelo y Carolina</h2>
        <p>Quieren compartir un momento especial contigo</p>
      </main>
    </div>
  );
}
