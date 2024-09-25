import { Slider } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { FormDataProps } from "@/lib/utils/types";

const InputSlider = ({
  label,
  name = "",
  required = false,
  control,
  min,
  max,
  step,
  ...props
}: FormDataProps) => (
  <Controller
    control={control}
    name={name}
    rules={{ required }}
    render={({ field: { onChange } }) => (
      <Slider
        className="w-full"
        label={label}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        {...props}
      />
    )}
  />
);

export default InputSlider;
