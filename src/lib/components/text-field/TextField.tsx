import { TextField as FTextField } from "@fluentui/react";
import { Controller, FieldValues, Path } from "react-hook-form";

import { IDynamicFormField } from "@/lib/types/type";

const TextField = <T extends FieldValues = FieldValues>({
  label,
  placeholder,
  name,
  required = false,
  control,
  isMultiline = false,
  rows,
  ...props
}: IDynamicFormField<T>) => (
  <Controller
    name={name as Path<T>}
    control={control}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <FTextField
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

export default TextField;
