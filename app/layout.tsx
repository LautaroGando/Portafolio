import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import View from "@/components/GeneralComponents/View/View";
import NextAndPrevSection from "@/components/GeneralComponents/NextAndPrevSection/NextAndPrevSection";

export const metadata: Metadata = {
  title: "Portafolio - Lautaro Gando",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased w-full bg-background text-letter p-3 relative">
        <Header />
        {children}
        <div className="flex relative justify-between items-end">
          <View />
          <NextAndPrevSection />
        </div>
      </body>
    </html>
  );
}
