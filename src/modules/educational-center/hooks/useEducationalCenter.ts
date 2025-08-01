import { useMemo } from "react";
import { useMutation, useQuery } from "react-query";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { queryClient } from "@/lib/services/clients/query.client";
import { apiRequest } from "@/lib/services/requests/api.request";

import { IEducationalCenterValue } from "../types/educational-center.type";

const getAllUrl = "/api/db/educational-center/get-all";

export const useEducationalCenter = () => {
  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();

  const { data: response } = useQuery({
    enabled: Boolean(getAllUrl),
    onError: () => {
      openMessageBar("Ha ocurrido un error al obtener los Centros Educativos", "error");
      closeBackdrop();
    },
    onSuccess: () => {
      closeBackdrop();
    },
    queryFn: async () => {
      openBackdrop();
      const response = await apiRequest<IEducationalCenterValue[]>({
        url: getAllUrl,
      });

      return response;
    },
    queryKey: ["educational-center-get-all"],
  });

  const mutationDeleteEducationalCenter = useMutation({
    mutationFn: async (_id: string) => {
      openBackdrop();
      const response = await apiRequest({
        method: "DELETE",
        url: `/api/db/educational-center/delete-single`,
        body: { _id },
      });

      queryClient.invalidateQueries(["educational-center-get-all"]);
      openMessageBar("Centro Educativo eliminado correctamente", "success");

      return response;
    },
    onError: () => {
      openMessageBar("Ha ocurrido un error al eliminar el Centro Educativo", "error");
      closeBackdrop();
    },
    onSuccess: () => {
      closeBackdrop();
    },
  });

  const values = useMemo(
    () => ({
      data: response?.data,
      handleDeleteEducationalCenter: mutationDeleteEducationalCenter.mutateAsync,
    }),
    [mutationDeleteEducationalCenter.mutateAsync, response?.data],
  );

  return values;
};
