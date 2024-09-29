import { useCallback, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { generateAnnualPlan } from "@/prompts/generate-ptval-plan";
import { apiRequest } from "@/services/api";
import { AnnualPlanDefaultValues } from "../views/annual-plan-form/data";

export const useAnnualPlan = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: AnnualPlanDefaultValues,
  });

  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeContent = (value: string) => {
    setContent(value);
  };

  const onSubmit = useCallback(
    async (data: FieldValues) => {
      setIsLoading(true);
      try {
        const response = await apiRequest(
          "/api/gemini/generate-content-text",
          "POST",
          {
            prompt: generateAnnualPlan(data),
          }
        );

        setContent(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [setContent, setIsLoading]
  );

  const values = useMemo(
    () => ({
      handleSubmit,
      control,
      reset,
      onSubmit,
      content,
      onChangeContent,
      isLoading,
    }),
    [content, control, handleSubmit, isLoading, onSubmit, reset]
  );

  return values;
};
