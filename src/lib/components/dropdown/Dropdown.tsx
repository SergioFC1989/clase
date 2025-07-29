import { Dropdown as FDropdown } from "@fluentui/react";
import { Controller, FieldValues, Path } from "react-hook-form";

import { IDynamicFormField } from "@/lib/types/type";

const Dropdown = <T extends FieldValues = FieldValues>({
  name = "",
  label = "",
  control,
  placeholder,
  required = false,
  options = [],
  isMultiSelect = false,
  ...props
}: IDynamicFormField<T>) => (
  <Controller
    control={control}
    name={name as Path<T>}
    rules={{ required }}
    render={({ field: { onChange, onBlur, value } }) => (
      <FDropdown
        label={label}
        className="w-full"
        onBlur={onBlur}
        onChange={(_, option) =>
          !isMultiSelect ? onChange(option?.key)
          : option?.selected ? onChange([...(Array.isArray(value) ? value : []), option?.text])
          : onChange((Array.isArray(value) ? value : []).filter((v) => v !== option?.text))
        }
        selectedKey={!isMultiSelect ? value : undefined}
        selectedKeys={isMultiSelect ? value : undefined}
        placeholder={placeholder}
        options={options}
        multiSelect={isMultiSelect}
        required={required}
        {...props}
      />
    )}
  />
);

export default Dropdown;
