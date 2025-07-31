import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { apiRequest } from "@/lib/services/requests/api.request";

import { ILoginValue } from "../types/login.type";
import { loginValue } from "../values/login.value";

export const useLogin = () => {
  const { control, handleSubmit, reset } = useForm<ILoginValue>({
    defaultValues: loginValue,
  });

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();

  const mutationLogin = useMutation({
    mutationFn: async (body: ILoginValue) => {
      openBackdrop();

      const response = await apiRequest({
        body,
        method: "POST",
        url: "/api/db/users/get-single",
      });

      if (response.message === "Usuario encontrado correctamente") {
        openMessageBar("Login correcto", "success");
      } else {
        openMessageBar("El email o contraseña son incorrectos. Por favor, inténtelo de nuevo", "error");
      }
    },
    onSuccess: () => {
      reset();
      closeBackdrop();
    },
    onError: () => {
      openMessageBar("Ha ocurrido un error al Iniciar Sesión", "error");
      closeBackdrop();
    },
  });

  const values = useMemo(
    () => ({ control, handleLogin: mutationLogin.mutateAsync, handleSubmit, reset }),
    [control, handleSubmit, mutationLogin.mutateAsync, reset],
  );

  return values;
};
