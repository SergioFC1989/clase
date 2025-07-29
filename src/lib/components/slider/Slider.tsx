import { Slider as FSlider } from "@fluentui/react";
import { Controller, FieldValues, Path } from "react-hook-form";

import { IDynamicFormField } from "@/lib/types/type";

const Slider = <T extends FieldValues = FieldValues>({
  label,
  name = "",
  required = false,
  control,
  min,
  max,
  step,
  ...props
}: IDynamicFormField<T>) => (
  <Controller
    control={control}
    name={name as Path<T>}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <FSlider
        className="w-full"
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value || min}
        min={min}
        max={max}
        step={step}
        {...props}
      />
    )}
  />
);

export default Slider;
