import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

import { apiRequest } from "@/lib/api/requests/api.request";
import { useAppContext } from "@/lib/context/app-context";
import { generatePTVALSinglePlan } from "@/lib/prompts/ptval-single-plan";
import { sanitizerJSON } from "@/lib/utils/util";
import { AnnualPlanDefaultValues } from "@/modules/annual-form-plan/data";

export const useAnnualPlan = () => {
  const router = useRouter();
  const { content, setContent } = useAppContext();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: AnnualPlanDefaultValues,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (data: FieldValues) => {
      setIsLoading(true);
      try {
        const response = await apiRequest({
          url: "/api/gemini/generate-content-text",
          method: "POST",
          body: { prompt: generatePTVALSinglePlan(data) },
        });

        const serializedResponse = {
          alumno: data,
          plan: sanitizerJSON(response),
        };

        //Refactorizar mas adelante con las demas etapas educativas
        if (data["etapa educativa"] === "PTVAL") {
          setContent((prev) => ({
            ...prev,
            ptval: serializedResponse,
          }));
          return router.push("/report-ptval");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [router, setContent],
  );

  const values = useMemo(
    () => ({
      handleSubmit,
      control,
      reset,
      onSubmit,
      content,
      isLoading,
    }),
    [content, control, handleSubmit, isLoading, onSubmit, reset],
  );

  return values;
};
