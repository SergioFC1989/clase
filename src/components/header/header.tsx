"use client";

import Image from "next/image";

import Logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-2 print:hidden">
      <Image src={Logo} alt="Logo" width={320} height={320} />
    </header>
  );
};

export default Header;
