import { IDropdownOption } from "@fluentui/react";
import { UseFormReturn } from "react-hook-form";

import { IAnnualPlanValues } from "@/modules/annual-plan/types/annual-plan.type";

export type PlanDataProps = {
  ambito: string;
  horas: string;
  contenidos: string;
  actividades: {
    nombre: string;
    descripcion: string;
    evaluacion: string;
  }[];
};

export type ReportStudentProps = {
  alumno: IAnnualPlanValues;
  etapaEducativa: string;
  plan: PlanDataProps[];
};

export type ResponseAnnualPlanProps = {
  ptval: ReportStudentProps | null;
};

export interface IDynamicFormField extends Partial<Pick<UseFormReturn, "control" | "register">> {
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
