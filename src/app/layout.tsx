import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header/Header";
import { MenuProvider } from "@/context/MenuContext/MenuContext";
import ButtonTop from "@/components/GeneralComponents/ButtonTop/ButtonTop";
import { MenuSkillsProvider } from "@/context/MenuSkillsContext/MenuSkillsContext";
import { Social } from "@/components/GeneralComponents/Social/Social";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Bienvenid@ a mi portafolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MenuProvider>
      <MenuSkillsProvider>
        <html lang="es">
          <body className={`antialiased`}>
            <Header />
            <main id="top" className="custom-bg pt-[100px] flex flex-col items-center">
              <div className="z-40">
                {children}
                <ButtonTop />
                <Social />
              </div>
            </main>
          </body>
        </html>
      </MenuSkillsProvider>
    </MenuProvider>
  );
}
