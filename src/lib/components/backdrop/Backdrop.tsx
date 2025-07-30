import { Modal } from "@fluentui/react";
import { MoonLoader } from "react-spinners";

import { useBackdrop } from "./hooks/useBackdrop";
import { IBackdrop } from "./types/backdrop.type";

const Backdrop = ({ children }: IBackdrop) => {
  const { isOpen } = useBackdrop();

  return (
    <>
      <Modal
        containerClassName="w-full h-full justify-center content-center items-center bg-transparent shadow-none overflow-hidden"
        isOpen={isOpen}
      >
        <div className="overflow-hidden flex justify-center items-center w-full h-full">
          <MoonLoader className="overflow-hidden" color="#28a88f" size={80} />
        </div>
      </Modal>
      {children}
    </>
  );
};

export default Backdrop;
