export const removeBlankAttribute = (data: Object): any => {
  const copyObject = { ...data };
  return Object.entries(copyObject).reduce(
    // @ts-ignore
    (a, [k, v]) => (typeof v === "string" && v === "" ? a : ((a[k] = v), a)),
    {}
  );
};

export const trimObject = (obj: Object): Object => {
  return Object.keys(obj).reduce((acc, curr) => {
    // @ts-ignore
    acc[curr] = typeof obj[curr] === "string" ? obj[curr].trim() : obj[curr];
    return acc;
  }, {});
};

export const formatObject = (obj: Object): any => {
  const objectTrim = trimObject(obj);

  return removeBlankAttribute(objectTrim);
};
