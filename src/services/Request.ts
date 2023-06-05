import { camelizeKeys } from "humps";
import errorHandler from "./errorHandler";
import requestHelper from "./requestHelper";

interface Options {
  url: string;
  data?: object;
  params?: object;
  headers?: object;
}

export interface RequestType {
  method: string;
  options: Options;
}

function request<T>(options: RequestType, isReturnAllResponse?: boolean) {
  return requestHelper<T>(options, isReturnAllResponse).catch((error) => {
    // @ts-ignore
    const err = errorHandler(camelizeKeys(error.response));
    return Promise.reject(err);
  });
}

const Request = {
  get<T>(options: Options, isReturnAllResponse?: boolean) {
    const { params, ...restOptions } = options;
    return request<T>(
      { method: "GET", options: { ...restOptions, params } },
      isReturnAllResponse
    );
  },

  post<T>(options: Options, isReturnAllResponse?: boolean) {
    return request<T>({ method: "POST", options }, isReturnAllResponse);
  },

  put<T>(options: Options, isReturnAllResponse?: boolean) {
    return request<T>({ method: "PUT", options }, isReturnAllResponse);
  },

  patch<T>(options: Options, isReturnAllResponse?: boolean) {
    return request<T>({ method: "PATCH", options }, isReturnAllResponse);
  },

  delete<T>(options: Options, isReturnAllResponse?: boolean) {
    return request<T>({ method: "DELETE", options }, isReturnAllResponse);
  },
};

export default Request;
