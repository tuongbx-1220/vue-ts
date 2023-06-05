const AUTH_KEY = "CEV_PORTAL_AUTH";

export const LoginStorage = {
  getData() {
    const localStorageData = JSON.parse(
      localStorage.getItem(AUTH_KEY) || "null"
    );
    if (!localStorageData) return null;
    return localStorageData;
  },
  setData(res: any) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(res));
  },
  clearData() {
    localStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(AUTH_KEY);
  },
};
