import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { apiRequest } from "@/lib/services/requests/api.request";

import { IAddEducationalCenterValue } from "../types/add-educational-center.type";
import { addEducationalCenterValue } from "../values/add-educational-center.value";

export const useAddEducationalCenter = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: addEducationalCenterValue,
  });

  const { closeBackdrop, openBackdrop } = useBackdrop();

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const mutationAddEducationlCenter = useMutation({
    mutationFn: async (body: IAddEducationalCenterValue) => {
      openBackdrop();
      const response = await apiRequest({
        body,
        method: "POST",
        url: "/api/db/educational-center/insert",
      });

      console.log(response);
    },
    onSuccess: () => {
      reset();
      handleIsOpen(false);
      closeBackdrop();
    },
    onError: (error) => {
      console.error(error);
      closeBackdrop();
    },
  });

  const values = useMemo(
    () => ({
      control,
      handleAddEducationlCenterForm: mutationAddEducationlCenter.mutateAsync,
      handleIsOpen,
      handleSubmit,
      isLoading: mutationAddEducationlCenter.isLoading,
      isOpen,
      reset,
    }),
    [control, mutationAddEducationlCenter.isLoading, mutationAddEducationlCenter.mutateAsync, handleIsOpen, handleSubmit, isOpen, reset],
  );

  return values;
};
