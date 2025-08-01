import { useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";

import { entityCreateModalState } from "../entity-create-modal.state";

export const useEntityCreateModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(entityCreateModalState);

  const handleIsCloseCreateModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleIsOpenCreateModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const values = useMemo(
    () => ({
      handleIsCloseCreateModal,
      handleIsOpenCreateModal,
      isOpen,
    }),
    [handleIsCloseCreateModal, handleIsOpenCreateModal, isOpen],
  );

  return values;
};
