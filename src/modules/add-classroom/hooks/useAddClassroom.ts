import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRecoilValue } from "recoil";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { queryClient } from "@/lib/services/clients/query.client";
import { apiRequest } from "@/lib/services/requests/api.request";
import { userIdState } from "@/lib/states/expiring-local-storage.state";

import { IAddClassroomValue } from "../types/add-classroom.type";
import { addClassroomValue } from "../values/add-classroom.value";

export const useAddClassroom = () => {
  const userId = useRecoilValue(userIdState);

  const { handleSubmit, control, reset } = useForm({
    defaultValues: addClassroomValue,
  });

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const mutationAddClassroom = useMutation({
    mutationFn: async (body: IAddClassroomValue) => {
      openBackdrop();

      const response = await apiRequest<IAddClassroomValue>({
        body: { ...body, userId },
        method: "POST",
        url: "/api/db/educational-center/get-single",
      });

      // If the classroom already exists, show a message and close the backdrop
      if (response.data) {
        openMessageBar("El Aula ya existe", "warning");
        closeBackdrop();
        return;
      }

      await apiRequest({
        body: { ...body, userId },
        method: "POST",
        url: "/api/db/educational-center/insert-single",
      });

      openMessageBar("El Aula se ha creado correctamente", "success");
      queryClient.invalidateQueries(["educational-center-get-all"]);
    },
    onSuccess: () => {
      reset();
      handleIsOpen(false);
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
      handleAddEducationlCenterForm: mutationAddClassroom.mutateAsync,
      handleIsOpen,
      handleSubmit,
      isLoading: mutationAddClassroom.isLoading,
      isOpen,
      reset,
    }),
    [control, mutationAddClassroom.isLoading, mutationAddClassroom.mutateAsync, handleIsOpen, handleSubmit, isOpen, reset],
  );

  return values;
};
