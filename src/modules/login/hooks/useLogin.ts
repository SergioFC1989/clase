"use client";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { useExpiringLocalStorage } from "@/lib/hooks/useExpiringLocalStorage";
import { apiRequest } from "@/lib/services/requests/api.request";
import { IUsers } from "@/lib/types/type";

import { ILoginValue } from "../types/login.type";
import { loginValue } from "../values/login.value";

export const useLogin = () => {
  const router = useRouter();
  const { control, handleSubmit, reset } = useForm<ILoginValue>({
    defaultValues: loginValue,
  });

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();
  const { set } = useExpiringLocalStorage("userId");

  const mutationLogin = useMutation({
    mutationFn: async (body: ILoginValue) => {
      openBackdrop();

      const response = await apiRequest<IUsers>({
        body,
        method: "POST",
        url: "/api/db/users/get-single",
      });

      const { data } = response;

      if (response.message === "Usuario encontrado correctamente") {
        openMessageBar("Login correcto", "success");
        set(data?._id, 24 * 60 * 60 * 1000); // Save _id in localstorage 24h
        return router.push("/");
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
