import axios from "axios";

import { REQUEST_DEFAULT_HEADERS } from "../consts/api.const";

export const axiosClient = axios.create({
  headers: REQUEST_DEFAULT_HEADERS,
});
