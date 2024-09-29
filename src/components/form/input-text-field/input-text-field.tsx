import { TextField } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { FormFieldsProps } from "@/utils/types";

const InputTextField = ({
  label,
  placeholder,
  name,
  required = false,
  control,
  isMultiline = false,
  rows,
  ...props
}: FormFieldsProps) => (
  <Controller
    name={name}
    control={control}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <TextField
        className="w-full"
        label={label}
        placeholder={placeholder}
        required={required}
        multiline={isMultiline}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
        {...props}
      />
    )}
  />
);

export default InputTextField;
