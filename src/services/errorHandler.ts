/**
 * Handle axios error response
 * @param {object} responseError axios response error object
 * responseError: {
 *   status: number, // HTTP status code
 *   data : {} data of error
 * }
 */
import { HTTP_RESPONSE_STATUS } from "../configs";
import { ROUTES } from "@/router/constants";
import router from "@/router";
import { showNotification } from "@/utils/functionCommon";

interface ResponseError {
  status: number;
  data: object;
}

export default function errorHandler(responseError: ResponseError) {
  const { status, data } = responseError || {};
  if (status === HTTP_RESPONSE_STATUS.UNAUTHORIZED) {
    router.push(ROUTES.LOGIN.PATH);
  }
  if (status === HTTP_RESPONSE_STATUS.FORBIDDEN) {
    showNotification("Not Permission", "error");
    router.push(ROUTES.LOGIN.PATH);
  }
  if (status === HTTP_RESPONSE_STATUS.SERVER_ERROR) {
    router.push(ROUTES.SERVER_ERROR.PATH);
  }
  if (status === HTTP_RESPONSE_STATUS.NOT_FOUND) {
    router.push(ROUTES.NOT_FOUND.PATH);
  }
  return {
    httpStatusCode: status || HTTP_RESPONSE_STATUS.SERVER_ERROR,
    data,
  };
}
