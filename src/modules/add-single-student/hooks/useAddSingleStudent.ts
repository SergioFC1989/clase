import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { useEntityCreateModal } from "@/lib/features/entity-create-modal/hooks/useEntityCreateModal";
import { queryClient } from "@/lib/services/clients/query.client";
import { apiRequest } from "@/lib/services/requests/api.request";
import { userIdState } from "@/lib/states/user-id-state";

import { IAddSingleStudentValue } from "../types/add-single-student.type";
import { addSingleStudentValue } from "../values/add-single-student.value";

export const useAddSingleStudent = (educationalCenterId: string, classroomId: string) => {
  const userId = {
    usuarioId: useRecoilValue(userIdState),
  };

  const { handleSubmit, control, reset } = useForm({
    defaultValues: addSingleStudentValue,
  });

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();
  const { handleIsCloseCreateModal } = useEntityCreateModal();

  const mutationAddSingleStudent = useMutation({
    mutationFn: async (body: IAddSingleStudentValue) => {
      openBackdrop();

      const _body = {
        ...body,
        ...userId,
        aulaId: classroomId,
        centroEducativoId: educationalCenterId,
      };

      const response = await apiRequest<IAddSingleStudentValue>({
        body: _body,
        method: "POST",
        url: "/api/db/students/get-single",
      });

      // If the student already exists, show a message and close the backdrop
      if (response.data) {
        openMessageBar("El Estudiante ya existe", "warning");
        closeBackdrop();
        return;
      }

      await apiRequest({
        body: _body,
        method: "POST",
        url: "/api/db/students/insert-single",
      });

      openMessageBar("El Estudiante se ha creado correctamente", "success");
      queryClient.invalidateQueries(["student-get-all"]);
    },
    onSuccess: () => {
      reset();
      handleIsCloseCreateModal();
      closeBackdrop();
    },
    onError: () => {
      openMessageBar("Ha ocurrido un error al crear el Estudiante", "error");
      closeBackdrop();
    },
  });

  const values = useMemo(
    () => ({
      control,
      handleAddSingleStudentForm: mutationAddSingleStudent.mutateAsync,
      handleSubmit,
      isLoading: mutationAddSingleStudent.isLoading,
      reset,
    }),
    [control, mutationAddSingleStudent.isLoading, mutationAddSingleStudent.mutateAsync, handleSubmit, reset],
  );

  return values;
};
