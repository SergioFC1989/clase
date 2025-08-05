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
  type?: "dropdown" | "password" | "slider" | "text" | "number";
}

export interface IUsers {
  clave: string;
  email: string;
  nombre: string;
  _id: string;
}

// nuevo tipado desde aqui
export type TEducationalStage =
  | "Educación Infantil"
  | "Educación Primaria"
  | "Educación Secundaria"
  | "Educación Post Obligatoria"
  | "PTVAL"
  | "";

export type TEducationalModality =
  | "A: Aula ordinaria"
  | "B: Aula ordinaria con apoyo variable"
  | "C: Aula específica dentro de un centro ordinario"
  | "D: Centro específico de educación especial"
  | "";
