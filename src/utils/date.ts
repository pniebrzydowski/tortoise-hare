import dayjs, { OpUnitType } from 'dayjs';

export const DEFAULT_DATE_FORMAT = "MM/DD/YYYY";
export const DEFAULT_DATEPICKER_FORMAT = "MM/dd/yyyy";
export const DEFAULT_DATETIME_FORMAT = `${DEFAULT_DATE_FORMAT} h:mma`;
export const DEFAULT_DATETIMEPICKER_FORMAT = `${DEFAULT_DATEPICKER_FORMAT} h:mma`;

export const getDateValue = (date: Date): number =>
  dayjs(date).startOf("day").valueOf();

export const getToday = (): number => dayjs().startOf("day").valueOf();

export const getFutureDate = (
  value: number = 1,
  unit: OpUnitType = "month"
): number => dayjs().startOf("day").add(value, unit).valueOf();

export const getFutureDateWithTime = (days: number, hours: number): number =>
  dayjs().startOf("day").add(days, "day").add(hours, "hour").valueOf();

export const formatDate = (
  date: number,
  format: string = DEFAULT_DATE_FORMAT
): string => dayjs(date).format(format);

export const formatTime = (timeInSeconds: number): string => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor(timeInSeconds / 60) % 60;
  const seconds = Math.floor(timeInSeconds) % 60;

  const time = [];
  if (hours) {
    time.push(hours < 10 ? `0${hours}` : hours);
  }
  time.push(minutes < 10 ? `0${minutes}` : minutes);
  time.push(seconds < 10 ? `0${seconds}` : seconds);
  return time.join(":");
};
