import dayjs from "dayjs";

export function getMonthDate(date, fromatStr = "MM月DD日") {
  return dayjs(date).format(fromatStr)
}

export function getDiffDays(startDay, endDay) {
  return dayjs(endDay).diff(startDay, "day")
}