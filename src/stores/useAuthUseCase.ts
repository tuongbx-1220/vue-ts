import { defineStore } from "pinia";

import router from "@/router";
import { ROUTES } from "@/router/constants";
import { loginByGoogleService } from "@/services/AuthApi";
import { LoginStorage } from "@/utils/localstorage";
import { showNotification, getMessageError } from "@/utils/functionCommon";

export const useAuthUseCaseStore = defineStore("auth", {
  state: () => ({
    isLoading: false,
    token: "",
    userInfo: {},
  }),
  getters: {},
  actions: {
    async loginByGoogle(res: any) {
      try {
        this.isLoading = true;
        const { userInfo, accessToken } = await loginByGoogleService(
          res?.access_token
        );
        const { avatarPath, email, name, id } = userInfo;
        this.userInfo = userInfo;
        this.token = accessToken;
        LoginStorage.setData({
          accessToken: accessToken,
          avatar: avatarPath,
          email,
          name,
          userId: id,
        });
        this.isLoading = false;
        router.push(ROUTES.SERIES_QUESTIONS.PATH);
      } catch (error: any) {
        const { field, message } = error.data.errors[0];
        showNotification(getMessageError(field, message), "error");
      }
    },
    async logout() {
      try {
        this.token = "";
        this.userInfo = {};
        LoginStorage.clearData();
        router.push(ROUTES.LOGIN.PATH);
      } catch (error: any) {
        const { field, message } = error.data.errors[0];
        showNotification(getMessageError(field, message), "error");
      }
    },
  },
});
