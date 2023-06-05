export const ROUTES: any = {
  LOGIN: {
    NAME: "Login",
    TITLE: "Login",
    PATH: "/login",
  },
  NOT_FOUND: {
    NAME: "not-found",
    TITLE: "not-found",
    PATH: "/not-found",
  },
  SERVER_ERROR: {
    NAME: "",
    TITLE: "",
    PATH: "/server-error",
  },
} as const;

export const USAGE_LIST: string[] = [
  ROUTES.LOGIN.PATH,
  ROUTES.NOT_FOUND.PATH,
  ROUTES.SERVER_ERROR.PATH,
];
