import { Dropdown } from "@fluentui/react";
import { Controller } from "react-hook-form";

import { FormDataProps } from "@/lib/utils/types";

const InputDropdown = ({
  name = "",
  label = "",
  control,
  placeholder,
  required,
  options = [],
  isMultiSelect = false,
  ...props
}: FormDataProps) => (
  <Controller
    control={control}
    name={name}
    rules={{ required }}
    render={({ field: { onChange, value } }) => (
      <Dropdown
        label={label}
        className="w-full"
        onChange={(e, option) =>
          !isMultiSelect
            ? onChange(option?.text)
            : option?.selected
            ? onChange([...(Array.isArray(value) ? value : []), option?.text])
            : onChange(
                (Array.isArray(value) ? value : []).filter(
                  (v) => v !== option?.text
                )
              )
        }
        placeholder={placeholder}
        options={options}
        multiSelect={isMultiSelect}
        required
        {...props}
      />
    )}
  />
);

export default InputDropdown;
