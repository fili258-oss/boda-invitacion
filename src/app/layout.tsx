import type { Metadata } from "next";
import { iniriaSerif, meowScript, hortensia } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  // Necesario para que las URLs relativas de imágenes se resuelvan como absolutas
  metadataBase: new URL("https://boda-pases.vercel.app/"),

  title: "Boda de Angelo y Carolina",
  description:
    "Acompáñanos a celebrar la boda de Angelo y Carolina. Queremos compartir este momento especial con todos ustedes.",

  openGraph: {
    title: "Boda de Angelo y Carolina",
    description:
      "Acompáñanos a celebrar la boda de Angelo y Carolina. Encuentra aquí tu pase de invitación.",
    url: "https://boda-pases.vercel.app/",
    siteName: "Boda de Angelo y Carolina",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/og-image.jpg", // se vuelve absoluta gracias a metadataBase
        width: 1200,
        height: 630,
        alt: "Invitación a la boda de Angelo y Carolina",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Boda de Angelo y Carolina",
    description: "Encuentra aquí tu pase de invitación a la boda.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${iniriaSerif.variable} ${meowScript.variable} ${hortensia.variable}`} >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="font-iniria-serif font-normal antialiased bg-black">
        <div className="flex justify-center">
          <div className="w-full max-w-[430px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
