import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { annualPlanValues } from "../values/annual-plan.values";

export const useAnnualPlanForm = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: annualPlanValues,
  });

  const values = useMemo(
    () => ({
      handleSubmit,
      control,
      reset,
    }),
    [handleSubmit, control, reset],
  );

  return values;
};
