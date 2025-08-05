import { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useRecoilValue } from "recoil";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { queryClient } from "@/lib/services/clients/query.client";
import { apiRequest } from "@/lib/services/requests/api.request";
import { userIdState } from "@/lib/states/user-id-state";

import { IEducationalCenterValue } from "../types/educational-center.type";

const getAllUrl = "/api/db/educational-center/get-all";

export const useEducationalCenter = () => {
  const [visibleBubbleId, setVisibleBubbleId] = useState<string | null>(null);

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();

  const userId = {
    usuarioId: useRecoilValue(userIdState),
  };

  const queryKey = ["educational-center-get-all", userId];

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
        body: userId,
        method: "POST",
        url: getAllUrl,
      });

      return response;
    },
    queryKey,
  });

  const mutationDeleteEducationalCenter = useMutation({
    mutationFn: async (_id: string) => {
      openBackdrop();
      await apiRequest({
        method: "DELETE",
        url: `/api/db/educational-center/delete-single`,
        body: { ...userId, _id },
      });

      await apiRequest({
        method: "DELETE",
        url: `/api/db/classroom/delete-all`,
        body: { ...userId, centroEducativoId: _id },
      });

      queryClient.invalidateQueries(queryKey);
      return openMessageBar("Centro Educativo eliminado correctamente", "success");
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
      setVisibleBubbleId,
      visibleBubbleId,
    }),
    [mutationDeleteEducationalCenter.mutateAsync, response?.data, visibleBubbleId],
  );

  return values;
};
