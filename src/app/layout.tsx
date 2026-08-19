import type { Metadata } from "next";
import { iniriaSerif, meowScript, hortensia } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boda de Angelo y Carolina",
  description: "Pases de invitacion de la boda de Angelo y Carolina",
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
