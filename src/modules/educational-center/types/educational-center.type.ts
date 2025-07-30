import { UseMutateAsyncFunction } from "react-query";

import { IApiRequestResponse } from "@/lib/services/types/api.type";
import { IAddEducationalCenterValue } from "@/modules/add-educational-center/types/add-educational-center.type";

export interface IEducationalCenterValue extends IAddEducationalCenterValue {
  _id: string;
}

export interface IEducationalCenter {
  data?: IEducationalCenterValue[];
  onDeleteEducationalCenter: UseMutateAsyncFunction<IApiRequestResponse<unknown>, unknown, string, unknown>;
}
