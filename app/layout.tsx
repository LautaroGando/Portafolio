import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import View from "@/components/GeneralComponents/View/View";
import NextAndPrevSection from "@/components/GeneralComponents/NextAndPrevSection/NextAndPrevSection";
import Light from "@/components/GeneralComponents/Light/Light";

export const metadata: Metadata = {
  title: "Lautaro Gando",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased w-full bg-background text-letter p-3 relative flex flex-col gap-5">
        <Light />
        <Header />
        <main className="mx-auto w-[95%] min-h-[calc(100vh-221px)] flex justify-center items-center font-letter sm:w-[85%]">
          {children}
        </main>
        <div className="flex relative justify-between items-end">
          <View />
          <NextAndPrevSection />
        </div>
      </body>
    </html>
  );
}
