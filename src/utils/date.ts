import dayjs, { OpUnitType } from "dayjs";

const DATABASE_DATE_FORMAT = "YYYY-MM-DD";
const DATABASE_TIME_FORMAT = "HH:mm:ss";
const DATABASE_DATETIME_FORMAT = `${DATABASE_DATE_FORMAT} ${DATABASE_TIME_FORMAT}`;

export const DEFAULT_DATE_FORMAT = "MM/DD/YYYY";
export const DEFAULT_DATEPICKER_FORMAT = "MM/dd/yyyy";
export const DEFAULT_TIME_FORMAT = "h:mma";
export const DEFAULT_DATETIME_FORMAT = `${DEFAULT_DATE_FORMAT} ${DEFAULT_TIME_FORMAT}`;
export const DEFAULT_DATETIMEPICKER_FORMAT = `${DEFAULT_DATEPICKER_FORMAT} ${DEFAULT_TIME_FORMAT}`;

export const getDateObject = (date: string): Date =>
  new Date(dayjs(date).valueOf());

export const getDateString = (date: Date): string =>
  dayjs(date).startOf("day").format(DATABASE_DATE_FORMAT);

export const getDateTimeString = (date: Date): string =>
  dayjs(date).format(DATABASE_DATETIME_FORMAT);

export const getToday = (): string =>
  dayjs().startOf("day").format(DATABASE_DATE_FORMAT);

export const getDateValue = (date: string): number => dayjs(date).valueOf();

export const isDateInFuture = (date: string): boolean => dayjs(date) > dayjs();

export const sortByDate = (a: string, b: string): number =>
  dayjs(a).valueOf() - dayjs(b).valueOf();

export const getPastDate = (
  value: number = 1,
  unit: OpUnitType = "month"
): string =>
  dayjs().startOf("day").subtract(value, unit).format(DATABASE_DATE_FORMAT);

export const getFutureDate = (
  value: number = 1,
  unit: OpUnitType = "month"
): string =>
  dayjs().startOf("day").add(value, unit).format(DATABASE_DATE_FORMAT);

export const getFutureDateWithTime = (days: number, hours: number): string =>
  dayjs()
    .startOf("day")
    .add(days, "day")
    .add(hours, "hour")
    .format(DATABASE_DATETIME_FORMAT);

export const formattedDateWithTime = (
  date: string,
  format: string = DEFAULT_DATETIME_FORMAT
): string => dayjs(date).format(format);

export const formatDate = (
  date: string,
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

export const timeStringToSeconds = (value: string): number => {
  const parts = value.split(":").reverse();
  if (parts.length === 0) {
    return 0;
  }

  let seconds = parseInt(parts[0], 10);
  if (parts[1]) {
    seconds += parseInt(parts[1], 10) * 60;
  }
  if (parts[2]) {
    seconds += parseInt(parts[2], 10) * 60 * 60;
  }
  return seconds;
};
