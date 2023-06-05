import { useToast } from "vue-toastification";
import _debounce from "lodash/debounce";
import toString from "lodash/toString";

import { TYPE_NOTIFIES } from "./constants";

export const showNotification = (message: string, type: string) => {
  const notify = useToast();
  if (type === TYPE_NOTIFIES.SUCCESS) {
    return notify.success(message);
  } else if (type === TYPE_NOTIFIES.ERROR) {
    return notify.error(message);
  }
};

export const debounceFunction = _debounce((func: Function) => {
  func();
}, 300);

export const compareObject = (obj1: any, obj2: any) => {
  if (!obj1 || !obj2) {
    return false;
  }

  if (Object.keys(obj2).length != Object.keys(obj1).length) {
    return false;
  }
  //
  const matchVal: any = {};
  Object.keys(obj2).forEach((i) => {
    if (obj2[i] !== obj1[i]) {
      matchVal[i] = obj2[i];
    }
  });

  return matchVal;
};

export const compareValue = (val1: any, val2: any) =>
  toString(val1) === toString(val2);

export const getMessageError = (field: string, message: string) =>
  `${field} - ${message}`;
