import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { queryClient } from "@/lib/services/clients/query.client";
import { apiRequest } from "@/lib/services/requests/api.request";

import { IAddEducationalCenterValue } from "../types/add-educational-center.type";
import { addEducationalCenterValue } from "../values/add-educational-center.value";

export const useAddEducationalCenter = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: addEducationalCenterValue,
  });

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const mutationAddEducationalCenter = useMutation({
    mutationFn: async (body: IAddEducationalCenterValue) => {
      openBackdrop();

      const response = await apiRequest<IAddEducationalCenterValue>({
        body,
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
        body,
        method: "POST",
        url: "/api/db/educational-center/insert-single",
      });

      openMessageBar("El Centro Educativo se ha creado correctamente", "success");
      queryClient.invalidateQueries(["educational-center-get-all"]);
    },
    onSuccess: () => {
      reset();
      handleIsOpen(false);
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
      handleIsOpen,
      handleSubmit,
      isLoading: mutationAddEducationalCenter.isLoading,
      isOpen,
      reset,
    }),
    [control, mutationAddEducationalCenter.isLoading, mutationAddEducationalCenter.mutateAsync, handleIsOpen, handleSubmit, isOpen, reset],
  );

  return values;
};
