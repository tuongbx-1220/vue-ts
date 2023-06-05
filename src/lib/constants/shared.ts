export const REGEX_EMAIL =
  /^[\w.+-]{1,64}@[a-z\d](?:[a-z\d-]{0,253}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,253}[a-z\d])?)+$/;
export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const PHONE_NUMBER_REGEX = /^[0-9]*$/;

export const FORMAT_DATE = "dd-MM-yyyy";
export const OTHER_FORMAT_DATE = "yyyy-MM-dd";
export const FORMAT_DATE_TIME = "yyyy-MM-dd HH:mm:ss";

export const PER_PAGE = 10;
