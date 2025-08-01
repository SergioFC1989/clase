import { MessageBarType } from "@fluentui/react";
import { AxiosRequestConfig, Method } from "axios";
import { UseQueryOptions } from "react-query";

interface IPagination {
  pageNumber: number;
  pageSize: number;
}

export interface IApiRequest {
  body?: AxiosRequestConfig["data"];
  method?: Method;
  responseType?: "json" | "text";
  url: string;
}

export interface IUseApiRequest<T = unknown> extends IApiRequest {
  queryKey: string[];
  useQueryOptions?: UseQueryOptions<T>;
}

export interface IRequestDefaultParams<T = unknown> extends AxiosRequestConfig, IPagination {
  data?: T[];
}

export interface IPaginatedResponseDefault<T = unknown> extends IPagination {
  $id: string;
  data: T | T[];
  pageCount: number;
  totalCount: number;
}

export interface IApiRequestResponse<T = unknown> {
  data?: T;
  error?: unknown;
  message: string;
  type: keyof typeof MessageBarType;
}
