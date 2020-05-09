import dayjs, { OpUnitType } from 'dayjs';

export const DEFAULT_DATE_FORMAT = "MM/dd/yyyy";

export const getDateValue = (date: Date): number =>
  dayjs(date).startOf("day").valueOf();

export const getToday = (): number => dayjs().startOf("day").valueOf();

export const getFutureDate = (
  value: number = 1,
  unit: OpUnitType = "month"
): number => dayjs().startOf("day").add(value, unit).valueOf();

export const formatDate = (
  date: number,
  format: string = DEFAULT_DATE_FORMAT
): string => dayjs(date).format(format);
