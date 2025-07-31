import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { ILoginValue } from "../types/login.type";
import { loginValue } from "../values/login.value";

export const useLogin = () => {
  const { control, handleSubmit, reset } = useForm<ILoginValue>({
    defaultValues: loginValue,
  });

  const values = useMemo(() => ({ control, handleSubmit, reset }), [control, handleSubmit, reset]);

  return values;
};
