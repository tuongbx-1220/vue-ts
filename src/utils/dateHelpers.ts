import {
  format as formatFsn,
  isValid,
  parse,
  parseISO,
  isDate,
  format,
} from "date-fns";

import { FORMAT_DATE, OTHER_FORMAT_DATE } from "@/lib/constants/shared";

export function formatDate(
  date: string | Date,
  otherFormat: boolean = false
): string {
  const formatDate = otherFormat ? OTHER_FORMAT_DATE : FORMAT_DATE;
  if (date instanceof Date) return formatFsn(date, formatDate);
  const newDate = parseISO(date);

  if (!isValid(newDate)) return "";

  return formatFsn(newDate, formatDate);
}

export function formatDateTime(date: string, pattern: string): string {
  try {
    return format(parseISO(date), pattern);
  } catch (e) {
    console.error(e);
  }
  return "";
}

export const parseDateString = (value: string, originalValue: string) => {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
};
