import dayjs, { OpUnitType } from 'dayjs';

const DEFAULT_DATE_FORMAT = "MM/DD/YYYY";

export const getToday = (): number => dayjs().startOf("day").unix();

export const getFutureDate = (
  value: number = 1,
  unit: OpUnitType = "month"
): number => dayjs().startOf("day").add(value, unit).unix();

export const formatDate = (
  date: number,
  format: string = DEFAULT_DATE_FORMAT
): string => dayjs(date * 1000).format(format);
