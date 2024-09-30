import type { Metadata } from "next";

import Header from "@/components/header/header";
import Theme from "./theme";

import "./globals.css";

export const metadata: Metadata = {
  title: "Aula Diversa",
  description: "Author: Sergio Fernández Cuellar",
  category: "Education",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="es">
    <Theme>
      <body className="w-full h-screen">
        <Header />
        <div className="w-full h-screen overflow-auto print:h-auto flex flex-col px-1 lg:px-10 pt-32 print:pt-10 pb-10 bg-white">
          {children}
        </div>
      </body>
    </Theme>
  </html>
);

export default RootLayout;
