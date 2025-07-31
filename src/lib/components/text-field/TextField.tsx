import { TextField as FTextField } from "@fluentui/react";
import { Controller, FieldValues, Path } from "react-hook-form";

import { IDynamicFormField } from "@/lib/types/type";

const TextField = <T extends FieldValues = FieldValues>({
  control,
  isMultiline = false,
  label,
  name,
  placeholder,
  required = false,
  rows,
  type,
  ...props
}: IDynamicFormField<T>) => (
  <Controller
    name={name as Path<T>}
    control={control}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <FTextField
        canRevealPassword={type === "password" ? true : undefined}
        className="w-full"
        label={label}
        multiline={isMultiline}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        revealPasswordAriaLabel={type === "password" ? "Mostrar contraseña" : undefined}
        rows={rows}
        type={type}
        value={value || ""}
        {...props}
      />
    )}
  />
);

export default TextField;
