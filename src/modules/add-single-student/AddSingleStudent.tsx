"use client";
import { EntityCreateModal } from "@/lib/features/entity-create-modal/EntityCreateModal";
import { useEntityCreateModal } from "@/lib/features/entity-create-modal/hooks/useEntityCreateModal";

import { addSingleStudentField } from "./fields/add-single-student.field";
import { useAddSingleStudent } from "./hooks/useAddSingleStudent";
import { IAddSingleStudent } from "./types/add-single-student.type";

export const AddSingleStudent = ({ classroomId, educationalCenterId }: IAddSingleStudent) => {
  const { control, handleAddSingleStudentForm, handleSubmit, reset } = useAddSingleStudent(classroomId, educationalCenterId);
  const { handleIsCloseCreateModal, handleIsOpenCreateModal, isOpen } = useEntityCreateModal();

  return (
    <EntityCreateModal
      control={control}
      handleSubmit={handleSubmit}
      iconName="AccountManagement"
      isOpen={isOpen}
      labelButtonSubmit="Crear"
      listFields={addSingleStudentField}
      onClose={handleIsCloseCreateModal}
      onOpen={handleIsOpenCreateModal}
      onSubmit={handleAddSingleStudentForm}
      reset={reset}
      title="Crear Estudiante"
    />
  );
};
