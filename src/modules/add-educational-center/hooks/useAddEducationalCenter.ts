import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { IAddEducationalCenterValue } from "../types/add-educational-center.type";
import { addEducationalCenterValue } from "../values/add-educational-center.value";

export const useAddEducationalCenter = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: addEducationalCenterValue,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  const mutationAddEducationlCenter = useMutation({
    mutationFn: async (data: IAddEducationalCenterValue) => {
      // Simulate an API call to add the educational center
      console.log("Adding educational center:", data);
      return { localidad: "El Puerto de Santa María", nombre: "Centro Educativo Ejemplo" };
    },
    onSuccess: () => {
      reset();
      handleIsOpen(false);
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
