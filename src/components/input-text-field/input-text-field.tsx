import { TextField } from "@fluentui/react";

import { FormDataProps } from "@/lib/utils/types";

const InputTextField = ({
  label,
  placeholder,
  name,
  required = false,
  register,
  isMultiline = false,
  rows,
  ...props
}: FormDataProps) => (
  <TextField
    className="w-full"
    label={label}
    placeholder={placeholder}
    required={required}
    multiline={isMultiline}
    rows={rows}
    {...(register && name ? register(name, { required }) : {})}
    {...props}
  />
);

export default InputTextField;
