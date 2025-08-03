import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { useEntityCreateModal } from "@/lib/features/entity-create-modal/hooks/useEntityCreateModal";
import { queryClient } from "@/lib/services/clients/query.client";
import { apiRequest } from "@/lib/services/requests/api.request";
import { userIdState } from "@/lib/states/expiring-local-storage.state";

import { IAddClassroomValue } from "../types/add-classroom.type";
import { addClassroomValue } from "../values/add-classroom.value";

export const useAddClassroom = (educationalCenterId: string) => {
  const userId = {
    usuarioId: useRecoilValue(userIdState),
  };

  const { handleSubmit, control, reset } = useForm({
    defaultValues: addClassroomValue,
  });

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();
  const { handleIsCloseCreateModal } = useEntityCreateModal();

  const mutationAddClassroom = useMutation({
    mutationFn: async (body: IAddClassroomValue) => {
      openBackdrop();

      const _body = {
        ...body,
        ...userId,
        centroEducativoId: educationalCenterId,
        curso: {
          fin: body.curso.fin,
          inicio: body.curso.inicio,
        },
      };

      const response = await apiRequest<IAddClassroomValue>({
        body: _body,
        method: "POST",
        url: "/api/db/classroom/get-single",
      });

      // If the classroom already exists, show a message and close the backdrop
      if (response.data) {
        openMessageBar("El Aula ya existe", "warning");
        closeBackdrop();
        return;
      }

      await apiRequest({
        body: _body,
        method: "POST",
        url: "/api/db/classroom/insert-single",
      });

      openMessageBar("El Aula se ha creado correctamente", "success");
      queryClient.invalidateQueries(["classroom-get-all"]);
    },
    onSuccess: () => {
      reset();
      handleIsCloseCreateModal();
      closeBackdrop();
    },
    onError: () => {
      openMessageBar("Ha ocurrido un error al crear el Aula", "error");
      closeBackdrop();
    },
  });

  const values = useMemo(
    () => ({
      control,
      handleAddClassroomForm: mutationAddClassroom.mutateAsync,
      handleSubmit,
      isLoading: mutationAddClassroom.isLoading,
      reset,
    }),
    [control, mutationAddClassroom.isLoading, mutationAddClassroom.mutateAsync, handleSubmit, reset],
  );

  return values;
};
