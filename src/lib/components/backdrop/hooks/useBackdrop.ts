import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";

import { backdropState } from "../states/backdrop.state";

export const useBackdrop = () => {
  const [isOpen, setIsOpen] = useRecoilState(backdropState);

  const openBackdrop = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const closeBackdrop = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const values = useMemo(
    () => ({
      isOpen,
      openBackdrop,
      closeBackdrop,
    }),
    [isOpen, openBackdrop, closeBackdrop],
  );

  return values;
};
