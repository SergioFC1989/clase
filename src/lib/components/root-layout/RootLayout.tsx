"use client";
import "@/lib/styles/style.css";

import Image from "next/image";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

import NameLogo from "@/lib/assets/name-logo.png";
import { AppProvider } from "@/lib/context/app-context";
import { queryClient } from "@/lib/services/clients/query.client";
import Theme from "@/lib/themes/theme";

import Backdrop from "../backdrop/Backdrop";
import MessageBar from "../message-bar/MessageBar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AppProvider>
          <Theme>
            <header className="fixed top-0 left-0 w-full bg-primary-color shadow-gray-400 shadow-lg z-50 px-2 print:hidden">
              <div className="flex flex-row gap-6 py-2 px-4">
                <Image src={NameLogo} alt="NameLogo" width={100} height={100} />
              </div>
            </header>
            <div className="flex flex-col w-full h-screen gap-2 pb-8">
              <div className="pt-14">
                <MessageBar />
              </div>
              <div className="w-full h-screen print:h-auto flex flex-col px-2 lg:px-10 overflow-auto bg-white">
                <Backdrop>{children}</Backdrop>
              </div>
            </div>
          </Theme>
        </AppProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default RootLayout;
