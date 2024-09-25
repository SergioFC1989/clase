"use client";

import { Separator } from "@fluentui/react";
import Image from "next/image";

import Logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="flex">
        <Image src={Logo} alt="Logo" width={320} height={320} />
      </div>
      <Separator />
    </header>
  );
};

export default Header;
