import { TextField } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { FormDataProps } from "@/utils/types";

const InputTextField = ({
  label,
  placeholder,
  name,
  required = false,
  control,
  isMultiline = false,
  rows,
  ...props
}: FormDataProps) => (
  <Controller
    name={name}
    control={control}
    rules={{ required }} // Reglas de validación
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
