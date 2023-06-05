import { LoginStorage } from "@/utils/localstorage";
import Request from "./Request";

const { accessToken } = LoginStorage.getData() || {};
const headersOption = {
  authorization: `Bearer ${accessToken}`,
};

export async function loginByGoogleService(token: string): Promise<any> {
  return Request.post({
    url: "auth/token",
    data: {
      token,
    },
    headers: headersOption,
  });
}
