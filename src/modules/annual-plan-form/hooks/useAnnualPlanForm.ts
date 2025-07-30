import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { useAppContext } from "@/lib/context/app-context";
import { generatePTVALSinglePlan } from "@/lib/prompts/ptval-single-plan";
import { apiRequest } from "@/lib/services/requests/api.request";
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
        url: "/api/google-gemini-ai/get-single",
        method: "POST",
        body: { prompt: generatePTVALSinglePlan(data) },
      });

      return {
        alumno: data,
        etapaEducativa: data["etapa educativa"],
        plan: sanitizerJSON(response.data as string),
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
