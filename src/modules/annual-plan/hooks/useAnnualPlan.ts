import { useMemo } from "react";

import { useAnnualPlanForm } from "./useAnnualPlanForm";
import { useAnnualPlanMutation } from "./useAnnualPlanMutation";

export const useAnnualPlan = () => {
  const annualPlanForm = useAnnualPlanForm();
  const annualPlanMutation = useAnnualPlanMutation();

  const values = useMemo(
    () => ({
      ...annualPlanForm,
      ...annualPlanMutation,
    }),
    [annualPlanForm, annualPlanMutation],
  );

  return values;
};
