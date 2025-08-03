"use client";
import { EntityCreateModal } from "@/lib/features/entity-create-modal/EntityCreateModal";
import { useEntityCreateModal } from "@/lib/features/entity-create-modal/hooks/useEntityCreateModal";

import { addClassroomField } from "./fields/add-classroom.field";
import { useAddClassroom } from "./hooks/useAddClassroom";
import { IAddClassroom } from "./types/add-classroom.type";

export const AddClassroom = ({ educationalCenterId }: IAddClassroom) => {
  const { control, handleAddClassroomForm, handleSubmit, reset } = useAddClassroom(educationalCenterId);
  const { handleIsCloseCreateModal, handleIsOpenCreateModal, isOpen } = useEntityCreateModal();

  return (
    <>
      <EntityCreateModal
        control={control}
        handleSubmit={handleSubmit}
        iconName="ClassroomLogo"
        isOpen={isOpen}
        labelButtonSubmit="Crear"
        listFields={addClassroomField}
        onClose={handleIsCloseCreateModal}
        onOpen={handleIsOpenCreateModal}
        onSubmit={handleAddClassroomForm}
        reset={reset}
        title="Crear Aula"
      />
    </>
  );
};
