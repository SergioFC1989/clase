import { useQuery } from "react-query";

import { apiRequest } from "../requests/api.request";
import { IUseApiRequest } from "../types/api.type";

export const useApiRequest = <T = unknown>({
  body,
  method = "GET",
  queryKey,
  responseType = "json",
  url,
  useQueryOptions,
}: IUseApiRequest<T>) =>
  useQuery<T>({
    enabled: Boolean(url),
    queryKey,
    queryFn: async () => (await apiRequest({ url, body, method, responseType })) as unknown as Promise<T>,
    //Aqui incorporar notificación de error por parte del backend
    // onError: () => {},
    retry: false,
    suspense: true,
    ...(useQueryOptions || {}),
  });
