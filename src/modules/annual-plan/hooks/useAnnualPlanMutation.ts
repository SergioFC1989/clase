import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { FieldValues } from "react-hook-form";
import { useMutation } from "react-query";

import { apiRequest } from "@/lib/api/requests/api.request";
import { useAppContext } from "@/lib/context/app-context";
import { generatePTVALSinglePlan } from "@/lib/prompts/ptval-single-plan";
import { sanitizerJSON } from "@/lib/utils/util";

export const useAnnualPlanMutation = () => {
  const router = useRouter();
  const { educationPlans, setEducationPlans } = useAppContext();

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
        return router.push("/report-ptval");
      }
    },
  });

  const values = useMemo(
    () => ({
      educationPlans,
      handleSubmitAnnualPlan: handleSubmitAnnualPlan.mutateAsync,
      isLoading: handleSubmitAnnualPlan.isLoading,
    }),
    [educationPlans, handleSubmitAnnualPlan.isLoading, handleSubmitAnnualPlan.mutateAsync],
  );

  return values;
};
