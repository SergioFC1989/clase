import { IDropdownOption } from "@fluentui/react";
import { FieldValues, UseFormReturn } from "react-hook-form";

import { IAnnualPlanFormValues } from "@/modules/annual-plan-form/types/annual-plan-form.type";
import { TScopeSummary } from "@/modules/annual-plan-report/components/summary-data/types/summary-data.type";

export type ReportStudentProps = {
  alumno: IAnnualPlanFormValues;
  etapaEducativa: string;
  plan: TScopeSummary[];
};

export type ResponseAnnualPlanProps = {
  ptval: ReportStudentProps | null;
};

export interface IDynamicFormField<T extends FieldValues = FieldValues> extends Partial<Pick<UseFormReturn<T>, "control" | "register">> {
  col?: number;
  isMultiSelect?: boolean;
  isMultiline?: boolean;
  label?: string;
  max?: number;
  min?: number;
  name: string;
  options?: IDropdownOption[];
  placeholder?: string;
  required?: boolean;
  rows?: number;
  step?: number;
  type?: "text" | "dropdown" | "slider";
}
