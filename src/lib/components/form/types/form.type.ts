import { FieldValues, UseFormReturn } from "react-hook-form";
import { UseMutateAsyncFunction } from "react-query";

import { IDynamicFormField } from "@/lib/types/type";

export interface IForm extends Pick<UseFormReturn, "control" | "handleSubmit" | "reset"> {
  labelButtonReset: string;
  labelButtonSubmit: string;
  listFields: IDynamicFormField[];
  onSubmit: UseMutateAsyncFunction<unknown, unknown, FieldValues, unknown>;
  _onSubmit?: (data: FieldValues) => void | Promise<void>;
  title?: string;
}
