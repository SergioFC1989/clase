"use client";
import { EntityCreateModal } from "@/lib/features/entity-create-modal/EntityCreateModal";
import { useEntityCreateModal } from "@/lib/features/entity-create-modal/hooks/useEntityCreateModal";

import { addClassroomField } from "./fields/add-classroom.field";
import { useAddClassroom } from "./hooks/useAddClassroom";

export const AddClassroom = () => {
  const { control, handleAddEducationlCenterForm, handleSubmit, reset } = useAddClassroom();
  const { handleIsCloseCreateModal, handleIsOpenCreateModal, isOpen } = useEntityCreateModal();

  return (
    <EntityCreateModal
      control={control}
      handleSubmit={handleSubmit}
      iconName="ClassroomLogo"
      isOpen={isOpen}
      labelButtonSubmit="Crear"
      listFields={addClassroomField}
      onClose={handleIsCloseCreateModal}
      onOpen={handleIsOpenCreateModal}
      onSubmit={handleAddEducationlCenterForm}
      reset={reset}
      title="Crear Aula"
    />
  );
};
