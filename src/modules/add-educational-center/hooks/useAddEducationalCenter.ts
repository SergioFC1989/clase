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

import { IAddEducationalCenterValue } from "../types/add-educational-center.type";
import { addEducationalCenterValue } from "../values/add-educational-center.value";

export const useAddEducationalCenter = () => {
  const userId = {
    usuarioId: useRecoilValue(userIdState),
  };

  const { handleSubmit, control, reset } = useForm({
    defaultValues: addEducationalCenterValue,
  });

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();
  const { handleIsCloseCreateModal } = useEntityCreateModal();

  const mutationAddEducationalCenter = useMutation({
    mutationFn: async (body: IAddEducationalCenterValue) => {
      openBackdrop();

      const _body = {
        ...body,
        ...userId,
      };

      const response = await apiRequest<IAddEducationalCenterValue>({
        body: _body,
        method: "POST",
        url: "/api/db/educational-center/get-single",
      });

      // If the educational center already exists, show a message and close the backdrop
      if (response.data) {
        openMessageBar("El Centro Educativo ya existe", "warning");
        closeBackdrop();
        return;
      }

      await apiRequest({
        body: _body,
        method: "POST",
        url: "/api/db/educational-center/insert-single",
      });

      openMessageBar("El Centro Educativo se ha creado correctamente", "success");
      queryClient.invalidateQueries(["educational-center-get-all"]);
    },
    onSuccess: () => {
      reset();
      handleIsCloseCreateModal();
      closeBackdrop();
    },
    onError: () => {
      openMessageBar("Ha ocurrido un error al crear el Centro Educativo", "error");
      closeBackdrop();
    },
  });

  const values = useMemo(
    () => ({
      control,
      handleAddEducationlCenterForm: mutationAddEducationalCenter.mutateAsync,
      handleSubmit,
      isLoading: mutationAddEducationalCenter.isLoading,
      reset,
    }),
    [control, handleSubmit, mutationAddEducationalCenter.isLoading, mutationAddEducationalCenter.mutateAsync, reset],
  );

  return values;
};
