import { DefaultButton, PrimaryButton } from "@fluentui/react";
import { FieldValues } from "react-hook-form";

import { IDynamicFormField } from "@/lib/types/type";

import Dropdown from "../dropdown/Dropdown";
import Slider from "../slider/Slider";
import TextField from "../text-field/TextField";
import TitleNav from "../title-nav/TitleNav";
import { IForm, TFormHandler } from "./types/form.type";
import { groupByColForm } from "./utils/form.util";

const Form = <T extends FieldValues>({
  title,
  handleSubmit,
  onSubmit,
  reset,
  control,
  listFields = [],
  labelButtonSubmit,
  labelButtonReset,
}: IForm<T>) => {
  const groupedFields: { [key: string]: IDynamicFormField[] } = groupByColForm(listFields);

  return (
    <>
      {title && <TitleNav title={title} />}
      <form
        className="w-full flex flex-col gap-4 items-end"
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        onSubmit={handleSubmit((onSubmit as unknown as TFormHandler<T>) || (() => {}))}
        onReset={() => reset && reset()}
      >
        {Object.keys(groupedFields).map((col) => (
          <div key={col} className="w-full flex flex-col items-center s:flex-row gap-2 s:gap-6">
            {groupedFields[col].map((field) => (
              <div className="w-full flex flex-col s:flex-row" key={field.name}>
                {field.type === "text" && (
                  <TextField<T>
                    label={field.label}
                    placeholder={field.placeholder}
                    name={field.name}
                    control={control}
                    required={field.required}
                    rows={field.rows}
                    isMultiline={field.isMultiline}
                  />
                )}
                {field.type === "slider" && (
                  <Slider<T> label={field.label} name={field.name} control={control} min={field.min} max={field.max} step={field.step} />
                )}
                {field.type === "dropdown" && (
                  <Dropdown<T>
                    label={field.label}
                    name={field.name}
                    control={control}
                    placeholder={field.placeholder}
                    required={field.required}
                    options={field.options}
                    isMultiSelect={field.isMultiSelect}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="xl:w-[25%] flex justify-center content-end gap-2">
          <PrimaryButton className="my-4 w-3/4 xl:w-2/4 items-center" text={labelButtonSubmit} type="submit" />
          {typeof reset === "function" && (
            <DefaultButton className="my-4 w-3/4 xl:w-2/4 items-center" text={labelButtonReset ?? "Limpiar"} type="reset" />
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
