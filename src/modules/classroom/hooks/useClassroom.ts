import { useMemo, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useRecoilValue } from "recoil";

import { useBackdrop } from "@/lib/components/backdrop/hooks/useBackdrop";
import { useMessageBar } from "@/lib/components/message-bar/hooks/useMessageBar";
import { queryClient } from "@/lib/services/clients/query.client";
import { apiRequest } from "@/lib/services/requests/api.request";
import { userIdState } from "@/lib/states/user-id-state";
import { IClassroomValue } from "@/modules/classroom/types/classroom.type";
import { IEducationalCenterValue } from "@/modules/educational-center/types/educational-center.type";

const getAllUrl = "/api/db/classroom/get-all";

export const useClassroom = (educationalCenterId: string) => {
  const [visibleBubbleId, setVisibleBubbleId] = useState<string | null>(null);

  const { closeBackdrop, openBackdrop } = useBackdrop();
  const { openMessageBar } = useMessageBar();

  const userId = {
    usuarioId: useRecoilValue(userIdState),
  };

  const _body = {
    ...userId,
    centroEducativoId: educationalCenterId,
  };

  const queryKey = ["classroom-get-all", _body];

  const { data: response } = useQuery({
    enabled: Boolean(getAllUrl),
    onError: () => {
      openMessageBar("Ha ocurrido un error al obtener las Aulas", "error");
      closeBackdrop();
    },
    onSuccess: () => {
      closeBackdrop();
    },
    queryFn: async () => {
      openBackdrop();
      const response = await apiRequest<IClassroomValue[]>({
        body: _body,
        method: "POST",
        url: getAllUrl,
      });

      return response;
    },
    queryKey,
  });

  const { data: educationalCenterData } = useQuery({
    enabled: Boolean("/api/db/educational-center/get-all"),
    onError: () => {
      openMessageBar("Ha ocurrido un error al obtener los Centros Educativos", "error");
      closeBackdrop();
    },
    onSuccess: () => {
      closeBackdrop();
    },
    queryFn: async () => {
      openBackdrop();

      const response = await apiRequest<IEducationalCenterValue>({
        body: { ...userId, _id: _body.centroEducativoId },
        method: "POST",
        url: "/api/db/educational-center/get-single",
      });

      return response;
    },
    queryKey: ["educational-center-get-single", userId],
  });

  const mutationDeleteEducationalCenter = useMutation({
    mutationFn: async (_id: string) => {
      openBackdrop();
      const response = await apiRequest({
        method: "DELETE",
        url: `/api/db/classroom/delete-single`,
        body: { _id, ..._body },
      });

      queryClient.invalidateQueries(queryKey);
      openMessageBar("Aula eliminada correctamente", "success");

      return response;
    },
    onError: () => {
      openMessageBar("Ha ocurrido un error al eliminar el Aula", "error");
      closeBackdrop();
    },
    onSuccess: () => {
      closeBackdrop();
    },
  });

  const values = useMemo(
    () => ({
      data: response?.data,
      educationalCenterData,
      handleDeleteEducationalCenter: mutationDeleteEducationalCenter.mutateAsync,
      setVisibleBubbleId,
      visibleBubbleId,
    }),
    [educationalCenterData, mutationDeleteEducationalCenter.mutateAsync, response?.data, visibleBubbleId],
  );

  return values;
};
