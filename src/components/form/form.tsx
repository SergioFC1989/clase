import { Control, FieldValues } from "react-hook-form";

import InputDropdown from "./input-dropdown/input-dropdown";
import InputSlider from "./input-slider/input-slider";
import InputTextField from "./input-text-field/input-text-field";

import { groupByCol } from "@/utils/functions";
import { FormDataProps } from "@/utils/types";
import { DefaultButton, PrimaryButton } from "@fluentui/react";

interface FormProps {
  handleSubmit: (
    callback: (data: FieldValues) => void
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: (data: FieldValues) => Promise<void>;
  reset: () => void;
  control: Control<FieldValues>;
  data: FormDataProps[];
  labelButtonSubmit: string;
  labelButtonReset: string;
}

const Form = ({
  handleSubmit,
  onSubmit,
  reset,
  control,
  data = [],
  labelButtonSubmit,
  labelButtonReset,
}: FormProps) => {
  const groupedFields: { [key: string]: FormDataProps[] } = groupByCol(data);

  return (
    <form
      className="w-full flex flex-col gap-4"
      onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
      onSubmit={handleSubmit(onSubmit)}
      onReset={() => reset()}
    >
      {Object.keys(groupedFields).map((col) => (
        <div key={col} className="w-full flex flex-col s:flex-row gap-2">
          {groupedFields[col].map((field) => (
            <div className="w-full flex flex-col s:flex-row" key={field.name}>
              {field.type === "text" && (
                <InputTextField
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
                <InputSlider
                  label={field.label}
                  name={field.name}
                  control={control}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                />
              )}
              {field.type === "dropdown" && (
                <InputDropdown
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
      <div className="w-full flex gap-4 justify-center">
        <PrimaryButton
          className="my-4 w-3/4 lg:w-2/4 items-center"
          text={labelButtonSubmit}
          type="submit"
        />
        <DefaultButton
          className="my-4 w-3/4 lg:w-2/4 items-center"
          text={labelButtonReset}
          type="reset"
        />
      </div>
    </form>
  );
};

export default Form;
