import Link from 'next/link';
import { IoMdHeartEmpty } from 'react-icons/io';

export default function CreditsBanner() {
  return (
    <section className="w-full bg-primary-950 py-8 flex items-center justify-center">
      <p className="text-primary-300 text-sm text-center font-hortensia tracking-wide">
        Desarrollado con el {' '}
        <IoMdHeartEmpty className="inline text-secondary-500 text-base" />{' '}
        por{' '}
        <Link
          href="https://marino-botina.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-400 underline underline-offset-2"
        >
          Marino Botina
        </Link>
      </p>
    </section>
  );
}
