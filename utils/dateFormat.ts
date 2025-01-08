import dayjs from "dayjs";

export const formatDate = (date: string | Date, format: string): string => {
  return dayjs(date).format(format);
};

// Commonly used date formats
export const DATE_FORMATS = {
  FULL_DATE: "MMMM DD, YYYY", // e.g., January 05, 2024
  SHORT_DATE: "MMM DD, YYYY", // e.g., Jan 05, 2024
  DAY_DATE: "dddd, MMMM DD, YYYY", // e.g., Friday, January 05, 2024
  TIME_ONLY: "HH:mm:ss", // e.g., 14:30:00
  DATE_TIME: "MMMM DD, YYYY HH:mm", // e.g., January 05, 2024 14:30
};