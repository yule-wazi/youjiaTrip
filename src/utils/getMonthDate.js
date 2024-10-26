import dayjs from "dayjs";

export function getMonthDate(date) {
  return dayjs(date).format("MM月DD日")
}

export function getDiffDays(startDay, endDay) {
  return dayjs(endDay).diff(startDay, "day")
}