import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { apiRequest } from "@/lib/api/requests/api.request";
import { useAppContext } from "@/lib/context/app-context";
import { generatePTVALSinglePlan } from "@/lib/prompts/ptval-single-plan";
import { sanitizerJSON } from "@/lib/utils/util";

import { annualPlanFormValues } from "../values/annual-plan-form.values";

export const useAnnualPlanForm = () => {
  const router = useRouter();
  const { educationPlans, setEducationPlans } = useAppContext();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: annualPlanFormValues,
  });

  const handleSubmitAnnualPlan = useMutation({
    mutationFn: async (data: FieldValues) => {
      const response = await apiRequest({
        url: "/api/gemini/generate-content-text",
        method: "POST",
        body: { prompt: generatePTVALSinglePlan(data) },
      });

      return {
        alumno: data,
        etapaEducativa: data["etapa educativa"],
        plan: sanitizerJSON(response),
      };
    },
    onSuccess: (data) => {
      if (data.etapaEducativa === "PTVAL") {
        setEducationPlans((prev) => ({
          ...prev,
          ptval: data,
        }));
        return router.push("/annual-plan-report");
      }
    },
  });

  const values = useMemo(
    () => ({
      control,
      educationPlans,
      handleSubmit,
      handleSubmitAnnualPlan: handleSubmitAnnualPlan.mutateAsync,
      isLoading: handleSubmitAnnualPlan.isLoading,
      reset,
    }),
    [control, educationPlans, handleSubmit, handleSubmitAnnualPlan, reset],
  );

  return values;
};
