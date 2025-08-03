"use client";
import { EntityCreateModal } from "@/lib/features/entity-create-modal/EntityCreateModal";
import { useEntityCreateModal } from "@/lib/features/entity-create-modal/hooks/useEntityCreateModal";

import { addEducationalCenterField } from "./fields/add-educational-center.field";
import { useAddEducationalCenter } from "./hooks/useAddEducationalCenter";

export const AddEducationalCenter = () => {
  const { control, handleAddEducationlCenterForm, handleSubmit, reset } = useAddEducationalCenter();
  const { handleIsCloseCreateModal, handleIsOpenCreateModal, isOpen } = useEntityCreateModal();

  return (
    <EntityCreateModal
      control={control}
      handleSubmit={handleSubmit}
      iconName="SingleBookmark"
      isOpen={isOpen}
      labelButtonSubmit="Crear"
      listFields={addEducationalCenterField}
      onClose={handleIsCloseCreateModal}
      onOpen={handleIsOpenCreateModal}
      onSubmit={handleAddEducationlCenterForm}
      reset={reset}
      title="Crear Centro Educativo"
    />
  );
};
