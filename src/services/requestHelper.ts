import axios from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

import type { RequestType } from "./Request";
const API_URL = import.meta.env.VITE_VUE_APP_API_URL;

axios.defaults.baseURL = API_URL;

export default async function requestHelper<T>(
  req: RequestType,
  isReturnAllResponse?: boolean
): Promise<T> {
  const { options, method } = req;
  // @ts-ignore
  return axios({
    ...options,
    data: options?.data,
    params: decamelizeKeys(options?.params),
    method,
    headers: {
      ...options.headers,
    },
  }).then((response) => {
    if (isReturnAllResponse) return Promise.resolve(camelizeKeys(response));
    return Promise.resolve(camelizeKeys(response.data));
  });
}
