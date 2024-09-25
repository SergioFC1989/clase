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
  <html lang="en">
    <body className="w-full lg:w-1/2 flex flex-col h-screen px-2 lg:px-10 py-5 bg-white ">
      <Theme>
        <Header />
        {children}
      </Theme>
    </body>
  </html>
);

export default RootLayout;
