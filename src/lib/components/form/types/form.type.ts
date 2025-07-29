import { FieldValues, UseFormReturn } from "react-hook-form";
import { UseMutateAsyncFunction } from "react-query";

import { IDynamicFormField } from "@/lib/types/type";

export type TFormHandler<T extends FieldValues = FieldValues> = (data: T) => void | Promise<void>;

export interface IForm<T extends FieldValues = FieldValues> extends Pick<UseFormReturn<T>, "control" | "handleSubmit" | "reset"> {
  labelButtonReset?: string;
  labelButtonSubmit: string;
  listFields: IDynamicFormField[];
  onSubmit: UseMutateAsyncFunction<unknown, unknown, T, unknown> | TFormHandler;
  title?: string;
}
